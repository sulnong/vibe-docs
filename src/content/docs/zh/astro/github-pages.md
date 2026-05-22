---
title: "GitHub Pages"
description: "通过 GitHub Actions 在打 tag 后自动把 Astro 文档站部署到 GitHub Pages。"
---

# GitHub Pages

在购买域名、配置正式 gateway 之前，GitHub Pages 是一个合适的临时部署目标。它能给你一个公开 URL，并且和 GitHub Actions 集成，足够验证发布链路。

Astro 官方 GitHub Pages 指南推荐使用 GitHub Actions 构建站点，再部署生成的静态产物。

## 仓库设置

在 GitHub 仓库设置里，把 Pages 的 source 配置为 GitHub Actions。这样 GitHub Pages 会接收 Actions workflow 产出的 artifact，而不是从某个分支直接读取文件。

当前项目的发布流程基于 tag：

```bash
git tag v0.1.0
git push origin v0.1.0
```

推送 tag 后会触发 Pages workflow。它会安装依赖、构建 Astro、上传 `dist/`，然后部署 Pages artifact。

## Base path

GitHub Pages 常见 URL 有两种：

```text
https://USER.github.io/
https://USER.github.io/REPO/
```

第二种是 project site。如果站点部署在 `/REPO/` 下，Astro 构建时需要知道这个 base path。

当前项目读取 `PUBLIC_BASE_PATH`，例如仓库名是 `astro-guide` 时可以设置：

```text
PUBLIC_BASE_PATH=/astro-guide/
```

以后迁移到自定义域名时，再把 base path 改回 `/`，并更新 `PUBLIC_SITE_URL`。

## Site URL

`site` 值应该匹配公开访问 origin：

```text
PUBLIC_SITE_URL=https://USER.github.io
```

如果使用自定义域名：

```text
PUBLIC_SITE_URL=https://example.com
PUBLIC_BASE_PATH=/
```

这很重要，因为生成的 URL、sitemap 和 canonical 都依赖这些配置。

## 手动发布

workflow 也支持 `workflow_dispatch` 手动触发。刚配置 GitHub Pages 时，手动部署很方便，因为你不需要每次都创建新 tag。

流程稳定后，tag 发布更干净。tag 能标记是哪一份源码生成了线上版本。

## 排错

如果页面能打开但 CSS 丢失，优先怀疑 base path。如果部署 action 成功但页面 404，检查 Pages 设置是否选择了 GitHub Actions。如果 sitemap 指向错误域名，检查 `PUBLIC_SITE_URL`。

## Sources

- Astro GitHub Pages guide：https://docs.astro.build/en/guides/deploy/github/
- GitHub Pages custom workflows：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Deploy Pages action：https://github.com/actions/deploy-pages
