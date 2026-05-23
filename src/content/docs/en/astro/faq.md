---
title: "FAQ"
description: "Answers to common Astro questions about JavaScript, React, SSR, content, SEO, Starlight, MDX, and deployment."
---

# FAQ

## Does Astro replace React?

No. Astro can use React components, but it does not require React for the whole site. You can also use Vue, Svelte, Solid, or plain Astro components.

The important difference is the default. In a React app, React usually owns the page. In Astro, HTML owns the page, and React can appear as an island where it is useful.

## Does Astro ship zero JavaScript?

Astro ships no component JavaScript by default for static Astro components. If you add scripts or hydrate client components, JavaScript will be included where you ask for it.

So "zero JavaScript by default" does not mean "no JavaScript ever." It means JavaScript is opt-in instead of automatic.

## Why did my interactive component render but not work?

Most likely it was rendered as HTML but not hydrated. Add an appropriate client directive:

```astro
<MyWidget client:visible />
```

Use `client:load` only when the widget needs to be interactive immediately. For below-the-fold demos, `client:visible` is often a better fit.

## Can Astro do server-side rendering?

Yes. Astro supports on-demand rendering through adapters. Server rendering is useful when pages depend on request-time data, authenticated sessions, cookies, form handling, or runtime APIs.

For documentation, static output is usually better to start with. It is simpler to host, easy to cache, and predictable for search engines.

## Is Astro good for SEO?

Astro can generate fast HTML pages, metadata, sitemaps, canonical URLs, and localized routes. Those are strong technical foundations for SEO.

SEO quality still depends on the actual content, internal links, titles, descriptions, deployment correctness, and whether pages answer real reader questions. Astro helps with the technical base; it does not make thin pages valuable.

## Should a docs site use Astro or Starlight?

Use both. Astro is the framework. Starlight is the docs layer built on Astro.

If you build a documentation shell from scratch, you must solve sidebar navigation, search, table of contents, i18n, code highlighting, and page metadata yourself. Starlight gives you those defaults.

## Can I use Markdown and MDX together?

Yes. Use Markdown for normal docs and MDX when a page needs components inside the content.

For generated or frequently edited content, Markdown is easier to review. For demos and custom UI, MDX can be worth the extra complexity.

## Where should images go?

Use `public/` for files that should be served at a fixed path exactly as written. Use `src/` when images are imported by components and should participate in the build pipeline.

For documentation, keep image paths predictable and avoid making screenshots the only source of important information. Text and code should remain readable without relying entirely on images.

## Why do links or CSS break after deployment?

Check `site` and `base` in `astro.config.mjs`. A GitHub Pages project site usually needs `base: '/repo/'`. A custom domain usually uses `base: '/'`.

This problem often appears only after deployment because local development runs at the domain root.

## What should I learn first?

A practical order is:

1. Project structure.
2. Routing.
3. Astro components.
4. Islands and client directives.
5. Content collections.
6. Build and deployment.
7. Starlight customization, if building docs.

That order maps well to how real Astro sites are built.

## References

- Astro docs: https://docs.astro.build/
- On-demand rendering: https://docs.astro.build/en/guides/on-demand-rendering/
- Starlight docs: https://starlight.astro.build/
