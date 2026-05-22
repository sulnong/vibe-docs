---
title: "MDX & Starlight"
description: "Use MDX for component-rich content and Starlight for documentation sites built on Astro."
---

# MDX & Starlight

Astro can render Markdown, and the MDX integration lets content files include components inside Markdown-like documents. Starlight is a documentation framework built on Astro. Together they cover two different needs: expressive content and a complete docs interface.

## Markdown first

Use plain Markdown when the page is mostly text, headings, lists, links, and code blocks. Markdown is easy to generate, review, diff, translate, and maintain.

Most documentation should start as Markdown. It keeps the content portable and reduces the chance that visual components hide weak writing.

## When MDX helps

MDX is useful when a document needs embedded components:

- interactive examples
- custom cards
- pricing or comparison tables
- diagrams
- reusable callouts
- live demos

For example, a page might explain a concept in text and then render a small component that lets readers try the idea.

The tradeoff is complexity. MDX pages are harder to generate and review than plain Markdown. Use MDX when the component improves understanding, not just to decorate the page.

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

## How to decide

Use this simple rule:

- Markdown for normal docs.
- MDX for docs that need local components.
- Starlight for the documentation shell.
- Custom Astro pages for topic indexes, landing pages, and special layouts outside the docs tree.

## Sources

- MDX integration: https://docs.astro.build/en/guides/integrations-guide/mdx/
- Starlight docs: https://starlight.astro.build/
- Starlight authoring content: https://starlight.astro.build/guides/authoring-content/
