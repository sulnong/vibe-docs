---
title: "样式"
description: "理解 Astro 的作用域样式、全局 CSS、CSS 变量、Tailwind 和 Starlight 自定义。"
---

# 样式

Astro 支持普通 CSS、`.astro` 组件内的作用域样式、导入全局 CSS、CSS modules、预处理器、Tailwind 和其他样式集成。除非项目有明确理由，一开始用普通 CSS 就够了。

对于文档站，样式最重要的目标不是炫，而是正文可读、导航清楚、对比度足够、代码块容易扫读，并且视觉系统能持续迭代而不影响内容。

## 作用域组件样式

写在 Astro 组件内的样式默认是作用域化的：

```astro
<section class="hero">
  <h1>快速内容站</h1>
  <p>先输出 HTML，需要时再加交互。</p>
</section>

<style>
  .hero {
    padding: 4rem 1rem;
  }

  .hero h1 {
    max-width: 12ch;
  }
</style>
```

`.hero` 相关样式只影响当前组件渲染出的 markup，不会轻易污染整个站点。这适合局部布局、可复用卡片、自定义区块和单页组件。

作用域样式不是设计系统的替代品。它只是让组件自己的规则靠近组件本身。

## 全局样式

全局样式适合影响整个站点的规则：

- design tokens
- typography
- reset
- 正文样式
- theme variables
- 共享 layout primitive
- Starlight CSS custom properties

在 Astro 中，全局 CSS 通常从 layout、顶层页面或 integration 配置中导入。Starlight 站点可以通过 `customCss` 加载全局 CSS 来定制文档界面。

全局 CSS 要谨慎使用。如果一条规则只服务一个组件，通常应该写成 scoped style。

## CSS 变量

CSS 变量是保持视觉决策一致的简单方式：

```css
:root {
  --site-accent: #2563eb;
  --site-surface: #ffffff;
  --site-border: #d4d4d8;
  --site-radius: 8px;
}

.card {
  border: 1px solid var(--site-border);
  border-radius: var(--site-radius);
  background: var(--site-surface);
}
```

对于文档站，tokens 很有用，因为同一套内容会出现在很多页面类型里：概念页、教程、参考、FAQ、资源页。视觉可以改变，Markdown 不需要跟着改。

## 自定义 Starlight

Starlight 暴露 CSS 变量和扩展点，让你可以定制文档外壳，而不用从零重写。

一个最小配置是：

```js
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Docs',
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
```

Starlight customization 适合处理文档体验：颜色 token、排版、导航表面、代码块和内容宽度。某个页面需要特殊区块或交互区域时，再用自定义 Astro 组件。

## Tailwind 和其他工具

Tailwind 可以和 Astro 配合得很好，尤其适合已经使用 utility-first CSS 的团队和产品页面。它不是 Astro 必需品，也不是 Starlight 必需品。

可以按团队工作方式选择：

| 方式 | 适合什么 |
| --- | --- |
| 普通 CSS | 小站、文档、低工具复杂度、可预测样式 |
| 作用域样式 | 组件局部布局和可复用 UI |
| CSS 变量 | 主题、tokens、Starlight 自定义 |
| Tailwind | 已经使用 utility-first CSS 的团队 |
| CSS modules | 希望 class name 隔离的组件化应用 |

不要在没有理由的情况下混用太多样式系统。一个文档站用全局 tokens、作用域组件样式和少量 custom CSS，通常比叠很多工具更容易维护。

## 当前站点的风格切换方式

这套站点保持内容和 URL 不变，只通过 `<html>` 上的 `data-theme-pack` 改变视觉风格。风格切换器会把选择保存到 `localStorage`，`src/styles/themes/` 下的 CSS 文件定义每个风格的 tokens。

这意味着不同风格只是同一份文档的不同呈现，不是不同页面。搜索引擎看到的是同一个 URL，读者可以选择自己喜欢的界面。

做类似系统时，需要守住这些边界：

- 风格变化不应该改变内容。
- 不要为了视觉变体生成重复 URL。
- 每套风格都必须保持正文可读。
- 代码块、侧边栏和表格要单独检查。
- 动效和光效不能让长文阅读变累。

## 常见样式问题

| 症状 | 检查什么 |
| --- | --- |
| 组件样式影响了无关页面 | 本该 scoped 的规则写成了 global |
| Starlight 颜色没有变化 | 变量名不对，或 CSS 没通过 `customCss` 加载 |
| 深色模式文字看不清 | token 配对对比度不足 |
| 代码块和整体主题割裂 | 代码颜色和表面没有一起设计 |
| 页面之间布局跳动 | 组件缺少稳定间距或宽度规则 |

## 参考资料

- Styling guide：https://docs.astro.build/en/guides/styling/
- CSS variables on MDN：https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- Starlight CSS customization：https://starlight.astro.build/guides/css-and-tailwind/
