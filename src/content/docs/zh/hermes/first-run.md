---
title: "第一条可靠路径"
description: "配置 Hermes 模型，运行一个低风险本地会话，并确认输出、状态和恢复路径都可检查。"
---

# 第一条可靠路径

第一次运行 Hermes 的目标不是让它马上完成一个大任务，而是证明最小链路可用：命令能启动，provider 能鉴权，模型能回答，工作目录正确，输出边界清楚，出错后知道从哪里恢复。

## 从工作目录开始

Hermes 会读取当前目录、项目上下文和可用工具。先进入一个低风险目录，最好是你可以随时丢弃或用 Git diff 检查的项目：

```bash
cd /path/to/project
git status --short
hermes
```

如果你只是试用，可以用一个临时目录加一份 README。不要第一次就从生产仓库、真实密钥目录或有未提交重要改动的目录启动。

## 先配置模型

官方 quickstart 把 `hermes model` 作为关键步骤。它会引导你选择 provider、模型和鉴权方式：

```bash
hermes model
```

选择 provider 时，不要一开始就做复杂 routing 或 fallback。先让一个 provider 和一个模型稳定，之后再比较质量、成本、速度和上下文长度。

如果你使用 OpenAI-compatible 本地服务或自托管模型，也先跑一个最小请求，确认 endpoint、模型名和 key 都正确。很多“agent 不工作”的问题其实只是模型路径没通。

## 第一条任务只读

第一次对话可以这样问：

```text
Read README.md and summarize what this project does in five bullets. Do not modify files.
```

这条任务能检查三件事：Hermes 是否看到了正确目录，模型是否能返回结构化结果，是否会遵守“不要修改文件”的边界。

如果这一步都不稳定，先不要试 browser、shell、gateway 或 cron。回到安装和 provider 层排查。

## 第二条任务写到临时位置

只读任务通过后，再试一个低风险写入：

```text
Read README.md and write a short summary to /tmp/hermes-first-run.md. Do not modify project files.
```

然后自己检查：

```bash
ls -l /tmp/hermes-first-run.md
sed -n '1,80p' /tmp/hermes-first-run.md
git status --short
```

`git status --short` 应该没有因为这次任务出现项目文件改动。如果出现意外改动，先看 diff，不要继续扩大任务范围。

## 记录第一条成功路径

团队里真正有用的记录很短：

```text
OS:
Shell:
Hermes version:
Python version:
Provider:
Model:
First successful command:
Working directory:
```

这不是官僚流程。它能让下一个人知道当前行为是在哪个版本、哪个模型、哪个环境下成立的。

## 如果第一轮失败

按层排查，不要乱换一堆东西：

| 症状 | 先看哪里 |
| --- | --- |
| `hermes` 不可用 | [安装与版本基线](/zh/hermes/installation/) |
| provider 鉴权失败 | key 来源、账号权限、模型名、region。 |
| 输出空、很慢或格式混乱 | 模型选择、上下文长度、prompt 边界。 |
| 读不到 README | 当前工作目录或文件权限。 |
| 写错位置 | prompt 边界、工具权限和工作目录。 |

## 什么时候可以进入下一步

当你能稳定完成只读任务和临时写入，并能说清 provider、模型、工作目录和状态位置时，再继续看：

- [Provider 与模型配置](/zh/hermes/providers-and-models/)
- [CLI 与 TUI 工作流](/zh/hermes/cli-and-tui/)
- [工具与工具集](/zh/hermes/tools-and-toolsets/)
- [安全模型](/zh/hermes/security-model/)

## 参考资料

- Quickstart：https://hermes-agent.nousresearch.com/docs/getting-started/quickstart
- CLI：https://hermes-agent.nousresearch.com/docs/user-guide/cli
- Sessions：https://hermes-agent.nousresearch.com/docs/user-guide/sessions
