---
title: "构建与部署"
description: "理解 Astro 的生产构建、静态产物、本地预览、adapter、部署目标和 URL 配置。"
---

# 构建与部署

`npm run build` 会运行 Astro 的生产构建。对于静态站点，产物会输出到 `dist/`。这个目录里包含 HTML、CSS、JavaScript、图片、sitemap 和其他可以上传到静态托管平台的资源。

最小可靠部署流程是：

```bash
npm run build
npm run preview
```

`preview` 会在本地预览构建后的产物。它不同于 `dev`，更适合发现生产构建后才会出现的问题。

## 静态产物

Astro 很适合静态托管。内容型网站通常不需要每次请求都运行服务端逻辑，所以静态产物更容易缓存、部署和被搜索引擎抓取。

常见静态托管目标包括：

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel 静态输出
- S3 兼容对象存储加 CDN
- 任何能托管 `dist/` 文件的服务器

对于文档站，除非某个路由确实需要请求时行为，否则静态输出应该是起点。

## 构建产物里有什么

静态构建成功后，可以查看 `dist/`：

```text
dist/
  index.html
  _astro/
  sitemap-index.xml
```

具体文件取决于集成和路由。关键是确认公开页面出现在托管平台预期的位置，资源文件存在，生成的 URL 使用正确域名和 base path。

文档站至少预览几个页面：

- 首页
- 一个较深的 topic 页面
- 一个多语言页面
- 一个包含代码块的页面
- 一个包含图片或自定义组件的页面

如果这些页面在 `preview` 中正常，但线上失败，问题通常在部署配置，而不是 Astro 渲染本身。

## `site` 和 `base`

URL 配置会影响链接、资源路径、sitemap 和 canonical metadata。

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://docs.example.com',
  base: '/',
});
```

当站点部署在子路径时，需要设置 `base`：

```js
export default defineConfig({
  site: 'https://user.github.io',
  base: '/repo/',
});
```

如果站点使用自定义域名并部署在根路径，`base` 通常是 `/`。如果是 GitHub Pages project site，`base` 通常是 `/<repository-name>/`。

## 静态输出还是服务端输出

Astro 也可以通过 adapter 做请求时渲染。当页面依赖请求时数据时，才需要服务端输出：

- 登录态
- cookie
- 用户专属页面
- 表单处理
- 每次请求都要最新 API 数据
- 无法等待重建的页面

内容可以提前生成时，静态输出更简单。服务端输出更灵活，但会增加托管要求、运行时行为和运维复杂度。

| 需求 | 起点 |
| --- | --- |
| 文档、博客、营销站 | 静态输出 |
| 少量生成式内容路由 | 静态输出加动态路由 |
| 用户专属后台 | 服务端输出，或其他应用框架 |
| 表单提交 | 服务端输出、endpoint 或外部表单服务 |
| 高频变化的外部数据 | 服务端输出或定时重建 |

## Adapters

Adapter 把 Astro 连接到具体部署运行时。静态站点通常不需要 adapter。服务端渲染站点通常需要。

常见选择取决于托管平台：

- Node adapter 用于 Node server 环境。
- Vercel adapter 用于 Vercel。
- Netlify adapter 用于 Netlify。
- Cloudflare adapter 用于 Cloudflare Workers 或 Pages runtime。

先决定托管平台和渲染模式，再选择 adapter。太早安装 adapter，反而会让简单静态项目更难理解。

## 部署前检查

发布静态 Astro 文档站前，至少检查：

- 首页能打开。
- 每个语言的 topic 页面能打开。
- 侧边栏链接可访问。
- 搜索资源能加载。
- 启用 sitemap 时，`sitemap-index.xml` 存在。
- 需要时有 `robots.txt`。
- canonical URL 使用预期域名和 base path。
- 代码块、表格和图片显示正常。
- 线上直接刷新深层 URL 不会 404。

GitHub Pages 特别要注意 base path。迁移到自定义域名后，base path 通常改回 `/`。

## 常见部署问题

| 症状 | 先看哪里 |
| --- | --- |
| 部署后 CSS 和 JS 404 | `base` 缺失或错误 |
| sitemap 里还是 `example.com` | `site` 仍然是默认值 |
| 深层路由在线上 404 | 托管平台输出目录或 fallback 规则 |
| `dev` 正常但 `preview` 异常 | 生产构建产物和开发服务器行为不同 |
| 本地构建成功、CI 失败 | Node 版本或 lockfile 不一致 |
| 文档搜索不可用 | Starlight 资源没有从正确 base path 加载 |

## 参考资料

- Deploy Astro：https://docs.astro.build/en/guides/deploy/
- Configuration reference：https://docs.astro.build/en/reference/configuration-reference/
- On-demand rendering：https://docs.astro.build/en/guides/on-demand-rendering/
