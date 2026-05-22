#!/usr/bin/env node
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

import { checkTopicContent, listTopics } from './lib/checks.js';
import { buildTopicDossier, summarizeDossierReadiness } from './lib/content-factory.js';
import { writeDraftTopic } from './lib/draft.js';
import { discoverRepos, fetchGitHubRepo, parseRepoSlug } from './lib/github.js';
import { summarizeGscCsv } from './lib/gsc.js';
import { buildOutline } from './lib/outline.js';
import { DEFAULT_QUEUE_PATH, findTopic, readQueue, upsertTopic, writeQueue } from './lib/queue.js';
import { scoreCandidate } from './lib/scoring.js';

const args = process.argv.slice(2);
const command = args[0];
const options = parseArgs(args.slice(1));

try {
  await main(command, options);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}

async function main(cmd, options) {
  switch (cmd) {
    case 'discover':
      await discover(options);
      break;
    case 'score':
      await score(options);
      break;
    case 'dossier':
      await dossier(options);
      break;
    case 'outline':
      await outline(options);
      break;
    case 'draft':
      await draft(options);
      break;
    case 'check':
      await check(options);
      break;
    case 'import-gsc':
      await importGsc(options);
      break;
    case 'report':
      await report(options);
      break;
    case 'help':
    case undefined:
      printHelp();
      break;
    default:
      throw new Error(`Unknown command "${cmd}". Run trend-docs help.`);
  }
}

async function discover(options) {
  const queue = await readQueue(options.queue);
  const repos = options.repo
    ? [await repoFromInput(options.repo)]
    : await discoverRepos({ query: options.query, limit: options.limit || 10 });

  for (const repo of repos) {
    const topic = upsertTopic(queue, {
      slug: repo.slug,
      title: repo.name,
      repo: repo.repo,
      status: 'candidate',
      github: {
        trendingRank: repo.trendingRank,
        stars: repo.stars,
        pushedAt: repo.pushedAt,
        latestReleaseAt: repo.latestReleaseAt,
      },
      seo: defaultSeoSignals(),
      methodology: defaultMethodology(),
      sources: [repo.url],
    });
    console.log(`queued ${topic.repo} as ${topic.slug}`);
  }
  await writeQueue(queue, options.queue);
}

async function score(options) {
  const queue = await readQueue(options.queue);
  const targets = options.topic ? [findTopic(queue, options.topic)].filter(Boolean) : queue.topics;
  if (targets.length === 0) throw new Error('No topics to score.');

  for (const topic of targets) {
    const scoring = scoreCandidate(topic);
    topic.score = scoring;
    topic.status = scoring.recommendation === 'approve-outline' ? 'dossier-review' : 'candidate';
    topic.updatedAt = new Date().toISOString();
    console.log(`${topic.slug}: ${scoring.total}/100 ${scoring.recommendation}`);
  }
  await writeQueue(queue, options.queue);
}

async function outline(options) {
  const queue = await readQueue(options.queue);
  const topic = findTopic(queue, options.topic);
  if (!topic) throw new Error(`Topic not found: ${options.topic}`);
  const topicOutline = buildOutline({
    topicSlug: topic.slug,
    title: topic.title,
    repo: topic.repo,
    sources: topic.sources || [`https://github.com/${topic.repo}`],
  });
  const out = options.out || `workflow/outlines/${topic.slug}.json`;
  await writeJson(out, topicOutline);
  topic.outlinePath = out;
  topic.status = 'outline-review';
  topic.updatedAt = new Date().toISOString();
  await writeQueue(queue, options.queue);
  console.log(`wrote ${out}`);
}

async function dossier(options) {
  const queue = await readQueue(options.queue);
  const topic = findTopic(queue, options.topic);
  if (!topic) throw new Error(`Topic not found: ${options.topic}`);

  const topicDossier = buildTopicDossier({ topic });
  const readiness = summarizeDossierReadiness(topicDossier);
  topicDossier.readiness = readiness;

  const out = options.out || `workflow/dossiers/${topic.slug}.json`;
  await writeJson(out, topicDossier);
  topic.dossierPath = out;
  topic.methodology = topic.methodology || defaultMethodology();
  topic.status = readiness.ready ? 'dossier-review' : 'candidate';
  topic.updatedAt = new Date().toISOString();
  await writeQueue(queue, options.queue);

  console.log(`wrote ${out}`);
  if (!readiness.ready) console.log(`dossier needs: ${readiness.missing.join(', ')}`);
}

async function draft(options) {
  const queue = await readQueue(options.queue);
  const topic = findTopic(queue, options.topic);
  if (!topic) throw new Error(`Topic not found: ${options.topic}`);
  const topicOutline = await writeDraftTopic({ docsRoot: options.docsRoot || 'src/content/docs', topic });
  const out = options.out || `workflow/outlines/${topic.slug}.json`;
  await writeJson(out, topicOutline);
  topic.outlinePath = out;
  topic.status = 'draft-review';
  topic.updatedAt = new Date().toISOString();
  await writeQueue(queue, options.queue);
  console.log(`drafted ${topicOutline.pageCount} pages per locale for ${topic.slug}`);
}

async function check(options) {
  const docsRoot = options.docsRoot || 'src/content/docs';
  const topics = options.topic ? [options.topic] : await listTopics({ docsRoot });
  if (topics.length === 0) throw new Error('No topics found to check.');

  let ok = true;
  for (const topicSlug of topics) {
    const result = await checkTopicContent({ docsRoot, topicSlug });
    if (result.ok) {
      console.log(`ok ${topicSlug}`);
    } else {
      ok = false;
      console.error(`failed ${topicSlug}`);
      for (const failure of result.failures) console.error(`- ${failure}`);
    }
    for (const warning of result.warnings) console.warn(`warning: ${warning}`);
  }
  if (!ok) process.exitCode = 1;
}

async function importGsc(options) {
  if (!options.file) throw new Error('Use --file <gsc.csv>.');
  const csv = await readFile(options.file, 'utf8');
  const summary = summarizeGscCsv(csv, { siteUrl: options.siteUrl || 'https://example.com' });
  const out = options.out || 'workflow/metrics/gsc-summary.json';
  await writeJson(out, summary);
  console.log(`wrote ${out}`);
}

async function report(options) {
  const queue = await readQueue(options.queue);
  const metricsPath = options.metrics || 'workflow/metrics/gsc-summary.json';
  const metrics = await readJson(metricsPath).catch(() => ({ topics: {} }));
  const lines = ['# Trend Docs Report', ''];
  for (const topic of queue.topics) {
    const topicMetrics = metrics.topics?.[topic.slug];
    lines.push(`## ${topic.title || topic.slug}`);
    lines.push('');
    lines.push(`- Repo: ${topic.repo}`);
    lines.push(`- Status: ${topic.status}`);
    lines.push(`- Score: ${topic.score?.total ?? 'not scored'}`);
    if (topicMetrics) {
      lines.push(`- GSC clicks: ${topicMetrics.clicks}`);
      lines.push(`- GSC impressions: ${topicMetrics.impressions}`);
      lines.push(`- GSC CTR: ${(topicMetrics.ctr * 100).toFixed(2)}%`);
    }
    lines.push('');
  }
  const output = lines.join('\n');
  if (options.out) {
    await mkdir(dirname(options.out), { recursive: true });
    await writeFile(options.out, output);
    console.log(`wrote ${options.out}`);
  } else {
    console.log(output);
  }
}

async function repoFromInput(input) {
  try {
    return await fetchGitHubRepo(input);
  } catch {
    const repo = parseRepoSlug(input);
    return {
      repo: repo.fullName,
      name: repo.name,
      slug: repo.slug,
      url: `https://github.com/${repo.fullName}`,
      stars: 0,
      pushedAt: '',
      latestReleaseAt: '',
      trendingRank: 1,
    };
  }
}

function defaultSeoSignals() {
  return {
    serpCompetition: 'unknown',
    englishGap: 'unknown',
    chineseGap: 'unknown',
    tutorialIntent: 'unknown',
    notes: 'Fill from manual or semi-automated SERP review before outline approval.',
  };
}

function defaultMethodology() {
  return {
    topicType: 'open-source-project',
    primary: 'question-intent-first',
    qualityBar: 'credible-usable-v1',
    bilingualStrategy: 'shared-source-differentiated-locales',
    geoPolicy: 'crawlable-understandable-citable',
    publicCitationPolicy: 'page-footer-sources',
    competitorUse: 'intent-extraction-only',
  };
}

function parseArgs(argv) {
  const parsed = { queue: DEFAULT_QUEUE_PATH };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith('--')) continue;
    const key = arg.slice(2).replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    const next = argv[index + 1];
    if (!next || next.startsWith('--')) {
      parsed[key] = true;
    } else {
      parsed[key] = next;
      index += 1;
    }
  }
  return parsed;
}

async function writeJson(path, value) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
}

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

function printHelp() {
  console.log(`trend-docs commands

  discover --repo owner/name              Add a GitHub repository candidate
  discover --query "stars:>500"           Discover public GitHub candidates
  score [--topic slug]                    Score queued candidates
  dossier --topic slug                    Write internal source and intent dossier JSON
  outline --topic slug                    Write bilingual topic outline JSON
  draft --topic slug                      Generate reviewable bilingual Markdown drafts
  check [--topic slug]                    Run release quality gates
  import-gsc --file export.csv            Summarize Google Search Console CSV
  report [--out workflow/reports/run.md]  Print or write a topic performance report
`);
}
