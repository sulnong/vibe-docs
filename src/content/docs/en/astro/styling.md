---
title: "Styling"
description: "Understand scoped styles, global CSS, CSS variables, Tailwind, and Starlight customization in Astro projects."
---

# Styling

Astro supports normal CSS, scoped styles inside `.astro` components, imported global CSS, CSS modules, preprocessors, Tailwind, and other styling integrations. Start with plain CSS unless the project has a clear reason to add more.

For documentation sites, the most important styling goal is not novelty. It is readable pages, predictable navigation, accessible contrast, code blocks that scan well, and a visual system that can evolve without rewriting content.

## Scoped component styles

Styles written inside an Astro component are scoped by default:

```astro
<section class="hero">
  <h1>Fast content sites</h1>
  <p>HTML first, interactivity when needed.</p>
</section>

<style>
  .hero {
    padding: 4rem 1rem;
  }

  .hero h1 {
    max-width: 12ch;
  }
</style>
```

The `.hero` styles apply to this component's rendered markup instead of leaking across the whole site. This is useful for local layout, reusable cards, custom sections, and one-off page pieces.

Scoped styles are not a replacement for a design system. They are a way to keep component-specific rules near the component.

## Global styles

Global styles are better for rules that should affect the whole site:

- design tokens
- typography
- resets
- prose styling
- theme variables
- shared layout primitives
- Starlight CSS custom properties

In Astro, global CSS is usually imported from a layout, a top-level page, or an integration config. In a Starlight site, `customCss` can load global CSS that customizes the docs UI.

Use global CSS intentionally. If a rule only exists for one component, keep it scoped.

## CSS variables

CSS variables are a simple way to keep visual decisions consistent:

```css
:root {
  --site-accent: #2563eb;
  --site-surface: #ffffff;
  --site-border: #d4d4d8;
  --site-radius: 8px;
}

.card {
  border: 1px solid var(--site-border);
  border-radius: var(--site-radius);
  background: var(--site-surface);
}
```

Tokens are especially useful for documentation because the same content appears across many page types: conceptual pages, tutorials, references, FAQ, and resources. The design can change without rewriting Markdown.

## Styling Starlight

Starlight exposes CSS variables and extension points so you can customize the docs shell without rebuilding it from scratch. A minimal config looks like this:

```js
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Docs',
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
```

Use Starlight customization for the documentation experience: color tokens, typography, navigation surfaces, code blocks, and content width. Use custom Astro components when a page needs a special section or interactive surface.

## Tailwind and other tools

Tailwind can work well in Astro, especially for product pages and teams that already use utility classes. It is not required for Astro and not required for Starlight.

Choose based on team workflow:

| Approach | Good fit |
| --- | --- |
| Plain CSS | Small sites, docs, predictable styling, low tooling |
| Scoped styles | Component-local layout and reusable UI |
| CSS variables | Themes, tokens, Starlight customization |
| Tailwind | Teams already using utility-first CSS |
| CSS modules | Componentized apps with class-name isolation preferences |

Avoid mixing too many styling systems without a reason. A docs site with global tokens, scoped component styles, and a small custom CSS file is often easier to maintain than a stack of overlapping tools.

## Current site pattern

This site keeps content and URL structure unchanged while changing visual style through `data-theme-pack` on the `<html>` element. A style switcher stores the selected pack in `localStorage`, and CSS files under `src/styles/themes/` define tokens for each pack.

That means style packs are presentations of the same document, not separate pages. Search engines see one URL; readers choose the interface they prefer.

When building a similar style system, keep these boundaries clear:

- Content should not change when the style pack changes.
- URLs should not multiply for visual variants.
- Contrast must stay readable in every pack.
- Code blocks, sidebars, and tables need explicit attention.
- Motion and glow effects should never make long-form reading harder.

## Common styling problems

| Symptom | What to check |
| --- | --- |
| Component styles affect unrelated pages | Rule is global when it should be scoped |
| Starlight colors do not change | Wrong variable name or CSS file not loaded by `customCss` |
| Dark mode has unreadable text | Token pair lacks contrast |
| Code blocks look detached from theme | Code colors and surfaces were not customized together |
| Layout shifts between pages | Components lack stable spacing or width rules |

## References

- Styling guide: https://docs.astro.build/en/guides/styling/
- CSS variables on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- Starlight CSS customization: https://starlight.astro.build/guides/css-and-tailwind/
