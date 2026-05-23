# Astro Guide

Astro Guide is the first public topic in an agent-assisted bilingual documentation project. Public visitors should see topic-first documentation, while internal research plans stay outside the public site.

## Stack

- Astro + Starlight for static bilingual docs.
- `/en/{topic}/` and `/zh/{topic}/` URL structure.
- Right-side style switcher that changes presentation without changing content URLs.
- GitHub Pages deployment through tagged releases.
- Agent-facing helper tools under `tools/`.
- Human-reviewed topic outline reports under `content-plans/`.

## Quick Start

```bash
npm install
npm run build
node tools/cli.js help
npm run check
```

## What `tools/` Is For

`tools/` is an agent-facing helper layer, not a product UI for human operators. It helps an agent turn a topic into a reviewable outline report, then generate bilingual drafts after human approval.

The main commands are:

- `research`: create `content-plans/<topic>/outline.md`;
- `draft`: generate English and Chinese Markdown drafts after the outline is approved;
- `check`: run structural checks on generated docs.

```bash
node tools/cli.js help
```

## What `content-plans/` Is For

`content-plans/` stores agent-generated topic outline reports. Each report is meant for human review before document generation. It should explain what the agent researched, which sources matter, what pages will be generated, how URLs are organized, what each page answers, and where each page gets its facts.

Important files and directories:

- `content-plans/README.md`: rules for outline reports;
- `content-plans/<topic>/outline.md`: the reviewable topic outline report.

## Agent Flow

```bash
node tools/cli.js research --topic "Astro" --repo withastro/astro --official-docs https://docs.astro.build/
# Human reviews content-plans/astro/outline.md
node tools/cli.js draft --topic "Astro" --repo withastro/astro --official-docs https://docs.astro.build/
node tools/cli.js check --topic astro
```

Before running `draft`, the agent should research official docs, README, releases, examples, issues, search demand, SERP competitors, troubleshooting paths, and opportunities to create content that is not just a summary of existing pages.

## GitHub Pages

Enable GitHub Pages with GitHub Actions as the source. Deployments run on pushes to `main`, tags matching `v*`, or manual workflow dispatch.

```bash
git push origin main
```

For GitHub project pages, set repository variables if the defaults are not right:

- `PUBLIC_SITE_URL`, for example `https://yourname.github.io`
- `PUBLIC_BASE_PATH`, for example `/your-repo/`

## Deployment Notes

Set `PUBLIC_SITE_URL` to the production origin, for example `https://example.com`. Add `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` when Cloudflare Web Analytics is ready. Keep canonical ownership on the main topic URL until a topic is intentionally split to a subdomain.

Official references:

- Starlight i18n: https://starlight.astro.build/guides/i18n/
- Astro sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- Cloudflare Pages preview deployments: https://developers.cloudflare.com/pages/configuration/preview-deployments/
- Cloudflare Pages redirects and headers: https://developers.cloudflare.com/pages/configuration/redirects/
- Cloudflare Web Analytics: https://developers.cloudflare.com/web-analytics/
- Search Console Search Analytics: https://developers.google.com/webmaster-tools/v1/searchanalytics/query
