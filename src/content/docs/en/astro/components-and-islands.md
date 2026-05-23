---
title: "Components & Islands"
description: "Understand Astro components, framework components, slots, client directives, and the island model that keeps JavaScript scoped."
---

# Components & Islands

Astro has two kinds of components that are easy to confuse:

- Astro components, written as `.astro` files, are the default for HTML-first UI.
- Framework components, such as React or Vue components, are for parts of the page that need browser state or browser APIs.

The distinction matters because importing a component does not automatically mean Astro ships a client application. Static UI can stay static. Interactive UI can hydrate as an island.

## Astro components

An Astro component has frontmatter and a template:

```astro
---
const { title, tone = 'default' } = Astro.props;
---

<section class:list={['callout', `callout-${tone}`]}>
  <h2>{title}</h2>
  <slot />
</section>

<style>
  .callout {
    border: 1px solid var(--sl-color-gray-5);
    border-radius: 0.5rem;
    padding: 1rem;
  }
</style>
```

The frontmatter runs during the build or on the server. The template becomes HTML. Styles inside the component are scoped by default.

Use Astro components for content wrappers, layout sections, cards, callouts, navigation surfaces, metadata helpers, and anything that does not need browser behavior.

## Props and slots

Props pass data into a component. Slots pass content into a component.

```astro
---
import Callout from '../components/Callout.astro';
---

<Callout title="Fast by default" tone="info">
  <p>Astro renders HTML first and hydrates only what you choose.</p>
</Callout>
```

This pattern is useful in documentation because the component provides structure while the page keeps readable Markdown-like content.

Named slots help when a component needs more than one content region:

```astro
<FeatureCard>
  <span slot="eyebrow">Routing</span>
  <h2>Files become URLs</h2>
  <p>Keep the route tree visible in the filesystem.</p>
</FeatureCard>
```

Do not turn every paragraph into a component. Components are useful when they remove real repetition or make structure clearer.

## Framework components

Use a framework component when the UI needs browser behavior:

- a combobox
- a live chart
- a filter panel
- drag and drop
- media controls
- a code playground
- an authenticated widget

Astro supports React, Vue, Svelte, Solid, and other frameworks through integrations. A project can use more than one framework, but that is rarely the simplest choice. Each framework adds dependencies, conventions, and bundle cost.

## Client directives

A framework component only becomes interactive in the browser when you add a client directive:

```astro
---
import SearchBox from '../components/SearchBox.jsx';
---

<SearchBox client:visible />
```

Common directives:

| Directive | Behavior | Good fit |
| --- | --- | --- |
| `client:load` | Hydrates as soon as possible | Above-the-fold controls that must work immediately |
| `client:idle` | Hydrates when the browser is idle | Nice-to-have widgets |
| `client:visible` | Hydrates when the component enters the viewport | Demos and widgets lower on the page |
| `client:media` | Hydrates when a media query matches | Mobile-only or desktop-only interactions |
| `client:only` | Renders only on the client | Components that cannot run during server rendering |

Choose the least eager directive that still gives readers a good experience. A filter at the top of a page may need `client:load`. A demo below several sections is usually better with `client:visible`.

## Why islands matter

The Islands architecture lets a page remain mostly static while specific parts become interactive. Instead of one large app taking over the document, Astro produces a stable HTML shell with small hydrated islands inside it.

For documentation, this is a natural fit. Readers and search engines get the content immediately. Interactions such as search, theme switching, copy buttons, playgrounds, or charts can load independently.

The result is not automatically fast; a large island can still ship too much JavaScript. The advantage is that Astro gives you a clear boundary where you can ask whether the JavaScript is worth it.

## A practical component choice

| Need | Start with |
| --- | --- |
| Repeated static page section | Astro component |
| Markdown content with consistent wrapper | Astro component or Starlight component |
| Interactive form control | Framework component with `client:load` or `client:idle` |
| Below-the-fold demo | Framework component with `client:visible` |
| Browser-only API such as `window` at render time | `client:only` or move browser code into an effect |
| Site-wide app state | Reconsider whether Astro is the right center for that surface |

## Common mistakes

| Symptom | What to check |
| --- | --- |
| React component renders but clicks do nothing | Missing `client:*` directive |
| Build fails because `window` is undefined | Browser API is running during server render |
| Page ships too much JavaScript | Islands are too large or hydrated too eagerly |
| Component styles leak unexpectedly | Global CSS is being used where scoped styles would be safer |
| Every section becomes a component | The abstraction is hiding content rather than simplifying it |

## References

- Astro components: https://docs.astro.build/en/basics/astro-components/
- Islands architecture: https://docs.astro.build/en/concepts/islands/
- UI framework components: https://docs.astro.build/en/guides/framework-components/
- Client directives: https://docs.astro.build/en/reference/directives-reference/#client-directives
