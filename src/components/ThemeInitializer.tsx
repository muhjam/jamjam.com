'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeInitializer() {
  const { theme, setTheme } = useTheme();

  // Apply theme class to HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    if (theme) {
      root.classList.add(theme);
    } else {
      // Default to light theme if no theme is set
      root.classList.add('light');
      setTheme('light');
    }
  }, [theme, setTheme]);

  return null;
}
