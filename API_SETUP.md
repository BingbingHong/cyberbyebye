# DeepSeek API 配置指南

## 1. 获取 API Key

1. 访问 [DeepSeek 官网](https://www.deepseek.com/)
2. 注册/登录账号
3. 进入 API 控制台（通常是 https://platform.deepseek.com/）
4. 创建 API Key
5. 复制你的 API Key（格式类似：`sk-xxxxx...`）

## 2. 配置环境变量

### 本地开发

创建 `.env.local` 文件（在项目根目录）：

```env
DEEPSEEK_API_KEY=你的API_KEY
```

### Vercel 部署

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择你的项目
3. 进入 Settings → Environment Variables
4. 添加新的环境变量：
   - **Name**: `DEEPSEEK_API_KEY`
   - **Value**: 你的 API Key
   - **Environment**: Production, Preview, Development（全选）
5. 点击 Save
6. 重新部署项目

## 3. API 费用说明

- DeepSeek 提供基础版免费配额（每日可调用一定次数）
- 免费额度通常比通义千问更充足
- 超出免费额度后会按量计费
- 具体费用请查看 [DeepSeek 定价页面](https://www.deepseek.com/pricing)

**免费额度优势：**
- 适合分享给网友使用
- 每日有一定免费调用次数
- 中文支持良好

## 4. 测试 API

部署后，可以通过以下方式测试：

```bash
curl -X POST https://your-domain.vercel.app/api/generate-reply \
  -H "Content-Type: application/json" \
  -d '{"wish":"我希望来年赚大钱"}'
```

## 5. 故障排除

如果 API 调用失败，检查：

1. API Key 是否正确配置
2. API Key 是否有效且有剩余额度
3. 查看 Vercel 函数日志：Vercel Dashboard → 项目 → Functions → generate-reply
4. 检查网络请求是否被阻止（CORS 等）
5. 确认 API Key 格式正确（应该以 `sk-` 开头）

