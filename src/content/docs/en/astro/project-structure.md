---
title: "Project Structure"
description: "Understand the main folders and files in an Astro project before editing pages, components, content, and configuration."
---

# Project Structure

Astro projects are intentionally small at the root. A typical project looks like this:

```text
astro.config.mjs
package.json
public/
src/
  components/
  content/
  layouts/
  pages/
```

Templates and integrations can add more files, but these folders explain the core model.

## `src/pages/`

`src/pages/` is where Astro's file-based routing begins. Files in this directory become routes. A file named `src/pages/about.astro` becomes `/about/`. A file named `src/pages/blog/index.astro` becomes `/blog/`.

Pages can be `.astro`, `.md`, `.mdx`, or framework-specific files depending on integrations. For a documentation site, Starlight handles much of this routing for docs content, but the basic Astro idea still matters: files map to URLs.

## `src/components/`

Components are reusable pieces of UI. Use `.astro` components for static or mostly static UI: cards, layout sections, headers, footers, and content wrappers. Use framework components such as React or Vue when you need client-side state or browser APIs.

A good rule is to start with an Astro component. Add a framework component only when the UI needs browser interactivity.

## `src/layouts/`

Layouts wrap pages with shared structure. A layout might define the document shell, metadata, navigation, footer, and slots for page content.

For example:

```astro
---
const { title } = Astro.props;
---

<html lang="en">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

Layouts keep repeated markup out of individual pages and make metadata easier to manage consistently.

## `src/content/`

`src/content/` is used for content collections. Collections let you validate frontmatter, query content safely, and keep metadata consistent across pages.

For a content-heavy site, this folder is often where the real product lives. Pages are not just templates; they are structured documents with titles, descriptions, slugs, dates, sources, and relationships.

## `public/`

Files in `public/` are copied directly to the build output. Use it for assets that should keep their filename and path, such as `robots.txt`, favicons, static images, or downloaded files.

If an image is imported by a component, it usually belongs under `src/`. If it should be served exactly as-is, `public/` is often simpler.

## `astro.config.mjs`

This file configures the project. Common settings include:

- `site` for the public origin.
- `base` for subpath deployments.
- `integrations` such as Starlight, MDX, sitemap, Tailwind, or framework adapters.
- `output` for static or server rendering.
- adapter settings for hosting platforms.

For SEO-oriented documentation, `site` and `base` are especially important because they affect generated URLs, sitemaps, canonical links, and asset paths.

## Sources

- Project structure: https://docs.astro.build/en/basics/project-structure/
- Configuration reference: https://docs.astro.build/en/reference/configuration-reference/
- Content collections: https://docs.astro.build/en/guides/content-collections/
