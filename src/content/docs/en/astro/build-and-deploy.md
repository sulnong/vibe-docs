---
title: "Build & Deploy"
description: "Understand Astro production builds, static output, preview checks, adapters, and deployment targets."
---

# Build & Deploy

`npm run build` runs Astro's production build. For a static site, the output goes to `dist/`. This directory contains the HTML, CSS, JavaScript, images, sitemap files, and other assets that can be uploaded to a static host.

The basic cycle is:

```bash
npm run build
npm run preview
```

`preview` serves the built output locally. This is different from `dev`: it helps catch problems that only appear after production output is generated.

## Static output

Astro is a strong fit for static hosting. Content-heavy sites often do not need a server at request time, so static output is simpler to cache, deploy, and index.

Good static targets include:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel static output
- S3-compatible object storage plus CDN
- any host that can serve files from `dist/`

For a documentation site, static output should be the default starting point.

## Server rendering and adapters

Astro can also deploy server-rendered projects through adapters. You need server rendering when pages depend on request-time data, authenticated sessions, cookies, or runtime APIs.

Adapters connect Astro to hosting platforms. For example, a server-rendered Astro app might use a Node adapter, a Vercel adapter, or a Cloudflare adapter. Static sites do not need an adapter unless the deployment target specifically requires one.

## Metadata and URLs

Build configuration affects SEO. The most important settings are:

- `site`: the public origin, such as `https://example.com`.
- `base`: the subpath, such as `/repo/` for a GitHub Pages project site.
- sitemap integration: generates sitemap files from the built routes.
- robots and canonical behavior: tells crawlers what should be indexed.

If `site` or `base` is wrong, pages may build successfully but produce incorrect URLs.

## Deployment checklist

Before publishing a static Astro documentation site, inspect:

- The homepage loads.
- Topic pages load in every locale.
- Sidebar links resolve.
- Search assets load.
- `sitemap-index.xml` exists.
- `robots.txt` is present when needed.
- Canonical URLs use the expected domain and base path.
- Code blocks and images render correctly.

For GitHub Pages, pay special attention to the base path. For a custom domain, the base path usually returns to `/`.

## Sources

- Deploy Astro: https://docs.astro.build/en/guides/deploy/
- GitHub Pages deployment: https://docs.astro.build/en/guides/deploy/github/
- Configuration reference: https://docs.astro.build/en/reference/configuration-reference/
