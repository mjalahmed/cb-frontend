'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { paymentsApi } from '@/lib/api-client';
import { ArrowLeft } from 'lucide-react';
import { InlineLoader } from '@/components/LoadingSpinner';
import { PageTransition, FadeIn } from '@/components/PageTransition';
import toast from 'react-hot-toast';

interface PaymentFormProps {
  orderId: string;
  amount: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export function PaymentForm({ orderId, amount, onSuccess, onCancel }: PaymentFormProps) {
  const t = useTranslations('payment');
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    try {
      // Create payment intent
      const { clientSecret } = await paymentsApi.createIntent(orderId, amount);

      // Confirm payment
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}${window.location.pathname.split('/').slice(0, 2).join('/')}/orders`,
        },
        redirect: 'if_required',
      });

      if (error) {
        toast.error(error.message || t('failed'));
        setProcessing(false);
      } else {
        toast.success(t('success'));
        onSuccess();
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.message ||
                          t('failed');
      toast.error(errorMessage);
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onCancel}
        className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to checkout</span>
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment</h2>
        <p className="text-gray-600 mb-6">
          Total amount: <span className="font-bold">{amount.toFixed(3)} BHD</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <PaymentElement />
          <button
            type="submit"
            disabled={!stripe || processing}
            className="w-full bg-chocolate-600 text-white py-3 px-4 rounded-lg hover:bg-chocolate-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
          >
            {processing ? (
              <>
                <InlineLoader />
                <span>{t('processing')}</span>
              </>
            ) : (
              <span>Pay {amount.toFixed(3)} BHD</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

