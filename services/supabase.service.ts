/**
 * Supabase Storage Service
 * 
 * Supabase JWT Header Requirements for Direct API Calls:
 * 
 * Header must be:
 * {
 *   "alg": "HS256",
 *   "typ": "JWT"
 * }
 * 
 * - Header must be Base64URL-encoded
 * - Token must be signed with SUPABASE_JWT_SECRET (from Supabase project settings > API > JWT Secret)
 * - If token is malformed, empty, not Base64URL, or wrong alg → Supabase throws: "JWS Protected Header is invalid"
 * 
 * The functions in this file handle JWT token generation with the correct header format.
 * Use getSupabaseStorageHeaders() to get headers for direct HTTP requests to Supabase Storage API.
 */

import { generateSupabaseJWT, verifySupabaseJWT } from '@/lib/utils/jwt.util';
import { getSupabaseClient } from '@/lib/supabase/client';
import logger from '@/lib/utils/logger.util';

// Get environment variables for JWT generation and direct API calls
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Get the singleton Supabase client instance
 * 
 * This function returns the same client instance across all calls,
 * ensuring we only establish one connection to Supabase.
 * 
 * @returns SupabaseClient instance or null if not configured
 */
export function getSupabase(): ReturnType<typeof getSupabaseClient> {
  return getSupabaseClient();
}

/**
 * Generate a Supabase JWT token for direct HTTP API calls
 * 
 * CRITICAL REQUIREMENTS:
 * 1. Uses HS256 algorithm (only one Supabase accepts)
 * 2. Header: {"alg": "HS256", "typ": "JWT"}
 * 3. Signed with SUPABASE_JWT_SECRET (from Project Settings > API > JWT Secret)
 * 4. "sub" must be a string (user ID)
 * 5. "role" should be 'authenticated' or 'service_role'
 * 
 * Use this token in the Authorization header: `Bearer <token>`
 * 
 * @param userId - User ID (sub claim) - MUST be a string
 * @param role - User role ('authenticated' or 'service_role', default: 'service_role')
 * @returns JWT token string
 */
export function getSupabaseJWTToken(
  userId: string = 'service-role',
  role: string = 'service_role'
): string {
  // Validate userId is a string (Supabase requirement)
  if (!userId || typeof userId !== 'string') {
    throw new Error('userId (sub) must be a non-empty string');
  }

  // Validate role
  if (!role || typeof role !== 'string') {
    throw new Error('role must be a non-empty string');
  }

  // Generate JWT with proper payload structure
  const token = generateSupabaseJWT({
    iss: supabaseUrl || 'https://supabase.co',
    sub: userId, // REQUIRED: Must be string
    aud: role,
    role: role, // Usually 'authenticated' or 'service_role'
    // exp and iat will be set automatically by generateSupabaseJWT
  }, '1h'); // 1 hour expiration

  // Log token generation for debugging (don't log the actual token in production)
  if (process.env.NODE_ENV === 'development') {
    logger.debug('Generated Supabase JWT token', {
      userId: userId.substring(0, 8) + '...',
      role,
      tokenLength: token.length,
    });
  }

  return token;
}

/**
 * Get headers for direct Supabase Storage API calls
 * 
 * Returns headers with proper JWT Authorization header that Supabase requires:
 * - Authorization: Bearer <JWT-token>
 * - The JWT token has header: {"alg": "HS256", "typ": "JWT"} (Base64URL-encoded)
 * 
 * @param userId - User ID (optional, defaults to service role)
 * @param role - User role (optional, defaults to 'service_role')
 * @returns Headers object with Authorization header
 */
export function getSupabaseStorageHeaders(
  userId?: string,
  role?: string
): Record<string, string> {
  const token = getSupabaseJWTToken(userId, role);
  
  // Verify token locally in development (helps catch errors early)
  if (process.env.NODE_ENV === 'development') {
    const verified = verifySupabaseJWT(token);
    if (!verified) {
      logger.warn('Generated JWT token failed local verification - check SUPABASE_JWT_SECRET');
    } else {
      logger.debug('JWT token verified locally', {
        sub: verified.sub,
        role: verified.role,
        exp: new Date((verified.exp || 0) * 1000).toISOString(),
      });
    }
  }
  
  return {
    'Authorization': `Bearer ${token}`,
    'apikey': supabaseKey || '',
  };
}

export interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

/**
 * Upload image directly to Supabase Storage using HTTP API with proper JWT headers
 * 
 * This function demonstrates how to make direct HTTP requests to Supabase Storage API
 * with the correct JWT header format:
 * - Header: {"alg": "HS256", "typ": "JWT"} (Base64URL-encoded)
 * - Signed with SUPABASE_JWT_SECRET
 * 
 * @param buffer - File buffer to upload
 * @param fileName - Name of the file
 * @param folder - Folder path in storage bucket
 * @param contentType - MIME type of the file
 * @returns Upload result with URL or error
 */
export async function uploadImageDirect(
  buffer: Buffer,
  fileName: string,
  folder: string = 'products',
  contentType: string = 'image/jpeg'
): Promise<UploadResult> {
  if (!supabaseUrl || !supabaseKey) {
    return {
      success: false,
      error: 'Supabase credentials not available',
    };
  }

  try {
    // Generate unique filename
    const timestamp = Date.now();
    const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const uniqueFileName = `${timestamp}_${sanitizedFileName}`;
    const filePath = `${folder}/${uniqueFileName}`;
    

    // Get proper JWT headers for Supabase Storage API
    const headers = getSupabaseStorageHeaders();
    
    // Construct the Supabase Storage API URL
    const bucketName = 'products-images';
    const uploadUrl = `${supabaseUrl}/storage/v1/object/${bucketName}/${filePath}`;

    // Make direct HTTP request to Supabase Storage API
    // Convert Buffer to Uint8Array for fetch compatibility
    const body = new Uint8Array(buffer);
    const response = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': contentType,
        'x-upsert': 'false', // Don't overwrite existing files
      },
      body: body,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Upload failed' }));
      console.error('Supabase direct upload error:', errorData);
      return {
        success: false,
        error: errorData.message || `Upload failed with status ${response.status}`,
      };
    }

    const data = await response.json();
    const uploadedPath = data.path || filePath;

    // Construct public URL
    const publicUrl = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${uploadedPath}`;

    return {
      success: true,
      url: publicUrl,
    };
  } catch (error) {
    console.error('Direct upload error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload image',
    };
  }
}

export async function uploadImage(
  buffer: Buffer,
  fileName: string,
  folder: string = 'products',
  contentType: string = 'image/jpeg'
): Promise<UploadResult> {
  const startTime = Date.now();
  
  // Get the singleton Supabase client instance
  const supabase = getSupabase();
  
  if (!supabase) {
    logger.error('Supabase upload failed: client not configured');
    return {
      success: false,
      error: 'Supabase is not configured',
    };
  }

  if (!supabaseUrl || !supabaseKey) {
    logger.error('Supabase upload failed: credentials not available');
    return {
      success: false,
      error: 'Supabase credentials not available',
    };
  }

  try {
    // Generate unique filename
    const timestamp = Date.now();
    const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const uniqueFileName = `${timestamp}_${sanitizedFileName}`;
    const filePath = `${folder}/${uniqueFileName}`;

    logger.info('Uploading image to Supabase', {
      fileName: uniqueFileName,
      folder,
      contentType,
      size: buffer.length,
    });

    // Upload to Supabase Storage using the singleton client
    const uploadStart = Date.now();
    const { data, error } = await supabase.storage
      .from('products-images')
      .upload(filePath, buffer, {
        contentType,
        upsert: false,
      });
    const uploadDuration = Date.now() - uploadStart;

    if (error) {
      logger.error('Supabase upload error', {
        error: error.message,
        path: filePath,
        duration: uploadDuration,
      });
      return {
        success: false,
        error: error.message || 'Failed to upload image',
      };
    }

    if (!data) {
      logger.error('Upload succeeded but no data returned', {
        path: filePath,
        duration: uploadDuration,
      });
      return {
        success: false,
        error: 'Upload succeeded but no data returned',
      };
    }

    // Use the path from the upload response, or fallback to the original filePath
    const uploadedPath = data.path || filePath;

    // Get public URL using the singleton client
    const { data: urlData } = supabase.storage
      .from('products-images')
      .getPublicUrl(uploadedPath);

    // Ensure we have a valid URL
    if (!urlData || !urlData.publicUrl) {
      logger.warn('Failed to get public URL, using manual construction', {
        urlData,
        path: uploadedPath,
      });
      // If public URL fails, try to construct it manually as a fallback
      const manualUrl = `${supabaseUrl}/storage/v1/object/public/products-images/${uploadedPath}`;
      logger.success('Image uploaded successfully (manual URL)', {
        url: manualUrl,
        duration: Date.now() - startTime,
      });
      return {
        success: true,
        url: manualUrl,
      };
    }

    logger.success('Image uploaded successfully', {
      url: urlData.publicUrl,
      path: uploadedPath,
      duration: Date.now() - startTime,
    });
    
    return {
      success: true,
      url: urlData.publicUrl,
    };
  } catch (error) {
    logger.error('Upload error', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      duration: Date.now() - startTime,
    });
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload image',
    };
  }
}
