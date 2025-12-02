'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useAuthStore } from '@/store/auth-store';
import { useRouter } from '@/i18n/routing';
import { Package, ShoppingBag, Settings, FolderTree } from 'lucide-react';
import { useEffect } from 'react';

export function AdminNavbar() {
  const t = useTranslations('admin');
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();

  useEffect(() => {
    // Check if user is admin
    if (!isAuthenticated() || user?.role !== 'ADMIN') {
      router.push('/menu');
    }
  }, [user, isAuthenticated, router]);

  if (!isAuthenticated() || user?.role !== 'ADMIN') {
    return null;
  }

  return (
    <nav className="bg-chocolate-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 rtl:space-x-reverse">
          <Link
            href="/admin/orders"
            className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-4 border-b-2 transition-colors ${
              pathname.includes('/admin/orders')
                ? 'border-white text-white'
                : 'border-transparent text-chocolate-100 hover:text-white hover:border-chocolate-300'
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="font-medium">{t('orders')}</span>
          </Link>
          <Link
            href="/admin/products"
            className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-4 border-b-2 transition-colors ${
              pathname.includes('/admin/products')
                ? 'border-white text-white'
                : 'border-transparent text-chocolate-100 hover:text-white hover:border-chocolate-300'
            }`}
          >
            <Package className="w-5 h-5" />
            <span className="font-medium">{t('products')}</span>
          </Link>
          <Link
            href="/admin/categories"
            className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-4 border-b-2 transition-colors ${
              pathname.includes('/admin/categories')
                ? 'border-white text-white'
                : 'border-transparent text-chocolate-100 hover:text-white hover:border-chocolate-300'
            }`}
          >
            <FolderTree className="w-5 h-5" />
            <span className="font-medium">{t('categories')}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

