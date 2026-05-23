---
title: "Cron 长期自动化"
description: "只有当任务有明确 owner、输入、输出、限制和关闭路径时，才用 Hermes 做定时自动化。"
---

# Cron 长期自动化

## 定时任务需要契约

这类能力只有在本地路径可靠后才应该加入。每个入口或任务都要有 owner、权限边界、输出形态、日志和停止方式。

| 关注点 | 问题 |
| --- | --- |
| 授权 | 谁能触发？ |
| 范围 | 能读写哪里？ |
| 输出 | 结果给谁？ |
| 停止 | 如何快速关闭？ |

## 定时 agent 需要契约

Cron 任务会在没人盯着时运行。每个 job 都应该有 owner、输入源、预期输出、预算、日志位置和停止方式。

| Job 部分 | 例子 |
| --- | --- |
| Owner | 接收失败的人或团队。 |
| 输入 | 仓库、issue queue、feed 或指标源。 |
| 输出 | 草稿报告、pull request、消息或文件。 |
| 限制 | 时间、成本、文件范围或 API 预算。 |
| 停止路径 | 禁用 job 的命令或配置开关。 |

```text
Every weekday at 09:00, summarize new issues into a draft report. Do not comment on issues or modify repository files.
```

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Cron: https://hermes-agent.nousresearch.com/docs/user-guide/features/cron
- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
