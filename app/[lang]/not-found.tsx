'use client';

import { useEffect } from 'react';
import { useRouter } from '@/i18n/routing';
import dynamic from 'next/dynamic';

// Simple not-found page without using next-intl hooks to avoid SSR issues
function NotFoundContent() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to menu after a short delay
    const timer = setTimeout(() => {
      router.push('/menu');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Page not found</p>
        <p className="text-gray-500 mb-6">Redirecting to menu...</p>
        <button
          onClick={() => router.push('/menu')}
          className="bg-chocolate-600 text-white px-6 py-2 rounded-lg hover:bg-chocolate-700 transition-colors"
        >
          Go to Menu
        </button>
      </div>
    </div>
  );
}

export default function NotFound() {
  return <NotFoundContent />;
}
