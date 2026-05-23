# Project Instructions

- 所有文档都用中文。
- 讨论、设计、规划、实现方案都要形成文档并持久化，保持文档精简，可维护。
- 不特意强调时，不用建新分支，默认在 `main` 分支上操作。
- 不要生成 `.superpowers` 目录；如果出现，应删除。
- 项目处于快速迭代阶段。除非明确要求，不运行测试、构建或验证命令。

## 项目定位

这是一个 agent-assisted 的双语技术文档站。公开站点用 Astro + Starlight 承载主题优先的中英文文档；内部工具只辅助 agent 做选题研究、大纲报告和文档生成，不对公开读者展示。

## 正常内容流程

1. 用户在 agent 中输入一个 topic。
2. agent 尝试 clone 官方仓库；如果耗时太久就放弃，改用 GitHub API、README、raw 文件和官方文档站。
3. agent 查找更多与选题相关的文档、release notes、examples、issues、FAQ、迁移指南、源码示例、社区问题、竞品页面和 SERP 结果，从尽可能多的来源获取信息。
4. agent 抽取事实并标注来源，补充例子、坑点、对比、排错路径和搜索需求。
5. agent 优先制造别人没有的内容，例如真实任务地图、反例、边界条件、版本差异、排错路径和决策清单。
6. agent 生成 `content-plans/<topic-slug>/outline.md` 选题大纲报告。
7. 用户人工审核大纲报告，确认后 agent 才进入文档生成阶段。

## 大纲报告要求

- 必须包含研究流程、来源地图、SERP/竞品观察、URL 路径设计、页面组织方式和人工审核问题。
- 页面部分要详实：每个页面都要写清楚英 URL、搜索意图、要回答的问题、页面结构、来源需求和差异化内容。
- 中英文页面 slug 保持一致，公开 URL 采用 `/en/<topic>/` 和 `/zh/<topic>/`。
- 竞品可用于识别搜索意图、页面缺口和对比维度，可根据情况复用对方表达、结构和独特内容。

## 目录约定

- `tools/`：agent 内部工具。人不需要学习这套 CLI；agent 可用 `research` 生成大纲报告，用 `draft` 生成草稿，用 `check` 做结构检查。
- `content-plans/`：agent 生成的选题大纲报告目录。不要把它变成状态机、队列、GSC 仓库或人工命令手册。
- `src/content/docs/`：公开文档内容，只放最终面向读者的中英文页面。

## 凭据与外部能力

- `GITHUB_TOKEN`：推荐提供，用于提高 GitHub API 额度和读取公开仓库元信息。
- 搜索 API：可选。没有搜索 API 时，agent 仍可用网页搜索和人工 SERP 观察；需要稳定批量化时再接 SerpAPI、DataForSEO 或 Google Custom Search JSON API。
- Google Search Console：发布后复盘用，不是生成大纲报告的前置条件。
- 站点访问统计：发布后优化用，可用 Cloudflare Web Analytics 或其他统计工具。
