import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAuth(async (req: NextRequest, user) => {
    const dbUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        username: true,
        email: true,
        phoneNumber: true,
        role: true,
        phoneVerified: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!dbUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ user: dbUser });
  })
);
