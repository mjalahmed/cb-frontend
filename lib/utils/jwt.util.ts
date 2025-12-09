import jwt from 'jsonwebtoken';

export interface JwtPayload {
  id: string;
  username: string;
  role: 'CUSTOMER' | 'ADMIN';
  phoneNumber: string;
}

export function generateToken(payload: JwtPayload): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not configured');
  }
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d';
  return jwt.sign(payload, secret, { expiresIn } as jwt.SignOptions);
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    // Basic validation
    if (!token || typeof token !== 'string') {
      console.error('Invalid token: token is not a string or is empty');
      return null;
    }

    // Trim whitespace and remove any quotes that might have been added
    token = token.trim().replace(/^["']|["']$/g, '');

    // Basic format check (should have 3 parts separated by dots)
    const parts = token.split('.');
    if (parts.length !== 3) {
      console.error('Invalid token format: JWT should have 3 parts', { 
        parts: parts.length,
        tokenPreview: token.substring(0, 50) 
      });
      return null;
    }

    // Check if parts are not empty
    if (parts.some(part => !part || part.length === 0)) {
      console.error('Invalid token format: JWT parts are empty');
      return null;
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('JWT_SECRET is not configured');
      return null;
    }

    // Let jwt.verify handle all JWT format validation
    // Use a more defensive approach to catch any possible errors
    let decoded: JwtPayload;
    try {
      decoded = jwt.verify(token, secret) as JwtPayload;
    } catch (jwtError: any) {
      // Re-throw to be caught by outer catch block
      throw jwtError;
    }
    return decoded;
  } catch (error) {
    // Catch all JWT-related errors and return null instead of throwing
    if (error instanceof jwt.JsonWebTokenError) {
      console.error('JWT verification error:', error.message, { 
        name: error.name,
        // Don't log full token, but log first few chars for debugging
        tokenPreview: token?.substring(0, 20) 
      });
      return null;
    } else if (error instanceof jwt.TokenExpiredError) {
      console.error('JWT expired:', error.expiredAt);
      return null;
    } else if (error instanceof jwt.NotBeforeError) {
      console.error('JWT not active yet:', error.date);
      return null;
    } else {
      console.error('JWT verification error:', error);
    return null;
    }
  }
}
