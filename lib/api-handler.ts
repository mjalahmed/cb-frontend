import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/utils/logger.util';

export type ApiHandler = (
  req: NextRequest,
  context?: { params?: Record<string, string> }
) => Promise<NextResponse>;

export function createApiHandler(handler: ApiHandler): ApiHandler {
  return async (req: NextRequest, context) => {
    const startTime = Date.now();
    const url = new URL(req.url);
    const path = url.pathname;
    const method = req.method;
    
    // Extract IP and user agent
    const ip = req.headers.get('x-forwarded-for') || 
               req.headers.get('x-real-ip') || 
               'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';
    
    // Log incoming request
    logger.api(method, path, {
      ip,
      userAgent,
      query: Object.fromEntries(url.searchParams),
    });
    
    try {
      const response = await handler(req, context);
      const duration = Date.now() - startTime;
      
      // Log successful response
      logger.api(method, path, {
        status: response.status,
        duration,
        ip,
        userAgent,
      });
      
      return response;
    } catch (error) {
      const duration = Date.now() - startTime;
      
      // Log error
      logger.api(method, path, {
        status: 500,
        duration,
        ip,
        userAgent,
        error: error as Error,
      });
      
      logger.error('API Error', {
        url: req.url,
        method: req.method,
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      });

      // Handle ZodError if zod is installed
      if (error && typeof error === 'object' && 'errors' in error && Array.isArray((error as any).errors)) {
        const zodError = error as any;
        return NextResponse.json(
          { 
            errors: zodError.errors.map((err: any) => ({
              msg: err.message,
              param: err.path?.join('.') || '',
              location: 'body',
            }))
          },
          { status: 400 }
        );
      }

      // Don't expose internal JWT errors or sensitive error messages
      const errorMessage = error instanceof Error ? error.message : 'Internal server error';
      
      // Check if it's a JWT-related error and return a generic message instead
      if (errorMessage.includes('JWS') || 
          errorMessage.includes('JWT') || 
          errorMessage.includes('token') ||
          errorMessage.includes('JsonWebToken')) {
        console.error('JWT-related error caught in API handler:', errorMessage);
        return NextResponse.json(
          { error: 'Authentication failed' },
          { status: 401 }
        );
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }
  };
}
