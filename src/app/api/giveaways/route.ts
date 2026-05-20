import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

const srcFilePath = path.join(process.cwd(), 'src/data/giveaways.json');
const tmpFilePath = '/tmp/giveaways.json';

async function readGiveaways() {
  // Try /tmp first (writable copy), then fall back to bundled source
  try {
    const data = await fs.readFile(tmpFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    // /tmp doesn't exist yet — read from source and seed /tmp
    try {
      const data = await fs.readFile(srcFilePath, 'utf-8');
      const giveaways = JSON.parse(data);
      try { await fs.writeFile(tmpFilePath, JSON.stringify(giveaways, null, 2), 'utf-8'); } catch {}
      return giveaways;
    } catch {
      return [];
    }
  }
}

async function writeGiveaways(giveaways: any[]) {
  const json = JSON.stringify(giveaways, null, 2);
  // Always write to /tmp (works on Vercel)
  await fs.writeFile(tmpFilePath, json, 'utf-8');
  // Also try to write to source (works locally for persistence)
  try { await fs.writeFile(srcFilePath, json, 'utf-8'); } catch {}
}

export async function GET() {
  const giveaways = await readGiveaways();
  return NextResponse.json(giveaways);
}

export async function POST(request: Request) {
  try {
    const correctPassword = process.env.ADMIN_PASSWORD || 'skyadmin123';
    const clientKey = request.headers.get('x-admin-key');
    if (clientKey !== correctPassword) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const giveaways = await readGiveaways();

    if (body.action === 'delete') {
      const { id } = body;
      const updatedGiveaways = giveaways.filter((g: any) => String(g.id) !== String(id));
      await writeGiveaways(updatedGiveaways);
      return NextResponse.json({ success: true, message: 'Giveaway deleted successfully!' });
    }

    if (body.action === 'admin_create') {
      const newGiveaway = {
        id: `ga_${Date.now()}`,
        firmName: body.giveaway.firmName || 'New Firm',
        tweetId: body.giveaway.tweetId || '',
        challengeSize: body.giveaway.challengeSize || '$50K Challenge',
        status: body.giveaway.status || 'Active',
        entriesCount: 0,
        dateAdded: new Date().toISOString().split('T')[0],
      };
      giveaways.unshift(newGiveaway);
      await writeGiveaways(giveaways);
      return NextResponse.json({ success: true, giveaway: newGiveaway });
    }

    if (body.action === 'admin_update') {
      const { id } = body.giveaway;
      const updatedGiveaways = giveaways.map((g: any) => {
        if (String(g.id) === String(id)) {
          return {
            ...g,
            firmName: body.giveaway.firmName,
            tweetId: body.giveaway.tweetId,
            challengeSize: body.giveaway.challengeSize,
            status: body.giveaway.status,
          };
        }
        return g;
      });
      await writeGiveaways(updatedGiveaways);
      return NextResponse.json({ success: true, message: 'Giveaway updated successfully!' });
    }

    return NextResponse.json({ success: false, error: 'Unknown action' }, { status: 400 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
