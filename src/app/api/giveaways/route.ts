import { NextResponse } from 'next/server';
import { readGiveaways, writeGiveaways } from '@/lib/storage';

export const dynamic = 'force-dynamic';

export async function GET() {
  const giveaways = await readGiveaways();
  return NextResponse.json(giveaways);
}

export async function POST(request: Request) {
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
        customTitle: body.giveaway.customTitle || '',
        customDescription: body.giveaway.customDescription || '',
        customImage: body.giveaway.customImage || '',
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
            customTitle: body.giveaway.customTitle || '',
            customDescription: body.giveaway.customDescription || '',
            customImage: body.giveaway.customImage || '',
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
