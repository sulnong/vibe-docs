---
title: "第一条可靠路径"
description: "运行第一个本地 Hermes 会话，证明模型连接可用，并找到恢复时需要的状态位置。"
---

# 第一条可靠路径

## 运行最小有用任务

```bash
hermes
```

第一次运行只证明基础路径：能启动、能连模型、能返回可检查结果。不要一开始就接生产数据、远程入口或高风险工具。

| 信号 | 含义 |
| --- | --- |
| 命令或脚本可运行 | 环境和包安装基本正确。 |
| 模型调用成功 | provider 配置可用。 |
| 输出有边界 | loop 或会话没有失控。 |
| 状态可找到 | 之后可以恢复或排错。 |

## 第一次运行要低风险

先让 Hermes 做一个无害的只读任务，再写入临时位置。这样能证明终端路径，不会碰应用文件。

```text
Read README.md and write a five-bullet summary to /tmp/hermes-first-run.md. Do not modify project files.
```

| 如果失败 | 先看这里 |
| --- | --- |
| 命令或 import 失败 | 安装和当前环境。 |
| Provider 鉴权失败 | Key 来源、模型名和 provider 账号。 |
| 输出太散 | Prompt、loop 限制和输出要求。 |
| 状态找不到 | Session、日志和工作目录。 |

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)
- [Skills 系统](/zh/hermes-agent/skills/)

## 参考资料

- Quickstart: https://hermes-agent.nousresearch.com/docs/getting-started/quickstart
- Cli: https://hermes-agent.nousresearch.com/docs/user-guide/cli
- Sessions: https://hermes-agent.nousresearch.com/docs/user-guide/sessions
