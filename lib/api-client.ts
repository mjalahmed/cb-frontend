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
    const { data } = await api.post<{ user: User }>('/user/me', {});
    return data.user;
  },
};

// Products
export const productsApi = {
  getAll: async (categoryId?: string, page?: number, limit?: number) => {
    const body: { categoryId?: string; page?: number; limit?: number } = {};
    if (categoryId) {
      body.categoryId = categoryId;
    }
    if (page !== undefined) {
      body.page = page;
    }
    if (limit !== undefined) {
      body.limit = limit;
    }
    const { data } = await api.post<{ 
      products: Product[];
      pagination?: {
        page: number;
        limit: number;
        totalCount: number;
        totalPages: number;
      };
    }>('/menu/products', body);
    return {
      products: data.products,
      pagination: data.pagination,
    };
  },
};

// Categories (Public)
export const categoriesApi = {
  getAll: async () => {
    try {
      const { data } = await api.post<{ categories: Category[] }>('/menu/categories', {});
      return data.categories;
    } catch (error) {
      // If public endpoint doesn't exist, return empty array
      // Categories will be extracted from products as fallback
      return [];
    }
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
  getMyOrders: async (page?: number, limit?: number, sortBy?: 'date' | 'status' | 'amount') => {
    const body: { page?: number; limit?: number; sortBy?: string } = {};
    if (page !== undefined) {
      body.page = page;
    }
    if (limit !== undefined) {
      body.limit = limit;
    }
    if (sortBy) {
      body.sortBy = sortBy;
    }
    const { data } = await api.post<{ 
      orders: Order[];
      pagination?: {
        page: number;
        limit: number;
        totalCount: number;
        totalPages: number;
      };
    }>('/orders/my', body);
    return {
      orders: data.orders,
      pagination: data.pagination,
    };
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
  getAll: async (page?: number, limit?: number, categoryId?: string, isAvailable?: boolean) => {
    const body: { 
      page?: string; 
      limit?: string; 
      categoryId?: string; 
      isAvailable?: boolean;
    } = {};
    if (page !== undefined) {
      body.page = String(page);
    }
    if (limit !== undefined) {
      body.limit = String(limit);
    }
    if (categoryId) {
      body.categoryId = categoryId;
    }
    if (isAvailable !== undefined) {
      body.isAvailable = isAvailable;
    }
    const { data } = await api.post<{ 
      products: Product[];
      pagination?: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
      };
    }>('/admin/products/list', body);
    return {
      products: data.products,
      pagination: data.pagination,
    };
  },
  get: async (productId: string) => {
    const { data } = await api.post<{ product: Product }>('/admin/products/get', {
      id: productId,
    });
    return data.product;
  },
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
    const { data } = await api.post<{ product: Product }>('/admin/products/update', {
      id: productId,
      ...productData,
    });
    return data.product;
  },
  delete: async (productId: string) => {
    const { data } = await api.post<{ message: string }>('/admin/products/delete', {
      id: productId,
    });
    return data;
  },
};

// Admin - Orders
export const adminOrdersApi = {
  getAll: async (status?: OrderStatus, page?: number, limit?: number, sortBy?: 'date' | 'status' | 'amount') => {
    const body: { status?: OrderStatus; page?: number; limit?: number; sortBy?: string } = {};
    if (status) {
      body.status = status;
    }
    if (page !== undefined) {
      body.page = page;
    }
    if (limit !== undefined) {
      body.limit = limit;
    }
    if (sortBy) {
      body.sortBy = sortBy;
    }
    const { data } = await api.post<{ 
      orders: Order[];
      pagination?: {
        page: number;
        limit: number;
        totalCount: number;
        totalPages: number;
      };
    }>('/admin/orders', body);
    return {
      orders: data.orders,
      pagination: data.pagination,
    };
  },
  updateStatus: async (orderId: string, status: OrderStatus) => {
    const { data } = await api.post<{ order: Order }>('/admin/orders/status', {
      id: orderId,
      status,
    });
    return data.order;
  },
};

// Admin - Categories
export const adminCategoriesApi = {
  getAll: async (page?: number, limit?: number) => {
    // Always send a body, even if empty (API requires POST with body)
    const body: { page?: number; limit?: number } = {};
    if (page !== undefined) {
      body.page = page;
    }
    if (limit !== undefined) {
      body.limit = limit;
    }
    const { data } = await api.post<{ 
      categories: Category[];
      pagination?: {
        page: number;
        limit: number;
        totalCount: number;
        totalPages: number;
      };
    }>('/admin/categories', Object.keys(body).length > 0 ? body : {});
    return {
      categories: data.categories || [],
      pagination: data.pagination,
    };
  },
  get: async (categoryId: string) => {
    const { data } = await api.post<{ category: Category }>('/admin/categories/get', {
      id: categoryId,
    });
    return data.category;
  },
  create: async (categoryData: {
    name: string;
    description?: string;
  }) => {
    const { data } = await api.post<{ category: Category }>('/admin/categories/create', categoryData);
    return data.category;
  },
  update: async (categoryId: string, categoryData: {
    name?: string;
    description?: string;
  }) => {
    const { data } = await api.post<{ category: Category }>('/admin/categories/update', {
      id: categoryId,
      ...categoryData,
    });
    return data.category;
  },
  delete: async (categoryId: string) => {
    const { data } = await api.post<{ success: boolean; message?: string }>('/admin/categories/delete', {
      id: categoryId,
    });
    return data;
  },
};

// Admin - Image Upload
export const adminUploadApi = {
  uploadImage: async (file: File, options?: { fileName?: string; folder?: string }) => {
    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      throw new Error('File size must be less than 5MB');
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      throw new Error('Only image files are allowed');
    }

    const formData = new FormData();
    // Field name must be exactly 'image' as per API requirements
    formData.append('image', file);
    
    // Optional parameters
    if (options?.fileName) {
      formData.append('fileName', options.fileName);
    }
    
    if (options?.folder) {
      formData.append('folder', options.folder);
    } else {
      // Default folder is 'products'
      formData.append('folder', 'products');
    }
    
    // Content-Type header will be automatically removed by the interceptor for FormData
    // This allows the browser to set it with the correct boundary
    const { data } = await api.post<{ 
      success: boolean;
      url: string;
      message?: string;
    }>('/admin/upload/image', formData);
    
    if (!data.success || !data.url) {
      throw new Error(data.message || 'Upload failed');
    }
    
    return data.url;
  },
};

