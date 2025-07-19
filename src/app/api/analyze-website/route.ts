import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { websiteUrl, userEmail } = await req.json();
    if (!websiteUrl || !userEmail) {
      return NextResponse.json({ error: 'Missing websiteUrl or userEmail' }, { status: 400 });
    }

    // 1. Fetch website content
    let websiteContent = '';
    try {
      const res = await fetch(websiteUrl);
      websiteContent = await res.text();
    } catch (err) {
      return NextResponse.json({ error: 'Failed to fetch website content' }, { status: 500 });
    }

    // 2. Call OpenAI to summarize (replace YOUR_OPENAI_API_KEY)
    let summary = '';
    let openaiData = null;
    try {
      const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Summarize the following website content for company analysis.' },
            { role: 'user', content: websiteContent.slice(0, 8000) }, // limit for token safety
          ],
          max_tokens: 256,
        }),
      });
      openaiData = await openaiRes.json();
      if (!openaiRes.ok) {
        console.error('OpenAI API error:', openaiData);
        return NextResponse.json({ error: 'OpenAI API error', openaiError: JSON.stringify(openaiData, null, 2) }, { status: 500 });
      }
      summary = openaiData.choices?.[0]?.message?.content || '';
    } catch (err) {
      console.error('OpenAI fetch error:', err);
      return NextResponse.json({ error: 'Failed to summarize website content', openaiError: String(err) }, { status: 500 });
    }

    // 3. Mock enrichment API (replace with real API call)
    // TODO: Integrate with real enrichment API (e.g., Clearbit, Apollo, etc.)
    const enrichment = {
      industry: 'Software',
      companySize: '51-200',
      techStack: ['React', 'Node.js', 'PostgreSQL'],
      keywords: ['ecommerce', 'analytics', 'SaaS'],
      customerType: 'B2B',
      enrichmentSource: 'mock',
    };

    // 4. TODO: Store in database

    // 5. Respond
    return NextResponse.json({
      summary,
      ...enrichment,
      rawContent: websiteContent.slice(0, 1000), // for debugging, limit size
      openaiRaw: openaiData,
    });
  } catch (err) {
    console.error('Internal server error:', err);
    return NextResponse.json({ error: 'Internal server error', details: String(err) }, { status: 500 });
  }
} 