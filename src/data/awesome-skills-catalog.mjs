export const awesomeSkillsCategories = [
  {
    key: 'browser-testing-quality',
    label: { en: 'Browser, Testing, Quality', zh: '浏览器、测试与质量' },
    summary: {
      en: 'Skills for browser automation, local app checks, Core Web Vitals, accessibility, and web quality review.',
      zh: '用于浏览器自动化、本地应用检查、Core Web Vitals、可访问性和 Web 质量审查的 skills。',
    },
    dependency: { en: 'Browser, CLI, or target URL depending on the skill', zh: '根据 skill 不同，通常需要浏览器、CLI 或目标 URL' },
    firstUse: { en: 'Run it on a low-risk page or local preview and capture one concrete finding.', zh: '先在低风险页面或本地预览上运行，并产出一个具体发现。' },
    useCases: {
      en: [
        'Inspect a real web page instead of guessing from source code alone.',
        'Capture evidence such as screenshots, traces, audits, or structured findings.',
        'Separate one-off browser operation from durable regression testing.',
      ],
      zh: [
        '需要检查真实页面，而不是只根据源码猜测行为。',
        '需要截图、trace、审计结果或结构化发现作为证据。',
        '需要区分一次性浏览器操作和长期回归测试。',
      ],
    },
    avoidCases: {
      en: [
        'The task only needs static documentation or source reading.',
        'The site requires credentials or sessions the agent cannot access.',
        'The expected output is a maintained test suite and the project already has a test framework.',
      ],
      zh: [
        '任务只需要阅读静态文档或源码。',
        '目标站点需要 agent 无法访问的账号或登录 session。',
        '目标产物是长期维护的测试套件，而项目已有测试框架。',
      ],
    },
  },
  {
    key: 'frontend-design',
    label: { en: 'Frontend and Design', zh: '前端与设计' },
    summary: {
      en: 'Skills for UI composition, framework patterns, design reviews, and frontend implementation decisions.',
      zh: '用于 UI 构图、框架模式、设计审查和前端实现决策的 skills。',
    },
    dependency: { en: 'Project UI stack, design context, or framework version', zh: '项目 UI 技术栈、设计上下文或框架版本' },
    firstUse: { en: 'Apply it to one screen, component, or design decision before broad refactors.', zh: '先作用于一个页面、组件或设计决策，再考虑大范围改造。' },
    useCases: {
      en: [
        'Turn vague UI requests into concrete layout, interaction, and implementation choices.',
        'Review frontend code against framework-specific patterns.',
        'Avoid generic layouts by forcing design constraints before writing components.',
      ],
      zh: [
        '把模糊的 UI 需求变成具体布局、交互和实现选择。',
        '按框架模式审查前端代码。',
        '在写组件前先固定设计约束，避免生成通用模板感页面。',
      ],
    },
    avoidCases: {
      en: [
        'The task is purely backend or infrastructure work.',
        'A human designer has provided precise specs that should be followed literally.',
        'The page needs content strategy before visual implementation.',
      ],
      zh: [
        '任务纯粹是后端或基础设施工作。',
        '已有人工设计稿要求精确还原。',
        '页面还没有内容策略，尚不适合进入视觉实现。',
      ],
    },
  },
  {
    key: 'deployment-platform',
    label: { en: 'Deployment and Platform Ops', zh: '部署与平台运维' },
    summary: {
      en: 'Skills for deploying, configuring, and operating cloud platforms and hosting providers.',
      zh: '用于部署、配置和运维云平台与托管服务的 skills。',
    },
    dependency: { en: 'Provider account, CLI, project configuration, and environment variables', zh: '平台账号、CLI、项目配置和环境变量' },
    firstUse: { en: 'Use it on a preview, staging service, or dry-run path before production.', zh: '先用于预览、staging 服务或 dry-run 路径，再进入生产环境。' },
    useCases: {
      en: [
        'Prepare a deploy path without mixing provider-specific steps into general app code.',
        'Review configuration files before pushing changes to a hosting provider.',
        'Debug platform behavior with provider vocabulary and guardrails.',
      ],
      zh: [
        '准备部署路径，同时避免把平台细节混进通用应用代码。',
        '在推送到托管平台前审查配置文件。',
        '用平台自己的术语和边界排查部署行为。',
      ],
    },
    avoidCases: {
      en: [
        'The task would modify production resources without a review point.',
        'Required credentials or project identifiers are missing.',
        'The app has not been built or run locally enough to know what should deploy.',
      ],
      zh: [
        '任务会直接修改生产资源，但没有审核点。',
        '缺少必要凭据或项目标识。',
        '应用尚未在本地确认基本运行方式。',
      ],
    },
  },
  {
    key: 'security-review',
    label: { en: 'Security and Review', zh: '安全与审查' },
    summary: {
      en: 'Skills for threat modeling, static analysis, code review, and security-focused investigation.',
      zh: '用于威胁建模、静态分析、代码审查和安全调查的 skills。',
    },
    dependency: { en: 'Repository access, scope, language/tooling context, and review target', zh: '仓库访问权限、范围、语言/工具上下文和审查目标' },
    firstUse: { en: 'Define the asset, trust boundary, or diff before asking the skill to inspect risk.', zh: '先定义资产、信任边界或 diff，再让 skill 检查风险。' },
    useCases: {
      en: [
        'Review a change where security assumptions matter more than style.',
        'Translate broad risk concerns into concrete files, flows, and controls.',
        'Use a specialized analysis workflow without making every coding task security-heavy.',
      ],
      zh: [
        '审查安全假设比代码风格更重要的变更。',
        '把笼统风险拆成具体文件、流程和控制点。',
        '在需要时使用专门安全流程，而不是让每个编码任务都变重。',
      ],
    },
    avoidCases: {
      en: [
        'The reviewer cannot access the relevant code or runtime configuration.',
        'The request asks for exploit instructions against a third-party system.',
        'The scope is too broad to produce actionable findings.',
      ],
      zh: [
        '审查者无法访问相关代码或运行时配置。',
        '请求要求针对第三方系统提供利用步骤。',
        '范围过宽，无法产出可行动结论。',
      ],
    },
  },
  {
    key: 'documents-knowledge',
    label: { en: 'Documents and Knowledge Work', zh: '文档与知识管理' },
    summary: {
      en: 'Skills for office files, PDFs, documentation research, and knowledge capture workflows.',
      zh: '用于办公文件、PDF、文档研究和知识沉淀流程的 skills。',
    },
    dependency: { en: 'Target file, workspace, document source, or connected knowledge system', zh: '目标文件、工作区、文档来源或已连接的知识系统' },
    firstUse: { en: 'Start with one file or one knowledge capture flow and inspect the produced artifact.', zh: '先从一个文件或一条知识沉淀流程开始，并检查产物。' },
    useCases: {
      en: [
        'Handle document formats that need layout or metadata awareness.',
        'Turn conversations, research, or meetings into structured knowledge.',
        'Keep source links and review notes separate from public-facing output.',
      ],
      zh: [
        '处理需要布局或元数据意识的文档格式。',
        '把对话、研究或会议整理成结构化知识。',
        '把来源链接和审核笔记与公开输出分开保存。',
      ],
    },
    avoidCases: {
      en: [
        'The document contains private data that should not be sent to the agent environment.',
        'The expected output requires legal, financial, or compliance approval.',
        'The task is only plain-text editing and does not need a format-specific workflow.',
      ],
      zh: [
        '文档含有不应交给 agent 环境处理的私密数据。',
        '输出需要法律、财务或合规审批。',
        '任务只是普通文本编辑，不需要格式专用流程。',
      ],
    },
  },
  {
    key: 'data-backend',
    label: { en: 'Data and Backend Systems', zh: '数据与后端系统' },
    summary: {
      en: 'Skills for databases, query patterns, backend services, and data platform operations.',
      zh: '用于数据库、查询模式、后端服务和数据平台运维的 skills。',
    },
    dependency: { en: 'Schema, connection context, runtime, and deployment target', zh: 'Schema、连接上下文、运行时和部署目标' },
    firstUse: { en: 'Ask for a small schema, query, or configuration review before broad changes.', zh: '先让它审查一个小 schema、查询或配置，再做大范围变更。' },
    useCases: {
      en: [
        'Choose safer data modeling or query patterns before implementation.',
        'Review backend configuration using provider-specific guidance.',
        'Debug performance or reliability issues with the right system vocabulary.',
      ],
      zh: [
        '实现前选择更稳妥的数据建模或查询模式。',
        '按具体服务商建议审查后端配置。',
        '用正确系统术语排查性能或可靠性问题。',
      ],
    },
    avoidCases: {
      en: [
        'Production data or credentials would be exposed unnecessarily.',
        'The schema and workload are unknown.',
        'The task asks for a migration without a rollback or backup plan.',
      ],
      zh: [
        '会不必要地暴露生产数据或凭据。',
        'schema 和 workload 都不清楚。',
        '请求迁移但没有回滚或备份方案。',
      ],
    },
  },
  {
    key: 'ai-ml-models',
    label: { en: 'AI, ML, and Model Platforms', zh: 'AI、ML 与模型平台' },
    summary: {
      en: 'Skills for model APIs, ML platforms, training workflows, and AI product integration.',
      zh: '用于模型 API、ML 平台、训练流程和 AI 产品集成的 skills。',
    },
    dependency: { en: 'Model provider account, API key, dataset, or SDK context', zh: '模型平台账号、API key、数据集或 SDK 上下文' },
    firstUse: { en: 'Use a small example request, dataset, or model operation before production workflows.', zh: '先用小型示例请求、数据集或模型操作，再进入生产流程。' },
    useCases: {
      en: [
        'Build against fast-moving model APIs with provider-specific constraints.',
        'Run ML platform workflows without losing track of credentials and artifacts.',
        'Compare model or platform choices through concrete tasks.',
      ],
      zh: [
        '在快速变化的模型 API 上按平台约束开发。',
        '运行 ML 平台流程，同时跟踪凭据和产物。',
        '通过具体任务比较模型或平台选择。',
      ],
    },
    avoidCases: {
      en: [
        'The task needs current model pricing or policy and the source has not been checked.',
        'Sensitive datasets would be uploaded without review.',
        'The expected result is scientific validation rather than workflow guidance.',
      ],
      zh: [
        '任务依赖最新模型价格或政策，但尚未核对来源。',
        '敏感数据集会在未审核情况下上传。',
        '目标是科学验证，而不是流程指导。',
      ],
    },
  },
  {
    key: 'workflow-skill-creation',
    label: { en: 'Workflow and Skill Creation', zh: '工作流与 Skill 创建' },
    summary: {
      en: 'Skills for repeatable agent workflows, GitHub work, notebooks, and creating new skills.',
      zh: '用于可复用 agent 工作流、GitHub 协作、notebook 和创建新 skills 的 skills。',
    },
    dependency: { en: 'Repository, issue or PR context, notebook runtime, or skill authoring target', zh: '仓库、issue/PR 上下文、notebook 运行时或 skill 编写目标' },
    firstUse: { en: 'Run it on one bounded workflow and keep the output reviewable.', zh: '先作用于一个边界清楚的工作流，并保持产物可审查。' },
    useCases: {
      en: [
        'Turn recurring agent work into a reusable procedure.',
        'Handle GitHub or notebook tasks without mixing them into general coding prompts.',
        'Create or review skills with clear triggers, inputs, outputs, and guardrails.',
      ],
      zh: [
        '把重复 agent 工作沉淀成可复用流程。',
        '处理 GitHub 或 notebook 任务，避免混进普通编码提示。',
        '创建或审查具备清晰触发、输入、输出和边界的 skills。',
      ],
    },
    avoidCases: {
      en: [
        'The workflow is one-off and not worth turning into a skill.',
        'The task would auto-publish, merge, or push without human review.',
        'The requested skill is too broad to maintain safely.',
      ],
      zh: [
        '流程只是一次性任务，不值得做成 skill。',
        '任务会在没有明确确认点时自动发布、合并或推送。',
        '请求的 skill 过宽，难以安全维护。',
      ],
    },
  },
];

export const awesomeSkills = [
  skill('browser-testing-quality', 'playwright', 'openai', 'playwright', 'Playwright Skill', {
    listing: 'https://officialskills.sh/openai/skills/playwright',
    source: 'https://github.com/openai/skills/tree/main/skills/.curated/playwright',
    install: 'npx skills add https://github.com/openai/skills --skill playwright',
    summary: {
      en: 'Automates a real browser from the terminal with `playwright-cli` for navigation, forms, snapshots, screenshots, extraction, and UI-flow debugging.',
      zh: '通过终端里的 `playwright-cli` 驱动真实浏览器，完成导航、表单、snapshot、截图、信息提取和 UI 流程调试。',
    },
  }),
  skill('browser-testing-quality', 'webapp-testing', 'anthropics', 'webapp-testing', 'Webapp Testing Skill', {
    listing: 'https://officialskills.sh/anthropics/skills/webapp-testing',
    summary: { en: 'Tests local web applications using Playwright-oriented workflows.', zh: '使用 Playwright 相关工作流测试本地 Web 应用。' },
  }),
  skill('browser-testing-quality', 'playwright-interactive', 'openai', 'playwright-interactive', 'Playwright Interactive Skill', {
    listing: 'https://officialskills.sh/openai/skills/playwright-interactive',
    summary: { en: 'Provides persistent browser and Electron interaction through an interactive JavaScript REPL.', zh: '通过交互式 JavaScript REPL 持续操作浏览器和 Electron 应用。' },
  }),
  skill('browser-testing-quality', 'web-quality-audit', 'addyosmani', 'web-quality-audit', 'Web Quality Audit Skill', {
    listing: 'https://officialskills.sh/addyosmani/skills/web-quality-audit',
    summary: { en: 'Runs broad web quality reviews across performance, accessibility, SEO, and best practices.', zh: '围绕性能、可访问性、SEO 和最佳实践进行 Web 质量审查。' },
  }),
  skill('browser-testing-quality', 'core-web-vitals', 'addyosmani', 'core-web-vitals', 'Core Web Vitals Skill', {
    listing: 'https://officialskills.sh/addyosmani/skills/core-web-vitals',
    summary: { en: 'Diagnoses and improves LCP, INP, and CLS issues.', zh: '诊断并改进 LCP、INP 和 CLS 问题。' },
  }),
  skill('browser-testing-quality', 'accessibility', 'addyosmani', 'accessibility', 'Accessibility Skill', {
    listing: 'https://officialskills.sh/addyosmani/skills/accessibility',
    summary: { en: 'Audits and improves web accessibility against practical WCAG-oriented checks.', zh: '按接近 WCAG 的实践检查审查并改进 Web 可访问性。' },
  }),
  skill('frontend-design', 'frontend-skill', 'openai', 'frontend-skill', 'Frontend Skill', {
    listing: 'https://officialskills.sh/openai/skills/frontend-skill',
    summary: { en: 'Enforces composition-first frontend work with stronger layout, imagery, hierarchy, and motion constraints.', zh: '用更强的布局、图片、层级和动效约束推动 composition-first 前端工作。' },
  }),
  skill('frontend-design', 'frontend-design', 'anthropics', 'frontend-design', 'Frontend Design Skill', {
    listing: 'https://officialskills.sh/anthropics/skills/frontend-design',
    summary: { en: 'Guides frontend design and UI/UX development work.', zh: '指导前端设计和 UI/UX 开发工作。' },
  }),
  skill('frontend-design', 'web-design-guidelines', 'vercel-labs', 'web-design-guidelines', 'Web Design Guidelines Skill', {
    listing: 'https://officialskills.sh/vercel-labs/skills/web-design-guidelines',
    summary: { en: 'Applies Vercel-style web design guidelines and standards.', zh: '应用 Vercel 风格的 Web 设计指南和标准。' },
  }),
  skill('frontend-design', 'react-best-practices', 'vercel-labs', 'react-best-practices', 'React Best Practices Skill', {
    listing: 'https://officialskills.sh/vercel-labs/skills/react-best-practices',
    summary: { en: 'Reviews and writes React code with modern patterns and practical constraints.', zh: '按现代模式和实际约束审查、编写 React 代码。' },
  }),
  skill('frontend-design', 'next-best-practices', 'vercel-labs', 'next-best-practices', 'Next.js Best Practices Skill', {
    listing: 'https://officialskills.sh/vercel-labs/skills/next-best-practices',
    summary: { en: 'Applies recommended Next.js patterns and implementation guidance.', zh: '应用推荐的 Next.js 模式和实现建议。' },
  }),
  skill('frontend-design', 'angular-developer', 'angular', 'angular-developer', 'Angular Developer Skill', {
    listing: 'https://github.com/angular/skills',
    source: 'https://github.com/angular/skills',
    summary: { en: 'Generates Angular code and architectural guidance for components, services, and reactivity.', zh: '为 Angular 组件、服务和响应式机制生成代码与架构建议。' },
  }),
  skill('frontend-design', 'building-native-ui', 'expo', 'building-native-ui', 'Expo Building Native UI Skill', {
    listing: 'https://officialskills.sh/expo/skills/building-native-ui',
    summary: { en: 'Builds native UI with Expo Router, styling, components, navigation, and animation patterns.', zh: '结合 Expo Router、样式、组件、导航和动画模式构建原生 UI。' },
  }),
  skill('deployment-platform', 'cloudflare', 'cloudflare', 'cloudflare', 'Cloudflare Skill', {
    listing: 'https://officialskills.sh/cloudflare/skills/cloudflare',
    summary: { en: 'Covers Cloudflare Workers, Pages, storage, AI, networking, security, and infrastructure configuration.', zh: '覆盖 Cloudflare Workers、Pages、存储、AI、网络、安全和基础设施配置。' },
  }),
  skill('deployment-platform', 'workers-best-practices', 'cloudflare', 'workers-best-practices', 'Workers Best Practices Skill', {
    listing: 'https://officialskills.sh/cloudflare/skills/workers-best-practices',
    summary: { en: 'Reviews and authors Workers code against production best practices and `wrangler.jsonc` conventions.', zh: '按生产最佳实践和 `wrangler.jsonc` 约定审查、编写 Workers 代码。' },
  }),
  skill('deployment-platform', 'wrangler', 'cloudflare', 'wrangler', 'Wrangler Skill', {
    listing: 'https://officialskills.sh/cloudflare/skills/wrangler',
    summary: { en: 'Deploys and manages Workers, KV, R2, D1, Vectorize, Queues, and Workflows with Wrangler.', zh: '用 Wrangler 部署和管理 Workers、KV、R2、D1、Vectorize、Queues 和 Workflows。' },
  }),
  skill('deployment-platform', 'cloudflare-deploy', 'openai', 'cloudflare-deploy', 'Cloudflare Deploy Skill', {
    listing: 'https://officialskills.sh/openai/skills/cloudflare-deploy',
    summary: { en: 'Deploys apps to Cloudflare using Workers, Pages, and related platform services.', zh: '使用 Workers、Pages 和相关平台服务把应用部署到 Cloudflare。' },
  }),
  skill('deployment-platform', 'vercel-deploy', 'openai', 'vercel-deploy', 'Vercel Deploy Skill', {
    listing: 'https://officialskills.sh/openai/skills/vercel-deploy',
    summary: { en: 'Deploys applications and websites to Vercel preview or production environments.', zh: '把应用和网站部署到 Vercel 预览或生产环境。' },
  }),
  skill('deployment-platform', 'netlify-deploy', 'openai', 'netlify-deploy', 'Netlify Deploy Skill', {
    listing: 'https://officialskills.sh/openai/skills/netlify-deploy',
    summary: { en: 'Automates Netlify deployments with CLI auth, linking, and environment support.', zh: '通过 CLI 认证、站点关联和环境配置自动化 Netlify 部署。' },
  }),
  skill('deployment-platform', 'netlify-functions', 'netlify', 'netlify-functions', 'Netlify Functions Skill', {
    listing: 'https://officialskills.sh/netlify/skills/netlify-functions',
    summary: { en: 'Builds serverless API endpoints and background tasks on Netlify.', zh: '在 Netlify 上构建 serverless API 端点和后台任务。' },
  }),
  skill('security-review', 'security-best-practices', 'openai', 'security-best-practices', 'Security Best Practices Skill', {
    listing: 'https://officialskills.sh/openai/skills/security-best-practices',
    summary: { en: 'Reviews code for language-specific security vulnerabilities and practical hardening opportunities.', zh: '按语言特性审查安全漏洞，并识别实际加固机会。' },
  }),
  skill('security-review', 'security-threat-model', 'openai', 'security-threat-model', 'Security Threat Model Skill', {
    listing: 'https://officialskills.sh/openai/skills/security-threat-model',
    summary: { en: 'Creates repository-specific threat models by identifying assets, trust boundaries, and attack paths.', zh: '通过识别资产、信任边界和攻击路径生成仓库级威胁模型。' },
  }),
  skill('security-review', 'ask-questions-if-underspecified', 'trailofbits', 'ask-questions-if-underspecified', 'Ask Questions If Underspecified Skill', {
    listing: 'https://officialskills.sh/trailofbits/skills/ask-questions-if-underspecified',
    summary: { en: 'Forces clarification when requirements are too ambiguous for safe security-sensitive work.', zh: '在需求过于模糊、无法安全处理时强制澄清。' },
  }),
  skill('security-review', 'audit-context-building', 'trailofbits', 'audit-context-building', 'Audit Context Building Skill', {
    listing: 'https://officialskills.sh/trailofbits/skills/audit-context-building',
    summary: { en: 'Builds deep architectural context before security audit or investigation work.', zh: '在安全审计或调查前建立深入架构上下文。' },
  }),
  skill('security-review', 'static-analysis', 'trailofbits', 'static-analysis', 'Static Analysis Skill', {
    listing: 'https://officialskills.sh/trailofbits/skills/static-analysis',
    summary: { en: 'Uses static analysis tools such as CodeQL, Semgrep, and SARIF workflows.', zh: '使用 CodeQL、Semgrep 和 SARIF 等静态分析工具流程。' },
  }),
  skill('security-review', 'semgrep-rule-creator', 'trailofbits', 'semgrep-rule-creator', 'Semgrep Rule Creator Skill', {
    listing: 'https://officialskills.sh/trailofbits/skills/semgrep-rule-creator',
    summary: { en: 'Creates and refines Semgrep rules for vulnerability detection.', zh: '创建并迭代用于漏洞检测的 Semgrep 规则。' },
  }),
  skill('security-review', 'insecure-defaults', 'trailofbits', 'insecure-defaults', 'Insecure Defaults Skill', {
    listing: 'https://officialskills.sh/trailofbits/skills/insecure-defaults',
    summary: { en: 'Finds insecure defaults such as hardcoded secrets, default credentials, and weak crypto.', zh: '识别硬编码密钥、默认凭据和弱加密等不安全默认配置。' },
  }),
  skill('documents-knowledge', 'docx', 'anthropics', 'docx', 'DOCX Skill', {
    listing: 'https://officialskills.sh/anthropics/skills/docx',
    summary: { en: 'Creates, edits, and analyzes Microsoft Word documents.', zh: '创建、编辑和分析 Microsoft Word 文档。' },
  }),
  skill('documents-knowledge', 'pdf', 'anthropics', 'pdf', 'PDF Skill', {
    listing: 'https://officialskills.sh/anthropics/skills/pdf',
    summary: { en: 'Extracts text, creates PDFs, and handles PDF forms and review tasks.', zh: '提取文本、创建 PDF，并处理 PDF 表单和审查任务。' },
  }),
  skill('documents-knowledge', 'pptx', 'anthropics', 'pptx', 'PPTX Skill', {
    listing: 'https://officialskills.sh/anthropics/skills/pptx',
    summary: { en: 'Creates, edits, and analyzes PowerPoint presentations.', zh: '创建、编辑和分析 PowerPoint 演示文稿。' },
  }),
  skill('documents-knowledge', 'xlsx', 'anthropics', 'xlsx', 'XLSX Skill', {
    listing: 'https://officialskills.sh/anthropics/skills/xlsx',
    summary: { en: 'Creates, edits, and analyzes Excel spreadsheets.', zh: '创建、编辑和分析 Excel 电子表格。' },
  }),
  skill('documents-knowledge', 'openai-docs', 'openai', 'openai-docs', 'OpenAI Docs Skill', {
    listing: 'https://officialskills.sh/openai/skills/openai-docs',
    summary: { en: 'Provides authoritative guidance from OpenAI developer documentation.', zh: '从 OpenAI 开发者文档中提供权威使用指导。' },
  }),
  skill('documents-knowledge', 'notion-knowledge-capture', 'openai', 'notion-knowledge-capture', 'Notion Knowledge Capture Skill', {
    listing: 'https://officialskills.sh/openai/skills/notion-knowledge-capture',
    summary: { en: 'Converts conversations into structured, searchable Notion wiki entries.', zh: '把对话转换成结构化、可搜索的 Notion wiki 条目。' },
  }),
  skill('documents-knowledge', 'notion-research-documentation', 'openai', 'notion-research-documentation', 'Notion Research Documentation Skill', {
    listing: 'https://officialskills.sh/openai/skills/notion-research-documentation',
    summary: { en: 'Researches Notion content and synthesizes findings into structured briefs.', zh: '研究 Notion 内容，并把发现整理成结构化 brief。' },
  }),
  skill('data-backend', 'postgres-best-practices', 'supabase', 'postgres-best-practices', 'Postgres Best Practices Skill', {
    listing: 'https://officialskills.sh/supabase/skills/postgres-best-practices',
    summary: { en: 'Applies PostgreSQL best practices for Supabase-backed projects.', zh: '为基于 Supabase 的项目应用 PostgreSQL 最佳实践。' },
  }),
  skill('data-backend', 'mongodb-schema-design', 'mongodb', 'mongodb-schema-design', 'MongoDB Schema Design Skill', {
    listing: 'https://officialskills.sh/mongodb/skills/mongodb-schema-design',
    summary: { en: 'Designs efficient MongoDB document schemas with validation and indexing patterns.', zh: '用验证和索引模式设计高效 MongoDB 文档 schema。' },
  }),
  skill('data-backend', 'mongodb-query-optimizer', 'mongodb', 'mongodb-query-optimizer', 'MongoDB Query Optimizer Skill', {
    listing: 'https://officialskills.sh/mongodb/skills/mongodb-query-optimizer',
    summary: { en: 'Analyzes and optimizes MongoDB query performance.', zh: '分析并优化 MongoDB 查询性能。' },
  }),
  skill('data-backend', 'redis-development', 'redis', 'redis-development', 'Redis Development Skill', {
    listing: 'https://github.com/redis/agent-skills/tree/main/skills/redis-development',
    source: 'https://github.com/redis/agent-skills/tree/main/skills/redis-development',
    summary: { en: 'Guides Redis development across data structures, caching, vector search, and performance.', zh: '围绕数据结构、缓存、向量搜索和性能指导 Redis 开发。' },
  }),
  skill('data-backend', 'clickhouse-best-practices', 'clickhouse', 'clickhouse-best-practices', 'ClickHouse Best Practices Skill', {
    listing: 'https://officialskills.sh/clickhouse/skills/clickhouse-best-practices',
    summary: { en: 'Applies best practices for working with ClickHouse.', zh: '应用 ClickHouse 使用最佳实践。' },
  }),
  skill('data-backend', 'neon-postgres', 'neondatabase', 'neon-postgres', 'Neon Postgres Skill', {
    listing: 'https://officialskills.sh/neondatabase/skills/neon-postgres',
    summary: { en: 'Guides usage of Neon Serverless Postgres.', zh: '指导 Neon Serverless Postgres 的使用。' },
  }),
  skill('ai-ml-models', 'gemini-api-dev', 'google-gemini', 'gemini-api-dev', 'Gemini API Dev Skill', {
    listing: 'https://officialskills.sh/google-gemini/skills/gemini-api-dev',
    summary: { en: 'Provides best practices for developing Gemini-powered apps with the Gemini API.', zh: '提供使用 Gemini API 开发 Gemini 应用的最佳实践。' },
  }),
  skill('ai-ml-models', 'vertex-ai-api-dev', 'google-gemini', 'vertex-ai-api-dev', 'Vertex AI API Dev Skill', {
    listing: 'https://officialskills.sh/google-gemini/skills/vertex-ai-api-dev',
    summary: { en: 'Guides Gemini-powered app development on Google Cloud Vertex AI.', zh: '指导在 Google Cloud Vertex AI 上开发 Gemini 应用。' },
  }),
  skill('ai-ml-models', 'hf-cli', 'huggingface', 'hf-cli', 'Hugging Face CLI Skill', {
    listing: 'https://officialskills.sh/huggingface/skills/hf-cli',
    summary: { en: 'Uses the Hugging Face CLI for Hub operations.', zh: '使用 Hugging Face CLI 完成 Hub 操作。' },
  }),
  skill('ai-ml-models', 'hugging-face-model-trainer', 'huggingface', 'hugging-face-model-trainer', 'Hugging Face Model Trainer Skill', {
    listing: 'https://officialskills.sh/huggingface/skills/hugging-face-model-trainer',
    summary: { en: 'Trains models with TRL workflows such as SFT, DPO, GRPO, and GGUF conversion.', zh: '使用 TRL 流程训练模型，包括 SFT、DPO、GRPO 和 GGUF 转换。' },
  }),
  skill('ai-ml-models', 'replicate', 'replicate', 'replicate', 'Replicate Skill', {
    listing: 'https://officialskills.sh/replicate/skills/replicate',
    summary: { en: 'Discovers, compares, and runs AI models through Replicate.', zh: '通过 Replicate 发现、比较和运行 AI 模型。' },
  }),
  skill('workflow-skill-creation', 'skill-creator', 'anthropics', 'skill-creator', 'Skill Creator Skill', {
    listing: 'https://officialskills.sh/anthropics/skills/skill-creator',
    summary: { en: 'Guides the creation of skills that extend an agent with specialized workflows.', zh: '指导创建用于扩展 agent 专门工作流的 skills。' },
  }),
  skill('workflow-skill-creation', 'template', 'anthropics', 'template', 'Template Skill', {
    listing: 'https://officialskills.sh/anthropics/skills/template',
    summary: { en: 'Provides a basic template for creating new skills.', zh: '提供创建新 skill 的基础模板。' },
  }),
  skill('workflow-skill-creation', 'gh-address-comments', 'openai', 'gh-address-comments', 'GitHub Address Comments Skill', {
    listing: 'https://officialskills.sh/openai/skills/gh-address-comments',
    summary: { en: 'Addresses review and issue comments on open GitHub pull requests via CLI.', zh: '通过 CLI 处理 GitHub PR 上的 review 和 issue comments。' },
  }),
  skill('workflow-skill-creation', 'gh-fix-ci', 'openai', 'gh-fix-ci', 'GitHub Fix CI Skill', {
    listing: 'https://officialskills.sh/openai/skills/gh-fix-ci',
    summary: { en: 'Debugs and fixes failing GitHub Actions checks through log inspection.', zh: '通过检查日志调试并修复失败的 GitHub Actions 检查。' },
  }),
  skill('workflow-skill-creation', 'jupyter-notebook', 'openai', 'jupyter-notebook', 'Jupyter Notebook Skill', {
    listing: 'https://officialskills.sh/openai/skills/jupyter-notebook',
    summary: { en: 'Creates clean, reproducible Jupyter notebooks for experiments and tutorials.', zh: '为实验和教程创建清晰、可复现的 Jupyter notebooks。' },
  }),
];

export function skillsForCategory(categoryKey) {
  return awesomeSkills.filter((skill) => skill.categoryKey === categoryKey);
}

function skill(categoryKey, slug, owner, name, title, options) {
  return {
    categoryKey,
    slug,
    owner,
    name,
    title,
    listingUrl: options.listing,
    sourceUrl: options.source || options.listing,
    installCommand: options.install || '',
    summary: options.summary,
  };
}
