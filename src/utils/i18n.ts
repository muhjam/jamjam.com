import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Supported locales
export const locales = ['en', 'id'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

// Type guard for locale validation
export const isValidLocale = (locale: string | undefined): locale is Locale => {
  return typeof locale === 'string' && (locales as readonly string[]).includes(locale);
};

// Default configuration for next-intl
export default getRequestConfig(async ({locale}) => {
  // Ensure the locale is supported
  if (!isValidLocale(locale)) {
    notFound();
  }

  // Load messages for the current locale
  const messages = (await import(`../mock/locales/${locale}/common.json`)).default;
  
  return {
    messages,
    locale // Explicitly include the locale
  };
});

// Display names for the language switcher
export const localeNames: Record<Locale, string> = {
  en: 'English',
  id: 'Bahasa Indonesia'
};
