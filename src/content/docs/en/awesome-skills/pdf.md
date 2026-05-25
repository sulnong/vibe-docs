---
title: "PDF Skill"
description: "PDF Skill: Extracts text, creates PDFs, and handles PDF forms and review tasks."
---

# PDF Skill

Extracts text, creates PDFs, and handles PDF forms and review tasks.

This page helps you decide whether to install or invoke `anthropics/pdf`, and how to keep the first use bounded.

## Quick facts

| Field | Value |
| --- | --- |
| Skill | `anthropics/pdf` |
| Category | [Documents and Knowledge Work](/en/awesome-skills/categories/documents-knowledge/) |
| Directory listing | https://officialskills.sh/anthropics/skills/pdf |
| Primary source | https://officialskills.sh/anthropics/skills/pdf |
| Main dependency | Target file, workspace, document source, or connected knowledge system |
| Best first use | Start with one file or one knowledge capture flow and inspect the produced artifact. |

## Setup and installation

Start from the listing page: https://officialskills.sh/anthropics/skills/pdf

If the page provides an install command, copy the command from the listing instead of reconstructing it from the URL. If your agent client supports GitHub skill paths, use the primary source: https://officialskills.sh/anthropics/skills/pdf

After installing, read the original `SKILL.md` or listing page before use. Confirm the trigger, dependencies, guardrails, and expected output instead of relying on the skill name alone.

## What this skill does

Extracts text, creates PDFs, and handles PDF forms and review tasks.

In the Documents and Knowledge Work category, the value of this skill is not that the agent “knows more.” It gives the agent a narrower workflow, clearer checks, and safer boundaries for a specific class of work.

## Questions this page helps answer

- Whether `anthropics/pdf` is better than a one-off prompt for this task.
- What context, account, file, URL, or runtime should be ready before the first invocation.
- Whether the output can be reviewed through screenshots, logs, diffs, source links, command records, or explicit reasoning.
- Which nearby skill to check if this one is not the right fit.

## When to use it

- Handle document formats that need layout or metadata awareness.
- Turn conversations, research, or meetings into structured knowledge.
- Keep source links and review notes separate from public-facing output.

## When not to use it

- The document contains private data that should not be sent to the agent environment.
- The expected output requires legal, financial, or compliance approval.
- The task is only plain-text editing and does not need a format-specific workflow.

## Decision checklist

| Check | Guidance |
| --- | --- |
| Is the task narrow enough? | If the task can be described with one stable trigger, it is a better fit. If it is still broad, split it first. |
| Are the dependencies ready? | Target file, workspace, document source, or connected knowledge system. If not, add context before asking the agent to infer missing details. |
| Smallest first run | Start with one file or one knowledge capture flow and inspect the produced artifact. |
| How to review the result | Ask for reviewable evidence: file paths, commands, screenshots, audit output, source links, or the reasoning behind key decisions. |
| When to stop | Switch back to human review when the task touches production resources, sensitive data, account permissions, or irreversible actions. |

## Compared with nearby skills

- If the task is closer to "Creates, edits, and analyzes Microsoft Word documents.", check [DOCX Skill](/en/awesome-skills/docx/) first; use this page when the focus remains "Extracts text, creates PDFs, and handles PDF forms and review tasks.".
- If the task is closer to "Creates, edits, and analyzes PowerPoint presentations.", check [PPTX Skill](/en/awesome-skills/pptx/) first; use this page when the focus remains "Extracts text, creates PDFs, and handles PDF forms and review tasks.".
- If the task is closer to "Creates, edits, and analyzes Excel spreadsheets.", check [XLSX Skill](/en/awesome-skills/xlsx/) first; use this page when the focus remains "Extracts text, creates PDFs, and handles PDF forms and review tasks.".
- If the task is closer to "Provides authoritative guidance from OpenAI developer documentation.", check [OpenAI Docs Skill](/en/awesome-skills/openai-docs/) first; use this page when the focus remains "Extracts text, creates PDFs, and handles PDF forms and review tasks.".

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

- [DOCX Skill](/en/awesome-skills/docx/) - Creates, edits, and analyzes Microsoft Word documents.
- [PPTX Skill](/en/awesome-skills/pptx/) - Creates, edits, and analyzes PowerPoint presentations.
- [XLSX Skill](/en/awesome-skills/xlsx/) - Creates, edits, and analyzes Excel spreadsheets.
- [OpenAI Docs Skill](/en/awesome-skills/openai-docs/) - Provides authoritative guidance from OpenAI developer documentation.

## References

- Directory listing: https://officialskills.sh/anthropics/skills/pdf
- Primary source: https://officialskills.sh/anthropics/skills/pdf
- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills
