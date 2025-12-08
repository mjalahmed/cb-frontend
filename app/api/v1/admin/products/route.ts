import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest) => {
    const body = await req.json();
    const { name, description, price, imageUrl, categoryId, isAvailable = true } = body;

    // Validation
    if (!name || !price || !categoryId) {
      return NextResponse.json(
        { error: 'Name, price, and categoryId are required' },
        { status: 400 }
      );
    }

    if (typeof price !== 'number' || price < 0) {
      return NextResponse.json(
        { error: 'Price must be a positive number' },
        { status: 400 }
      );
    }

    // Verify category exists
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: price.toString(),
        imageUrl,
        categoryId,
        isAvailable,
      },
      include: { category: true },
    });

    return NextResponse.json({ product }, { status: 201 });
  })
);
