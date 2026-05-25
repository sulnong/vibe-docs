---
title: "Installation"
description: "Install Hermes Agent and record the Python version, command path, package version, and first reproducible environment details."
---

# Installation

Installing Hermes is usually not the hard part. The hard part is debugging installation, provider auth, model choice, tool permissions, and a real project task all at once. For the first pass, do one thing: make the `hermes` command visible in a clean environment and record where it came from.

## Check Python first

The current PyPI package for `hermes-agent` requires Python `>=3.11`. Check before installing:

```bash
python --version
python -m pip --version
```

If the machine has several Python installations, use the environment you can actually maintain. Avoid dropping dependencies into a mysterious system Python; it makes later troubleshooting much harder.

## Minimal install path

If Python 3.11 or newer is already available, the easiest path to explain is the PyPI package:

```bash
python -m pip install --upgrade hermes-agent
command -v hermes
hermes --help
```

This path is easy to repeat on a developer machine, in a container, or in a team setup note. After installing, record:

```bash
python --version
python -m pip show hermes-agent
command -v hermes
```

When someone says “Hermes behaves differently on my machine,” those three commands are more useful than a long chat transcript.

## When to use the official installer

The official docs also provide an install script:

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

That route is useful when you want the installer to manage dependencies, launchers, and browser-related pieces. If a team chooses it, write down why, who maintains that path, how updates happen, and how to uninstall it. On production machines, inspect the script source and the permissions it will run with.

## Do not attach a project yet

A successful install is not just “no error.” You should be able to explain the environment:

| Check | Why it matters |
| --- | --- |
| `command -v hermes` | Shows which launcher the shell will run. |
| `hermes --help` | Proves the command starts, not just that a file exists. |
| `python -m pip show hermes-agent` | Shows package version, location, and environment. |
| OS and shell | Helps debug PATH, permission, and terminal differences. |

Do not configure gateway, cron, MCP, or a production project at the same time. Once the install layer is stable, move to [First Reliable Run](/en/hermes/first-run/) to configure a model and complete a small session.

## Upgrades and version pins

Hermes is moving quickly. Release notes can change provider behavior, tools, gateways, or dependencies. Personal experiments can track the latest version; team or automation setups should pin a version and treat upgrades as small migrations:

```bash
python -m pip install --upgrade hermes-agent
hermes --help
```

After upgrading, run at least `hermes --help` and one low-risk session. If gateway or cron is running, also confirm the long-lived process picked up the new version.

## Common install problems

| Symptom | First place to look |
| --- | --- |
| `hermes: command not found` | The pip script directory is not on PATH, or the shell has not reloaded. |
| Python is too old | Switch to Python 3.11+ before installing. |
| `pip show` finds the package but the command is missing | The console script directory is not on PATH. |
| The command starts but import errors appear | Multiple Python installs or old install leftovers are likely involved. |
| Native Windows behaves differently | Check the current official support note; WSL2 is often easier to reproduce. |

## References

- Installation: https://hermes-agent.nousresearch.com/docs/getting-started/installation
- Quickstart: https://hermes-agent.nousresearch.com/docs/getting-started/quickstart
- PyPI package: https://pypi.org/project/hermes-agent/
