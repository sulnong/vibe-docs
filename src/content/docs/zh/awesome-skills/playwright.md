---
title: "Playwright Skill"
description: "当 agent 需要通过 CLI 驱动真实浏览器，而不是创建完整 Playwright 测试套件时，可以使用 OpenAI 的 Playwright skill。"
---

# Playwright Skill

Playwright skill 让 agent 可以从终端驱动真实浏览器。它适合做页面导航、表单填写、截图、页面 snapshot、数据提取，以及多步骤 UI 流程调试。

当你希望 agent 在当前任务里直接检查和操作浏览器时，用它。不要把它当成长期维护的端到端测试套件替代品。

## 快速信息

| 字段 | 内容 |
| --- | --- |
| Skill | `openai/playwright` |
| 分类 | [浏览器、测试与质量](/zh/awesome-skills/categories/browser-testing-quality/) |
| 目录页 | https://officialskills.sh/openai/skills/playwright |
| 主要来源 | https://github.com/openai/skills/tree/main/skills/.curated/playwright |
| 主要依赖 | `npx`，由随 skill 提供的 wrapper script 使用 |
| 第一次尝试 | 打开页面，获取 snapshot，用稳定元素 ref 交互，再次 snapshot |

## 安装与设置

officialskills.sh 目录页给出的安装命令是：

```bash
npx skills add https://github.com/openai/skills --skill playwright
```

如果你的 agent 客户端支持直接使用 GitHub skill 路径，也可以使用来源目录：

```text
https://github.com/openai/skills/tree/main/skills/.curated/playwright
```

skill 自身的工作流假设用户级安装路径在 `$CODEX_HOME/skills`，然后设置 wrapper 路径：

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export PWCLI="$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh"
```

在建议浏览器命令之前，skill 会先检查 `npx` 是否存在：

```bash
command -v npx >/dev/null 2>&1
```

这个检查很重要，因为 wrapper 会运行 `npx --package @playwright/cli playwright-cli`。因此，全局安装 `playwright-cli` 不是必需条件。

## 这个 skill 做什么

这个 skill 把 `playwright-cli` 包成一套可重复的 agent 工作流。它要求 agent 通过明确的终端命令操作浏览器，在使用元素 ref 前先获取 snapshot，并把浏览器产物放在合适位置。

最重要的区别是：这是一个浏览器操作 skill。它帮助 agent 在当前任务里点击、输入、检查、提取和捕获证据，而不是默认创建一个 Playwright Test 项目。

## 什么时候使用

- 点击本地或远程 Web 应用，并查看页面状态变化。
- 填写表单、提交流程、捕获提交后的页面状态。
- 在特定交互后截取页面截图。
- 从依赖 JavaScript 渲染的页面里提取文本或结构化数据。
- 复现 UI 问题时记录 trace，查看 console 和 network 输出。
- 使用多标签页或命名 session 隔离浏览器任务。

## 什么时候不要使用

- 你需要提交到仓库、长期维护的回归测试。
- 任务只需要检查静态 HTML 或源码。
- 网站依赖人类账号登录，而 agent 无法访问对应 session。
- 浏览器自动化会违反网站条款、频率限制或访问规则。
- 项目已经有专门的测试框架，而任务是扩展那个框架。

如果目标是长期测试覆盖，应使用项目现有测试设置，或明确创建 Playwright Test 文件。

## 第一次工作流

先用最小循环开始：打开页面，获取 snapshot，使用 snapshot 里的元素 ref 交互，然后再次 snapshot。

```bash
"$PWCLI" open https://example.com
"$PWCLI" snapshot
"$PWCLI" click e3
"$PWCLI" snapshot
```

`e3` 这类元素 ref 来自最新 snapshot。只要页面发生导航、弹出 modal、切换标签页或 DOM 明显变化，就先重新 snapshot，再继续使用 ref。

## 常见工作流

### 填写表单

```bash
"$PWCLI" open https://example.com/form --headed
"$PWCLI" snapshot
"$PWCLI" fill e1 "user@example.com"
"$PWCLI" fill e2 "password123"
"$PWCLI" click e3
"$PWCLI" snapshot
```

当你需要视觉确认时，加 `--headed`。它特别适合排查布局、modal、加载状态和交互时序问题。

### 捕获证据

```bash
"$PWCLI" screenshot
"$PWCLI" pdf
```

调试时通常截图就够了。如果要保留一段交互过程，再使用 trace：

```bash
"$PWCLI" tracing-start
# 复现流程
"$PWCLI" tracing-stop
```

### 提取页面数据

```bash
"$PWCLI" eval "document.title"
"$PWCLI" eval "el => el.textContent" e12
```

优先通过 snapshot 和元素 ref 理解页面状态。直接 eval 很有用，但不应该变成绕过当前页面状态判断的捷径。

### 使用 session

命名 session 可以隔离互不相关的浏览器任务：

```bash
"$PWCLI" --session checkout open https://example.com/checkout
"$PWCLI" --session checkout snapshot
```

如果一个任务会持续使用同一个 session，也可以先设置 `PLAYWRIGHT_CLI_SESSION`。

## 使用边界

最重要的边界是 snapshot 新鲜度。只使用当前 snapshot 里的 ref。点击、导航、菜单、modal 或标签页切换改变页面后，都要重新 snapshot。

其他实用规则：

- 优先使用明确的 CLI 命令。
- 只有普通命令不够时，再使用 `run-code` 或直接 eval。
- 如果项目规定了产物目录，截图、trace 等文件应放进对应目录。
- 除非用户明确要求测试文件，不要自动转成 Playwright Test。
- 如果缺少 `npx`，先安装 Node.js/npm，或者改用全局 `@playwright/cli`。

## 相似 skill

- [Webapp Testing Skill](/zh/awesome-skills/webapp-testing/) - 更偏向使用 Playwright 测试本地 Web 应用。
- [Playwright Interactive Skill](/zh/awesome-skills/playwright-interactive/) - 面向需要持久浏览器或 Electron 交互的 JavaScript REPL 工作流。
- [Web Quality Audit Skill](/zh/awesome-skills/web-quality-audit/) - 更适合性能、可访问性、SEO 和最佳实践审查，而不是操作页面流程。
- [Core Web Vitals Skill](/zh/awesome-skills/core-web-vitals/) - 把任务收窄到 LCP、INP 和 CLS 诊断。

当任务是“立刻从终端操作浏览器”，优先选 `openai/playwright`。当输出应成为可复用测试覆盖或质量报告时，选择更偏测试或审计的 skill。

## 参考资料

- 目录页：https://officialskills.sh/openai/skills/playwright
- 主要来源：https://github.com/openai/skills/tree/main/skills/.curated/playwright
- Playwright `SKILL.md`：https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright/SKILL.md
- CLI reference：https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright/references/cli.md
- Workflows reference：https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright/references/workflows.md
- VoltAgent Awesome Agent Skills：https://github.com/VoltAgent/awesome-agent-skills
