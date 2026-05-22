---
title: "常见问题"
description: "回答关于 Astro、JavaScript、React、SSR、内容、SEO 和部署的常见问题。"
---

# 常见问题

## Astro 会替代 React 吗？

不会。Astro 可以使用 React 组件，但不要求整个站点都是 React。你也可以使用 Vue、Svelte、Solid 或纯 Astro 组件。

关键区别是默认值。在 React 应用里，通常由 React 接管页面；在 Astro 里，页面先是 HTML，React 可以作为局部 island 出现。

## Astro 真的零 JavaScript 吗？

对于静态 Astro 组件，Astro 默认不会发送组件 JavaScript。如果你添加脚本或 hydrate 客户端组件，JavaScript 会按你的配置加载。

所以“默认零 JavaScript”不是“永远没有 JavaScript”，而是 JavaScript 从默认加载变成按需选择。

## Astro 能做服务端渲染吗？

可以。Astro 通过 adapter 支持服务端输出。当页面依赖请求时数据、登录态、cookie 或运行时 API 时，服务端渲染会更有用。

对于文档站，静态输出通常更适合起步。它更容易托管、缓存，也更容易被搜索引擎稳定抓取。

## Astro 对 SEO 友好吗？

Astro 可以生成快速 HTML 页面、metadata、sitemap、canonical URL 和多语言路由。这些是很好的技术基础。

但 SEO 质量仍然取决于内容质量、搜索意图、内部链接、页面标题、描述、来源质量和部署配置。Astro 解决技术底座，不替代编辑判断。

## 文档站应该用 Astro 还是 Starlight？

两个都用。Astro 是框架，Starlight 是基于 Astro 的文档层。

如果从零做文档外壳，你需要自己解决侧边栏、搜索、目录、国际化、代码高亮和页面 metadata。Starlight 已经提供这些默认能力。

## Markdown 和 MDX 能一起用吗？

可以。普通文档优先用 Markdown；页面需要组件时再用 MDX。对于生成或频繁编辑的内容，Markdown 更容易审核。对于 demo 和自定义 UI，MDX 可能值得引入。

## 应该先学什么？

比较实用的顺序是：

1. 项目结构。
2. 路由。
3. Astro 组件。
4. Islands 和 client directives。
5. 内容集合。
6. 构建与部署。
7. Starlight 自定义。

这个顺序基本对应真实 Astro 站点的构建过程。

## Sources

- Astro docs：https://docs.astro.build/
- Server-side rendering：https://docs.astro.build/en/guides/server-side-rendering/
- Starlight docs：https://starlight.astro.build/
