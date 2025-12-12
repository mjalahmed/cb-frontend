import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';
import logger from '@/lib/utils/logger.util';

export const POST = createApiHandler(
  requireAuth(async (req: NextRequest, user) => {
    logger.info('Fetching user profile', { userId: user.id });
    
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
      logger.warn('User not found', { userId: user.id });
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    logger.success('User profile fetched successfully', { userId: user.id });
    return NextResponse.json({ user: dbUser });
  })
);
