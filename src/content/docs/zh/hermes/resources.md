---
title: "资源与更新追踪"
description: "找到 Hermes Agent 官方文档、PyPI、GitHub release、llms.txt、FAQ、providers、tools 和架构资料，并知道什么时候重新验证。"
---

# 资源与更新追踪

Hermes 变化很快，二手教程很容易过期。遇到安装、provider、工具、gateway 或自动化问题时，优先看官方文档、PyPI、GitHub release 和源码，再看社区讨论。

## 最常用来源

| 你要确认什么 | 先看哪里 |
| --- | --- |
| 安装方式、平台差异 | [Installation](https://hermes-agent.nousresearch.com/docs/getting-started/installation) |
| 第一次运行和模型选择 | [Quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart) |
| Python 要求和包版本 | [PyPI hermes-agent](https://pypi.org/project/hermes-agent/) |
| 最新 release | [GitHub releases](https://github.com/NousResearch/hermes-agent/releases) |
| 全量文档索引 | [llms.txt](https://hermes-agent.nousresearch.com/docs/llms.txt) |
| FAQ 和常见错误 | [FAQ](https://hermes-agent.nousresearch.com/docs/reference/faq) |
| 源码和 issue | [GitHub repository](https://github.com/NousResearch/hermes-agent) |

## 什么时候必须重新验证

这些场景不要只相信旧笔记：

- 准备写团队安装文档。
- 准备 pin 或升级版本。
- 准备启用 gateway、cron 或 API server。
- provider、模型、OAuth 或价格相关行为发生变化。
- 线上自动化突然失败。
- 要写公开技术文档或对外教程。

版本基线应该写日期。比如“2026-05-25 检查 PyPI：`hermes-agent 0.14.0`，Python `>=3.11`”。没有日期的版本判断很快会失去价值。

## 按主题查官方文档

| 主题 | 官方入口 |
| --- | --- |
| CLI 和 TUI | https://hermes-agent.nousresearch.com/docs/user-guide/cli |
| 配置和模型 | https://hermes-agent.nousresearch.com/docs/user-guide/configuration |
| Sessions | https://hermes-agent.nousresearch.com/docs/user-guide/sessions |
| Tools | https://hermes-agent.nousresearch.com/docs/user-guide/features/tools |
| Skills | https://hermes-agent.nousresearch.com/docs/user-guide/features/skills |
| Memory | https://hermes-agent.nousresearch.com/docs/user-guide/features/memory |
| Security | https://hermes-agent.nousresearch.com/docs/user-guide/security |
| Messaging | https://hermes-agent.nousresearch.com/docs/user-guide/messaging/index |
| Cron | https://hermes-agent.nousresearch.com/docs/user-guide/features/cron |
| Delegation | https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation |
| MCP | https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp |
| API Server | https://hermes-agent.nousresearch.com/docs/user-guide/features/api-server |
| Architecture | https://hermes-agent.nousresearch.com/docs/developer-guide/architecture |

## 本地项目应该记录什么

不要把官方文档镜像到项目里。项目内只需要记录和自己有关的决策：

```text
Hermes version:
Install method:
Provider:
Model:
Enabled toolsets:
Gateway platforms:
Cron jobs:
Skills used:
Security boundaries:
Last verified:
Owner:
```

这样未来升级时能判断“我们依赖了哪些行为”，而不是重新从聊天历史里考古。

## 相关页面

- [安装与版本基线](/zh/hermes/installation/)
- [Provider 与模型配置](/zh/hermes/providers-and-models/)
- [排错路径](/zh/hermes/troubleshooting/)
- [架构阅读路径](/zh/hermes/architecture/)
