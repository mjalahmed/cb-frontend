import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, type AuthUser } from '@/lib/auth';
import { uploadImage } from '@/services/supabase.service';
import { createApiHandler } from '@/lib/api-handler';

export const POST = createApiHandler(
  requireAdmin(async (req: NextRequest, user: AuthUser) => {
    // Read formData after authentication is complete
    const formData = await req.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      );
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Only image files are allowed' },
        { status: 400 }
      );
    }

    const fileName = (formData.get('fileName') as string) || file.name;
    const folder = (formData.get('folder') as string) || 'products';

    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Supabase
    const result = await uploadImage(buffer, fileName, folder, file.type);

    if (!result.success || !result.url) {
      return NextResponse.json(
        { error: result.error || 'Failed to upload image or get URL' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      url: result.url,
      message: 'Image uploaded successfully',
    });
  })
);
