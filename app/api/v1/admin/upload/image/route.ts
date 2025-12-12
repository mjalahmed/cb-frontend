import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, type AuthUser } from '@/lib/auth';
import { uploadImage } from '@/services/supabase.service';
import { createApiHandler } from '@/lib/api-handler';
import logger from '@/lib/utils/logger.util';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest, user: AuthUser) => {
    logger.info('Image upload request', { userId: user.id, role: user.role });
    
    // Read formData after authentication is complete
    const formData = await req.formData();
    const file = formData.get('image') as File;

    if (!file) {
      logger.warn('Image upload failed: no file provided', { userId: user.id });
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      );
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      logger.warn('Image upload failed: file too large', {
        userId: user.id,
        size: file.size,
        maxSize: 5 * 1024 * 1024,
      });
      return NextResponse.json(
        { error: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      logger.warn('Image upload failed: invalid file type', {
        userId: user.id,
        fileType: file.type,
      });
      return NextResponse.json(
        { error: 'Only image files are allowed' },
        { status: 400 }
      );
    }

    const fileName = (formData.get('fileName') as string) || file.name;
    const folder = (formData.get('folder') as string) || 'products';

    logger.info('Processing image upload', {
      userId: user.id,
      fileName,
      folder,
      contentType: file.type,
      size: file.size,
    });

    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Supabase
    const result = await uploadImage(buffer, fileName, folder, file.type);

    if (!result.success || !result.url) {
      logger.error('Image upload failed', {
        userId: user.id,
        error: result.error,
      });
      return NextResponse.json(
        { error: result.error || 'Failed to upload image or get URL' },
        { status: 500 }
      );
    }

    logger.success('Image uploaded successfully', {
      userId: user.id,
      url: result.url,
      fileName,
    });

    return NextResponse.json({
      success: true,
      url: result.url,
      message: 'Image uploaded successfully',
    });
  })
);
