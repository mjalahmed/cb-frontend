import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: 'asc' },
  });

  return NextResponse.json({ categories });
});
