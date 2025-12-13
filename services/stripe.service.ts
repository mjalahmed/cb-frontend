import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.warn('Stripe secret key not configured. Payment functionality will be disabled.');
}

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2023-10-16',
    })
  : null;

export async function createPaymentIntent(
  amount: number,
  orderId: string,
  metadata?: Record<string, string>
): Promise<{ clientSecret: string; amount: number; orderId: string }> {
  if (!stripe) {
    throw new Error('Stripe is not configured');
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 1000), // Convert to fils (BHD uses 3 decimal places, 1000 fils = 1 BHD)
      currency: 'bhd',
      metadata: {
        orderId,
        ...metadata,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret!,
      amount,
      orderId,
    };
  } catch (error) {
    console.error('Stripe error:', error);
    throw new Error('Failed to create payment intent');
  }
}
