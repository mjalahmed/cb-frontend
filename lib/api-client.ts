import api from './api';
import type {
  User,
  Product,
  Order,
  OrderStatus,
  PaymentMethod,
  OrderType,
} from '@/types';

// Auth
export const authApi = {
  register: async (userData: {
    username: string;
    email?: string;
    password: string;
    phoneNumber: string;
  }) => {
    const { data } = await api.post<{
      success: boolean;
      message: string;
      user: User;
    }>('/auth/register', userData);
    return data;
  },
  login: async (username: string, password: string) => {
    const { data } = await api.post<{
      success: boolean;
      token: string;
      user: User;
    }>('/auth/login', { username, password });
    return data;
  },
  sendOTP: async (phoneNumber: string) => {
    const { data } = await api.post<{ success: boolean; message?: string }>(
      '/auth/send-otp',
      { phoneNumber }
    );
    return data;
  },
  verifyPhone: async (phoneNumber: string, otp: string) => {
    const { data } = await api.post<{
      success: boolean;
      message: string;
      user: User;
    }>('/auth/verify-phone', { phoneNumber, otp });
    return data;
  },
};

// User
export const userApi = {
  getMe: async () => {
    const { data } = await api.get<{ user: User }>('/user/me');
    return data.user;
  },
};

// Products
export const productsApi = {
  getAll: async (categoryId?: string) => {
    const params = categoryId ? { category_id: categoryId } : {};
    const { data } = await api.get<{ products: Product[] }>('/menu/products', { params });
    return data.products;
  },
};

// Orders
export const ordersApi = {
  create: async (orderData: {
    items: Array<{ productId: string; quantity: number }>;
    orderType: OrderType;
    scheduledTime?: string;
    paymentMethod: PaymentMethod;
  }) => {
    const { data } = await api.post<{ order: Order }>('/orders', orderData);
    return data.order;
  },
  getMyOrders: async () => {
    const { data } = await api.get<{ orders: Order[] }>('/orders/my');
    return data.orders;
  },
};

// Payments
export const paymentsApi = {
  createIntent: async (orderId: string, amount: number) => {
    const { data } = await api.post<{ clientSecret: string; amount: number; orderId: string }>(
      '/payments/intent',
      { orderId, amount }
    );
    return data;
  },
};

