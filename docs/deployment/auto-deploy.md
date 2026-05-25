# 自动部署链路说明

本文记录本仓库当前的两条自动部署链路：GitHub Pages 和 Cloudflare Pages。

## GitHub Pages

GitHub Pages 的自动部署配置在仓库内：

- 文件：`.github/workflows/pages.yml`
- 触发条件：推送到 `main`、推送 `v*` tag、手动触发 `workflow_dispatch`
- 构建命令：`npm run build`
- 构建输出：`dist`
- 部署动作：`actions/deploy-pages@v5`

流程是：

1. GitHub 收到 push。
2. GitHub Actions 运行 `.github/workflows/pages.yml`。
3. Workflow 安装依赖并执行 `npm run build`。
4. `actions/upload-pages-artifact` 上传 `dist`。
5. `actions/deploy-pages` 发布到 GitHub Pages。

该 workflow 会给构建注入：

```text
PUBLIC_SITE_URL=${{ vars.PUBLIC_SITE_URL || format('https://{0}.github.io', github.repository_owner) }}
PUBLIC_BASE_PATH=${{ vars.PUBLIC_BASE_PATH || format('/{0}/', github.event.repository.name) }}
```

如果 GitHub Pages 不是正式 canonical 域名，应在 GitHub 仓库变量中明确设置，避免 sitemap 和 canonical 与生产域名冲突。

## Cloudflare Pages

Cloudflare Pages 的 Git 自动部署配置不在仓库里。本仓库没有 `wrangler.toml`、`pages.toml` 或 Cloudflare Pages 专用 workflow。

Cloudflare Pages 的逻辑由 Cloudflare 控制台保存：

- GitHub 账户授权：通过 Cloudflare GitHub App 完成。
- 仓库选择：在 Cloudflare Pages 创建项目时选择。
- 构建设置：保存在 Cloudflare Pages 项目设置里。
- 自动触发：Cloudflare 通过 GitHub App/webhook 接收 push 事件。

推荐在 Cloudflare Pages 项目中确认：

| 配置项 | 推荐值 |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | 留空 |

生产环境变量推荐：

| 变量名 | 值 |
| --- | --- |
| `PUBLIC_SITE_URL` | `https://docxing.top` |
| `PUBLIC_BASE_PATH` | `/` |
| `NODE_VERSION` | `22` 或当前 Cloudflare Pages 支持的 LTS 版本 |
| `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` | 可留空 |

流程是：

1. GitHub 收到 push。
2. Cloudflare GitHub App 收到仓库事件。
3. Cloudflare Pages 拉取最新提交。
4. Cloudflare 按项目后台保存的构建设置执行 `npm run build`。
5. Cloudflare Pages 发布 `dist`。

因此，在仓库里找不到 Cloudflare Pages 自动部署配置是正常的。要查看或修改它，需要进入 Cloudflare 控制台的 Pages 项目设置。

## 两条链路的关系

当前 push 到 `main` 可能同时触发两次构建：

- GitHub Actions 发布 GitHub Pages。
- Cloudflare Pages 发布 `docxing.top` 或 `*.pages.dev`。

两者互不调用，也不是 Cloudflare 读取 GitHub Pages 的产物。它们只是监听同一个 GitHub 仓库事件，各自独立构建同一份 Astro 项目。

如果 `docxing.top` 是正式站点，建议把 Cloudflare Pages 视为生产部署，GitHub Pages 作为备用或预览入口。生产 canonical 应统一使用 `https://docxing.top`。
