import assert from 'node:assert/strict';
import test from 'node:test';

import { officialSourceCandidates, parseRepoSlug } from '../tools/lib/github.js';

test('parseRepoSlug accepts owner/name and GitHub URLs', () => {
  assert.deepEqual(parseRepoSlug('withastro/starlight'), {
    owner: 'withastro',
    name: 'starlight',
    fullName: 'withastro/starlight',
    slug: 'starlight',
  });
  assert.deepEqual(parseRepoSlug('https://github.com/modelcontextprotocol/servers'), {
    owner: 'modelcontextprotocol',
    name: 'servers',
    fullName: 'modelcontextprotocol/servers',
    slug: 'servers',
  });
});

test('officialSourceCandidates lists research entry points for agent review', () => {
  const sources = officialSourceCandidates('withastro/astro');
  const kinds = sources.map((source) => source.kind);

  assert.ok(kinds.includes('repository'));
  assert.ok(kinds.includes('readme'));
  assert.ok(kinds.includes('docs-directory'));
  assert.ok(kinds.includes('releases'));
  assert.ok(kinds.includes('issues'));
  assert.ok(kinds.includes('discussions'));
  assert.ok(kinds.includes('wiki'));
  assert.ok(sources.every((source) => source.url.startsWith('https://github.com/withastro/astro')));
});
