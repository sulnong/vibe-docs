---
title: "Astro Overview"
description: "Learn what Astro is, what problems it solves, and how to navigate this Astro guide as a practical learning path."
---

# Astro Overview

Astro is a web framework for content-driven websites. Its default output is HTML, not a large client-side JavaScript application. That one design choice shapes almost everything else: pages are fast by default, Markdown is a first-class authoring format, UI framework components are optional, and interactivity can be added only where a page needs it.

This makes Astro especially useful for documentation, blogs, changelogs, marketing pages, portfolios, product pages, and landing pages. These sites usually care about readable content, stable URLs, search indexing, fast loading, and a maintainable authoring workflow. Astro gives you those things without forcing every page to become a full client app.

## The mental model

Think of an Astro page as a document that can use components. A `.astro` file can run server-side code in frontmatter, render HTML, import data, include Markdown, and reuse components. Unless you explicitly hydrate a client component, Astro sends the rendered HTML and does not send the component JavaScript to the browser.

That means Astro encourages a useful question for every feature:

- Can this be plain HTML and CSS?
- Does it need a small interactive island?
- Does it need request-time server rendering?

For many documentation pages, the answer is mostly HTML, sometimes a small island.

## When Astro fits well

Astro is a strong fit when the page itself is content. Good examples include:

- Documentation sites with sidebars, search, code examples, and localized pages.
- Blogs and editorial sites where authors want Markdown or MDX.
- Product and marketing pages that need fast first load and careful metadata.
- Project sites that mix static pages with a few interactive widgets.
- Multi-language content where URL structure and canonical metadata matter.

Astro can also be used for more dynamic sites with server rendering and adapters, but the learning path should start with the static model because it explains Astro's strengths most clearly.

## When another framework may fit better

Astro is not trying to replace every application framework. If the entire product is a highly interactive dashboard with shared client state, real-time collaboration, complex optimistic updates, and a large authenticated app shell, a React-first or full-stack app framework may be more direct.

Astro still can host interactive components, but its center of gravity is different: publish HTML first, hydrate only what needs browser behavior, and keep content easy to own.

## How this guide is organized

Start with [Getting Started](/en/astro/getting-started/) to create and run a project. Then read [Project Structure](/en/astro/project-structure/) and [Routing](/en/astro/routing/) to understand how files become pages. After that, [Components & Islands](/en/astro/components-and-islands/) explains the most distinctive part of Astro: selective JavaScript.

Once the basics make sense, move into [Content Collections](/en/astro/content-collections/), [Styling](/en/astro/styling/), [MDX & Starlight](/en/astro/mdx-and-starlight/), and [Build & Deploy](/en/astro/build-and-deploy/). If your immediate goal is publishing this site, jump to [GitHub Pages](/en/astro/github-pages/).

## A useful first goal

A good first Astro project is small but complete:

1. Create a site with two or three routes.
2. Add one layout component.
3. Add one Markdown or MDX content collection.
4. Add one interactive island, such as a theme switcher.
5. Build it and deploy it to static hosting.

That exercise touches the parts of Astro that matter most without drowning you in optional integrations.

## Sources

- Astro docs: https://docs.astro.build/
- Why Astro: https://docs.astro.build/en/concepts/why-astro/
- Islands architecture: https://docs.astro.build/en/concepts/islands/
- Astro repository: https://github.com/withastro/astro
