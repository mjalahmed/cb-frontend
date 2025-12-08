import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAuth(async (req: NextRequest, user) => {
    const body = await req.json();
    const { page = '1', limit = '20', sortBy = 'date' } = body;

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    // Build orderBy based on sortBy
    let orderBy: any = { createdAt: 'desc' };
    if (sortBy === 'status') {
      orderBy = { status: 'asc' };
    } else if (sortBy === 'amount') {
      orderBy = { totalAmount: 'desc' };
    }

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where: { userId: user.id },
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
          payment: true,
        },
        skip,
        take: limitNum,
        orderBy,
      }),
      prisma.order.count({ where: { userId: user.id } }),
    ]);

    return NextResponse.json({
      orders,
      pagination: {
        page: pageNum,
        limit: limitNum,
        totalCount: total,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  })
);
