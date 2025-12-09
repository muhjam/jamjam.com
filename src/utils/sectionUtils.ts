/**
 * Utility functions untuk mendapatkan koordinat section secara dinamis
 * Menyesuaikan dengan berbagai ukuran layar dan tinggi navbar
 */

/**
 * Mendapatkan tinggi navbar secara dinamis
 * @returns Tinggi navbar dalam pixel
 */
export const getNavbarHeight = (): number => {
  if (typeof window === 'undefined') return 64; // Default height untuk SSR
  
  const navbar = document.querySelector('header');
  if (!navbar) return 64; // Default height jika navbar tidak ditemukan
  
  return navbar.offsetHeight;
};

/**
 * Mendapatkan koordinat top dari sebuah section secara dinamis
 * @param sectionId - ID dari section yang ingin diukur
 * @returns Koordinat top dari section relatif terhadap viewport, atau null jika tidak ditemukan
 */
export const getSectionTopPosition = (sectionId: string): number | null => {
  if (typeof window === 'undefined') return null;
  
  const section = document.getElementById(sectionId);
  if (!section) return null;
  
  const rect = section.getBoundingClientRect();
  return rect.top;
};

/**
 * Mendapatkan semua section yang ada di halaman beserta koordinatnya
 * @returns Array of objects dengan id dan koordinat top dari setiap section
 */
export const getAllSectionsWithPositions = (): Array<{ id: string; top: number }> => {
  if (typeof window === 'undefined') return [];
  
  const sections = document.querySelectorAll('section[id]');
  const sectionsWithPositions: Array<{ id: string; top: number }> = [];
  
  sections.forEach((section) => {
    const id = section.id;
    if (id) {
      const rect = section.getBoundingClientRect();
      sectionsWithPositions.push({
        id,
        top: rect.top
      });
    }
  });
  
  return sectionsWithPositions.sort((a, b) => a.top - b.top);
};

/**
 * Mendapatkan section yang sedang aktif berdasarkan posisi scroll
 * @param navbarHeight - Tinggi navbar untuk offset
 * @returns ID dari section yang sedang aktif, atau 'home' jika tidak ada
 */
export const getActiveSectionByScroll = (navbarHeight: number = 64): string => {
  if (typeof window === 'undefined') return 'home';
  
  const sections = document.querySelectorAll('section[id]');
  const viewportThreshold = navbarHeight + 100; // Threshold untuk menentukan section aktif
  
  interface SectionMatch {
    id: string;
    distance: number;
    top: number;
  }
  
  const matches: SectionMatch[] = [];
  
  sections.forEach((section) => {
    const id = section.id;
    if (!id) return;
    
    const rect = section.getBoundingClientRect();
    const sectionTopViewport = rect.top;
    
    // Jika section sudah melewati navbar (top sudah di atas atau di bawah navbar)
    if (sectionTopViewport <= viewportThreshold) {
      const distance = Math.abs(sectionTopViewport - navbarHeight);
      matches.push({
        id,
        distance,
        top: sectionTopViewport
      });
    }
  });
  
  // Pilih section dengan distance terkecil
  if (matches.length > 0) {
    const bestMatch = matches.reduce((prev, current) => 
      current.distance < prev.distance ? current : prev
    );
    return bestMatch.id === 'home' ? 'home' : bestMatch.id;
  }
  
  // Jika tidak ada section yang melewati navbar, cek apakah kita di hero/home section
  const homeSection = document.getElementById('home');
  if (homeSection) {
    const homeRect = homeSection.getBoundingClientRect();
    if (homeRect.top >= 0 && homeRect.bottom > navbarHeight) {
      return 'home';
    }
  }
  
  return 'home';
};

