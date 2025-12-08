import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { comparePassword } from '@/lib/utils/password.util';
import { generateToken } from '@/lib/utils/jwt.util';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  const body = await req.json();
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json(
      { error: 'Username and password are required' },
      { status: 400 }
    );
  }

  // Find user (case-insensitive lookup)
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { username: { equals: username, mode: 'insensitive' as const } },
        { email: { equals: username, mode: 'insensitive' as const } },
        { phoneNumber: username },
      ],
    },
  });

  if (!user) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  // Verify password
  const isValid = await comparePassword(password, user.password);
  if (!isValid) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  // Ensure phoneNumber exists (should always be present)
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

  return NextResponse.json({
    success: true,
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
