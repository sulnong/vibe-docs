import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildTopicDossier,
  classifySources,
  CONTENT_GATE_NAMES,
  summarizeDossierReadiness,
} from '../tools/lib/content-factory.js';

test('buildTopicDossier creates an internal source, intent, and gate record for open-source topics', () => {
  const dossier = buildTopicDossier({
    topic: {
      slug: 'astro',
      title: 'Astro',
      repo: 'withastro/astro',
      sources: ['https://github.com/withastro/astro'],
    },
  });

  assert.equal(dossier.topic.slug, 'astro');
  assert.equal(dossier.topic.type, 'open-source-project');
  assert.equal(dossier.positioning.primary, 'practical-docs-guide');
  assert.equal(dossier.positioning.discovery, 'search-entry-matrix');
  assert.equal(dossier.bilingual.strategy, 'shared-source-differentiated-locales');
  assert.equal(dossier.geo.policy, 'crawlable-understandable-citable');
  assert.deepEqual(dossier.publicCitationPolicy, {
    style: 'page-footer-sources',
    body: 'natural prose, not paragraph-by-paragraph academic footnotes',
  });

  assert.ok(dossier.sources.official.some((source) => source.kind === 'repository'));
  assert.ok(dossier.sources.official.some((source) => source.kind === 'readme'));
  assert.ok(dossier.sources.official.some((source) => source.kind === 'docs'));
  assert.ok(dossier.sources.official.some((source) => source.kind === 'releases'));
  assert.ok(dossier.searchIntentMatrix.length >= 6);
  assert.ok(dossier.pageMatrix.some((page) => page.slug === 'why-and-when'));
  assert.ok(dossier.pageMatrix.every((page) => page.userQuestion));
  assert.deepEqual(dossier.contentGates.map((gate) => gate.name), CONTENT_GATE_NAMES);
});

test('classifySources keeps official facts, competitor intent, and community pain separate', () => {
  const sources = classifySources({
    repo: 'owner/tool',
    urls: [
      'https://tool.dev/docs',
      'https://github.com/owner/tool',
      'https://competitor.example/tool-alternative',
      'https://github.com/owner/tool/issues/10',
      'https://stackoverflow.com/questions/123/tool-error',
    ],
    competitors: ['https://competitor.example/tool-alternative'],
  });

  assert.ok(sources.official.some((source) => source.url === 'https://github.com/owner/tool'));
  assert.ok(sources.official.some((source) => source.url === 'https://tool.dev/docs'));
  assert.ok(sources.competitor.some((source) => source.url === 'https://competitor.example/tool-alternative'));
  assert.ok(sources.community.some((source) => source.url.includes('/issues/10')));
  assert.ok(sources.community.some((source) => source.url.includes('stackoverflow.com')));
  assert.equal(sources.competitor[0].usage, 'intent extraction only; do not reuse original wording, structure, or unique expression');
});

test('summarizeDossierReadiness reports missing gates before publication', () => {
  const dossier = buildTopicDossier({
    topic: {
      slug: 'thin',
      title: 'Thin',
      repo: 'owner/thin',
      sources: ['https://github.com/owner/thin'],
    },
    serpObservations: [{ locale: 'en', query: 'thin tutorial', topResults: [] }],
  });

  const readiness = summarizeDossierReadiness(dossier);

  assert.equal(readiness.ready, false);
  assert.match(readiness.missing.join('\n'), /multilingual SERP observations/i);
  assert.match(readiness.missing.join('\n'), /competitor or alternative/i);
});
