import assert from 'node:assert/strict';
import test from 'node:test';

import { parseRepoSlug } from '../tools/lib/github.js';
import { scoreCandidate } from '../tools/lib/scoring.js';

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

test('scoreCandidate prioritizes GitHub heat and zero-cost SEO opportunity', () => {
  const result = scoreCandidate({
    repo: 'withastro/starlight',
    github: {
      trendingRank: 3,
      stars: 25000,
      starsAddedRecently: 1400,
      pushedAt: new Date().toISOString(),
      latestReleaseAt: new Date().toISOString(),
    },
    seo: {
      serpCompetition: 'medium',
      englishGap: 'medium',
      chineseGap: 'high',
      tutorialIntent: 'high',
    },
  });

  assert.equal(result.recommendation, 'approve-outline');
  assert.equal(result.dimensions.github.max, 60);
  assert.equal(result.dimensions.seo.max, 40);
  assert.ok(result.total >= 70);
  assert.match(result.reasons.join('\n'), /GitHub heat/);
  assert.match(result.reasons.join('\n'), /SEO opportunity/);
});
