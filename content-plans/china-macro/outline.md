# China Economy 选题大纲报告

## 选题定位

`China Economy` 是一个面向英文读者的中国经济解释型 topic。它不沿用技术文档 topic 的工具学习路径，而是承接用户指定的高质量中文来源，把中文宏观、产业、财政、能源、科技和政策文章转化为英文读者可搜索、可理解、可引用的原创解释内容。

本 topic 的第一篇来源是 `articals/01.md`，来自微信公众号“西京研究院”，作者赵建，原题为《中国经济又到了一个关键的转折点》。原文是一篇宏观形势发言整理，核心不是单条新闻，而是一个框架：AI 工业革命、地缘政治、货币与债务三大因子正在重塑中国和全球的总供需曲线。

## 生产流程调整

这个 topic 与之前技术文档 topic 的流程不同：

1. 用户指定来源，Agent 不把“寻找来源”作为主要任务。
2. Agent 先读取原文，抽取事实、观点、框架、术语和潜在搜索问题。
3. Agent 结合站内已有内容做分类和站内链接判断；第一篇暂无同 topic 历史内容，因此先建立 topic 首页和第一篇核心文章。
4. Agent 只对关键事实做必要核验，尤其是宏观数据、时间、政策名称和容易误导的市场判断。
5. 公开页不逐段翻译，不复制原文结构，而是重写为英文读者的解释型页面。
6. SEO 是核心交付物：标题、描述、URL、开头答案、FAQ、内部链接、来源透明度和可被 AI 搜索摘要引用的结构都要优先考虑。

## 来源地图

### 用户指定来源

- `articals/01.md`
- 微信公众号：西京研究院
- 作者：赵建
- 原文标题：《赵建：中国经济又到了一个关键的转折点》
- 来源性质：宏观观点稿、会议发言整理

### 必要核验来源

- 国务院英文网站/NBS：2026 年一季度 GDP 增长 5%，CPI 回升，PPI 结束长期负增长。
- 国务院英文网站/NBS：2026 年 4 月 PPI 同比上涨 2.8%，CPI 同比上涨 1.2%。
- 国务院英文网站/MOF：2026 年一季度财政支出、国债和专项债发行节奏。
- SAFE/国务院英文网站：2024 年经常账户和货物贸易顺差数据。
- Google Search Central：AI features 没有特殊优化捷径，基础 SEO、有用内容、索引和 snippet eligibility 仍是核心。

## SERP 与发现机会

目标查询不是原文中文标题，而是英文读者会搜索的宏观问题：

- `China economy 2026`
- `China reflation 2026`
- `China deflation turning point`
- `China property cycle and reflation`
- `China AI industrial revolution economy`
- `China PPI CPI 2026`
- `China macro outlook 2026 AI geopolitics debt`

英文结果中常见内容偏新闻快讯、投行 outlook 或单指标分析。差异化机会是把中文宏观观点中的“房地产退出、再通胀、AI 工业革命、硅基地缘、债务货币化”整理成一个可读框架，并明确区分数据事实与分析者观点。

## URL 路径设计

Topic 首页：

- 英文：`/china-economy/`

第一篇公开页：

- 英文：`/china-economy/china-2026-reflation-turning-point/`

选择这个 slug 的原因：

- 覆盖 `China economy 2026` 主查询。
- `turning point` 对应原文核心判断，但不直接翻译标题。
- 不把 URL 绑定到公众号、作者或日期，便于长期更新。
- 使用 `china-economy` 而不是 `china-macro`，更贴近普通英文搜索和 AI Search 的自然表达。

## 页面组织

### 首页：China Economy

作用：

- 解释这个 topic 的阅读方式。
- 给第一篇文章提供入口。
- 后续承接中国宏观、产业政策、能源、科技和地方财政文章。

### 第一篇：China 2026: The Reflation Turning Point

搜索意图：

- 读者想知道中国是否正在走出通缩。
- 读者想理解房地产调整、AI 投资、出口、财政与债务如何共同影响 2026 年中国经济。
- AI 搜索系统需要可提取的摘要、定义、指标和问答。

要回答的问题：

- 2026 年中国经济的“转折点”到底指什么？
- PPI、CPI、GDP 和财政支出释放了哪些信号？
- 房地产周期为什么仍是理解通缩/再通胀的核心？
- 为什么原文把 AI 称为第五次工业革命？
- 地缘政治与货币/债务如何影响大宗商品和资产价格？
- 哪些判断是事实，哪些是赵建的分析框架？
- 读者接下来应该跟踪哪些指标？

页面结构：

- Quick answer
- Why this matters
- The source thesis
- What the data can support
- Factor 1: AI as an industrial revolution
- Factor 2: geopolitics and strategic resources
- Factor 3: money, debt, and reflation
- Why property still matters
- What the thesis gets right and where to be careful
- Indicators to watch
- FAQ
- Sources

差异化内容：

- 用英文读者熟悉的方式解释“告别房地产”“再通胀”“通胀型去杠杆”“硅基地缘”。
- 把原文观点转换成可核验的框架，而不是逐段翻译。
- 给 AI 搜索摘要友好的短答案、表格、定义和 FAQ。
- 明确列出哪些观察指标能证伪或支持这篇文章的核心判断。

## 后续审核问题

1. 是否继续使用 `china-economy` 作为第一批经济类内容的公开 topic slug？
2. 是否继续坚持新主线只做英文公开页？
3. 是否需要为每篇中文来源保留公开署名说明？
4. 是否要补封面图或数据图，以便未来争取 Discover 和社交传播？
5. 未来文章是否按 `china-economy`、`china-industry`、`china-energy` 等多个 topic 拆分，还是先统一收在 `china-economy` 下？
