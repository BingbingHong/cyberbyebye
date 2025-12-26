import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // 只允许 POST 请求
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { wish } = request.body;

  if (!wish || typeof wish !== 'string') {
    return response.status(400).json({ error: 'Wish is required' });
  }

  // 从环境变量获取 API Key
  const apiKey = process.env.DEEPSEEK_API_KEY;
  
  if (!apiKey) {
    console.error('DEEPSEEK_API_KEY is not set');
    return response.status(500).json({ error: 'API key not configured' });
  }

  try {
    // 调用 DeepSeek API
    const deepseekResponse = await fetch(
      'https://api.deepseek.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat', // DeepSeek 的聊天模型
          messages: [
            {
              role: 'system',
              content: `你是"老爷"，一位传统、幽默、慈祥的神明。用户向你许愿，你需要用幽默、传统、祝福的风格回复。回复应该：
1. 称呼用户为"后生仔"或"小友"
2. 使用传统、幽默的语调
3. 对用户的愿望给出积极、祝福的回应
4. 可以适当调侃，但要温暖友善
5. 回复长度控制在200字以内
6. 使用口语化的表达，让回复生动有趣`,
            },
            {
              role: 'user',
              content: `用户许愿："${wish}"。请用老爷的口吻回复。`,
            },
          ],
          temperature: 0.9,
          max_tokens: 500,
        }),
      }
    );

    if (!deepseekResponse.ok) {
      const errorText = await deepseekResponse.text();
      console.error('DeepSeek API error:', errorText);
      return response.status(500).json({ 
        error: 'Failed to generate reply',
        details: errorText 
      });
    }

    const data = await deepseekResponse.json();
    
    // 根据 DeepSeek 的响应格式解析（标准 OpenAI 格式）
    if (data.choices && data.choices.length > 0 && data.choices[0].message) {
      const reply = data.choices[0].message.content;
      return response.status(200).json({ reply });
    } else {
      console.error('Unexpected response format:', JSON.stringify(data, null, 2));
      return response.status(500).json({ error: 'Unexpected response format', data });
    }
  } catch (error) {
    console.error('Error calling DeepSeek API:', error);
    return response.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

