import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

// Prevent static generation for root page
export const dynamic = 'force-dynamic';

export default async function RootPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // Set the locale explicitly to enable static rendering
  setRequestLocale(lang);
  
  redirect(`/${lang}/menu`);
}

