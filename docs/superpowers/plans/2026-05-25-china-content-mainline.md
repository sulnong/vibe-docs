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

### Task 7: 页面反馈追加修正

**Files:**
- Modify: `astro.config.mjs`
- Modify: `src/components/StyleSwitcher.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/styles/custom.css`
- Modify: `src/styles/themes/neo-retro.css`
- Modify: `src/content/docs/china-economy/china-2026-reflation-turning-point.md`
- Modify: `tests/public-site.test.js`
- Modify: `tests/theme-assets.test.js`

- [x] 将公开站点标题从旧名称改为 `China Explained`，并同步 Article JSON-LD 的 publisher/author。
- [x] 将阅读模式控件改为参考 `ui-ref/toggle-switch/01.html` 和 `01.css` 的单 checkbox 场景滑动开关。
- [x] 收窄右侧目录外栏，放宽目录文本实际行宽，并给正文更多可用宽度。
- [x] 弱化顶部导航中搜索和控件的重边框，减少多个条框堆叠感。
- [x] 扩充 landing page 的覆盖地图、后续选题队列和编辑承诺，避免首页内容过薄。
- [x] 更新陈旧测试断言，使其反映单 retro 主题、阅读模式控件和新主线站点定位。

### Task 8: 文章页批注修正

**Files:**
- Modify: `src/components/starlight/TopicSidebar.astro`
- Modify: `src/components/StyleSwitcher.astro`
- Modify: `src/content/docs/china-economy/china-2026-reflation-turning-point.md`
- Modify: `src/styles/custom.css`
- Modify: `tests/public-site.test.js`

- [x] 修复中国内容 sidebar 在多语言站点中被自动注入 `/en` 或 `/zh` 导致 404 的问题。
- [x] 用强覆盖锁定右侧目录外层 rail 宽度，减少右侧无效 margin，让正文获得更多空间。
- [x] 将顶部开关从无感阅读模式改为 `Theme` 切换，点击后切到明显不同的 night tone。
- [x] 将第一篇文章改为 Starlight hero 形态，移除正文重复 H1，并增加开篇 lens 表，提升专题文章表现力。
- [x] 修复宽屏 night 模式下右侧目录停在页面中间、目录右侧出现大面积空白的问题；主题切换只改变色调，不再改变正文和目录宽度。
