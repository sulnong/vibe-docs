import { buildTopicDossier } from './content-factory.js';

export const DEFAULT_PAGES = buildTopicDossier({
  topic: {
    slug: 'topic',
    title: 'Topic',
    repo: 'owner/topic',
  },
}).pageMatrix.map((page) => [page.slug, page.title, page.purpose, page.userQuestion]);

export function buildOutline({ topicSlug, title, repo, sources = [] }) {
  if (!topicSlug) throw new Error('topicSlug is required.');
  if (!title) throw new Error('title is required.');
  if (!repo) throw new Error('repo is required.');

  const dossier = buildTopicDossier({
    topic: {
      slug: topicSlug,
      title,
      repo,
      sources,
    },
  });

  const pages = dossier.pageMatrix.map((page, index) => ({
    slug: page.slug,
    title: page.title,
    navTitle: page.title,
    order: index + 1,
    purpose: page.purpose,
    userQuestion: page.userQuestion,
    intent: page.intent || page.slug,
    requiredSections: page.requiredSections,
    targetKeywords: keywordSet(title, page.title, page.userQuestion),
  }));

  const translations = dossier.pageMatrix.map((page, index) => ({
    slug: page.slug,
    title: page.zhTitle || page.title,
    navTitle: page.zhTitle || page.title,
    order: index + 1,
    purpose: page.purpose,
    userQuestion: page.userQuestion,
    intent: page.intent || page.slug,
    requiredSections: page.requiredSections,
    targetKeywords: keywordSet(title, page.zhTitle || page.title, page.userQuestion),
    localeAdaptation: 'Share factual baseline with English and add Chinese search language, resources, and common questions where useful.',
  }));

  return {
    topicSlug,
    title,
    repo,
    methodology: {
      primary: 'question-intent-first',
      qualityBar: 'credible-usable-v1',
      sourcePolicy: 'official-facts-competitors-for-intent-community-for-pain',
    },
    pageCount: pages.length,
    locales: {
      en: { label: 'English', basePath: `/en/${topicSlug}/` },
      zh: { label: '简体中文', basePath: `/zh/${topicSlug}/` },
    },
    pages,
    translations: {
      zh: translations,
    },
    searchIntentMatrix: dossier.searchIntentMatrix,
    contentGates: dossier.contentGates,
    sources,
  };
}

function keywordSet(title, pageTitle, userQuestion = '') {
  const base = title.toLowerCase();
  const page = pageTitle.toLowerCase();
  const questionWords = userQuestion
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .split(/\s+/)
    .filter((word) => word.length > 3)
    .slice(0, 3)
    .join(' ');
  return [
    `${base} ${page}`,
    `${base} tutorial`,
    `${base} documentation`,
    questionWords ? `${base} ${questionWords}` : `${base} guide`,
  ];
}
