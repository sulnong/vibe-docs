---
title: "Astro 概览"
description: "了解 Astro 是什么、解决什么问题，以及如何把这套 Astro 指南当作实践学习路径。"
---

# Astro 概览

Astro 是一个面向内容型网站的 Web 框架。它默认输出 HTML，而不是把整个页面变成一个庞大的客户端 JavaScript 应用。这个默认选择会影响后续所有设计：页面天然更快，Markdown 更容易成为内容入口，前端框架组件变成可选项，交互也可以只加在真正需要的局部。

所以 Astro 很适合文档、博客、更新日志、营销页、作品集、产品介绍页和落地页。这些网站最看重的是可读内容、稳定 URL、搜索引擎收录、加载速度和可维护的写作流程。Astro 正好在这些点上比较顺手。

## Astro 的心智模型

你可以把 Astro 页面理解成“可以使用组件的文档”。一个 `.astro` 文件可以在 frontmatter 中运行服务端逻辑，可以渲染 HTML，可以导入数据，可以组合组件，也可以和 Markdown/MDX 内容一起工作。

除非你明确 hydrate 某个客户端组件，否则 Astro 不会把那个组件的 JavaScript 发送到浏览器。于是每做一个功能，都可以先问三个问题：

- 这个部分能不能只是 HTML 和 CSS？
- 它是否只需要一个小的交互岛？
- 它是否真的需要请求时服务端渲染？

对于大多数文档页面，答案通常是：大部分是 HTML，少量地方需要交互。

## Astro 适合什么场景

Astro 适合页面本身就是内容的项目，例如：

- 带侧边栏、搜索、代码示例和多语言页面的文档站。
- 作者希望用 Markdown 或 MDX 写作的博客和内容站。
- 需要快速首屏和精细 metadata 的产品页、营销页。
- 静态页面为主、局部有交互组件的项目站。
- 需要稳定 URL、sitemap 和 canonical 的 SEO 内容站。

Astro 也能通过 adapter 做服务端渲染，但学习时建议先从静态模型开始，因为这能更直接地理解 Astro 的优势。

## 不一定适合 Astro 的场景

Astro 不是要替代所有应用框架。如果你的产品本质上是一个高度交互的后台系统，包含复杂客户端状态、实时协作、乐观更新、大量登录态页面和完整应用外壳，那么 React-first 或全栈应用框架可能更直接。

Astro 仍然可以承载交互组件，但它的中心不是“整站客户端应用”，而是“先发布可读 HTML，再按需增加交互”。

## 如何阅读这套指南

如果你想先跑起来，从[快速开始](/zh/astro/getting-started/)开始。然后阅读[项目结构](/zh/astro/project-structure/)和[路由](/zh/astro/routing/)，理解文件如何变成页面。接着看[组件与 Islands](/zh/astro/components-and-islands/)，这是 Astro 最有代表性的部分：选择性 JavaScript。

基础清楚后，再看[内容集合](/zh/astro/content-collections/)、[样式](/zh/astro/styling/)、[MDX 与 Starlight](/zh/astro/mdx-and-starlight/)和[构建与部署](/zh/astro/build-and-deploy/)。如果当前目标是先发布站点，可以直接跳到 [GitHub Pages](/zh/astro/github-pages/)。

## 一个合适的第一个目标

第一个 Astro 项目不需要很大，但应该完整：

1. 创建两三个路由。
2. 添加一个共享 layout。
3. 添加一个 Markdown 或 MDX 内容集合。
4. 添加一个小交互岛，例如风格切换器。
5. 构建并部署到静态托管平台。

这个练习能覆盖 Astro 最重要的部分，又不会一开始就陷入复杂集成。

## Sources

- Astro 文档：https://docs.astro.build/
- Why Astro：https://docs.astro.build/en/concepts/why-astro/
- Islands architecture：https://docs.astro.build/en/concepts/islands/
- Astro 仓库：https://github.com/withastro/astro
