---
title: "Integrations"
description: "Extend Hermes with MCP, API server, OpenAI-compatible frontends, browser tools, media tools, and external systems while keeping contracts, permissions, and logs visible."
---

# Integrations

Hermes can connect to more systems through MCP, API server, OpenAI-compatible frontends, browser tools, media tools, and provider gateways. Integrations are valuable because they let Hermes use existing tools. They are risky because they expand what a local agent can affect.

A simple rule: understand the local workflow before exposing it as an interface.

## Write the contract first

Whether the integration is an MCP server, API server, webhook, or browser tool, answer these questions first:

| Question | Impact |
| --- | --- |
| Who calls it | Authentication, authorization, audit. |
| What can be called | Tool list, input schema, output format. |
| How long it may run | Timeout, queue, concurrency, cost. |
| What it can access | Files, network, credentials, external APIs. |
| What happens on failure | Retry, rollback, user-visible error. |
| How it is observed | Logs, traces, metrics, request IDs. |

If these answers are unclear, integration will only amplify uncertainty.

## MCP is for existing tool servers

MCP is useful for connecting Hermes to external tool servers: internal queries, knowledge bases, code indexes, browser automation, or business tools. The key question is not whether Hermes can connect, but which tools it sees after connecting.

Control:

- Expose only the tools needed for the current task.
- Document tool inputs and outputs.
- Add human confirmation to high-risk tools.
- Separate read-only tools from write tools.
- Record server version, source, and auth method.

Do not expose a large MCP server wholesale just because discovery works. The wider the tool surface, the higher the misuse and debugging cost.

## API server should wrap known workflows

Hermes API server and OpenAI-compatible behavior can support existing frontends, internal platforms, or automation systems. It should not mean exposing the whole local agent directly to the network.

A better pattern is to wrap a small number of known workflows:

```text
POST /draft-release-notes
Input: repo, version, merged_pr_range
Output: markdown draft
Tools: read-only GitHub access
Human step: approve before publish
```

The more specific the interface, the easier it is to narrow permissions and explain failures.

## Browser and web tools need prompt-injection discipline

Web pages and browser state often mix facts, ads, user content, stale instructions, and malicious instructions. When Hermes reads a page, the page is evidence, not a system instruction.

For research or documentation, keep:

- URL.
- Access date.
- Which facts came from which page.
- Which conclusions are inferences.
- What was not verified.

For logged-in pages, also consider cookies, account permissions, and accidental clicks. When a read-only API can answer the question, prefer it over a logged-in browser for high-impact actions.

## Media tools are for observation, not final review

Vision, image generation, TTS, voice, and transcription let Hermes work with screenshots, audio, and multimedia inputs. Media models can misread details, and generated content may have copyright, brand, or factual issues.

For high-impact work, keep:

- Original screenshot, audio, or image path.
- Transcript or recognition output.
- Generation prompt and model.
- Human confirmation record.

Media tools are useful for drafts and observation. They should not replace final review.

## Safer defaults

| Scenario | Default recommendation |
| --- | --- |
| Internal tool lookup | Start read-only. |
| File or code writes | Limit directories and keep diffs. |
| Network API calls | Add timeout, budget, and logs. |
| Sending messages | Draft first, send after human confirmation. |
| Production change | Do not let the agent execute directly without strict approval and rollback. |

## Related pages

- [Tools and Toolsets](/en/hermes/tools-and-toolsets/)
- [Automation and Collaboration](/en/hermes/automation/)
- [Security Model](/en/hermes/security-model/)
- [Architecture](/en/hermes/architecture/)

## References

- MCP: https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp
- API Server: https://hermes-agent.nousresearch.com/docs/user-guide/features/api-server
- Browser: https://hermes-agent.nousresearch.com/docs/user-guide/features/browser
- Vision: https://hermes-agent.nousresearch.com/docs/user-guide/features/vision
- Integrations overview: https://hermes-agent.nousresearch.com/docs/integrations/index
