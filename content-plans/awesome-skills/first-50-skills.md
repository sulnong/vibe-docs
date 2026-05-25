# Awesome Skills 第一轮 50 个页面清单

## 选择原则

- 优先选择 officialskills.sh 和 VoltAgent Awesome Agent Skills 中来源清楚的 skills。
- 覆盖浏览器、前端、部署、安全、文档、数据、AI/ML、工作流八类高搜索价值任务。
- 每个 skill 页面都按同一信息架构生成：快速信息、安装入口、用途、适用/不适用场景、第一次工作流、边界、相似 skill 和参考资料。
- 第一轮目标是形成可索引、可内链、可扩展的页面骨架；后续再逐页补充更深的真实案例、错误信息和对比。

## 浏览器、测试与质量

用于浏览器自动化、本地应用检查、Core Web Vitals、可访问性和 Web 质量审查的 skills。

- `playwright`：openai/playwright；通过终端里的 `playwright-cli` 驱动真实浏览器，完成导航、表单、snapshot、截图、信息提取和 UI 流程调试。；来源：https://officialskills.sh/openai/skills/playwright
- `webapp-testing`：anthropics/webapp-testing；使用 Playwright 相关工作流测试本地 Web 应用。；来源：https://officialskills.sh/anthropics/skills/webapp-testing
- `playwright-interactive`：openai/playwright-interactive；通过交互式 JavaScript REPL 持续操作浏览器和 Electron 应用。；来源：https://officialskills.sh/openai/skills/playwright-interactive
- `web-quality-audit`：addyosmani/web-quality-audit；围绕性能、可访问性、SEO 和最佳实践进行 Web 质量审查。；来源：https://officialskills.sh/addyosmani/skills/web-quality-audit
- `core-web-vitals`：addyosmani/core-web-vitals；诊断并改进 LCP、INP 和 CLS 问题。；来源：https://officialskills.sh/addyosmani/skills/core-web-vitals
- `accessibility`：addyosmani/accessibility；按接近 WCAG 的实践检查审查并改进 Web 可访问性。；来源：https://officialskills.sh/addyosmani/skills/accessibility

## 前端与设计

用于 UI 构图、框架模式、设计审查和前端实现决策的 skills。

- `frontend-skill`：openai/frontend-skill；用更强的布局、图片、层级和动效约束推动 composition-first 前端工作。；来源：https://officialskills.sh/openai/skills/frontend-skill
- `frontend-design`：anthropics/frontend-design；指导前端设计和 UI/UX 开发工作。；来源：https://officialskills.sh/anthropics/skills/frontend-design
- `web-design-guidelines`：vercel-labs/web-design-guidelines；应用 Vercel 风格的 Web 设计指南和标准。；来源：https://officialskills.sh/vercel-labs/skills/web-design-guidelines
- `react-best-practices`：vercel-labs/react-best-practices；按现代模式和实际约束审查、编写 React 代码。；来源：https://officialskills.sh/vercel-labs/skills/react-best-practices
- `next-best-practices`：vercel-labs/next-best-practices；应用推荐的 Next.js 模式和实现建议。；来源：https://officialskills.sh/vercel-labs/skills/next-best-practices
- `angular-developer`：angular/angular-developer；为 Angular 组件、服务和响应式机制生成代码与架构建议。；来源：https://github.com/angular/skills
- `building-native-ui`：expo/building-native-ui；结合 Expo Router、样式、组件、导航和动画模式构建原生 UI。；来源：https://officialskills.sh/expo/skills/building-native-ui

## 部署与平台运维

用于部署、配置和运维云平台与托管服务的 skills。

- `cloudflare`：cloudflare/cloudflare；覆盖 Cloudflare Workers、Pages、存储、AI、网络、安全和基础设施配置。；来源：https://officialskills.sh/cloudflare/skills/cloudflare
- `workers-best-practices`：cloudflare/workers-best-practices；按生产最佳实践和 `wrangler.jsonc` 约定审查、编写 Workers 代码。；来源：https://officialskills.sh/cloudflare/skills/workers-best-practices
- `wrangler`：cloudflare/wrangler；用 Wrangler 部署和管理 Workers、KV、R2、D1、Vectorize、Queues 和 Workflows。；来源：https://officialskills.sh/cloudflare/skills/wrangler
- `cloudflare-deploy`：openai/cloudflare-deploy；使用 Workers、Pages 和相关平台服务把应用部署到 Cloudflare。；来源：https://officialskills.sh/openai/skills/cloudflare-deploy
- `vercel-deploy`：openai/vercel-deploy；把应用和网站部署到 Vercel 预览或生产环境。；来源：https://officialskills.sh/openai/skills/vercel-deploy
- `netlify-deploy`：openai/netlify-deploy；通过 CLI 认证、站点关联和环境配置自动化 Netlify 部署。；来源：https://officialskills.sh/openai/skills/netlify-deploy
- `netlify-functions`：netlify/netlify-functions；在 Netlify 上构建 serverless API 端点和后台任务。；来源：https://officialskills.sh/netlify/skills/netlify-functions

## 安全与审查

用于威胁建模、静态分析、代码审查和安全调查的 skills。

- `security-best-practices`：openai/security-best-practices；按语言特性审查安全漏洞，并识别实际加固机会。；来源：https://officialskills.sh/openai/skills/security-best-practices
- `security-threat-model`：openai/security-threat-model；通过识别资产、信任边界和攻击路径生成仓库级威胁模型。；来源：https://officialskills.sh/openai/skills/security-threat-model
- `ask-questions-if-underspecified`：trailofbits/ask-questions-if-underspecified；在需求过于模糊、无法安全处理时强制澄清。；来源：https://officialskills.sh/trailofbits/skills/ask-questions-if-underspecified
- `audit-context-building`：trailofbits/audit-context-building；在安全审计或调查前建立深入架构上下文。；来源：https://officialskills.sh/trailofbits/skills/audit-context-building
- `static-analysis`：trailofbits/static-analysis；使用 CodeQL、Semgrep 和 SARIF 等静态分析工具流程。；来源：https://officialskills.sh/trailofbits/skills/static-analysis
- `semgrep-rule-creator`：trailofbits/semgrep-rule-creator；创建并迭代用于漏洞检测的 Semgrep 规则。；来源：https://officialskills.sh/trailofbits/skills/semgrep-rule-creator
- `insecure-defaults`：trailofbits/insecure-defaults；识别硬编码密钥、默认凭据和弱加密等不安全默认配置。；来源：https://officialskills.sh/trailofbits/skills/insecure-defaults

## 文档与知识管理

用于办公文件、PDF、文档研究和知识沉淀流程的 skills。

- `docx`：anthropics/docx；创建、编辑和分析 Microsoft Word 文档。；来源：https://officialskills.sh/anthropics/skills/docx
- `pdf`：anthropics/pdf；提取文本、创建 PDF，并处理 PDF 表单和审查任务。；来源：https://officialskills.sh/anthropics/skills/pdf
- `pptx`：anthropics/pptx；创建、编辑和分析 PowerPoint 演示文稿。；来源：https://officialskills.sh/anthropics/skills/pptx
- `xlsx`：anthropics/xlsx；创建、编辑和分析 Excel 电子表格。；来源：https://officialskills.sh/anthropics/skills/xlsx
- `openai-docs`：openai/openai-docs；从 OpenAI 开发者文档中提供权威使用指导。；来源：https://officialskills.sh/openai/skills/openai-docs
- `notion-knowledge-capture`：openai/notion-knowledge-capture；把对话转换成结构化、可搜索的 Notion wiki 条目。；来源：https://officialskills.sh/openai/skills/notion-knowledge-capture
- `notion-research-documentation`：openai/notion-research-documentation；研究 Notion 内容，并把发现整理成结构化 brief。；来源：https://officialskills.sh/openai/skills/notion-research-documentation

## 数据与后端系统

用于数据库、查询模式、后端服务和数据平台运维的 skills。

- `postgres-best-practices`：supabase/postgres-best-practices；为基于 Supabase 的项目应用 PostgreSQL 最佳实践。；来源：https://officialskills.sh/supabase/skills/postgres-best-practices
- `mongodb-schema-design`：mongodb/mongodb-schema-design；用验证和索引模式设计高效 MongoDB 文档 schema。；来源：https://officialskills.sh/mongodb/skills/mongodb-schema-design
- `mongodb-query-optimizer`：mongodb/mongodb-query-optimizer；分析并优化 MongoDB 查询性能。；来源：https://officialskills.sh/mongodb/skills/mongodb-query-optimizer
- `redis-development`：redis/redis-development；围绕数据结构、缓存、向量搜索和性能指导 Redis 开发。；来源：https://github.com/redis/agent-skills/tree/main/skills/redis-development
- `clickhouse-best-practices`：clickhouse/clickhouse-best-practices；应用 ClickHouse 使用最佳实践。；来源：https://officialskills.sh/clickhouse/skills/clickhouse-best-practices
- `neon-postgres`：neondatabase/neon-postgres；指导 Neon Serverless Postgres 的使用。；来源：https://officialskills.sh/neondatabase/skills/neon-postgres

## AI、ML 与模型平台

用于模型 API、ML 平台、训练流程和 AI 产品集成的 skills。

- `gemini-api-dev`：google-gemini/gemini-api-dev；提供使用 Gemini API 开发 Gemini 应用的最佳实践。；来源：https://officialskills.sh/google-gemini/skills/gemini-api-dev
- `vertex-ai-api-dev`：google-gemini/vertex-ai-api-dev；指导在 Google Cloud Vertex AI 上开发 Gemini 应用。；来源：https://officialskills.sh/google-gemini/skills/vertex-ai-api-dev
- `hf-cli`：huggingface/hf-cli；使用 Hugging Face CLI 完成 Hub 操作。；来源：https://officialskills.sh/huggingface/skills/hf-cli
- `hugging-face-model-trainer`：huggingface/hugging-face-model-trainer；使用 TRL 流程训练模型，包括 SFT、DPO、GRPO 和 GGUF 转换。；来源：https://officialskills.sh/huggingface/skills/hugging-face-model-trainer
- `replicate`：replicate/replicate；通过 Replicate 发现、比较和运行 AI 模型。；来源：https://officialskills.sh/replicate/skills/replicate

## 工作流与 Skill 创建

用于可复用 agent 工作流、GitHub 协作、notebook 和创建新 skills 的 skills。

- `skill-creator`：anthropics/skill-creator；指导创建用于扩展 agent 专门工作流的 skills。；来源：https://officialskills.sh/anthropics/skills/skill-creator
- `template`：anthropics/template；提供创建新 skill 的基础模板。；来源：https://officialskills.sh/anthropics/skills/template
- `gh-address-comments`：openai/gh-address-comments；通过 CLI 处理 GitHub PR 上的 review 和 issue comments。；来源：https://officialskills.sh/openai/skills/gh-address-comments
- `gh-fix-ci`：openai/gh-fix-ci；通过检查日志调试并修复失败的 GitHub Actions 检查。；来源：https://officialskills.sh/openai/skills/gh-fix-ci
- `jupyter-notebook`：openai/jupyter-notebook；为实验和教程创建清晰、可复现的 Jupyter notebooks。；来源：https://officialskills.sh/openai/skills/jupyter-notebook
