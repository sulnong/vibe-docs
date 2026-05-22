---
title: "FAQ"
description: "Answers to common Astro questions about JavaScript, React, SSR, content, SEO, and deployment."
---

# FAQ

## Does Astro replace React?

No. Astro can use React components, but it does not require React for the whole site. You can also use Vue, Svelte, Solid, or plain Astro components.

The important difference is the default. In a React app, React usually owns the page. In Astro, HTML owns the page, and React can appear as an island where it is useful.

## Does Astro ship zero JavaScript?

Astro ships no component JavaScript by default for static Astro components. If you add scripts or hydrate client components, JavaScript will be included where you ask for it.

So "zero JavaScript by default" does not mean "no JavaScript ever." It means JavaScript is opt-in instead of automatic.

## Can Astro do server-side rendering?

Yes. Astro supports server output through adapters. Server-side rendering is useful when pages depend on request-time data, authenticated sessions, cookies, or runtime APIs.

For documentation, static output is usually better to start with. It is simpler to host, easy to cache, and predictable for search engines.

## Is Astro good for SEO?

Astro can generate fast HTML pages, metadata, sitemaps, canonical URLs, and localized routes. Those are strong technical foundations for SEO.

SEO quality still depends on content quality, search intent, internal links, page titles, descriptions, source quality, and deployment correctness. Astro helps with the technical base; it does not replace editorial judgment.

## Should a docs site use Astro or Starlight?

Use both. Astro is the framework. Starlight is the docs layer built on Astro.

If you build a documentation shell from scratch, you must solve sidebar navigation, search, table of contents, i18n, code highlighting, and page metadata yourself. Starlight gives you those defaults.

## Can I use Markdown and MDX together?

Yes. Use Markdown for normal docs and MDX when a page needs components inside the content. For generated or frequently edited content, Markdown is easier to review. For demos and custom UI, MDX can be worth the extra complexity.

## What should I learn first?

A practical order is:

1. Project structure.
2. Routing.
3. Astro components.
4. Islands and client directives.
5. Content collections.
6. Build and deployment.
7. Starlight customization.

That order maps well to how real Astro sites are built.

## Sources

- Astro docs: https://docs.astro.build/
- Server-side rendering: https://docs.astro.build/en/guides/server-side-rendering/
- Starlight docs: https://starlight.astro.build/
