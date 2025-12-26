# Vercel 部署指南

## 快速部署

### 方法一：通过 Vercel 网站（推荐）

1. **准备代码仓库**
   - 将代码推送到 GitHub、GitLab 或 Bitbucket
   - 确保所有文件都已提交

2. **在 Vercel 上部署**
   - 访问 [vercel.com](https://vercel.com) 并登录
   - 点击 "Add New..." → "Project"
   - 导入你的代码仓库
   - Vercel 会自动检测到 Vite 项目配置
   - 确认以下设置：
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build` (自动检测)
     - **Output Directory**: `dist` (自动检测)
     - **Install Command**: `npm install` (自动检测)
   - 点击 "Deploy"

3. **等待部署完成**
   - Vercel 会自动构建和部署你的项目
   - 部署完成后会提供一个 URL 链接

### 方法二：通过 Vercel CLI

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录
vercel login

# 3. 在项目目录中部署
cd "/Users/bingbinghong/Desktop/Sequential Illustration Interaction"
vercel

# 4. 生产环境部署
vercel --prod
```

## 项目配置说明

项目已包含以下配置文件：

- **vercel.json**: Vercel 部署配置
  - 自动构建命令：`npm run build`
  - 输出目录：`dist`
  - SPA 路由重写规则（确保客户端路由正常工作）

- **package.json**: 包含所有必要的依赖和构建脚本

## 环境变量（如果需要）

如果项目需要环境变量：

1. 在 Vercel 项目设置中添加环境变量
2. 或者在 `vercel.json` 中添加：
```json
{
  "env": {
    "YOUR_VAR": "value"
  }
}
```

## 故障排除

### 构建失败

1. **检查 Node.js 版本**
   - Vercel 默认使用 Node.js 18.x
   - 如需指定版本，创建 `.nvmrc` 文件或在 `package.json` 中添加 `engines` 字段

2. **检查依赖安装**
   - 确保所有依赖都在 `package.json` 中
   - 运行 `npm install` 确保本地可以正常安装

3. **检查构建命令**
   - 本地运行 `npm run build` 确保可以成功构建

### 路由问题

- 项目已配置 SPA 路由重写规则
- 所有路由都会重定向到 `index.html`

### 资源文件加载问题

- 确保 `src/assets` 目录中的所有图片文件都已提交到代码仓库
- Vite 插件会自动处理 `figma:asset/` 导入路径

## 自定义域名

部署完成后，可以在 Vercel 项目设置中添加自定义域名。

