import { Navbar } from '@/components/Navbar';
import { CartClient } from './CartClient';

export default async function CartPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-chocolate-50 to-white">
      <Navbar />
      <CartClient />
    </div>
  );
}

