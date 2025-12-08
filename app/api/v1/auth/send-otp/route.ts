import { NextRequest, NextResponse } from 'next/server';
import { sendOTP } from '@/services/twilio.service';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  const body = await req.json();
  const { phoneNumber } = body;

  if (!phoneNumber) {
    return NextResponse.json(
      { error: 'Phone number is required' },
      { status: 400 }
    );
  }

  try {
    const result = await sendOTP(phoneNumber);
    return NextResponse.json({
      success: true,
      message: result.message || 'OTP sent successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send OTP' },
      { status: 500 }
    );
  }
});
