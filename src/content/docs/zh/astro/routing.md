---
title: "路由"
description: "学习 Astro 如何把文件映射为 URL，动态路由如何工作，以及 content collections 如何生成页面。"
---

# 路由

Astro 使用基于文件的路由。`src/pages/` 里的文件会变成生成站点中的 URL。路由树直接体现在文件系统中，这也是 Astro 对内容站显得直观的原因之一。

最基础的映射很直接：

```text
src/pages/index.astro        -> /
src/pages/about.astro        -> /about/
src/pages/blog/index.astro   -> /blog/
src/pages/blog/post-1.astro  -> /blog/post-1/
```

这个模型很好学，但项目变大前有几个细节值得弄清：index 路由、动态路由、rest 参数、内容集合和部署 base path。

## 静态路由就是文件

静态路由最简单。创建一个文件，Astro 就创建一个页面。

```astro
---
const title = 'About';
---

<main>
  <h1>{title}</h1>
  <p>这个路由来自 src/pages/about.astro。</p>
</main>
```

这种方式适合 about、pricing、contact、文档入口页和手写指南。

当页面只存在一次、用途稳定时，就用静态路由。不要因为某个页面理论上可以数据化，就把它动态化。

## `index` 文件表示目录根路径

`index.astro` 表示所在目录的根路径：

```text
src/pages/index.astro          -> /
src/pages/blog/index.astro     -> /blog/
src/pages/docs/index.astro     -> /docs/
src/pages/docs/install.astro   -> /docs/install/
```

当一个 section 既需要入口页，又需要子页面时，这个规则很有用。目录表示 section，`index.astro` 表示这个 section 的 landing page。

常见文档结构可以是这样：

```text
src/pages/guides/index.astro
src/pages/guides/install.astro
src/pages/guides/deploy.astro
```

读者可以访问 `/guides/` 看章节入口，也可以直接进入具体任务页。

## 动态路由使用中括号

当路径的一部分是变量时，使用中括号：

```text
src/pages/blog/[slug].astro
```

在静态输出模式下，构建阶段必须提前知道所有路径。所以动态路由通常要导出 `getStaticPaths()`：

```astro
---
export function getStaticPaths() {
  return [
    { params: { slug: 'first-post' } },
    { params: { slug: 'second-post' } },
  ];
}

const { slug } = Astro.params;
---

<main>
  <h1>{slug}</h1>
</main>
```

这会生成 `/blog/first-post/` 和 `/blog/second-post/`。

手写数组适合极小示例。真实内容站通常会从内容、CMS 或其他数据源生成路径。

## 用 `props` 传数据

`params` 决定 URL，`props` 把数据传给页面。

```astro
---
export function getStaticPaths() {
  const products = [
    { slug: 'starter', name: 'Starter', price: '$19' },
    { slug: 'pro', name: 'Pro', price: '$49' },
  ];

  return products.map((product) => ({
    params: { slug: product.slug },
    props: { product },
  }));
}

const { product } = Astro.props;
---

<main>
  <h1>{product.name}</h1>
  <p>{product.price}</p>
</main>
```

这样模板里不需要再次查询同一份数据。数据流也更清楚：生成路径，传入数据，渲染页面。

## 从 collection 生成路由

Content collections 不在 `src/pages/` 中，所以 collection 条目不会自动变成路由。比如一个博客 collection，需要通过动态路由读取条目并生成页面：

```astro
---
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---

<main>
  <h1>{post.data.title}</h1>
  <Content />
</main>
```

如果这个文件位于 `src/pages/blog/[id].astro`，id 为 `first-post` 的条目会生成 `/blog/first-post/`。

大型站点要认真设计 slug。URL 是用 `post.id`、frontmatter 里的 `slug`、日期目录、语言前缀，还是嵌套路径，最好发布前就决定。后面再改会牵涉 redirect。

## Rest 参数匹配嵌套路径

Astro 支持 `[...slug].astro` 这样的 rest 参数。它可以匹配多个路径片段：

```text
src/pages/docs/[...slug].astro
```

它可以表示这些路由：

```text
/docs/
/docs/install/
/docs/deploy/cloudflare/
```

这种方式适合生成的文档树、带嵌套 slug 的导入内容或兼容历史路径。但不要一开始就用 catch-all。过于宽泛的路由会让站点难理解，因为一个文件会拥有许多可能的 URL。

站点结构还小时，优先使用明确路由。只有当内容模型本身包含嵌套深度时，再使用 rest 参数。

## Starlight 路由仍然建立在 Astro 之上

Starlight 会通过 docs content collection 管理文档路由，所以本页位于 `/zh/astro/routing/`，而不是直接放在 `src/pages/` 下面。

但 Astro 路由仍然重要。站点根页面、自定义非文档页面、redirect、API route 和部署 base path 都还是 Astro 的模型。

文档站可以理解成两层：

| 层级 | 谁负责 |
| --- | --- |
| 文档页 | Starlight docs collection |
| 自定义页面 | `src/pages/` |
| 生成式内容路由 | `src/pages/` 中的动态路由 |
| 部署路径 | Astro config 中的 `site` 和 `base` |

## Base path 会影响所有链接

如果站点部署在域名根路径，通常可以使用 `/`。如果部署在子路径，比如 GitHub Pages project site `https://user.github.io/repo/`，就需要配置 `base`：

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://user.github.io',
  base: '/repo/',
});
```

base path 问题常常到部署后才暴露，因为本地开发通常跑在 `/`。如果链接或资源本地正常、部署后失效，优先检查 `site`、`base` 和硬编码的绝对路径。

可以优先使用 Astro 感知的 helper 或合适的相对链接。写绝对路径时，要记得站点最终部署在 `/` 还是某个子路径下。

## 容易忽略的路由问题

| 症状 | 可能原因 |
| --- | --- |
| 动态路由没有生成任何页面 | `getStaticPaths()` 返回空数组，或 params key 写错 |
| dev 正常、部署后 404 | 静态托管平台服务的输出路径或 base path 不一致 |
| 内容条目出现在错误 URL | 路由用了 `id`，但实际想用自定义 slug |
| 缺失页面被 catch-all 掩盖 | `[...slug].astro` 过于宽泛 |
| 只有 GitHub Pages 上链接坏 | 缺少 `base`，或硬编码 `/` 路径忽略了 base |

## 几条小规则

- 路由文件名保持清楚，不要为了聪明而缩写。
- 用 `index.astro` 表示 section 的入口页。
- 内容驱动页面使用动态路由；只存在一次的页面不要动态化。
- 只有内容模型确实有嵌套深度时，再使用 rest 参数。
- 大型内容区发布前先决定 slug 规则。
- 把 `base` 当作发布前必须检查的部署配置。

## 参考资料

- Routing guide：https://docs.astro.build/en/guides/routing/
- Dynamic routes：https://docs.astro.build/en/guides/routing/#dynamic-routes
- Content collections routing：https://docs.astro.build/en/guides/content-collections/#generating-routes-from-content
- Configuration reference：https://docs.astro.build/en/reference/configuration-reference/
