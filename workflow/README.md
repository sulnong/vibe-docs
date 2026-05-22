# Trend Docs Workflow

This directory is the first-version editorial backend. It keeps the queue, source dossiers, outlines, imported metrics, and generated reports in Git so every content decision is reviewable.

The workflow uses a question-intent-first content factory for open-source technical topics. Each topic should move from a source dossier to an intent map, then to a bilingual page matrix, then to publishable pages.

## Statuses

- `candidate`: discovered repository waiting for signal review.
- `dossier-review`: score is ready and the internal source, intent, and gate dossier needs review.
- `outline-review`: dossier and bilingual page matrix are ready for human review.
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
node tools/cli.js dossier --topic astro
node tools/cli.js outline --topic astro
node tools/cli.js draft --topic astro
node tools/cli.js check --topic astro
node tools/cli.js import-gsc --file workflow/samples/gsc-export.csv
node tools/cli.js report --out workflow/reports/latest.md
```

## Manual Review Points

Review the topic score, then review the dossier before outlining, then review the generated bilingual site before publishing. First-version SEO research is intentionally zero-cost: use GitHub public signals, manual SERP sampling, Cloudflare Web Analytics, and Search Console CSV exports.

## Content Factory Standard

- Topic admission: confirm a real developer problem, stable official sources, search demand, alternatives, and at least one clear audience.
- Dossier admission: collect official repository, README, docs, releases, examples, issue/FAQ signals, alternatives, and multilingual SERP observations.
- Source layering: official sources are the fact baseline; competitor pages are intent extraction only; community sources validate pain and troubleshooting.
- Outline admission: every page must answer a user question or task. Do not create thin keyword-only pages.
- Publish admission: every page needs metadata, source-linked facts, limitations or tradeoffs, next steps, and a footer Sources section.
- Optimization admission: expand only from Search Console, analytics, SERP changes, and real user questions.

GEO means crawlable, understandable, and citable: stable URLs, clear headings, visible answers, source lists, sitemap/canonical/hreflang support, and no hidden AI-only text.
