---
title: "对比"
description: "按项目形态对比 Astro、Next.js、静态站生成器、Docusaurus 和 Starlight，而不是只比较框架热度。"
---

# 对比

Astro 和多个类别有重叠，但它的核心定位是内容型网站。真正有用的问题不是“哪个框架最好”，而是“哪个框架最匹配这个项目的形状”。

Astro 最适合大多数页面都是文档、只有局部需要浏览器交互的项目。如果整个产品就是客户端应用，其他框架可能更直接。

## Astro vs. Next.js

Next.js 是覆盖面很广的 React 应用框架。它适合 React-heavy 产品、全栈能力、server components、API routes，以及客户端应用体验占核心的项目。

Astro 可以使用 React 组件，但不要求 React 接管整页。如果站点是文档、内容、落地页，或只有少量交互岛的静态体验，Astro 往往更简单。

| 更适合 Next.js | 更适合 Astro |
| --- | --- |
| 产品本质是 React 应用 | 页面主要是内容 |
| 客户端状态是核心体验 | HTML 和 SEO 优先 |
| 需要 React 生态里的全栈模式 | Markdown 或 MDX 写作重要 |
| 大多数页面是应用界面 | 只有局部需要交互 |
| 团队本来就想要 React app shell | 团队想要 framework islands，而不是绑定一个 UI framework |

这个边界不是价值判断，而是架构判断。复杂实时状态的后台适合 Next.js；带一个交互 playground 的文档站适合 Astro。

## Astro vs. 传统静态站生成器

传统静态站生成器很适合内容。Astro 在此基础上增加了现代组件模型、集成能力、局部 hydration，以及从静态输出过渡到请求时渲染的路径。

如果现有生成器已经很好地满足团队内容模型，Astro 未必必要。当你既想要内容优先，又想要现代组件和选择性 framework islands 时，Astro 会更有吸引力。

几个例子：

- 简单博客几乎任何静态生成器都能胜任。
- 带自定义交互示例的文档站会受益于 Astro islands。
- 与产品代码共享 UI 组件的营销站可能受益于 Astro 组件模型。
- 需要少数请求时路由的网站，可以从静态输出继续增长，而不必整体重写。

## Astro vs. Starlight

Starlight 不是 Astro 的竞争者，而是基于 Astro 的文档框架。

Astro 负责通用站点框架。Starlight 负责文档站默认能力，例如侧边栏、搜索、目录、国际化、代码高亮和内容 schema。

如果你在做文档站，又没有强理由从零做文档外壳，直接从 Starlight 开始更合理。

## Astro vs. Docusaurus

Docusaurus 是成熟的 React 文档框架。团队如果需要 Docusaurus 生态、React 方式的自定义和成熟文档功能，它是很好的选择。

Astro + Starlight 适合想要 Astro 内容优先模型、默认少 JavaScript、并保留多框架组件选择的项目。

| 维度 | Docusaurus | Astro + Starlight |
| --- | --- | --- |
| UI 模型 | React-centered | Astro-first，按需 islands |
| JavaScript 默认值 | React docs app | HTML-first docs pages |
| 自定义方式 | React 生态 | Astro 组件、Starlight overrides、islands |
| 更适合 | 想要成熟 React 文档框架的团队 | 内容优先、组件选择更灵活的文档站 |

## Astro vs. Vite

Vite 是构建工具和开发服务器。Astro 内部使用 Vite，但两者解决的问题不同。

当你在构建客户端应用或库，并且想自己选择应用框架时，可以直接用 Vite。当你需要网站层面的路由、内容、渲染、集成和部署行为时，Astro 更合适。

## 实际选择

| 项目形态 | 可能适合 |
| --- | --- |
| 文档、指南、changelog | Astro + Starlight |
| 博客或内容站 | Astro |
| 带少量 widget 的产品营销页 | Astro |
| 完整登录态后台 | Next.js、Remix 或其他应用框架 |
| React 深度定制的文档站 | Docusaurus 或 Next.js |
| 没有组件需求且已有成熟流程的静态站 | 现有静态生成器可能就够 |

当内容就是产品时，Astro 是很好的默认选择。当内容只是大型客户端应用的外壳时，它的吸引力会下降。

## 参考资料

- Why Astro：https://docs.astro.build/en/concepts/why-astro/
- UI framework components：https://docs.astro.build/en/guides/framework-components/
- Starlight docs：https://starlight.astro.build/
