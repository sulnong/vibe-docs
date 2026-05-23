---
title: "记忆与状态"
description: "有意识地使用 Swarms 记忆，避免连续性变成隐藏且过时的上下文。"
---

# 记忆与状态

## 记忆保存偏好，不保存契约

记忆适合保存稳定偏好和会话连续性。会影响公开输出、生产行为、安全或接口契约的事实，应写进项目文件和版本控制。

| 状态 | 更适合位置 |
| --- | --- |
| 用户偏好 | Memory。 |
| 项目规则 | AGENTS.md 或项目文档。 |
| 公开文档要求 | 版本控制中的项目指令。 |
| 审计证据 | 日志、产物或提交。 |

## 记忆不是事实数据库

记忆适合保存稳定偏好和连续性。需求、契约、公开内容规则、生产配置和安全决策应该放进项目文件，让人能审查变化。

| 状态 | 更适合位置 |
| --- | --- |
| 稳定用户偏好 | Memory。 |
| 项目规则 | AGENTS.md 或项目文档。 |
| Workflow 契约 | 版本化配置或代码。 |
| 审计证据 | 日志、产物或提交。 |

## 记忆带来问题时

如果坏假设只跟随一个会话，检查 session state。如果每次运行都出现，检查 memory 和全局 context。删掉错误记忆，比每次 prompt 都和它对抗更好。

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Memory: https://docs.swarms.world/concepts/memory.md
