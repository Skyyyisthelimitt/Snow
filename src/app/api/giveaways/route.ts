import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/giveaways.json');

async function readGiveaways() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeGiveaways(giveaways: any[]) {
  await fs.writeFile(filePath, JSON.stringify(giveaways, null, 2), 'utf-8');
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
      const updatedGiveaways = giveaways.filter((g: any) => g.id !== id);
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
