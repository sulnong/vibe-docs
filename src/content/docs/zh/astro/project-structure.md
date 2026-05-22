---
title: "项目结构"
description: "理解 Astro 项目中的主要目录和配置文件，方便后续修改页面、组件、内容和部署配置。"
---

# 项目结构

Astro 项目的根目录通常很简洁。一个常见结构如下：

```text
astro.config.mjs
package.json
public/
src/
  components/
  content/
  layouts/
  pages/
```

不同模板和集成会增加额外文件，但这些目录基本构成了 Astro 的核心模型。

## `src/pages/`

`src/pages/` 是文件路由的起点。这个目录下的文件会变成 URL。比如 `src/pages/about.astro` 会变成 `/about/`，`src/pages/blog/index.astro` 会变成 `/blog/`。

页面可以是 `.astro`、`.md`、`.mdx`，也可能在集成支持下使用其他文件类型。文档站使用 Starlight 时，docs 内容路由会由 Starlight 管理，但“文件映射到 URL”的思路仍然很重要。

## `src/components/`

组件是可复用 UI。静态或半静态 UI 优先用 `.astro` 组件，例如卡片、布局区块、页头、页脚和内容容器。需要浏览器状态或浏览器 API 时，再使用 React、Vue、Svelte 等框架组件。

一个实用原则是：先用 Astro 组件，只有确实需要客户端交互时才引入框架组件。

## `src/layouts/`

Layouts 用来包裹页面的公共结构。一个 layout 可能负责文档外壳、metadata、导航、页脚和页面内容插槽。

例如：

```astro
---
const { title } = Astro.props;
---

<html lang="zh-CN">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

Layout 可以减少重复 markup，也让 metadata 更容易保持一致。

## `src/content/`

`src/content/` 常用于内容集合。内容集合可以校验 frontmatter、类型安全地查询内容，并统一页面 metadata。

对于内容型网站，这个目录往往就是产品本身。页面不只是模板，而是带有标题、描述、slug、日期、来源和关系的结构化文档。

## `public/`

`public/` 下的文件会原样复制到构建产物中。适合放 `robots.txt`、favicon、静态图片或需要固定路径的下载文件。

如果图片会被组件导入和处理，通常放在 `src/` 下更合适。如果它只需要按原路径提供，`public/` 更简单。

## `astro.config.mjs`

这个文件负责项目配置。常见内容包括：

- `site`：公开访问域名。
- `base`：子路径部署时使用的 base path。
- `integrations`：Starlight、MDX、sitemap、Tailwind 或框架集成。
- `output`：静态输出或服务端输出。
- adapter：部署到特定平台时的适配器。

对于 SEO 文档站，`site` 和 `base` 尤其重要，因为它们会影响 sitemap、canonical、资源路径和最终 URL。

## Sources

- Project structure：https://docs.astro.build/en/basics/project-structure/
- Configuration reference：https://docs.astro.build/en/reference/configuration-reference/
- Content collections：https://docs.astro.build/en/guides/content-collections/
