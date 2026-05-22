export const CONTENT_GATE_NAMES = [
  'topic-admission',
  'dossier-admission',
  'outline-admission',
  'publish-admission',
  'optimization-admission',
];

export const DEFAULT_SEARCH_INTENTS = [
  ['background', 'Why does this project exist, and what problem was it created to solve?'],
  ['evaluation', 'When should a developer choose this project instead of an alternative?'],
  ['first-workflow', 'How does a developer get from zero to a useful result?'],
  ['concepts', 'Which concepts must a developer understand before using it well?'],
  ['tasks', 'Which practical tasks do users repeatedly search for?'],
  ['tradeoffs', 'What are the advantages, disadvantages, and competing options?'],
  ['troubleshooting', 'What breaks, confuses users, or needs verification against current docs?'],
];

export const DEFAULT_PAGE_MATRIX = [
  ['index', 'Overview', '概览', 'What is this project, and should I keep reading?'],
  ['why-and-when', 'Why and When', '为什么与何时选择', 'Why does this project exist, and when is it the right choice?'],
  ['getting-started', 'Getting Started', '快速开始', 'How do I get from zero to a working result?'],
  ['core-concepts', 'Core Concepts', '核心概念', 'What concepts do I need before using it confidently?'],
  ['common-tasks', 'Common Tasks', '常见任务', 'What do developers usually need to build or configure with it?'],
  ['examples', 'Examples', '示例', 'What does a realistic usage pattern look like?'],
  ['tradeoffs-and-alternatives', 'Tradeoffs and Alternatives', '取舍与替代方案', 'What are the strengths, weaknesses, and competing options?'],
  ['faq', 'FAQ', '常见问题', 'Which questions or doubts repeatedly block adoption?'],
  ['resources', 'Resources', '资源', 'Where should I verify facts and keep learning?'],
];

const OFFICIAL_USAGE = 'fact baseline; verify claims against this source';
const COMMUNITY_USAGE = 'pain and troubleshooting validation; verify before publishing';
const COMPETITOR_USAGE = 'intent extraction only; do not reuse original wording, structure, or unique expression';

export function buildTopicDossier({
  topic,
  urls = topic?.sources || [],
  competitors = topic?.competitors || [],
  serpObservations = topic?.serpObservations || defaultSerpObservations(topic),
  alternatives = topic?.alternatives || competitors,
} = {}) {
  if (!topic?.slug) throw new Error('topic.slug is required.');
  if (!topic?.repo) throw new Error('topic.repo is required.');

  const sourceUrls = unique([
    `https://github.com/${topic.repo}`,
    `https://github.com/${topic.repo}#readme`,
    `https://github.com/${topic.repo}/releases`,
    ...urls,
  ]);

  return {
    version: 1,
    topic: {
      slug: topic.slug,
      title: topic.title || topic.name || topic.slug,
      repo: topic.repo,
      type: 'open-source-project',
      audience: topic.audience || ['developers evaluating, learning, or implementing the project'],
    },
    positioning: {
      primary: 'practical-docs-guide',
      discovery: 'search-entry-matrix',
      qualityBar: 'credible-usable-v1',
    },
    sourcePolicy: {
      official: OFFICIAL_USAGE,
      community: COMMUNITY_USAGE,
      competitor: COMPETITOR_USAGE,
    },
    publicCitationPolicy: {
      style: 'page-footer-sources',
      body: 'natural prose, not paragraph-by-paragraph academic footnotes',
    },
    bilingual: {
      strategy: 'shared-source-differentiated-locales',
      invariant: 'English and Chinese pages share a factual baseline; each locale may add local search questions and resources.',
    },
    geo: {
      policy: 'crawlable-understandable-citable',
      rules: [
        'Use stable URLs, titles, descriptions, headings, sitemap, canonical, and hreflang.',
        'Keep visible answers, sources, limitations, and next steps easy to extract.',
        'Do not create hidden text or AI-only pages as the primary optimization.',
      ],
      references: [
        'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        'https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search',
        'https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites',
        'https://platform.openai.com/docs/gptbot',
      ],
    },
    sources: classifySources({ repo: topic.repo, urls: sourceUrls, competitors }),
    serpObservations,
    alternatives,
    searchIntentMatrix: DEFAULT_SEARCH_INTENTS.map(([id, userQuestion]) => ({ id, userQuestion })),
    pageMatrix: DEFAULT_PAGE_MATRIX.map(([slug, title, zhTitle, userQuestion], index) => ({
      slug,
      title,
      zhTitle,
      order: index + 1,
      userQuestion,
      requiredSections: ['Core answer', 'Limitations', 'Next steps', 'Sources'],
    })),
    contentGates: CONTENT_GATE_NAMES.map((name) => ({ name, description: gateDescription(name) })),
  };
}

export function classifySources({ repo, urls = [], competitors = [] } = {}) {
  const buckets = {
    official: [],
    community: [],
    competitor: [],
    reference: [],
  };

  for (const url of unique(urls)) {
    const source = classifySource({ repo, url, competitors });
    buckets[source.layer].push(source);
  }

  if (!buckets.official.some((source) => source.kind === 'docs')) {
    buckets.official.push({
      layer: 'official',
      kind: 'docs',
      url: '',
      status: 'missing',
      usage: 'official documentation URL required before dossier approval',
    });
  }

  return buckets;
}

export function summarizeDossierReadiness(dossier) {
  const official = dossier.sources?.official || [];
  const community = dossier.sources?.community || [];
  const competitor = dossier.sources?.competitor || [];
  const locales = new Set((dossier.serpObservations || []).map((item) => item.locale).filter(Boolean));
  const missing = [];

  if (!official.some((source) => source.kind === 'repository' && source.url)) missing.push('official repository source');
  if (!official.some((source) => source.kind === 'readme' && source.url)) missing.push('README source');
  if (!official.some((source) => source.kind === 'docs' && source.url)) missing.push('official documentation source');
  if (locales.size < 2) missing.push('multilingual SERP observations');
  if (competitor.length === 0 && (dossier.alternatives || []).length === 0) missing.push('competitor or alternative list');
  if (community.length === 0) missing.push('community pain or troubleshooting source');

  return {
    ready: missing.length === 0,
    missing,
  };
}

function classifySource({ repo, url, competitors }) {
  const normalizedUrl = String(url);
  const lower = normalizedUrl.toLowerCase();
  const repoBase = `github.com/${repo.toLowerCase()}`;

  if (competitors.some((competitor) => normalizedUrl.startsWith(competitor))) {
    return { layer: 'competitor', kind: 'competitor-page', url: normalizedUrl, usage: COMPETITOR_USAGE };
  }
  if (lower.includes(`${repoBase}/issues`) || lower.includes('stackoverflow.com') || lower.includes('reddit.com')) {
    return { layer: 'community', kind: lower.includes('/issues') ? 'issue' : 'community-question', url: normalizedUrl, usage: COMMUNITY_USAGE };
  }
  if (lower === `https://${repoBase}`) {
    return { layer: 'official', kind: 'repository', url: normalizedUrl, usage: OFFICIAL_USAGE };
  }
  if (lower === `https://${repoBase}#readme` || lower.includes('readme')) {
    return { layer: 'official', kind: 'readme', url: normalizedUrl, usage: OFFICIAL_USAGE };
  }
  if (lower.includes(`${repoBase}/releases`)) {
    return { layer: 'official', kind: 'releases', url: normalizedUrl, usage: OFFICIAL_USAGE };
  }
  if (lower.includes('docs') || lower.includes('.dev') || lower.includes('.io')) {
    return { layer: 'official', kind: 'docs', url: normalizedUrl, usage: OFFICIAL_USAGE };
  }
  return { layer: 'reference', kind: 'reference', url: normalizedUrl, usage: 'supporting reference; verify against official sources' };
}

function defaultSerpObservations(topic) {
  const title = topic?.title || topic?.slug || 'topic';
  return [
    { locale: 'en', query: `${title} tutorial`, topResults: [] },
    { locale: 'zh', query: `${title} 教程`, topResults: [] },
    { locale: 'en-IN', query: `${title} examples`, topResults: [] },
  ];
}

function gateDescription(name) {
  return {
    'topic-admission': 'Confirm a real problem, stable sources, search demand, alternatives, and clear audience.',
    'dossier-admission': 'Record official sources, multilingual SERP observations, alternatives, and cross-checked facts.',
    'outline-admission': 'Every page answers a real user question or task and avoids thin keyword-only pages.',
    'publish-admission': 'Every page has metadata, source-linked facts, limitations, next steps, and public sources.',
    'optimization-admission': 'Post-publish work follows Search Console, analytics, SERP changes, and user questions.',
  }[name];
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}
