// Supported locales
export const locales = ['en', 'id'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

// Type guard for locale validation
export const isValidLocale = (locale: string | undefined): locale is Locale => {
  return typeof locale === 'string' && (locales as readonly string[]).includes(locale);
};

// Display names for the language switcher
export const localeNames: Record<Locale, string> = {
  en: 'English',
  id: 'Bahasa Indonesia'
};
