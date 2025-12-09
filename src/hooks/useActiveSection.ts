import { useState, useEffect, useCallback, useRef } from 'react';
import { getNavbarHeight, getActiveSectionByScroll } from '@/utils/sectionUtils';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Function untuk update active section berdasarkan scroll position
  const updateActiveSection = useCallback(() => {
    const navbarHeight = getNavbarHeight();
    const newActiveSection = getActiveSectionByScroll(navbarHeight);
    setActiveSection((prev) => {
      // Handle mapping untuk hero section
      if (newActiveSection === 'hero') {
        return 'home';
      }
      return newActiveSection !== prev ? newActiveSection : prev;
    });
  }, []);

  useEffect(() => {
    // Function untuk mendapatkan rootMargin secara dinamis berdasarkan tinggi navbar
    const getDynamicRootMargin = () => {
      const navbarHeight = getNavbarHeight();
      // Tambahkan buffer untuk akurasi yang lebih baik
      const offset = navbarHeight + 30;
      return `-${offset}px 0px -50% 0px`;
    };

    // Function untuk membuat observer baru dengan rootMargin yang dinamis
    const createObserver = () => {
      // Disconnect observer lama jika ada
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      const options = {
        root: null,
        rootMargin: getDynamicRootMargin(),
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      };

      const observer = new IntersectionObserver((entries) => {
        const navbarHeight = getNavbarHeight();
        
        // Filter dan sort entries
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => ({
            ...entry,
            distance: Math.abs(entry.boundingClientRect.top - navbarHeight)
          }))
          .sort((a, b) => {
            // Prioritaskan section yang sudah melewati navbar
            const aPastNavbar = a.boundingClientRect.top <= navbarHeight;
            const bPastNavbar = b.boundingClientRect.top <= navbarHeight;
            
            if (aPastNavbar && !bPastNavbar) return -1;
            if (!aPastNavbar && bPastNavbar) return 1;
            
            // Jika keduanya sudah melewati navbar, pilih yang lebih dekat
            if (aPastNavbar && bPastNavbar) {
              return a.distance - b.distance;
            }
            
            // Jika belum melewati navbar, pilih yang intersection ratio lebih besar
            return b.intersectionRatio - a.intersectionRatio;
          });

        if (visibleEntries.length > 0) {
          const targetId = visibleEntries[0].target.id;
          setActiveSection((prev) => {
            const newSection = targetId === 'hero' ? 'home' : targetId;
            return newSection !== prev ? newSection : prev;
          });
        }
      }, options);

      observerRef.current = observer;
      return observer;
    };

    // Function to start observing sections
    const startObserving = () => {
      const sections = document.querySelectorAll('section[id]');
      const observer = createObserver();
      sections.forEach((section) => observer.observe(section));
      return { sections, observer };
    };

    // Initial observation
    let { sections, observer } = startObserving();

    // Scroll listener sebagai fallback untuk akurasi yang lebih baik
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        updateActiveSection();
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle resize untuk recreate observer dengan rootMargin baru
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Recreate observer dengan rootMargin baru
        sections.forEach((section) => observer.unobserve(section));
        const newObserver = createObserver();
        sections.forEach((section) => newObserver.observe(section));
        observer = newObserver;
        // Update active section setelah resize
        updateActiveSection();
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Initial check
    updateActiveSection();

    // If no sections found initially, wait and try again (for dynamic loading)
    if (sections.length === 0) {
      const retryTimer = setTimeout(() => {
        const result = startObserving();
        sections = result.sections;
        observer = result.observer;
        updateActiveSection();
      }, 100);

      return () => {
        clearTimeout(retryTimer);
        clearTimeout(scrollTimeout);
        clearTimeout(resizeTimeout);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
        sections.forEach((section) => observer.unobserve(section));
      };
    }

    // Cleanup
    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(resizeTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [updateActiveSection]);

  return activeSection;
}; 