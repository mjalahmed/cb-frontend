# Complete Migration Guide: Node.js/Express Backend → Next.js API Routes

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Project Structure](#project-structure)
4. [Step-by-Step Migration](#step-by-step-migration)
5. [Route Migration Mapping](#route-migration-mapping)
6. [Middleware Conversion](#middleware-conversion)
7. [Database Setup](#database-setup)
8. [File Uploads](#file-uploads)
9. [Environment Variables](#environment-variables)
10. [Testing & Deployment](#testing--deployment)

---

## Overview

This guide will help you migrate your Express.js backend to Next.js API Routes. Next.js API Routes allow you to build your backend API alongside your frontend in a single Next.js application.

### Benefits of Next.js API Routes:
- ✅ Single codebase for frontend and backend
- ✅ Built-in TypeScript support
- ✅ Automatic API route optimization
- ✅ Serverless function deployment ready
- ✅ Better developer experience
- ✅ Built-in middleware support (Next.js 13+)

### What Changes:
- Express routes → Next.js API route handlers
- Express middleware → Next.js middleware/helpers
- Express app → Next.js API route files
- Separate server → Integrated API routes

---

## Prerequisites

Before starting, ensure you have:
- Node.js 18+ installed
- Understanding of Next.js basics
- Your current backend codebase
- Database credentials and environment variables

---

## Project Structure

### Current Structure (Express)
```
cb-backend/
├── src/
│   ├── index.ts
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── types/
├── prisma/
└── package.json
```

### New Structure (Next.js)
```
cb-nextjs/
├── app/
│   └── api/
│       └── v1/
│           ├── auth/
│           ├── user/
│           ├── menu/
│           ├── orders/
│           ├── payments/
│           └── admin/
│               ├── products/
│               ├── categories/
│               ├── orders/
│               └── upload/
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── middleware.ts
│   └── utils/
├── services/
├── types/
├── prisma/
├── middleware.ts (Next.js middleware)
└── package.json
```

---

## Step-by-Step Migration

### Step 1: Initialize Next.js Project

```bash
# Create new Next.js project with TypeScript
npx create-next-app@latest cb-nextjs --typescript --tailwind --app --no-src-dir

cd cb-nextjs

# Install required dependencies
npm install @prisma/client bcryptjs jsonwebtoken stripe twilio @supabase/supabase-js winston
npm install -D @types/bcryptjs @types/jsonwebtoken prisma tsx
```

### Step 2: Copy Prisma Schema

```bash
# Copy your Prisma schema
cp -r ../cb-backend/prisma ./prisma

# Generate Prisma Client
npx prisma generate
```

### Step 3: Set Up Database Connection

Create `lib/prisma.ts`:

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

### Step 4: Set Up Environment Variables

Create `.env.local`:

```env
# Database
DATABASE_URL="your_database_url"

# JWT
JWT_SECRET="your_jwt_secret"
JWT_EXPIRES_IN="7d"

# Twilio
TWILIO_ACCOUNT_SID="your_twilio_sid"
TWILIO_AUTH_TOKEN="your_twilio_token"
TWILIO_PHONE_NUMBER="your_twilio_phone"

# Stripe
STRIPE_SECRET_KEY="your_stripe_secret"
STRIPE_WEBHOOK_SECRET="your_webhook_secret"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"

# Supabase
SUPABASE_URL="your_supabase_url"
SUPABASE_SERVICE_ROLE_KEY="your_supabase_key"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

### Step 5: Copy Utilities and Services

```bash
# Copy utilities
mkdir -p lib/utils
cp -r ../cb-backend/src/utils/* lib/utils/

# Copy services
mkdir -p services
cp -r ../cb-backend/src/services/* services/

# Copy types
mkdir -p types
cp -r ../cb-backend/src/types/* types/
```

### Step 6: Create Authentication Helpers

Create `lib/auth.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { verifyToken } from './utils/jwt.util';

export interface AuthUser {
  id: string;
  username: string;
  role: 'USER' | 'ADMIN';
  phoneNumber: string;
}

// Extend NextRequest to include user
declare module 'next/server' {
  interface NextRequest {
    user?: AuthUser;
  }
}

export async function authenticate(request: NextRequest): Promise<AuthUser | null> {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token) as AuthUser;
    return decoded;
  } catch (error) {
    return null;
  }
}

export function requireAuth(handler: (req: NextRequest, user: AuthUser) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const user = await authenticate(req);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    req.user = user;
    return handler(req, user);
  };
}

export function requireAdmin(handler: (req: NextRequest, user: AuthUser) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const user = await authenticate(req);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    if (user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }

    req.user = user;
    return handler(req, user);
  };
}
```

### Step 7: Create API Route Handler Helper

Create `lib/api-handler.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import logger from './utils/logger';

export type ApiHandler = (
  req: NextRequest,
  context?: { params?: Record<string, string> }
) => Promise<NextResponse>;

export function createApiHandler(handler: ApiHandler): ApiHandler {
  return async (req: NextRequest, context) => {
    try {
      return await handler(req, context);
    } catch (error) {
      logger.error('API Error', {
        url: req.url,
        method: req.method,
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      });

      if (error instanceof ZodError) {
        return NextResponse.json(
          { errors: error.errors },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Internal server error' },
        { status: 500 }
      );
    }
  };
}
```

---

## Route Migration Mapping

### Express Route → Next.js API Route

| Express Route | Next.js API Route |
|--------------|------------------|
| `POST /api/v1/auth/register` | `app/api/v1/auth/register/route.ts` |
| `POST /api/v1/auth/login` | `app/api/v1/auth/login/route.ts` |
| `POST /api/v1/admin/products` | `app/api/v1/admin/products/route.ts` |
| `POST /api/v1/admin/products/list` | `app/api/v1/admin/products/list/route.ts` |
| `POST /api/v1/admin/upload/image` | `app/api/v1/admin/upload/image/route.ts` |

### Example: Auth Register Route

**Before (Express):**
```typescript
// src/routes/auth.routes.ts
router.post('/register', [
  body('username').notEmpty(),
  // ... validators
], async (req, res) => {
  // ... handler
});
```

**After (Next.js):**
```typescript
// app/api/v1/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, validateStrongPassword } from '@/lib/utils/password.util';
import { generateToken } from '@/lib/utils/jwt.util';
import { sendOTP } from '@/services/twilio.service';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  const body = await req.json();
  const { username, email, password, phoneNumber } = body;

  // Validation
  if (!username || username.length < 3 || username.length > 30) {
    return NextResponse.json(
      { error: 'Username must be between 3 and 30 characters' },
      { status: 400 }
    );
  }

  // Check if user exists
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { username },
        { phoneNumber },
        ...(email ? [{ email }] : []),
      ],
    },
  });

  if (existingUser) {
    return NextResponse.json(
      { error: 'User already exists' },
      { status: 400 }
    );
  }

  // Validate password
  const passwordValidation = validateStrongPassword(password);
  if (!passwordValidation.valid) {
    return NextResponse.json(
      { error: passwordValidation.error },
      { status: 400 }
    );
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create user
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
      phoneNumber,
    },
  });

  // Send OTP
  await sendOTP(phoneNumber);

  // Generate token
  const token = generateToken({
    id: user.id,
    username: user.username,
    role: user.role,
    phoneNumber: user.phoneNumber,
  });

  return NextResponse.json(
    {
      message: 'User registered successfully. Please verify your phone number.',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
      },
    },
    { status: 201 }
  );
});
```

### Example: Admin Products List Route

**Before (Express):**
```typescript
router.post('/list', async (req, res) => {
  const { page = '1', limit = '50', categoryId, isAvailable } = req.body;
  // ... handler
});
```

**After (Next.js):**
```typescript
// app/api/v1/admin/products/list/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest) => {
    const body = await req.json();
    const { page = '1', limit = '50', categoryId, isAvailable } = body;
    
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
    if (categoryId) where.categoryId = categoryId;
    if (isAvailable !== undefined) {
      where.isAvailable = isAvailable === true || isAvailable === 'true';
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: { category: true },
        skip,
        take: limitNum,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.product.count({ where }),
    ]);

    return NextResponse.json({
      products,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  })
);
```

---

## Middleware Conversion

### Next.js Middleware (Edge Runtime)

Create `middleware.ts` in root:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // CORS headers
  const response = NextResponse.next();
  
  const origin = request.headers.get('origin');
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'];
  
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS, PATCH'
    );
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, stripe-signature'
    );
  }

  // Handle preflight
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200, headers: response.headers });
  }

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
```

### Request Validation Helper

Create `lib/validation.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export function validateBody<T>(
  req: NextRequest,
  schema: (body: any) => body is T
): T | NextResponse {
  try {
    const body = req.json();
    if (!schema(body)) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }
    return body;
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON' },
      { status: 400 }
    );
  }
}
```

---

## File Uploads

### Next.js File Upload Handler

Create `app/api/v1/admin/upload/image/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { uploadImage } from '@/services/supabase.service';
import { requireAdmin } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest) => {
    const formData = await req.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      );
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Only image files are allowed' },
        { status: 400 }
      );
    }

    const fileName = (formData.get('fileName') as string) || file.name;
    const folder = (formData.get('folder') as string) || 'products';

    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Supabase
    const result = await uploadImage(buffer, fileName, folder, file.type);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to upload image' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      url: result.url,
      message: 'Image uploaded successfully',
    });
  })
);
```

---

## Complete Route Examples

### 1. Auth Routes

**app/api/v1/auth/register/route.ts**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, validateStrongPassword } from '@/lib/utils/password.util';
import { generateToken } from '@/lib/utils/jwt.util';
import { sendOTP } from '@/services/twilio.service';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  const body = await req.json();
  // ... implementation from example above
});
```

**app/api/v1/auth/login/route.ts**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { comparePassword } from '@/lib/utils/password.util';
import { generateToken } from '@/lib/utils/jwt.util';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  const { username, password } = await req.json();
  
  // Find user
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { username },
        { email: username },
        { phoneNumber: username },
      ],
    },
  });

  if (!user) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  // Verify password
  const isValid = await comparePassword(password, user.password);
  if (!isValid) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  // Generate token
  const token = generateToken({
    id: user.id,
    username: user.username,
    role: user.role,
    phoneNumber: user.phoneNumber,
  });

  return NextResponse.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
    },
  });
});
```

### 2. Admin Products Routes

**app/api/v1/admin/products/route.ts** (Create)
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest) => {
    const body = await req.json();
    const { name, description, price, imageUrl, categoryId, isAvailable = true } = body;

    // Validation
    if (!name || !price || !categoryId) {
      return NextResponse.json(
        { error: 'Name, price, and categoryId are required' },
        { status: 400 }
      );
    }

    // Verify category exists
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        imageUrl,
        categoryId,
        isAvailable,
      },
      include: { category: true },
    });

    return NextResponse.json({ product }, { status: 201 });
  })
);
```

**app/api/v1/admin/products/get/route.ts**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest) => {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ product });
  })
);
```

**app/api/v1/admin/products/update/route.ts**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest) => {
    const body = await req.json();
    const { id, ...updateFields } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    const updateData: any = {};
    if (updateFields.name !== undefined) updateData.name = updateFields.name;
    if (updateFields.description !== undefined) updateData.description = updateFields.description;
    if (updateFields.price !== undefined) updateData.price = updateFields.price;
    if (updateFields.imageUrl !== undefined) updateData.imageUrl = updateFields.imageUrl;
    if (updateFields.isAvailable !== undefined) updateData.isAvailable = updateFields.isAvailable;
    
    if (updateFields.categoryId !== undefined) {
      const category = await prisma.category.findUnique({
        where: { id: updateFields.categoryId },
      });
      if (!category) {
        return NextResponse.json(
          { error: 'Category not found' },
          { status: 404 }
        );
      }
      updateData.category = { connect: { id: updateFields.categoryId } };
    }

    const product = await prisma.product.update({
      where: { id },
      data: updateData,
      include: { category: true },
    });

    return NextResponse.json({ product });
  })
);
```

**app/api/v1/admin/products/delete/route.ts**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest) => {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Product deleted successfully' });
  })
);
```

### 3. Stripe Webhook (Special Case)

**app/api/v1/payments/webhook/route.ts**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';
import { createApiHandler } from '@/lib/api-handler';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export const POST = createApiHandler(async (req: NextRequest) => {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${err}` },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      // Update order status
      await prisma.order.update({
        where: { paymentIntentId: paymentIntent.id },
        data: { status: 'PAID' },
      });
      break;
    // ... other event types
  }

  return NextResponse.json({ received: true });
});

// Disable body parsing for webhook
export const runtime = 'nodejs';
```

---

## Environment Variables

### Required Environment Variables

Create `.env.local`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# JWT
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN="7d"

# Twilio
TWILIO_ACCOUNT_SID="your_account_sid"
TWILIO_AUTH_TOKEN="your_auth_token"
TWILIO_PHONE_NUMBER="+1234567890"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# Supabase
SUPABASE_URL="https://xxx.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your_service_role_key"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"

# CORS
ALLOWED_ORIGINS="http://localhost:3000,https://yourdomain.com"
```

---

## Testing & Deployment

### Local Development

```bash
# Run development server
npm run dev

# Run Prisma Studio
npx prisma studio

# Run migrations
npx prisma migrate dev
```

### Testing API Routes

```bash
# Test register endpoint
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "Test123!@#",
    "phoneNumber": "+1234567890"
  }'

# Test admin products list (with auth token)
curl -X POST http://localhost:3000/api/v1/admin/products/list \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"page": "1", "limit": "10"}'
```

### Deployment Checklist

- [ ] Set all environment variables in production
- [ ] Run database migrations: `npx prisma migrate deploy`
- [ ] Build the application: `npm run build`
- [ ] Test all API endpoints
- [ ] Configure CORS for production domain
- [ ] Set up Stripe webhook URL in Stripe dashboard
- [ ] Configure Supabase bucket permissions
- [ ] Set up logging/monitoring
- [ ] Configure rate limiting (if needed)

---

## Migration Checklist

### Phase 1: Setup
- [ ] Create Next.js project
- [ ] Install dependencies
- [ ] Copy Prisma schema
- [ ] Set up database connection
- [ ] Configure environment variables

### Phase 2: Core Infrastructure
- [ ] Create Prisma client singleton
- [ ] Set up authentication helpers
- [ ] Create API handler wrapper
- [ ] Set up Next.js middleware
- [ ] Copy utilities and services

### Phase 3: Route Migration
- [ ] Migrate auth routes
- [ ] Migrate user routes
- [ ] Migrate menu routes
- [ ] Migrate order routes
- [ ] Migrate admin product routes
- [ ] Migrate admin category routes
- [ ] Migrate admin order routes
- [ ] Migrate payment routes
- [ ] Migrate webhook routes
- [ ] Migrate upload routes

### Phase 4: Testing
- [ ] Test all authentication endpoints
- [ ] Test all CRUD operations
- [ ] Test file uploads
- [ ] Test webhooks
- [ ] Test error handling
- [ ] Test authorization

### Phase 5: Deployment
- [ ] Update frontend API URLs
- [ ] Deploy to production
- [ ] Monitor logs
- [ ] Test in production

---

## Common Issues & Solutions

### Issue 1: Prisma Client Not Found
**Solution:** Make sure to run `npx prisma generate` after copying schema.

### Issue 2: CORS Errors
**Solution:** Configure Next.js middleware with proper CORS headers.

### Issue 3: File Upload Not Working
**Solution:** Use `FormData` in frontend, and `req.formData()` in Next.js API route.

### Issue 4: Environment Variables Not Loading
**Solution:** Use `.env.local` for local development, and set them in your hosting platform.

### Issue 5: Webhook Signature Verification Fails
**Solution:** Make sure to get raw body using `req.text()` and don't parse JSON for webhook routes.

---

## Additional Resources

- [Next.js API Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Next.js Middleware Documentation](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Prisma with Next.js](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)

---

## Support

If you encounter issues during migration:
1. Check Next.js logs
2. Verify environment variables
3. Test database connection
4. Check Prisma schema compatibility
5. Review API route structure

---

**Good luck with your migration! 🚀**
