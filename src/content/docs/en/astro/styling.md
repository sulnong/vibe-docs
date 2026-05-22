---
title: "Styling"
description: "Understand Astro scoped styles, global styles, CSS variables, and how this guide implements switchable page styles."
---

# Styling

Astro supports normal CSS, scoped styles inside `.astro` components, imported global CSS, CSS preprocessors, CSS modules, Tailwind, and other styling integrations. You can start with plain CSS and add tools only when the project needs them.

For documentation sites, the most important styling goal is not novelty. It is readable pages, predictable navigation, accessible contrast, and a visual system that can evolve without rewriting content.

## Scoped component styles

Styles written inside an Astro component are scoped by default:

```astro
<section class="hero">
  <h1>Fast content sites</h1>
</section>

<style>
  .hero {
    padding: 4rem 1rem;
  }
</style>
```

The `.hero` style applies to that component's rendered markup instead of leaking across the whole site. This is useful for local layout and one-off component styling.

## Global styles

Global styles are better for design tokens, typography, resets, prose styling, theme variables, and layout rules that must affect the whole site.

In a Starlight project, global CSS can also override Starlight variables and component surfaces. That is how this guide changes the page style while keeping the same content and routes.

## CSS variables

CSS variables are the simplest way to build switchable styles. Define tokens for color, radius, shadows, font families, and surfaces:

```css
:root {
  --site-accent: #3b82f6;
  --site-surface: #ffffff;
  --site-radius: 8px;
}
```

Then components consume tokens instead of hard-coded values:

```css
.card {
  border-radius: var(--site-radius);
  background: var(--site-surface);
}
```

## How this site switches styles

This guide keeps content and URL structure unchanged while changing visual style through `data-theme-pack` on the `<html>` element. The style switcher stores the selected pack in `localStorage`, and CSS files under `src/styles/themes/` define the tokens for each pack.

That means `Base`, `Pop`, `Luminous`, `Retro`, and `Pixel` are presentations of the same document, not separate SEO pages. Search engines see one URL; readers choose the interface they prefer.

## What should change between styles

A useful style pack should affect more than the sidebar color. It should influence:

- page background
- navigation surface
- sidebar surface
- headings
- links
- code blocks
- borders
- shadows
- cards and buttons

At the same time, it should not harm legibility. Luminous visual effects, for example, need enough contrast that long paragraphs remain comfortable.

## Sources

- Styling guide: https://docs.astro.build/en/guides/styling/
- CSS variables on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- Starlight CSS customization: https://starlight.astro.build/guides/css-and-tailwind/
