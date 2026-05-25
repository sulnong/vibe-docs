---
title: "自动化与协作"
description: "在本地 Hermes 会话可靠之后，再使用 messaging gateway、cron、delegation 和 Kanban 扩展自动化与多 agent 协作。"
---

# 自动化与协作

Hermes 的高级能力很诱人：Telegram 或 Discord 里发一句话就能让 agent 工作，cron 定时跑报告，subagent 并行读代码，Kanban 保存多 agent 状态。但这些能力应该建立在一个前提上：普通本地会话已经可靠。

如果本地 `hermes` 还经常卡在模型、工具或路径问题上，远程入口和无人值守只会放大混乱。

## 先判断是否真的需要自动化

自动化适合这些情况：

- 输入来源稳定，例如 issue、feed、日志、固定目录。
- 输出形式明确，例如草稿报告、PR、摘要、告警。
- 失败后有人负责处理。
- 有日志、预算、权限边界和停止方式。
- 本地手动跑过多次，知道正常结果长什么样。

不适合自动化的情况也很常见：任务定义还在变、输出无法审查、需要大量隐性判断、失败成本很高，或者你只是觉得“agent 应该自己跑起来很酷”。

## Messaging gateway 改变触发边界

本地 CLI 由键盘前的人触发。Gateway 会让 Telegram、Discord、Slack、WhatsApp、Signal、Email、SMS、Matrix、Mattermost、Home Assistant、webhook 或 API frontend 等外部入口触发 Hermes。

这会立刻带来几个新问题：

| 问题 | 必须有答案 |
| --- | --- |
| 谁能触发 Hermes | allowlist、群组、bot token 和身份映射。 |
| 哪段对话对应哪个 session | 避免不同用户或群组串状态。 |
| 远程用户能触发哪些工具 | 只读、写文件、shell、API、发布动作要分级。 |
| 日志在哪里 | 能查到谁触发、做了什么、失败在哪里。 |
| 怎么关闭 | token 轮换、停服务、禁 webhook、撤销权限。 |

第一版 gateway 最好只做只读价值：查询状态、总结信息、生成草稿。能写仓库、发消息、调生产 API 的 bot，需要更严格的授权和人工确认。

## Cron 任务要像小服务一样设计

Cron 不是“过一会儿再问 agent”。它是无人值守服务。每个 job 都应该写清楚：

```text
Name:
Owner:
Schedule:
Input:
Allowed tools:
Output:
Budget:
Logs:
Failure handling:
Shutdown:
```

一个健康例子：

```text
Every weekday at 09:00, summarize new GitHub issues into a draft Markdown report.
Do not comment on issues, close issues, or modify repository files.
Send failures to the owner.
```

如果一个 job 没有 owner，就不要让它长期运行。

## Delegation 只适合边界清楚的并行任务

Subagent delegation 可以让 Hermes 拆出独立 agent 并行工作。它适合：

- 多个子系统可以独立阅读。
- 多个候选方案可以独立比较。
- 一个 agent 实现，另一个 agent 复核。
- 每个子任务有明确文件范围或只读范围。

不适合委派的任务：

- 需求还没说清。
- 多个 agent 会改同一批文件。
- 结果需要频繁共享隐性状态。
- 主任务下一步完全依赖某个子任务，等待比自己做更慢。

委派时要写清 ownership：

```text
You own src/providers/. Do not modify CLI files.
Return changed paths, assumptions, and verification output.
```

## Kanban 保存共享状态，不保存全部思考

Kanban 适合多 agent 或长周期工作保存当前状态。卡片应该说明“下一步产出什么”，而不是复制整段聊天历史。

好的卡片通常包含：

| 字段 | 内容 |
| --- | --- |
| 标题 | 具体结果，不是宽泛主题。 |
| Owner | 一个负责推进的人或 agent。 |
| 状态 | 当前真实阶段。 |
| 范围 | 能改哪些文件或只能读哪些来源。 |
| 验收 | 怎么判断完成。 |

长推理、设计依据和决策记录应该放进项目文档或 issue。Board 只负责让协作状态不丢。

## 自动化前的检查清单

开启 gateway、cron、delegation 或 Kanban 前，先确认：

- 本地 CLI 已经稳定跑通同类任务。
- provider 和模型明确。
- 工具权限最小化。
- 输出能被人检查。
- 失败有日志和 owner。
- 能快速暂停、撤销 token 或停服务。

自动化不是让 agent 脱离管理，而是把可重复流程移到更合适的触发面上。

## 相关页面

- [第一条可靠路径](/zh/hermes/first-run/)
- [工具与工具集](/zh/hermes/tools-and-toolsets/)
- [安全模型](/zh/hermes/security-model/)
- [集成与外部接口](/zh/hermes/integrations/)

## 参考资料

- Messaging overview：https://hermes-agent.nousresearch.com/docs/user-guide/messaging/index
- Cron Jobs：https://hermes-agent.nousresearch.com/docs/user-guide/features/cron
- Delegation：https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation
- Kanban Multi-Agent：https://hermes-agent.nousresearch.com/docs/user-guide/features/kanban
