---
title: "MDX 与 Starlight"
description: "把 Markdown、MDX 和 Starlight 配合使用，同时避免把普通文档写成组件堆叠页面。"
---

# MDX 与 Starlight

Astro 可以渲染 Markdown，而 MDX 集成允许你在类似 Markdown 的文档中使用组件。Starlight 是基于 Astro 的文档框架。它们解决的是两个不同问题：更有表达力的内容，以及完整的文档站外壳。

实际规则很简单：普通文档用 Markdown，组件确实能帮助理解时用 MDX，需要文档站外壳时用 Starlight。

## Markdown 优先

多数文档应该优先使用普通 Markdown：

- 容易编写
- 容易审核
- 容易翻译
- 容易 diff
- 容易生成
- 不容易用 UI 掩盖薄内容

教程、概念页、参考页、FAQ 和资源页通常都适合 Markdown。代码块、表格、链接和标题已经能覆盖大多数文档需求。

## 什么时候用 MDX

当文档需要嵌入组件时，MDX 很有用：

- 交互示例
- 自定义卡片
- 图示
- 可复用提示块
- live demo
- 对比 widget
- 指南中的 framework island

例如，一篇页面可以先用文字解释概念，再渲染一个小组件让读者尝试。

代价是复杂度。MDX 页面比 Markdown 更难生成、审核和翻译。只有当组件能明显帮助理解时，才值得使用 MDX，而不是为了装饰。

## 添加 MDX

安装集成：

```bash
npx astro add mdx
```

这个命令会帮你更新 `astro.config.mjs`。手动配置大概是这样：

```js
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [mdx()],
});
```

之后 `.mdx` 页面和内容条目就可以使用组件。

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

## Starlight 和 MDX 一起用

Starlight 页面可以使用 Markdown，也可以在配置后使用 MDX。只有当页面确实受益于局部组件时，再使用 MDX。

适合 MDX 的情况：

- 组件指南中的 playground
- 交互式颜色或主题示例
- 多页复用的对比卡片
- 静态代码块不足以说明问题的 live demo

不太适合 MDX 的情况：

- 只需要代码块的普通教程
- 没有交互需求的概念页
- 因为正文薄而硬塞卡片的页面
- 可以用表格或标题解决的资源列表

## 简单选择规则

| 需求 | 使用 |
| --- | --- |
| 普通文档页 | Markdown |
| 带局部交互示例的文档页 | MDX |
| 文档导航、搜索、i18n、代码高亮 | Starlight |
| docs 外的自定义 landing page | Astro page |
| 复杂应用式工具 | 带 islands 的 Astro page，或单独应用界面 |

## 参考资料

- MDX integration：https://docs.astro.build/en/guides/integrations-guide/mdx/
- Starlight docs：https://starlight.astro.build/
- Starlight authoring content：https://starlight.astro.build/guides/authoring-content/
