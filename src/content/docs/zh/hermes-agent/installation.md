---
title: "安装与版本基线"
description: "安装 Hermes Agent，确认 Python 和包要求，并让第一套环境容易检查。"
---

# 安装与版本基线

## 创建干净环境

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
command -v hermes
hermes --help
```

当前包信息显示 hermes-agent 0.14.0，Python 要求 >=3.11。严肃使用前重新确认包信息，并把版本、provider、操作系统和第一条成功命令记录下来。

## 安装阶段先别混在一起

- 先证明命令可用，再调 provider key。
- 不要把工具、记忆、gateway 和部署问题混在安装问题里。
- 生产机器上的安装脚本要看来源，并用正确用户执行。

## 干净安装更容易排错

使用新 shell 和小环境。安装、provider 鉴权和 workflow 代码同时变化时，第一次失败会有太多可能原因。第一步只确认命令可见、包版本可见、模型调用可见。

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
command -v hermes
hermes --help
```

| 安装后检查 | 为什么重要 |
| --- | --- |
| 记录包版本 | 以后知道在和哪个行为比较。 |
| 记录 Python 版本 | 很多失败是环境不匹配。 |
| 记录第一条成功命令 | 别人能复现起点。 |
| Provider key 不进代码 | 示例文件可以安全提交。 |

## 相关页面

- [第一条可靠路径](/zh/hermes-agent/first-run/)
- [Provider 与模型配置](/zh/hermes-agent/providers-and-models/)
- [工具与工具集](/zh/hermes-agent/tools-and-toolsets/)
- [Skills 系统](/zh/hermes-agent/skills/)

## 参考资料

- Installation: https://hermes-agent.nousresearch.com/docs/getting-started/installation
- PyPI package: https://pypi.org/project/hermes-agent/
