import { officialSourceCandidates, parseRepoSlug, slugifyTopic } from './github.js';

const DEFAULT_PAGE_BLUEPRINTS = [
  {
    slug: 'index',
    titles: { en: 'Overview', zh: '概览' },
    question: '这个主题是什么，解决什么问题，读者是否应该继续深入？',
    intent: '概览、判断是否相关、快速建立上下文',
    sections: ['一句话定位', '它解决的问题', '适合与不适合的场景', '最小事实清单', '来源与下一步'],
    sourceNeeds: ['官方 README', '官方文档首页', '仓库 description 与 stars/language'],
    uniqueAngle: '把主题放进真实开发决策里，而不是只重复官方简介。',
  },
  {
    slug: 'why-and-when',
    titles: { en: 'Why and When to Use It', zh: '为什么与何时选择' },
    question: '为什么会有这个项目，什么时候应该选它，什么时候不该选？',
    intent: '选型、替代方案、采用前判断',
    sections: ['项目出现的背景', '核心优势', '不适合的情况', '与替代方案的边界', '决策清单'],
    sourceNeeds: ['官方介绍', 'README motivation/feature 部分', '竞品文档或对比页'],
    uniqueAngle: '明确写出不推荐使用的情况，帮助读者节省试错成本。',
  },
  {
    slug: 'getting-started',
    titles: { en: 'Getting Started', zh: '快速开始' },
    question: '读者如何从零开始得到一个可验证的结果？',
    intent: '教程、安装、第一条成功路径',
    sections: ['环境要求', '安装命令', '最小可运行示例', '验证结果', '常见失败点'],
    sourceNeeds: ['官方 getting started', 'package manager 文档', 'release notes 的版本要求'],
    uniqueAngle: '把成功标准写清楚：读者知道跑到哪一步才算真的完成。',
  },
  {
    slug: 'core-concepts',
    titles: { en: 'Core Concepts', zh: '核心概念' },
    question: '读者必须先理解哪些概念，才不会误用这个主题？',
    intent: '概念解释、学习路径、心智模型',
    sections: ['核心术语', '概念之间的关系', '最容易误解的点', '与传统方案的差异', '例子映射'],
    sourceNeeds: ['官方概念文档', 'README 架构描述', '源码目录或示例项目'],
    uniqueAngle: '用“读者会怎么误解”来组织概念，而不是照搬官方目录。',
  },
  {
    slug: 'practical-tasks',
    titles: { en: 'Practical Tasks', zh: '常见任务' },
    question: '用户搜索这个主题时，最常见的实际任务有哪些？',
    intent: 'how-to、配置、集成、迁移',
    sections: ['任务列表', '每个任务的入口文档', '关键配置项', '可复用代码片段', '任务之间的依赖'],
    sourceNeeds: ['官方指南', 'examples 目录', '社区 issue 或问答'],
    uniqueAngle: '把零散搜索需求合并成任务地图，让读者能按目标跳转。',
  },
  {
    slug: 'examples',
    titles: { en: 'Examples', zh: '示例' },
    question: '有哪些足够真实、能直接迁移到项目里的例子？',
    intent: '示例、最佳实践、代码片段',
    sections: ['最小示例', '真实项目结构示例', '常见变体', '反例', '扩展方向'],
    sourceNeeds: ['官方 examples', '官方模板', '源码测试或 demo'],
    uniqueAngle: '补足官方示例缺少的上下文：为什么这样写，换场景怎么改。',
  },
  {
    slug: 'troubleshooting',
    titles: { en: 'Troubleshooting', zh: '排错路径' },
    question: '读者最容易在哪里卡住，应该按什么顺序排查？',
    intent: '报错、坑点、调试、兼容性',
    sections: ['常见症状', '优先检查项', '版本与环境问题', '配置问题', '升级与回退路径'],
    sourceNeeds: ['GitHub issues', 'release notes breaking changes', 'Stack Overflow/社区问答'],
    uniqueAngle: '按症状和排查顺序写，而不是堆错误消息。',
  },
  {
    slug: 'alternatives',
    titles: { en: 'Alternatives and Comparisons', zh: '替代方案与对比' },
    question: '它和主要替代方案相比有什么取舍？',
    intent: '对比、选型、迁移',
    sections: ['对比对象', '能力边界', '生态成熟度', '迁移成本', '选择建议'],
    sourceNeeds: ['竞品官方文档', '官方比较页', '社区迁移经验'],
    uniqueAngle: '只比较会影响决策的维度，避免泛泛的功能表。',
  },
  {
    slug: 'resources',
    titles: { en: 'Resources', zh: '资源' },
    question: '读者应该去哪里验证事实、继续学习和追踪变化？',
    intent: '资料汇总、来源透明、后续学习',
    sections: ['官方资料', '源码入口', '版本与变更', '社区讨论', '持续更新建议'],
    sourceNeeds: ['官方文档', '仓库 releases', '社区入口'],
    uniqueAngle: '把资料按用途分类，告诉读者每类资料该用来验证什么。',
  },
];

export function buildTopicPlan({
  topic,
  slug,
  repo,
  officialDocs = [],
  extraSources = [],
  competitors = [],
  serpNotes = [],
  uniqueAngles = [],
} = {}) {
  if (!topic) throw new Error('topic is required.');

  const normalizedRepo = repo ? parseRepoSlug(repo) : null;
  const topicSlug = slug || (normalizedRepo?.slug ?? slugifyTopic(topic));
  const officialSources = [
    ...(normalizedRepo ? officialSourceCandidates(normalizedRepo.fullName) : []),
    ...officialDocs.map((url) => ({ kind: 'official-docs', url, usage: '事实基线与操作步骤' })),
    ...extraSources.map((url) => ({ kind: 'reference', url, usage: '补充事实、例子或背景' })),
  ];

  const routes = {
    enBase: `/en/${topicSlug}/`,
    zhBase: `/zh/${topicSlug}/`,
  };

  const pages = DEFAULT_PAGE_BLUEPRINTS.map((page, index) => ({
    ...page,
    order: index + 1,
    paths: {
      en: joinUrl(routes.enBase, page.slug),
      zh: joinUrl(routes.zhBase, page.slug),
    },
    sourceNeeds: enrichSourceNeeds(page.sourceNeeds, officialSources, competitors),
    uniqueAngle: uniqueAngles[index] || page.uniqueAngle,
  }));

  return {
    version: 1,
    topic,
    slug: topicSlug,
    repo: normalizedRepo?.fullName || '',
    generatedFor: 'human-outline-review',
    routes,
    researchSteps: [
      '尝试 clone 官方仓库；设置时间上限，超时则退回 GitHub API、README、raw 文件和官方文档。',
      '查找官方文档、README、release notes、examples、issues、FAQ、迁移指南和源码示例。',
      '观察中英文搜索需求、SERP 页面类型、竞品页面结构和社区高频问题。',
      '抽取事实并标注来源；竞品只用于识别问题与缺口，不复用表达和结构。',
      '优先制造别人没有的内容：排错路径、边界条件、真实任务地图、反例、版本差异和决策清单。',
    ],
    sourceMap: {
      official: officialSources,
      competitors: competitors.map((url) => ({ kind: 'competitor', url, usage: '识别搜索意图、页面缺口和对比维度' })),
      serp: serpNotes.map((note) => ({ note, usage: '确定页面要回答的问题' })),
    },
    pages,
    reviewQuestions: [
      '这些页面是否覆盖了你真正想争取的搜索需求？',
      '是否有页面太薄，应该合并或删除？',
      '是否缺少必须人工确认的官方来源？',
      '差异化内容是否足够具体，还是仍然像官方文档摘要？',
    ],
  };
}

export function renderTopicOutlineReport(plan) {
  return [
    `# ${plan.topic} 选题大纲报告`,
    '',
    '## 研究流程',
    '',
    ...plan.researchSteps.map((step) => `- ${step}`),
    '',
    '## URL 组织',
    '',
    `- 英文入口：\`${plan.routes.enBase}\``,
    `- 中文入口：\`${plan.routes.zhBase}\``,
    '- 页面 slug 在中英文之间保持一致，便于 hreflang、canonical 和后续维护。',
    '',
    '## 来源地图',
    '',
    '### 官方来源',
    '',
    ...renderSources(plan.sourceMap.official),
    '',
    '### 竞品与 SERP 观察',
    '',
    ...renderSources(plan.sourceMap.competitors),
    ...plan.sourceMap.serp.map((item) => `- ${item.note}（用途：${item.usage}）`),
    '',
    '## 页面与 URL 设计',
    '',
    ...plan.pages.flatMap(renderPage),
    '',
    '## 人工审核问题',
    '',
    ...plan.reviewQuestions.map((question) => `- ${question}`),
    '',
  ].join('\n');
}

function renderPage(page) {
  return [
    `### ${page.order}. ${page.titles.zh} / ${page.titles.en}`,
    '',
    `- 英文 URL：\`${page.paths.en}\``,
    `- 中文 URL：\`${page.paths.zh}\``,
    `- 搜索意图：${page.intent}`,
    `- 要回答的问题：${page.question}`,
    `- 页面组织：${page.sections.join('；')}`,
    `- 来源需求：${page.sourceNeeds.join('；')}`,
    `- 差异化内容：${page.uniqueAngle}`,
    '',
  ];
}

function renderSources(sources) {
  if (sources.length === 0) return ['- 暂无，agent 研究阶段需要补充。'];
  return sources.map((source) => `- ${source.url || '待补充'}（${source.kind}；用途：${source.usage}）`);
}

function enrichSourceNeeds(sourceNeeds, officialSources, competitors) {
  const concrete = officialSources
    .filter((source) => source.url)
    .slice(0, 3)
    .map((source) => `${source.kind}: ${source.url}`);
  const competitorNeed = competitors.length > 0 ? [`竞品页面: ${competitors[0]}`] : [];
  return [...sourceNeeds, ...concrete, ...competitorNeed];
}

function joinUrl(base, slug) {
  if (slug === 'index') return base;
  return `${base}${slug}/`;
}
