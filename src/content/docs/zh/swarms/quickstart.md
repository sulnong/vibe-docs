---
title: "快速开始"
description: "创建第一个 Swarms Agent，运行无害任务，并在加入编排前检查输出。"
---

# 快速开始

## 运行最小有用任务

```python
from swarms import Agent

agent = Agent(
    agent_name="docs_summarizer",
    system_prompt="You summarize technical notes clearly and briefly.",
    model_name="gpt-4o-mini",
    max_loops=1,
)

result = agent.run("Write three practical checks before adopting a new agent framework.")
print(result)
```

第一次运行只证明基础路径：能启动、能连模型、能返回可检查结果。不要一开始就接生产数据、远程入口或高风险工具。

| 信号 | 含义 |
| --- | --- |
| 命令或脚本可运行 | 环境和包安装基本正确。 |
| 模型调用成功 | provider 配置可用。 |
| 输出有边界 | loop 或会话没有失控。 |
| 状态可找到 | 之后可以恢复或排错。 |

## 第一次运行要低风险

先运行一个 Agent、一个 prompt、一个输出。单脚本可检查前，不要加 workflow、memory、tools 或 routing。

```bash
python first_agent.py
```

| 如果失败 | 先看这里 |
| --- | --- |
| 命令或 import 失败 | 安装和当前环境。 |
| Provider 鉴权失败 | Key 来源、模型名和 provider 账号。 |
| 输出太散 | Prompt、loop 限制和输出要求。 |
| 状态找不到 | Session、日志和工作目录。 |

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)
- [生产化最佳实践](/zh/swarms/production/)

## 参考资料

- Quickstart: https://docs.swarms.world/quickstart.md
- Agent: https://docs.swarms.world/api/agent.md
