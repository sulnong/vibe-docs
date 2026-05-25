#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import {
  awesomeSkills,
  awesomeSkillsCategories,
  skillsForCategory,
} from '../src/data/awesome-skills-catalog.mjs';

const docsRoot = 'src/content/docs';
const topicSlug = 'awesome-skills';
const categoryByKey = new Map(awesomeSkillsCategories.map((category) => [category.key, category]));

for (const locale of ['en', 'zh']) {
  const dir = join(docsRoot, locale, topicSlug);
  const categoriesDir = join(dir, 'categories');
  await mkdir(dir, { recursive: true });
  await mkdir(categoriesDir, { recursive: true });
  await writeFile(join(dir, 'index.md'), renderIndex(locale));
  for (const category of awesomeSkillsCategories) {
    await writeFile(join(categoriesDir, `${category.key}.md`), renderCategoryPage(category, locale));
  }
  for (const skill of awesomeSkills) {
    if (skill.slug === 'playwright') continue;
    await writeFile(join(dir, `${skill.slug}.md`), renderSkillPage(skill, locale));
  }
}

await mkdir('content-plans/awesome-skills', { recursive: true });
await writeFile('content-plans/awesome-skills/first-50-skills.md', renderFirst50Plan());

console.log(`generated ${awesomeSkillsCategories.length} category pages and ${awesomeSkills.length} skill pages per locale`);

function renderIndex(locale) {
  if (locale === 'zh') {
    return `---
title: "Awesome Skills"
description: "按真实任务分类整理 50 个 agent skills，帮助你判断、安装和使用。"
---

# Awesome Skills

Awesome Skills 是一个面向 agent skills 的主题指南。skills 池来自 VoltAgent Awesome Agent Skills 等公开收录；单个 skill 页面参考 officialskills.sh 的页面形态，再补上目录站通常缺少的一层：每个 skill 适合做什么、依赖什么、怎么开始、边界在哪里，以及什么时候应该换别的方案。

第一轮收录 50 个 skill。它们按真实任务分类，而不是按发布方机械分组。

## 如何使用这个目录

先从分类进入，再打开具体 skill 页面。每个页面都会给出来源、安装入口、适用场景、不适合场景、第一次工作流、使用边界和相似 skill。

${renderCategorySections(locale)}

## 选择 skill 前先问

- 这个任务是否会重复出现？
- skill 的触发条件是否清楚？
- 它是否需要 CLI、浏览器、API key、账号或本地运行时？
- 它明确不做什么？
- 来源是官方、curated、社区还是实验性？

## 参考资料

- VoltAgent Awesome Agent Skills：https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh：https://officialskills.sh/
- Agent Skills 标准：https://agentskills.io/
- OpenAI skills 仓库：https://github.com/openai/skills
`;
  }

  return `---
title: "Awesome Skills"
description: "A curated guide to 50 practical agent skills, organized by the work they help agents do."
---

# Awesome Skills

Awesome Skills is a topic guide for agent skills that are worth understanding before you install them. The skill pool starts from public collections such as VoltAgent's Awesome Agent Skills. Individual pages follow the useful shape of officialskills.sh pages, then add the missing layer: what each skill is good for, where it fits, what it needs, and when you should pick something else.

The first round covers 50 skills. They are grouped by practical work, not only by publisher.

## How to use this directory

Start from a category, then open the specific skill page. Each page includes source links, installation entry points, when to use it, when not to use it, a first workflow, guardrails, and nearby skills.

${renderCategorySections(locale)}

## Before you choose a skill

- Does this task repeat often enough to deserve a skill?
- Is the trigger clear?
- Does it need a CLI, browser, API key, account, or local runtime?
- What does it explicitly avoid?
- Is the source official, curated, community maintained, or experimental?

## Sources

- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh: https://officialskills.sh/
- Agent Skills standard: https://agentskills.io/
- OpenAI skills repository: https://github.com/openai/skills
`;
}

function renderCategorySections(locale) {
  return awesomeSkillsCategories
    .map((category) => {
      const heading = locale === 'zh' ? category.label.zh : category.label.en;
      const summary = locale === 'zh' ? category.summary.zh : category.summary.en;
      const lines = skillsForCategory(category.key)
        .map((skill) => `- [${skill.title}](${skillUrl(skill, locale)}) - ${skill.summary[locale]}`)
        .join('\n');
      return `## [${heading}](${categoryUrl(category, locale)})

${summary}

${lines}`;
    })
    .join('\n\n');
}

function renderCategoryPage(category, locale) {
  const skills = skillsForCategory(category.key);
  const title = locale === 'zh' ? `${category.label.zh} Skills` : `${category.label.en} Skills`;
  const description =
    locale === 'zh'
      ? `${category.label.zh}分类下的 ${skills.length} 个 agent skills，用于判断、安装和比较。`
      : `${skills.length} agent skills for ${category.label.en.toLowerCase()}, with practical selection guidance.`;
  const relatedCategories = awesomeSkillsCategories
    .filter((item) => item.key !== category.key)
    .slice(0, 4);

  if (locale === 'zh') {
    return `---
title: ${yaml(title)}
description: ${yaml(description)}
---

# ${title}

${category.summary.zh}

这一类页面适合在你已经知道大方向、但还不确定该选哪个 skill 时阅读。先从真实任务出发，再看 skill 的来源、依赖、第一次运行方式和退出条件。

## 本分类包含的 skills

| Skill | 适合处理 | 来源 |
| --- | --- | --- |
${skills.map((skill) => `| [${skill.title}](${skillUrl(skill, locale)}) | ${skill.summary.zh} | ${sourceLabel(skill)} |`).join('\n')}

## 如何选择

${bullets(category.useCases.zh)}

## 先不要用的情况

${bullets(category.avoidCases.zh)}

## 决策表

| 判断点 | 建议 |
| --- | --- |
| 主要依赖 | ${category.dependency.zh} |
| 第一次尝试 | ${category.firstUse.zh} |
| 最小安全范围 | 先选一个低风险样例、预览环境、小文件或只读目标，确认输出能被人工复核。 |
| 何时换方案 | 如果任务超出这个分类的真实边界，先回到 [Awesome Skills 概览](/zh/awesome-skills/) 选择更接近的分类。 |

## 阅读顺序

${skills.map((skill, index) => `${index + 1}. [${skill.title}](${skillUrl(skill, locale)})：${skill.summary.zh}`).join('\n')}

## 相邻分类

${relatedCategories.map((item) => `- [${item.label.zh}](${categoryUrl(item, locale)}) - ${item.summary.zh}`).join('\n')}

## 参考资料

- VoltAgent Awesome Agent Skills：https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh：https://officialskills.sh/
- Agent Skills 标准：https://agentskills.io/
`;
  }

  return `---
title: ${yaml(title)}
description: ${yaml(description)}
---

# ${title}

${category.summary.en}

Use this category when you know the broad job but still need to decide which skill is worth invoking. Start from the task, then check the source, dependency, first run, and exit conditions.

## Skills in this category

| Skill | Best for | Source |
| --- | --- | --- |
${skills.map((skill) => `| [${skill.title}](${skillUrl(skill, locale)}) | ${skill.summary.en} | ${sourceLabel(skill)} |`).join('\n')}

## How to choose

${bullets(category.useCases.en)}

## Avoid this category when

${bullets(category.avoidCases.en)}

## Decision table

| Check | Guidance |
| --- | --- |
| Main dependency | ${category.dependency.en} |
| Best first use | ${category.firstUse.en} |
| Smallest safe scope | Start with a low-risk example, preview environment, small file, or read-only target so the result can be reviewed. |
| When to switch | If the task falls outside this category's real boundary, go back to the [Awesome Skills overview](/en/awesome-skills/) and choose a closer category. |

## Reading order

${skills.map((skill, index) => `${index + 1}. [${skill.title}](${skillUrl(skill, locale)}) - ${skill.summary.en}`).join('\n')}

## Nearby categories

${relatedCategories.map((item) => `- [${item.label.en}](${categoryUrl(item, locale)}) - ${item.summary.en}`).join('\n')}

## Sources

- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
- officialskills.sh: https://officialskills.sh/
- Agent Skills standard: https://agentskills.io/
`;
}

function renderSkillPage(skill, locale) {
  const category = categoryByKey.get(skill.categoryKey);
  const related = skillsForCategory(skill.categoryKey)
    .filter((item) => item.slug !== skill.slug)
    .slice(0, 4);
  const title = skill.title;

  if (locale === 'zh') {
    return `---
title: ${yaml(title)}
description: ${yaml(`${title}：${skill.summary.zh}`)}
---

# ${title}

${skill.summary.zh}

这个页面帮助你判断是否应该安装或调用 \`${skill.owner}/${skill.name}\`，以及第一次使用时应该怎样控制范围。

## 快速信息

| 字段 | 内容 |
| --- | --- |
| Skill | \`${skill.owner}/${skill.name}\` |
| 分类 | [${category.label.zh}](${categoryUrl(category, locale)}) |
| 目录页 | ${skill.listingUrl} |
| 主要来源 | ${skill.sourceUrl} |
| 主要依赖 | ${category.dependency.zh} |
| 第一次尝试 | ${category.firstUse.zh} |

## 安装与设置

${renderInstall(skill, 'zh')}

安装后先阅读原始 \`SKILL.md\` 或目录页说明，确认触发条件、依赖、禁止事项和输出形式。不要只因为名称匹配就让 agent 自动使用它。

## 这个 skill 做什么

${skill.summary.zh}

放在「${category.label.zh}」这一类里，它的价值不是替 agent “多知道一点”，而是让 agent 在特定任务上遵守更稳定的流程、检查点和边界。

## 这页帮你判断什么

- \`${skill.owner}/${skill.name}\` 是否比临时提示词更适合当前任务。
- 第一次调用时应该准备哪些上下文、账号、文件、URL 或运行环境。
- 输出能否被人工复核，是否需要截图、日志、diff、来源链接或命令记录。
- 如果它不合适，应该转向同分类中的哪个相邻 skill。

## 什么时候使用

${bullets(category.useCases.zh)}

## 什么时候不要使用

${bullets(category.avoidCases.zh)}

## 决策清单

| 判断 | 建议 |
| --- | --- |
| 任务是否足够窄 | 如果任务可以用一句稳定触发条件描述，就适合交给这个 skill；如果仍然很发散，先拆小。 |
| 是否具备依赖 | ${category.dependency.zh}。缺少依赖时，先补上下文，不要让 agent 猜测。 |
| 最小试运行 | ${category.firstUse.zh} |
| 输出如何验收 | 要求 agent 留下可复核证据，例如文件路径、命令、截图、审计结果、来源链接或关键判断依据。 |
| 什么时候停止 | 一旦任务涉及生产资源、敏感数据、账号权限或不可逆操作，就切回人工确认。 |
 
## 与相邻 skill 对比

${renderRelatedComparison(skill, related, locale)}

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

${related.length > 0 ? related.map((item) => `- [${item.title}](${skillUrl(item, locale)}) - ${item.summary.zh}`).join('\n') : '- 当前分类暂无相似 skill。'}

## 参考资料

- 目录页：${skill.listingUrl}
- 主要来源：${skill.sourceUrl}
- VoltAgent Awesome Agent Skills：https://github.com/VoltAgent/awesome-agent-skills
`;
  }

  return `---
title: ${yaml(title)}
description: ${yaml(`${title}: ${skill.summary.en}`)}
---

# ${title}

${skill.summary.en}

This page helps you decide whether to install or invoke \`${skill.owner}/${skill.name}\`, and how to keep the first use bounded.

## Quick facts

| Field | Value |
| --- | --- |
| Skill | \`${skill.owner}/${skill.name}\` |
| Category | [${category.label.en}](${categoryUrl(category, locale)}) |
| Directory listing | ${skill.listingUrl} |
| Primary source | ${skill.sourceUrl} |
| Main dependency | ${category.dependency.en} |
| Best first use | ${category.firstUse.en} |

## Setup and installation

${renderInstall(skill, 'en')}

After installing, read the original \`SKILL.md\` or listing page before use. Confirm the trigger, dependencies, guardrails, and expected output instead of relying on the skill name alone.

## What this skill does

${skill.summary.en}

In the ${category.label.en} category, the value of this skill is not that the agent “knows more.” It gives the agent a narrower workflow, clearer checks, and safer boundaries for a specific class of work.

## Questions this page helps answer

- Whether \`${skill.owner}/${skill.name}\` is better than a one-off prompt for this task.
- What context, account, file, URL, or runtime should be ready before the first invocation.
- Whether the output can be reviewed through screenshots, logs, diffs, source links, command records, or explicit reasoning.
- Which nearby skill to check if this one is not the right fit.

## When to use it

${bullets(category.useCases.en)}

## When not to use it

${bullets(category.avoidCases.en)}

## Decision checklist

| Check | Guidance |
| --- | --- |
| Is the task narrow enough? | If the task can be described with one stable trigger, it is a better fit. If it is still broad, split it first. |
| Are the dependencies ready? | ${category.dependency.en}. If not, add context before asking the agent to infer missing details. |
| Smallest first run | ${category.firstUse.en} |
| How to review the result | Ask for reviewable evidence: file paths, commands, screenshots, audit output, source links, or the reasoning behind key decisions. |
| When to stop | Switch back to human review when the task touches production resources, sensitive data, account permissions, or irreversible actions. |

## Compared with nearby skills

${renderRelatedComparison(skill, related, locale)}

## First workflow to try

1. Open the listing or source directory and confirm this is the skill you meant to use.
2. Read the trigger and guardrails.
3. Run it on a low-risk example, preview environment, or small file.
4. Check whether the output is traceable to sources, commands, or file changes.
5. Only then use it on a larger task.

## Guardrails

- Do not turn temporary task constraints into permanent skill behavior.
- Do not let the skill handle accounts, production resources, payments, publishing, or merging unless the workflow has a review point.
- If the skill depends on an external service, confirm credentials, quotas, privacy, and output location first.
- If the result will affect public docs or production code, verify facts against the original source.

## Similar skills

${related.length > 0 ? related.map((item) => `- [${item.title}](${skillUrl(item, locale)}) - ${item.summary.en}`).join('\n') : '- No similar skill is listed in this first batch.'}

## References

- Directory listing: ${skill.listingUrl}
- Primary source: ${skill.sourceUrl}
- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
`;
}

function renderInstall(skill, locale) {
  if (skill.installCommand) {
    if (locale === 'zh') {
      return `目录页给出的安装入口是：

\`\`\`bash
${skill.installCommand}
\`\`\`

如果你的 agent 客户端支持直接使用 GitHub skill 路径，也可以从主要来源进入：${skill.sourceUrl}`;
    }
    return `The listing shows this install entry:

\`\`\`bash
${skill.installCommand}
\`\`\`

If your agent client supports GitHub skill paths directly, you can also start from the primary source: ${skill.sourceUrl}`;
  }

  if (locale === 'zh') {
    return `从目录页开始：${skill.listingUrl}

如果页面提供安装命令，优先复制目录页上的命令，不要根据 URL 自行拼接。若你的 agent 客户端支持 GitHub skill 路径，可以使用主要来源：${skill.sourceUrl}`;
  }

  return `Start from the listing page: ${skill.listingUrl}

If the page provides an install command, copy the command from the listing instead of reconstructing it from the URL. If your agent client supports GitHub skill paths, use the primary source: ${skill.sourceUrl}`;
}

function renderRelatedComparison(skill, related, locale) {
  if (related.length === 0) {
    return locale === 'zh'
      ? '当前第一批清单里没有同分类的相邻 skill。'
      : 'No nearby skill is listed in this first batch.';
  }

  if (locale === 'zh') {
    return related
      .map(
        (item) =>
          `- 如果你的任务更接近「${item.summary.zh}」，优先看 [${item.title}](${skillUrl(item, locale)})；如果重点仍是「${skill.summary.zh}」，再使用当前页面。`,
      )
      .join('\n');
  }

  return related
    .map(
      (item) =>
        `- If the task is closer to "${item.summary.en}", check [${item.title}](${skillUrl(item, locale)}) first; use this page when the focus remains "${skill.summary.en}".`,
    )
    .join('\n');
}

function renderFirst50Plan() {
  const categorySections = awesomeSkillsCategories
    .map((category) => {
      const skills = skillsForCategory(category.key)
        .map((skill) => `- \`${skill.slug}\`：${skill.owner}/${skill.name}；${skill.summary.zh}；来源：${skill.listingUrl}`)
        .join('\n');
      return `## ${category.label.zh}

${category.summary.zh}

${skills}`;
    })
    .join('\n\n');

  return `# Awesome Skills 第一轮 50 个页面清单

## 选择原则

- 优先选择 officialskills.sh 和 VoltAgent Awesome Agent Skills 中来源清楚的 skills。
- 覆盖浏览器、前端、部署、安全、文档、数据、AI/ML、工作流八类高搜索价值任务。
- 每个 skill 页面都按同一信息架构生成：快速信息、安装入口、用途、适用/不适用场景、第一次工作流、边界、相似 skill 和参考资料。
- 第一轮目标是形成可索引、可内链、可扩展的页面骨架；后续再逐页补充更深的真实案例、错误信息和对比。

${categorySections}
`;
}

function skillUrl(skill, locale) {
  return `/${locale}/awesome-skills/${skill.slug}/`;
}

function categoryUrl(category, locale) {
  return `/${locale}/awesome-skills/categories/${category.key}/`;
}

function sourceLabel(skill) {
  try {
    return new URL(skill.listingUrl).hostname.replace(/^www\./, '');
  } catch {
    return skill.owner;
  }
}

function bullets(items) {
  return items.map((item) => `- ${item}`).join('\n');
}

function yaml(value) {
  return JSON.stringify(value);
}
