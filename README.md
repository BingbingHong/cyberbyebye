# 老爷保号 - 顺序插画交互

这是一个顺序插画交互项目，展现了传统的"老爷保号"祈福仪式。原始设计来自 Figma: https://www.figma.com/design/HoXJftzsee0FDemWbeq0Kt/Sequential-Illustration-Interaction

## 本地开发

1. 安装依赖：
```bash
npm install
# 或
pnpm install
```

2. 启动开发服务器：
```bash
npm run dev
# 或
pnpm dev
```

3. 构建生产版本：
```bash
npm run build
# 或
pnpm build
```

## 部署到 Vercel

### 方法一：通过 Vercel CLI

1. 安装 Vercel CLI（如果还没有安装）：
```bash
npm i -g vercel
```

2. 登录 Vercel：
```bash
vercel login
```

3. 部署项目：
```bash
vercel
```

4. 生产部署：
```bash
vercel --prod
```

### 方法二：通过 Vercel 网站

1. 将代码推送到 GitHub、GitLab 或 Bitbucket

2. 在 [Vercel](https://vercel.com) 上：
   - 点击 "New Project"
   - 导入你的代码仓库
   - Vercel 会自动检测到这是一个 Vite 项目
   - 点击 "Deploy" 即可

项目已配置好 `vercel.json`，Vercel 会自动：
- 使用 `npm install` 安装依赖
- 使用 `npm run build` 构建项目
- 将 `dist` 目录作为输出目录
- 配置 SPA 路由重写规则

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Motion (动画库)
- React DnD (拖拽功能)
- DeepSeek AI (愿望回复功能)

## AI 功能配置

本项目集成了 DeepSeek AI，可以为用户的愿望生成个性化回复。

### 配置步骤

1. 获取 DeepSeek API Key（详见 `API_SETUP.md`）
2. 在 Vercel 项目设置中添加环境变量 `DEEPSEEK_API_KEY`
3. 本地开发需要安装 Vercel CLI 并使用 `vercel dev` 启动（这样才能使用 Serverless Functions）

### 本地测试 API

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目目录运行
vercel dev
```

这样可以在本地测试完整的 API 功能。或者直接部署到 Vercel 进行测试。

### 为什么选择 DeepSeek？

- ✅ 免费额度更充足，适合分享给网友使用
- ✅ 中文支持优秀
- ✅ API 稳定可靠
- ✅ 响应速度快
