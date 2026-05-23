---
title: "Installation and Environment"
description: "Install Swarms in a clean Python environment, verify package metadata, and prepare provider keys deliberately."
---

# Installation and Environment

## Create a clean environment

```bash
python3 --version
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install swarms
python -m pip show swarms
```

The current package metadata checked for this site lists swarms 12.0.0 with Python >=3.10,<4.0. Recheck before serious use, and record the package version, provider, operating system, and first successful command.

## Keep setup problems separated

- Prove the command works before debugging provider keys.
- Do not mix tools, memory, gateways, and deployment into the install problem.
- Review installer source before using it on production machines.

## A clean install is easier to debug

Use a fresh shell and a small environment. If install, provider auth, and workflow code all change at once, the first failure has too many possible causes. Keep the first session boring: command visible, package version visible, model call visible.

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install swarms
python -m pip show swarms
```

| After install | Why it matters |
| --- | --- |
| Package version is recorded | You know what future behavior is being compared against. |
| Python version is recorded | Many failures are environment mismatch, not framework behavior. |
| First command is recorded | Another person can reproduce the starting point. |
| Provider key is not in code | Examples stay safe to commit. |

## Related pages

- [Quickstart](/en/swarms/quickstart/)
- [Core Concepts](/en/swarms/core-concepts/)
- [Architecture Overview](/en/swarms/architectures/)
- [Production](/en/swarms/production/)

## References

- Installation: https://docs.swarms.world/installation.md
- PyPI package: https://pypi.org/project/swarms/
