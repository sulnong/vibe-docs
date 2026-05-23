---
title: "Getting Started"
description: "Create a new Astro project, run it locally, edit the first route, add a second page, and build the production output."
---

# Getting Started

The fastest way to understand Astro is to make one small site and follow the full loop: create the project, run the development server, edit a route, add another route, build the output, and preview what would be deployed.

Astro 6 requires a modern Node.js runtime. This project currently uses Astro `^6.3.6`, whose package metadata requires Node.js `>=22.12.0`. Check before creating the site:

```bash
node --version
npm --version
```

If the Node version is too old, update Node first. Many confusing Astro errors are really dependency or runtime mismatches.

## Create a project

Use the official project wizard:

```bash
npm create astro@latest
```

The wizard asks for a directory, a starter template, whether to install dependencies, and whether to initialize Git. For a first project, choose the minimal starter. If you already know you are building documentation, the Starlight starter is reasonable, but the minimal starter makes Astro's own shape easier to see.

After the wizard finishes:

```bash
cd my-astro-site
npm run dev
```

The terminal prints a local URL, usually `http://localhost:4321/`. Open it in a browser and keep the dev server running while you edit files.

## Edit the homepage

Open `src/pages/index.astro`. Replace the page body with a small example:

```astro
---
const name = 'Astro';
const features = ['HTML first', 'components when useful', 'JavaScript by choice'];
---

<main>
  <h1>Hello {name}</h1>
  <ul>
    {features.map((feature) => <li>{feature}</li>)}
  </ul>
</main>
```

Save the file and refresh the browser if it does not update automatically. This is the core development loop: edit a file, see the route update, keep the page mostly HTML until it needs more.

The code inside frontmatter runs before the page is sent to the browser. The list in the template becomes HTML. No client-side JavaScript is required for this example.

## Add a second route

Create `src/pages/about.astro`:

```astro
---
const title = 'About this site';
---

<main>
  <h1>{title}</h1>
  <p>Astro turns this file into the /about/ route.</p>
</main>
```

Visit `/about/`. No route table is required because files in `src/pages/` become URLs.

The route mapping is simple:

```text
src/pages/index.astro   -> /
src/pages/about.astro   -> /about/
```

Nested folders work the same way. A file at `src/pages/docs/install.astro` becomes `/docs/install/`.

## Add a layout

Once two pages share structure, add a layout instead of duplicating markup. Create `src/layouts/BaseLayout.astro`:

```astro
---
const { title, description = 'A small Astro site' } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="description" content={description} />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

Then use it from `src/pages/about.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="About this site">
  <main>
    <h1>About this site</h1>
    <p>Layouts keep repeated document structure in one place.</p>
  </main>
</BaseLayout>
```

Layouts are a natural place for metadata, navigation, theme scripts, and shared page shells. They also make later deployment work easier because titles and descriptions are less likely to drift.

## Learn the daily scripts

Most Astro projects use these scripts constantly:

```bash
npm run dev
npm run build
npm run preview
```

`dev` starts the development server. `build` creates production output in `dist/`. `preview` serves the built output locally so you can inspect the files you would deploy.

Run a build once, even in a throwaway project:

```bash
npm run build
```

The build step can catch problems the dev server does not make obvious: missing imports, invalid content, TypeScript issues, and deployment-path mistakes.

## Open these files first

The default project is small enough to inspect directly:

```text
astro.config.mjs
package.json
public/
src/
  components/
  layouts/
  pages/
```

Start with `src/pages/` and `astro.config.mjs`. Pages explain how URLs appear. The config file explains which integrations, adapters, site URL, base path, and output mode the project uses.

Do not add every integration during the first hour. React, Vue, Tailwind, MDX, Starlight, and adapters are useful when they solve a real problem. The plain project should make sense first.

## Choose the right starting shape

The first meaningful decision is what kind of site you are building:

| Site shape | Start with |
| --- | --- |
| Small marketing or project site | Pages, layouts, and Astro components |
| Blog or editorial site | Pages plus content collections |
| Documentation site | Starlight, content collections, and MDX only when needed |
| App-like dashboard | Decide whether Astro is only the shell, or whether a full app framework is simpler |

This choice affects folder structure, routing, metadata, and deployment. A content site can stay fast and simple. An app-like surface may still use Astro, but it will need more client islands and clearer state boundaries.

## If the first command fails

Most first-run issues are ordinary environment problems. Check versions and package visibility:

```bash
node --version
npm --version
npm info astro version
```

If `npm create astro@latest` is not found or hangs, update Node/npm or use the package manager your team standardizes on. If the dev server starts but styles or links break after deployment, check `site` and `base` in `astro.config.mjs`.

Common symptoms:

| Symptom | First place to look |
| --- | --- |
| `npm create astro@latest` fails immediately | Node and npm versions |
| Page works in dev but CSS breaks after deploy | `base` in `astro.config.mjs` |
| Route works locally but 404s on static hosting | Built output and host rewrite rules |
| Client component renders but does not respond | Missing `client:*` directive |
| Build fails only in CI | Node version and lockfile consistency |

For deployment-path problems, [GitHub Pages](/en/astro/github-pages/) is the next page to read.

## References

- Install guide: https://docs.astro.build/en/install-and-setup/
- Project structure: https://docs.astro.build/en/basics/project-structure/
- Astro CLI: https://docs.astro.build/en/reference/cli-reference/
- Astro package metadata: https://www.npmjs.com/package/astro
