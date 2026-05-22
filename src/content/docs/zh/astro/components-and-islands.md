---
title: "组件与 Islands"
description: "理解 Astro 组件、前端框架组件，以及 Astro 如何通过 Islands 架构控制 JavaScript。"
---

# 组件与 Islands

Astro 组件使用 `.astro` 文件格式。它可以包含服务端逻辑、类似 HTML 的模板、作用域样式和 slots。对于静态 UI 和内容型布局，Astro 组件通常是最好的默认选择。

前端框架组件则用于需要浏览器状态或浏览器 API 的场景。Astro 可以通过集成渲染 React、Vue、Svelte、Solid 等组件。

## Astro 组件

一个 Astro 组件通常包含 frontmatter 和模板：

```astro
---
const { title } = Astro.props;
const updated = new Date().toISOString();
---

<article>
  <h2>{title}</h2>
  <p>生成时间：{updated}</p>
  <slot />
</article>
```

frontmatter 在构建时或服务端运行。模板最终输出 HTML。组件内的样式默认会作用域化。

## Slots

Slots 让组件可以包裹父组件传入的内容：

```astro
<Card title="默认快速">
  <p>Astro 先渲染 HTML，只 hydrate 你选择的部分。</p>
</Card>
```

这很适合文档中的 callout、卡片、示例和可复用页面区块。

## 前端框架组件

当 UI 需要浏览器行为时，再使用框架组件。例如 combobox、动态图表、复杂筛选器、拖拽编辑器或登录后的应用小部件。

关键点是：引入 React 组件并不等于整页变成 React 应用。除非加上 client directive，Astro 只会把它渲染成 HTML。

## Client directives

常见指令包括：

- `client:load`：页面加载后立即 hydrate。
- `client:idle`：浏览器空闲时 hydrate。
- `client:visible`：组件进入视口时 hydrate。
- `client:media`：媒体查询匹配时 hydrate。
- `client:only`：跳过服务端渲染，只在客户端渲染。

选择能满足体验要求的最轻指令。位于页面下方的交互 demo 通常不需要 `client:load`。

## 为什么 Islands 重要

Islands 架构让页面保持快速。文档主体可以是稳定 HTML，搜索、风格切换、复制按钮或交互示例可以作为小岛独立 hydrate。

对于文档站，这很自然：搜索引擎和读者先拿到内容，需要交互的地方再加载脚本。

## Sources

- Astro components：https://docs.astro.build/en/basics/astro-components/
- Islands architecture：https://docs.astro.build/en/concepts/islands/
- UI framework components：https://docs.astro.build/en/guides/framework-components/
- Client directives：https://docs.astro.build/en/reference/directives-reference/#client-directives
