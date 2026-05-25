# China Content Mainline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将站点主线迁移为英文中国内容产品，保留旧技术文档，重做第一篇文章 URL、首页、布局、主题控件和知识图谱基础。

**Architecture:** 继续使用 Astro + Starlight，但新主线内容采用无语言前缀的公开路径和更偏 editorial 的阅读体验。通过静态内容 frontmatter 维护 `topics/tags/entities/related`，先用轻量前端组件渲染局部知识图谱。旧 `/en/...` 与 `/zh/...` 技术文档保留，新中国内容旧路径用重定向承接。

**Tech Stack:** Astro, Starlight, Markdown content collection, Astro components, CSS variables, Cloudflare Pages redirects/functions.

---

### Task 1: 路由与内容位置

**Files:**
- Create: `src/content/docs/china-economy/index.md`
- Create: `src/content/docs/china-economy/china-2026-reflation-turning-point.md`
- Delete: `src/content/docs/en/china-macro/index.md`
- Delete: `src/content/docs/en/china-macro/china-economy-2026-turning-point.md`
- Delete: `src/content/docs/zh/china-macro/index.md`
- Delete: `src/content/docs/zh/china-macro/china-economy-2026-turning-point.md`
- Modify: `public/_redirects`
- Modify: `content-plans/china-macro/outline.md`
- Modify: `content-plans/china-macro/source-notes/01.md`

- [x] 将第一篇公开页迁移到 `/china-economy/china-2026-reflation-turning-point/`。
- [x] 删除新主线内容的中英文双语公开页。
- [x] 为旧 `/en/china-macro/...` 和 `/zh/china-macro/...` 添加 301 重定向。
- [x] 更新内部计划中的 URL 与分类记录。

### Task 2: 第一篇文章重写

**Files:**
- Modify: `src/content/docs/china-economy/china-2026-reflation-turning-point.md`

- [x] 将英文正文从文档式 explainer 改成长文式研究解读。
- [x] 保留 SEO 必需结构，但让它隐入叙事：标题、description、开头、分节、FAQ、来源、指标。
- [x] 扩写房地产退出、AI 重资产化、硅基地缘、通胀型去杠杆、内外需再平衡和证伪指标。
- [x] 添加 `topics`、`tags`、`entities`、`related` frontmatter。
- [x] 明确区分事实、来源观点和不确定判断。

### Task 3: Landing Page 调整

**Files:**
- Modify: `src/content/docs/en/index.md`
- Modify: `src/pages/index.astro`
- Modify: `astro.config.mjs`

- [x] 新 landing page 主文案使用 “Deep English explainers on China’s economy, industry, technology, and energy”。
- [x] 首页主入口指向 `/china-economy/china-2026-reflation-turning-point/` 和 `/china-economy/`。
- [x] 旧技术文档 topic 从主视觉移除，可在低干扰位置保留入口。

### Task 4: 导航、语言与主题

**Files:**
- Modify: `astro.config.mjs`
- Modify: `src/components/starlight/Header.astro`
- Modify: `src/components/StyleSwitcher.astro`
- Modify: `src/components/starlight/TopicSidebar.astro`
- Modify: `src/styles/custom.css`

- [x] 从公开 header 移除语言切换按钮。
- [x] 保留 retro 基础视觉，移除 base/luminous 多主题切换逻辑。
- [x] 将主题控件改为轻量阅读模式/视觉控件，不再是三主题 selector。
- [x] 修复右侧目录过窄问题，但不无谓扩大正文右侧空白；正文宽度略收窄，目录宽度合理放宽。
- [x] 新中国内容导航显示为 `China Economy`，旧技术文档仍可访问。

### Task 5: 知识图谱基础

**Files:**
- Modify: `src/content/docs/china-economy/index.md`
- Modify: `src/content/docs/china-economy/china-2026-reflation-turning-point.md`
- Modify: `src/styles/custom.css`

- [x] 用文章 frontmatter 中的 `topics/tags/entities/related` 保存图谱关系。
- [x] 第一版用 Markdown 表格展示当前 topic 的节点关系，不接后端，不引入 MDX。
- [x] 后续真正交互图单独做 Astro 页面或组件，不嵌入 `.md` 文件。

### Task 6: 文件级检查

**Files:**
- All changed files

- [x] 用 `rg` 检查公开页没有中文内部策划词。
- [x] 用 `rg` 检查旧 URL 有重定向。
- [x] 用 `git status --short` 汇总变更。
- [x] 按项目规则，不运行测试、构建或验证命令，除非用户另行要求。
