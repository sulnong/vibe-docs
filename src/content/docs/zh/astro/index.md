---
title: "Astro 指南"
description: "把 Astro 理解为内容优先的 Web 框架：先生成 HTML，在有帮助的地方使用组件，只在页面需要时加载 JavaScript。"
---

# Astro 指南

Astro 是一个面向内容型网站的 Web 框架。它先把页面当成文档：生成 HTML，保持 URL 稳定，让内容容易编写和维护，只在页面中确实需要浏览器行为的局部加载 JavaScript。

这让 Astro 和完整客户端应用框架的气质很不一样。页面可以使用组件、数据、layout、Markdown、MDX 和框架 island，但除非你主动选择，否则它不会变成一个庞大的浏览器应用。

## Astro 适合什么项目

当页面本身就是产品时，Astro 会很顺手：

- 带侧边栏、搜索、代码示例、多语言和稳定 URL 的文档站。
- 作者希望用 Markdown 或 MDX 写作的博客、更新日志、指南和内容站。
- 需要快速首屏、良好 metadata 和灵活视觉设计的产品页、营销页。
- 静态内容为主，但有少量交互区域的项目站。
- 需要 sitemap、canonical、多语言路由和长期维护的内容站。

Astro 也可以通过 adapter 做请求时渲染，但静态模型最适合作为学习起点。理解了静态模型之后，服务端渲染就会变成有意识的扩展，而不是默认假设。

## 一个好用的心智模型

可以把 Astro 页面理解成“可以使用组件的文档”。

一个 `.astro` 文件包含 frontmatter 和模板两部分：

```astro
---
const title = '为什么 Astro 的体验不一样';
const updated = new Date('2026-05-23');
---

<article>
  <p>更新于 {updated.toLocaleDateString('zh-CN')}</p>
  <h1>{title}</h1>
  <p>除非主动 hydrate，这个页面就是 HTML。</p>
</article>
```

frontmatter 在构建时或服务端运行，取决于项目的输出模式。模板部分会变成 HTML。即使你导入 React、Vue、Svelte 或 Solid 组件，Astro 也只是先渲染它；只有加上 `client:visible`、`client:load` 这类 client directive 后，它才会在浏览器中变成交互组件。

这个模型会自然带出几个判断：

| 问题 | Astro 中的答案 |
| --- | --- |
| 这个部分能不能只是 HTML 和 CSS？ | 用 Astro 组件、Markdown 或 MDX。 |
| 是否只有一个局部需要浏览器行为？ | 做成一个小的 client island。 |
| 页面是否依赖请求时数据？ | 加 adapter，对这类路由做请求时渲染。 |
| 整个产品是否就是应用外壳？ | 考虑 React-first 或全栈应用框架是否更直接。 |

## 先学什么

Astro 有很多集成，但第一条学习路径可以很小：

1. 创建项目并启动开发服务器。
2. 打开 `src/pages/`，理解文件如何变成 URL。
3. 写一个 Astro 组件，并传入 props。
4. 添加一个 layout，让多个页面共享 metadata 和结构。
5. 当内容超过少数文件时，再引入 Markdown 或 content collections。
6. 在能说明为什么需要 JavaScript 后，再 hydrate 一个小的客户端组件。
7. 选择部署平台前，先构建并预览生产产物。

这个顺序能让框架保持清楚，也能避免一个常见误区：还没理解普通页面，就先装 React、Tailwind、MDX、Starlight、adapter 和一堆插件。

## 主要部件

| 部件 | 作用 |
| --- | --- |
| `src/pages/` | 文件路由。页面文件会变成 URL。 |
| Astro 组件 | 静态或半静态 UI、layout、wrapper、卡片、提示和页面区块。 |
| 框架组件 | React、Vue、Svelte、Solid 等组件，用在确实需要浏览器状态的局部。 |
| Client directives | 控制框架组件何时在浏览器中 hydrate。 |
| Content collections | 类型化内容、frontmatter 校验，以及 Markdown、MDX、YAML、TOML、JSON 或远程数据查询。 |
| Integrations | Starlight、MDX、sitemap、Tailwind、UI framework、adapter 等能力。 |
| Adapters | 面向请求时渲染或特定平台输出的部署适配。 |

文档站通常会较早引入 Starlight，因为它提供文档外壳：侧边栏、搜索、目录、国际化、代码高亮、页面 metadata 和内容 schema。营销页可能完全不需要 Starlight，直接写自定义 layout。博客则可能从 content collections 和少量模板开始。

## Astro 可能不够直接的场景

Astro 不是要替代所有应用框架。如果整个产品是高度交互的后台系统，包含共享客户端状态、实时协作、复杂乐观更新和大量登录态页面，那么 React-first 或全栈应用框架可能更直接。

Astro 仍然可以在页面中承载交互组件，但它会鼓励你把体验拆成静态文档和交互 island。这个拆分对内容站很有价值；对几乎每个区域都是客户端状态的产品来说，有时会显得绕。

## 合适的第一个项目

第一个 Astro 项目不用大，但最好完整：

1. 创建三个路由：首页、关于页和一个内容页。
2. 添加一个共享 layout。
3. 添加一个内容集合或小型 Markdown 区域。
4. 添加一个小交互岛，例如计数器或主题切换。
5. 在 `astro.config.mjs` 中配置 `site`。
6. 运行生产构建并预览结果。
7. 部署到静态托管平台。

如果你还没创建项目，继续看[快速开始](/zh/astro/getting-started/)。如果已经有项目打开，[路由](/zh/astro/routing/)和[组件与 Islands](/zh/astro/components-and-islands/)通常是最容易让 Astro 变清楚的两页。

## 参考资料

- Astro 文档：https://docs.astro.build/
- Why Astro：https://docs.astro.build/en/concepts/why-astro/
- Islands architecture：https://docs.astro.build/en/concepts/islands/
- Astro 仓库：https://github.com/withastro/astro
