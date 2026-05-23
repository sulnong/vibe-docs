---
title: "Astro Guide"
description: "Learn Astro as a content-first web framework: HTML first, components where they help, and JavaScript only where the page needs it."
---

# Astro Guide

Astro is a web framework for content-driven websites. It treats the page as a document first: build the HTML, keep the URL stable, make the content easy to author, and add browser JavaScript only where a specific part of the page needs it.

That default gives Astro a different feel from a full client application framework. A page can use components, data, layouts, Markdown, MDX, and framework islands, but it does not become a large browser app unless you choose that direction.

## Where Astro fits

Astro is most comfortable when the page itself is the product:

- Documentation with sidebars, search, code examples, localized pages, and stable URLs.
- Blogs, changelogs, guides, and editorial sites where authors prefer Markdown or MDX.
- Product and marketing pages that need fast first loads, good metadata, and flexible visual design.
- Project sites that are mostly static but include a few interactive pieces.
- Multi-language content where sitemap, canonical URLs, and route structure matter.

Astro can also render on demand with adapters, but the static model is the easiest place to start. Once you understand the static model, server rendering becomes a deliberate extension rather than the default assumption.

## The mental model

Think of an Astro page as a document that can use components.

An `.astro` file has frontmatter for server-side code and a template for the HTML it renders:

```astro
---
const title = 'Why Astro feels different';
const updated = new Date('2026-05-23');
---

<article>
  <p>Updated {updated.toLocaleDateString('en-US')}</p>
  <h1>{title}</h1>
  <p>This page is HTML unless you choose to hydrate something.</p>
</article>
```

The frontmatter runs during the build or on the server, depending on the output mode. The template becomes HTML. If you import a React, Vue, Svelte, or Solid component, Astro can render it too, but that component only becomes interactive in the browser when you add a client directive such as `client:visible` or `client:load`.

This leads to a useful sequence of questions for every feature:

| Question | Astro answer |
| --- | --- |
| Can this remain HTML and CSS? | Use an Astro component, Markdown, or MDX. |
| Does one part need browser behavior? | Use a small client island. |
| Does the page need request-time data? | Add an adapter and render that route on demand. |
| Does the whole product behave like an app shell? | Consider whether a React-first or full-stack framework is more direct. |

## What to learn first

Astro has many integrations, but the first learning path can stay small:

1. Create a project and run the development server.
2. Open `src/pages/` and understand how files become URLs.
3. Build one Astro component and pass props into it.
4. Add one layout so pages share metadata and structure.
5. Add Markdown or a content collection when content becomes more than a few files.
6. Hydrate one small client component only after you can explain why it needs JavaScript.
7. Build and preview the production output before choosing a host.

That order keeps the framework understandable. It also prevents a common mistake: installing React, Tailwind, MDX, Starlight, an adapter, and several plugins before the plain site makes sense.

## The main pieces

| Piece | What it is for |
| --- | --- |
| `src/pages/` | File-based routes. A page file becomes a URL. |
| Astro components | Static or mostly static UI, layouts, wrappers, cards, callouts, and page sections. |
| Framework components | React, Vue, Svelte, Solid, or other UI components when a specific island needs browser state. |
| Client directives | Control when framework components hydrate in the browser. |
| Content collections | Typed content, frontmatter validation, and queries for Markdown, MDX, YAML, TOML, JSON, or remote data. |
| Integrations | Starlight, MDX, sitemap, Tailwind, UI frameworks, adapters, and other project capabilities. |
| Adapters | Deployment targets for on-demand rendering or platform-specific output. |

Documentation sites usually add Starlight early because it supplies the docs shell: sidebar, search, table of contents, i18n, code highlighting, page metadata, and content schemas. A marketing site might skip Starlight and build custom layouts directly. A blog might start with content collections and a small set of templates.

## When Astro can feel indirect

Astro is not trying to replace every application framework. If the entire product is a highly interactive dashboard with shared client state, real-time collaboration, complex optimistic updates, and a large authenticated app shell, a React-first or full-stack app framework may be more direct.

Astro can still host interactive components inside those pages, but it asks you to split the experience into a static document and interactive islands. That split is powerful for content sites. It can feel awkward when almost every part of the screen is client state.

## A good first project

A good first Astro project should be small enough to finish, but complete enough to touch the real workflow:

1. Create three routes: home, about, and one content page.
2. Add one shared layout component.
3. Add one content collection or a small Markdown section.
4. Add one interactive island, such as a counter or theme switcher.
5. Configure `site` in `astro.config.mjs`.
6. Run a production build and preview the result.
7. Deploy to static hosting.

If you are new to Astro, continue with [Getting Started](/en/astro/getting-started/). If you already have a project open, [Routing](/en/astro/routing/) and [Components & Islands](/en/astro/components-and-islands/) usually make the rest of the framework click.

## References

- Astro documentation: https://docs.astro.build/
- Why Astro: https://docs.astro.build/en/concepts/why-astro/
- Islands architecture: https://docs.astro.build/en/concepts/islands/
- Astro repository: https://github.com/withastro/astro
