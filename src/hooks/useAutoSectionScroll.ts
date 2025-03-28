'use client';

import { useEffect, useRef } from 'react';

export const useAutoSectionScroll = () => {
  const scrollingRef = useRef(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    let currentSectionIndex = 0;

    const scrollToSection = (index: number) => {
      if (index >= 0 && index < sections.length) {
        scrollingRef.current = true;
        sections[index].scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        
        // Reset scrolling flag after animation
        setTimeout(() => {
          scrollingRef.current = false;
        }, 1000);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      // Prevent default scrolling
      event.preventDefault();

      // Only proceed if not currently scrolling
      if (scrollingRef.current) return;

      // Determine scroll direction
      if (event.deltaY > 0) {
        // Scrolling down
        currentSectionIndex = Math.min(
          currentSectionIndex + 1, 
          sections.length - 1
        );
      } else {
        // Scrolling up
        currentSectionIndex = Math.max(
          currentSectionIndex - 1, 
          0
        );
      }

      scrollToSection(currentSectionIndex);
    };

    // Add event listener
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
};