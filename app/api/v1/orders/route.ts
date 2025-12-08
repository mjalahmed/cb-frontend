import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAuth(async (req: NextRequest, user) => {
    const body = await req.json();
    const { items, orderType, scheduledTime, paymentMethod } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Order items are required' },
        { status: 400 }
      );
    }

    if (!orderType || !['DELIVERY', 'PICKUP'].includes(orderType)) {
      return NextResponse.json(
        { error: 'Valid order type (DELIVERY or PICKUP) is required' },
        { status: 400 }
      );
    }

    if (!paymentMethod || !['CASH', 'CARD'].includes(paymentMethod)) {
      return NextResponse.json(
        { error: 'Valid payment method (CASH or CARD) is required' },
        { status: 400 }
      );
    }

    // Calculate total amount
    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await prisma.product.findUnique({
        where: { id: item.productId },
      });

      if (!product) {
        return NextResponse.json(
          { error: `Product ${item.productId} not found` },
          { status: 404 }
        );
      }

      if (!product.isAvailable) {
        return NextResponse.json(
          { error: `Product ${product.name} is not available` },
          { status: 400 }
        );
      }

      // Convert Prisma Decimal to number
      const priceValue = parseFloat(product.price.toString());
      const itemTotal = priceValue * item.quantity;
      totalAmount += itemTotal;

      orderItems.push({
        productId: product.id,
        quantity: item.quantity,
        priceAtOrder: product.price.toString(),
      });
    }

    // Create order
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        totalAmount: totalAmount.toFixed(2),
        orderType: orderType as any,
        scheduledTime: scheduledTime ? new Date(scheduledTime) : null,
        status: 'PENDING' as any,
        orderItems: {
          create: orderItems.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            priceAtOrder: item.priceAtOrder,
          })),
        },
        payment: {
          create: {
            amount: totalAmount.toFixed(2),
            status: (paymentMethod === 'CARD' ? 'PENDING' : 'SUCCESS') as any,
          },
        },
      },
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
    });

    return NextResponse.json({ order }, { status: 201 });
  })
);
