---
title: "GitHub Pages"
description: "使用正确的 site、base、工作流和部署检查，把 Astro 站点发布到 GitHub Pages。"
---

# GitHub Pages

GitHub Pages 是 Astro 项目常见的静态托管平台。它适合项目文档、作品集、小型产品站和公开文档。最容易出错的地方，是站点部署在域名根路径，还是部署在仓库子路径。

## 先确定 URL 形态

GitHub Pages 常见三种形态：

| 页面类型 | 示例 URL | Astro `site` | Astro `base` |
| --- | --- | --- | --- |
| 用户或组织站点 | `https://user.github.io/` | `https://user.github.io` | `/` |
| 项目站点 | `https://user.github.io/repo/` | `https://user.github.io` | `/repo/` |
| 自定义域名 | `https://docs.example.com/` | `https://docs.example.com` | `/` |

很多 GitHub Pages 部署问题都来自本地使用 `/`，但项目站点实际运行在 `/<repo>/` 下。

## 配置 Astro

项目站点可以这样配置：

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://user.github.io',
  base: '/repo/',
});
```

自定义域名通常这样配置：

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://docs.example.com',
  base: '/',
});
```

先提交配置，再设置工作流。构建产物必须使用 GitHub Pages 实际服务的路径形态生成。

## 添加 GitHub Actions 工作流

常见 workflow 放在 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

仓库设置中，Pages 需要选择从 GitHub Actions 部署。

## 部署后检查

工作流完成后，至少打开：

- 首页
- 一个深层路由
- 一个包含代码块或图片的页面
- 启用 sitemap 时的 `sitemap-index.xml`

如果是项目站点，查看页面源码或网络面板。CSS 和 JavaScript 应该从 `/repo/_astro/...` 加载，而不是从 `/_astro/...` 加载。

## 自定义域名

使用自定义域名时，在 GitHub Pages 设置里添加域名，并按 GitHub 的要求配置 DNS。Astro 中把 `site` 设为自定义域名，`base` 通常设为 `/`。

如果站点之前使用项目子路径，迁移到自定义域名后要移除旧 `base`。继续保留 `base: '/repo/'` 会让链接和资源指向错误路径。

## 常见问题

| 症状 | 可能处理 |
| --- | --- |
| 页面有 HTML 但没有 CSS | 项目站点需要 `base: '/repo/'` |
| 首页正常但嵌套页面异常 | 检查输出路径和 Pages source |
| sitemap 域名错误 | 正确设置 `site` |
| workflow 无法部署 | 检查 Pages 权限和仓库设置 |
| Actions 构建失败但本地正常 | 对齐 Node 版本，并使用 `npm ci` 和 lockfile |

## 参考资料

- Astro GitHub Pages guide：https://docs.astro.build/en/guides/deploy/github/
- GitHub Pages custom workflows：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- deploy-pages action：https://github.com/actions/deploy-pages
