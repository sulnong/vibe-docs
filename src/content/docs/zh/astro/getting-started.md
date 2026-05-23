---
title: "快速开始"
description: "创建一个新的 Astro 项目，本地运行，修改第一个路由，添加第二个页面，并构建生产产物。"
---

# 快速开始

理解 Astro 最快的方式，是做一个很小的网站，并完整走一遍流程：创建项目、启动开发服务器、修改路由、添加新页面、构建产物，再预览即将部署的结果。

Astro 6 需要较新的 Node.js。当前项目使用 Astro `^6.3.6`，其包信息要求 Node.js `>=22.12.0`。开始前先检查版本：

```bash
node --version
npm --version
```

如果 Node 版本太旧，先升级 Node。很多看起来像 Astro 的错误，其实是依赖或运行时版本不匹配。

## 创建项目

使用官方创建向导：

```bash
npm create astro@latest
```

向导会询问项目目录、起始模板、是否安装依赖、是否初始化 Git。第一次学习建议选择最小模板。如果已经确定要做文档站，Starlight 模板也合理；但最小模板更容易看清 Astro 自身的结构。

创建完成后进入项目目录：

```bash
cd my-astro-site
npm run dev
```

终端会打印本地地址，通常是 `http://localhost:4321/`。在浏览器中打开它，并保持开发服务器运行。

## 修改首页

打开 `src/pages/index.astro`，把页面内容改成一个小例子：

```astro
---
const name = 'Astro';
const features = ['先输出 HTML', '需要时使用组件', '按需加载 JavaScript'];
---

<main>
  <h1>Hello {name}</h1>
  <ul>
    {features.map((feature) => <li>{feature}</li>)}
  </ul>
</main>
```

保存后观察浏览器变化。如果没有自动刷新，手动刷新一次。这就是 Astro 的基础开发循环：编辑文件，查看对应路由，保持页面以 HTML 为主，只有需要时才增加更多能力。

frontmatter 里的代码会在页面发送到浏览器前运行。模板里的列表最终变成 HTML。这个例子不需要客户端 JavaScript。

## 添加第二个路由

创建 `src/pages/about.astro`：

```astro
---
const title = 'About this site';
---

<main>
  <h1>{title}</h1>
  <p>Astro 会把这个文件变成 /about/ 路由。</p>
</main>
```

访问 `/about/`。不需要额外路由表，因为 `src/pages/` 中的文件会自动变成 URL。

最基础的映射如下：

```text
src/pages/index.astro   -> /
src/pages/about.astro   -> /about/
```

嵌套目录也一样。`src/pages/docs/install.astro` 会变成 `/docs/install/`。

## 添加 layout

当两个页面开始共享结构时，就应该添加 layout，而不是复制相同 markup。创建 `src/layouts/BaseLayout.astro`：

```astro
---
const { title, description = 'A small Astro site' } = Astro.props;
---

<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="description" content={description} />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

然后在 `src/pages/about.astro` 中使用它：

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="About this site">
  <main>
    <h1>About this site</h1>
    <p>Layouts 可以把重复的页面结构放在一个地方。</p>
  </main>
</BaseLayout>
```

Layout 适合放 metadata、导航、主题脚本和共享页面外壳。它也能让后续部署更稳，因为 title 和 description 不容易到处漂移。

## 记住日常脚本

多数 Astro 项目日常会反复用这三个脚本：

```bash
npm run dev
npm run build
npm run preview
```

`dev` 启动开发服务器。`build` 在 `dist/` 中生成生产产物。`preview` 在本地预览构建后的产物，让你看到更接近部署后的结果。

即使只是试项目，也建议构建一次：

```bash
npm run build
```

构建步骤能发现开发服务器不一定明显暴露的问题：缺失 import、无效内容、TypeScript 问题、部署路径配置错误等。

## 先看哪些文件

默认项目很小，可以直接打开看：

```text
astro.config.mjs
package.json
public/
src/
  components/
  layouts/
  pages/
```

先看 `src/pages/` 和 `astro.config.mjs`。前者说明 URL 如何出现，后者说明项目用了哪些 integration、adapter、站点 URL、base path 和输出模式。

第一小时不用急着安装所有东西。React、Vue、Tailwind、MDX、Starlight 和 adapter 都应该在解决真实问题时再加。普通页面先跑通。

## 选择合适的起点

第一个真正的判断，是这个站点属于哪种形态：

| 站点形态 | 起点 |
| --- | --- |
| 小型营销页或项目站 | 页面、layout、Astro 组件 |
| 博客或内容站 | 页面加 content collections |
| 文档站 | Starlight、content collections，必要时加 MDX |
| 类应用后台 | 先判断 Astro 只是外壳，还是全栈应用框架更简单 |

这个选择会影响目录结构、路由、metadata 和部署方式。内容站可以保持简单和快速；类应用界面则需要更多 client islands 和更清晰的状态边界。

## 如果第一步就失败

首次失败通常是普通环境问题。先看版本和包信息：

```bash
node --version
npm --version
npm info astro version
```

如果 `npm create astro@latest` 不存在或卡住，优先升级 Node/npm，或使用团队统一的包管理器。如果本地能打开、部署后 CSS 或内部链接坏了，通常要检查 `astro.config.mjs` 里的 `site` 和 `base`。

常见症状：

| 症状 | 先看哪里 |
| --- | --- |
| `npm create astro@latest` 立即失败 | Node 和 npm 版本 |
| dev 正常、部署后 CSS 坏了 | `astro.config.mjs` 中的 `base` |
| 本地路由正常、静态托管 404 | 构建产物路径和托管平台配置 |
| 客户端组件显示了但不能点击 | 缺少 `client:*` directive |
| 只有 CI 构建失败 | Node 版本和 lockfile 是否一致 |

部署路径问题可以继续看 [GitHub Pages](/zh/astro/github-pages/)。

## 参考资料

- 安装指南：https://docs.astro.build/en/install-and-setup/
- 项目结构：https://docs.astro.build/en/basics/project-structure/
- Astro CLI：https://docs.astro.build/en/reference/cli-reference/
- Astro package metadata：https://www.npmjs.com/package/astro
