# 2026-05-25 微信来源批处理记录

## 来源目录

- `/home/sunlong/AiWorks/wechat_articles/DeepSeek过于朴素了`
- `/home/sunlong/AiWorks/wechat_articles/一场全面入侵，字节被逼急了`
- `/home/sunlong/AiWorks/wechat_articles/万字解析___从_OpenClaw_出发，重新理解_AI产品`
- `/home/sunlong/AiWorks/wechat_articles/你相信吗，今天比任何时候都更容易翻身`
- `/home/sunlong/AiWorks/wechat_articles/未来10年供应链大洗牌：中国正在悄悄坐上全球总部的位置？`

## 页面映射

| 原文 | 公开页 | Topic | 处理策略 |
| --- | --- | --- | --- |
| DeepSeek过于朴素了 | `/china-ai/deepseek-v4-efficiency-strategy/` | China AI | 不逐段翻译，重构为 DeepSeek 的效率战略、长上下文、推理成本和硬件可选性解释。 |
| 一场全面入侵，字节被逼急了 | `/china-ai/doubao-ai-shopping-bytedance-ecommerce/` | China AI | 重构为 AI shopping / conversational commerce / ByteDance 平台战略分析。 |
| 万字解析：从 OpenClaw 出发，重新理解 AI 产品 | `/china-ai/openclaw-ai-product-environment/` | China AI | 提炼“环境 = context + delivery + collaboration”框架，解释 AI 产品差异。 |
| 未来10年供应链大洗牌 | `/china-industry/china-supply-chain-headquarters-globalization/` | China Industry | 用 Baldwin 全球化框架重写为中国供应链总部化与 know-how 出海分析。 |
| 你相信吗，今天比任何时候都更容易翻身 | `/china-society/upward-mobility-ai-age/` | China Society | 从中国阶层焦虑切入，结合 300 年财富史与 AI 时代流动性问题重写。 |

## 图片处理

- 图片统一归档到 `public/assets/wechat/<page-slug>/`。
- 使用 `ffmpeg` 转为 WebP，最长边控制在约 1200px 内。
- 删除无法正常解码的微信占位图，不在公开文章中引用。
- 当前公开引用图片：
  - `/assets/wechat/deepseek-v4-efficiency-strategy/image_9.webp`
  - `/assets/wechat/doubao-ai-shopping-bytedance-ecommerce/image_17.webp`
  - `/assets/wechat/china-supply-chain-headquarters-globalization/image_2.webp`
  - `/assets/wechat/china-supply-chain-headquarters-globalization/image_4.webp`
  - `/assets/wechat/china-supply-chain-headquarters-globalization/image_6.webp`
  - `/assets/wechat/china-supply-chain-headquarters-globalization/image_8.webp`
  - `/assets/wechat/china-supply-chain-headquarters-globalization/image_9.webp`
  - `/assets/wechat/upward-mobility-ai-age/image_1.webp`

## 站内关系

- 新增 `china-ai`、`china-industry`、`china-society` 三个 topic hub。
- `china-ai` 内部互链 DeepSeek、Doubao AI shopping、OpenClaw 三篇。
- `china-industry` 链接 `china-economy` 的宏观文章，承接产业与宏观关系。
- `china-society` 链接 `china-ai` 和 `china-economy`，承接 AI、工作、阶层流动与宏观背景。

## 风险与后续

- 公众号来源中的 2026 年行业数据按“来源文章声称”处理，公开页避免把未独立核验的数据写成本站确定事实。
- 对外部事实只补充少量官方或权威链接，避免把用户指定来源流程变成重新做全网研究。
- 后续如果 topic 继续增加，优先稳定已发布 URL，通过 hub 与内链调整分类认知，不轻易改旧 URL。
