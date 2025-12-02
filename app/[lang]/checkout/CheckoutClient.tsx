'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useCartStore } from '@/store/cart-store';
import { useAuthStore } from '@/store/auth-store';
import { ordersApi, paymentsApi } from '@/lib/api-client';
import { LoginModal } from '@/components/LoginModal';
import { useRouter } from '@/i18n/routing';
import { PaymentForm } from './PaymentForm';
import type { OrderType, PaymentMethod } from '@/types';
import { Calendar, Clock, CreditCard, Banknote, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { format, addDays, setHours, setMinutes } from 'date-fns';

export function CheckoutClient() {
  const t = useTranslations('checkout');
  const tCommon = useTranslations('common');
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [orderType, setOrderType] = useState<OrderType>('DELIVERY');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('CASH');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [processing, setProcessing] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const total = getTotal();

  useEffect(() => {
    if (!isAuthenticated() && items.length > 0) {
      setShowLoginModal(true);
    }
  }, [isAuthenticated, items.length]);

  const handlePlaceOrder = async () => {
    if (!isAuthenticated()) {
      setShowLoginModal(true);
      return;
    }

    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    if (!selectedDate || !selectedTime) {
      toast.error('Please select a date and time');
      return;
    }

    setProcessing(true);

    try {
      const scheduledTime = selectedDate && selectedTime
        ? setMinutes(setHours(selectedDate, parseInt(selectedTime.split(':')[0])), parseInt(selectedTime.split(':')[1])).toISOString()
        : undefined;

      const order = await ordersApi.create({
        items: items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
        orderType,
        scheduledTime,
        paymentMethod,
      });

      setOrderId(order.id);

      if (paymentMethod === 'CARD') {
        setShowPaymentForm(true);
      } else {
        toast.success('Order placed successfully!');
        clearCart();
        router.push('/orders');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.response?.data?.errors?.[0]?.msg ||
                          'Failed to place order';
      toast.error(errorMessage);
    } finally {
      setProcessing(false);
    }
  };

  const handlePaymentSuccess = () => {
    toast.success('Payment successful! Order placed.');
    clearCart();
    router.push('/orders');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-600 mb-4">Your cart is empty</p>
        <button
          onClick={() => router.push('/menu')}
          className="text-chocolate-600 hover:text-chocolate-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if (showPaymentForm && orderId) {
    return (
      <PaymentForm
        orderId={orderId}
        amount={total}
        onSuccess={handlePaymentSuccess}
        onCancel={() => setShowPaymentForm(false)}
      />
    );
  }

  // Generate available dates (next 7 days)
  const availableDates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i + 1));

  // Generate time slots (9 AM to 9 PM, every hour)
  const timeSlots = Array.from({ length: 13 }, (_, i) => {
    const hour = 9 + i;
    return `${hour.toString().padStart(2, '0')}:00`;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-chocolate-800 mb-8">{t('title')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Type */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2 rtl:space-x-reverse">
              <Calendar className="w-5 h-5" />
              <span>{t('orderType')}</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setOrderType('DELIVERY')}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  orderType === 'DELIVERY'
                    ? 'border-chocolate-600 bg-chocolate-50 text-chocolate-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold">{t('delivery')}</div>
              </button>
              <button
                onClick={() => setOrderType('PICKUP')}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  orderType === 'PICKUP'
                    ? 'border-chocolate-600 bg-chocolate-50 text-chocolate-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold">{t('pickup')}</div>
              </button>
            </div>
          </div>

          {/* Schedule Time */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2 rtl:space-x-reverse">
              <Clock className="w-5 h-5" />
              <span>{t('scheduleTime')}</span>
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('selectDate')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availableDates.map((date) => (
                    <button
                      key={date.toISOString()}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime('');
                      }}
                      className={`p-3 rounded-lg border-2 transition-colors text-sm ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? 'border-chocolate-600 bg-chocolate-50 text-chocolate-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">{format(date, 'EEE')}</div>
                      <div className="text-xs">{format(date, 'MMM d')}</div>
                    </button>
                  ))}
                </div>
              </div>
              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('selectTime')}
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg border-2 transition-colors text-sm ${
                          selectedTime === time
                            ? 'border-chocolate-600 bg-chocolate-50 text-chocolate-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2 rtl:space-x-reverse">
              <CreditCard className="w-5 h-5" />
              <span>{t('paymentMethod')}</span>
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => setPaymentMethod('CASH')}
                className={`w-full p-4 rounded-lg border-2 transition-colors flex items-center space-x-3 rtl:space-x-reverse ${
                  paymentMethod === 'CASH'
                    ? 'border-chocolate-600 bg-chocolate-50 text-chocolate-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Banknote className="w-5 h-5" />
                <span className="font-medium">{t('cash')}</span>
              </button>
              <button
                onClick={() => setPaymentMethod('CARD')}
                className={`w-full p-4 rounded-lg border-2 transition-colors flex items-center space-x-3 rtl:space-x-reverse ${
                  paymentMethod === 'CARD'
                    ? 'border-chocolate-600 bg-chocolate-50 text-chocolate-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                <span className="font-medium">{t('card')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              {items.map((item) => (
                <div key={item.productId} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="text-gray-900">
                    ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>{tCommon('total')}</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              disabled={processing || !selectedDate || !selectedTime}
              className="w-full bg-chocolate-600 text-white py-3 px-4 rounded-lg hover:bg-chocolate-700 transition-colors font-semibold mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              {processing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t('processing')}</span>
                </>
              ) : (
                <span>{t('placeOrder')}</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={() => setShowLoginModal(false)}
        redirectAfterLogin={false}
      />
    </div>
  );
}

