'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeInitializer() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  // Apply theme class to HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Gunakan resolvedTheme jika tersedia, jika tidak gunakan theme
    const actualTheme = resolvedTheme || theme;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark');
    
    // Add current theme class berdasarkan resolved theme
    if (actualTheme === 'dark' || actualTheme === 'light') {
      root.classList.add(actualTheme);
    } else if (theme === 'system') {
      // Jika system theme, gunakan system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = systemPrefersDark ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      // Default to light theme if no theme is set
      root.classList.add('light');
      if (!theme) {
        setTheme('light');
      }
    }
  }, [theme, resolvedTheme, setTheme]);

  return null;
}
