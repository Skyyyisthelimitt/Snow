import { NextResponse } from 'next/server';
import { readDeals, writeDeals } from '@/lib/storage';

export const dynamic = 'force-dynamic';

export async function GET() {
  const deals = await readDeals();
  return NextResponse.json(deals);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const deals = await readDeals();

    const adminActions = ['approve', 'delete', 'admin_create', 'admin_update', 'reorder'];
    if (body.action && adminActions.includes(body.action)) {
      const correctPassword = process.env.ADMIN_PASSWORD || 'skyadmin123';
      const clientKey = request.headers.get('x-admin-key');
      if (clientKey !== correctPassword) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
      }
    }

    if (body.action === 'reorder') {
      const { id, direction } = body;
      const index = deals.findIndex((d: any) => String(d.id) === String(id));
      if (index !== -1) {
        const activeDeals = deals.filter((d: any) => d.status === 'Active');
        const activeIdx = activeDeals.findIndex((d: any) => String(d.id) === String(id));
        if (direction === 'up' && activeIdx > 0) {
          const prevActive = activeDeals[activeIdx - 1];
          const prevIdx = deals.findIndex((d: any) => String(d.id) === String(prevActive.id));
          if (prevIdx !== -1) {
            const temp = deals[index];
            deals[index] = deals[prevIdx];
            deals[prevIdx] = temp;
            await writeDeals(deals);
          }
        } else if (direction === 'down' && activeIdx < activeDeals.length - 1) {
          const nextActive = activeDeals[activeIdx + 1];
          const nextIdx = deals.findIndex((d: any) => String(d.id) === String(nextActive.id));
          if (nextIdx !== -1) {
            const temp = deals[index];
            deals[index] = deals[nextIdx];
            deals[nextIdx] = temp;
            await writeDeals(deals);
          }
        }
      }
      return NextResponse.json({ success: true });
    }

    if (body.action === 'approve') {
      const { id } = body;
      const updatedDeals = deals.map((d: any) => {
        if (String(d.id) === String(id)) {
          return { ...d, status: 'Approved' };
        }
        return d;
      });
      await writeDeals(updatedDeals);
      return NextResponse.json({ success: true, message: 'Deal approved successfully!' });
    }

    if (body.action === 'delete') {
      const { id } = body;
      const updatedDeals = deals.filter((d: any) => String(d.id) !== String(id));
      await writeDeals(updatedDeals);
      return NextResponse.json({ success: true, message: 'Deal deleted successfully!' });
    }

    if (body.action === 'admin_create') {
      const newDeal = {
        id: String(Date.now()),
        firmName: body.deal.firmName || 'Unnamed Prop Firm',
        discount: body.deal.discount || '',
        logo: body.deal.logo || '/yrmpfp.jpg',
        description: body.deal.description || '',
        expiresIn: 259200,
        claimedCount: 0,
        promoCode: body.deal.promoCode || 'SNOW',
        link: body.deal.link || '',
        isHot: false,
        isFeatured: body.deal.isFeatured || false,
        status: body.deal.status || 'Active',
      };
      deals.push(newDeal);
      await writeDeals(deals);
      return NextResponse.json({ success: true, deal: newDeal });
    }

    if (body.action === 'admin_update') {
      const { id } = body.deal;
      const updatedDeals = deals.map((d: any) => {
        if (String(d.id) === String(id)) {
          return {
            ...d,
            firmName: body.deal.firmName,
            discount: body.deal.discount,
            logo: body.deal.logo,
            description: body.deal.description,
            promoCode: body.deal.promoCode,
            link: body.deal.link,
            isFeatured: body.deal.isFeatured,
            status: body.deal.status,
          };
        }
        return d;
      });
      await writeDeals(updatedDeals);
      return NextResponse.json({ success: true, message: 'Deal updated successfully!' });
    }

    const newDeal = {
      id: String(Date.now()),
      firmName: body.firmName || 'Unnamed Prop Firm',
      discount: body.discount || 'Special Discount',
      logo: '/yrmpfp.jpg',
      description: body.deliverables || 'Exclusive B2B partnership deal.',
      expiresIn: 259200,
      claimedCount: 0,
      promoCode: 'SNOW',
      link: body.link || 'https://snowpropdeals.com',
      isHot: false,
      isFeatured: false,
      status: 'Pending',
      contactEmail: body.contactEmail || '',
      contactTelegram: body.contactTelegram || '',
      commission: body.commission || 'N/A',
      retainer: body.retainer || 'N/A',
      deliverables: body.deliverables || ''
    };

    deals.push(newDeal);
    await writeDeals(deals);

    return NextResponse.json({ success: true, deal: newDeal });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
