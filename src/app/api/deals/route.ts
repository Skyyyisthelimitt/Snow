import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/deals.json');

async function readDeals() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeDeals(deals: any[]) {
  await fs.writeFile(filePath, JSON.stringify(deals, null, 2), 'utf-8');
}

export async function GET() {
  const deals = await readDeals();
  return NextResponse.json(deals);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const deals = await readDeals();

    if (body.action === 'approve') {
      const { id } = body;
      const updatedDeals = deals.map((d: any) => {
        if (d.id === id) {
          return { ...d, status: 'Approved' };
        }
        return d;
      });
      await writeDeals(updatedDeals);
      return NextResponse.json({ success: true, message: 'Deal approved successfully!' });
    }

    if (body.action === 'delete') {
      const { id } = body;
      const updatedDeals = deals.filter((d: any) => d.id !== id);
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
        if (d.id === id) {
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

    // New deal submission
    const newDeal = {
      id: String(Date.now()),
      firmName: body.firmName || 'Unnamed Prop Firm',
      discount: body.discount || 'Special Discount',
      logo: '/yrmpfp.jpg', // Default logo placeholder
      description: body.deliverables || 'Exclusive B2B partnership deal.',
      expiresIn: 259200, // Default 3 days
      claimedCount: 0,
      promoCode: 'SNOW', // Branded custom code automatically allocated
      link: body.link || 'https://snowpropdeals.com',
      isHot: false,
      isFeatured: false,
      status: 'Pending',
      contactEmail: body.contactEmail || '',
      contactTelegram: body.contactTelegram || '',
      // B2B Specific proposal terms
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
