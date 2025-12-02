import api from './api';
import type {
  User,
  Product,
  Order,
  OrderStatus,
  PaymentMethod,
  OrderType,
  Category,
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

// Admin - Products
export const adminProductsApi = {
  create: async (productData: {
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    categoryId: string;
    isAvailable?: boolean;
  }) => {
    const { data } = await api.post<{ product: Product }>('/admin/products', productData);
    return data.product;
  },
  update: async (productId: string, productData: {
    name?: string;
    description?: string;
    price?: number;
    imageUrl?: string;
    categoryId?: string;
    isAvailable?: boolean;
  }) => {
    const { data } = await api.patch<{ product: Product }>(`/admin/products/${productId}`, productData);
    return data.product;
  },
};

// Admin - Orders
export const adminOrdersApi = {
  getAll: async (status?: OrderStatus) => {
    const params = status ? { status } : {};
    const { data } = await api.get<{ orders: Order[] }>('/admin/orders', { params });
    return data.orders;
  },
  updateStatus: async (orderId: string, status: OrderStatus) => {
    const { data } = await api.patch<{ order: Order }>(`/admin/orders/${orderId}/status`, { status });
    return data.order;
  },
};

// Admin - Categories
export const adminCategoriesApi = {
  getAll: async () => {
    const { data } = await api.get<{ categories: Category[] }>('/admin/categories');
    return data.categories;
  },
  create: async (categoryData: {
    name: string;
    description?: string;
  }) => {
    const { data } = await api.post<{ category: Category }>('/admin/categories', categoryData);
    return data.category;
  },
  update: async (categoryId: string, categoryData: {
    name?: string;
    description?: string;
  }) => {
    const { data } = await api.patch<{ category: Category }>(`/admin/categories/${categoryId}`, categoryData);
    return data.category;
  },
  delete: async (categoryId: string) => {
    await api.delete(`/admin/categories/${categoryId}`);
  },
};

// Admin - Image Upload
export const adminUploadApi = {
  uploadImage: async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    
    // Content-Type header will be automatically removed by the interceptor for FormData
    const { data } = await api.post<{ url: string }>('/admin/upload/image', formData);
    return data.url;
  },
};

