# Trend Docs Workflow

This directory is the first-version editorial backend. It keeps the queue, outlines, imported metrics, and generated reports in Git so every content decision is reviewable.

## Statuses

- `candidate`: discovered repository waiting for signal review.
- `outline-review`: score and bilingual sitemap are ready for human review.
- `draft-review`: bilingual Markdown pages exist and need editorial review.
- `ready-to-publish`: quality gates pass and a PR preview can be published.
- `published`: production URL is live and waiting for analytics data.
- `optimize`: analytics show enough traction to improve or expand.
- `paused`: no current investment.

## Commands

```bash
npm run test
node tools/cli.js discover --repo withastro/astro
node tools/cli.js score --topic astro
node tools/cli.js outline --topic astro
node tools/cli.js draft --topic astro
node tools/cli.js check --topic astro
node tools/cli.js import-gsc --file workflow/samples/gsc-export.csv
node tools/cli.js report --out workflow/reports/latest.md
```

## Manual Review Points

Review the topic score before drafting, then review the generated bilingual site before publishing. First-version SEO research is intentionally zero-cost: use GitHub public signals, manual SERP sampling, Cloudflare Web Analytics, and Search Console CSV exports.
