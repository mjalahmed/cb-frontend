import { Navbar } from '@/components/Navbar';
import { MenuClient } from './MenuClient';
import { setRequestLocale } from 'next-intl/server';

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

