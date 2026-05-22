---
title: "Content Collections"
description: "Use Astro content collections to validate Markdown and MDX content with schemas and query it safely."
---

# Content Collections

Content collections give Astro a structured way to load Markdown, MDX, and data files. Instead of treating content as loose files, you define collections, validate frontmatter, and query entries through Astro's content APIs.

This matters as soon as a site has more than a few pages. Titles, descriptions, dates, tags, draft flags, sources, and author fields should not be copied by hand with no validation.

## Why collections exist

Without a schema, content errors show up late: a missing title, a typo in a date, a wrong draft flag, or a page that forgets its description. Collections move those problems closer to authoring time.

Typical benefits include:

- Frontmatter validation.
- Type-safe content queries.
- Consistent metadata across pages.
- Better editor feedback.
- Easier generation of indexes, feeds, and related content.

## Basic shape

Collections live under `src/content/`. A blog collection might look like this:

```text
src/content/blog/
  first-post.md
  second-post.md
```

The schema is defined in a content config file:

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

## Querying content

Once content is structured, pages can query it:

```astro
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
---

<ul>
  {posts.map((post) => (
    <li>
      <a href={`/blog/${post.slug}/`}>{post.data.title}</a>
    </li>
  ))}
</ul>
```

The exact API can evolve across Astro versions, but the purpose is stable: content should be queryable, typed, and validated.

## Collections in documentation

Documentation pages benefit from schemas too. A topic page usually needs:

- `title`
- `description`
- language or locale
- source links
- status or review state
- related pages

Even when Starlight handles its own docs collection, the same principle applies: content is a data model, not just a folder of text files.

## Quality gates

For generated documentation, collections are one part of quality control. They can ensure required metadata exists. Additional checks can verify bilingual page pairs, source sections, placeholder text, broken links, and duplicate pages.

That combination is what turns generated drafts into reviewable documentation rather than a pile of Markdown.

## Sources

- Content collections: https://docs.astro.build/en/guides/content-collections/
- Content configuration: https://docs.astro.build/en/reference/content-loader-reference/
- Starlight authoring content: https://starlight.astro.build/guides/authoring-content/
