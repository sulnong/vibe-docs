import assert from 'node:assert/strict';
import test from 'node:test';

import { summarizeGscCsv } from '../tools/lib/gsc.js';

test('summarizeGscCsv groups Search Console rows by topic and locale', () => {
  const csv = `Query,Page,Clicks,Impressions,CTR,Position
"astro docs","https://example.com/en/astro/getting-started/",12,240,5%,6.2
"astro 中文","https://example.com/zh/astro/getting-started/",5,100,5%,8.1
"astro docs","https://example.com/en/astro/overview/",2,80,2.5%,12`;

  const summary = summarizeGscCsv(csv, { siteUrl: 'https://example.com' });

  assert.equal(summary.topics.astro.clicks, 19);
  assert.equal(summary.topics.astro.impressions, 420);
  assert.equal(summary.topics.astro.locales.en.clicks, 14);
  assert.equal(summary.topics.astro.locales.zh.clicks, 5);
  assert.equal(summary.topics.astro.topQueries[0].query, 'astro docs');
});
