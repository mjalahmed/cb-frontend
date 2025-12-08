# Next.js Migration Quick Start Guide

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create Next.js Project

```bash
npx create-next-app@latest cb-nextjs --typescript --tailwind --app --no-src-dir
cd cb-nextjs
```

### Step 2: Install Dependencies

```bash
npm install @prisma/client bcryptjs jsonwebtoken stripe twilio @supabase/supabase-js winston
npm install -D @types/bcryptjs @types/jsonwebtoken prisma tsx
```

### Step 3: Copy Prisma Files

```bash
# Copy Prisma schema
cp -r ../cb-backend/prisma ./

# Generate Prisma Client
npx prisma generate
```

### Step 4: Create Essential Files

#### `lib/prisma.ts`
```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

#### `lib/auth.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './utils/jwt.util';

export interface AuthUser {
  id: string;
  username: string;
  role: 'USER' | 'ADMIN';
  phoneNumber: string;
}

export async function authenticate(req: NextRequest): Promise<AuthUser | null> {
  const authHeader = req.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) return null;
  
  try {
    const token = authHeader.substring(7);
    return verifyToken(token) as AuthUser;
  } catch {
    return null;
  }
}

export function requireAuth(handler: (req: NextRequest, user: AuthUser) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const user = await authenticate(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return handler(req, user);
  };
}

export function requireAdmin(handler: (req: NextRequest, user: AuthUser) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const user = await authenticate(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
    return handler(req, user);
  };
}
```

#### `lib/api-handler.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
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
      });
      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Internal server error' },
        { status: 500 }
      );
    }
  };
}
```

#### `middleware.ts` (Root level)
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const origin = request.headers.get('origin');
  
  if (origin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, stripe-signature');
  }

  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200, headers: response.headers });
  }

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
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

### Step 6: Set Environment Variables

Create `.env.local`:

```env
DATABASE_URL="your_database_url"
JWT_SECRET="your_jwt_secret"
JWT_EXPIRES_IN="7d"
TWILIO_ACCOUNT_SID="your_twilio_sid"
TWILIO_AUTH_TOKEN="your_twilio_token"
TWILIO_PHONE_NUMBER="+1234567890"
STRIPE_SECRET_KEY="your_stripe_secret"
STRIPE_WEBHOOK_SECRET="your_webhook_secret"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"
SUPABASE_URL="your_supabase_url"
SUPABASE_SERVICE_ROLE_KEY="your_supabase_key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

### Step 7: Create Your First API Route

Create `app/api/v1/auth/register/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/utils/password.util';
import { generateToken } from '@/lib/utils/jwt.util';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(async (req: NextRequest) => {
  const { username, password, phoneNumber } = await req.json();

  // Validation
  if (!username || !password || !phoneNumber) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  // Check if user exists
  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ username }, { phoneNumber }] },
  });

  if (existingUser) {
    return NextResponse.json(
      { error: 'User already exists' },
      { status: 400 }
    );
  }

  // Create user
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: { username, password: hashedPassword, phoneNumber },
  });

  // Generate token
  const token = generateToken({
    id: user.id,
    username: user.username,
    role: user.role,
    phoneNumber: user.phoneNumber,
  });

  return NextResponse.json(
    { token, user: { id: user.id, username: user.username } },
    { status: 201 }
  );
});
```

### Step 8: Test Your Route

```bash
# Start dev server
npm run dev

# Test in another terminal
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"Test123!","phoneNumber":"+1234567890"}'
```

---

## 📁 Project Structure

```
cb-nextjs/
├── app/
│   ├── api/
│   │   └── v1/
│   │       ├── auth/
│   │       │   └── register/
│   │       │       └── route.ts
│   │       └── admin/
│   │           └── products/
│   │               └── route.ts
│   └── page.tsx
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── api-handler.ts
│   └── utils/
├── services/
├── types/
├── prisma/
├── middleware.ts
└── package.json
```

---

## ✅ Checklist

- [ ] Next.js project created
- [ ] Dependencies installed
- [ ] Prisma schema copied
- [ ] Essential files created (`lib/prisma.ts`, `lib/auth.ts`, etc.)
- [ ] Utilities and services copied
- [ ] Environment variables set
- [ ] First API route created and tested
- [ ] Development server running

---

## 🎯 Next Steps

1. Migrate all routes one by one (see `NEXTJS_ROUTE_MAPPING.md`)
2. Test each route after migration
3. Update frontend API URLs
4. Deploy to production

---

## 🆘 Common Issues

**Issue:** `Module not found: Can't resolve '@/lib/prisma'`
**Solution:** Add to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Issue:** `Prisma Client not found`
**Solution:** Run `npx prisma generate`

**Issue:** Environment variables not loading
**Solution:** Make sure file is named `.env.local` (not `.env`)

---

## 📚 Full Documentation

- Complete migration guide: `NEXTJS_MIGRATION_GUIDE.md`
- Route mapping: `NEXTJS_ROUTE_MAPPING.md`

---

**You're ready to start migrating! 🚀**
