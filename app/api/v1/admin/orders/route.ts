import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest) => {
    const body = await req.json();
    const { status, page = '1', limit = '20', sortBy = 'date' } = body;
    
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
    if (status && status !== 'ALL') {
      where.status = status as any;
    }

    // Build orderBy based on sortBy
    let orderBy: any = { createdAt: 'desc' };
    if (sortBy === 'status') {
      orderBy = { status: 'asc' };
    } else if (sortBy === 'amount') {
      orderBy = { totalAmount: 'desc' };
    }

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
          payment: true,
          user: {
            select: {
              id: true,
              username: true,
              phoneNumber: true,
            },
          },
        },
        skip,
        take: limitNum,
        orderBy,
      }),
      prisma.order.count({ where }),
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
