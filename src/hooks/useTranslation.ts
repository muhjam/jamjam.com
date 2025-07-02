'use client';

import { useLocale } from '@/contexts/LocaleContext';
import enTranslations from '@/locales/en';
import idTranslations from '@/locales/id';

type NestedObject = {
  [key: string]: string | NestedObject;
};

const translations: Record<string, NestedObject> = {
  en: enTranslations,
  id: idTranslations,
};

export function useTranslation() {
  const { locale } = useLocale();

  function t(key: string, params: Record<string, string | number> = {}): string {
    // Split the key by dots to handle nested objects
    const keys = key.split('.');
    let result: unknown = translations[locale];

    // Traverse the translations object
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as NestedObject)[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Return the key as fallback
      }
    }

    // If the result is a string, replace any placeholders
    if (typeof result === 'string') {
      return Object.entries(params).reduce(
        (str, [param, value]) => str.replace(`{${param}}}`, String(value)),
        result
      );
    }

    return key;
  }

  return { t, locale };
}
