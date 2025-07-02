'use client';

import { useEffect, useState } from 'react';
import { Locale, defaultLocale, isLocale } from '@/locales/config';

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [isLoading, setIsLoading] = useState(true);

  // Load locale from localStorage on client-side
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && isLocale(savedLocale)) {
      setLocale(savedLocale);
    } else {
      // Fallback to browser language or default
      const browserLang = navigator.language.split('-')[0];
      if (isLocale(browserLang)) {
        setLocale(browserLang);
      } else {
        setLocale(defaultLocale);
      }
    }
    setIsLoading(false);
  }, []);

  const changeLocale = (newLocale: Locale) => {
    if (isLocale(newLocale) && newLocale !== locale) {
      setLocale(newLocale);
      localStorage.setItem('locale', newLocale);
    }
  };

  return { locale, changeLocale, isLoading };
}

export async function getMessages(locale: Locale, namespace: string) {
  try {
    const messages = await import(`@/locales/${locale}/${namespace}.json`);
    return messages.default || messages;
  } catch (error) {
    console.error(`Failed to load messages for ${locale}/${namespace}:`, error);
    // Fallback to English if translation is missing
    if (locale !== 'en') {
      const messages = await import(`@/locales/en/${namespace}.json`);
      return messages.default || messages;
    }
    return {};
  }
}

// Base type for messages that can be rendered in React
export type MessageValue = string | { [key: string]: string };
export type Messages = Record<string, MessageValue>;

export function useMessages<T extends Messages = Messages>(locale: Locale, namespace: string) {
  const [messages, setMessages] = useState<T>({} as T);
  const [isLoading, setIsLoading] = useState(true);

  // Helper function to safely access nested values
  const getNestedValue = (obj: unknown, path: string): string => {
    if (!obj || typeof obj !== 'object' || obj === null) return '';
    return path.split('.').reduce<string>((acc, part) => {
      if (acc && typeof acc === 'object' && part in acc) {
        const value = (acc as Record<string, unknown>)[part];
        return typeof value === 'string' ? value : '';
      }
      return '';
    }, '');
  };

  useEffect(() => {
    const loadMessages = async () => {
      try {
        setIsLoading(true);
        const loadedMessages = await getMessages(locale, namespace);
        setMessages(loadedMessages as T);
      } catch (error) {
        console.error(`Failed to load messages for ${namespace}:`, error);
        // Fallback to empty object to prevent runtime errors
        setMessages({} as T);
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, [locale, namespace]);

  // Return a proxy that ensures we always return a string for any key access
  const safeMessages = new Proxy(messages, {
    get(target, prop) {
      if (typeof prop === 'string') {
        const value = target[prop];
        if (typeof value === 'string') return value;
        if (value && typeof value === 'object') {
          return (path: string) => {
            const result = getNestedValue(value, path);
            return typeof result === 'string' ? result : '';
          };
        }
      }
      return ''; // Default fallback to empty string
    }
  });

  return { 
    messages: safeMessages as unknown as T, 
    isLoading 
  };
}
