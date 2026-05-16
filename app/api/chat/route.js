import Anthropic from '@anthropic-ai/sdk';
import { rateLimit } from '../../../lib/rate-limit';
import { chatSystemPrompt } from '../../../content/demos';

const client = new Anthropic();

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'anonymous';
  const { allowed, remaining, retryAfter } = rateLimit(`chat:${ip}`, 10, 60 * 60 * 1000);

  if (!allowed) {
    return Response.json(
      { error: 'Rate limit exceeded. Please try again later.', retryAfter },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { message, history = [] } = body;

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return Response.json({ error: 'Message is required.' }, { status: 400 });
  }

  if (message.length > 1000) {
    return Response.json({ error: 'Message too long. Maximum 1000 characters.' }, { status: 400 });
  }

  const messages = [
    ...history.slice(-8).map((m) => ({ role: m.role, content: m.content })),
    { role: 'user', content: message.trim() },
  ];

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: chatSystemPrompt,
      messages,
    });

    const reply = response.content[0]?.text ?? '';
    return Response.json({ reply, remaining }, { status: 200 });
  } catch (err) {
    console.error('Anthropic API error:', err);
    return Response.json({ error: 'AI service temporarily unavailable.' }, { status: 503 });
  }
}
