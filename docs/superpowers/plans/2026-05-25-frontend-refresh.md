# Vibe Docs 前端体验升级实施计划

> **给 agentic worker：** 实施本计划时使用内联执行方式，逐项完成并更新复选框。项目指令优先：不新建分支，不运行测试、构建或验证命令，不生成 `.superpowers` 目录。

**目标：** 将根首页、Starlight 阅读体验和主题系统升级为更有识别度的产品化文档站，并将主题收敛为 `Base / Retro / Luminous` 三套。

**架构：** 继续使用 Astro + Starlight，不引入新依赖。首页由 `src/pages/index.astro` 内部 topic 数据渲染，主题系统由 `astro.config.mjs` 启动脚本、`StyleSwitcher.astro` 控件和 CSS token 共同驱动。

**技术栈：** Astro、Starlight、原生 CSS、少量内联浏览器脚本。

---

## 文件结构

- 修改 `astro.config.mjs`：同步主题白名单和 light/dark 映射。
- 修改 `src/components/StyleSwitcher.astro`：三选项主题分段控件。
- 修改 `src/pages/index.astro`：重做根首页结构和 topic 数据。
- 修改 `src/styles/custom.css`：重整全局入口、Starlight shell、Markdown 和首页样式。
- 修改 `src/styles/themes/base.css`：默认主题 token 和基础 UI 质感。
- 修改 `src/styles/themes/neo-retro.css`：高识别亮色主题 token 和局部质感。
- 修改 `src/styles/themes/luminous.css`：深色沉浸主题 token 和局部质感。
- 删除 `src/styles/themes/pop-brutal.css`：不再保留的主题。
- 删除 `src/styles/themes/pixel.css`：不再保留的主题。

## 任务 1：收敛主题白名单和切换器

**文件：**

- 修改 `astro.config.mjs`
- 修改 `src/components/StyleSwitcher.astro`

- [x] **步骤 1：修改 `astro.config.mjs` 启动脚本**

将 `allowed` 改为：

```js
const allowed = ['base', 'neo-retro', 'luminous'];
const lightPacks = ['base', 'neo-retro'];
```

保持 `localStorage` 读取、`data-theme-pack`、`data-theme` 和 `starlight-theme` 同步逻辑不变。

- [x] **步骤 2：修改 `StyleSwitcher.astro` 主题列表**

将 `styles` 改为三套主题对象：

```js
const styles = [
  { value: 'base', label: 'Base', background: '#f6f8fb', accent: '#2563eb' },
  { value: 'neo-retro', label: 'Retro', background: '#fff7d6', accent: '#db2777' },
  { value: 'luminous', label: 'Luminous', background: '#06101a', accent: '#55c7ff' },
];
```

同步脚本中的：

```js
const allowed = ['base', 'neo-retro', 'luminous'];
const lightPacks = ['base', 'neo-retro'];
```

- [x] **步骤 3：改善控件语义**

将外层文案从 `Style` 调整为 `Theme`。保留 `role="radiogroup"`、`role="radio"`、`aria-checked` 和 `title`，按钮继续通过 `data-active` 标记当前项。

## 任务 2：重做根首页

**文件：**

- 修改 `src/pages/index.astro`

- [x] **步骤 1：扩展 topic 数据**

每个 topic 包含：

```js
{
  name: 'Astro',
  label: 'Frontend docs framework',
  description: 'Build content-heavy sites with routing, islands, content collections, styling, and deployment paths that stay easy to reason about.',
  audience: 'For teams choosing or operating Astro documentation sites.',
  en: '/en/astro/',
  zh: '/zh/astro/',
  paths: ['Start with the project map', 'Understand islands', 'Deploy with fewer surprises'],
}
```

Hermes Agent 和 Swarms 使用同样字段，内容围绕现有文档定位编写。

- [x] **步骤 2：替换页面结构**

保留完整 HTML 页面，新增结构：

```astro
<main class="home-shell">
  <section class="home-hero" aria-labelledby="home-title">...</section>
  <section class="topic-grid" aria-labelledby="topics-title">...</section>
  <section class="home-paths" aria-labelledby="paths-title">...</section>
</main>
```

首屏展示品牌、定位、双语入口说明和 topic 卡片，不使用营销式空 hero。

- [x] **步骤 3：首页使用全局 class**

移除大段页面内视觉 CSS，只保留必要的 `:root` 早期主题变量或完全依赖 `custom.css`。首页 class 统一以 `home-`、`topic-`、`path-` 命名。

## 任务 3：重整全局 CSS 和文档阅读体验

**文件：**

- 修改 `src/styles/custom.css`

- [x] **步骤 1：收敛 CSS import**

文件头只保留：

```css
@import './themes/base.css';
@import './themes/neo-retro.css';
@import './themes/luminous.css';
```

- [x] **步骤 2：重整基础 token**

在 `:root` 中保留 Starlight 宽度、字体、颜色桥接变量，并新增首页需要的通用变量：

```css
--astro-ring: color-mix(in srgb, var(--astro-accent) 35%, transparent);
--astro-soft-border: color-mix(in srgb, var(--astro-global-border) 70%, transparent);
```

- [x] **步骤 3：增强 Starlight shell**

覆盖范围集中在 `.header`、`.sidebar-pane`、`.right-sidebar`、`.main-pane`、`.site-title`、`.right-group`。目标是边界更清晰、背景更统一、顶部控件更紧凑。

- [x] **步骤 4：增强 Markdown 内容**

覆盖 `.sl-markdown-content` 中的标题、段落、列表、链接、代码、代码块、表格和引用。保持自然阅读，不把每个段落做成卡片。

- [x] **步骤 5：新增首页样式**

添加 `.home-shell`、`.home-hero`、`.home-kicker`、`.home-title`、`.home-summary`、`.home-meta`、`.topic-grid`、`.topic-card`、`.topic-card__actions`、`.home-paths` 等 class。卡片圆角不超过 8px，移动端单列，桌面端网格。

- [x] **步骤 6：保留动效降级**

保留并扩展：

```css
@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 任务 4：打磨三套主题 token

**文件：**

- 修改 `src/styles/themes/base.css`
- 修改 `src/styles/themes/neo-retro.css`
- 修改 `src/styles/themes/luminous.css`

- [x] **步骤 1：Base**

将 Base 设定为专业默认：白色/浅灰背景、蓝色强调、低噪声阴影、8px 圆角、系统字体栈。补齐 `--astro-home-*` 或同类首页变量。

- [x] **步骤 2：neo-retro**

保留粉、浅黄、青色和深色边框，但减少过强圆角。按钮、卡片和主题切换器保持清楚的 2px 边框与实心投影。

- [x] **步骤 3：luminous**

保持深色底、冷蓝强调和半透明表面。卡片、代码块、顶部控件使用轻微 glow 和 backdrop，不扩大到影响正文可读性。

## 任务 5：删除不再保留的主题文件

**文件：**

- 删除 `src/styles/themes/pop-brutal.css`
- 删除 `src/styles/themes/pixel.css`

- [x] **步骤 1：删除文件**

用补丁删除两套主题文件。删除前确认 `custom.css`、`astro.config.mjs` 和 `StyleSwitcher.astro` 已停止引用。

## 任务 6：静态收尾

**文件：**

- 修改本计划文件，更新已完成复选框

- [x] **步骤 1：检查引用**

通过代码阅读确认 `pop-brutal` 和 `pixel` 不再出现在主题白名单、切换器列表或 CSS import 中。

- [x] **步骤 2：检查项目约束**

确认没有运行测试、构建或验证命令，没有生成 `.superpowers` 目录，没有修改 `src/content/docs/**`、`content-plans/**` 或 `tools/**`。

- [x] **步骤 3：总结改动**

最终回复中说明修改的文件、未运行测试/构建/验证命令，并提示如果需要可再启动本地 dev server 进行视觉查看。
