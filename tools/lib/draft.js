import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { buildTopicPlan } from './topic-plan.js';

export async function writeDraftTopic({ docsRoot = 'src/content/docs', topic }) {
  const plan = buildTopicPlan({
    topic: topic.title || topic.name || topic.slug,
    slug: topic.slug,
    repo: topic.repo,
    officialDocs: topic.officialDocs || topic.sources || [],
    competitors: topic.competitors || [],
  });

  for (const locale of ['en', 'zh']) {
    const dir = join(docsRoot, locale, plan.slug);
    await mkdir(dir, { recursive: true });
    for (const page of plan.pages) {
      await writeFile(join(dir, `${page.slug}.md`), renderPage({ locale, topic, page }));
    }
  }
  return plan;
}

function renderPage({ locale, topic, page }) {
  const source = `https://github.com/${topic.repo}`;
  const title = locale === 'en' ? page.titles.en : page.titles.zh;
  const description =
    locale === 'en'
      ? `${title} for ${topic.title || topic.slug}: a source-linked guide generated for review before publication.`
      : `${topic.title || topic.slug} 的${title}：面向发布前审核的、有来源链接、可本地化扩展、适合搜索收录的双语文档页面。`;

  if (locale === 'zh') {
    return `---
title: ${yamlString(title)}
description: ${yamlString(description)}
---

# ${title}

这篇页面围绕 \`${topic.repo}\` 整理，目标是回答：${page.question} 正文保留统一事实基线，发布前需要结合官方文档、README、release notes、examples、issues 和 SERP 观察复核关键步骤。

## 页面要覆盖什么

- 搜索意图：${page.intent}
- 页面组织：${page.sections.join('；')}
- 差异化内容：${page.uniqueAngle}

## 审核重点

发布前请确认事实、安装命令、版本要求、配置字段、限制条件和排错路径都来自可追踪来源。若搜索结果显示用户更关心替代品、教程或中文问题，应在本页补充相应段落。

## Sources

- GitHub repository: ${source}
`;
  }

  return `---
title: ${yamlString(title)}
description: ${yamlString(description)}
---

# ${title}

This page summarizes \`${topic.repo}\` for developers who need a source-linked answer to: ${page.question} It keeps the factual baseline tied to official material so the page can be reviewed, localized, and expanded without drifting away from source material.

## Coverage

- Search intent: ${page.intent}
- Page structure: ${page.sections.join('; ')}
- Unique angle: ${page.uniqueAngle}

## Review checklist

Before publication, confirm facts, installation commands, version requirements, configuration fields, limitations, examples, and troubleshooting paths against official sources. If SERP review shows tutorial, comparison, or troubleshooting intent, expand this page with those concrete queries.

## Sources

- GitHub repository: ${source}
`;
}

function yamlString(value) {
  return JSON.stringify(String(value));
}
