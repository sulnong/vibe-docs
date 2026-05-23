# Swarms 选题大纲报告

## 研究流程

- 先尝试浅克隆 `https://github.com/kyegomez/swarms` 到 `/tmp/vibe-docs-research/swarms/repo`；clone 长时间停在 pack/index 阶段，按项目流程放弃 clone，改用 GitHub API、官方文档站、PyPI、release、issues 和网页搜索继续研究。
- 通过 GitHub API 获取仓库元信息、目录树、README、`pyproject.toml`、`SECURITY.md`、release 列表、最新 commits、contributors、issues 和文档/示例路径。
- 抓取 `https://docs.swarms.world/llms.txt` 与 `https://docs.swarms.world/llms-full.txt`。短索引显示 174 个文档页，完整文档约 58,799 行，覆盖 agents、tools、skills、memory、structured outputs、architectures、API reference、CLI、deployment、examples、FAQ、v12 changelog。
- 使用已安装的 Playwright skill 脚本打开 `https://docs.swarms.world/quickstart` 并生成快照，确认真实浏览器可访问。快照显示顶部导航、左侧导航和多级文档分组：Getting Started、Core Concepts、Agent Development、Reasoning Agents、Multi-Agent Architectures 等。
- 补充 PyPI：`swarms` 当前版本 `12.0.0`，Python 要求 `<4.0,>=3.10`，Apache-2.0，上传时间 `2026-05-05T12:59:54Z`；GitHub releases 页面最新 release API 只显示到 `6.8.1`（2024-12-27），因此版本事实要以 PyPI 与 docs changelog v12 交叉为准。
- 补充公开搜索：Swarms tutorial、Swarms vs LangGraph/AutoGen/CrewAI、SequentialWorkflow examples、production multi-agent orchestration、v12 persistent memory/context compressor。
- 研究目标不是复刻官方 API reference，而是把 170+ 文档页和 1000+ examples 收敛成搜索友好的任务地图、架构选择表、生产化清单和排错路径。

## 事实基线摘要

- 仓库：`kyegomez/swarms`
- 官方文档：`https://docs.swarms.world`
- 官方网站/市场：README 指向 `https://swarms.ai` 和 `https://swarms.world`
- PyPI 包：`swarms`
- 当前 PyPI 版本：`12.0.0`，Python `>=3.10,<4.0`，Apache-2.0。
- GitHub API 观察时间：2026-05-22/23。仓库描述为 “The Enterprise-Grade Production-Ready Multi-Agent Orchestration Framework”。
- GitHub 默认分支：`master`；主语言 Python；README 安装路径包括 pip、uv、poetry、source。
- 目录树观察：约 1,481 个路径；docs 约 198 个路径；examples 约 1,014 个路径；tests 约 65 个路径。Swarms 的差异化公开材料主要在 examples 和 API reference。
- docs v12 changelog 覆盖 2026-04-18 到 2026-05-02，列出 persistent memory、grep tool、Conversation disk memory、context compressor、conversation compact archive、interactive mode、GraphWorkflow callbacks、streaming 修复等。

## URL 组织

- 英文入口：`/en/swarms/`
- 中文入口：`/zh/swarms/`
- 中英文页面 slug 保持一致。
- 页面按“概览 -> 单 agent -> 多 agent 架构 -> 生产化 -> 生态与对比”组织。
- Swarms 官方 API 页面很多，本站不照搬每个 API，而是做决策导向的入口页，并在每页 source 区回链官方 API。

## 来源地图

### 官方来源

- `https://github.com/kyegomez/swarms`：仓库元信息、README、目录树、issues、contributors、commits。
- `https://github.com/kyegomez/swarms#readme`：定位、安装、first agent、first swarm、架构表。
- `https://docs.swarms.world/`：官方文档入口。
- `https://docs.swarms.world/llms.txt`：官方文档索引，用于来源枚举。
- `https://docs.swarms.world/llms-full.txt`：官方完整文档拼接，用于抽取页面事实。
- `https://docs.swarms.world/introduction`：项目定位。
- `https://docs.swarms.world/installation`：pip/uv/poetry/source 安装与验证。
- `https://docs.swarms.world/environment-setup`：API keys、workspace、环境变量。
- `https://docs.swarms.world/quickstart`：first Agent、first SequentialWorkflow。
- `https://docs.swarms.world/concepts/agents`、`/concepts/swarms`、`/concepts/workflows`、`/concepts/tools`：核心概念。
- `https://docs.swarms.world/agents/creating-agents`、`/agents/agent-configuration`、`/agents/agent-tools`、`/agents/agent-memory`、`/agents/agent-skills`、`/agents/structured-outputs`：单 agent 开发。
- `https://docs.swarms.world/architectures/overview`：架构总览。
- `https://docs.swarms.world/api/sequential-workflow`、`/api/concurrent-workflow`、`/api/graph-workflow`、`/api/agent-rearrange`、`/api/swarm-router`、`/api/hierarchical-swarm`、`/api/mixture-of-agents`、`/api/group-chat`、`/api/heavy-swarm`：核心多 agent API。
- `https://docs.swarms.world/cli/commands`、`/cli/tutorial`、`/cli/configuration`：CLI。
- `https://docs.swarms.world/deployment/production-best-practices`、`/deployment/monitoring`、`/deployment/scaling`、`/deployment/agent-orchestration-protocol`：生产化与部署。
- `https://docs.swarms.world/examples/overviews/examples-index`：官方 examples 总入口。
- `https://docs.swarms.world/changelog/swarms-v12`：v12 changelog。
- `https://docs.swarms.world/community/faq`：FAQ。
- `https://pypi.org/project/swarms/`：包版本、Python 要求、项目 URL。

### Issues / 社区问题

- issue 搜索显示安装/运行/工作流相关问题较多，示例：`#1143 uvloop fails to build on Python 3.14t`、`#1613 ConcurrentWorkflow aborts whole run when any single agent fails`、`#1617 404 docs page`、`#1560 graph_workflow sub-workflow composition`、`#1621 stream thinking tokens through streaming_callback and arun_stream`。
- 对公开页面的用途：排错页可以写“高频症状候选”，但所有 API 行为必须回到 docs、源码或 release 复核。

### SERP / 竞品观察

- SERP 预期混合：官方文档、GitHub README、PyPI、入门教程、examples、Swarms vs LangGraph/AutoGen/CrewAI、production multi-agent orchestration、agent marketplace。
- 竞品/替代来源：
  - `https://langchain-ai.github.io/langgraph/`：LangGraph，图/状态机式 agent workflow，强在可控流程与生态。
  - `https://microsoft.github.io/autogen/`：Microsoft AutoGen，多 agent 对话和 agent app framework。
  - `https://docs.crewai.com/`：CrewAI，role/task/crew oriented multi-agent automation。
  - `https://docs.llamaindex.ai/`：LlamaIndex workflows/agents，强在 RAG 与数据应用。
  - LangChain agents、Haystack、DSPy 可作为外围对比，但首版不必展开。
- 差异化机会：Swarms 官方材料 API 与 examples 很多，读者真正缺的是“该选哪种架构、怎么从单 agent 走到生产 multi-agent、哪些参数会导致成本/状态/并发问题”。

## 页面与 URL 设计

### 1. 概览 / Overview

- 英文 URL：`/en/swarms/`
- 中文 URL：`/zh/swarms/`
- 搜索意图：Swarms 是什么、是否适合构建 multi-agent 系统。
- 要回答的问题：Swarms 是 agent framework、workflow engine、API library、CLI 还是 marketplace？
- 页面结构：一句话定位；核心对象；能力地图；与单 agent library 的差异；适合场景；学习路径；来源。
- 来源需求：README、introduction、quickstart、PyPI、docs index。
- 差异化内容：用“单 agent 能力 + orchestration structures + production surface + examples library”组织。

### 2. 为什么与何时选择 / Why and When

- 英文 URL：`/en/swarms/why-and-when/`
- 中文 URL：`/zh/swarms/why-and-when/`
- 搜索意图：Swarms adoption、multi-agent framework 选型。
- 要回答的问题：什么时候 Swarms 的多架构库比 LangGraph/CrewAI/AutoGen 更合适？
- 页面结构：适合场景；不适合场景；学习成本；状态/并发/成本风险；决策 checklist。
- 来源需求：README、concept why/how_to_choose_swarms、architectures overview、deployment best practices。
- 差异化内容：明确写出“不需要多 agent 就先别上 Swarms”的场景。

### 3. 安装与环境配置 / Installation and Environment

- 英文 URL：`/en/swarms/installation/`
- 中文 URL：`/zh/swarms/installation/`
- 搜索意图：pip install swarms、uv install、Python version、API keys。
- 要回答的问题：如何安装、验证、配置 API key、避免版本混乱？
- 页面结构：Python 要求；pip/uv/poetry/source；验证安装；specific version；development install；environment variables；Docker/Kubernetes 入口；PyPI vs docs version。
- 来源需求：installation、install/install.md、environment-setup、PyPI、README。
- 差异化内容：写出“文档 release 与 PyPI release 可能不同步”的版本核验策略。

### 4. 快速开始：第一个 Agent 与 Swarm / Quickstart

- 英文 URL：`/en/swarms/quickstart/`
- 中文 URL：`/zh/swarms/quickstart/`
- 搜索意图：Swarms quickstart、first agent、first swarm。
- 要回答的问题：怎样用最少代码创建 Agent，再把两个 Agent 串成 workflow？
- 页面结构：first Agent；`max_loops`；interactive；first SequentialWorkflow；验证输出；最小失败点；下一步。
- 来源需求：quickstart、creating-agents、README。
- 差异化内容：把“单 agent 成功”和“multi-agent 成功”分成两个验证目标。

### 5. 核心概念 / Core Concepts

- 英文 URL：`/en/swarms/core-concepts/`
- 中文 URL：`/zh/swarms/core-concepts/`
- 搜索意图：Agent、Swarm、Workflow、Tools、Memory 区别。
- 要回答的问题：Swarms 的核心对象如何组合？
- 页面结构：Agent；Swarm；Workflow；Tool；Memory；Output；Architecture；概念关系图；常见误解。
- 来源需求：concepts agents/swarms/workflows/tools/custom-architectures。
- 差异化内容：用“任务依赖形状”解释为什么会有这么多 architecture。

### 6. Agent 配置地图 / Agent Configuration Map

- 英文 URL：`/en/swarms/agent-configuration/`
- 中文 URL：`/zh/swarms/agent-configuration/`
- 搜索意图：Swarms Agent parameters、model_name、max_loops、temperature、streaming。
- 要回答的问题：哪些参数影响模型、成本、状态、输出和可靠性？
- 页面结构：model config；identity；execution control；output；streaming；memory/history；state management；reliability；performance；production presets。
- 来源需求：agent-configuration、api/agent、creating-agents。
- 差异化内容：按“会影响线上行为”的维度解释参数，而不是照搬参数表。

### 7. Agent 工具与函数调用 / Agent Tools

- 英文 URL：`/en/swarms/agent-tools/`
- 中文 URL：`/zh/swarms/agent-tools/`
- 搜索意图：Swarms tools、function calling、MCP tools。
- 要回答的问题：如何给 Agent 添加 Python 函数、外部 API、MCP 工具？
- 页面结构：type hints/docstrings；multiple tools；tool_choice；stateful tools；async tools；BaseTool；MCP config；error handling；structured returns。
- 来源需求：agent-tools、concepts/tools、api/tools、examples/agent-with-tools、MCP pages。
- 差异化内容：提供工具设计反例：无类型、无 docstring、返回自由文本、吞异常。

### 8. 记忆、上下文压缩与状态 / Memory and State

- 英文 URL：`/en/swarms/memory-and-state/`
- 中文 URL：`/zh/swarms/memory-and-state/`
- 搜索意图：Swarms persistent_memory、MEMORY.md、context compressor。
- 要回答的问题：Swarms 如何跨进程保留 agent 历史，如何避免上下文爆掉？
- 页面结构：`persistent_memory`；workspace layout；MEMORY.md；archive；Conversation.compact；ContextCompressor；RAG vs agent memory；disable memory；inspection。
- 来源需求：agent-memory、v12 changelog、conversation API、examples persistent-memory/context-compression。
- 差异化内容：强调 `agent_name` 是持久记忆 key，命名错误会造成状态串线。

### 9. Structured Outputs / Structured Outputs

- 英文 URL：`/en/swarms/structured-outputs/`
- 中文 URL：`/zh/swarms/structured-outputs/`
- 搜索意图：Swarms JSON output、Pydantic output、typed agent response。
- 要回答的问题：如何让 Agent 输出可被程序消费的数据？
- 页面结构：output types；JSON schema；Pydantic；validation；workflow output_type；错误处理；与 tools 返回值配合。
- 来源需求：structured-outputs、agent-configuration、api/agent。
- 差异化内容：把 structured output 放进生产 pipeline，而不是只给格式示例。

### 10. 多 Agent 架构总览 / Multi-Agent Architectures

- 英文 URL：`/en/swarms/architectures/`
- 中文 URL：`/zh/swarms/architectures/`
- 搜索意图：Swarms architectures、Sequential vs Concurrent vs Graph。
- 要回答的问题：Swarms 有哪些架构，每种适合什么任务形状？
- 页面结构：quick comparison；linear/dynamic/hierarchical/conversational/graph categories；复杂度；选择流程；常见误用。
- 来源需求：architectures overview、concept swarm_architectures、api structs overview。
- 差异化内容：用“任务依赖图”而不是“功能列表”帮读者选架构。

### 11. SequentialWorkflow / SequentialWorkflow

- 英文 URL：`/en/swarms/sequential-workflow/`
- 中文 URL：`/zh/swarms/sequential-workflow/`
- 搜索意图：Swarms SequentialWorkflow example。
- 要回答的问题：什么时候线性 pipeline 最合适，如何处理 drift 和输出？
- 页面结构：概念；关键参数；run/run_batched/run_async/run_stream；team awareness；autosave；drift_detection；blog/research pipeline 示例；坑点。
- 来源需求：api/sequential-workflow、architectures/sequential-workflow、quickstart、examples/sequential-workflow。
- 差异化内容：写清“上一个 agent 的输出就是下一个 agent 的输入”的数据契约。

### 12. ConcurrentWorkflow / ConcurrentWorkflow

- 英文 URL：`/en/swarms/concurrent-workflow/`
- 中文 URL：`/zh/swarms/concurrent-workflow/`
- 搜索意图：Swarms ConcurrentWorkflow、parallel agents。
- 要回答的问题：如何并行运行多个 agent，如何处理单个失败？
- 页面结构：概念；ThreadPoolExecutor；dashboard；streaming callback；output formatting；batch；error handling；issue #1613 风险；适用场景。
- 来源需求：api/concurrent-workflow、architectures/concurrent-workflow、scaling、issue #1613。
- 差异化内容：明确并发适合独立任务，不适合有强依赖链的任务。

### 13. AgentRearrange 与 flow 语法 / AgentRearrange

- 英文 URL：`/en/swarms/agent-rearrange/`
- 中文 URL：`/zh/swarms/agent-rearrange/`
- 搜索意图：Swarms AgentRearrange flow syntax。
- 要回答的问题：如何用 `->` 和 `,` 表达顺序与并行？
- 页面结构：flow syntax；sequential/concurrent mix；human-in-the-loop；validate_flow；set_custom_flow；batch/concurrent run；反例。
- 来源需求：api/agent-rearrange、architectures/agent-rearrange、examples/agent_rearrange。
- 差异化内容：把 flow 当“轻量依赖 DSL”，给出可读性边界：复杂后转 GraphWorkflow。

### 14. GraphWorkflow / GraphWorkflow

- 英文 URL：`/en/swarms/graph-workflow/`
- 中文 URL：`/zh/swarms/graph-workflow/`
- 搜索意图：Swarms GraphWorkflow DAG、parallel execution、callbacks。
- 要回答的问题：什么时候必须用 DAG，而不是 Sequential/AgentRearrange？
- 页面结构：nodes/edges；topological execution；auto parallelization；cycle detection；compilation；visualization；serialization；callbacks；graph backend。
- 来源需求：api/graph-workflow、architectures/graph-workflow、examples graphworkflow、v12 changelog、issue #1560。
- 差异化内容：给“fan-out/fan-in”和“复杂依赖”任务模板。

### 15. SwarmRouter / SwarmRouter

- 英文 URL：`/en/swarms/swarm-router/`
- 中文 URL：`/zh/swarms/swarm-router/`
- 搜索意图：Swarms SwarmRouter、universal orchestrator、swarm_type。
- 要回答的问题：如何用统一接口切换 architecture？
- 页面结构：SwarmType；constructor；required params；auto mode；autosave；collab prompt；reliability_check；run/batch/concurrent；配置错误。
- 来源需求：api/swarm-router、architectures/swarm-router、examples/swarm-router。
- 差异化内容：写成“实验架构选择器”，适合早期探索，不要把所有复杂度藏在 auto。

### 16. Hierarchical / Group / MoA / Heavy Swarm / Advanced Architectures

- 英文 URL：`/en/swarms/advanced-architectures/`
- 中文 URL：`/zh/swarms/advanced-architectures/`
- 搜索意图：HierarchicalSwarm、GroupChat、MixtureOfAgents、HeavySwarm、LLMCouncil。
- 要回答的问题：高级架构各自解决什么协作问题？
- 页面结构：director-worker；group chat；MoA；HeavySwarm 5-phase；council/judge；majority voting；选择表；成本/延迟权衡。
- 来源需求：api/hierarchical-swarm、group-chat、mixture-of-agents、heavy-swarm、llm-council、majority-voting、architectures overview。
- 差异化内容：把“更复杂并不等于更可靠”写清楚。

### 17. Reasoning Agents / Reasoning Agents

- 英文 URL：`/en/swarms/reasoning-agents/`
- 中文 URL：`/zh/swarms/reasoning-agents/`
- 搜索意图：SelfConsistencyAgent、ReflexionAgent、GKPAgent、AgentJudge、ReasoningAgentRouter。
- 要回答的问题：这些 paper-inspired agents 什么时候比普通 Agent 更合适？
- 页面结构：Self-Consistency；Reflexion；GKP；IRE；Reasoning Duo；Agent Judge；router；适用任务；成本。
- 来源需求：reasoning agents overview、各 agent page、agent judge、references。
- 差异化内容：把它们定位为“提高推理/评价/一致性”的策略，不是默认替代。

### 18. CLI 与 YAML 工作流 / CLI and YAML

- 英文 URL：`/en/swarms/cli-and-yaml/`
- 中文 URL：`/zh/swarms/cli-and-yaml/`
- 搜索意图：Swarms CLI、run-agents yaml、heavy-swarm CLI。
- 要回答的问题：什么时候不用 Python 代码，改用 CLI/YAML？
- 页面结构：setup/config commands；agent/chat/run-agents；autoswarm/heavy-swarm/llm-council；load markdown；YAML config；shell examples；团队复用。
- 来源需求：CLI commands、CLI tutorial、CLI configuration、examples/cli。
- 差异化内容：把 CLI 作为“实验和运营入口”，不是库 API 的替代。

### 19. Model Providers 与本地模型 / Model Providers

- 英文 URL：`/en/swarms/model-providers/`
- 中文 URL：`/zh/swarms/model-providers/`
- 搜索意图：Swarms OpenAI Anthropic Groq Ollama OpenRouter LiteLLM。
- 要回答的问题：如何跨 provider 配模型，如何动态选择或 fallback？
- 页面结构：supported providers；LiteLLM；environment variables；model naming；custom base URL；Ollama/local；OpenRouter；multi-provider workflow；fallback。
- 来源需求：model-providers、agent-configuration、examples provider pages、utils/fallback_models。
- 差异化内容：按“模型兼容性、上下文、工具调用、成本”做 provider checklist。

### 20. MCP、AOP 与外部系统 / MCP and AOP

- 英文 URL：`/en/swarms/mcp-and-aop/`
- 中文 URL：`/zh/swarms/mcp-and-aop/`
- 搜索意图：Swarms MCP、Agent Orchestration Platform、deploy agents as tools。
- 要回答的问题：如何把 agents 接入 MCP 或以队列/服务方式编排？
- 页面结构：MCP tools；MCPConnection；multi MCP agent；AOP server/client；queue states；persistence/network monitoring；agent as tool；适用边界。
- 来源需求：api/aop、agent_mcp、mcp-datastax example、MCP integration、AOP examples。
- 差异化内容：说明 MCP 偏工具互通，AOP 偏 agent 服务化与队列。

### 21. 生产化最佳实践 / Production Best Practices

- 英文 URL：`/en/swarms/production/`
- 中文 URL：`/zh/swarms/production/`
- 搜索意图：Swarms production、retries、logging、fallback、health check。
- 要回答的问题：如何把 demo agent 变成可靠服务？
- 页面结构：error hierarchy；graceful recovery；retry/backoff；fallback models；structured logging；health checks；configuration management；secrets；state persistence；cost guardrails。
- 来源需求：production-best-practices、monitoring、scaling、agent config、SECURITY.md。
- 差异化内容：给“上线前必须填”的清单：timeout、retry、output schema、memory policy、observability、failure mode。

### 22. 扩展与部署 / Scaling and Deployment

- 英文 URL：`/en/swarms/scaling-and-deployment/`
- 中文 URL：`/zh/swarms/scaling-and-deployment/`
- 搜索意图：Swarms scaling、concurrent、async、batch、Docker、FastAPI、Cloud Run。
- 要回答的问题：如何横向扩展 multi-agent 执行并对外提供服务？
- 页面结构：concurrent/async/batch/grid；UVLoop；queue-based scaling；AOP；FastAPI agent API；Docker；Cloud Run/Workers；Kubernetes；performance optimization。
- 来源需求：scaling、deployment overview、fastapi-agent-api、cloud-run、cloudflare-workers、install Docker/Kubernetes。
- 差异化内容：按 workload 类型（I/O-bound、batch、DAG、API service）选扩展策略。

### 23. Examples Cookbook / Examples Cookbook

- 英文 URL：`/en/swarms/examples-cookbook/`
- 中文 URL：`/zh/swarms/examples-cookbook/`
- 搜索意图：Swarms examples、use cases、finance/healthcare/research/marketing。
- 要回答的问题：官方 1000+ examples 应该从哪里看起？
- 页面结构：single agent；multi-agent；architectures；tools/integrations；industry apps；voice/vision；research/paper implementations；deployment examples；学习路线。
- 来源需求：examples index、examples tree、applications overview、cookbook、templates、paper implementations。
- 差异化内容：把 examples 重新按任务而不是文件路径分类。

### 24. 排错路径 / Troubleshooting

- 英文 URL：`/en/swarms/troubleshooting/`
- 中文 URL：`/zh/swarms/troubleshooting/`
- 搜索意图：Swarms install error、import error、workflow fails、docs 404、memory unexpected。
- 要回答的问题：常见失败应该怎样定位？
- 页面结构：安装/Python 版本；API key；model output empty；tool schema；ConcurrentWorkflow failure propagation；Graph cycle；memory state pollution；docs 404；issue filing。
- 来源需求：FAQ、issues、installation、production best practices、v12 bug fixes。
- 差异化内容：按“环境、模型、工具、workflow、状态、文档”六类排查。

### 25. 替代方案与对比 / Alternatives

- 英文 URL：`/en/swarms/alternatives/`
- 中文 URL：`/zh/swarms/alternatives/`
- 搜索意图：Swarms vs LangGraph、Swarms vs AutoGen、Swarms vs CrewAI。
- 要回答的问题：Swarms 在多 agent 框架里该怎么定位？
- 页面结构：对比对象；state graph vs architecture library；conversation framework；role/task crew；RAG-first workflows；成熟度；生态；选择建议。
- 来源需求：Swarms docs；LangGraph docs；AutoGen docs；CrewAI docs；LlamaIndex docs。
- 差异化内容：比较“控制性、架构数量、生产化 API、examples、状态模型、学习成本”，避免泛泛功能表。

### 26. 版本变化与迁移 / Versions and Changelog

- 英文 URL：`/en/swarms/version-notes/`
- 中文 URL：`/zh/swarms/version-notes/`
- 搜索意图：Swarms v12、persistent_memory、context compressor、release notes。
- 要回答的问题：v12 引入了哪些会改变行为的能力，版本事实从哪里核验？
- 页面结构：PyPI vs GitHub release 差异；v12 features；bug fixes；behavior changes；migration checklist；watch points。
- 来源需求：PyPI、changelog v12、GitHub releases、commits。
- 差异化内容：指出 release 来源不同步风险，正式使用前以 PyPI + docs changelog + installed package 为准。

### 27. 资源与更新追踪 / Resources

- 英文 URL：`/en/swarms/resources/`
- 中文 URL：`/zh/swarms/resources/`
- 搜索意图：Swarms docs、GitHub、PyPI、Discord、examples。
- 要回答的问题：在哪里验证事实、继续学习、追踪问题？
- 页面结构：official docs；GitHub；PyPI；examples；CLI；deployment；community；issues；changelog；source verification checklist。
- 来源需求：所有官方来源、community pages、FAQ、support。
- 差异化内容：按“安装事实、API 行为、架构选择、生产化、社区问题”分类来源。

## 人工审核问题

- 页面数量拟定为 27 页/语言，比 Astro 现有页面数接近 2 倍。Swarms 官方 examples 极多，是否后续需要把行业应用（finance/healthcare/research/marketing）拆成独立长页？
- Swarms 的 PyPI 版本、GitHub releases、docs changelog 不完全同步；公开页是否需要统一标注“版本核验基线：PyPI 12.0.0 + docs v12 changelog”？
- 对 LangGraph/AutoGen/CrewAI 的对比是否足够重要，是否需要做成独立专题而非单页？
- 官方 docs 使用大量 API reference，本站是否应偏“路线图与任务地图”，把 API 细节交给官方页？
- 是否接受在 Why/Production 页明确提醒：multi-agent 不是默认最佳解，简单任务先用单 agent 或普通 workflow？
