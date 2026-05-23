---
title: "Hermes Agent 指南"
description: "把 Hermes Agent 当作长期运行的终端 agent 来学习：安装、配置 provider、使用工具与 skills、加入记忆，并在本地路径可靠后再自动化。"
---

# Hermes Agent 指南

Hermes Agent 是Nous Research 推出的终端原生 autonomous coding 与 task agent，包含持久记忆、agent-created skills、消息平台 gateway、委派、自动化和多种执行后端。

## 如何理解它

把 Hermes 当作长期运行的终端工作空间，而不是一次性 prompt。它适合需要文件、命令、会话、记忆和复用流程的任务。先让本地会话稳定，再进入消息平台、定时任务和多 agent 协作。

## 当前版本基线

| 项目 | 值 |
| --- | --- |
| 仓库 | `NousResearch/hermes-agent` |
| Package | `hermes-agent` |
| 检查版本 | `0.14.0` |
| Python 要求 | `>=3.11` |
| License | `MIT` |

## 继续阅读

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)
- [Skills 系统](/zh/hermes-agent/skills/)
- [排错路径](/zh/hermes-agent/troubleshooting/)

## 先读什么

如果项目里刚开始使用 Hermes，先读安装和第一次运行。消息平台、cron、委派、持久记忆这些能力都很吸引人，但只有本地普通会话可靠后，才容易判断它们是否真的合适。

| 读者状态 | 下一页 |
| --- | --- |
| 需要安装 | [安装与版本基线](/zh/hermes-agent/installation/) |
| 已安装但没跑通 | [第一条可靠路径](/zh/hermes-agent/first-run/) |
| 模型选择不清楚 | [Provider 与模型配置](/zh/hermes-agent/providers-and-models/) |
| 已经在自动化 | [安全模型](/zh/hermes-agent/security-model/) |

## 这套指南的基线

这里使用的版本基线是 hermes-agent 0.14.0，Python 要求 >=3.11。Agent 项目变化很快，生产 pin 版本前仍要重新查看官方文档。

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Repository: https://github.com/NousResearch/hermes-agent
- Official docs: https://hermes-agent.nousresearch.com/docs/
- LLM docs index: https://hermes-agent.nousresearch.com/docs/llms.txt
- PyPI package: https://pypi.org/project/hermes-agent/
