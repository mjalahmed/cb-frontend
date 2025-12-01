'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ordersApi } from '@/lib/api-client';
import { useAuthStore } from '@/store/auth-store';
import { useRouter } from '@/i18n/routing';
import type { Order } from '@/types';
import { Loader2, Package, Clock, CheckCircle, XCircle, Truck } from 'lucide-react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { format } from 'date-fns';

const statusIcons = {
  PENDING: Clock,
  PREPARING: Package,
  READY: Truck,
  COMPLETED: CheckCircle,
  CANCELLED: XCircle,
};

const statusColors = {
  PENDING: 'text-yellow-600 bg-yellow-50',
  PREPARING: 'text-blue-600 bg-blue-50',
  READY: 'text-green-600 bg-green-50',
  COMPLETED: 'text-gray-600 bg-gray-50',
  CANCELLED: 'text-red-600 bg-red-50',
};

export function OrdersClient() {
  const t = useTranslations('orders');
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/menu');
      return;
    }
    loadOrders();
    // Poll for order updates every 10 seconds
    const interval = setInterval(loadOrders, 10000);
    return () => clearInterval(interval);
  }, [isAuthenticated, router]);

  const loadOrders = async () => {
    try {
      const fetchedOrders = await ordersApi.getMyOrders();
      setOrders(fetchedOrders.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ));
    } catch (error: any) {
      if (error.response?.status !== 401) {
        const errorMessage = error.response?.data?.error || 
                            error.response?.data?.message || 
                            'Failed to load orders';
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  const statusTranslations: Record<string, string> = {
    pending: t('pending'),
    preparing: t('preparing'),
    ready: t('ready'),
    completed: t('completed'),
    cancelled: t('cancelled'),
  };

  const getStatusTranslation = (status: string) => {
    const statusKey = status.toLowerCase();
    return statusTranslations[statusKey] || status;
  };

  const getOrderTypeTranslation = (type: string) => {
    return type === 'DELIVERY' ? t('delivery', { ns: 'checkout' }) : t('pickup', { ns: 'checkout' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-chocolate-600" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-chocolate-800 mb-8">{t('title')}</h1>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <Package className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('noOrders')}</h2>
          <p className="text-gray-600">{t('noOrdersDescription')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const StatusIcon = statusIcons[order.status];
            return (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 pb-4 border-b border-gray-200">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t('orderNumber')} {order.id.slice(0, 8)}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {format(new Date(order.createdAt), 'PPp')}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <StatusIcon className={`w-5 h-5 ${statusColors[order.status].split(' ')[0]}`} />
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}
                    >
                      {getStatusTranslation(order.status)}
                    </span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="space-y-3 mb-4">
                  {order.orderItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 rtl:space-x-reverse"
                    >
                      <div className="relative w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                        {item.product.imageUrl ? (
                          <Image
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            fill
                            className="object-cover rounded-lg"
                            sizes="64px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-2xl">
                            🍫
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.product.name}</p>
                        <p className="text-sm text-gray-500">
                          {t('quantity', { ns: 'common' })}: {item.quantity} × ${parseFloat(item.priceAtOrder).toFixed(2)}
                        </p>
                      </div>
                      <p className="font-semibold text-gray-900">
                        ${(parseFloat(item.priceAtOrder) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Order Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200">
                  <div className="mb-2 sm:mb-0 space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">{t('orderType')}:</span>{' '}
                      {getOrderTypeTranslation(order.orderType)}
                    </p>
                    {order.scheduledTime && (
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Scheduled:</span>{' '}
                        {format(new Date(order.scheduledTime), 'PPp')}
                      </p>
                    )}
                    {order.payment && (
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Payment:</span>{' '}
                        {order.payment.status === 'SUCCESS' ? 'Paid' : 'Pending'}
                      </p>
                    )}
                  </div>
                  <div className="text-right sm:text-left">
                    <p className="text-lg font-bold text-chocolate-600">
                      {t('total')}: ${parseFloat(order.totalAmount).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

