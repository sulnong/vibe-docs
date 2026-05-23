---
title: "组件与 Islands"
description: "理解 Astro 组件、框架组件、slots、client directives，以及 Astro 如何通过 island 模型控制 JavaScript。"
---

# 组件与 Islands

Astro 中有两类容易混淆的组件：

- Astro 组件，写在 `.astro` 文件里，适合 HTML-first 的 UI。
- 框架组件，例如 React 或 Vue 组件，适合需要浏览器状态或浏览器 API 的局部。

这个区别很重要，因为导入一个组件并不意味着 Astro 会发送完整客户端应用。静态 UI 可以保持静态，需要交互的 UI 可以作为 island hydrate。

## Astro 组件

一个 Astro 组件包含 frontmatter 和模板：

```astro
---
const { title, tone = 'default' } = Astro.props;
---

<section class:list={['callout', `callout-${tone}`]}>
  <h2>{title}</h2>
  <slot />
</section>

<style>
  .callout {
    border: 1px solid var(--sl-color-gray-5);
    border-radius: 0.5rem;
    padding: 1rem;
  }
</style>
```

frontmatter 在构建时或服务端运行，模板会变成 HTML。组件内样式默认会作用域化。

内容 wrapper、layout 区块、卡片、提示块、导航区域、metadata helper，以及不需要浏览器行为的 UI，都适合先用 Astro 组件。

## Props 和 slots

Props 负责传数据，slots 负责传内容。

```astro
---
import Callout from '../components/Callout.astro';
---

<Callout title="默认快速" tone="info">
  <p>Astro 先渲染 HTML，只 hydrate 你选择的部分。</p>
</Callout>
```

这个模式很适合文档：组件提供结构，页面仍然保持可读的内容。

当组件需要多个内容区域时，可以使用 named slots：

```astro
<FeatureCard>
  <span slot="eyebrow">Routing</span>
  <h2>文件变成 URL</h2>
  <p>路由树直接体现在文件系统中。</p>
</FeatureCard>
```

不要把每个段落都变成组件。组件应该解决真实重复或让结构更清楚，而不是遮住内容本身。

## 框架组件

当 UI 需要浏览器行为时，再使用框架组件：

- combobox
- 实时图表
- 筛选面板
- 拖拽交互
- 媒体控制
- 代码 playground
- 登录后的应用小部件

Astro 可以通过集成使用 React、Vue、Svelte、Solid 等框架。一个项目可以使用多个框架，但这通常不是最简单的选择。每个框架都会带来依赖、约定和 bundle 成本。

## Client directives

框架组件只有加上 client directive 后，才会在浏览器中变成交互组件：

```astro
---
import SearchBox from '../components/SearchBox.jsx';
---

<SearchBox client:visible />
```

常见指令：

| Directive | 行为 | 适合场景 |
| --- | --- | --- |
| `client:load` | 尽快 hydrate | 首屏必须立即可用的控件 |
| `client:idle` | 浏览器空闲时 hydrate | 不急着可用的小组件 |
| `client:visible` | 进入视口时 hydrate | 页面下方的 demo 或 widget |
| `client:media` | 媒体查询匹配时 hydrate | 只在移动端或桌面端需要的交互 |
| `client:only` | 只在客户端渲染 | 无法服务端渲染的组件 |

选择满足体验要求的最轻指令。页面顶部的筛选器可能需要 `client:load`；几屏之后的示例通常更适合 `client:visible`。

## 为什么 Islands 重要

Islands 架构让页面大部分保持静态，只把特定区域变成交互。不是让一个大应用接管整篇文档，而是在稳定 HTML 中放入小的 hydrated islands。

对于文档站，这很自然。读者和搜索引擎能先拿到内容，搜索、主题切换、复制按钮、playground 或图表可以独立加载。

这并不自动代表页面一定快。一个很大的 island 仍然会发送很多 JavaScript。Astro 的优势是边界清楚，你可以判断这段 JavaScript 是否值得。

## 实际选择

| 需求 | 优先选择 |
| --- | --- |
| 重复的静态页面区块 | Astro 组件 |
| 带统一 wrapper 的 Markdown 内容 | Astro 组件或 Starlight 组件 |
| 交互表单控件 | 框架组件加 `client:load` 或 `client:idle` |
| 页面下方的 demo | 框架组件加 `client:visible` |
| 渲染时依赖 `window` 等浏览器 API | `client:only`，或把浏览器代码放到 effect 中 |
| 全站应用状态 | 重新判断 Astro 是否适合作为这个界面的中心 |

## 常见问题

| 症状 | 检查什么 |
| --- | --- |
| React 组件显示了但点击没反应 | 缺少 `client:*` directive |
| 构建时报 `window` 未定义 | 浏览器 API 在服务端渲染阶段执行了 |
| 页面发送太多 JavaScript | Island 太大或 hydrate 太积极 |
| 组件样式意外影响其他页面 | 本该 scoped 的样式写成了 global |
| 每个区域都变成组件 | 抽象遮住了内容，而不是简化内容 |

## 参考资料

- Astro components：https://docs.astro.build/en/basics/astro-components/
- Islands architecture：https://docs.astro.build/en/concepts/islands/
- UI framework components：https://docs.astro.build/en/guides/framework-components/
- Client directives：https://docs.astro.build/en/reference/directives-reference/#client-directives
