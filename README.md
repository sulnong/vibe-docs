# Astro Guide

Astro Guide is the first public topic in a bilingual documentation-site workflow. Public visitors should see topic-first documentation, not the internal content factory.

## Stack

- Astro + Starlight for static bilingual docs.
- `/en/{topic}/` and `/zh/{topic}/` URL structure.
- Right-side style switcher that changes presentation without changing content URLs.
- GitHub Pages deployment through tagged releases.
- Internal CLI + Markdown/JSON queue stored under `workflow/`.

## Quick Start

```bash
npm install
npm run build
node tools/cli.js help
npm run check
```

## First Workflow

```bash
node tools/cli.js discover --repo owner/name
node tools/cli.js score --topic repo-slug
node tools/cli.js dossier --topic repo-slug
node tools/cli.js outline --topic repo-slug
node tools/cli.js draft --topic repo-slug
node tools/cli.js check --topic repo-slug
```

The internal queue is not part of the public site. It exists for topic review, source dossiers, content generation, and analytics feedback.

The content workflow is question-intent-first: build an internal dossier from official sources, multilingual SERP observations, alternatives, and community pain before writing the public page matrix. Public pages stay topic-first and cite sources at the footer; competitor pages are used only to identify intent, gaps, and common mistakes.

## GitHub Pages

Enable GitHub Pages with GitHub Actions as the source. Deployments run on pushes to `main`, tags matching `v*`, or manual workflow dispatch.

```bash
git push origin main
```

For GitHub project pages, set repository variables if the defaults are not right:

- `PUBLIC_SITE_URL`, for example `https://yourname.github.io`
- `PUBLIC_BASE_PATH`, for example `/your-repo/`

## Analytics Loop

Export Search Console query/page data as CSV, then import it:

```bash
node tools/cli.js import-gsc --file workflow/samples/gsc-export.csv
node tools/cli.js report --out workflow/reports/latest.md
```

Use the report to decide whether a topic should be expanded, rewritten, internally linked more heavily, split to a subdomain, or paused.

## Deployment Notes

Set `PUBLIC_SITE_URL` to the production origin, for example `https://example.com`. Add `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` when Cloudflare Web Analytics is ready. Keep canonical ownership on the main topic URL until a topic is intentionally split to a subdomain.

Official references:

- Starlight i18n: https://starlight.astro.build/guides/i18n/
- Astro sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- Cloudflare Pages preview deployments: https://developers.cloudflare.com/pages/configuration/preview-deployments/
- Cloudflare Pages redirects and headers: https://developers.cloudflare.com/pages/configuration/redirects/
- Cloudflare Web Analytics: https://developers.cloudflare.com/web-analytics/
- Search Console Search Analytics: https://developers.google.com/webmaster-tools/v1/searchanalytics/query
- Google helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google AI Search guidance: https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search
- Google multilingual sites: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- OpenAI crawlers: https://platform.openai.com/docs/gptbot
