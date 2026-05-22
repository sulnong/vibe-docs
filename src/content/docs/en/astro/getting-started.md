---
title: "Getting Started"
description: "Install Astro, create a project, run the dev server, and understand the first commands and files you will use."
---

# Getting Started

The fastest way to start an Astro project is the official create command:

```bash
npm create astro@latest
```

The wizard asks where to create the project, which starter to use, whether to install dependencies, and whether to initialize Git. For a first project, choose a minimal starter or a docs-oriented starter so you can see Astro's file structure without too much application code around it.

## First commands

After setup, move into the project and run the local server:

```bash
cd my-astro-site
npm run dev
```

The core scripts usually are:

```bash
npm run dev
npm run build
npm run preview
```

`dev` starts the development server with hot reload. `build` creates production output. `preview` serves the built output locally, which is useful because it lets you inspect the same files you would deploy.

## What to inspect first

Open the project and look for these files and folders:

- `astro.config.mjs` controls integrations, site URL, base path, output mode, and adapter settings.
- `src/pages/` contains file-based routes.
- `src/components/` contains reusable Astro or framework components.
- `src/layouts/` usually contains page wrappers.
- `src/content/` contains structured Markdown, MDX, or data collections.
- `public/` contains static files copied directly to the final build.

Do not try to understand every integration on day one. Start by editing a page, adding a second route, and observing how the dev server updates.

## Your first page edit

Create a simple page:

```astro
---
const title = 'Hello Astro';
---

<html lang="en">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>This page was rendered by Astro.</p>
  </body>
</html>
```

If this file is saved as `src/pages/hello.astro`, Astro serves it at `/hello/`.

## Common first changes

Most first projects change the homepage, add shared layout, and install one integration. For example:

- Edit `src/pages/index.astro` to change the homepage.
- Add `src/layouts/BaseLayout.astro` for shared `<head>`, header, and footer markup.
- Add Markdown or MDX for content pages.
- Add Starlight if the project is primarily documentation.
- Add a UI framework integration only when a component truly needs it.

## Common mistakes

The first confusion is often expecting Astro to behave like a client-side app framework. Astro renders HTML first. Browser JavaScript appears only when you add scripts or hydrate client components.

The second confusion is deployment base paths. A site deployed at `https://example.com/` can usually use `/` as its base. A GitHub Pages project site such as `https://user.github.io/repo/` needs the repo name as the base path.

## Sources

- Install guide: https://docs.astro.build/en/install-and-setup/
- Project structure: https://docs.astro.build/en/basics/project-structure/
- Astro CLI: https://docs.astro.build/en/reference/cli-reference/
