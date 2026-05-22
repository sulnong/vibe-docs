import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';

import { checkTopicContent } from '../tools/lib/checks.js';
import { buildOutline } from '../tools/lib/outline.js';
import { writeDraftTopic } from '../tools/lib/draft.js';

test('checkTopicContent enforces bilingual pages, metadata, citations, and banned placeholders', async () => {
  const root = await makeTempDir('trend-docs-check-');
  const outline = buildOutline({
    topicSlug: 'sample',
    title: 'Sample Project',
    repo: 'owner/sample',
    sources: ['https://github.com/owner/sample'],
  });

  await mkdir(join(root, 'en', 'sample'), { recursive: true });
  await mkdir(join(root, 'zh', 'sample'), { recursive: true });

  for (const page of outline.pages) {
    const body = makePage(page.title, 'Reference: https://github.com/owner/sample');
    await writeFile(join(root, 'en', 'sample', `${page.slug}.md`), body);
    await writeFile(join(root, 'zh', 'sample', `${page.slug}.md`), body);
  }

  const passing = await checkTopicContent({ docsRoot: root, topicSlug: 'sample' });
  assert.equal(passing.ok, true);

  await writeFile(join(root, 'zh', 'sample', `${outline.pages[0].slug}.md`), makePage('Bad', 'TODO'));
  const failing = await checkTopicContent({ docsRoot: root, topicSlug: 'sample' });
  assert.equal(failing.ok, false);
  assert.match(failing.failures.join('\n'), /placeholder/i);
});

test('checkTopicContent enforces credible usable release sections', async () => {
  const root = await makeTempDir('trend-docs-release-gates-');
  const outline = buildOutline({
    topicSlug: 'sample',
    title: 'Sample Project',
    repo: 'owner/sample',
    sources: ['https://github.com/owner/sample'],
  });

  await mkdir(join(root, 'en', 'sample'), { recursive: true });
  await mkdir(join(root, 'zh', 'sample'), { recursive: true });

  for (const page of outline.pages) {
    await writeFile(join(root, 'en', 'sample', `${page.slug}.md`), makeReleaseReadyPage(page.title));
    await writeFile(join(root, 'zh', 'sample', `${page.slug}.md`), makeReleaseReadyPage(page.title));
  }

  const passing = await checkTopicContent({ docsRoot: root, topicSlug: 'sample' });
  assert.equal(passing.ok, true);

  const broken = makeReleaseReadyPage(outline.pages[0].title).replace(
    '\n## Limitations\n\nThe page should name tradeoffs, unsupported use cases, or details that require checking current official docs.\n',
    '\n## Notes\n\nThis page is short but does not name any selection boundary.\n',
  );
  await writeFile(join(root, 'en', 'sample', `${outline.pages[0].slug}.md`), broken);

  const failing = await checkTopicContent({ docsRoot: root, topicSlug: 'sample' });
  assert.equal(failing.ok, false);
  assert.match(failing.failures.join('\n'), /limitations, tradeoffs, alternatives, or troubleshooting signals/);
});

test('writeDraftTopic quotes frontmatter values that contain colons', async () => {
  const root = await makeTempDir('trend-docs-draft-');

  await writeDraftTopic({
    docsRoot: root,
    topic: {
      slug: 'colon-demo',
      title: 'Project: Demo',
      repo: 'owner/colon-demo',
    },
  });

  const content = await readFile(join(root, 'en', 'colon-demo', 'configuration.md'), 'utf8');
  assert.match(content, /^title: "Configuration"/m);
  assert.match(content, /^description: "Configuration for Project: Demo:/m);
});

function makePage(title, sourceLine) {
  return `---
title: ${title}
description: A useful page with enough metadata for SEO checks.
---

# ${title}

This page has enough original explanatory text to pass the first release gate.
It links claims back to source material and avoids incomplete placeholders.

## Limitations

This page names tradeoffs or details that require checking current official docs.

## Next steps

Use the official source and test a small production-shaped workflow next.

## Sources

- ${sourceLine}
`;
}

function makeReleaseReadyPage(title) {
  return `---
title: ${title}
description: A useful page with enough metadata for SEO checks.
---

# ${title}

This page answers one real developer question with source-linked facts and a clear path to apply the tool.

## Core answer

Use this project when its official model matches the job, then validate setup details against the upstream docs.

## Limitations

The page should name tradeoffs, unsupported use cases, or details that require checking current official docs.

## Next steps

Read the official documentation, compare alternatives, and test the smallest production-shaped workflow.

## Sources

- GitHub repository: https://github.com/owner/sample
`;
}

async function makeTempDir(prefix) {
  const base = join(process.cwd(), '.tmp');
  await mkdir(base, { recursive: true });
  return mkdtemp(join(base, prefix));
}
