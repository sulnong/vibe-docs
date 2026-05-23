---
title: "项目结构"
description: "理解 Astro 项目中的目录和配置文件，方便后续修改路由、layout、组件、内容和资源。"
---

# 项目结构

Astro 项目的根目录通常很容易扫一眼看明白。重要文件不多，大多数工作都发生在 `src/` 下面。

```text
astro.config.mjs
package.json
public/
src/
  components/
  content/
  layouts/
  pages/
```

模板和集成会增加额外目录，但这个结构解释了核心模型：路由在 `src/pages/`，可复用 UI 在 `src/components/`，共享页面外壳在 `src/layouts/`，结构化内容在 `src/content/`。

## `src/pages/`

`src/pages/` 是 Astro 文件路由的起点。`src/pages/about.astro` 会变成 `/about/`，`src/pages/blog/index.astro` 会变成 `/blog/`。

页面可以是 `.astro`、`.md`、`.mdx`，也可能在集成支持下使用其他文件类型。文档站使用 Starlight 时，docs 路由会由 Starlight 的内容集合管理，但这个路由模型仍然影响站点首页、自定义 landing page、redirect、API endpoint 和非文档区域。

只有应该生成 URL 的文件才放在 `src/pages/`。可复用 UI 不应该放在这里，除非它本身就是一个页面。

## `src/components/`

组件是可复用 UI。静态或半静态界面优先用 Astro 组件：

- 卡片
- 提示块
- 页头和页脚
- 内容 wrapper
- 页面区块
- 不需要浏览器状态的文档小组件

先用 `.astro` 组件。只有某个局部确实需要浏览器行为时，再使用 React、Vue、Svelte、Solid 或其他框架组件。

```astro
---
const { title } = Astro.props;
---

<section class="card">
  <h2>{title}</h2>
  <slot />
</section>

<style>
  .card {
    border: 1px solid var(--sl-color-gray-5);
    border-radius: 0.5rem;
    padding: 1rem;
  }
</style>
```

这个组件可以包裹内容、渲染成 HTML，并且不需要发送客户端 JavaScript。

## `src/layouts/`

Layouts 用来包裹页面的共享结构。一个 layout 通常负责文档外壳、metadata、导航、页脚和页面内容插槽。

```astro
---
const { title } = Astro.props;
---

<!doctype html>
<html lang="zh-CN">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

Layout 可以减少重复，也让 metadata 更容易保持一致。如果多个页面出现相同的 `<head>`、导航或 wrapper，这些内容通常应该进入 layout。

在 Starlight 站点里，内置 docs layout 会处理大多数文档页。自定义 layout 仍然适合非文档 landing page、topic index、实验页或 docs 树之外的营销页面。

## `src/content/`

`src/content/` 用于内容集合。内容集合可以校验 frontmatter、类型安全地查询条目，并让 Markdown、MDX、YAML、TOML、JSON 或远程内容保持一致的数据模型。

一个 blog collection 可以是这样：

```text
src/content/blog/
  first-post.md
  second-post.md
```

schema 通常放在 `src/content.config.ts`：

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
  }),
});

export const collections = { blog };
```

对于内容型网站，这个目录往往就是产品本身。页面不只是模板，而是带有标题、描述、slug、日期、关系和发布规则的文档。

## `public/`

`public/` 下的文件会原样复制到构建产物中。适合放需要稳定路径、且不需要 Astro 处理的资源：

- `robots.txt`
- favicon
- 需要固定路径访问的静态图片
- 下载文件
- 外部服务要求的验证文件

如果图片会被组件导入并参与优化或打包，通常放在 `src/` 下更合适。如果它必须按原路径提供，`public/` 更简单。

## `astro.config.mjs`

`astro.config.mjs` 控制项目配置：

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  base: '/',
  integrations: [sitemap()],
});
```

常见设置包括：

| 设置 | 为什么重要 |
| --- | --- |
| `site` | 公开 origin，用于 canonical URL、sitemap 和集成。 |
| `base` | 子路径部署时使用，例如 `/repo/`。 |
| `integrations` | 添加 Starlight、MDX、sitemap、Tailwind、UI framework 等能力。 |
| `output` | 选择静态输出或服务端输出。 |
| `adapter` | 为特定托管平台启用请求时渲染。 |

对于 SEO 文档站，`site` 和 `base` 尤其重要。站点可能构建成功，但 canonical URL 或资源路径仍然是错的。

## `package.json`

`package.json` 告诉你项目如何运行：

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

它也能看出安装了哪些集成，以及 Astro 的版本范围。如果项目行为和教程不一致，先看 `package.json` 和 lockfile，再判断文档是否过时。

## 不同项目会长成不同结构

| 项目类型 | 结构通常围绕什么增长 |
| --- | --- |
| 营销页 | `src/pages/`、`src/components/`、自定义 layout、图片资源 |
| 博客 | `src/content/`、动态路由、feed、作者 metadata |
| 文档站 | Starlight docs 内容、sidebar 配置、i18n、搜索、代码示例 |
| 混合应用 | 请求时渲染的路由、adapter、API endpoint |

不要把所有 Astro 项目硬塞进同一种结构。让内容模型决定文件应该放在哪里。

## 参考资料

- Project structure：https://docs.astro.build/en/basics/project-structure/
- Configuration reference：https://docs.astro.build/en/reference/configuration-reference/
- Content collections：https://docs.astro.build/en/guides/content-collections/
