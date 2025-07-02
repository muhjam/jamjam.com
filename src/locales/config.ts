export const defaultLocale = 'en' as const;
export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  en: 'English',
  id: 'Bahasa Indonesia'
};

export const isLocale = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};
