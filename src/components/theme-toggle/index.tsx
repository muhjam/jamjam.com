'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  // Function untuk mendapatkan theme yang sebenarnya
  const getActualTheme = (): 'light' | 'dark' => {
    // Prioritaskan resolvedTheme karena ini adalah theme yang sebenarnya diterapkan
    if (resolvedTheme === 'dark' || resolvedTheme === 'light') {
      return resolvedTheme;
    }
    
    // Jika theme adalah 'dark' atau 'light', gunakan itu
    if (theme === 'dark' || theme === 'light') {
      return theme;
    }
    
    // Jika system theme, cek preferensi system
    if (typeof window !== 'undefined') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPrefersDark ? 'dark' : 'light';
    }
    
    return 'light';
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Update currentTheme setiap kali theme atau resolvedTheme berubah
  useEffect(() => {
    if (mounted) {
      const actualTheme = getActualTheme();
      setCurrentTheme(actualTheme);
    }
  }, [theme, resolvedTheme, mounted]);

  // Handle toggle dengan memastikan theme selalu di-set ke 'dark' atau 'light'
  const handleToggle = () => {
    const actualTheme = getActualTheme();
    const nextTheme: 'light' | 'dark' = actualTheme === 'dark' ? 'light' : 'dark';
    
    // Set theme ke 'dark' atau 'light' (bukan 'system') untuk memastikan sinkronisasi
    setTheme(nextTheme);
    // Update state lokal untuk responsivitas langsung
    setCurrentTheme(nextTheme);
  };

  if (!mounted) {
    // Render placeholder dengan ukuran yang sama untuk menghindari layout shift
    return (
      <div className="p-2 rounded-md w-[36px] h-[36px] flex items-center justify-center">
        <BsMoon size={20} className="opacity-0" />
      </div>
    );
  }

  // Tampilkan icon berdasarkan currentTheme yang sudah di-sinkronkan
  const isDark = currentTheme === 'dark';

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
  );
}
