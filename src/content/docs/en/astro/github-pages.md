---
title: "GitHub Pages"
description: "Deploy an Astro site to GitHub Pages with the right site URL, base path, workflow, and post-deploy checks."
---

# GitHub Pages

GitHub Pages is a common static host for Astro projects. It works well for project docs, portfolios, small product sites, and public documentation. The main detail to get right is whether the site is served from the domain root or from a repository subpath.

## Choose the URL shape

GitHub Pages has two common shapes:

| Page type | Example URL | Astro `site` | Astro `base` |
| --- | --- | --- | --- |
| User or organization site | `https://user.github.io/` | `https://user.github.io` | `/` |
| Project site | `https://user.github.io/repo/` | `https://user.github.io` | `/repo/` |
| Custom domain | `https://docs.example.com/` | `https://docs.example.com` | `/` |

Most broken GitHub Pages deployments come from using `/` locally and forgetting that a project site lives under `/<repo>/`.

## Configure Astro

For a project site:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://user.github.io',
  base: '/repo/',
});
```

For a custom domain:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://docs.example.com',
  base: '/',
});
```

Commit the config before setting up the workflow. The build output must be generated with the same path shape that GitHub Pages will serve.

## Add a GitHub Actions workflow

A typical workflow lives at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

In the repository settings, set Pages to deploy from GitHub Actions.

## Check the deployment

After the workflow finishes, open:

- the homepage
- one deep route
- one route with code blocks or images
- `sitemap-index.xml` if sitemap generation is enabled

For a project site, inspect the page source or network panel. CSS and JavaScript should load from `/repo/_astro/...`, not from `/_astro/...`.

## Custom domains

When using a custom domain, add the domain in GitHub Pages settings and configure DNS as GitHub instructs. In Astro, set `site` to the custom domain and usually set `base` to `/`.

If the site previously used a project subpath, remove the old `base`. Leaving `base: '/repo/'` after moving to a custom domain will make links and assets point to the wrong place.

## Common problems

| Symptom | Likely fix |
| --- | --- |
| Page loads without CSS | Set `base` to `/<repo>/` for project sites |
| Homepage works but nested pages do not | Confirm output paths and Pages source |
| Sitemap uses wrong domain | Set `site` correctly |
| Workflow cannot deploy | Check Pages permissions and repository settings |
| Build fails in Actions but works locally | Align Node version and use `npm ci` with the lockfile |

## References

- Astro GitHub Pages guide: https://docs.astro.build/en/guides/deploy/github/
- GitHub Pages custom workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- deploy-pages action: https://github.com/actions/deploy-pages
