import { Navbar } from '@/components/Navbar';
import { MenuClient } from './MenuClient';

export default async function MenuPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-chocolate-50 to-white">
      <Navbar />
      <MenuClient />
    </div>
  );
}

