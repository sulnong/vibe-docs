import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { buildOutline } from './outline.js';

export async function writeDraftTopic({ docsRoot = 'src/content/docs', topic }) {
  const outline = buildOutline({
    topicSlug: topic.slug,
    title: topic.title || topic.name || topic.slug,
    repo: topic.repo,
    sources: topic.sources || [`https://github.com/${topic.repo}`],
  });

  for (const locale of ['en', 'zh']) {
    const dir = join(docsRoot, locale, topic.slug);
    await mkdir(dir, { recursive: true });
    const pages = locale === 'en' ? outline.pages : outline.translations.zh;
    for (const page of pages) {
      await writeFile(join(dir, `${page.slug}.md`), renderPage({ locale, topic, page }));
    }
  }
  return outline;
}

function renderPage({ locale, topic, page }) {
  const source = `https://github.com/${topic.repo}`;
  const title = page.title;
  const userQuestion = page.userQuestion || 'What should a developer know before using this project?';
  const description =
    locale === 'en'
      ? `${title} for ${topic.title || topic.slug}: a source-linked answer to a real developer question.`
      : `${topic.title || topic.slug} 的${title}：围绕真实开发者问题整理的、有来源链接、可继续扩展的中文指南。`;

  if (locale === 'zh') {
    return `---
title: ${yamlString(title)}
description: ${yamlString(description)}
---

# ${title}

这篇页面围绕 \`${topic.repo}\` 整理，先回答一个真实问题：${userQuestion} 正文应保留统一事实基线，并在发布前结合官方文档、README、release notes、示例和社区问题复核关键步骤。

## Core answer

${topic.title || topic.slug} 的内容应从用户任务出发，而不是复刻官方目录。先说明它解决的问题、适合的读者、最小可行工作流，再把安装、配置、概念和示例链接到官方来源。

## Limitations

发布前必须确认命令、版本要求、配置字段、限制条件和替代方案都来自可追溯来源。竞品站只能用于识别用户意图、遗漏点和常见误区，不能复用原文、结构或独特表达。

## Next steps

补充官方 docs、README、release notes、示例项目、issue/FAQ 和中文搜索问题。若中文搜索结果显示读者更关心替代品、报错或部署场景，应在不偏离事实基线的前提下增加本地化段落。

## Sources

- GitHub repository: ${source}
`;
  }

  return `---
title: ${yamlString(title)}
description: ${yamlString(description)}
---

# ${title}

This page answers one real developer question about \`${topic.repo}\`: ${userQuestion} It keeps the factual baseline tied to official sources so the page can be reviewed, localized, and expanded without drifting away from source material.

## Core answer

Start from the user task, not from a mirrored official table of contents. Explain the problem this project solves, the reader it fits, the smallest useful workflow, and the official places to verify installation, configuration, concepts, and examples.

## Limitations

Before publication, confirm commands, version requirements, configuration fields, limitations, and alternatives against traceable sources. Competitor pages may identify intent, gaps, and common mistakes, but their wording, structure, and unique expression must not be reused.

## Next steps

Expand this page with official docs, README details, release notes, examples, issue/FAQ signals, and locale-specific search questions. If search results show tutorial, comparison, or troubleshooting intent, answer those concrete queries with source-linked facts.

## Sources

- GitHub repository: ${source}
`;
}

function yamlString(value) {
  return JSON.stringify(String(value));
}
