'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Locale, defaultLocale, isLocale } from '@/locales/config';

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  initialLocale: Locale;
}

export function LocaleProvider({ children, initialLocale }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  // Load locale from localStorage on initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale');
      if (savedLocale && isLocale(savedLocale)) {
        setLocaleState(savedLocale);
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    if (isLocale(newLocale)) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('locale', newLocale);
      }
      setLocaleState(newLocale);
      document.documentElement.lang = newLocale;
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
