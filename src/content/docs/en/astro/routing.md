---
title: "Routing"
description: "Learn Astro file-based routing, dynamic routes, and how route paths map to files in src/pages."
---

# Routing

Astro uses file-based routing. A file in `src/pages/` becomes a URL in the generated site. This keeps the route structure visible in the filesystem and makes small sites easy to reason about.

For example:

```text
src/pages/index.astro        -> /
src/pages/about.astro        -> /about/
src/pages/blog/index.astro   -> /blog/
src/pages/blog/post-1.astro  -> /blog/post-1/
```

## Static routes

Static routes are the simplest case. Create a file, and Astro creates a route. This is perfect for pages like about, pricing, contact, docs landing pages, and hand-written guides.

```astro
---
const title = 'About';
---

<h1>{title}</h1>
<p>This route is generated from src/pages/about.astro.</p>
```

## Dynamic routes

Dynamic routes use bracket syntax:

```text
src/pages/blog/[slug].astro
```

In a static build, Astro needs to know which paths to generate. That usually means exporting `getStaticPaths()`:

```astro
---
export function getStaticPaths() {
  return [
    { params: { slug: 'first-post' } },
    { params: { slug: 'second-post' } },
  ];
}

const { slug } = Astro.params;
---

<h1>{slug}</h1>
```

For content collections, you often generate paths from entries instead of hard-coding them.

## Rest parameters

Astro also supports rest parameters such as `[...slug].astro`. These are useful for catch-all routes, nested documentation paths, or generated page trees.

Use them carefully. A route that catches too much can make the site harder to understand. Prefer explicit routes until the content model actually needs a catch-all.

## Routing in a Starlight docs site

Starlight builds on Astro and manages documentation routes through its content structure. In this guide, the English topic starts at `/en/astro/` and the Chinese topic starts at `/zh/astro/`.

Even though Starlight handles the docs routing, Astro's routing model still matters for root pages, custom landing pages, redirects, API routes, and any non-doc pages you add later.

## Base paths and links

The base path matters when deploying to a subdirectory. A custom domain often uses `/`, while a GitHub Pages project site often uses `/<repo>/`.

When using a base path, prefer Astro helpers and configuration-aware links where possible. Hard-coded absolute paths can break when the deployment path changes.

## Sources

- Routing guide: https://docs.astro.build/en/guides/routing/
- Dynamic routes: https://docs.astro.build/en/guides/routing/#dynamic-routes
- Configuration reference: https://docs.astro.build/en/reference/configuration-reference/
