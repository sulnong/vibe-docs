---
title: "内容集合"
description: "使用 Astro 内容集合为 Markdown 和 MDX 内容添加 schema 校验，并更安全地查询内容。"
---

# 内容集合

内容集合让 Astro 能以结构化方式加载 Markdown、MDX 和数据文件。它不是把内容当成一堆松散文件，而是定义 collection、校验 frontmatter，并通过 Astro 内容 API 查询条目。

当站点超过几个页面后，这一点会变得很重要。标题、描述、日期、标签、草稿状态、来源和作者字段，不应该完全依靠手工复制。

## 为什么需要集合

没有 schema 时，内容错误通常很晚才暴露：标题缺失、日期格式写错、草稿标记拼错、页面忘了 description。内容集合可以把这些问题提前到编辑或构建阶段。

常见收益包括：

- 校验 frontmatter。
- 类型安全地查询内容。
- 统一页面 metadata。
- 编辑器反馈更好。
- 更容易生成索引页、feed 和相关内容。

## 基本结构

集合通常放在 `src/content/` 下。例如 blog collection：

```text
src/content/blog/
  first-post.md
  second-post.md
```

schema 可以在内容配置文件中定义：

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

## 查询内容

内容结构化后，页面可以查询它：

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

具体 API 可能随 Astro 版本演进，但目的稳定：内容应该可查询、可校验、有类型。

## 文档站中的集合

文档页同样受益于 schema。一个主题页通常需要：

- `title`
- `description`
- 语言或 locale
- 来源链接
- 审核状态
- 相关页面

即使 Starlight 已经管理自己的 docs collection，背后的原则也一样：内容是数据模型，不只是一个文本文件夹。

## 质量门槛

对于生成式文档，内容集合只是质量控制的一部分。它可以确保必要 metadata 存在。额外检查还可以覆盖双语页面对应、来源链接、占位文本、坏链接和重复内容。

这些检查组合起来，才能把生成草稿变成可审核的文档，而不是一堆 Markdown。

## Sources

- Content collections：https://docs.astro.build/en/guides/content-collections/
- Content configuration：https://docs.astro.build/en/reference/content-loader-reference/
- Starlight 内容编写：https://starlight.astro.build/guides/authoring-content/
