import { NextRequest, NextResponse } from 'next/server';
import { sendOTP } from '@/services/twilio.service';
import { createApiHandler } from '@/lib/api-handler';
import logger from '@/lib/utils/logger.util';

export const POST = createApiHandler(async (req: NextRequest) => {
  const body = await req.json();
  const { phoneNumber } = body;

  if (!phoneNumber) {
    logger.warn('OTP request missing phone number');
    return NextResponse.json(
      { error: 'Phone number is required' },
      { status: 400 }
    );
  }

  try {
    logger.info('Sending OTP', { phoneNumber: phoneNumber.replace(/\d(?=\d{4})/g, '*') }); // Mask phone number
    
    const result = await sendOTP(phoneNumber);
    
    logger.success('OTP sent successfully', { 
      phoneNumber: phoneNumber.replace(/\d(?=\d{4})/g, '*') 
    });
    
    return NextResponse.json({
      success: true,
      message: result.message || 'OTP sent successfully',
    });
  } catch (error) {
    logger.error('Failed to send OTP', {
      error: error instanceof Error ? error.message : 'Unknown error',
      phoneNumber: phoneNumber.replace(/\d(?=\d{4})/g, '*'),
    });
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send OTP' },
      { status: 500 }
    );
  }
});
