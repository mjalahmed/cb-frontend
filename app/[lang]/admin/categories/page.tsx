import { AdminCategoriesClient } from './AdminCategoriesClient';
import { setRequestLocale } from 'next-intl/server';

// Prevent static generation for admin pages that use client components with hooks
export const dynamic = 'force-dynamic';

export default async function AdminCategoriesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AdminCategoriesClient />
    </div>
  );
}

