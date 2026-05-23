---
title: "Core Concepts"
description: "Understand Astro's core model: content-first pages, server-rendered components, islands, content collections, and on-demand rendering."
---

# Core Concepts

Astro is easiest to understand if you separate five ideas: content, routing, rendering, interactivity, and deployment.

Astro's opinion is not that JavaScript is bad. Its opinion is that most content pages do not need to become full browser applications. Start with HTML. Add styling. Add data and components. Hydrate only the pieces that need to run in the browser.

## Content comes first

Astro is built around content-driven pages. A page can be an `.astro` component, Markdown, MDX, or content loaded from a collection. That makes Astro comfortable for documentation, blogs, changelogs, product pages, and editorial sites where the page itself is what the reader came for.

This changes how you design a feature. Instead of starting with client state, start with the document:

- What does the reader need to understand or complete?
- What metadata does the page need?
- Which related pages should it link to?
- Which content can be generated ahead of time?
- Which small parts actually need browser behavior?

For a documentation page, most of the value should be in the text, examples, links, and structure. Interactivity should support the document rather than replace it.

## Astro renders HTML first

Astro components run during the build or on the server. They output HTML. If a component does not need browser behavior, Astro does not send that component's JavaScript to the client.

That default is different from a typical client-side component framework. In a React app, a component usually implies browser JavaScript. In Astro, a component can be a build-time authoring tool that disappears into HTML.

```astro
---
const items = ['Routing', 'Components', 'Content collections'];
---

<ul>
  {items.map((item) => <li>{item}</li>)}
</ul>
```

This code produces HTML. It does not create a browser-side list component.

## Islands add focused interactivity

An island is a small interactive component inside a mostly static page. Examples include:

- a theme switcher
- a search input
- a pricing calculator
- a chart with filters
- a copy-to-clipboard button
- a playground embedded in a guide

Astro lets you choose when each island hydrates:

| Directive | Use it when |
| --- | --- |
| `client:load` | The component must be interactive immediately. |
| `client:idle` | The component can wait until the browser is idle. |
| `client:visible` | The component is below the fold or only needed when seen. |
| `client:media` | The component is only needed for a matching media query. |
| `client:only` | The component cannot be server-rendered. |

The practical rule is to choose the least eager directive that still feels good to the user. A below-the-fold demo rarely needs `client:load`.

## Content collections make content safer

Content collections turn Markdown, MDX, and data files into structured content. They validate frontmatter and provide typed APIs for queries and rendering.

This matters once a site has more than a few pages. Without a schema, content mistakes show up late: missing titles, invalid dates, inconsistent tags, wrong draft flags, or pages that forget descriptions.

Collections do not make writing good content automatic. They make the content model explicit, which helps editors, generators, and build tools catch avoidable mistakes.

## Static and on-demand rendering

By default, Astro prerenders pages at build time and produces static files. This is a strong default for docs, blogs, and marketing sites because the result is easy to cache, host, and index.

Astro can also render routes on demand with an adapter. Use on-demand rendering when a route depends on request-time information:

- authentication or user-specific data
- cookies or sessions
- fresh data from an API
- form handling
- pages that cannot wait for a full rebuild

The decision can be per project or per route. A mostly static site can still have one on-demand route when the hosting setup supports it.

## Integrations extend the project

Astro integrations add capabilities without changing the whole mental model. Common integrations include:

- Starlight for documentation sites
- MDX for component-rich content
- sitemap generation
- Tailwind or other styling tools
- React, Vue, Svelte, Solid, and other UI frameworks
- adapters for Node, Netlify, Vercel, Cloudflare, and other hosts

The best Astro projects stay boring at the core: clear content, predictable routes, consistent metadata, and only the integrations that directly serve the site.

## A compact decision map

| Need | Astro concept to reach for |
| --- | --- |
| A normal page | `src/pages/` or Starlight docs content |
| Reusable static UI | Astro component |
| Shared page shell | Layout |
| Structured Markdown content | Content collection |
| One interactive widget | Framework component with a client directive |
| Request-time rendering | Adapter plus on-demand rendering |
| Documentation shell | Starlight |

If the whole screen is interactive state, Astro may still work, but it is no longer playing to its simplest strengths. If most of the screen is content, Astro's defaults line up well.

## References

- Why Astro: https://docs.astro.build/en/concepts/why-astro/
- Astro components: https://docs.astro.build/en/basics/astro-components/
- Islands architecture: https://docs.astro.build/en/concepts/islands/
- On-demand rendering: https://docs.astro.build/en/guides/on-demand-rendering/
