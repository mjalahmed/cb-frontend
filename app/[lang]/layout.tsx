import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter, Cairo } from 'next/font/google';
import '../globals.css';
import dynamicImport from 'next/dynamic';
import { Providers } from './providers';

// Dynamically import client components to prevent SSR issues
const DynamicAuthInitializer = dynamicImport(() => import('./AuthInitializer').then(mod => ({ default: mod.AuthInitializer })), {
  ssr: false,
});

// Dynamically import Toaster to prevent SSR issues
const Toaster = dynamicImport(() => import('react-hot-toast').then(mod => ({ default: mod.Toaster })), {
  ssr: false,
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!routing.locales.includes(lang as any)) {
    notFound();
  }

  // Set the locale explicitly to enable static rendering
  // This prevents dynamic rendering caused by reading headers
  setRequestLocale(lang);

  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    console.error('Failed to load messages:', error);
    messages = {};
  }

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${inter.variable} ${cairo.variable} ${
          lang === 'ar' ? 'font-arabic' : 'font-sans'
        } antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <DynamicAuthInitializer />
            {children}
            <Toaster
              position={lang === 'ar' ? 'top-left' : 'top-right'}
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
              }}
            />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

