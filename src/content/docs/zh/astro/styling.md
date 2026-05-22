---
title: "样式"
description: "理解 Astro 的作用域样式、全局样式、CSS 变量，以及当前站点如何实现同内容换风格。"
---

# 样式

Astro 支持普通 CSS、`.astro` 组件内的作用域样式、导入全局 CSS、CSS 预处理器、CSS modules、Tailwind 和其他样式集成。你可以从普通 CSS 开始，等项目真的需要时再增加工具。

对于文档站，样式最重要的目标不是炫，而是可读、导航清晰、对比度足够，并且视觉系统能持续迭代而不影响内容。

## 作用域组件样式

写在 Astro 组件内的样式默认是作用域化的：

```astro
<section class="hero">
  <h1>快速内容站</h1>
</section>

<style>
  .hero {
    padding: 4rem 1rem;
  }
</style>
```

`.hero` 只影响当前组件渲染出的 markup，不会轻易污染整个站点。这适合局部布局和组件样式。

## 全局样式

全局样式适合设计 token、排版规则、reset、正文样式、主题变量和影响整个站点的布局。

在 Starlight 项目里，全局 CSS 还可以覆盖 Starlight 的变量和界面区域。当前指南就是通过这种方式，在保持内容与 URL 不变的情况下切换视觉风格。

## CSS 变量

CSS 变量是实现风格切换最直接的方法。先定义颜色、圆角、阴影、字体和表面变量：

```css
:root {
  --site-accent: #3b82f6;
  --site-surface: #ffffff;
  --site-radius: 8px;
}
```

组件消费变量，而不是写死具体值：

```css
.card {
  border-radius: var(--site-radius);
  background: var(--site-surface);
}
```

## 当前站点如何切换风格

这套指南保持内容和 URL 不变，只通过 `<html>` 上的 `data-theme-pack` 改变视觉风格。右上角风格切换器会把选择保存到 `localStorage`，`src/styles/themes/` 下的 CSS 文件定义每个风格的变量。

这样做对 SEO 更友好，因为不同风格不会生成重复 URL。搜索引擎看到的是同一个页面，用户可以选择自己喜欢的界面。

## 风格应该影响什么

一个有意义的风格包不应该只改侧边栏颜色。它至少应该影响：

- 页面背景
- 顶部导航
- 侧边栏
- 标题
- 链接
- 代码块
- 边框
- 阴影
- 卡片和按钮

但视觉变化不能牺牲可读性。例如 Luminous 可以有光影和深色背景，但正文、链接、侧边栏文字必须保持足够对比度。

## Sources

- Styling guide：https://docs.astro.build/en/guides/styling/
- CSS variables on MDN：https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- Starlight CSS customization：https://starlight.astro.build/guides/css-and-tailwind/
