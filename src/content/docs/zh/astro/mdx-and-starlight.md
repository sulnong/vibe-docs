---
title: "MDX 与 Starlight"
description: "使用 MDX 编写带组件的内容，并使用 Starlight 构建基于 Astro 的文档站。"
---

# MDX 与 Starlight

Astro 可以渲染 Markdown，而 MDX 集成允许你在类似 Markdown 的文档中使用组件。Starlight 是基于 Astro 的文档框架。它们解决的是两个不同问题：更有表达力的内容，以及完整的文档站外壳。

## Markdown 优先

当页面主要是文字、标题、列表、链接和代码块时，优先使用普通 Markdown。Markdown 容易生成、审核、diff、翻译和维护。

大多数文档应该从 Markdown 开始。它能让内容保持可移植，也减少视觉组件掩盖文字质量的问题。

## 什么时候用 MDX

当文档需要嵌入组件时，MDX 很有用：

- 交互示例
- 自定义卡片
- 价格或功能对比表
- 图示
- 可复用提示块
- live demo

例如，一篇页面可以先用文字解释概念，再渲染一个小组件让读者尝试。

代价是复杂度。MDX 页面比 Markdown 更难生成和审核。只有当组件能明显帮助理解时，才值得使用 MDX。

## Starlight 提供什么

Starlight 提供文档站常见默认能力：

- 侧边栏导航
- 目录
- 搜索
- 国际化
- 内容 schema
- 代码高亮
- 深色模式
- 页面 metadata
- 内置文档布局

这就是为什么 Starlight 适合作为文档站底座。你不用从零实现文档外壳，可以把精力放在内容、信息架构和主题质量上。

## 如何选择

可以用这个简单规则：

- 普通文档用 Markdown。
- 需要局部组件的文档用 MDX。
- 文档站外壳用 Starlight。
- topic index、landing page 和特殊布局用自定义 Astro 页面。

## Sources

- MDX integration：https://docs.astro.build/en/guides/integrations-guide/mdx/
- Starlight docs：https://starlight.astro.build/
- Starlight authoring content：https://starlight.astro.build/guides/authoring-content/
