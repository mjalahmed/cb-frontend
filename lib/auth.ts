import { NextRequest, NextResponse } from 'next/server';
import { verifyToken as verifyJwtToken } from './utils/jwt.util';

export interface AuthUser {
  id: string;
  username: string;
  role: 'CUSTOMER' | 'ADMIN';
  phoneNumber: string;
}

// Extend NextRequest to include user
declare module 'next/server' {
  interface NextRequest {
    user?: AuthUser;
  }
}

export function verifyToken(token: string): AuthUser | null {
  return verifyJwtToken(token);
}

export async function authenticate(request: NextRequest): Promise<AuthUser | null> {
  try {
    // Try both lowercase and capitalized header names (some proxies normalize headers)
    const authHeader = request.headers.get('authorization') || 
                       request.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.warn('No authorization header or invalid format', {
        hasAuth: !!authHeader,
        startsWithBearer: authHeader?.startsWith('Bearer '),
        headerKeys: Array.from(request.headers.keys())
      });
      return null;
    }

    const token = authHeader.substring(7).trim();
    
    if (!token) {
      console.warn('Empty token after Bearer prefix');
      return null;
    }

    // Log token length for debugging (don't log the actual token for security)
    console.log('Attempting to verify token', { tokenLength: token.length, firstChars: token.substring(0, 10) });

    const decoded = verifyToken(token);
    
    if (!decoded) {
      console.warn('Token verification failed');
    }
    
    return decoded;
  } catch (error) {
    console.error('Authentication error:', error);
    // Ensure we never throw - always return null on error
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
    try {
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
    } catch (error) {
      // Catch any unexpected errors during authentication
      console.error('Error in requireAdmin:', error);
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      );
    }
  };
}
