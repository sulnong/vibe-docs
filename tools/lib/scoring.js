const COMPETITION_SCORE = {
  low: 14,
  medium: 9,
  high: 4,
  unknown: 7,
};

const GAP_SCORE = {
  high: 8,
  medium: 5,
  low: 2,
  unknown: 3,
};

const INTENT_SCORE = {
  high: 10,
  medium: 6,
  low: 2,
  unknown: 4,
};

export function scoreCandidate(candidate) {
  const githubScore = scoreGithub(candidate.github || candidate);
  const seoScore = scoreSeo(candidate.seo || {});
  const total = githubScore.score + seoScore.score;
  const recommendation = total >= 70 ? 'approve-outline' : total >= 50 ? 'hold-for-review' : 'skip';

  return {
    total,
    recommendation,
    nextStep: recommendation === 'approve-outline' ? 'build-dossier' : 'review-or-pause',
    dimensions: {
      github: { score: githubScore.score, max: 60, details: githubScore.details },
      seo: { score: seoScore.score, max: 40, details: seoScore.details },
    },
    reasons: [
      `GitHub heat: ${githubScore.score}/60 from rank, stars, recent stars, push recency, and release recency.`,
      `SEO opportunity: ${seoScore.score}/40 from SERP competition, language gaps, and tutorial intent.`,
    ],
  };
}

function scoreGithub(github) {
  const rankScore = github.trendingRank ? Math.max(0, 16 - Math.min(github.trendingRank, 30) / 2) : 8;
  const starsAddedScore = clamp(Math.log10((github.starsAddedRecently || 0) + 1) * 6, 0, 20);
  const starsScore = clamp(Math.log10((github.stars || 0) + 1) * 2.2, 0, 10);
  const pushScore = recencyScore(github.pushedAt, 14, 8);
  const releaseScore = github.latestReleaseAt ? recencyScore(github.latestReleaseAt, 45, 7) : 3;
  const score = Math.round(rankScore + starsAddedScore + starsScore + pushScore + releaseScore);

  return {
    score: Math.min(score, 60),
    details: {
      rank: Math.round(rankScore),
      starsAdded: Math.round(starsAddedScore),
      stars: Math.round(starsScore),
      pushedAt: Math.round(pushScore),
      latestReleaseAt: Math.round(releaseScore),
    },
  };
}

function scoreSeo(seo) {
  const competition = COMPETITION_SCORE[seo.serpCompetition || 'unknown'] ?? COMPETITION_SCORE.unknown;
  const englishGap = GAP_SCORE[seo.englishGap || 'unknown'] ?? GAP_SCORE.unknown;
  const chineseGap = GAP_SCORE[seo.chineseGap || 'unknown'] ?? GAP_SCORE.unknown;
  const tutorialIntent = INTENT_SCORE[seo.tutorialIntent || 'unknown'] ?? INTENT_SCORE.unknown;
  const score = competition + englishGap + chineseGap + tutorialIntent;

  return {
    score: Math.min(score, 40),
    details: { competition, englishGap, chineseGap, tutorialIntent },
  };
}

function recencyScore(value, maxAgeDays, maxScore) {
  if (!value) return Math.round(maxScore / 2);
  const ageMs = Date.now() - new Date(value).getTime();
  if (!Number.isFinite(ageMs)) return Math.round(maxScore / 2);
  const ageDays = Math.max(0, ageMs / (1000 * 60 * 60 * 24));
  return clamp(maxScore * (1 - ageDays / maxAgeDays), 0, maxScore);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
