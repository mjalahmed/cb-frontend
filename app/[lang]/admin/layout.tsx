import { Navbar } from '@/components/Navbar';
import { AdminNavbar } from './AdminNavbar';

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-chocolate-50 to-white">
      <Navbar />
      <AdminNavbar />
      {children}
    </div>
  );
}

