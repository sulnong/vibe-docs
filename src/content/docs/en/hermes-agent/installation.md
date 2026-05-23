---
title: "Installation and Version Baseline"
description: "Install Hermes Agent, confirm Python and package requirements, and keep the first environment easy to inspect."
---

# Installation and Version Baseline

## Create a clean environment

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
command -v hermes
hermes --help
```

The current package metadata checked for this site lists hermes-agent 0.14.0 with Python >=3.11. Recheck before serious use, and record the package version, provider, operating system, and first successful command.

## Keep setup problems separated

- Prove the command works before debugging provider keys.
- Do not mix tools, memory, gateways, and deployment into the install problem.
- Review installer source before using it on production machines.

## A clean install is easier to debug

Use a fresh shell and a small environment. If install, provider auth, and workflow code all change at once, the first failure has too many possible causes. Keep the first session boring: command visible, package version visible, model call visible.

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
command -v hermes
hermes --help
```

| After install | Why it matters |
| --- | --- |
| Package version is recorded | You know what future behavior is being compared against. |
| Python version is recorded | Many failures are environment mismatch, not framework behavior. |
| First command is recorded | Another person can reproduce the starting point. |
| Provider key is not in code | Examples stay safe to commit. |

## Related pages

- [First Reliable Run](/en/hermes-agent/first-run/)
- [Providers and Models](/en/hermes-agent/providers-and-models/)
- [Tools and Toolsets](/en/hermes-agent/tools-and-toolsets/)
- [Skills System](/en/hermes-agent/skills/)

## References

- Installation: https://hermes-agent.nousresearch.com/docs/getting-started/installation
- PyPI package: https://pypi.org/project/hermes-agent/
