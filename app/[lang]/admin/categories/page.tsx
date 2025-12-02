import { AdminCategoriesClient } from './AdminCategoriesClient';

export default async function AdminCategoriesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AdminCategoriesClient />
    </div>
  );
}

