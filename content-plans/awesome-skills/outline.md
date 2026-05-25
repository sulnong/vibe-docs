# Awesome Skills 选题大纲报告

## 研究流程

- 以 VoltAgent 的 `awesome-agent-skills` 作为第一版 skills 来源，先识别已经被社区和官方团队公开维护的 agent skills。
- 以 officialskills.sh 的单个 skill 页面作为页面形态参考，尤其参考 `openai/frontend-skill` 这类页面的安装区、用途区、使用场景和相似 skill 组织方式。
- 交叉查看 officialskills.sh、OpenAI skills 仓库、Agent Skills 标准站、各 skill 的 GitHub 原始目录和 `SKILL.md`。
- 第一版不追求“收录最多”，而是从多个 skills 列表中筛出 100 个真实可用、来源清楚、任务边界明确的 skills。
- 每个 skill 页面都必须消化原始说明，形成读者可判断、可安装、可使用、可排错的说明，而不是复制 awesome list 的一行描述。
- 分类先服务读者决策，再服务来源归属；同一来源下的多个 skills 可以分散到不同类别。

## URL 组织

- 英文入口：`/en/awesome-skills/`
- 中文入口：`/zh/awesome-skills/`
- skill 页面 slug 保持中英文一致，例如：
  - 英文：`/en/awesome-skills/playwright/`
  - 中文：`/zh/awesome-skills/playwright/`
- 第一版先做一个样页：`playwright`。样页稳定后，再批量增加 100 个 skill 页面。

## 来源地图

### 主参考源

- https://github.com/VoltAgent/awesome-agent-skills
  - 用途：第一版技能池、来源归属、类别观察、官方/社区 skill 区分。
  - 观察：列表宣称收录 1424+ skills，并强调由官方团队和社区维护，不是批量 AI 生成内容。
- https://officialskills.sh/
  - 用途：skills 目录站、单页信息架构参考、skill 页面元信息、安装入口、相似 skill 观察。
- https://officialskills.sh/openai/skills/frontend-skill
  - 用途：单个 skill 页面形态参考。可复用结构包括顶部元信息、Setup & Installation、What This Skill Does、When to use it、`SKILL.md` 展开区和 Similar Skills。
- https://officialskills.sh/openai/skills/playwright
  - 用途：Playwright 样页的目录站信息、安装链接、分类和描述。

### 官方与标准来源

- https://github.com/openai/skills
  - 用途：OpenAI skills 仓库、安装说明、curated/system/experimental 分类。
- https://github.com/openai/skills/tree/main/skills/.curated/playwright
  - 用途：Playwright skill 原始目录、`SKILL.md`、脚本、引用资料和许可证。
- https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright/SKILL.md
  - 用途：Playwright skill 的触发条件、前置检查、工作流和 guardrails。
- https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright/references/cli.md
  - 用途：Playwright CLI 命令范围。
- https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright/references/workflows.md
  - 用途：Playwright CLI 工作流、会话和排错路径。
- https://agentskills.io/
  - 用途：Agent Skills 概念基线、标准化背景、skill 创建与客户端支持资料。

### SERP/竞品观察

- “awesome agent skills”“awesome claude skills”“codex skills”“agent skills” 的搜索结果混合目录站、GitHub awesome list、官方文档和单个 skill 仓库。
- 现有目录多偏“发现链接”，缺少每个 skill 的适用边界、安装差异、失败症状、替代方案和真实任务路径。
- officialskills.sh 的单页对安装、用途、使用场景、原始 `SKILL.md` 和相似 skill 展示较强，适合作为单页结构参考；但读者仍需要独立判断这个 skill 适合哪类 agent、是否需要外部依赖、何时不该用。
- 第一版差异化重点：把 100 个 skills 做成“可选型的技能手册”，每页都给出任务边界、使用路径和风险提醒。

## 分类设计

第一版 100 个 skills 建议按读者任务分组，而不是完全按发布方分组：

- 浏览器、测试与质量：Playwright、webapp-testing、web-quality-audit、Core Web Vitals、accessibility、performance、SEO。
- 部署与平台运维：Cloudflare、Vercel、Netlify、Render、Wrangler、Workers、Pages、Cloud Run。
- 安全与审计：security-best-practices、threat-model、Trail of Bits 安全 skills、static analysis、Semgrep。
- 文档、办公与知识管理：docx、pdf、pptx、xlsx、Notion、Google Workspace、research documentation。
- 前端与设计：frontend-design、Figma、web-design-guidelines、React/Next/Angular/Expo skills。
- 数据库与后端：Supabase、Postgres、MongoDB、Redis、ClickHouse、Neon、Firebase。
- AI/ML 与模型平台：OpenAI docs、Gemini API、Hugging Face、Replicate、NVIDIA。
- 产品、增长与内容：Typefully、marketing、product management、email、notification。
- Skill 创建与维护：skill-creator、template、skill optimizer、Agent Skills 标准、quality standards。

## 页面与 URL 设计

### 1. Topic 首页 / Awesome Skills

- 英文 URL：`/en/awesome-skills/`
- 中文 URL：`/zh/awesome-skills/`
- 搜索意图：找 agent skills、了解分类、判断从哪里开始。
- 要回答的问题：这个 topic 收录什么；如何选择一个 skill；第一版如何从 100 个 skills 中组织；为什么不只看 awesome list。
- 页面结构：定位；阅读路径；分类地图；样页入口；后续 100 个页面的组织方式；来源入口。
- 来源需求：VoltAgent awesome list；officialskills.sh；Agent Skills 标准；OpenAI skills 仓库。
- 差异化内容：解释“发现列表”和“可使用说明”的区别，让读者知道每个页面会补上安装、触发、边界和替代判断。

### 2. Playwright skill 样页 / Playwright

- 英文 URL：`/en/awesome-skills/playwright/`
- 中文 URL：`/zh/awesome-skills/playwright/`
- 搜索意图：了解 OpenAI Playwright skill；安装；用 agent 控制浏览器；和 Playwright Test 区分。
- 要回答的问题：这个 skill 做什么；适合什么任务；需要什么前置条件；如何安装；如何触发；核心工作流是什么；什么时候不要用；常见失败如何排查。
- 页面结构：一句话定位；Setup & Installation；What This Skill Does；When to use it；不适合场景；最小工作流；常见任务；边界与 guardrails；Similar Skills；参考资料。
- 来源需求：OpenAI skills README；Playwright skill `SKILL.md`；`references/cli.md`；`references/workflows.md`；officialskills.sh 页面；VoltAgent 列表。
- 差异化内容：把原始 `SKILL.md` 中“CLI-first、snapshot refs、npx 前置检查、wrapper script、不要默认写 Playwright test specs”转成读者可执行的判断和工作流。

### 3. 后续 100 个 skill 页面模板

- 英文 URL：`/en/awesome-skills/<skill-slug>/`
- 中文 URL：`/zh/awesome-skills/<skill-slug>/`
- 搜索意图：单个 skill 的用途、安装、边界、替代方案。
- 要回答的问题：
  - 它解决哪类任务？
  - 哪些 agent/客户端适合使用？
  - 安装或启用路径是什么？
  - 原始 skill 的触发条件是什么？
  - 需要外部账号、CLI、API key 或本地依赖吗？
  - 哪些场景不要使用它？
  - 失败时先检查什么？
- 页面结构：概览；Setup & Installation；What This Skill Does；When to use it；不适合场景；关键工作流；边界；排错；Similar Skills；维护与来源。
- 来源需求：每个 skill 的原始仓库、`SKILL.md`、目录站页面、官方文档或发布方资料。
- 差异化内容：不复制原文；给出真实选择建议、依赖提醒、误用边界和与相邻 skill 的区别。

## 样页内容规范

- 页面标题使用 skill 的常见展示名，例如 `Playwright Skill`。
- 页面信息架构参考 officialskills.sh 的单页：顶部元信息后优先给安装入口，再解释用途和使用场景。
- 首屏必须回答“它让 agent 多了什么能力”，但不要只做一句话目录卡片。
- “适合/不适合”比泛泛介绍更重要，避免每页都写成 README 摘要。
- 安装命令只写与来源匹配的路径，标注客户端差异；不虚构不存在的包名。
- 引用资料放在页面底部，正文只在需要时给出原始链接。
- 不把内部字段写进公开页面；公开页面不出现“搜索意图”“差异化内容”“人工审核”等词。

## 人工审核问题

- 这个 topic 名称是否固定为 `awesome-skills`，还是需要改成 `agent-skills`、`ai-agent-skills` 或其他更利于搜索的 slug？
- 第一版 100 个 skills 是否优先收官方团队发布的 skills，社区 skills 只作为补充？
- 单个 skill 页面是否需要显示“官方/社区/实验性/curated”等状态标签？
- Playwright 样页是否适合作为模板，还是应改选更业务型的 skill，例如 `stripe-best-practices` 或 `cloudflare`？
- 是否允许这次先发布样页，后续再补齐完整 100 个页面？
