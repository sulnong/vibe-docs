import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import test from 'node:test';

test('public Starlight config is topic-first and hides internal factory pages', async () => {
  const config = await readFile('astro.config.mjs', 'utf8');

  assert.match(config, /title:\s*{\s*en:\s*'China Explained'/s);
  assert.match(config, /label:\s*'Astro'/);
  assert.match(config, /label:\s*'China Economy'/);
  assert.match(config, /link:\s*'\/astro\/github-pages\/'/);
  assert.doesNotMatch(config, /Factory/);
  assert.doesNotMatch(config, /Workflow/);
  assert.doesNotMatch(config, /Style Packs/);
});

test('root page leads with China content and keeps legacy docs low-friction', async () => {
  const root = await readFile('src/pages/index.astro', 'utf8');

  assert.match(root, /China Explained/);
  assert.match(root, /China, in context/);
  assert.match(root, /\/china-economy\/china-2026-reflation-turning-point\//);
  assert.match(root, /\/en\/astro\//);
  assert.doesNotMatch(root, /Trend Docs Factory/);
  assert.doesNotMatch(root, /Vibe Docs/);
});

test('theme switcher is mounted globally instead of exposed as a public topic page', async () => {
  const component = await readFile('src/components/StyleSwitcher.astro', 'utf8');
  const css = await readFile('src/styles/custom.css', 'utf8');

  assert.match(component, /localStorage/);
  assert.match(component, /data-theme-pack/);
  assert.match(component, /data-reading-toggle/);
  assert.match(component, /night/);
  assert.match(css, /reading-toggle/);
  assert.match(css, /data-reading-mode="night"/);
  await assert.rejects(() => stat('src/content/docs/en/style-packs.mdx'), /ENOENT/);
  await assert.rejects(() => stat('src/content/docs/zh/style-packs.mdx'), /ENOENT/);
});

test('China Economy sidebar keeps root-level article URLs', async () => {
  const sidebar = await readFile('src/components/starlight/TopicSidebar.astro', 'utf8');
  const article = await readFile(
    'src/content/docs/china-economy/china-2026-reflation-turning-point.md',
    'utf8'
  );

  assert.match(sidebar, /stripInjectedLocale/);
  assert.match(sidebar, /china-economy/);
  assert.match(article, /hero:/);
  assert.doesNotMatch(article, /# China 2026: The Reflation Turning Point/);
});

test('Astro topic includes the planned learning-oriented page set', async () => {
  const expected = [
    'src/content/docs/en/astro/project-structure.md',
    'src/content/docs/en/astro/routing.md',
    'src/content/docs/en/astro/components-and-islands.md',
    'src/content/docs/en/astro/content-collections.md',
    'src/content/docs/en/astro/styling.md',
    'src/content/docs/en/astro/mdx-and-starlight.md',
    'src/content/docs/en/astro/build-and-deploy.md',
    'src/content/docs/en/astro/github-pages.md',
  ];

  for (const path of expected) {
    const info = await stat(path);
    assert.equal(info.isFile(), true);
  }
});

test('GitHub Pages workflow deploys only tagged releases or manual runs', async () => {
  const workflow = await readFile('.github/workflows/pages.yml', 'utf8');

  assert.match(workflow, /tags:\s*\n\s+- 'v\*'/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /actions\/deploy-pages/);
  assert.match(workflow, /npm run build/);
});

test('public source avoids internal factory naming', async () => {
  const paths = [
    'astro.config.mjs',
    'src/pages/index.astro',
    'src/components/StyleSwitcher.astro',
    'src/styles/custom.css',
    'src/styles/themes/neo-retro.css',
    'src/components/ui/Button.astro',
    'src/components/ui/Card.astro',
    'src/components/ui/Tooltip.astro',
  ];

  for (const path of paths) {
    const source = await readFile(path, 'utf8');
    assert.doesNotMatch(source, /Trend Docs Factory|Style Packs|tdf-/);
  }
});

test('Astro documentation pages have exactly one muted sources section', async () => {
  for (const locale of ['en', 'zh']) {
    const dir = `src/content/docs/${locale}/astro`;
    const files = await readdir(dir);
    for (const file of files.filter((name) => name.endsWith('.md'))) {
      const source = await readFile(`${dir}/${file}`, 'utf8');
      const count = source.match(/^## Sources$/gm)?.length ?? 0;
      assert.equal(count, 1, `${dir}/${file} should have exactly one Sources section`);
    }
  }
});
