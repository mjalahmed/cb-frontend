import { Navbar } from '@/components/Navbar';
import { CheckoutClient } from './CheckoutClient';
import { setRequestLocale } from 'next-intl/server';

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang);

  return (
    <div className="min-h-screen bg-gradient-to-b from-chocolate-50 to-white">
      <Navbar />
      <CheckoutClient />
    </div>
  );
}

