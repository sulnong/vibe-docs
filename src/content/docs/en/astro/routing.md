---
title: "Routing"
description: "Learn how Astro maps files to URLs, how dynamic routes work, and how content collections become pages."
---

# Routing

Astro uses file-based routing. A file in `src/pages/` becomes a URL in the generated site. This keeps the route tree visible in the filesystem, which is one reason Astro feels straightforward for content sites.

The basic mapping is direct:

```text
src/pages/index.astro        -> /
src/pages/about.astro        -> /about/
src/pages/blog/index.astro   -> /blog/
src/pages/blog/post-1.astro  -> /blog/post-1/
```

This model is easy to learn, but there are a few details worth understanding before a project grows: index routes, dynamic routes, rest parameters, content collections, and deployment base paths.

## Static routes are just files

Static routes are the simplest case. Create a file, and Astro creates a page.

```astro
---
const title = 'About';
---

<main>
  <h1>{title}</h1>
  <p>This route is generated from src/pages/about.astro.</p>
</main>
```

This pattern is enough for hand-written pages such as about, pricing, contact, a docs landing page, or a small guide.

Use static routes when the page exists once and has a stable purpose. Do not make a route dynamic just because it could be expressed as data.

## Index files create directory roots

`index.astro` represents the root of its directory:

```text
src/pages/index.astro          -> /
src/pages/blog/index.astro     -> /blog/
src/pages/docs/index.astro     -> /docs/
src/pages/docs/install.astro   -> /docs/install/
```

This is useful when a section needs both an overview page and child pages. The folder becomes the section, and `index.astro` becomes the section landing page.

A common docs pattern is:

```text
src/pages/guides/index.astro
src/pages/guides/install.astro
src/pages/guides/deploy.astro
```

That gives readers a section home at `/guides/` and direct task pages below it.

## Dynamic routes use brackets

Dynamic routes use bracket syntax when part of the path is a variable:

```text
src/pages/blog/[slug].astro
```

In static output mode, the build must know every generated route ahead of time. A dynamic route therefore exports `getStaticPaths()`:

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

<main>
  <h1>{slug}</h1>
</main>
```

This generates `/blog/first-post/` and `/blog/second-post/`.

Hard-coded arrays are fine for a tiny example. Real content sites usually generate paths from content, a CMS, or another data source.

## Pass data with `props`

`params` decides the URL. `props` passes data to the page.

```astro
---
export function getStaticPaths() {
  const products = [
    { slug: 'starter', name: 'Starter', price: '$19' },
    { slug: 'pro', name: 'Pro', price: '$49' },
  ];

  return products.map((product) => ({
    params: { slug: product.slug },
    props: { product },
  }));
}

const { product } = Astro.props;
---

<main>
  <h1>{product.name}</h1>
  <p>{product.price}</p>
</main>
```

This avoids looking up the same data again inside the template. It also keeps the route's data flow visible: generate a path, pass the data, render the page.

## Generate routes from a collection

Content collections live outside `src/pages/`, so collection entries do not become routes by themselves. A blog collection needs a dynamic route that reads entries and turns them into pages:

```astro
---
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---

<main>
  <h1>{post.data.title}</h1>
  <Content />
</main>
```

With this file at `src/pages/blog/[id].astro`, an entry with the id `first-post` becomes `/blog/first-post/`.

For larger sites, normalize slugs deliberately. Decide whether the URL should use `post.id`, a frontmatter `slug`, date folders, language prefixes, or nested paths. Changing that decision later can mean redirects.

## Rest parameters catch nested paths

Astro supports rest parameters such as `[...slug].astro`. They can match more than one path segment:

```text
src/pages/docs/[...slug].astro
```

A rest parameter can represent routes like:

```text
/docs/
/docs/install/
/docs/deploy/cloudflare/
```

This pattern is useful for generated documentation trees, imported content with nested slugs, or compatibility routes. It should not be the first tool you reach for. A catch-all route can make a site harder to understand because one file now owns many possible URLs.

Use explicit routes while the structure is small. Reach for rest parameters when nested depth is part of the content model.

## Starlight routes still sit on Astro

Starlight manages documentation routes through the docs content collection, so a page like this guide lives under `/en/astro/routing/` rather than directly under `src/pages/`.

Astro routing still matters in a Starlight project. Root landing pages, custom non-doc pages, redirects, API routes, and deployment base paths all use Astro's routing and configuration model.

For documentation sites, it helps to think in two layers:

| Layer | What owns it |
| --- | --- |
| Docs pages | Starlight docs collection |
| Custom pages | `src/pages/` |
| Generated content routes | Dynamic routes in `src/pages/` |
| Deployment path | `site` and `base` in Astro config |

## Base paths affect every link

If a site is deployed at the domain root, links can usually assume `/`. If a site is deployed under a subpath, such as a GitHub Pages project site at `https://user.github.io/repo/`, the project needs a `base` value:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://user.github.io',
  base: '/repo/',
});
```

Base-path bugs often appear late because local development uses `/`. If links or assets work locally but break after deployment, check `site`, `base`, and hard-coded absolute links.

Prefer Astro-aware helpers and relative links where appropriate. When you do write absolute paths, remember whether the deployed site lives at `/` or under a subpath.

## Route mistakes that are easy to miss

| Symptom | Likely cause |
| --- | --- |
| Dynamic route builds no pages | `getStaticPaths()` returns an empty array or wrong params key |
| Page works in dev but 404s after deploy | Static host is serving a different output path or base path |
| Content entry renders at the wrong URL | Route uses `id` but the desired URL is a custom slug |
| Catch-all route hides missing pages | `[...slug].astro` is too broad |
| Links break only on GitHub Pages | `base` is missing or hard-coded `/` paths ignore it |

## Small rules that prevent confusion

- Keep route filenames boring and descriptive.
- Use `index.astro` for section landing pages.
- Use dynamic routes for content-driven pages, not for pages that only exist once.
- Use rest parameters only when nested depth is part of the content model.
- Decide slug rules before publishing a large content section.
- Treat `base` as a deployment setting that must be checked before publishing.

## References

- Routing guide: https://docs.astro.build/en/guides/routing/
- Dynamic routes: https://docs.astro.build/en/guides/routing/#dynamic-routes
- Content collections routing: https://docs.astro.build/en/guides/content-collections/#generating-routes-from-content
- Configuration reference: https://docs.astro.build/en/reference/configuration-reference/
