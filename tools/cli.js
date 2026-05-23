#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

import { checkTopicContent, listTopics } from './lib/checks.js';
import { writeDraftTopic } from './lib/draft.js';
import { fetchGitHubRepo, parseRepoSlug } from './lib/github.js';
import { buildTopicPlan, renderTopicOutlineReport } from './lib/topic-plan.js';

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
    case 'research':
      await research(options);
      break;
    case 'draft':
      await draft(options);
      break;
    case 'check':
      await check(options);
      break;
    case 'help':
    case undefined:
      printHelp();
      break;
    default:
      throw new Error(`未知命令 "${cmd}"。运行 node tools/cli.js help 查看可用命令。`);
  }
}

async function research(options) {
  if (!options.topic) throw new Error('research 需要 --topic <name>。');

  const repo = options.repo ? await repoFromInput(options.repo) : null;
  const officialDocs = [
    ...listOption(options.officialDocs),
    ...(repo?.homepage ? [repo.homepage] : []),
  ];
  const plan = buildTopicPlan({
    topic: options.topic,
    slug: options.slug || repo?.slug,
    repo: repo?.repo || options.repo,
    officialDocs,
    extraSources: listOption(options.source),
    competitors: listOption(options.competitor),
    serpNotes: listOption(options.serpNote),
    uniqueAngles: listOption(options.uniqueAngle),
  });
  const output = renderTopicOutlineReport(plan);
  const out = options.out || `content-plans/${plan.slug}/outline.md`;

  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, output);
  console.log(`wrote ${out}`);
}

async function draft(options) {
  if (!options.topic) throw new Error('draft 需要 --topic <name>。');
  const repo = options.repo ? parseRepoSlug(options.repo).fullName : '';
  if (!repo) throw new Error('draft 需要 --repo owner/name。');

  const plan = await writeDraftTopic({
    docsRoot: options.docsRoot || 'src/content/docs',
    topic: {
      slug: options.slug,
      title: options.topic,
      repo,
      officialDocs: listOption(options.officialDocs),
      competitors: listOption(options.competitor),
    },
  });
  console.log(`drafted ${plan.pages.length} pages per locale for ${plan.slug}`);
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

async function repoFromInput(input) {
  try {
    return await fetchGitHubRepo(input);
  } catch {
    const repo = parseRepoSlug(input);
    return {
      repo: repo.fullName,
      name: repo.name,
      slug: repo.slug,
      homepage: '',
      url: `https://github.com/${repo.fullName}`,
    };
  }
}

function parseArgs(argv) {
  const parsed = {};
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith('--')) continue;
    const key = arg.slice(2).replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    const next = argv[index + 1];
    if (!next || next.startsWith('--')) {
      parsed[key] = true;
    } else if (parsed[key]) {
      parsed[key] = Array.isArray(parsed[key]) ? [...parsed[key], next] : [parsed[key], next];
      index += 1;
    } else {
      parsed[key] = next;
      index += 1;
    }
  }
  return parsed;
}

function listOption(value) {
  if (!value) return [];
  const values = Array.isArray(value) ? value : [value];
  return values.flatMap((item) => String(item).split(',')).map((item) => item.trim()).filter(Boolean);
}

function printHelp() {
  console.log(`agent 内容工具

  research --topic "Astro" --repo withastro/astro
      生成选题大纲报告，默认写入 content-plans/<slug>/outline.md。

  draft --topic "Astro" --repo withastro/astro
      在人工审核报告后，生成中英文 Markdown 草稿。

  check [--topic slug]
      检查已生成文档的双语页面、metadata、来源链接和占位内容。

常用补充参数：

  --official-docs <url>      官方文档 URL，可重复或用逗号分隔
  --source <url>             补充来源，可重复或用逗号分隔
  --competitor <url>         竞品或 SERP 页面，可重复或用逗号分隔
  --serp-note <text>         SERP 观察备注，可重复
  --unique-angle <text>      差异化内容方向，可重复
  --out <path>               research 输出路径
`);
}
