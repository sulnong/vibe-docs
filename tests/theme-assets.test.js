import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import test from 'node:test';

const themes = ['base', 'pixel', 'neo-retro', 'pop-brutal', 'luminous'];

test('theme packs expose scoped data-theme selectors', async () => {
  for (const theme of themes) {
    const css = await readFile(`src/styles/themes/${theme}.css`, 'utf8');
    assert.match(css, new RegExp(`\\[data-theme-pack="${theme}"\\]`));
    assert.match(css, /--astro-accent/);
  }
});

test('UI components exist as Astro wrappers for imported design ideas', async () => {
  for (const component of ['Button', 'Card', 'Tooltip']) {
    const info = await stat(`src/components/ui/${component}.astro`);
    assert.equal(info.isFile(), true);
  }
});

test('Astro is the first visible documentation topic', async () => {
  const config = await readFile('astro.config.mjs', 'utf8');
  const enHome = await readFile('src/content/docs/en/index.md', 'utf8');
  const zhHome = await readFile('src/content/docs/zh/index.md', 'utf8');

  assert.match(config, /label:\s*['"]Astro['"]/);
  assert.match(config, /link:\s*['"]\/astro\/['"]/);
  assert.doesNotMatch(config, /link:\s*['"]\/starlight\/['"]/);
  assert.match(enHome, /\/en\/astro\//);
  assert.match(zhHome, /\/zh\/astro\//);
});
