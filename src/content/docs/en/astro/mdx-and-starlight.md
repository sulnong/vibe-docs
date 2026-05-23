---
title: "MDX & Starlight"
description: "Use Markdown, MDX, and Starlight together without turning normal documentation into component-heavy pages."
---

# MDX & Starlight

Astro can render Markdown, and the MDX integration lets content files include components inside Markdown-like documents. Starlight is a documentation framework built on Astro. Together they solve two different needs: expressive content and a complete docs interface.

The practical rule is simple: use Markdown for ordinary documentation, MDX when a component genuinely improves the page, and Starlight when you want the documentation shell.

## Markdown first

Plain Markdown is the best default for most docs:

- easy to write
- easy to review
- easy to translate
- easy to diff
- easy to generate
- hard to hide weak content behind UI

Tutorials, concept pages, references, FAQ pages, and resource pages usually work well as Markdown. Code fences, tables, links, and headings cover most documentation needs.

## When MDX helps

MDX is useful when a document needs embedded components:

- interactive examples
- custom cards
- diagrams
- reusable callouts
- live demos
- comparison widgets
- framework islands inside a guide

For example, a page might explain a concept in text and then render a small component that lets readers try it.

The tradeoff is complexity. MDX pages are harder to generate, review, and translate than Markdown. Use MDX when the component improves understanding, not just to decorate the page.

## Add MDX to Astro

Install the integration:

```bash
npx astro add mdx
```

The command updates `astro.config.mjs` for you. A manual setup looks like this:

```js
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [mdx()],
});
```

After that, `.mdx` pages and content entries can use components.

## What Starlight provides

Starlight gives Astro documentation defaults:

- sidebar navigation
- table of contents
- search
- internationalization
- content schemas
- code highlighting
- dark mode support
- page metadata
- built-in docs layout

This is why Starlight is a practical base for a documentation site. Instead of building the docs shell from scratch, you can focus on content, information architecture, and topic quality.

## Starlight and MDX together

Starlight pages can use Markdown, and they can use MDX when configured. Reach for MDX only when a page benefits from local components.

Good MDX candidates:

- a component playground in a component guide
- an interactive color or theme example
- a comparison card that is reused across several pages
- a live code demo where static code is not enough

Weak MDX candidates:

- a normal tutorial that only needs code blocks
- a concept page with no interactivity
- a page using cards because the text is thin
- a resource list that could be a table or headings

## A simple decision rule

| Need | Use |
| --- | --- |
| Normal documentation page | Markdown |
| Documentation page with a local interactive example | MDX |
| Docs navigation, search, i18n, and code highlighting | Starlight |
| Custom landing page outside docs | Astro page |
| Complex app-like tool | Astro page with islands, or a separate app surface |

## References

- MDX integration: https://docs.astro.build/en/guides/integrations-guide/mdx/
- Starlight docs: https://starlight.astro.build/
- Starlight authoring content: https://starlight.astro.build/guides/authoring-content/
