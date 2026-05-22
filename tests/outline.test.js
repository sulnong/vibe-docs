import assert from 'node:assert/strict';
import test from 'node:test';

import { buildOutline } from '../tools/lib/outline.js';

test('buildOutline creates matching 8-15 page bilingual topic maps', () => {
  const outline = buildOutline({
    topicSlug: 'astro',
    title: 'Astro',
    repo: 'withastro/astro',
    sources: ['https://github.com/withastro/astro'],
  });

  assert.equal(outline.topicSlug, 'astro');
  assert.ok(outline.pages.length >= 8);
  assert.ok(outline.pages.length <= 15);
  assert.deepEqual(
    outline.pages.map((page) => page.slug),
    outline.translations.zh.map((page) => page.slug),
  );
  assert.equal(outline.locales.en.basePath, '/en/astro/');
  assert.equal(outline.locales.zh.basePath, '/zh/astro/');
});

test('buildOutline uses question-intent pages instead of mirroring official docs', () => {
  const outline = buildOutline({
    topicSlug: 'astro',
    title: 'Astro',
    repo: 'withastro/astro',
    sources: ['https://github.com/withastro/astro'],
  });

  assert.deepEqual(
    outline.methodology,
    {
      primary: 'question-intent-first',
      qualityBar: 'credible-usable-v1',
      sourcePolicy: 'official-facts-competitors-for-intent-community-for-pain',
    },
  );
  assert.ok(outline.pages.every((page) => page.userQuestion));
  assert.ok(outline.pages.every((page) => page.requiredSections.includes('Sources')));
  assert.ok(outline.pages.every((page) => page.requiredSections.includes('Limitations')));
  assert.ok(outline.pages.every((page) => page.requiredSections.includes('Next steps')));
  assert.ok(outline.pages.some((page) => page.slug === 'why-and-when'));
  assert.ok(outline.pages.some((page) => page.slug === 'tradeoffs-and-alternatives'));
  assert.ok(outline.pages.some((page) => page.slug === 'faq'));
  assert.ok(outline.translations.zh.every((page) => page.localeAdaptation));
});
