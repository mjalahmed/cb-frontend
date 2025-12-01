import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { setRequestLocale } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Enable static rendering
  setRequestLocale(locale);

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});

