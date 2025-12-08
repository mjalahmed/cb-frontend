import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyOTP } from '@/services/twilio.service';
import { generateToken } from '@/lib/utils/jwt.util';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  const body = await req.json();
  const { phoneNumber, otp } = body;

  if (!phoneNumber || !otp) {
    return NextResponse.json(
      { error: 'Phone number and OTP are required' },
      { status: 400 }
    );
  }

  // Verify OTP
  const isValid = await verifyOTP(phoneNumber, otp);
  if (!isValid) {
    return NextResponse.json(
      { error: 'Invalid OTP code' },
      { status: 400 }
    );
  }

  // Update user phone verification status
  const user = await prisma.user.update({
    where: { phoneNumber },
    data: { phoneVerified: true },
  });

  // Ensure phoneNumber exists (should always be present since we queried by it)
  if (!user.phoneNumber) {
    return NextResponse.json(
      { error: 'User phone number is missing' },
      { status: 500 }
    );
  }

  // Generate new token
  const token = generateToken({
    id: user.id,
    username: user.username,
    role: user.role as 'CUSTOMER' | 'ADMIN',
    phoneNumber: user.phoneNumber,
  });

  return NextResponse.json({
    success: true,
    message: 'Phone number verified successfully',
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      phoneVerified: user.phoneVerified,
    },
  });
});
