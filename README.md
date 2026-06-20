# OPC Platform

> AI开发科技 × AI影视创作综合平台

一个面向AI开发者和影视创作者的综合平台，提供大模型API接入、RAG框架、AI Agent工具，以及文生视频、智能配音、AI剪辑等影视创作工具。

## 快速开始

### 本地预览
直接用浏览器打开 `website/index.html`，或启动本地服务器：
```bash
npx serve website
# 或
python -m http.server 8080 --directory website
```

### 部署到 GitHub Pages

1. 在 GitHub 创建新仓库（不要初始化 README）
2. 进入仓库 Settings → Pages → Source → **GitHub Actions**
3. 推送代码：
```bash
git init
git add .
git commit -m "init: OPC Platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/opc-platform.git
git push -u origin main
```
4. GitHub Actions 自动触发，1-2 分钟后网站上线

网站地址：`https://YOUR_USERNAME.github.io/opc-platform/`

## 技术栈

- HTML5 / CSS3 / Vanilla JavaScript
- GitHub Pages（静态托管）
- GitHub Actions（自动部署）
- Cloudflare（CDN加速，可选）

## 目录结构
```
opc-platform/
├── website/
│   ├── index.html
│   └── assets/
│       ├── css/style.css
│       └── js/main.js
└── .github/
    └── workflows/
        └── deploy.yml
```
