import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    // Fallback to default if env is not loaded
    const correctPassword = process.env.ADMIN_PASSWORD || 'skyadmin123';
    
    if (password === correctPassword) {
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ success: false, error: 'Incorrect credentials' }, { status: 401 });
  } catch (error) {
    console.error('Auth API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
