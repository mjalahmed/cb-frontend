import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { createPaymentIntent } from '@/services/stripe.service';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAuth(async (req: NextRequest, user) => {
    const body = await req.json();
    const { orderId, amount } = body;

    if (!orderId || !amount) {
      return NextResponse.json(
        { error: 'Order ID and amount are required' },
        { status: 400 }
      );
    }

    // Verify order belongs to user
    const order = await prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    if (order.userId !== user.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    // Create payment intent
    const result = await createPaymentIntent(amount, orderId, {
      userId: user.id,
    });

    // Update payment with payment intent ID
    await prisma.payment.updateMany({
      where: { orderId },
      data: {
        transactionId: result.clientSecret.split('_secret')[0], // Extract payment intent ID
      },
    });

    return NextResponse.json(result);
  })
);
