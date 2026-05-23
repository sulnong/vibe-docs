---
title: "Resources"
description: "Official Astro resources, Starlight links, deployment references, and where to verify behavior when building Astro sites."
---

# Resources

Use this page when you need to verify Astro behavior, find the right official guide, or continue learning after the main pages in this topic.

The most useful habit is to start with the official documentation page that matches the task, then use the configuration reference, integration docs, or repository when exact behavior matters.

## Official Astro resources

| Resource | Use it for |
| --- | --- |
| https://docs.astro.build/ | Main documentation, guides, concepts, references |
| https://github.com/withastro/astro | Source code, issues, releases, package history |
| https://docs.astro.build/en/reference/configuration-reference/ | Exact config options such as `site`, `base`, `output`, and adapters |
| https://docs.astro.build/en/reference/cli-reference/ | CLI commands and flags |
| https://docs.astro.build/en/guides/integrations-guide/ | Official and community integration entry points |

## Core learning topics

- Why Astro: https://docs.astro.build/en/concepts/why-astro/
- Islands architecture: https://docs.astro.build/en/concepts/islands/
- Project structure: https://docs.astro.build/en/basics/project-structure/
- Routing: https://docs.astro.build/en/guides/routing/
- Astro components: https://docs.astro.build/en/basics/astro-components/
- Framework components: https://docs.astro.build/en/guides/framework-components/
- Client directives: https://docs.astro.build/en/reference/directives-reference/#client-directives

These pages explain the mental model. Read them before debugging a complex integration; many problems come from expecting Astro to behave like a client app framework.

## Content and authoring

- Content collections: https://docs.astro.build/en/guides/content-collections/
- MDX integration: https://docs.astro.build/en/guides/integrations-guide/mdx/
- Markdown content: https://docs.astro.build/en/guides/markdown-content/
- Images: https://docs.astro.build/en/guides/images/

For content-heavy sites, the content collection docs are especially important. They explain how content becomes a typed data model instead of a folder of loose Markdown files.

## Styling

- Styling guide: https://docs.astro.build/en/guides/styling/
- CSS custom properties on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- Starlight CSS customization: https://starlight.astro.build/guides/css-and-tailwind/

Use Astro's styling guide for framework-level behavior and MDN for CSS language details.

## Documentation with Starlight

- Starlight documentation: https://starlight.astro.build/
- Starlight authoring content: https://starlight.astro.build/guides/authoring-content/
- Starlight i18n: https://starlight.astro.build/guides/i18n/
- Starlight configuration: https://starlight.astro.build/reference/configuration/
- Starlight components: https://starlight.astro.build/reference/components/

Starlight is the right place to verify docs-shell behavior: sidebar, search, i18n, page metadata, code highlighting, and built-in components.

## Deployment

- Deploy Astro: https://docs.astro.build/en/guides/deploy/
- Deploy to GitHub Pages: https://docs.astro.build/en/guides/deploy/github/
- On-demand rendering: https://docs.astro.build/en/guides/on-demand-rendering/
- GitHub Pages custom workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- GitHub deploy-pages action: https://github.com/actions/deploy-pages

For deployment problems, check the URL shape first: `site`, `base`, output directory, and whether the host serves deep routes correctly.

## Release and issue tracking

- Astro releases: https://github.com/withastro/astro/releases
- Astro issues: https://github.com/withastro/astro/issues
- Astro discussions: https://github.com/withastro/astro/discussions

Use release notes and issues when behavior changed between versions or when a guide seems inconsistent with the installed package.

## How to use sources well

Do not treat resources as a replacement for the page you are writing or reading. A good documentation page should explain the task directly, then link to sources for verification and deeper reference.

When exact behavior matters, prefer this order:

1. The official guide for the task.
2. The reference page for the exact option or API.
3. The repository or release notes for version-specific changes.
4. Community issues only after checking official facts.

## References

- Astro docs: https://docs.astro.build/
- Astro repository: https://github.com/withastro/astro
