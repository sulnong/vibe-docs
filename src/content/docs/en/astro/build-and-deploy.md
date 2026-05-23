---
title: "Build & Deploy"
description: "Understand Astro production builds, static output, preview checks, adapters, deployment targets, and URL configuration."
---

# Build & Deploy

`npm run build` runs Astro's production build. For a static site, the output goes to `dist/`. That directory contains the HTML, CSS, JavaScript, images, sitemap files, and other assets that can be uploaded to a static host.

The smallest reliable deployment loop is:

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

For a documentation site, static output should be the starting point unless a real route needs request-time behavior.

## Build output

After a successful static build, inspect `dist/`:

```text
dist/
  index.html
  _astro/
  sitemap-index.xml
```

The exact files depend on integrations and routes. The important check is that public pages exist where the host expects them, assets are present, and generated URLs use the right domain and base path.

For a docs site, open a few built pages in preview:

- the home page
- one deep topic page
- one localized page
- a page with code blocks
- a page with images or custom components

If these work in `preview` but fail on the host, the problem is usually deployment configuration rather than Astro rendering.

## `site` and `base`

URL configuration affects links, assets, sitemap output, and canonical metadata.

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://docs.example.com',
  base: '/',
});
```

Use `base` when the site is served from a subpath:

```js
export default defineConfig({
  site: 'https://user.github.io',
  base: '/repo/',
});
```

If the site uses a custom domain at the root, `base` is usually `/`. If the site is a GitHub Pages project site, `base` is usually `/<repository-name>/`.

## Static or server output

Astro can also render on demand with adapters. You need server output when pages depend on request-time data:

- authenticated sessions
- cookies
- user-specific pages
- form handling
- fresh API data on every request
- pages that cannot wait for rebuilds

Static output is simpler when the content can be generated ahead of time. Server output is more flexible but adds hosting requirements, runtime behavior, and operational surface area.

| Need | Start with |
| --- | --- |
| Documentation, blog, marketing site | Static output |
| A few generated content routes | Static output with dynamic routes |
| User-specific dashboard | Server output or another app framework |
| Form submission | Server output, endpoint, or external form service |
| Frequently changing external data | Server output or scheduled rebuilds |

## Adapters

Adapters connect Astro to a deployment runtime. Static sites often do not need one. Server-rendered sites do.

Common adapter choices depend on the host:

- Node adapter for a Node server environment.
- Vercel adapter for Vercel.
- Netlify adapter for Netlify.
- Cloudflare adapter for Cloudflare Workers or Pages runtime.

Choose the adapter after choosing the host and rendering mode. Installing an adapter too early can make a simple static project harder to understand.

## Deployment checklist

Before publishing a static Astro documentation site, inspect:

- The homepage loads.
- Topic pages load in every locale.
- Sidebar links resolve.
- Search assets load.
- `sitemap-index.xml` exists when sitemap generation is enabled.
- `robots.txt` is present when needed.
- Canonical URLs use the expected domain and base path.
- Code blocks, tables, and images render correctly.
- A hard refresh on a deep URL works on the host.

For GitHub Pages, pay special attention to the base path. For a custom domain, the base path usually returns to `/`.

## Common deployment failures

| Symptom | First place to look |
| --- | --- |
| CSS and JS 404 after deployment | `base` is missing or wrong |
| Sitemap contains `example.com` | `site` is still the default |
| Deep route 404s on host | Host output directory or fallback rules |
| Works in `dev` but not `preview` | Production build output differs from dev server |
| Build passes locally but fails in CI | Node version or lockfile mismatch |
| Search does not work in docs | Starlight assets not served from the expected base path |

## References

- Deploy Astro: https://docs.astro.build/en/guides/deploy/
- Configuration reference: https://docs.astro.build/en/reference/configuration-reference/
- On-demand rendering: https://docs.astro.build/en/guides/on-demand-rendering/
