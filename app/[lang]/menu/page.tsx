import dynamicImport from 'next/dynamic';
import { MenuClient } from './MenuClient';
import { setRequestLocale } from 'next-intl/server';

// Prevent static generation for pages that use client components with hooks
export const dynamic = 'force-dynamic';

// Dynamically import Navbar to prevent SSR issues with next-intl hooks
// Must use ssr: false because Navbar uses client-side hooks that require React context
const Navbar = dynamicImport(() => import('@/components/Navbar').then(mod => ({ default: mod.Navbar })), {
  ssr: false,
});

export default async function MenuPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang);

  return (
    <div className="min-h-screen bg-gradient-to-b from-chocolate-50 to-white">
      <Navbar />
      <MenuClient />
    </div>
  );
}

