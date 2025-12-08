import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest) => {
    const body = await req.json();
    const { id, ...updateFields } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    // Check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    const updateData: any = {};
    if (updateFields.name !== undefined) updateData.name = updateFields.name;
    if (updateFields.description !== undefined) updateData.description = updateFields.description;
    if (updateFields.price !== undefined) {
      if (typeof updateFields.price !== 'number' || updateFields.price < 0) {
        return NextResponse.json(
          { error: 'Price must be a positive number' },
          { status: 400 }
        );
      }
      updateData.price = updateFields.price.toString();
    }
    if (updateFields.imageUrl !== undefined) updateData.imageUrl = updateFields.imageUrl;
    if (updateFields.isAvailable !== undefined) updateData.isAvailable = updateFields.isAvailable;
    
    if (updateFields.categoryId !== undefined) {
      const category = await prisma.category.findUnique({
        where: { id: updateFields.categoryId },
      });
      if (!category) {
        return NextResponse.json(
          { error: 'Category not found' },
          { status: 404 }
        );
      }
      updateData.categoryId = updateFields.categoryId;
    }

    const product = await prisma.product.update({
      where: { id },
      data: updateData,
      include: { category: true },
    });

    return NextResponse.json({ product });
  })
);
