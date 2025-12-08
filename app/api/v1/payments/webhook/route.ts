import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { stripe } from '@/services/stripe.service';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  if (!stripe) {
    return NextResponse.json(
      { error: 'Stripe is not configured' },
      { status: 500 }
    );
  }

  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature' },
      { status: 400 }
    );
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${err}` },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as any;
      // Update order payment status
      await prisma.payment.updateMany({
        where: {
          transactionId: paymentIntent.id,
        },
        data: {
          status: 'SUCCESS',
        },
      });
      break;

    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object as any;
      await prisma.payment.updateMany({
        where: {
          transactionId: failedPayment.id,
        },
        data: {
          status: 'FAILED',
        },
      });
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
});

// Disable body parsing for webhook to get raw body
export const runtime = 'nodejs';
