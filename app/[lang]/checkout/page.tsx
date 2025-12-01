import { Navbar } from '@/components/Navbar';
import { CheckoutClient } from './CheckoutClient';

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-chocolate-50 to-white">
      <Navbar />
      <CheckoutClient />
    </div>
  );
}

