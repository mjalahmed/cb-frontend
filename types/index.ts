export type UserRole = 'CUSTOMER' | 'ADMIN';

export type OrderStatus = 'PENDING' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED';

export type OrderType = 'DELIVERY' | 'PICKUP';

export type PaymentMethod = 'CASH' | 'CARD';

export type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAILED';

export interface User {
  id: string;
  username: string;
  email?: string | null;
  phoneNumber: string;
  phoneVerified: boolean;
  role: UserRole;
  createdAt: string;
  updatedAt?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: string;
  imageUrl: string | null;
  isAvailable: boolean;
  categoryId: string;
  category?: Category;
  createdAt: string;
  updatedAt?: string;
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  priceAtOrder: string;
  product: Product;
  createdAt: string;
}

export interface Payment {
  id: string;
  orderId: string;
  transactionId: string | null;
  status: PaymentStatus;
  amount: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Order {
  id: string;
  userId: string;
  user?: User;
  totalAmount: string;
  status: OrderStatus;
  orderType: OrderType;
  scheduledTime: string | null;
  orderItems: OrderItem[];
  payment?: Payment | null;
  createdAt: string;
  updatedAt?: string;
}

export interface ApiError {
  error?: string;
  errors?: Array<{
    msg: string;
    param: string;
  }>;
}

