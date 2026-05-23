---
title: "安装与环境配置"
description: "在干净 Python 环境中安装 Swarms，确认包信息，并有意识地准备 provider key。"
---

# 安装与环境配置

## 创建干净环境

```bash
python3 --version
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install swarms
python -m pip show swarms
```

当前包信息显示 swarms 12.0.0，Python 要求 >=3.10,<4.0。严肃使用前重新确认包信息，并把版本、provider、操作系统和第一条成功命令记录下来。

## 安装阶段先别混在一起

- 先证明命令可用，再调 provider key。
- 不要把工具、记忆、gateway 和部署问题混在安装问题里。
- 生产机器上的安装脚本要看来源，并用正确用户执行。

## 干净安装更容易排错

使用新 shell 和小环境。安装、provider 鉴权和 workflow 代码同时变化时，第一次失败会有太多可能原因。第一步只确认命令可见、包版本可见、模型调用可见。

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install swarms
python -m pip show swarms
```

| 安装后检查 | 为什么重要 |
| --- | --- |
| 记录包版本 | 以后知道在和哪个行为比较。 |
| 记录 Python 版本 | 很多失败是环境不匹配。 |
| 记录第一条成功命令 | 别人能复现起点。 |
| Provider key 不进代码 | 示例文件可以安全提交。 |

## 相关页面

- [快速开始](/zh/swarms/quickstart/)
- [核心概念](/zh/swarms/core-concepts/)
- [架构总览](/zh/swarms/architectures/)
- [生产化最佳实践](/zh/swarms/production/)

## 参考资料

- Installation: https://docs.swarms.world/installation.md
- PyPI package: https://pypi.org/project/swarms/
