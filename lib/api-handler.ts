import { NextRequest, NextResponse } from 'next/server';

export type ApiHandler = (
  req: NextRequest,
  context?: { params?: Record<string, string> }
) => Promise<NextResponse>;

export function createApiHandler(handler: ApiHandler): ApiHandler {
  return async (req: NextRequest, context) => {
    try {
      return await handler(req, context);
    } catch (error) {
      console.error('API Error', {
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
