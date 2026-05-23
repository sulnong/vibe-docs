---
title: "排错路径"
description: "按环境、provider、agent、tool、workflow、output 和部署层隔离排查 Swarms 问题。"
---

# 排错路径

## 按层排查

```bash
python --version
python -m pip show swarms
```

| 症状 | 先看哪里 |
| --- | --- |
| 命令不可用 | 安装和 PATH。 |
| 鉴权失败 | provider key 和模型名。 |
| 工具失败 | 单独测试工具。 |
| 输出混乱 | 查看中间输出和上下文。 |

## 一次排一层

从最小失败层开始。安装、provider 鉴权、模型调用、工具执行、workflow synthesis 和部署的失败方式都不同。

```bash
python --version
python -m pip show swarms
python - <<'PY'
from swarms import Agent
print(Agent)
PY
```

| 症状 | 先看哪里 |
| --- | --- |
| 命令或 import 失败 | 安装路径、虚拟环境和包。 |
| 鉴权失败 | Provider key、模型名和账号。 |
| 工具失败 | 在 agent 外单独运行工具。 |
| 输出很乱 | 检查 prompt、context、中间输出和 loop 限制。 |
| 部署和本地不同 | 环境变量、网络访问和 runtime 版本。 |

## 相关页面

- [安装与环境配置](/zh/swarms/installation/)
- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)

## 参考资料

- Quickstart: https://docs.swarms.world/quickstart.md
