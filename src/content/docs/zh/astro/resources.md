---
title: "资源"
description: "整理 Astro 官方资料、Starlight 链接、部署参考，以及构建 Astro 站点时应该去哪里验证行为。"
---

# 资源

当你需要验证 Astro 行为、找到对应官方指南，或在读完本主题后继续学习时，可以从这里开始。

比较好的习惯是：先找和当前任务匹配的官方文档页；涉及准确行为时，再查配置参考、集成文档或仓库。

## Astro 官方资料

| 资源 | 适合用来做什么 |
| --- | --- |
| https://docs.astro.build/ | 主文档、指南、概念和参考 |
| https://github.com/withastro/astro | 源码、issues、releases、包历史 |
| https://docs.astro.build/en/reference/configuration-reference/ | 查 `site`、`base`、`output`、adapter 等配置 |
| https://docs.astro.build/en/reference/cli-reference/ | 查 CLI 命令和参数 |
| https://docs.astro.build/en/guides/integrations-guide/ | 查官方和社区 integration 入口 |

## 核心学习主题

- Why Astro：https://docs.astro.build/en/concepts/why-astro/
- Islands architecture：https://docs.astro.build/en/concepts/islands/
- Project structure：https://docs.astro.build/en/basics/project-structure/
- Routing：https://docs.astro.build/en/guides/routing/
- Astro components：https://docs.astro.build/en/basics/astro-components/
- Framework components：https://docs.astro.build/en/guides/framework-components/
- Client directives：https://docs.astro.build/en/reference/directives-reference/#client-directives

这些页面解释 Astro 的心智模型。调试复杂 integration 前，先读这些通常更有效；很多问题来自把 Astro 当成传统客户端应用框架。

## 内容与写作

- Content collections：https://docs.astro.build/en/guides/content-collections/
- MDX integration：https://docs.astro.build/en/guides/integrations-guide/mdx/
- Markdown content：https://docs.astro.build/en/guides/markdown-content/
- Images：https://docs.astro.build/en/guides/images/

对于内容型网站，content collections 文档尤其重要。它解释了内容如何从松散 Markdown 文件变成有类型的数据模型。

## 样式

- Styling guide：https://docs.astro.build/en/guides/styling/
- CSS custom properties on MDN：https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- Starlight CSS customization：https://starlight.astro.build/guides/css-and-tailwind/

Astro 样式指南适合查框架层行为，CSS 语言细节则应该回到 MDN。

## Starlight 文档站

- Starlight 文档：https://starlight.astro.build/
- Starlight authoring content：https://starlight.astro.build/guides/authoring-content/
- Starlight i18n：https://starlight.astro.build/guides/i18n/
- Starlight configuration：https://starlight.astro.build/reference/configuration/
- Starlight components：https://starlight.astro.build/reference/components/

涉及文档外壳行为时，优先查 Starlight：侧边栏、搜索、i18n、页面 metadata、代码高亮和内置组件。

## 部署

- Deploy Astro：https://docs.astro.build/en/guides/deploy/
- Deploy to GitHub Pages：https://docs.astro.build/en/guides/deploy/github/
- On-demand rendering：https://docs.astro.build/en/guides/on-demand-rendering/
- GitHub Pages custom workflows：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- GitHub deploy-pages action：https://github.com/actions/deploy-pages

排查部署问题时，先确认 URL 形态：`site`、`base`、输出目录，以及托管平台是否能正确服务深层路由。

## Release 和问题追踪

- Astro releases：https://github.com/withastro/astro/releases
- Astro issues：https://github.com/withastro/astro/issues
- Astro discussions：https://github.com/withastro/astro/discussions

当行为在不同版本间变化，或者指南和当前安装版本不一致时，再去查 release notes 和 issues。

## 如何使用资料

资料链接不应该替代正文。好的文档页应该直接解释任务本身，再把来源链接放在合适位置，方便读者验证和继续深入。

涉及准确行为时，可以按这个顺序查：

1. 当前任务对应的官方指南。
2. 对应配置项或 API 的参考页。
3. 仓库或 release notes 中的版本变化。
4. 社区 issues，只在官方事实确认之后使用。

## 参考资料

- Astro docs：https://docs.astro.build/
- Astro repository：https://github.com/withastro/astro
