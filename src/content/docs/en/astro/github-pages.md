---
title: "GitHub Pages"
description: "Deploy this Astro documentation site to GitHub Pages from tagged releases with GitHub Actions."
---

# GitHub Pages

GitHub Pages is a good temporary deployment target before buying a domain and configuring a production gateway. It gives you a public URL, integrates with GitHub Actions, and is enough to validate the publishing loop.

Astro's official GitHub Pages guide uses GitHub Actions to build the site and deploy the generated static output.

## Repository settings

In the GitHub repository settings, configure Pages to use GitHub Actions as the source. That tells GitHub Pages to accept artifacts produced by an Actions workflow instead of expecting files from a branch.

The release flow for this project is tag-based:

```bash
git tag v0.1.0
git push origin v0.1.0
```

The tag push triggers the Pages workflow. It installs dependencies, builds Astro, uploads `dist/`, and deploys the Pages artifact.

## Base path

GitHub Pages has two common URL shapes:

```text
https://USER.github.io/
https://USER.github.io/REPO/
```

The second form is a project site. If your site lives under `/REPO/`, Astro needs to know that base path during build.

This project reads `PUBLIC_BASE_PATH`, so a repository named `astro-guide` can build with:

```text
PUBLIC_BASE_PATH=/astro-guide/
```

When you later move to a custom domain, set the base path back to `/` and update `PUBLIC_SITE_URL`.

## Site URL

The `site` value should match the public origin:

```text
PUBLIC_SITE_URL=https://USER.github.io
```

For a custom domain:

```text
PUBLIC_SITE_URL=https://example.com
PUBLIC_BASE_PATH=/
```

This matters because generated URLs, sitemap entries, and canonical links depend on these values.

## Manual releases

The workflow also supports manual runs through `workflow_dispatch`. Manual deployment is helpful during setup because you can test GitHub Pages without creating a new tag every time.

Once the process is stable, tagged releases are cleaner. A tag marks the exact source version that produced a public build.

## Troubleshooting

If the page loads but CSS is missing, suspect the base path first. If the deployment action succeeds but the URL 404s, check the Pages settings and make sure the source is GitHub Actions. If sitemap URLs point at the wrong domain, check `PUBLIC_SITE_URL`.

## Sources

- Astro GitHub Pages guide: https://docs.astro.build/en/guides/deploy/github/
- GitHub Pages custom workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Deploy Pages action: https://github.com/actions/deploy-pages
