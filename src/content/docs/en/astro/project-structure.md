---
title: "Project Structure"
description: "Understand the folders and configuration files in an Astro project before editing routes, layouts, components, content, and assets."
---

# Project Structure

An Astro project is usually easy to scan at the root. The most important files are few, and most work happens under `src/`.

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

Templates and integrations can add more directories, but this structure explains the core model: routes live in `src/pages/`, reusable UI lives in `src/components/`, shared shells live in `src/layouts/`, and structured content lives in `src/content/`.

## `src/pages/`

`src/pages/` is where Astro's file-based routing begins. A file named `src/pages/about.astro` becomes `/about/`. A file named `src/pages/blog/index.astro` becomes `/blog/`.

Pages can be `.astro`, `.md`, `.mdx`, or supported framework files depending on the integrations installed. For a documentation site, Starlight manages docs routes through its content collection, but the same routing idea still matters for root pages, custom landing pages, redirects, API endpoints, and non-doc sections.

Use `src/pages/` for files that should create routes. Do not put reusable UI there unless the file really is a page.

## `src/components/`

Components are reusable pieces of UI. Astro components are the default for static or mostly static pieces:

- cards
- callouts
- headers and footers
- content wrappers
- layout sections
- documentation widgets that do not need browser state

Start with `.astro` components. Add React, Vue, Svelte, Solid, or another framework only when a specific part of the page needs browser behavior.

```astro
---
const { title } = Astro.props;
---

<section class="card">
  <h2>{title}</h2>
  <slot />
</section>

<style>
  .card {
    border: 1px solid var(--sl-color-gray-5);
    border-radius: 0.5rem;
    padding: 1rem;
  }
</style>
```

This component can wrap content, render as HTML, and avoid shipping client JavaScript.

## `src/layouts/`

Layouts wrap pages with shared structure. A layout often owns the document shell, metadata, navigation, footer, and slots for page content.

```astro
---
const { title } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

Layouts reduce repetition and make metadata more consistent. If you find the same `<head>`, navigation, or wrapper markup appearing in several pages, it usually belongs in a layout.

In a Starlight site, the built-in docs layout handles most documentation pages. Custom layouts are still useful for non-doc landing pages, topic indexes, experiments, or marketing pages outside the docs tree.

## `src/content/`

`src/content/` is used for content collections. Collections let Astro validate frontmatter, query entries safely, and keep metadata consistent across Markdown, MDX, YAML, TOML, JSON, or remote content.

A blog collection might look like this:

```text
src/content/blog/
  first-post.md
  second-post.md
```

The schema usually lives in `src/content.config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
  }),
});

export const collections = { blog };
```

For content-heavy sites, this folder often becomes the real product. Pages are not just templates; they are documents with titles, descriptions, slugs, dates, relationships, and publishing rules.

## `public/`

Files in `public/` are copied directly to the build output. Use it for assets that need a stable path and should not be processed by Astro:

- `robots.txt`
- favicons
- static images served by exact path
- downloadable files
- verification files from external services

If an image is imported by a component and should be optimized or bundled, place it under `src/` instead. If it must be served exactly as written, `public/` is simpler.

## `astro.config.mjs`

`astro.config.mjs` controls the project:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  base: '/',
  integrations: [sitemap()],
});
```

Common settings include:

| Setting | Why it matters |
| --- | --- |
| `site` | Public origin used for canonical URLs, sitemaps, and integrations. |
| `base` | Subpath used when deploying under something like `/repo/`. |
| `integrations` | Adds Starlight, MDX, sitemap, Tailwind, UI frameworks, or other capabilities. |
| `output` | Chooses static output or server output. |
| `adapter` | Enables on-demand rendering on a specific host. |

For SEO-oriented documentation, `site` and `base` are especially important. A site can build successfully while still generating wrong canonical URLs or asset paths.

## `package.json`

`package.json` tells you how the project is run:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

It also shows installed integrations and the Astro version range. When a project behaves differently from a tutorial, check `package.json` and the lockfile before assuming the docs are wrong.

## How structure changes by project type

| Project type | Structure usually grows around |
| --- | --- |
| Marketing site | `src/pages/`, `src/components/`, custom layouts, image assets |
| Blog | `src/content/`, dynamic routes, feeds, author metadata |
| Documentation | Starlight docs content, sidebar config, i18n, search, code examples |
| Hybrid app | Routes that opt into on-demand rendering, adapters, API endpoints |

Do not force every Astro project into the same shape. Let the content model decide where files belong.

## References

- Project structure: https://docs.astro.build/en/basics/project-structure/
- Configuration reference: https://docs.astro.build/en/reference/configuration-reference/
- Content collections: https://docs.astro.build/en/guides/content-collections/
