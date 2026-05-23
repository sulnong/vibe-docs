---
title: "OpenClaw 迁移"
description: "把 OpenClaw 风格工作流迁向 Hermes Agent 时，先保留有效的 prompts、tools、files 和复核习惯。"
---

# OpenClaw 迁移

## 先保留有效部分

迁移不是复刻所有功能，而是先保留旧流程里真的有效的 prompts、工具、输入输出和复核习惯。一次替换一层，并保留回滚路径。

| 资产 | 迁移问题 |
| --- | --- |
| Prompt | 哪些输出稳定？ |
| 工具 | 哪些真必需？ |
| 文件 | 输入输出在哪里？ |
| 复核 | 人如何接受结果？ |

## 盘点旧工作流

迁移应该先保留已有 prompts、工具契约、输入文件、输出格式和复核习惯，再替换执行层。

| 旧资产 | 迁移问题 |
| --- | --- |
| Prompt | 哪些部分输出可靠？ |
| 工具 | 哪些调用真的必需？ |
| 文件 | 输入和输出在哪里？ |
| 复核习惯 | 人如何接受结果？ |
| 自动化 | 什么能快速禁用它？ |

## 一次替换一层

先复现本地交互运行，再加入 context、tools、memory 或自动化。新路径多次成功前，保留旧路径。

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Quickstart: https://hermes-agent.nousresearch.com/docs/getting-started/quickstart
- Tools: https://hermes-agent.nousresearch.com/docs/user-guide/features/tools
- Skills: https://hermes-agent.nousresearch.com/docs/user-guide/features/skills
