import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Handle API routes CORS
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const response = NextResponse.next();
    const origin = request.headers.get('origin');
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
      'http://localhost:3000',
    ];
    
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

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { status: 200, headers: response.headers });
    }

    return response;
  }

  // Handle i18n routes
  return intlMiddleware(request);
}

export const config = {
  // Match internationalized pathnames and API routes
  matcher: ['/', '/(ar|en)/:path*', '/api/:path*'],
};

