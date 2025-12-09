import dynamic from 'next/dynamic';
import { AdminNavbar } from './AdminNavbar';
import { setRequestLocale } from 'next-intl/server';

// Dynamically import Navbar to prevent SSR issues with next-intl hooks
const Navbar = dynamic(() => import('@/components/Navbar').then(mod => ({ default: mod.Navbar })), {
  ssr: true, // Navbar can be SSR'd, but dynamic import helps with context
});

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // Set the locale explicitly to enable static rendering
  setRequestLocale(lang);

  return (
    <div className="min-h-screen bg-gradient-to-b from-chocolate-50 to-white">
      <Navbar />
      <AdminNavbar />
      {children}
    </div>
  );
}

