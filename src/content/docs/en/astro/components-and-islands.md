---
title: "Components & Islands"
description: "Understand Astro components, framework components, and the Islands architecture that keeps JavaScript scoped."
---

# Components & Islands

Astro components use the `.astro` file format. They can contain frontmatter for server-side logic, HTML-like markup, scoped styles, and slots. They are the best default for static UI and content-heavy layouts.

Framework components are different. Astro can render React, Vue, Svelte, Solid, and other UI framework components through integrations. Those components are useful when you need client-side state or browser APIs.

## Astro components

An Astro component has two parts: frontmatter and template.

```astro
---
const { title } = Astro.props;
const updated = new Date().toISOString();
---

<article>
  <h2>{title}</h2>
  <p>Last generated: {updated}</p>
  <slot />
</article>
```

The frontmatter runs on the server or during the build. The template becomes HTML. Styles written inside the component are scoped by default.

## Slots

Slots let a component wrap content supplied by the parent:

```astro
<Card title="Fast by default">
  <p>Astro renders HTML first and hydrates only what you choose.</p>
</Card>
```

This makes Astro components useful for documentation callouts, cards, examples, and reusable page sections.

## Framework components

Use a framework component when the UI needs browser behavior: a combobox, a live chart, a complex filter panel, a drag-and-drop editor, or an authenticated app widget.

The important detail is that importing a React component does not automatically ship it as a browser app. Astro renders it to HTML unless you add a client directive.

## Client directives

Common directives include:

- `client:load` hydrates immediately.
- `client:idle` hydrates when the browser is idle.
- `client:visible` hydrates when the component enters the viewport.
- `client:media` hydrates only when a media query matches.
- `client:only` skips server rendering and renders only on the client.

Choose the least eager directive that still gives the user a good experience. A below-the-fold interactive demo usually does not need `client:load`.

## Why islands matter

The Islands architecture helps keep pages fast because the document can remain mostly static. Instead of one large app taking over the page, you get small interactive pieces inside a stable HTML shell.

For documentation, this is a natural fit. Search engines and readers get content immediately. Interactions such as theme switching, copy buttons, search, or examples can hydrate independently.

## Sources

- Astro components: https://docs.astro.build/en/basics/astro-components/
- Islands architecture: https://docs.astro.build/en/concepts/islands/
- UI framework components: https://docs.astro.build/en/guides/framework-components/
- Client directives: https://docs.astro.build/en/reference/directives-reference/#client-directives
