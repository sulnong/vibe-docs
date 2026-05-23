---
title: "安全模型"
description: "为 Hermes 的命令、文件访问、凭据、远程用户、自动化和回滚设置边界。"
---

# 安全模型

## 控制影响范围

凭据、终端、文件写入、浏览器、消息平台和自动化都会扩大 agent 的影响范围。默认给最小权限，用隔离和回滚降低错误成本。

| 场景 | 边界 |
| --- | --- |
| 本地工作 | Git diff 和 checkpoint。 |
| 容器或远程 | 明确挂载路径和清理方式。 |
| 凭据 | 不进日志和公开文件。 |
| 无人值守 | 预算、告警和关闭路径。 |

## 安全就是控制可触达范围

Agent 只能影响它能触达的东西。默认缩小可触达范围，让高影响动作可见，并在任务或输入不确定时使用隔离。

| 风险面 | 边界 |
| --- | --- |
| 终端命令 | 破坏性命令审批。 |
| 文件写入 | Git diff、checkpoint 和复核。 |
| 凭据 | 环境隔离，不进日志。 |
| 远程 backend | 明确挂载、用户和清理。 |
| 自动化 | 预算、告警和停止路径。 |

## 按风险选择 backend

Local 简单快速；容器增加依赖隔离；SSH 和云 backend 增加可达性和运维复杂度。选择能安全完成任务的最小 backend。

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
