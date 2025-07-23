import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const loopsRes = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
      },
      body: JSON.stringify(body),
    });
    const data = await loopsRes.json().catch(() => null);
    return new Response(JSON.stringify(data || { ok: loopsRes.ok }), {
      status: loopsRes.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    return new Response(JSON.stringify({ error: (error instanceof Error ? error.message : 'Unknown error') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 