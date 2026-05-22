---
title: "路由"
description: "学习 Astro 的文件路由、动态路由，以及 src/pages 中的文件如何映射为访问路径。"
---

# 路由

Astro 使用基于文件的路由。`src/pages/` 里的文件会变成生成站点中的 URL。这让路由结构直接体现在文件系统里，小型站点尤其容易理解。

例如：

```text
src/pages/index.astro        -> /
src/pages/about.astro        -> /about/
src/pages/blog/index.astro   -> /blog/
src/pages/blog/post-1.astro  -> /blog/post-1/
```

## 静态路由

静态路由最简单。创建一个文件，Astro 就创建一个页面。这适合 about、pricing、contact、docs landing page 和手写指南。

```astro
---
const title = 'About';
---

<h1>{title}</h1>
<p>这个路由来自 src/pages/about.astro。</p>
```

## 动态路由

动态路由使用中括号语法：

```text
src/pages/blog/[slug].astro
```

静态构建时，Astro 需要提前知道要生成哪些路径，所以动态路由通常要导出 `getStaticPaths()`：

```astro
---
export function getStaticPaths() {
  return [
    { params: { slug: 'first-post' } },
    { params: { slug: 'second-post' } },
  ];
}

const { slug } = Astro.params;
---

<h1>{slug}</h1>
```

如果内容来自 collection，通常会从内容条目生成这些路径，而不是手写数组。

## Rest 参数

Astro 也支持 `[...slug].astro` 这样的 rest 参数。它适合 catch-all 路由、嵌套文档路径或自动生成的页面树。

不过不要过早使用 catch-all。过于宽泛的路由会让站点难以理解。除非内容模型真的需要，否则优先使用明确路由。

## Starlight 文档站里的路由

Starlight 基于 Astro 构建，并通过内容结构管理文档路由。本指南中，英文 Astro 主题从 `/en/astro/` 开始，中文 Astro 主题从 `/zh/astro/` 开始。

即使文档路由由 Starlight 管理，Astro 路由模型仍然重要。根页面、自定义 landing page、redirect、API route 和非文档页面都需要理解它。

## Base path 与链接

部署到子路径时，base path 很重要。自定义域名通常使用 `/`，GitHub Pages project site 通常使用 `/<repo>/`。

使用 base path 时，尽量使用能感知配置的链接方式。硬编码绝对路径可能在部署路径变化时失效。

## Sources

- Routing guide：https://docs.astro.build/en/guides/routing/
- Dynamic routes：https://docs.astro.build/en/guides/routing/#dynamic-routes
- Configuration reference：https://docs.astro.build/en/reference/configuration-reference/
