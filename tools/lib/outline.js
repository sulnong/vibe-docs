export const DEFAULT_PAGES = [
  ['index', 'Overview', 'What the project does, who it is for, and when to use it.'],
  ['getting-started', 'Getting Started', 'Install the project and complete the first useful workflow.'],
  ['core-concepts', 'Core Concepts', 'Explain the vocabulary and mental model behind the project.'],
  ['installation', 'Installation', 'Cover supported runtimes, package managers, and environment setup.'],
  ['configuration', 'Configuration', 'Document configuration files, flags, and common presets.'],
  ['tutorials', 'Tutorials', 'Walk through practical tasks from beginner to intermediate level.'],
  ['examples', 'Examples', 'Collect realistic examples readers can adapt.'],
  ['comparisons', 'Comparisons', 'Compare alternatives and explain selection tradeoffs.'],
  ['faq', 'FAQ', 'Answer common adoption, migration, and troubleshooting questions.'],
  ['resources', 'Resources', 'Link official docs, releases, examples, and source references.'],
];

const ZH_TITLES = {
  Overview: '概览',
  'Getting Started': '快速开始',
  'Core Concepts': '核心概念',
  Installation: '安装',
  Configuration: '配置',
  Tutorials: '教程',
  Examples: '示例',
  Comparisons: '对比',
  FAQ: '常见问题',
  Resources: '资源',
};

export function buildOutline({ topicSlug, title, repo, sources = [] }) {
  if (!topicSlug) throw new Error('topicSlug is required.');
  if (!title) throw new Error('title is required.');
  if (!repo) throw new Error('repo is required.');

  const pages = DEFAULT_PAGES.map(([slug, pageTitle, purpose], index) => ({
    slug,
    title: pageTitle,
    navTitle: pageTitle,
    order: index + 1,
    purpose,
    targetKeywords: keywordSet(title, pageTitle),
  }));

  return {
    topicSlug,
    title,
    repo,
    pageCount: pages.length,
    locales: {
      en: { label: 'English', basePath: `/en/${topicSlug}/` },
      zh: { label: '简体中文', basePath: `/zh/${topicSlug}/` },
    },
    pages,
    translations: {
      zh: pages.map((page) => ({
        ...page,
        title: ZH_TITLES[page.title] || page.title,
        navTitle: ZH_TITLES[page.navTitle] || page.navTitle,
      })),
    },
    sources,
  };
}

function keywordSet(title, pageTitle) {
  const base = title.toLowerCase();
  const page = pageTitle.toLowerCase();
  return [
    `${base} ${page}`,
    `${base} tutorial`,
    `${base} documentation`,
  ];
}
