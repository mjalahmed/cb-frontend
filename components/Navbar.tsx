'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useAuthStore } from '@/store/auth-store';
import { useCartStore } from '@/store/cart-store';
import { ShoppingCart, User, LogOut, Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { LoginModal } from './LoginModal';
import { RegisterModal } from './RegisterModal';
import { PhoneVerificationModal } from './PhoneVerificationModal';
import Image from 'next/image';

export function Navbar() {
  const t = useTranslations('nav');
  const tAdmin = useTranslations('admin');
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const { user, logout, isAuthenticated } = useAuthStore();
  const { getItemCount } = useCartStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showPhoneVerificationModal, setShowPhoneVerificationModal] = useState(false);
  const [pendingPhoneNumber, setPendingPhoneNumber] = useState<string>('');

  const cartCount = getItemCount();

  const handleLogout = () => {
    logout();
    router.push('/menu');
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    // Get current path without locale (usePathname already returns path without locale)
    const currentPath = pathname || '/menu';
    // Use router.replace with locale option to switch language
    router.replace(currentPath, { locale: newLocale });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/menu" className="flex items-center space-x-2 rtl:space-x-reverse">
            <Image
              src="/images/logo.png"
              alt="Chocobar Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-chocolate-800">Chocobar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="/menu"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname.includes('/menu')
                  ? 'text-chocolate-700 bg-chocolate-50'
                  : 'text-gray-700 hover:text-chocolate-700 hover:bg-gray-100'
              }`}
            >
              {t('menu')}
            </Link>
            {user?.role !== 'ADMIN' && (
              <>
                <Link
                  href="/cart"
                  className="relative px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-chocolate-700 hover:bg-gray-100 transition-colors"
                >
                  {t('cart')}
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 rtl:right-auto rtl:-left-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
                {isAuthenticated() && (
                  <Link
                    href="/orders"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname.includes('/orders') && !pathname.includes('/admin')
                        ? 'text-chocolate-700 bg-chocolate-50'
                        : 'text-gray-700 hover:text-chocolate-700 hover:bg-gray-100'
                    }`}
                  >
                    {t('orders')}
                  </Link>
                )}
              </>
            )}
            {isAuthenticated() && user?.role === 'ADMIN' && (
              <Link
                href="/admin/orders"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname.includes('/admin')
                    ? 'text-chocolate-700 bg-chocolate-50'
                    : 'text-gray-700 hover:text-chocolate-700 hover:bg-gray-100'
                }`}
              >
                {tAdmin('admin')}
              </Link>
            )}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-chocolate-700 hover:bg-gray-100 transition-colors flex items-center space-x-1 rtl:space-x-reverse"
            >
              <span>{locale === 'en' ? 'العربية' : 'English'}</span>
              <span className="text-xs opacity-75">({locale === 'en' ? 'AR' : 'EN'})</span>
            </button>
            {isAuthenticated() ? (
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="text-sm text-gray-600">{user?.username || user?.phoneNumber}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{t('logout')}</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <button
                  onClick={() => setShowRegisterModal(true)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-chocolate-700 hover:bg-gray-100 transition-colors"
                >
                  {t('register')}
                </button>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-chocolate-600 hover:text-chocolate-700 hover:bg-chocolate-50 transition-colors"
                >
                  {t('login')}
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            {user?.role !== 'ADMIN' && (
              <Link
                href="/cart"
                className="relative p-2 text-gray-700 hover:text-chocolate-700"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 rtl:right-auto rtl:left-0 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-chocolate-700"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  pathname.includes('/menu')
                    ? 'text-chocolate-700 bg-chocolate-50'
                    : 'text-gray-700'
                }`}
              >
                {t('menu')}
              </Link>
              {isAuthenticated() && user?.role !== 'ADMIN' && (
                <Link
                  href="/orders"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    pathname.includes('/orders') && !pathname.includes('/admin')
                      ? 'text-chocolate-700 bg-chocolate-50'
                      : 'text-gray-700'
                  }`}
                >
                  {t('orders')}
                </Link>
              )}
              {isAuthenticated() && user?.role === 'ADMIN' && (
                <Link
                  href="/admin/orders"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    pathname.includes('/admin')
                      ? 'text-chocolate-700 bg-chocolate-50'
                      : 'text-gray-700'
                  }`}
                >
                  {tAdmin('admin')}
                </Link>
              )}
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-md text-base font-medium text-gray-700 text-left rtl:text-right flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>{locale === 'en' ? 'العربية' : 'English'}</span>
                <span className="text-xs opacity-75">({locale === 'en' ? 'AR' : 'EN'})</span>
              </button>
              {isAuthenticated() ? (
                <div className="px-3 py-2">
                  <div className="text-sm text-gray-600 mb-2">{user?.username || user?.phoneNumber}</div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 rtl:space-x-reverse text-base font-medium text-gray-700"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{t('logout')}</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setShowRegisterModal(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-chocolate-700 hover:bg-gray-100 transition-colors text-left rtl:text-right"
                  >
                    {t('register')}
                  </button>
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-3 py-2 rounded-md text-base font-medium text-chocolate-600 hover:text-chocolate-700 hover:bg-chocolate-50 transition-colors text-left rtl:text-right"
                  >
                    {t('login')}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={() => {
          setShowLoginModal(false);
        }}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />

      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSuccess={(user) => {
          // After registration, show phone verification
          if (user.phoneNumber && !user.phoneVerified) {
            setPendingPhoneNumber(user.phoneNumber);
            setShowRegisterModal(false);
            setShowPhoneVerificationModal(true);
          } else {
            setShowRegisterModal(false);
          }
        }}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />

      <PhoneVerificationModal
        isOpen={showPhoneVerificationModal}
        onClose={() => setShowPhoneVerificationModal(false)}
        onSuccess={() => {
          setShowPhoneVerificationModal(false);
          setPendingPhoneNumber('');
        }}
        phoneNumber={pendingPhoneNumber}
        onSkip={() => {
          setShowPhoneVerificationModal(false);
          setPendingPhoneNumber('');
        }}
      />
    </nav>
  );
}

