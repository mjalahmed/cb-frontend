import dynamic from 'next/dynamic';
import { CheckoutClient } from './CheckoutClient';
import { setRequestLocale } from 'next-intl/server';

// Dynamically import Navbar to prevent SSR issues with next-intl hooks
const Navbar = dynamic(() => import('@/components/Navbar').then(mod => ({ default: mod.Navbar })), {
  ssr: true,
});

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

