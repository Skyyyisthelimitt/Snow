import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { firm, type, code } = await request.json();
    
    // In a real application, you would save this to Supabase/PostgreSQL
    // e.g., await supabase.from('traffic').insert({ firm, type, code, timestamp: new Date() })
    
    console.log(`[TRAFFIC] ${new Date().toISOString()} | ${type} | Firm: ${firm} | Code: ${code}`);
    
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
