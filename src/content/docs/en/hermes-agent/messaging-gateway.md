---
title: "Messaging Gateway"
description: "Connect Hermes to chat platforms without losing track of authorization, sessions, secrets, and recovery."
---

# Messaging Gateway

## Remote access changes risk

Add this capability only after the local path is reliable. Each entry point or task needs an owner, permission boundary, output shape, logs, and a stop path.

| Concern | Question |
| --- | --- |
| Authorization | Who can trigger it? |
| Scope | What can it read or write? |
| Output | Who receives the result? |
| Stop path | How can it be disabled quickly? |

## Remote access changes the risk model

A local terminal agent is reachable by the person at the keyboard. A messaging gateway can be reachable by channels, teams, bots, or webhooks. Authorization and session routing become part of the product.

| Concern | Question to answer |
| --- | --- |
| Authorized users | Who can talk to the agent? |
| Session routing | Which conversation owns the state? |
| Secrets | Where are bot tokens stored and rotated? |
| Tool scope | Can remote users trigger file or command actions? |
| Shutdown | How can the gateway be disabled quickly? |

## Start with read-only usefulness

A bot that answers status questions is much safer than one that edits repositories or calls production APIs. Add mutation only after logs, ownership, and review are clear.

## Related pages

- [Installation](/en/hermes-agent/installation/)
- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)

## References

- Official docs: https://hermes-agent.nousresearch.com/docs/
- Security: https://hermes-agent.nousresearch.com/docs/user-guide/security
