---
title: "安全模型"
description: "为 Hermes 的文件、命令、凭据、远程入口、自动化和执行后端设置可审查边界。"
---

# 安全模型

Hermes 的安全问题不是“模型会不会出错”这么简单。真正的问题是：当模型出错时，它能碰到什么、能改什么、能把结果发到哪里、谁能发现并停止它。

## 影响范围由可触达资源决定

Agent 只能影响它能触达的东西。安全模型的第一步是缩小可触达范围：

| 资源 | 边界做法 |
| --- | --- |
| 文件系统 | 从正确目录启动，限制写入范围，看 Git diff。 |
| Shell | 危险命令确认，优先 dry-run，避免默认 root。 |
| 凭据 | 环境隔离，不写入 prompt、日志、公开文件。 |
| 浏览器 | 区分只读观察和登录态动作。 |
| 外部 API | 限 key 权限、加预算、超时和日志。 |
| Gateway | 用户 allowlist、session 路由、快速停用。 |
| Cron | owner、日志、预算、关闭路径。 |

不要把“模型很强”当作安全边界。真正可靠的是权限、隔离、日志和人工复核。

## 本地运行不等于低风险

本地 backend 简单快速，但它能接触你的本地文件、SSH key、浏览器状态、环境变量和项目仓库。第一次使用时：

- 不要从 home 目录或 secrets 目录启动。
- 不要让它处理有未提交重要改动的仓库。
- 不要默认给生产 API key。
- 不要把发布、付款、删库、改权限放进自动任务。

本地最好的安全网通常是 Git diff、临时目录、低权限账号和明确 prompt 边界。

## 远程和容器 backend 解决的是不同问题

Docker、SSH、云 sandbox、Modal、Daytona、Vercel Sandbox、Singularity 等 backend 可以改变命令实际在哪里执行。它们不是“更安全”的同义词，而是不同隔离和运维取舍。

| Backend 方向 | 适合场景 | 注意点 |
| --- | --- | --- |
| Local | 快速试用、本地仓库协助 | 容易触达个人环境。 |
| Docker/container | 依赖隔离、可丢弃环境 | 挂载目录和凭据要清楚。 |
| SSH/远程机器 | 需要远程资源或服务器环境 | 用户权限、日志和清理很重要。 |
| 云 sandbox | 隔离和弹性 | 成本、数据出境、持久化策略。 |

选择能完成任务的最小 backend，不要为了显得高级而扩大环境。

## 远程入口要有身份和停止路径

Gateway 或 API server 一旦上线，触发 Hermes 的不再只是本地用户。至少要清楚：

- 哪些用户、频道或 webhook 被允许。
- 不同用户的 session 是否隔离。
- 远程入口能否触发 shell、文件写入或外部 API。
- token 泄漏时如何撤销。
- 出现异常时谁能停服务。

一个只能生成草稿的 bot 和一个能改仓库、发消息、跑生产命令的 bot，风险等级完全不同。

## 高风险动作要保留人工确认

这些动作不应该默认自动执行：

- 删除或覆盖大量文件。
- 发布包、部署站点、合并 PR。
- 改生产数据或生产配置。
- 发送外部消息、邮件或群通知。
- 花钱的 API、大批量任务或长时间云资源。
- 读取或转发敏感信息。

让 Hermes 准备草稿、计划、diff 和命令建议是很有价值的；让它直接执行高风险动作需要额外审批、日志和回滚。

## 相关页面

- [工具与工具集](/zh/hermes/tools-and-toolsets/)
- [自动化与协作](/zh/hermes/automation/)
- [集成与外部接口](/zh/hermes/integrations/)
- [排错路径](/zh/hermes/troubleshooting/)

## 参考资料

- Security：https://hermes-agent.nousresearch.com/docs/user-guide/security
- Checkpoints and rollback：https://hermes-agent.nousresearch.com/docs/user-guide/checkpoints-and-rollback
- Docker backend：https://hermes-agent.nousresearch.com/docs/user-guide/docker
