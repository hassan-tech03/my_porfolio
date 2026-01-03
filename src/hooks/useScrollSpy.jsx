import { useEffect, useState } from 'react';

/**
 * Custom hook to track which section is currently in viewport
 * @param {Array<string>} sectionIds - Array of section IDs to observe
 * @param {number} offset - Offset from top in pixels (for fixed headers)
 * @returns {string} activeSection - ID of the currently active section
 */
export const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the section that is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }

      // Handle edge case: if at top of page, set first section as active
      if (window.scrollY < offset) {
        setActiveSection(sectionIds[0]);
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};
