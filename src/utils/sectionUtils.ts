export const getNavbarHeight = (): number => {
  if (typeof window === 'undefined') return 64;
  
  const navbar = document.querySelector('header');
  if (!navbar) return 64;
  
  return navbar.offsetHeight;
};

export const getSectionTopPosition = (sectionId: string): number | null => {
  if (typeof window === 'undefined') return null;
  
  const section = document.getElementById(sectionId);
  if (!section) return null;
  
  const rect = section.getBoundingClientRect();
  return rect.top;
};

export const getSectionFirstContainerPosition = (sectionId: string): number | null => {
  if (typeof window === 'undefined') return null;
  
  const section = document.getElementById(sectionId);
  if (!section) return null;
  
  // Prioritas: cari div yang berisi heading (h1, h2, h3) karena itu adalah "first container" yang user lihat
  let container: HTMLElement | null = null;
  
  // 1. Cari div yang berisi heading pertama (h1, h2, atau h3)
  // Biasanya div dengan class "text-center" yang langsung berisi title
  const headings = section.querySelectorAll('h1, h2, h3');
  if (headings.length > 0) {
    const firstHeading = headings[0];
    // Gunakan parent div langsung dari heading (biasanya div dengan class text-center)
    if (firstHeading.parentElement && firstHeading.parentElement.tagName === 'DIV') {
      container = firstHeading.parentElement;
    }
  }
  
  // 2. Jika tidak ada heading, cari div dengan class "container"
  if (!container) {
    container = section.querySelector('.container') as HTMLElement;
  }
  
  // 3. Jika tidak ada, cari div dengan class yang mengandung "max-w-"
  if (!container) {
    const allDivs = section.querySelectorAll('div');
    for (const div of Array.from(allDivs)) {
      if (div.classList.toString().includes('max-w-')) {
        container = div;
        break;
      }
    }
  }
  
  // 4. Jika masih tidak ada, gunakan div pertama langsung di dalam section
  if (!container) {
    const firstChild = section.firstElementChild;
    if (firstChild && firstChild instanceof HTMLElement && firstChild.tagName === 'DIV') {
      container = firstChild;
    }
  }
  
  if (container) {
    const rect = container.getBoundingClientRect();
    return rect.top;
  }
  
  // Fallback: gunakan posisi section
  const rect = section.getBoundingClientRect();
  return rect.top;
};


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
    
    if (sectionTopViewport <= viewportThreshold) {
      const distance = Math.abs(sectionTopViewport - navbarHeight);
      matches.push({
        id,
        distance,
        top: sectionTopViewport
      });
    }
  });
  
  if (matches.length > 0) {
    const bestMatch = matches.reduce((prev, current) => 
      current.distance < prev.distance ? current : prev
    );
    return bestMatch.id === 'home' ? 'home' : bestMatch.id;
  }
  
  const homeSection = document.getElementById('home');
  if (homeSection) {
    const homeRect = homeSection.getBoundingClientRect();
    if (homeRect.top >= 0 && homeRect.bottom > navbarHeight) {
      return 'home';
    }
  }
  
  return 'home';
};

