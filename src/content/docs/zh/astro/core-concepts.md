---
title: "核心概念"
description: "理解 Astro 的心智模型：内容优先、服务端渲染组件、Islands 架构和选择性 JavaScript。"
---

# 核心概念

理解 Astro，可以先把四件事分开：内容、路由、渲染和交互。

Astro 并不是认为 JavaScript 不好，而是认为大多数内容页面不需要变成完整的浏览器应用。先生成 HTML，再写样式，再组合数据和组件，最后只 hydrate 需要在浏览器中运行的部分。

## 内容优先

Astro 面向内容型页面。页面可以用 `.astro`、Markdown、MDX 编写，也可以从内容集合加载数据。这让它很适合文档、博客、更新日志和营销内容。

这会改变功能设计方式。你不需要先从客户端状态开始，而可以先问：

- 这个页面要回答什么问题？
- 它需要哪些 metadata？
- 它应该链接到哪些相关页面？
- 哪些内容可以静态生成？
- 哪些局部真的需要交互？

## 先渲染 HTML

Astro 组件在构建时或服务端运行，然后输出 HTML。如果组件不需要浏览器行为，Astro 不会把组件 JavaScript 发送到客户端。

这和常见客户端组件框架很不一样。在 React 应用里，组件通常意味着浏览器 JavaScript；在 Astro 中，组件可以只是构建时的内容组织工具，最终消失为 HTML。

## Islands

Island 是静态页面中的一个小交互组件。常见例子包括：

- 风格切换器。
- 搜索框。
- 价格计算器。
- 带筛选的图表。
- 复制代码按钮。

Astro 允许你选择每个 island 何时 hydrate：页面加载时、浏览器空闲时、进入视口时，或者媒体查询匹配时。

## 服务端渲染

Astro 也可以通过 adapter 做服务端渲染。当页面依赖请求时信息，例如登录态、个性化、实时数据或表单处理时，服务端渲染会有用。

但文档站通常从静态输出开始更合适。静态产物容易缓存、容易托管，也更容易被搜索引擎稳定抓取。

## 集成系统

Astro 通过 integrations 扩展能力。常见集成包括 MDX、sitemap、Tailwind、Starlight、React、Vue、Svelte、Solid 和部署 adapter。

好的 Astro 项目核心应该保持简单：内容清晰、路由明确、metadata 可预测，只引入真正服务站点目标的集成。

## Sources

- Why Astro：https://docs.astro.build/en/concepts/why-astro/
- Astro components：https://docs.astro.build/en/basics/astro-components/
- Islands architecture：https://docs.astro.build/en/concepts/islands/
