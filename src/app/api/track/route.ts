import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const trafficFilePath = path.join(process.cwd(), 'src/data/traffic.json');
const dealsFilePath = path.join(process.cwd(), 'src/data/deals.json');

async function readTraffic() {
  try {
    const data = await fs.readFile(trafficFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { visits: 0, clicks: 0 };
  }
}

async function writeTraffic(traffic: any) {
  await fs.writeFile(trafficFilePath, JSON.stringify(traffic, null, 2), 'utf-8');
}

async function readDeals() {
  try {
    const data = await fs.readFile(dealsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeDeals(deals: any[]) {
  await fs.writeFile(dealsFilePath, JSON.stringify(deals, null, 2), 'utf-8');
}

export async function GET(request: Request) {
  try {
    const correctPassword = process.env.ADMIN_PASSWORD || 'skyadmin123';
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
          if (d.firmName.toLowerCase() === firm.toLowerCase() || d.promoCode === code) {
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
