/**
 * Supabase Client Singleton
 * 
 * This module ensures that only ONE Supabase client instance is created
 * and reused across the entire application. This prevents connection issues
 * and improves performance by reusing the same connection.
 * 
 * Usage:
 *   import { getSupabaseClient } from '@/lib/supabase/client';
 *   const supabase = getSupabaseClient();
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import logger from '@/lib/utils/logger.util';

// Singleton instance
let supabaseClient: SupabaseClient | null = null;
let isInitialized = false;

/**
 * Get or create the singleton Supabase client instance
 * 
 * This function ensures that only one client is created and reused.
 * The client is lazily initialized on first access.
 * 
 * @returns SupabaseClient instance or null if credentials are not configured
 * @throws Error if client initialization fails
 */
export function getSupabaseClient(): SupabaseClient | null {
  // Return existing client if already initialized
  if (isInitialized) {
    return supabaseClient;
  }

  // Mark as initializing to prevent race conditions
  isInitialized = true;

  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // Validate credentials
    if (!supabaseUrl || !supabaseKey) {
      logger.connection('Supabase', 'error', {
        message: 'Credentials not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.',
      });
      return null;
    }

    // Create the client with optimal configuration for server-side usage
    supabaseClient = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false, // Disable token refresh for service role
        persistSession: false,   // Don't persist sessions on server
        detectSessionInUrl: false, // Don't detect sessions in URL
      },
      global: {
        headers: {
          'x-client-info': 'chocobar-frontend',
        },
      },
    });

    logger.connection('Supabase', 'connect', {
      url: supabaseUrl.replace(/\/\/.*@/, '//***@'), // Hide credentials in logs
    });
    
    return supabaseClient;
  } catch (error) {
    logger.connection('Supabase', 'error', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    isInitialized = false; // Reset on error to allow retry
    throw error;
  }
}

/**
 * Reset the singleton instance (useful for testing or re-initialization)
 * 
 * WARNING: Only use this in tests or when you need to force re-initialization
 */
export function resetSupabaseClient(): void {
  supabaseClient = null;
  isInitialized = false;
}

/**
 * Check if the Supabase client is initialized
 */
export function isSupabaseClientInitialized(): boolean {
  return isInitialized && supabaseClient !== null;
}

