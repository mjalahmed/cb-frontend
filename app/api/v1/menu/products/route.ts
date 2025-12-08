import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  const body = await req.json();
  const { categoryId, page = '1', limit = '20' } = body;

  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const skip = (pageNum - 1) * limitNum;

  const where: any = {
    isAvailable: true, // Only show available products to customers
  };

  if (categoryId) {
    where.categoryId = categoryId;
  }

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      include: { category: true },
      skip,
      take: limitNum,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.product.count({ where }),
  ]);

  return NextResponse.json({
    products,
    pagination: {
      page: pageNum,
      limit: limitNum,
      totalCount: total,
      totalPages: Math.ceil(total / limitNum),
    },
  });
});
