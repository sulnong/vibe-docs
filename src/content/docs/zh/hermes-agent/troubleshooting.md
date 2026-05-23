---
title: "排错路径"
description: "按层排查 Hermes 问题：安装、provider auth、模型调用、工具、记忆、gateway、自动化和部署。"
---

# 排错路径

## 按层排查

```bash
command -v hermes
hermes --help
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
command -v hermes
hermes --help
```

| 症状 | 先看哪里 |
| --- | --- |
| 命令或 import 失败 | 安装路径、虚拟环境和包。 |
| 鉴权失败 | Provider key、模型名和账号。 |
| 工具失败 | 在 agent 外单独运行工具。 |
| 输出很乱 | 检查 prompt、context、中间输出和 loop 限制。 |
| 部署和本地不同 | 环境变量、网络访问和 runtime 版本。 |

## 相关页面

- [安装与版本基线](/zh/hermes-agent/installation/)
- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)

## 参考资料

- Faq: https://hermes-agent.nousresearch.com/docs/reference/faq
- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
