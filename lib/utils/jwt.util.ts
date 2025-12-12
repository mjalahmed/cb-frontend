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

/**
 * Generate a Supabase-compatible JWT token for direct API calls
 * 
 * Supabase JWT Requirements (CRITICAL):
 * 1. Algorithm MUST be HS256 (nothing else works)
 * 2. Header MUST be exactly: {"alg": "HS256", "typ": "JWT"} (no extra fields)
 * 3. "sub" MUST be a string (user ID)
 * 4. Token MUST be signed with SUPABASE_JWT_SECRET (from Supabase Project Settings > API > JWT Secret)
 * 5. "exp" is required (expiration timestamp)
 * 6. "role" should be 'authenticated' or 'service_role'
 * 
 * @param payload - JWT payload with Supabase claims
 * @param expiresIn - Token expiration time (default: 1h)
 * @returns JWT token string with correct header format
 */
export function generateSupabaseJWT(
  payload: {
    iss?: string; // Issuer (usually Supabase project URL)
    sub: string; // Subject (user ID) - REQUIRED, MUST be string
    aud?: string; // Audience (usually 'authenticated' or 'service_role')
    role?: string; // User role ('authenticated', 'service_role', etc.)
    exp?: number; // Expiration timestamp (will be set if not provided)
    iat?: number; // Issued at timestamp (will be set if not provided)
    [key: string]: any; // Additional claims
  },
  expiresIn: string | number = '1h'
): string {
  const supabaseJwtSecret = process.env.SUPABASE_JWT_SECRET;
  if (!supabaseJwtSecret) {
    throw new Error(
      'SUPABASE_JWT_SECRET is not configured. ' +
      'Get this from: Supabase Dashboard > Project Settings > API > JWT Secret. ' +
      '⚠️ NOT the service_role key, NOT the anon key, NOT the database password.'
    );
  }

  // Validate that sub is a string (Supabase requirement)
  if (!payload.sub || typeof payload.sub !== 'string') {
    throw new Error('JWT payload "sub" must be a non-empty string');
  }

  // Ensure exp is set (required by Supabase)
  const now = Math.floor(Date.now() / 1000);
  const finalPayload = {
    ...payload,
    iat: payload.iat || now,
    exp: payload.exp || (now + (typeof expiresIn === 'string' 
      ? (expiresIn.includes('h') ? parseInt(expiresIn) * 3600 
        : expiresIn.includes('d') ? parseInt(expiresIn) * 86400 
        : 3600)
      : expiresIn)),
  };

  // Sign with HS256 algorithm (ONLY algorithm Supabase accepts)
  // jsonwebtoken automatically creates header: {"alg": "HS256", "typ": "JWT"}
  const options = {
    algorithm: 'HS256' as const, // CRITICAL: Supabase ONLY accepts HS256
    ...(typeof expiresIn === 'string' ? { expiresIn } : {}),
  } as jwt.SignOptions;

  return jwt.sign(finalPayload, supabaseJwtSecret, options);
}

/**
 * Decode a JWT token without verification (for debugging)
 * 
 * Use this to inspect the header and payload of a token.
 * This does NOT verify the signature - use verifySupabaseJWT() for that.
 * 
 * @param token - JWT token to decode
 * @returns Object with header and payload, or null if invalid
 */
export function decodeSupabaseJWT(token: string): { header: any; payload: any } | null {
  try {
    const decoded = jwt.decode(token, { complete: true });
    if (!decoded || typeof decoded === 'string') {
      return null;
    }
    return {
      header: decoded.header,
      payload: decoded.payload,
    };
  } catch (error) {
    console.error('Failed to decode JWT:', error);
    return null;
  }
}

/**
 * Verify a Supabase JWT token locally (for debugging)
 * 
 * Use this to verify your token is correct BEFORE sending it to Supabase.
 * If this fails locally, the token is wrong before even sending it.
 * 
 * @param token - JWT token to verify
 * @returns Decoded payload if valid, null if invalid
 */
export function verifySupabaseJWT(token: string): any | null {
  try {
    const supabaseJwtSecret = process.env.SUPABASE_JWT_SECRET;
    if (!supabaseJwtSecret) {
      throw new Error('SUPABASE_JWT_SECRET is not configured');
    }

    // First, decode to check header
    const decoded = decodeSupabaseJWT(token);
    if (!decoded) {
      console.error('Failed to decode JWT token');
      return null;
    }

    // Check header algorithm
    if (decoded.header.alg !== 'HS256') {
      console.error(`Invalid algorithm: ${decoded.header.alg}. Supabase only accepts HS256`);
      return null;
    }

    // Check header type
    if (decoded.header.typ !== 'JWT') {
      console.error(`Invalid type: ${decoded.header.typ}. Expected JWT`);
      return null;
    }

    // Check payload structure
    if (!decoded.payload.sub || typeof decoded.payload.sub !== 'string') {
      console.error('Invalid payload: "sub" must be a non-empty string');
      return null;
    }

    // Verify token with the same secret used to sign it
    const verified = jwt.verify(token, supabaseJwtSecret, {
      algorithms: ['HS256'], // Only accept HS256
    });

    return verified;
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      console.error('JWT verification failed:', error.message);
    } else if (error instanceof jwt.TokenExpiredError) {
      console.error('JWT expired at:', error.expiredAt);
    } else {
      console.error('JWT verification error:', error);
    }
    return null;
  }
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
