---
title: "安装与版本基线"
description: "安装 Hermes Agent，确认 Python、命令路径、包版本和第一条可复现的环境信息。"
---

# 安装与版本基线

安装 Hermes 不难，真正容易出问题的是把安装、provider 鉴权、模型选择、工具权限和项目任务混在一起排查。第一轮只做一件事：让 `hermes` 命令在一个干净环境里可见，并记录它来自哪里。

## 先检查 Python

PyPI 当前的 `hermes-agent` 包要求 Python `>=3.11`。开始前先确认：

```bash
python --version
python -m pip --version
```

如果机器上有多个 Python，优先使用你平时能维护的虚拟环境或 Python 管理器。不要在一个不清楚来源的系统 Python 里直接堆依赖；后面排错会很痛苦。

## 推荐的最小安装

如果你已经有 Python 3.11 或更新版本，最容易解释的路径是直接安装 PyPI 包：

```bash
python -m pip install --upgrade hermes-agent
command -v hermes
hermes --help
```

这条路径的好处是团队成员容易复现，也容易在 CI、容器或开发机上写成明确步骤。安装后记录三件事：

```bash
python --version
python -m pip show hermes-agent
command -v hermes
```

当有人说“我这里 Hermes 不一样”时，这三行通常比一大段聊天记录有用。

## 官方安装脚本适合什么情况

官方文档也提供安装脚本：

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

它适合希望脚本自动处理依赖、launcher 和浏览器相关组件的用户。团队内部如果采用这条路径，最好把“为什么用脚本、谁维护、如何升级、如何卸载”写进项目文档。生产机器上运行远程安装脚本前，要先看脚本来源和权限模型。

## 安装后不要急着接项目

安装成功的标准不是“没有报错”，而是你能解释当前环境：

| 检查项 | 为什么重要 |
| --- | --- |
| `command -v hermes` | 确认 shell 调到的是哪个 launcher。 |
| `hermes --help` | 确认命令能启动，而不是 PATH 里有残留文件。 |
| `python -m pip show hermes-agent` | 确认包版本、位置和依赖环境。 |
| 记录操作系统和 shell | 以后排查 PATH、权限和终端差异。 |

先不要同时配置 gateway、cron、MCP 或生产项目。安装层稳定后，再去 [第一条可靠路径](/zh/hermes/first-run/) 配模型和跑第一次会话。

## 升级和版本 pin

Hermes 处在快速迭代阶段，release notes 可能改变 provider、工具、gateway 或依赖行为。个人试用可以跟随最新版；团队或自动化场景应该 pin 版本，并把升级当成一次小迁移：

```bash
python -m pip install --upgrade hermes-agent
hermes --help
```

升级后至少跑一次 `hermes --help` 和一条低风险会话。使用 gateway 或 cron 的环境，还要确认长期进程确实加载了新版本，而不是旧进程仍在后台运行。

## 常见安装问题

| 症状 | 先看哪里 |
| --- | --- |
| `hermes: command not found` | pip 安装目录是否在 PATH；当前 shell 是否重新加载。 |
| Python 版本过低 | 换到 Python 3.11+ 的环境再装。 |
| `pip show` 有包但命令不可见 | console script 目录没进 PATH。 |
| 命令可见但启动报 import 错误 | 可能混用了多个 Python 或旧安装残留。 |
| Windows 原生环境异常 | 先确认官方文档当前支持状态；WSL2 往往更容易复现。 |

## 参考资料

- Installation：https://hermes-agent.nousresearch.com/docs/getting-started/installation
- Quickstart：https://hermes-agent.nousresearch.com/docs/getting-started/quickstart
- PyPI package：https://pypi.org/project/hermes-agent/
