import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    const correctPassword = process.env.ADMIN_PASSWORD;
    
    if (!correctPassword) {
      console.error('CRITICAL: ADMIN_PASSWORD environment variable is not set!');
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }
    
    if (password === correctPassword) {
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ success: false, error: 'Incorrect credentials' }, { status: 401 });
  } catch (error) {
    console.error('Auth API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
