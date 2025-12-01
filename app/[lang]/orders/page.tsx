import { Navbar } from '@/components/Navbar';
import { OrdersClient } from './OrdersClient';

export default async function OrdersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-chocolate-50 to-white">
      <Navbar />
      <OrdersClient />
    </div>
  );
}

