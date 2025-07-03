import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-80px 0px -80px 0px', // Account for navbar height
      threshold: [0.1, 0.25, 0.5, 0.75, 1], // Multiple thresholds for better detection
    };

    const observer = new IntersectionObserver((entries) => {
      // Sort entries by their position to prioritize the most visible section
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting && entry.intersectionRatio >= 0.1)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length > 0) {
        setActiveSection(visibleEntries[0].target.id);
      }
    }, options);

    // Function to start observing sections
    const startObserving = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));
      return sections;
    };

    // Initial observation
    let sections = startObserving();

    // If no sections found initially, wait and try again (for dynamic loading)
    if (sections.length === 0) {
      const retryTimer = setTimeout(() => {
        sections = startObserving();
      }, 100);

      return () => {
        clearTimeout(retryTimer);
        sections.forEach((section) => observer.unobserve(section));
      };
    }

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}; 