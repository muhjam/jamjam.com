import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.1, 0.25, 0.5, 0.75, 1], // Multiple thresholds for better detection
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Consider a section visible if it's at least 10% visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}; 