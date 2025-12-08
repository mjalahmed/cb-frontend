import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials not configured. Image upload will be disabled.');
}

// Create a dedicated service role client that bypasses RLS
// This client should never be shared with user sessions to avoid JWT conflicts
// The service role key is used directly in client creation and bypasses RLS
// See: https://supabase.com/docs/guides/auth/jwts
// Important: Never pass user JWT tokens to this client - it uses service role key only
const supabase: SupabaseClient | null = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false,
      },
    })
  : null;

export interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

export async function uploadImage(
  buffer: Buffer,
  fileName: string,
  folder: string = 'products',
  contentType: string = 'image/jpeg'
): Promise<UploadResult> {
  if (!supabase) {
    return {
      success: false,
      error: 'Supabase is not configured',
    };
  }

  // Ensure we're using a fresh service role client for each upload
  // This prevents any potential JWT token conflicts from user sessions
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

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('product-images')
      .upload(filePath, buffer, {
        contentType,
        upsert: false,
      });

    if (error) {
      console.error('Supabase upload error:', error);
      return {
        success: false,
        error: error.message || 'Failed to upload image',
      };
    }

    if (!data) {
      console.error('Upload succeeded but no data returned');
      return {
        success: false,
        error: 'Upload succeeded but no data returned',
      };
    }

    // Use the path from the upload response, or fallback to the original filePath
    const uploadedPath = data.path || filePath;

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('product-images')
      .getPublicUrl(uploadedPath);

    // Ensure we have a valid URL
    if (!urlData || !urlData.publicUrl) {
      console.error('Failed to get public URL', { urlData, path: uploadedPath });
      // If public URL fails, try to construct it manually as a fallback
      const manualUrl = `${supabaseUrl}/storage/v1/object/public/product-images/${uploadedPath}`;
      console.log('Using manual URL construction:', manualUrl);
      return {
        success: true,
        url: manualUrl,
      };
    }

    console.log('Successfully uploaded image:', urlData.publicUrl);
    return {
      success: true,
      url: urlData.publicUrl,
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload image',
    };
  }
}
