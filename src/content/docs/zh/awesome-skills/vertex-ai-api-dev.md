---
title: "Vertex AI API Dev Skill"
description: "Vertex AI API Dev Skill：指导在 Google Cloud Vertex AI 上开发 Gemini 应用。"
---

# Vertex AI API Dev Skill

指导在 Google Cloud Vertex AI 上开发 Gemini 应用。

这个页面帮助你判断是否应该安装或调用 `google-gemini/vertex-ai-api-dev`，以及第一次使用时应该怎样控制范围。

## 快速信息

| 字段 | 内容 |
| --- | --- |
| Skill | `google-gemini/vertex-ai-api-dev` |
| 分类 | [AI、ML 与模型平台](/zh/awesome-skills/categories/ai-ml-models/) |
| 目录页 | https://officialskills.sh/google-gemini/skills/vertex-ai-api-dev |
| 主要来源 | https://officialskills.sh/google-gemini/skills/vertex-ai-api-dev |
| 主要依赖 | 模型平台账号、API key、数据集或 SDK 上下文 |
| 第一次尝试 | 先用小型示例请求、数据集或模型操作，再进入生产流程。 |

## 安装与设置

从目录页开始：https://officialskills.sh/google-gemini/skills/vertex-ai-api-dev

如果页面提供安装命令，优先复制目录页上的命令，不要根据 URL 自行拼接。若你的 agent 客户端支持 GitHub skill 路径，可以使用主要来源：https://officialskills.sh/google-gemini/skills/vertex-ai-api-dev

安装后先阅读原始 `SKILL.md` 或目录页说明，确认触发条件、依赖、禁止事项和输出形式。不要只因为名称匹配就让 agent 自动使用它。

## 这个 skill 做什么

指导在 Google Cloud Vertex AI 上开发 Gemini 应用。

放在「AI、ML 与模型平台」这一类里，它的价值不是替 agent “多知道一点”，而是让 agent 在特定任务上遵守更稳定的流程、检查点和边界。

## 这页帮你判断什么

- `google-gemini/vertex-ai-api-dev` 是否比临时提示词更适合当前任务。
- 第一次调用时应该准备哪些上下文、账号、文件、URL 或运行环境。
- 输出能否被人工复核，是否需要截图、日志、diff、来源链接或命令记录。
- 如果它不合适，应该转向同分类中的哪个相邻 skill。

## 什么时候使用

- 在快速变化的模型 API 上按平台约束开发。
- 运行 ML 平台流程，同时跟踪凭据和产物。
- 通过具体任务比较模型或平台选择。

## 什么时候不要使用

- 任务依赖最新模型价格或政策，但尚未核对来源。
- 敏感数据集会在未审核情况下上传。
- 目标是科学验证，而不是流程指导。

## 决策清单

| 判断 | 建议 |
| --- | --- |
| 任务是否足够窄 | 如果任务可以用一句稳定触发条件描述，就适合交给这个 skill；如果仍然很发散，先拆小。 |
| 是否具备依赖 | 模型平台账号、API key、数据集或 SDK 上下文。缺少依赖时，先补上下文，不要让 agent 猜测。 |
| 最小试运行 | 先用小型示例请求、数据集或模型操作，再进入生产流程。 |
| 输出如何验收 | 要求 agent 留下可复核证据，例如文件路径、命令、截图、审计结果、来源链接或关键判断依据。 |
| 什么时候停止 | 一旦任务涉及生产资源、敏感数据、账号权限或不可逆操作，就切回人工确认。 |
 
## 与相邻 skill 对比

- 如果你的任务更接近「提供使用 Gemini API 开发 Gemini 应用的最佳实践。」，优先看 [Gemini API Dev Skill](/zh/awesome-skills/gemini-api-dev/)；如果重点仍是「指导在 Google Cloud Vertex AI 上开发 Gemini 应用。」，再使用当前页面。
- 如果你的任务更接近「使用 Hugging Face CLI 完成 Hub 操作。」，优先看 [Hugging Face CLI Skill](/zh/awesome-skills/hf-cli/)；如果重点仍是「指导在 Google Cloud Vertex AI 上开发 Gemini 应用。」，再使用当前页面。
- 如果你的任务更接近「使用 TRL 流程训练模型，包括 SFT、DPO、GRPO 和 GGUF 转换。」，优先看 [Hugging Face Model Trainer Skill](/zh/awesome-skills/hugging-face-model-trainer/)；如果重点仍是「指导在 Google Cloud Vertex AI 上开发 Gemini 应用。」，再使用当前页面。
- 如果你的任务更接近「通过 Replicate 发现、比较和运行 AI 模型。」，优先看 [Replicate Skill](/zh/awesome-skills/replicate/)；如果重点仍是「指导在 Google Cloud Vertex AI 上开发 Gemini 应用。」，再使用当前页面。

## 第一次工作流

1. 打开目录页或来源目录，确认这是你要安装的 skill。
2. 阅读触发条件和 guardrails，确认它适合当前任务。
3. 在低风险样例、预览环境或小文件上运行一次。
4. 检查输出是否可追踪到来源、命令或文件变化。
5. 再决定是否把它用于更大的任务。

## 使用边界

- 不要把一次任务里的临时限制写成长期 skill 规则。
- 不要让 skill 自动处理账号、生产资源、付款、发布或合并操作，除非流程里有明确审核点。
- 如果 skill 依赖外部服务，先确认凭据、配额、隐私和输出位置。
- 如果结果会进入公开文档或生产代码，要回到原始来源复核事实。

## 相似 skill

- [Gemini API Dev Skill](/zh/awesome-skills/gemini-api-dev/) - 提供使用 Gemini API 开发 Gemini 应用的最佳实践。
- [Hugging Face CLI Skill](/zh/awesome-skills/hf-cli/) - 使用 Hugging Face CLI 完成 Hub 操作。
- [Hugging Face Model Trainer Skill](/zh/awesome-skills/hugging-face-model-trainer/) - 使用 TRL 流程训练模型，包括 SFT、DPO、GRPO 和 GGUF 转换。
- [Replicate Skill](/zh/awesome-skills/replicate/) - 通过 Replicate 发现、比较和运行 AI 模型。

## 参考资料

- 目录页：https://officialskills.sh/google-gemini/skills/vertex-ai-api-dev
- 主要来源：https://officialskills.sh/google-gemini/skills/vertex-ai-api-dev
- VoltAgent Awesome Agent Skills：https://github.com/VoltAgent/awesome-agent-skills
