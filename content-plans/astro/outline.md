# Astro 选题大纲报告

## 研究流程

- 尝试 clone 官方仓库；设置时间上限，超时则退回 GitHub API、README、raw 文件和官方文档。
- 查找官方文档、README、release notes、examples、issues、FAQ、迁移指南和源码示例。
- 观察中英文搜索需求、SERP 页面类型、竞品页面结构和社区高频问题。
- 抽取事实并标注来源；竞品只用于识别问题与缺口，不复用表达和结构。
- 优先制造别人没有的内容：排错路径、边界条件、真实任务地图、反例、版本差异和决策清单。

## URL 组织

- 英文入口：`/en/astro/`
- 中文入口：`/zh/astro/`
- 页面 slug 在中英文之间保持一致，便于 hreflang、canonical 和后续维护。

## 来源地图

### 官方来源

- https://github.com/withastro/astro（repository；用途：仓库元信息、README、源码入口）
- https://github.com/withastro/astro#readme（readme；用途：事实基线、定位、安装和示例）
- https://github.com/withastro/astro/tree/main/docs（docs-directory；用途：仓库内文档；路径可能需要 agent 验证）
- https://github.com/withastro/astro/releases（releases；用途：版本变化、breaking changes、升级注意事项）
- https://github.com/withastro/astro/tree/main/examples（examples；用途：真实示例和可复用代码结构；路径可能需要 agent 验证）
- https://github.com/withastro/astro/issues（issues；用途：坑点、排错、用户高频问题；必须回到官方事实交叉验证）
- https://github.com/withastro/astro/discussions（discussions；用途：社区问题、采用疑虑和真实用法；必须回到官方事实交叉验证）
- https://github.com/withastro/astro/wiki（wiki；用途：补充背景资料；是否存在需要 agent 验证）
- https://docs.astro.build/（official-docs；用途：事实基线与操作步骤）

### 竞品与 SERP 观察

- https://nextjs.org/docs（competitor；用途：识别搜索意图、页面缺口和对比维度）
- https://vite.dev/guide/（competitor；用途：识别搜索意图、页面缺口和对比维度）
- Astro 搜索结果通常混合官方文档、入门教程、框架对比和部署问题，页面体系需要同时回答学习、选型和落地问题。（用途：确定页面要回答的问题）

## 页面与 URL 设计

### 1. 概览 / Overview

- 英文 URL：`/en/astro/`
- 中文 URL：`/zh/astro/`
- 搜索意图：概览、判断是否相关、快速建立上下文
- 要回答的问题：这个主题是什么，解决什么问题，读者是否应该继续深入？
- 页面组织：一句话定位；它解决的问题；适合与不适合的场景；最小事实清单；来源与下一步
- 来源需求：官方 README；官方文档首页；仓库 description 与 stars/language；repository: https://github.com/withastro/astro；readme: https://github.com/withastro/astro#readme；releases: https://github.com/withastro/astro/releases
- 差异化内容：把 Astro 放进真实开发决策里，明确它适合内容站、文档站、营销页和混合交互页面，而不是只重复“内容优先框架”的官方简介。

### 2. 为什么与何时选择 / Why and When to Use It

- 英文 URL：`/en/astro/why-and-when/`
- 中文 URL：`/zh/astro/why-and-when/`
- 搜索意图：选型、替代方案、采用前判断
- 要回答的问题：为什么会有这个项目，什么时候应该选它，什么时候不该选？
- 页面组织：项目出现的背景；核心优势；不适合的情况；与替代方案的边界；决策清单
- 来源需求：官方介绍；README motivation/feature 部分；竞品文档或对比页；repository: https://github.com/withastro/astro；readme: https://github.com/withastro/astro#readme；releases: https://github.com/withastro/astro/releases；竞品页面: https://nextjs.org/docs
- 差异化内容：明确写出不推荐使用 Astro 的情况，例如强交互后台、需要完整 React 应用模型、团队没有静态内容维护需求。

### 3. 快速开始 / Getting Started

- 英文 URL：`/en/astro/getting-started/`
- 中文 URL：`/zh/astro/getting-started/`
- 搜索意图：教程、安装、第一条成功路径
- 要回答的问题：读者如何从零开始得到一个可验证的结果？
- 页面组织：环境要求；安装命令；最小可运行示例；验证结果；常见失败点
- 来源需求：官方 getting started；package manager 文档；release notes 的版本要求；repository: https://github.com/withastro/astro；readme: https://github.com/withastro/astro#readme；releases: https://github.com/withastro/astro/releases
- 差异化内容：把成功标准写清楚：项目创建成功、dev server 可访问、页面可编辑、build 可通过，每一步都说明失败时先查什么。

### 4. 核心概念 / Core Concepts

- 英文 URL：`/en/astro/core-concepts/`
- 中文 URL：`/zh/astro/core-concepts/`
- 搜索意图：概念解释、学习路径、心智模型
- 要回答的问题：读者必须先理解哪些概念，才不会误用 Astro？
- 页面组织：核心术语；概念之间的关系；最容易误解的点；与传统方案的差异；例子映射
- 来源需求：官方概念文档；README 架构描述；源码目录或示例项目；repository: https://github.com/withastro/astro；readme: https://github.com/withastro/astro#readme；releases: https://github.com/withastro/astro/releases
- 差异化内容：用误区组织概念，例如 island 不是“把 React 塞进 Astro”，content collections 不是普通文件夹，server islands 和 client islands 的边界不同。

### 5. 常见任务 / Practical Tasks

- 英文 URL：`/en/astro/practical-tasks/`
- 中文 URL：`/zh/astro/practical-tasks/`
- 搜索意图：how-to、配置、集成、迁移
- 要回答的问题：用户搜索 Astro 时，最常见的实际任务有哪些？
- 页面组织：任务列表；每个任务的入口文档；关键配置项；可复用代码片段；任务之间的依赖
- 来源需求：官方指南；examples 目录；社区 issue 或问答；repository: https://github.com/withastro/astro；readme: https://github.com/withastro/astro#readme；releases: https://github.com/withastro/astro/releases
- 差异化内容：把路由、组件、MDX、样式、内容集合、部署、GitHub Pages 等任务按“读者想完成什么”组织，而不是照搬官方导航。

### 6. 示例 / Examples

- 英文 URL：`/en/astro/examples/`
- 中文 URL：`/zh/astro/examples/`
- 搜索意图：示例、最佳实践、代码片段
- 要回答的问题：有哪些足够真实、能直接迁移到项目里的 Astro 例子？
- 页面组织：最小示例；真实项目结构示例；常见变体；反例；扩展方向
- 来源需求：官方 examples；官方模板；源码测试或 demo；repository: https://github.com/withastro/astro；readme: https://github.com/withastro/astro#readme；releases: https://github.com/withastro/astro/releases
- 差异化内容：补足官方示例缺少的上下文：为什么这样写，换成文档站、博客、营销页或组件岛场景时怎么改。

### 7. 排错路径 / Troubleshooting

- 英文 URL：`/en/astro/troubleshooting/`
- 中文 URL：`/zh/astro/troubleshooting/`
- 搜索意图：报错、坑点、调试、兼容性
- 要回答的问题：读者最容易在哪里卡住，应该按什么顺序排查？
- 页面组织：常见症状；优先检查项；版本与环境问题；配置问题；升级与回退路径
- 来源需求：GitHub issues；release notes breaking changes；Stack Overflow/社区问答；repository: https://github.com/withastro/astro；readme: https://github.com/withastro/astro#readme；releases: https://github.com/withastro/astro/releases
- 差异化内容：按症状和排查顺序写，例如构建失败、路径错误、集成冲突、hydration 行为不符合预期，而不是堆错误消息。

### 8. 替代方案与对比 / Alternatives and Comparisons

- 英文 URL：`/en/astro/alternatives/`
- 中文 URL：`/zh/astro/alternatives/`
- 搜索意图：对比、选型、迁移
- 要回答的问题：Astro 和主要替代方案相比有什么取舍？
- 页面组织：对比对象；能力边界；生态成熟度；迁移成本；选择建议
- 来源需求：竞品官方文档；官方比较页；社区迁移经验；repository: https://github.com/withastro/astro；readme: https://github.com/withastro/astro#readme；releases: https://github.com/withastro/astro/releases；竞品页面: https://nextjs.org/docs
- 差异化内容：只比较会影响决策的维度：内容优先、交互模型、部署复杂度、团队技术栈和长期维护成本。

### 9. 资源 / Resources

- 英文 URL：`/en/astro/resources/`
- 中文 URL：`/zh/astro/resources/`
- 搜索意图：资料汇总、来源透明、后续学习
- 要回答的问题：读者应该去哪里验证事实、继续学习和追踪变化？
- 页面组织：官方资料；源码入口；版本与变更；社区讨论；持续更新建议
- 来源需求：官方文档；仓库 releases；社区入口；repository: https://github.com/withastro/astro；readme: https://github.com/withastro/astro#readme；releases: https://github.com/withastro/astro/releases
- 差异化内容：把资料按用途分类，告诉读者每类资料该用来验证什么，而不是只做链接列表。

## 人工审核问题

- 这些页面是否覆盖了当前最重要的 Astro 搜索需求？
- 是否需要保留现有站点里更细的页面，如 routing、content collections、GitHub Pages，还是先用大纲报告里的 9 页作为下一版结构？
- 是否缺少必须人工确认的官方来源？
- 差异化内容是否足够具体，还是仍然像官方文档摘要？
