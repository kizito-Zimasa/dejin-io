import Anthropic from '@anthropic-ai/sdk';
import { rateLimit } from '../../../lib/rate-limit';
import { documentRoutingSystemPrompt } from '../../../content/demos';

const client = new Anthropic();
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'anonymous';
  const { allowed, retryAfter } = rateLimit(`docroute:${ip}`, 5, 60 * 60 * 1000);

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

  const { text, fileBase64, mimeType } = body;

  if (!text && !fileBase64) {
    return Response.json({ error: 'Provide either text or fileBase64.' }, { status: 400 });
  }

  let userContent;

  if (fileBase64) {
    const byteLength = Math.ceil((fileBase64.length * 3) / 4);
    if (byteLength > MAX_BYTES) {
      return Response.json({ error: 'File too large. Maximum 5 MB.' }, { status: 400 });
    }
    const supportedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/webp'];
    if (!supportedTypes.includes(mimeType)) {
      return Response.json(
        { error: 'Unsupported file type. Use PDF, PNG, JPEG, or WEBP.' },
        { status: 400 }
      );
    }
    userContent = [
      {
        type: 'document',
        source: { type: 'base64', media_type: mimeType, data: fileBase64 },
      },
      {
        type: 'text',
        text: 'Analyze this document and output the routing JSON.',
      },
    ];
  } else {
    if (text.length > 8000) {
      return Response.json({ error: 'Text too long. Maximum 8000 characters.' }, { status: 400 });
    }
    userContent = `Analyze this document text and output the routing JSON:\n\n${text.trim()}`;
  }

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: documentRoutingSystemPrompt,
      messages: [{ role: 'user', content: userContent }],
    });

    const raw = response.content[0]?.text ?? '';

    let result;
    try {
      result = JSON.parse(raw);
    } catch {
      const match = raw.match(/\{[\s\S]*\}/);
      if (match) {
        result = JSON.parse(match[0]);
      } else {
        throw new Error('Model returned non-JSON response');
      }
    }

    return Response.json({ result }, { status: 200 });
  } catch (err) {
    console.error('Document routing error:', err);
    return Response.json({ error: 'AI service temporarily unavailable.' }, { status: 503 });
  }
}
