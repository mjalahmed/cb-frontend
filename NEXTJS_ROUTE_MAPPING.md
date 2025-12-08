# Next.js Route Mapping Reference

Quick reference for converting Express routes to Next.js API routes.

## Route Structure Conversion

### Express Pattern
```
POST /api/v1/auth/register
→ app/api/v1/auth/register/route.ts
```

### Next.js Pattern
```
app/
└── api/
    └── v1/
        └── auth/
            └── register/
                └── route.ts  (exports POST)
```

---

## Complete Route Mapping

### Authentication Routes

| Express Route | Method | Next.js Route File | Handler Export |
|--------------|--------|-------------------|----------------|
| `/api/v1/auth/register` | POST | `app/api/v1/auth/register/route.ts` | `export const POST` |
| `/api/v1/auth/login` | POST | `app/api/v1/auth/login/route.ts` | `export const POST` |
| `/api/v1/auth/send-otp` | POST | `app/api/v1/auth/send-otp/route.ts` | `export const POST` |
| `/api/v1/auth/verify-phone` | POST | `app/api/v1/auth/verify-phone/route.ts` | `export const POST` |
| `/api/v1/auth/refresh` | POST | `app/api/v1/auth/refresh/route.ts` | `export const POST` |

### User Routes

| Express Route | Method | Next.js Route File | Handler Export |
|--------------|--------|-------------------|----------------|
| `/api/v1/user/profile` | GET | `app/api/v1/user/profile/route.ts` | `export const GET` |
| `/api/v1/user/profile` | POST | `app/api/v1/user/profile/route.ts` | `export const POST` |
| `/api/v1/user/update` | POST | `app/api/v1/user/update/route.ts` | `export const POST` |

### Menu Routes

| Express Route | Method | Next.js Route File | Handler Export |
|--------------|--------|-------------------|----------------|
| `/api/v1/menu` | GET | `app/api/v1/menu/route.ts` | `export const GET` |
| `/api/v1/menu/categories` | GET | `app/api/v1/menu/categories/route.ts` | `export const GET` |

### Order Routes

| Express Route | Method | Next.js Route File | Handler Export |
|--------------|--------|-------------------|----------------|
| `/api/v1/orders` | POST | `app/api/v1/orders/route.ts` | `export const POST` |
| `/api/v1/orders/:id` | GET | `app/api/v1/orders/[id]/route.ts` | `export const GET` |
| `/api/v1/orders/:id` | POST | `app/api/v1/orders/[id]/route.ts` | `export const POST` |

### Admin Product Routes

| Express Route | Method | Next.js Route File | Handler Export |
|--------------|--------|-------------------|----------------|
| `/api/v1/admin/products` | POST | `app/api/v1/admin/products/route.ts` | `export const POST` |
| `/api/v1/admin/products/list` | POST | `app/api/v1/admin/products/list/route.ts` | `export const POST` |
| `/api/v1/admin/products/get` | POST | `app/api/v1/admin/products/get/route.ts` | `export const POST` |
| `/api/v1/admin/products/update` | POST | `app/api/v1/admin/products/update/route.ts` | `export const POST` |
| `/api/v1/admin/products/delete` | POST | `app/api/v1/admin/products/delete/route.ts` | `export const POST` |

### Admin Category Routes

| Express Route | Method | Next.js Route File | Handler Export |
|--------------|--------|-------------------|----------------|
| `/api/v1/admin/categories` | POST | `app/api/v1/admin/categories/route.ts` | `export const POST` |
| `/api/v1/admin/categories/list` | POST | `app/api/v1/admin/categories/list/route.ts` | `export const POST` |
| `/api/v1/admin/categories/get` | POST | `app/api/v1/admin/categories/get/route.ts` | `export const POST` |
| `/api/v1/admin/categories/update` | POST | `app/api/v1/admin/categories/update/route.ts` | `export const POST` |
| `/api/v1/admin/categories/delete` | POST | `app/api/v1/admin/categories/delete/route.ts` | `export const POST` |

### Admin Order Routes

| Express Route | Method | Next.js Route File | Handler Export |
|--------------|--------|-------------------|----------------|
| `/api/v1/admin/orders/list` | POST | `app/api/v1/admin/orders/list/route.ts` | `export const POST` |
| `/api/v1/admin/orders/:id` | GET | `app/api/v1/admin/orders/[id]/route.ts` | `export const GET` |
| `/api/v1/admin/orders/:id/status` | POST | `app/api/v1/admin/orders/[id]/status/route.ts` | `export const POST` |

### Upload Routes

| Express Route | Method | Next.js Route File | Handler Export |
|--------------|--------|-------------------|----------------|
| `/api/v1/admin/upload/image` | POST | `app/api/v1/admin/upload/image/route.ts` | `export const POST` |

### Payment Routes

| Express Route | Method | Next.js Route File | Handler Export |
|--------------|--------|-------------------|----------------|
| `/api/v1/payments/create-intent` | POST | `app/api/v1/payments/create-intent/route.ts` | `export const POST` |
| `/api/v1/payments/webhook` | POST | `app/api/v1/payments/webhook/route.ts` | `export const POST` |

---

## Dynamic Routes

### Express Dynamic Route
```typescript
router.get('/orders/:id', handler);
```

### Next.js Dynamic Route
```typescript
// app/api/v1/orders/[id]/route.ts
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  // ...
};
```

---

## Route Handler Template

### Basic Route Handler
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  const body = await req.json();
  // Your logic here
  return NextResponse.json({ data: 'success' });
});
```

### Protected Route Handler
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAuth(async (req: NextRequest, user) => {
    const body = await req.json();
    // Your logic here
    return NextResponse.json({ data: 'success' });
  })
);
```

### Admin Route Handler
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest, user) => {
    const body = await req.json();
    // Your logic here
    return NextResponse.json({ data: 'success' });
  })
);
```

### Dynamic Route Handler
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createApiHandler } from '@/lib/api-handler';

export const GET = createApiHandler(
  async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    const { id } = params;
    // Your logic here
    return NextResponse.json({ id });
  }
);
```

---

## Request/Response Conversion

### Express Request → Next.js Request

| Express | Next.js |
|---------|---------|
| `req.body` | `await req.json()` |
| `req.query` | `new URL(req.url).searchParams` |
| `req.params.id` | `params.id` (from context) |
| `req.headers.authorization` | `req.headers.get('authorization')` |
| `req.file` | `formData.get('file')` |

### Express Response → Next.js Response

| Express | Next.js |
|---------|---------|
| `res.json(data)` | `NextResponse.json(data)` |
| `res.status(400).json(data)` | `NextResponse.json(data, { status: 400 })` |
| `res.status(201).json(data)` | `NextResponse.json(data, { status: 201 })` |

---

## Example Conversions

### Example 1: Simple GET Route

**Express:**
```typescript
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
```

**Next.js:**
```typescript
// app/api/health/route.ts
import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json({ status: 'ok' });
};
```

### Example 2: POST with Body

**Express:**
```typescript
router.post('/create', async (req, res) => {
  const { name } = req.body;
  // ...
  res.json({ success: true });
});
```

**Next.js:**
```typescript
// app/api/create/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const { name } = await req.json();
  // ...
  return NextResponse.json({ success: true });
};
```

### Example 3: Query Parameters

**Express:**
```typescript
router.get('/search', (req, res) => {
  const { q } = req.query;
  // ...
});
```

**Next.js:**
```typescript
// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const GET = (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');
  // ...
};
```

---

## Quick Migration Steps

1. **Create route file** in `app/api/[path]/route.ts`
2. **Export HTTP method** (`GET`, `POST`, `PUT`, `DELETE`, etc.)
3. **Convert `req.body`** to `await req.json()`
4. **Convert `req.query`** to `new URL(req.url).searchParams`
5. **Convert `res.json()`** to `NextResponse.json()`
6. **Add authentication** using `requireAuth` or `requireAdmin`
7. **Wrap handler** with `createApiHandler` for error handling

---

## Notes

- All routes are in `app/api/` directory
- Each route is a folder with `route.ts` file
- Export named exports: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`
- Dynamic routes use `[param]` folder name
- Catch-all routes use `[...param]` folder name
