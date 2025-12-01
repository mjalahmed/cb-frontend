'use client';

import { useTranslations } from 'next-intl';
import { useCartStore } from '@/store/cart-store';
import { Link } from '@/i18n/routing';
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from '@/i18n/routing';

export function CartClient() {
  const t = useTranslations('cart');
  const tCommon = useTranslations('common');
  const router = useRouter();
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCartStore();

  const total = getTotal();

  const handleCheckout = () => {
    if (items.length === 0) return;
    router.push('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('empty')}</h2>
          <p className="text-gray-600 mb-6">{t('emptyDescription')}</p>
          <Link
            href="/menu"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-chocolate-600 text-white px-6 py-3 rounded-lg hover:bg-chocolate-700 transition-colors"
          >
            <span>{t('continueShopping')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-chocolate-800 mb-8">{t('title')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.productId}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row gap-4"
            >
              {/* Product Image */}
              <div className="relative w-full sm:w-24 h-32 sm:h-24 bg-gray-200 rounded-lg flex-shrink-0">
                {item.product.imageUrl ? (
                  <Image
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 100vw, 96px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl">
                    🍫
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.product.name}
                  </h3>
                  <p className="text-chocolate-600 font-semibold">
                    ${parseFloat(item.product.price).toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse bg-chocolate-50 rounded-lg px-3 py-2">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="p-1 rounded hover:bg-chocolate-200 transition-colors"
                    >
                      <Minus className="w-4 h-4 text-chocolate-700" />
                    </button>
                    <span className="text-chocolate-700 font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      className="p-1 rounded hover:bg-chocolate-200 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-chocolate-700" />
                    </button>
                  </div>

                  <div className="text-right sm:text-left">
                    <p className="text-lg font-bold text-gray-900">
                      ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(item.productId)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title={t('removeItem')}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>{tCommon('subtotal')}</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>{tCommon('total')}</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-chocolate-600 text-white py-3 px-4 rounded-lg hover:bg-chocolate-700 transition-colors font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>{t('checkout')}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/menu"
              className="block text-center text-chocolate-600 hover:text-chocolate-700 mt-4 transition-colors"
            >
              {t('continueShopping')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

