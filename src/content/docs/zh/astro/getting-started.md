---
title: "快速开始"
description: "安装 Astro，创建项目，启动开发服务器，并理解最常用的开发、构建和本地预览命令。"
---

# 快速开始

最快的开始方式是使用官方创建命令：

```bash
npm create astro@latest
```

创建向导会询问项目目录、模板、是否安装依赖、是否初始化 Git。第一次学习时，建议选择最小模板或文档相关模板，这样可以先看清楚 Astro 的结构，而不是被过多业务代码干扰。

## 第一次运行

创建后进入项目目录并启动开发服务器：

```bash
cd my-astro-site
npm run dev
```

常用脚本通常有三个：

```bash
npm run dev
npm run build
npm run preview
```

`dev` 启动本地开发服务器并支持热更新。`build` 生成生产环境产物。`preview` 会在本地预览构建后的产物，它更接近真实部署结果。

## 先看哪些文件

打开项目后，先理解这些位置：

- `astro.config.mjs`：配置集成、站点 URL、base path、输出模式和 adapter。
- `src/pages/`：基于文件的路由。
- `src/components/`：可复用的 Astro 或前端框架组件。
- `src/layouts/`：常放页面外壳和共享结构。
- `src/content/`：结构化 Markdown、MDX 或数据集合。
- `public/`：会原样复制到构建产物中的静态资源。

第一天不用理解所有集成。先修改一个页面，新增一个路由，观察开发服务器如何更新。

## 创建第一个页面

可以创建一个简单页面：

```astro
---
const title = 'Hello Astro';
---

<html lang="zh-CN">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>这个页面由 Astro 渲染。</p>
  </body>
</html>
```

如果保存为 `src/pages/hello.astro`，它就会出现在 `/hello/`。

## 常见的第一次修改

多数 Astro 项目一开始会做这些事：

- 修改 `src/pages/index.astro`。
- 添加 `src/layouts/BaseLayout.astro` 管理公共 `<head>`、导航和页脚。
- 用 Markdown 或 MDX 增加内容页。
- 文档站项目引入 Starlight。
- 只有在确实需要交互时，再加入 React、Vue、Svelte 等框架集成。

## 常见误区

第一个误区是把 Astro 当成传统客户端应用框架。Astro 先渲染 HTML，只有脚本和 hydrated 组件才会发送 JavaScript。

第二个误区是部署 base path。自定义域名通常是 `/`，而 GitHub Pages project site 往往是 `/repo-name/`。如果 base path 错了，页面可能能打开，但 CSS 或内部链接会出问题。

## Sources

- 安装指南：https://docs.astro.build/en/install-and-setup/
- 项目结构：https://docs.astro.build/en/basics/project-structure/
- Astro CLI：https://docs.astro.build/en/reference/cli-reference/
