import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest) => {
    const body = await req.json();
    const { page = '1', limit = '20' } = body;

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    const [categories, total] = await Promise.all([
      prisma.category.findMany({
        skip,
        take: limitNum,
        orderBy: { createdAt: 'asc' },
      }),
      prisma.category.count(),
    ]);

    return NextResponse.json({
      categories,
      pagination: {
        page: pageNum,
        limit: limitNum,
        totalCount: total,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  })
);
