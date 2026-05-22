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
