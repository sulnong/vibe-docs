export const CONTENT_GATE_NAMES = [
  'topic-admission',
  'dossier-admission',
  'outline-admission',
  'publish-admission',
  'optimization-admission',
];

export const DEFAULT_SEARCH_INTENTS = [
  {
    id: 'background',
    label: 'Background and origin',
    userQuestion: 'Why does this project exist, and what problem was it created to solve?',
  },
  {
    id: 'evaluation',
    label: 'Evaluation',
    userQuestion: 'When should a developer choose this project instead of an alternative?',
  },
  {
    id: 'first-workflow',
    label: 'First useful workflow',
    userQuestion: 'How does a developer get from zero to a useful result?',
  },
  {
    id: 'concepts',
    label: 'Mental model',
    userQuestion: 'Which concepts must a developer understand before using it well?',
  },
  {
    id: 'tasks',
    label: 'Common implementation tasks',
    userQuestion: 'Which practical tasks do users repeatedly search for?',
  },
  {
    id: 'tradeoffs',
    label: 'Tradeoffs and alternatives',
    userQuestion: 'What are the advantages, disadvantages, and competing options?',
  },
  {
    id: 'troubleshooting',
    label: 'Troubleshooting',
    userQuestion: 'What breaks, confuses users, or needs verification against current docs?',
  },
];

export const DEFAULT_PAGE_MATRIX = [
  {
    slug: 'index',
    title: 'Overview',
    zhTitle: '概览',
    purpose: 'Explain what the project does, who it is for, and the fastest trustworthy path through the guide.',
    userQuestion: 'What is this project, and should I keep reading?',
  },
  {
    slug: 'why-and-when',
    title: 'Why and When',
    zhTitle: '为什么与何时选择',
    purpose: 'Cover background, origin, solved problems, fit, and non-fit cases.',
    userQuestion: 'Why does this project exist, and when is it the right choice?',
  },
  {
    slug: 'getting-started',
    title: 'Getting Started',
    zhTitle: '快速开始',
    purpose: 'Install the project and complete the first useful workflow.',
    userQuestion: 'How do I get from zero to a working result?',
  },
  {
    slug: 'core-concepts',
    title: 'Core Concepts',
    zhTitle: '核心概念',
    purpose: 'Explain the vocabulary and mental model behind the project.',
    userQuestion: 'What concepts do I need before using it confidently?',
  },
  {
    slug: 'common-tasks',
    title: 'Common Tasks',
    zhTitle: '常见任务',
    purpose: 'Map recurring search needs to practical implementation paths.',
    userQuestion: 'What do developers usually need to build or configure with it?',
  },
  {
    slug: 'examples',
    title: 'Examples',
    zhTitle: '示例',
    purpose: 'Collect realistic examples readers can adapt and verify.',
    userQuestion: 'What does a realistic usage pattern look like?',
  },
  {
    slug: 'tradeoffs-and-alternatives',
    title: 'Tradeoffs and Alternatives',
    zhTitle: '取舍与替代方案',
    purpose: 'Compare alternatives and explain selection tradeoffs.',
    userQuestion: 'What are the strengths, weaknesses, and competing options?',
  },
  {
    slug: 'faq',
    title: 'FAQ',
    zhTitle: '常见问题',
    purpose: 'Answer common adoption, migration, and troubleshooting questions.',
    userQuestion: 'Which questions or doubts repeatedly block adoption?',
  },
  {
    slug: 'resources',
    title: 'Resources',
    zhTitle: '资源',
    purpose: 'Link official docs, releases, examples, and source references.',
    userQuestion: 'Where should I verify facts and keep learning?',
  },
];

export const REQUIRED_RELEASE_SECTIONS = ['Core answer', 'Limitations', 'Next steps', 'Sources'];

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
      invariant: 'English and Chinese pages share factual baseline and differ only for local search questions, resources, and wording.',
    },
    geo: {
      policy: 'crawlable-understandable-citable',
      rules: [
        'Use stable URLs, titles, descriptions, headings, sitemap, canonical, and hreflang.',
        'Keep visible answers, sources, limitations, and next steps easy to extract.',
        'Do not create hidden text, AI-only pages, or llms.txt-style promises as the primary optimization.',
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
    searchIntentMatrix: DEFAULT_SEARCH_INTENTS,
    pageMatrix: DEFAULT_PAGE_MATRIX.map((page, index) => ({
      ...page,
      order: index + 1,
      requiredSections: REQUIRED_RELEASE_SECTIONS,
    })),
    contentGates: CONTENT_GATE_NAMES.map(buildGate),
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
      usage: 'official documentation URL required before dossier approval',
      status: 'missing',
    });
  }

  return buckets;
}

export function summarizeDossierReadiness(dossier) {
  const missing = [];
  const official = dossier.sources?.official || [];
  const community = dossier.sources?.community || [];
  const competitor = dossier.sources?.competitor || [];
  const observations = dossier.serpObservations || [];
  const locales = new Set(observations.map((item) => item.locale).filter(Boolean));

  if (!official.some((source) => source.kind === 'repository')) {
    missing.push('official repository source');
  }
  if (!official.some((source) => source.kind === 'readme')) {
    missing.push('README source');
  }
  if (!official.some((source) => source.kind === 'docs' && source.url)) {
    missing.push('official documentation source');
  }
  if (locales.size < 2) {
    missing.push('multilingual SERP observations');
  }
  if (competitor.length === 0 && (dossier.alternatives || []).length === 0) {
    missing.push('competitor or alternative list');
  }
  if (community.length === 0) {
    missing.push('community pain or troubleshooting source');
  }

  return {
    ready: missing.length === 0,
    missing,
  };
}

function classifySource({ repo, url, competitors }) {
  const normalizedUrl = String(url);
  const lower = normalizedUrl.toLowerCase();
  const isRepo = lower === `https://github.com/${repo}`.toLowerCase();
  const isReadme = lower === `https://github.com/${repo}#readme`.toLowerCase() || /readme/i.test(normalizedUrl);
  const isRelease = lower.includes(`github.com/${repo.toLowerCase()}/releases`);
  const isIssue = lower.includes(`github.com/${repo.toLowerCase()}/issues`);
  const isCompetitor = competitors.some((competitor) => normalizedUrl.startsWith(competitor));
  const isCommunity = isIssue || lower.includes('stackoverflow.com') || lower.includes('reddit.com') || lower.includes('github.com/discussions');

  if (isCompetitor) {
    return { layer: 'competitor', kind: 'competitor-page', url: normalizedUrl, usage: COMPETITOR_USAGE };
  }
  if (isCommunity) {
    return { layer: 'community', kind: isIssue ? 'issue' : 'community-question', url: normalizedUrl, usage: COMMUNITY_USAGE };
  }
  if (isRepo) {
    return { layer: 'official', kind: 'repository', url: normalizedUrl, usage: OFFICIAL_USAGE };
  }
  if (isReadme) {
    return { layer: 'official', kind: 'readme', url: normalizedUrl, usage: OFFICIAL_USAGE };
  }
  if (isRelease) {
    return { layer: 'official', kind: 'releases', url: normalizedUrl, usage: OFFICIAL_USAGE };
  }
  if (lower.includes('docs') || lower.includes('.dev') || lower.includes('.io')) {
    return { layer: 'official', kind: 'docs', url: normalizedUrl, usage: OFFICIAL_USAGE };
  }
  return { layer: 'reference', kind: 'reference', url: normalizedUrl, usage: 'supporting reference; verify against official sources' };
}

function buildGate(name) {
  const descriptions = {
    'topic-admission': 'The topic has a real problem, stable sources, search demand, alternatives, and a clear audience.',
    'dossier-admission': 'Official sources, multilingual SERP observations, alternatives, and cross-checked facts are recorded.',
    'outline-admission': 'Every page answers a real user question or task and avoids thin keyword-only pages.',
    'publish-admission': 'Every page has metadata, a core answer, limitations, next steps, and public sources.',
    'optimization-admission': 'Post-publish work follows Search Console, analytics, SERP changes, and user questions.',
  };

  return {
    name,
    description: descriptions[name],
  };
}

function defaultSerpObservations(topic) {
  const title = topic?.title || topic?.slug || 'topic';
  return [
    {
      locale: 'en',
      query: `${title} tutorial`,
      role: 'identify English tutorial, comparison, and troubleshooting intent',
      topResults: [],
    },
    {
      locale: 'zh',
      query: `${title} 教程`,
      role: 'identify Chinese search language, gaps, and localized questions',
      topResults: [],
    },
    {
      locale: 'en-IN',
      query: `${title} examples`,
      role: 'sample India/English ecosystem wording and practical task intent',
      topResults: [],
    },
  ];
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}
