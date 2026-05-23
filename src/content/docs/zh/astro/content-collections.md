---
title: "内容集合"
description: "使用 Astro 内容集合校验内容、查询条目、生成路由，并保持 metadata 一致。"
---

# 内容集合

Content collections 让 Astro 能以结构化方式加载 Markdown、MDX 和数据文件。它不是把内容当成一堆松散文件，而是定义 collection、校验 frontmatter，并通过 Astro 内容 API 查询条目。

当站点超过几个页面后，这一点会变得很重要。标题、描述、日期、标签、草稿状态、来源和关系，不应该完全依靠复制粘贴时的自觉。

## 什么时候值得使用集合

当内容有重复形状时，就适合使用 collection：

- 带日期、作者、标签和摘要的博客文章
- 带 description 和相关链接的文档页面
- 带版本号和发布日期的 changelog
- 带客户、产品、行业字段的 case study
- 用来生成页面的数据文件

如果只是两三个手写页面，未必需要 collection。但一旦内容需要重复、查询、筛选或生成路由，collection 很快就会变得划算。

## 基本结构

一个 blog collection 可以是这样：

```text
src/content/blog/
  first-post.md
  second-post.md
```

在 `src/content.config.ts` 中定义 collection：

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

然后写一篇内容：

```md
---
title: "First post"
description: "A short introduction to the site."
publishedAt: 2026-05-23
tags: ["astro", "content"]
---

This is the body of the post.
```

如果必要字段缺失或类型不对，Astro 可以在开发或构建阶段暴露问题，而不是让不一致的 metadata 进入生产环境。

## 查询条目

用 `getCollection()` 加载条目：

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

这样索引页就可以由内容 metadata 渲染，而不是手写一组固定链接。

## 生成路由

Collection 条目不会自动变成页面。需要一个动态路由把条目转成 URL：

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

如果这个文件位于 `src/pages/blog/[id].astro`，每篇条目都会生成 `/blog/` 下的页面。

## 谨慎设计 metadata

有用的 schema 应该足够严格，能发现错误；但也不要严格到让每次编辑都很痛苦。

| 字段 | 作用 |
| --- | --- |
| `title` | 页面标题、索引、社交预览 |
| `description` | 搜索摘要、卡片、列表页 |
| `publishedAt` 或 `updatedAt` | 排序、时效性、changelog |
| `tags` | topic index 和相关内容 |
| `draft` | 防止未完成内容发布 |
| `canonical` | 处理导入或转载内容 |
| `related` | 支持人工整理的阅读路径 |

对于生成式文档，schema 应该约束公开站点真正会用到的 metadata。不要因为内部研究阶段用过某个字段，就把它带进公开内容模型。

## Starlight 中的 collections

Starlight 使用 Astro content collections 管理 docs 内容。这也是 Starlight 能校验 frontmatter、生成导航、支持搜索和本地化页面的基础。

你仍然可以在 Starlight docs 之外定义额外 collection。例如文档站可以增加 changelog、examples、integrations 或 release notes 集合。

## 常见问题

| 症状 | 检查什么 |
| --- | --- |
| 构建在日期字段失败 | YAML 日期格式或 schema 类型 |
| 页面能渲染但索引页没有它 | filter 函数排除了 draft 或 tag |
| 动态路由 URL 不符合预期 | 路由使用 `id`，但想要的是 frontmatter slug |
| 多语言 metadata 不一致 | schema 把本该必填的字段设成可选 |
| 内容模型变得难编辑 | schema 在建模内部流程，而不是公开内容 |

## 参考资料

- Content collections：https://docs.astro.build/en/guides/content-collections/
- Content configuration：https://docs.astro.build/en/reference/content-loader-reference/
- Starlight 内容编写：https://starlight.astro.build/guides/authoring-content/
