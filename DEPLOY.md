# OPC Platform 部署命令

GitHub 用户名：Jaron-Liao
最终网站地址：https://Jaron-Liao.github.io/opc-platform/

## 步骤1：初始化 git 仓库

在 `D:\Workbuddy工作空间\2026-06-20-20-20-29\opc-platform` 目录下打开终端执行：

```bash
cd "D:\Workbuddy工作空间\2026-06-20-20-20-29\opc-platform"
git init
git add .
git commit -m "init: OPC Platform - AI科技与影视创作综合平台"
git branch -M main
```

## 步骤2：登录 GitHub CLI

```bash
gh auth login
```
选择 GitHub.com → HTTPS → 用浏览器登录

## 步骤3：创建仓库并推送

```bash
gh repo create opc-platform --public --source=. --remote=origin --push
```

## 步骤4：启用 GitHub Pages

```bash
gh api repos/Jaron-Liao/opc-platform/pages --method POST --field source='{"branch":"gh-pages","path":"/"}' 2>/dev/null || true
```

或者手动：仓库 Settings → Pages → Source → GitHub Actions → Save

## 步骤5：查看部署状态

```bash
gh run list --repo Jaron-Liao/opc-platform
```

1-2 分钟后访问：https://Jaron-Liao.github.io/opc-platform/
