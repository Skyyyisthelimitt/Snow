import { NextResponse } from 'next/server';
import { readTraffic, writeTraffic, readDeals, writeDeals } from '@/lib/storage';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const correctPassword = process.env.ADMIN_PASSWORD;
    if (!correctPassword) {
      console.error('CRITICAL: ADMIN_PASSWORD environment variable is not set!');
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    const clientKey = request.headers.get('x-admin-key');
    if (clientKey !== correctPassword) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const traffic = await readTraffic();
    return NextResponse.json(traffic);
  } catch {
    return NextResponse.json({ visits: 0, clicks: 0 });
  }
}

export async function POST(request: Request) {
  try {
    const { firm, type, code } = await request.json();
    const traffic = await readTraffic();
    
    if (type === 'PAGE_VISIT') {
      traffic.visits = (traffic.visits || 0) + 1;
    } else if (type === 'CLAIM_DEAL' || type === 'COPY_CODE') {
      traffic.clicks = (traffic.clicks || 0) + 1;
      
      if (firm && firm !== 'N/A') {
        const deals = await readDeals();
        const updatedDeals = deals.map((d: any) => {
          if (d.firmName.toLowerCase() === firm.toLowerCase()) {
             return { ...d, claimedCount: (d.claimedCount || 0) + 1 };
          }
          return d;
        });
        await writeDeals(updatedDeals);
      }
    }
    
    await writeTraffic(traffic);
    
    return NextResponse.json({ success: true, traffic });
  } catch (error) {
    console.error('Tracking Error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
