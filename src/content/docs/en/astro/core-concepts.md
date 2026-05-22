---
title: "Core Concepts"
description: "Understand Astro's mental model: content-first pages, server-rendered components, islands, and selective JavaScript."
---

# Core Concepts

Astro is easiest to understand if you separate four ideas: content, routing, rendering, and interactivity.

Astro's opinion is not that JavaScript is bad. Its opinion is that most content pages do not need to become full browser applications. Start with HTML. Add styling. Add data and components. Hydrate only the pieces that need to run in the browser.

## Content-first pages

Astro is built around content-driven pages. A page can be an `.astro` component, Markdown, MDX, or content loaded from collections. That makes Astro comfortable for documentation, blogs, changelogs, and marketing sites where the page itself is the product.

This also changes how you design features. Instead of starting with client state, start with the document:

- What question does this page answer?
- What metadata does it need?
- What other pages should it link to?
- What content can be static?
- What small parts need interactivity?

## Render HTML first

Astro components run during the build or on the server. They output HTML. If the component does not need browser behavior, Astro does not send its JavaScript to the client.

That default is different from a typical client-side component framework. In a React app, a component usually implies browser JavaScript. In Astro, a component can be a build-time authoring tool that disappears into HTML.

## Islands

An island is a small interactive component inside a mostly static page. Examples include:

- A style switcher.
- A search input.
- A pricing calculator.
- A chart with filters.
- A copy-to-clipboard button.

Astro lets you choose when each island hydrates. A component can hydrate on page load, when the browser is idle, when it becomes visible, or only under a matching media query.

## Server rendering

Astro can also render on the server with adapters. Server rendering is useful when pages depend on request-time information: authentication, personalization, live data, or form handling.

For a docs site, static rendering is usually enough. Static output is easy to cache, easy to host, and friendly to search engines. Server rendering should be introduced when the product needs it, not as the default starting point.

## Integrations

Astro's integration system is how you add capabilities without changing the whole mental model. Common integrations include MDX, sitemap generation, Tailwind, Starlight, React, Vue, Svelte, Solid, and deployment adapters.

The best Astro projects stay boring at the core: plain content, clear routes, predictable metadata, and only the integrations that directly serve the site.

## Sources

- Why Astro: https://docs.astro.build/en/concepts/why-astro/
- Astro components: https://docs.astro.build/en/basics/astro-components/
- Islands architecture: https://docs.astro.build/en/concepts/islands/
