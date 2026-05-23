---
title: "Content Collections"
description: "Use Astro content collections to validate content, query entries, generate routes, and keep metadata consistent."
---

# Content Collections

Content collections give Astro a structured way to load Markdown, MDX, and data files. Instead of treating content as loose files, you define collections, validate frontmatter, and query entries through Astro's content APIs.

This matters as soon as a site has more than a few pages. Titles, descriptions, dates, tags, draft flags, sources, and relationships should not depend on copy-paste discipline alone.

## When collections are worth it

Use a collection when content has a repeated shape:

- blog posts with dates, authors, tags, and summaries
- documentation pages with descriptions and related links
- changelog entries with versions and release dates
- case studies with customers, products, and industries
- data files that drive generated pages

You may not need a collection for two or three hand-written pages. Once content is repeated, queried, filtered, or generated into routes, a collection pays for itself quickly.

## Basic structure

A blog collection might look like this:

```text
src/content/blog/
  first-post.md
  second-post.md
```

Define the collection in `src/content.config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

Then write an entry:

```md
---
title: "First post"
description: "A short introduction to the site."
publishedAt: 2026-05-23
tags: ["astro", "content"]
---

This is the body of the post.
```

If a required field is missing or has the wrong type, Astro can surface the problem during development or build instead of letting inconsistent metadata reach production.

## Query entries

Use `getCollection()` to load entries:

```astro
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog', ({ data }) => !data.draft);
posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
---

<ul>
  {posts.map((post) => (
    <li>
      <a href={`/blog/${post.id}/`}>{post.data.title}</a>
      <p>{post.data.description}</p>
    </li>
  ))}
</ul>
```

The page can now render an index from content metadata rather than hard-coded links.

## Generate routes

Collection entries do not automatically become pages. A dynamic route turns entries into URLs:

```astro
---
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---

<article>
  <h1>{post.data.title}</h1>
  <p>{post.data.description}</p>
  <Content />
</article>
```

With this file at `src/pages/blog/[id].astro`, each entry becomes a page under `/blog/`.

## Choose metadata deliberately

A useful schema is strict enough to catch mistakes but not so strict that every content edit becomes painful.

| Field | Why it helps |
| --- | --- |
| `title` | Page heading, indexes, social previews |
| `description` | Search snippets, cards, list pages |
| `publishedAt` or `updatedAt` | Sorting, freshness, changelogs |
| `tags` | Topic indexes and related content |
| `draft` | Prevents unfinished content from shipping |
| `canonical` | Handles imported or syndicated content |
| `related` | Supports curated reading paths |

For generated documentation, the schema should enforce metadata that the public site actually uses. Avoid adding fields just because they were useful during research.

## Collections in Starlight

Starlight uses Astro content collections for docs content. That is why a Starlight documentation site can validate frontmatter, generate navigation, power search, and support localized pages.

You can still define additional collections beside Starlight docs. For example, a docs site might add collections for changelog entries, examples, integrations, or release notes.

## Common mistakes

| Symptom | What to check |
| --- | --- |
| Build fails on a date field | YAML date format or schema type |
| Page renders but index is missing it | Filter function excludes draft or tag |
| Dynamic route has wrong URL | Route uses `id` but the desired slug is in frontmatter |
| Metadata differs across languages | Schema allows optional fields that should be required |
| Content model feels hard to edit | Schema is modeling internal workflow instead of public content |

## References

- Content collections: https://docs.astro.build/en/guides/content-collections/
- Content configuration: https://docs.astro.build/en/reference/content-loader-reference/
- Starlight authoring content: https://starlight.astro.build/guides/authoring-content/
