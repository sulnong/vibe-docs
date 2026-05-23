---
title: "核心概念"
description: "理解 Astro 的核心模型：内容优先、服务端渲染组件、Islands、内容集合和请求时渲染。"
---

# 核心概念

理解 Astro，可以先把五件事分开：内容、路由、渲染、交互和部署。

Astro 并不是认为 JavaScript 不好，而是认为大多数内容页面不需要变成完整的浏览器应用。先生成 HTML，再写样式，再组合数据和组件，最后只 hydrate 需要在浏览器中运行的部分。

## 内容优先

Astro 面向内容型页面。页面可以用 `.astro`、Markdown、MDX 编写，也可以从内容集合加载数据。这让它很适合文档、博客、更新日志、产品页和编辑型内容站。

这会改变功能设计方式。你不需要先从客户端状态开始，而可以先问：

- 读者需要理解什么，或者完成什么？
- 这个页面需要哪些 metadata？
- 它应该链接到哪些相关页面？
- 哪些内容可以提前生成？
- 哪些局部真的需要浏览器行为？

对于文档页，主要价值应该在正文、示例、链接和结构里。交互应该支持文档，而不是替代文档。

## 先渲染 HTML

Astro 组件在构建时或服务端运行，然后输出 HTML。如果组件不需要浏览器行为，Astro 不会把这个组件的 JavaScript 发送到客户端。

这和常见客户端组件框架很不一样。在 React 应用里，组件通常意味着浏览器 JavaScript；在 Astro 中，组件可以只是构建时的内容组织工具，最终消失为 HTML。

```astro
---
const items = ['Routing', 'Components', 'Content collections'];
---

<ul>
  {items.map((item) => <li>{item}</li>)}
</ul>
```

这段代码会生成 HTML，不会在浏览器中创建一个列表组件。

## Islands 负责局部交互

Island 是静态页面中的一个小交互组件。常见例子包括：

- 主题切换器
- 搜索框
- 价格计算器
- 带筛选的图表
- 复制代码按钮
- 嵌在指南里的 playground

Astro 允许你选择每个 island 何时 hydrate：

| Directive | 适用场景 |
| --- | --- |
| `client:load` | 组件必须立即可交互。 |
| `client:idle` | 组件可以等浏览器空闲后再 hydrate。 |
| `client:visible` | 组件在页面下方，看到时再 hydrate。 |
| `client:media` | 组件只在某个媒体查询匹配时需要。 |
| `client:only` | 组件不能在服务端渲染。 |

实际规则是：选择满足体验要求的最轻指令。页面下方的 demo 通常不需要 `client:load`。

## 内容集合让内容更安全

Content collections 把 Markdown、MDX 和数据文件变成结构化内容。它会校验 frontmatter，并提供有类型的查询和渲染 API。

站点超过几个页面后，这一点很重要。没有 schema 时，内容错误通常很晚才暴露：标题缺失、日期格式错误、标签不一致、草稿标记拼错、页面忘记 description 等。

内容集合不会自动写出好内容。它的价值是让内容模型明确，从而帮助编辑、生成器和构建工具发现可避免的问题。

## 静态输出和请求时渲染

Astro 默认会在构建时预渲染页面，生成静态文件。这对文档、博客和营销站是很好的默认值，因为产物容易缓存、托管和被搜索引擎抓取。

Astro 也可以通过 adapter 做请求时渲染。当路由依赖请求时信息时，再考虑它：

- 登录态或用户数据
- cookie 或 session
- 每次请求都要拿最新 API 数据
- 表单处理
- 不能等待整站重建的页面

这个选择可以作用于整个项目，也可以作用于部分路由。一个以静态为主的网站，在托管平台支持时也可以有少数请求时渲染路由。

## 集成扩展项目能力

Astro 通过 integrations 扩展能力。常见集成包括：

- 用于文档站的 Starlight
- 用于组件化内容的 MDX
- sitemap 生成
- Tailwind 或其他样式工具
- React、Vue、Svelte、Solid 等 UI framework
- Node、Netlify、Vercel、Cloudflare 等部署 adapter

好的 Astro 项目核心应该保持朴素：内容清楚、路由可预测、metadata 一致，只引入真正服务站点目标的集成。

## 一个简短决策表

| 需求 | 优先考虑 |
| --- | --- |
| 普通页面 | `src/pages/` 或 Starlight docs 内容 |
| 可复用静态 UI | Astro 组件 |
| 共享页面外壳 | Layout |
| 结构化 Markdown 内容 | Content collection |
| 一个交互小组件 | 带 client directive 的框架组件 |
| 请求时渲染 | Adapter 加 on-demand rendering |
| 文档站外壳 | Starlight |

如果整个屏幕都是交互状态，Astro 仍然可以做，但已经不是它最简单的强项。如果屏幕大部分是内容，Astro 的默认模型会很合适。

## 参考资料

- Why Astro：https://docs.astro.build/en/concepts/why-astro/
- Astro components：https://docs.astro.build/en/basics/astro-components/
- Islands architecture：https://docs.astro.build/en/concepts/islands/
- On-demand rendering：https://docs.astro.build/en/guides/on-demand-rendering/
