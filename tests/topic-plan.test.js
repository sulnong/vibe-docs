import assert from 'node:assert/strict';
import test from 'node:test';

import { buildTopicPlan, renderTopicOutlineReport } from '../tools/lib/topic-plan.js';

test('buildTopicPlan creates detailed bilingual URL and page organization', () => {
  const plan = buildTopicPlan({
    topic: 'Astro',
    repo: 'withastro/astro',
    officialDocs: ['https://docs.astro.build/'],
    competitors: ['https://nextjs.org/docs'],
    serpNotes: ['English SERP mixes official docs, tutorials, and comparisons.'],
  });

  assert.equal(plan.slug, 'astro');
  assert.equal(plan.routes.enBase, '/en/astro/');
  assert.equal(plan.routes.zhBase, '/zh/astro/');
  assert.ok(plan.pages.length >= 8);
  assert.ok(plan.pages.every((page) => page.paths.en.startsWith('/en/astro/')));
  assert.ok(plan.pages.every((page) => page.paths.zh.startsWith('/zh/astro/')));
  assert.ok(plan.pages.every((page) => page.sections.length >= 4));
  assert.ok(plan.pages.every((page) => page.sourceNeeds.length >= 2));
  assert.ok(plan.pages.every((page) => page.uniqueAngle));
});

test('renderTopicOutlineReport includes reviewable source map and detailed pages', () => {
  const plan = buildTopicPlan({
    topic: 'Astro',
    repo: 'withastro/astro',
    officialDocs: ['https://docs.astro.build/'],
    extraSources: ['https://astro.build/blog/'],
    competitors: ['https://nextjs.org/docs'],
    uniqueAngles: ['Use source-level examples to explain when islands are unnecessary.'],
  });

  const markdown = renderTopicOutlineReport(plan);

  assert.match(markdown, /^# Astro 选题大纲报告/m);
  assert.match(markdown, /## 页面与 URL 设计/);
  assert.match(markdown, /\/en\/astro\//);
  assert.match(markdown, /\/zh\/astro\//);
  assert.match(markdown, /来源需求/);
  assert.match(markdown, /差异化内容/);
  assert.match(markdown, /人工审核问题/);
});
