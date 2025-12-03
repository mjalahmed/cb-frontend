# Frontend Changes & Implementation Guide

This document outlines the latest frontend changes and implementation details.

---

## 1. Image Upload for Products (Admin)

### Upload Image API

The frontend now supports image file uploads for products. Images are uploaded to cloud storage (Supabase) via the backend.

**API Endpoint:**
```
POST /api/v1/admin/upload/image
```

**Implementation:**
```typescript
import { adminUploadApi } from '@/lib/api-client';

// Upload image file
const imageUrl = await adminUploadApi.uploadImage(file);
// Returns: "https://your-storage-bucket.com/images/abc123.jpg"
```

**Usage in Product Form:**
1. User selects an image file (max 5MB)
2. Image is validated (type and size)
3. Image preview is shown
4. On form submit, image is uploaded first
5. Uploaded image URL is used when creating/updating product

**File Validation:**
- Only image files accepted (jpg, png, gif, webp, etc.)
- Maximum file size: 5MB
- File type validation on client side

**Note:** The API client automatically handles FormData and removes the `Content-Type` header to let the browser set it with the proper boundary for multipart/form-data.

---

## 2. Category Management (Admin)

### Category API Endpoints

The frontend now includes full CRUD operations for categories.

**Available Endpoints:**
- `GET /api/v1/admin/categories` - Get all categories
- `POST /api/v1/admin/categories` - Create new category
- `PATCH /api/v1/admin/categories/:id` - Update category
- `DELETE /api/v1/admin/categories/:id` - Delete category

**Implementation:**
```typescript
import { adminCategoriesApi } from '@/lib/api-client';

// Get all categories
const categories = await adminCategoriesApi.getAll();

// Create category
const category = await adminCategoriesApi.create({
  name: 'Chocolate Bars',
  description: 'Various chocolate bar products'
});

// Update category
const updated = await adminCategoriesApi.update(categoryId, {
  name: 'Updated Name',
  description: 'Updated description'
});

// Delete category
await adminCategoriesApi.delete(categoryId);
```

**Admin UI:**
- Categories page at `/admin/categories`
- Add, edit, and delete categories
- Categories are used when creating/editing products
- Confirmation dialog before deleting categories

---

## 3. Authentication System Updates

### Username/Password Login

The authentication system has been updated from OTP-only to username/password with optional phone verification.

**New Auth Flow:**
1. User registers with username, email (optional), password, and phone number
2. OTP is automatically sent to phone number
3. User can verify phone number (optional) or skip
4. User logs in with username and password
5. Phone verification can be done later

**API Endpoints:**
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login with username/password
- `POST /api/v1/auth/send-otp` - Send OTP to phone
- `POST /api/v1/auth/verify-phone` - Verify phone with OTP

**User Model Updates:**
```typescript
interface User {
  id: string;
  username: string;
  email?: string | null;
  phoneNumber: string;
  phoneVerified: boolean;
  role: 'CUSTOMER' | 'ADMIN';
  createdAt: string;
  updatedAt?: string;
}
```

---

## 4. Admin Dashboard Features

### Order Management
- View all orders with filtering by status
- Update order status (PENDING, PREPARING, READY, COMPLETED, CANCELLED)
- Real-time order updates (polling every 10 seconds)

### Product Management
- Add new products with image upload or URL
- Edit existing products
- Toggle product availability
- Category selection for products

### Category Management
- Create, edit, and delete categories
- Categories are required when creating products
- Delete confirmation with warning about linked products

---

## 5. Role-Based Access Control

### User Roles
- **CUSTOMER**: Can view menu, add to cart, place orders, view own orders
- **ADMIN**: Can access admin dashboard, manage products, categories, and orders

### Access Control
- Admin routes are protected (`/admin/*`)
- Non-admin users are redirected to menu if they try to access admin routes
- Admin users don't see cart or "My Orders" links in navbar
- Admin users are redirected to admin dashboard after login

---

## 6. Internationalization (i18n)

### Supported Languages
- English (en) - LTR
- Arabic (ar) - RTL

### Language Toggle
- Language toggle button in navbar
- Shows both language name and code (e.g., "العربية (AR)")
- Preserves current page when switching languages
- All UI text is translated

---

## 7. Environment Variables

### Frontend Environment Variables

Create a `.env.local` file in the project root:

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1

# Stripe Publishable Key (for card payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

**Note:** The backend handles image uploads to Supabase, so frontend doesn't need Supabase credentials.

---

## 8. API Client Structure

### Available API Clients

```typescript
// Authentication
import { authApi } from '@/lib/api-client';
authApi.register(userData);
authApi.login(username, password);
authApi.sendOTP(phoneNumber);
authApi.verifyPhone(phoneNumber, otp);

// User
import { userApi } from '@/lib/api-client';
userApi.getMe();

// Products
import { productsApi } from '@/lib/api-client';
productsApi.getAll(categoryId?);

// Orders
import { ordersApi } from '@/lib/api-client';
ordersApi.create(orderData);
ordersApi.getMyOrders();

// Payments
import { paymentsApi } from '@/lib/api-client';
paymentsApi.createIntent(orderId, amount);

// Admin - Products
import { adminProductsApi } from '@/lib/api-client';
adminProductsApi.create(productData);
adminProductsApi.update(productId, productData);

// Admin - Orders
import { adminOrdersApi } from '@/lib/api-client';
adminOrdersApi.getAll(status?);
adminOrdersApi.updateStatus(orderId, status);

// Admin - Categories
import { adminCategoriesApi } from '@/lib/api-client';
adminCategoriesApi.getAll();
adminCategoriesApi.create(categoryData);
adminCategoriesApi.update(categoryId, categoryData);
adminCategoriesApi.delete(categoryId);

// Admin - Image Upload
import { adminUploadApi } from '@/lib/api-client';
adminUploadApi.uploadImage(file);
```

---

## 9. File Upload Implementation Details

### FormData Handling

The API client automatically handles FormData for image uploads:

```typescript
// lib/api.ts - Request interceptor
api.interceptors.request.use((config) => {
  // ... token handling ...
  
  // If data is FormData, remove Content-Type header
  // Browser will set it automatically with boundary
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  return config;
});
```

This ensures the browser sets the correct `Content-Type: multipart/form-data; boundary=...` header automatically.

---

## 10. Navigation & Routing

### Route Structure
- `/[lang]/menu` - Product menu (public)
- `/[lang]/cart` - Shopping cart (authenticated, customer only)
- `/[lang]/orders` - User orders (authenticated, customer only)
- `/[lang]/checkout` - Checkout page (authenticated, customer only)
- `/[lang]/admin/orders` - Admin order management (admin only)
- `/[lang]/admin/products` - Admin product management (admin only)
- `/[lang]/admin/categories` - Admin category management (admin only)

### Locale Handling
- All routes are prefixed with `[lang]` (en or ar)
- Middleware automatically handles locale detection
- Language toggle preserves current page

---

## 11. State Management

### Zustand Stores

**Auth Store** (`store/auth-store.ts`):
- Manages user authentication state
- Persists to localStorage
- Provides `isAuthenticated()`, `setAuth()`, `logout()`

**Cart Store** (`store/cart-store.ts`):
- Manages shopping cart items
- Persists to localStorage
- Provides cart operations (add, remove, update quantity)

---

## 12. Error Handling

### API Error Interceptor

The API client automatically handles 401 errors:

```typescript
// lib/api.ts - Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to menu
      useAuthStore.getState().logout();
      const locale = window.location.pathname.split('/')[1] || 'en';
      window.location.href = `/${locale}/menu`;
    }
    return Promise.reject(error);
  }
);
```

### Toast Notifications

All user-facing errors and success messages use `react-hot-toast`:
- Error messages from API responses
- Success confirmations
- Validation errors

---

## 13. Backend Requirements

### Supabase Setup (Backend)

The backend needs these Supabase environment variables:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
# OR
SUPABASE_ANON_KEY=your_anon_key
```

**Supabase Storage Setup:**
1. Create Supabase project
2. Create storage bucket named `product-images`
3. Set bucket to public (or configure RLS policies)
4. Add environment variables to backend `.env`

**Note:** Frontend doesn't need these - image uploads are handled by backend.

---

## 14. Base URL & Headers

**Base URL:** `http://localhost:3000/api/v1`

**Headers:**
- All endpoints require `Content-Type: application/json` (except image upload)
- Image upload uses `multipart/form-data` (handled automatically)
- Authenticated endpoints require `Authorization: Bearer <token>`

---

**Last Updated:** 2024-01-01  
**Frontend Version:** v1.0
