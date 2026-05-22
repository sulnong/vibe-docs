---
title: "对比"
description: "对比 Astro、Next.js、传统静态站生成器和 Starlight，理解 Astro 适合什么场景。"
---

# 对比

Astro 和多个类别有重叠，但它的核心定位是内容型网站。更好的问题不是“哪个框架最好”，而是“哪个框架最匹配这个项目的形状”。

## Astro vs. Next.js

Next.js 是覆盖面很广的 React 应用框架。它适合 React-heavy 应用、全栈能力、server components、API routes，以及客户端应用体验占核心的产品。

Astro 可以使用 React 组件，但不要求整页都是 React 应用。如果你的站点是文档、内容、落地页，或只有少量交互岛的静态体验，Astro 往往更简单。

更适合 Next.js 的情况：

- 整个产品就是 React 应用。
- 客户端状态是核心体验。
- 需要 React 生态里的全栈模式。
- 大多数页面是应用界面，而不是文档。

更适合 Astro 的情况：

- 页面主要是内容。
- SEO 和快速 HTML 很重要。
- Markdown 或 MDX 写作很重要。
- 只有局部需要交互。

## Astro vs. 传统静态站生成器

传统静态站生成器很适合内容。Astro 在此基础上增加了现代组件模型、集成能力、局部 hydration，以及从静态输出过渡到服务端渲染的路径。

如果一个传统生成器已经很好地满足团队内容模型，Astro 未必必要。当你既想要内容优先，又想要现代组件和选择性前端框架 island 时，Astro 会更有吸引力。

## Astro vs. Starlight

Starlight 不是 Astro 的竞争者，而是基于 Astro 的文档框架。

Astro 负责通用站点框架。Starlight 负责文档站默认能力，例如侧边栏、搜索、国际化、代码高亮和内容 schema。

## Astro vs. Docusaurus

Docusaurus 是成熟的 React 文档框架。团队如果需要 Docusaurus 生态和 React 方式的自定义，它是很好的选择。

Astro + Starlight 适合想要 Astro 内容优先模型、默认少 JavaScript、同时保留多框架组件选择的项目。

## 当前项目的选择

当前项目的公开产品是文档：topic 页面、双语内容、来源链接、稳定 URL、sitemap，以及未来基于数据继续扩写。因此 Astro + Starlight 是合适组合。

如果未来某个主题需要交互 playground 或应用式工具，Astro 仍然可以用 island 或自定义页面承载它，而不需要把整个文档站改成应用。

## Sources

- Why Astro：https://docs.astro.build/en/concepts/why-astro/
- UI framework components：https://docs.astro.build/en/guides/framework-components/
- Starlight docs：https://starlight.astro.build/
