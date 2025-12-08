import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, validateStrongPassword } from '@/lib/utils/password.util';
import { generateToken } from '@/lib/utils/jwt.util';
import { sendOTP } from '@/services/twilio.service';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  const body = await req.json();
  const { username, email, password, phoneNumber } = body;

  // Validation
  if (!username || username.length < 3 || username.length > 30) {
    return NextResponse.json(
      { error: 'Username must be between 3 and 30 characters' },
      { status: 400 }
    );
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return NextResponse.json(
      { error: 'Username can only contain letters, numbers, and underscores' },
      { status: 400 }
    );
  }

  // Validate password
  const passwordValidation = validateStrongPassword(password);
  if (!passwordValidation.valid) {
    return NextResponse.json(
      { error: passwordValidation.error },
      { status: 400 }
    );
  }

  if (!phoneNumber || !phoneNumber.startsWith('+')) {
    return NextResponse.json(
      { error: 'Valid phone number in E.164 format is required' },
      { status: 400 }
    );
  }

  // Check if user exists (case-insensitive)
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { username: { equals: username, mode: 'insensitive' as const } },
        { phoneNumber },
        ...(email ? [{ email: { equals: email.toLowerCase(), mode: 'insensitive' as const } }] : []),
      ],
    },
  });

  if (existingUser) {
    return NextResponse.json(
      { error: 'User already exists' },
      { status: 400 }
    );
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create user (store username/email in lowercase)
  const user = await prisma.user.create({
    data: {
      username: username.toLowerCase(),
      email: email ? email.toLowerCase() : null,
      password: hashedPassword,
      phoneNumber,
      role: 'CUSTOMER',
    },
  });

  // Send OTP
  try {
    await sendOTP(phoneNumber);
  } catch (error) {
    console.error('Failed to send OTP:', error);
    // Continue with registration even if OTP fails
  }

  // Ensure phoneNumber exists (should always be present since we just created it)
  if (!user.phoneNumber) {
    return NextResponse.json(
      { error: 'User phone number is missing' },
      { status: 500 }
    );
  }

  // Generate token
  const token = generateToken({
    id: user.id,
    username: user.username,
    role: user.role as 'CUSTOMER' | 'ADMIN',
    phoneNumber: user.phoneNumber,
  });

  return NextResponse.json(
    {
      success: true,
      message: 'User registered successfully. Please verify your phone number.',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        phoneVerified: user.phoneVerified,
      },
    },
    { status: 201 }
  );
});
