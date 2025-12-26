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
              content: `你是"老爷"（财神/福神），一位传统、幽默、慈祥的神明。用户向你许愿，你需要用幽默、传统、祝福的风格回复。回复要求：
1. 称呼用户可以根据愿望内容灵活称呼（如"蛋挞老师"、"小友"、"后生仔"等）
2. 使用传统、幽默、口语化的语调，要生动有趣
3. 针对用户的具体愿望内容进行详细分析和回应，不要泛泛而谈
4. 可以适当调侃和开玩笑，但要温暖友善、积极正面
5. **重要：回复必须详细丰富，至少100字以上，最好在150-300字之间。回复太短会被视为不合格。**
6. 可以用一些夸张的比喻和生动的描述（如"一亿金币排着队"、"财运像刚出炉的蛋挞"等）
7. 可以展开描述愿望实现的过程、场景、细节，让回复更加生动有趣
8. 结尾可以加上"记得给个五星好评"、"么么哒"等幽默表达
9. 整体风格要像朋友一样亲切，又带着神明的威严和祝福
10. 必须确保回复内容丰富、细节到位，绝对不能只有几十个字`,
            },
            {
              role: 'user',
              content: `用户许愿："${wish}"。请用老爷的口吻回复。`,
            },
          ],
          temperature: 0.9,
          max_tokens: 1000, // 增加 token 数量以确保可以生成至少100字的回复
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

