# Hermes Agent 选题大纲报告

## 研究流程

- 先尝试浅克隆 `https://github.com/NousResearch/hermes-agent` 到 `/tmp/vibe-docs-research/hermes-agent/repo`；clone 长时间停在 pack/index 阶段，按项目流程放弃 clone，改用 GitHub API、官方文档站、PyPI、release、issues 和网页搜索继续研究。
- 通过 GitHub API 获取仓库元信息、目录树、README、中文 README、`pyproject.toml`、`SECURITY.md`、release 列表、最新 commits、contributors 和 issue 搜索结果。
- 抓取官方 `https://hermes-agent.nousresearch.com/docs/llms.txt` 和 `https://hermes-agent.nousresearch.com/docs/llms-full.txt`。短索引显示 162 个文档页；完整文档约 57,281 行，覆盖安装、CLI/TUI、配置、会话、工具、技能、记忆、MCP、cron、delegation、kanban、gateway、providers、API server、开发者架构和 FAQ。
- 安装 `playwright` 与 `playwright-interactive` 两个 Codex skill 到 `~/.codex/skills`，用于后续真实浏览器研究。当前会话未自动刷新技能列表，但已确认可通过脚本方式运行 Playwright；Swarms 站点快照验证可用，Hermes 主要依赖官方 `llms-full.txt`。
- 补充公开搜索：Hermes Agent 教程、自进化技能/记忆、Telegram/Discord gateway、OpenClaw 迁移、Claude Code/Codex/OpenHands/aider 等替代方案。
- 抽取差异化角度：不要只写“AI coding agent”，而要围绕长期运行、跨平台入口、自我学习、技能/记忆边界、终端后端隔离、provider routing、gateway 运维、cron 自动化、多 agent board 和安全姿态展开。

## 事实基线摘要

- 仓库：`NousResearch/hermes-agent`
- 官方站：`https://hermes-agent.nousresearch.com/docs/`
- PyPI 包：`hermes-agent`
- 当前 PyPI 版本：`0.14.0`，要求 Python `>=3.11`，MIT license，上传时间 `2026-05-18T11:36:10Z`。
- GitHub API 观察时间：2026-05-22/23。仓库显示 Python 为主语言，默认分支 `main`，README 定位为 “The agent that grows with you”，官方描述为 “The self-improving AI agent built by Nous Research”。
- 最新 GitHub release：`v2026.5.16` / Hermes Agent `v0.14.0`，发布时间 `2026-05-16`。release 主题是 Foundation Release，包含 PyPI install、xAI Grok OAuth、OpenAI-compatible local proxy、X search、Teams stack、lazy deps/debloating、cold start 优化等。
- 近期 release 线索：`v0.13.0` 强调 Tenacity、Kanban、persistent goals、checkpoints v2、gateway auto-resume、安全修复和更多平台；`v0.12.0` 强调 Curator、skill library 维护、更多 provider 和插件；`v0.11.0` 强调 Ink TUI、provider transport、Bedrock 和插件表面。
- 目录树观察：约 4,303 个路径；docs/website 文档相关约 392 个路径；tests 约 1,224 个路径；skills 与 optional-skills 合计约 1,232 个路径。

## URL 组织

- 英文入口：`/en/hermes-agent/`
- 中文入口：`/zh/hermes-agent/`
- 中英文页面 slug 保持一致。
- 页面按“入门 -> 日常使用 -> 能力系统 -> 运维安全 -> 架构扩展 -> 对比资源”组织，避免读者必须按官方巨大导航逐页寻找答案。

## 来源地图

### 官方来源

- `https://github.com/NousResearch/hermes-agent`：仓库元信息、README、目录结构、issues、commits、contributors。
- `https://github.com/NousResearch/hermes-agent#readme`：定位、安装命令、核心能力表、CLI/gateway 快速参考、OpenClaw 迁移。
- `https://github.com/NousResearch/hermes-agent/blob/main/README.zh-CN.md`：官方中文表达和中文安装/使用措辞，但注意中文 README 对 Windows 支持的描述可能落后于英文 README 与 docs。
- `https://hermes-agent.nousresearch.com/docs/`：官方文档入口。
- `https://hermes-agent.nousresearch.com/docs/llms.txt`：官方文档短索引，用于来源枚举。
- `https://hermes-agent.nousresearch.com/docs/llms-full.txt`：官方完整文档拼接，用于抽取事实与页面结构。
- `https://hermes-agent.nousresearch.com/docs/getting-started/installation`：安装、平台差异、Windows early beta、Termux、Nix、non-sudo/service user。
- `https://hermes-agent.nousresearch.com/docs/getting-started/quickstart`：首次安装、provider 选择、first chat、session 验证、常见失败模式。
- `https://hermes-agent.nousresearch.com/docs/user-guide/cli`：CLI 命令、keybindings、slash commands、session、preload skills。
- `https://hermes-agent.nousresearch.com/docs/user-guide/tui`：Ink TUI、交互界面、鼠标友好体验。
- `https://hermes-agent.nousresearch.com/docs/user-guide/configuration` 与 `https://hermes-agent.nousresearch.com/docs/integrations/providers`：provider、model、配置文件、API keys、routing。
- `https://hermes-agent.nousresearch.com/docs/user-guide/security` 与 `https://github.com/NousResearch/hermes-agent/blob/main/SECURITY.md`：安全模型、审批、gateway 授权、隔离边界。
- `https://hermes-agent.nousresearch.com/docs/user-guide/features/tools`：tools/toolsets、terminal backends、browser/search/media/agent orchestration。
- `https://hermes-agent.nousresearch.com/docs/user-guide/features/skills`：skills、progressive disclosure、SKILL.md、secure setup、directory。
- `https://hermes-agent.nousresearch.com/docs/user-guide/features/memory`：MEMORY.md、USER.md、session_search、capacity、security scanning。
- `https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp`：MCP stdio/HTTP、tool discovery、filtering、utility tools。
- `https://hermes-agent.nousresearch.com/docs/user-guide/features/cron`：scheduled tasks、skill-backed cron、no-agent mode、delivery。
- `https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation`：subagent delegation、parallel batch、context、toolset selection。
- `https://hermes-agent.nousresearch.com/docs/user-guide/features/kanban`：durable multi-agent board、workers、dispatcher、dashboard。
- `https://hermes-agent.nousresearch.com/docs/user-guide/messaging/index`：gateway 平台矩阵、session、security、interrupt、background sessions。
- `https://hermes-agent.nousresearch.com/docs/user-guide/features/api-server`：OpenAI-compatible API server、Responses/Chat Completions、health endpoints。
- `https://hermes-agent.nousresearch.com/docs/developer-guide/architecture`、`agent-loop`、`provider-runtime`、`tools-runtime`、`gateway-internals`：内部架构。
- `https://hermes-agent.nousresearch.com/docs/reference/faq`：FAQ 与排错。
- `https://github.com/NousResearch/hermes-agent/releases`：release notes 与版本差异。
- `https://pypi.org/project/hermes-agent/`：包名、版本、Python 要求、发布元信息。

### Issues / 社区问题

- GitHub issue 搜索显示安装/设置相关问题很多，示例：`#29125 Hermes does not work through Claude CLI`、`#30482 hermes skills install official/<skill> fails`、`#30518 Telegram failed to receive .html file`、`#30479 Telegram group forum/session split model override`、`#30405 delegate_task truncation`。
- issue 观察不能直接当事实结论，应用于排错页面的“高频症状候选”，再回到官方 docs/release/security 交叉验证。

### SERP / 竞品观察

- SERP 预期混合：官方 docs、GitHub README、release、安装教程、OpenClaw 迁移、Telegram/Discord bot、Claude Code/Codex/OpenHands/aider 对比、长期运行 agent 与个人助理场景。
- 竞品/替代来源：
  - `https://docs.anthropic.com/en/docs/claude-code/overview`：Claude Code，主要是本地 coding agent/CLI 工作流。
  - `https://developers.openai.com/codex/` 与 OpenAI Codex CLI 文档：编码 agent 与本地/云端开发工作流。
  - `https://docs.all-hands.dev/` 与 `https://github.com/All-Hands-AI/OpenHands`：OpenHands，开发任务代理平台。
  - `https://aider.chat/docs/`：aider，终端 pair programming 与 git-centric workflow。
  - OpenClaw 相关搜索：迁移意图强，Hermes 官方有 `hermes claw migrate`。
- 差异化机会：把 Hermes 放在“个人长期 agent 操作系统”而不是“又一个 coding CLI”里比较；强调 gateway、memory、skills、cron、kanban、security posture、provider freedom 的组合取舍。

## 页面与 URL 设计

### 1. 概览 / Overview

- 英文 URL：`/en/hermes-agent/`
- 中文 URL：`/zh/hermes-agent/`
- 搜索意图：Hermes Agent 是什么、是否值得试、和普通 coding agent 有何区别。
- 要回答的问题：Hermes 是 CLI、bot、长期 agent、自动化平台还是多 agent 系统？
- 页面结构：一句话定位；核心能力地图；适合/不适合场景；与普通 coding CLI 的差异；最短阅读路径；来源。
- 来源需求：README、docs index、quickstart、release v0.14.0、PyPI。
- 差异化内容：用“入口层、执行层、学习层、自动化层、隔离层”描述，而不是复述 feature list。

### 2. 为什么与何时选择 / Why and When

- 英文 URL：`/en/hermes-agent/why-and-when/`
- 中文 URL：`/zh/hermes-agent/why-and-when/`
- 搜索意图：选型、是否替代 Claude Code/Codex/aider/OpenHands。
- 要回答的问题：什么时候 Hermes 的复杂度值得，什么时候过度？
- 页面结构：强适配任务；弱适配任务；团队/个人/云端场景；长期记忆与自动化价值；拒绝清单；采用前 checklist。
- 来源需求：README、learning path、gateway、cron、skills、memory、security。
- 差异化内容：明确“不该选”的场景：只要一次性补全、完全不想配置 provider、不能接受 agent 长期权限管理、只需要轻量 git pair programming。

### 3. 安装与版本基线 / Installation and Version Baseline

- 英文 URL：`/en/hermes-agent/installation/`
- 中文 URL：`/zh/hermes-agent/installation/`
- 搜索意图：install Hermes Agent、pip install hermes-agent、Windows/Termux/Nix 安装。
- 要回答的问题：应选 curl installer、pip、Nix、Windows native、WSL2 还是 Termux？
- 页面结构：安装路径矩阵；Python/Node/uv/ripgrep/ffmpeg 依赖；Windows early beta；Termux 限制；service user；update/uninstall；验证命令。
- 来源需求：installation、updating、termux、nix、PyPI、README。
- 差异化内容：写清“验证成功”的标准：`hermes doctor`、provider configured、first chat、session resume，而不是只有安装命令。

### 4. 快速开始：第一条可靠路径 / First Reliable Run

- 英文 URL：`/en/hermes-agent/first-run/`
- 中文 URL：`/zh/hermes-agent/first-run/`
- 搜索意图：quickstart、setup、first chat。
- 要回答的问题：从零到能聊天、能用工具、能恢复会话需要哪些最小步骤？
- 页面结构：`hermes setup` 路线；`hermes model` 路线；first prompt；session 验证；试工具；常见失败模式；恢复工具包。
- 来源需求：quickstart、CLI、configuration、FAQ。
- 差异化内容：把“先不要开 gateway/cron/kanban”的顺序说清楚，降低初学者调试面。

### 5. Provider 与模型配置 / Providers and Models

- 英文 URL：`/en/hermes-agent/providers-and-models/`
- 中文 URL：`/zh/hermes-agent/providers-and-models/`
- 搜索意图：Hermes model、OpenRouter、Nous Portal、OpenAI、Anthropic、local model。
- 要回答的问题：如何选择 provider、为什么需要 64K context、如何避免 fallback/routing 混乱？
- 页面结构：provider 类型；OAuth/API key/custom endpoint；OpenRouter routing；fallback providers；local LLM；环境变量；诊断。
- 来源需求：quickstart、providers、provider-routing、fallback-providers、model catalog、configuration。
- 差异化内容：用“稳定第一，routing 第二”的决策顺序写，提醒先验证 base provider。

### 6. CLI 与 TUI 日常工作流 / CLI and TUI Workflow

- 英文 URL：`/en/hermes-agent/cli-and-tui/`
- 中文 URL：`/zh/hermes-agent/cli-and-tui/`
- 搜索意图：Hermes CLI commands、slash commands、TUI。
- 要回答的问题：CLI/TUI 如何启动、切模型、重试、撤销、中断、压缩上下文、管理 session？
- 页面结构：启动模式；status bar；keybindings；slash commands；multi-line input；interrupt；background sessions；preload skills。
- 来源需求：CLI、TUI、slash commands reference、sessions。
- 差异化内容：按“真实工作日”组织：打开项目、读 context、执行任务、中断纠偏、压缩/恢复、回顾。

### 7. 工具与工具集 / Tools and Toolsets

- 英文 URL：`/en/hermes-agent/tools-and-toolsets/`
- 中文 URL：`/zh/hermes-agent/tools-and-toolsets/`
- 搜索意图：Hermes tools、terminal backend、browser tool、web search。
- 要回答的问题：Hermes 能调用哪些工具，如何按平台和风险控制？
- 页面结构：tool category；toolsets；terminal/files；web/browser/media；agent orchestration；memory/session search；per-platform tool access；后台进程。
- 来源需求：tools、tools reference、toolsets reference、browser、web-search。
- 差异化内容：按“读写本地文件、联网、浏览器、媒体、agent orchestration”给权限分级。

### 8. Skills 系统 / Skills System

- 英文 URL：`/en/hermes-agent/skills/`
- 中文 URL：`/zh/hermes-agent/skills/`
- 搜索意图：Hermes skills、SKILL.md、agentskills.io、self improving agent。
- 要回答的问题：skills 是提示词、插件、记忆还是工作流？什么时候会自动创建/改进？
- 页面结构：progressive disclosure；SKILL.md；bundled/optional/user skills；secure setup；skill output；curator；自建 skill；常见坑。
- 来源需求：skills、skills catalog、optional skills catalog、curator、creating skills。
- 差异化内容：明确 skill 与 memory/context/plugin/MCP 的边界，避免读者把所有扩展都塞进 skill。

### 9. 记忆与会话搜索 / Memory and Session Search

- 英文 URL：`/en/hermes-agent/memory-and-sessions/`
- 中文 URL：`/zh/hermes-agent/memory-and-sessions/`
- 搜索意图：Hermes memory、persistent memory、session search、USER.md。
- 要回答的问题：Hermes 怎样记住用户、项目和过去对话，什么不该存？
- 页面结构：MEMORY.md；USER.md；session storage；session_search；capacity；duplicate prevention；security scanning；external memory providers；排错。
- 来源需求：memory、sessions、memory-providers、session-storage、Honcho。
- 差异化内容：给出“应该保存/不应该保存”的任务地图和污染回滚策略。

### 10. Context Files 与项目指令 / Context Files

- 英文 URL：`/en/hermes-agent/context-files/`
- 中文 URL：`/zh/hermes-agent/context-files/`
- 搜索意图：AGENTS.md Hermes、SOUL.md、context references。
- 要回答的问题：项目指令、人格、inline references 如何影响每次对话？
- 页面结构：AGENTS.md/CLAUDE.md/.hermes.md/.cursorrules；SOUL.md；context references `@`；注入顺序；安全扫描；团队维护规则。
- 来源需求：context-files、context-references、personality、tips。
- 差异化内容：把“长期偏好”和“项目规则”拆开，减少跨项目污染。

### 11. Gateway 与消息平台 / Messaging Gateway

- 英文 URL：`/en/hermes-agent/messaging-gateway/`
- 中文 URL：`/zh/hermes-agent/messaging-gateway/`
- 搜索意图：Hermes Telegram bot、Discord bot、Slack、WhatsApp、Signal、gateway setup。
- 要回答的问题：如何让 Hermes 从 CLI 变成跨平台长期 assistant？
- 页面结构：platform matrix；gateway architecture；setup sequence；session continuity；files/images/voice；busy-input/interrupt；background sessions；gateway status。
- 来源需求：messaging overview、Telegram、Discord、Slack、WhatsApp、Signal、Email、Teams、gateway internals。
- 差异化内容：写“先 CLI 稳定再 gateway”的部署路径，以及 allowlist/DM pairing 运维习惯。

### 12. 安全模型与权限边界 / Security Model

- 英文 URL：`/en/hermes-agent/security-model/`
- 中文 URL：`/zh/hermes-agent/security-model/`
- 搜索意图：Hermes security、dangerous command approval、sandbox、prompt injection。
- 要回答的问题：Hermes 的哪些机制是安全边界，哪些只是启发式保护？
- 页面结构：official trust model；OS-level isolation；terminal backend vs whole-process wrapping；dangerous command approval；gateway auth；credential filtering；skills/plugins trust；MCP risk；practical hardening checklist。
- 来源需求：security guide、SECURITY.md、Docker/Nix/OpenShell references、tools。
- 差异化内容：突出官方安全政策里的关键判断：against adversarial LLM，只有 OS-level isolation 是真正边界。

### 13. Terminal Backends 与隔离运行 / Terminal Backends

- 英文 URL：`/en/hermes-agent/terminal-backends/`
- 中文 URL：`/zh/hermes-agent/terminal-backends/`
- 搜索意图：Hermes Docker backend、SSH backend、Modal、Daytona、Vercel Sandbox、Singularity。
- 要回答的问题：local、Docker、SSH、cloud sandbox 各解决什么问题？
- 页面结构：backend map；file tools 与 shell contract；Docker resources/security；SSH/remote；serverless persistence；什么时候需要 whole-process container。
- 来源需求：tools、docker、installation、security、Nix。
- 差异化内容：把“命令隔离”和“agent 进程隔离”分开讲，避免误以为 Docker backend 包住一切。

### 14. Cron 与长期自动化 / Cron Automation

- 英文 URL：`/en/hermes-agent/cron-automation/`
- 中文 URL：`/zh/hermes-agent/cron-automation/`
- 搜索意图：Hermes cron、scheduled tasks、daily briefing bot。
- 要回答的问题：如何让 Hermes 定时做任务并把结果投递到平台？
- 页面结构：chat/CLI/natural language 创建；skills-backed jobs；project directory；delivery targets；no-agent mode；edit/pause/resume/trigger；cron troubleshooting。
- 来源需求：cron、automate-with-cron、daily briefing bot、cron-script-only、cron-troubleshooting。
- 差异化内容：区分“LLM 任务”“脚本任务”“带技能的任务”，并写出失败恢复。

### 15. Subagent Delegation 与并行 / Subagent Delegation

- 英文 URL：`/en/hermes-agent/delegation/`
- 中文 URL：`/zh/hermes-agent/delegation/`
- 搜索意图：Hermes delegate_task、parallel agents、subagent。
- 要回答的问题：什么时候用 delegation，什么时候不要并行？
- 页面结构：single task；parallel batch；context inheritance；toolset selection；max iterations；child timeout；monitoring；depth limit；examples。
- 来源需求：delegation feature、delegation patterns、agent loop、tools。
- 差异化内容：给真实模式：parallel research、code review + fix、多文件重构；提醒不要把阻塞关键路径丢给子 agent。

### 16. Kanban 多 Agent Board / Kanban Multi-Agent Board

- 英文 URL：`/en/hermes-agent/kanban/`
- 中文 URL：`/zh/hermes-agent/kanban/`
- 搜索意图：Hermes Kanban、multi-agent board、Ralph loop、durable agents。
- 要回答的问题：Kanban 和 delegate_task 有什么区别，适合哪些长任务？
- 页面结构：board/task/worker/dispatcher；CLI/dashboard/tool surface；gateway dispatcher；worker handoff evidence；orchestrator skill；retries/heartbeat/zombie detection；和 delegation 对比。
- 来源需求：kanban、kanban tutorial、persistent goals、release v0.13.0。
- 差异化内容：把 Kanban 写成“持久项目管理面”，不是一个普通 todo list。

### 17. MCP 与外部工具生态 / MCP Integration

- 英文 URL：`/en/hermes-agent/mcp/`
- 中文 URL：`/zh/hermes-agent/mcp/`
- 搜索意图：Hermes MCP server、MCP config、tool filtering。
- 要回答的问题：如何接 MCP，如何过滤工具，如何控制风险？
- 页面结构：stdio/HTTP；config keys；presets；tool registration；resources/prompts utility tools；per-server include/exclude；OAuth；server-initiated LLM requests。
- 来源需求：MCP guide、MCP config reference、use MCP with Hermes、security。
- 差异化内容：用“只暴露必要工具”的配置策略组织，而不是堆 MCP 示例。

### 18. API Server 与前端接入 / API Server

- 英文 URL：`/en/hermes-agent/api-server/`
- 中文 URL：`/zh/hermes-agent/api-server/`
- 搜索意图：Hermes OpenAI-compatible API、Open WebUI、local proxy。
- 要回答的问题：如何把 Hermes 当 OpenAI-compatible endpoint 使用？
- 页面结构：enable API server；gateway start；Chat Completions vs Responses；SSE/tool progress；runs API；health endpoints；binding/security；frontend examples。
- 来源需求：api-server、Open WebUI messaging、release v0.14.0 local proxy、provider runtime。
- 差异化内容：解释“frontends 调用的是一个会用工具/记忆/终端的 agent”，不是普通模型 proxy。

### 19. Browser/Web/Search/Media 能力 / Web and Media Tools

- 英文 URL：`/en/hermes-agent/web-browser-media/`
- 中文 URL：`/zh/hermes-agent/web-browser-media/`
- 搜索意图：Hermes browser tool、web search、x_search、image generation、TTS、voice mode。
- 要回答的问题：联网、浏览器和多媒体工具各怎么启用，风险与成本在哪里？
- 页面结构：web_search/web_extract；browser_navigate/snapshot/vision；X search；vision/image/video/TTS；voice mode；provider/tool gateway；按需开启。
- 来源需求：tools、browser、web-search、x-search、image-generation、tts、voice-mode、tool-gateway。
- 差异化内容：按“搜索事实、操作网页、处理媒体、生成媒体”划边界。

### 20. OpenClaw 迁移 / OpenClaw Migration

- 英文 URL：`/en/hermes-agent/openclaw-migration/`
- 中文 URL：`/zh/hermes-agent/openclaw-migration/`
- 搜索意图：OpenClaw to Hermes、hermes claw migrate。
- 要回答的问题：迁移哪些数据，哪些要 dry-run，哪些冲突要人工处理？
- 页面结构：自动检测；interactive migration；dry run；presets；overwrite；导入内容；workspace instructions；回滚与审计。
- 来源需求：README、migrate-from-openclaw guide、CLI reference。
- 差异化内容：给“迁移前备份/迁移后验证”清单，避免一次性覆盖用户长期记忆。

### 21. 架构与源码阅读路径 / Architecture Reading Path

- 英文 URL：`/en/hermes-agent/architecture/`
- 中文 URL：`/zh/hermes-agent/architecture/`
- 搜索意图：Hermes Agent architecture、developer guide、agent loop。
- 要回答的问题：想改 Hermes 或排查 bug 应该从哪些模块读起？
- 页面结构：system overview；directory map；CLI/gateway/cron data flow；agent loop；prompt builder；provider runtime；tool runtime；session storage；gateway internals；plugin system。
- 来源需求：architecture、agent-loop、prompt-assembly、provider-runtime、tools-runtime、gateway-internals、session-storage、repo tree。
- 差异化内容：给“按任务读源码”的路径：加 provider、加 tool、修 gateway、查 memory、查 security。

### 22. 排错路径 / Troubleshooting

- 英文 URL：`/en/hermes-agent/troubleshooting/`
- 中文 URL：`/zh/hermes-agent/troubleshooting/`
- 搜索意图：Hermes install error、doctor、gateway not working、provider auth、skills install、Telegram file。
- 要回答的问题：出现问题时先查什么，什么时候回到 docs/issues？
- 页面结构：install command not found；API key/provider wrong；custom endpoint returns bad output；gateway nobody can message；doctor flags config；skills install failure；Windows/Termux；delegate/gateway issues；issue filing template。
- 来源需求：quickstart common failure modes、installation troubleshooting、FAQ、issues、security reporting。
- 差异化内容：按症状排序，每个症状给最小诊断命令和下一步，而不是错误消息大全。

### 23. 替代方案与对比 / Alternatives

- 英文 URL：`/en/hermes-agent/alternatives/`
- 中文 URL：`/zh/hermes-agent/alternatives/`
- 搜索意图：Hermes vs Claude Code、Hermes vs Codex、Hermes vs OpenHands、Hermes vs aider、Hermes vs OpenClaw。
- 要回答的问题：Hermes 在哪些维度不是同类竞争？
- 页面结构：对比对象；CLI coding；cloud/IDE agent；pair programming；agent platform；长期个人 agent；迁移成本；决策表。
- 来源需求：Hermes README/docs；Claude Code docs；OpenAI Codex docs；OpenHands docs；aider docs；OpenClaw migration。
- 差异化内容：比较“长期入口/记忆/自动化/多平台/权限边界”而非只比代码补全能力。

### 24. 资源与更新追踪 / Resources

- 英文 URL：`/en/hermes-agent/resources/`
- 中文 URL：`/zh/hermes-agent/resources/`
- 搜索意图：Hermes docs、release、GitHub、PyPI、skills catalog。
- 要回答的问题：哪些来源用于验证事实，如何追踪版本变化？
- 页面结构：官方文档；GitHub；PyPI；release；skills catalogs；security policy；community；watch checklist。
- 来源需求：所有官方来源、release、PyPI、Discord、issues/discussions。
- 差异化内容：按“安装事实、功能事实、安全事实、版本事实、社区问题”分类链接。

## 人工审核问题

- 页面数量拟定为 24 页/语言，是现有 Astro 页数的约 1.7 倍，但单页会更长、更任务化。是否后续需要扩到 30+ 页，把每个 messaging platform 和 provider 拆成独立页面？
- Hermes 变化很快，公开页是否应该在每页顶部标注“研究基线日期：2026-05-22/23”？
- 是否保留对 Claude Code/Codex/OpenHands/aider 的对比，还是先只做 Hermes 内部任务地图？
- Windows 中文 README 与英文 docs 对支持状态有差异；正式发布时应以英文 docs 和最新 release 为准，是否需要专门写版本差异提示？
- 对安全页面，是否接受更直接地写“默认本机运行不适合处理不可信输入”，以换取更高可信度？
