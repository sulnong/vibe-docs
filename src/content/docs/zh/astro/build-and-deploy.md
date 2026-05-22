---
title: "构建与部署"
description: "理解 Astro 的生产构建、静态产物、本地预览、adapter 和常见部署目标。"
---

# 构建与部署

`npm run build` 会运行 Astro 的生产构建。对于静态站点，产物会输出到 `dist/`。这个目录里包含 HTML、CSS、JavaScript、图片、sitemap 和其他可以上传到静态托管平台的资源。

基本流程是：

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

对于文档站，静态输出应该是默认起点。

## 服务端渲染和 adapters

Astro 也可以通过 adapter 部署服务端渲染项目。当页面依赖请求时数据、登录态、cookie 或运行时 API 时，服务端渲染会更合适。

Adapter 负责把 Astro 连接到具体托管平台。比如服务端渲染项目可以使用 Node adapter、Vercel adapter 或 Cloudflare adapter。静态站点通常不需要 adapter，除非目标平台有特殊要求。

## Metadata 和 URL

构建配置会影响 SEO。最重要的是：

- `site`：公开访问 origin，例如 `https://example.com`。
- `base`：子路径，例如 GitHub Pages project site 的 `/repo/`。
- sitemap 集成：根据构建路由生成 sitemap。
- robots 和 canonical：告诉搜索引擎哪些页面应被索引。

如果 `site` 或 `base` 错了，构建可能仍然成功，但生成的 URL 会不正确。

## 部署检查清单

发布静态 Astro 文档站前，至少检查：

- 首页能打开。
- 每个语言的 topic 页面能打开。
- 侧边栏链接可访问。
- 搜索资源能加载。
- `sitemap-index.xml` 存在。
- 需要时有 `robots.txt`。
- canonical URL 使用预期域名和 base path。
- 代码块和图片显示正常。

GitHub Pages 特别要注意 base path。迁移到自定义域名后，base path 通常改回 `/`。

## Sources

- Deploy Astro：https://docs.astro.build/en/guides/deploy/
- GitHub Pages deployment：https://docs.astro.build/en/guides/deploy/github/
- Configuration reference：https://docs.astro.build/en/reference/configuration-reference/
