'use client';

import { useEffect, useRef } from 'react';

export const useSnapScroll = () => {
  const scrollingRef = useRef(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    let currentSectionIndex = 0;

    const scrollToSection = (targetSection: HTMLElement) => {
      if (scrollingRef.current) return;

      scrollingRef.current = true;
      
      targetSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });

      // Reset scrolling flag
      setTimeout(() => {
        scrollingRef.current = false;
      }, 700);
    };

    // Handle wheel scrolling
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

      scrollToSection(sections[currentSectionIndex]);
    };

    // Handle navigation link clicks
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      
      // Check if it's an internal hash link
      if (target.tagName === 'A' && target.hash) {
        event.preventDefault();
        const targetSection = document.querySelector(target.hash) as HTMLElement;
        
        if (targetSection) {
          scrollToSection(targetSection);
        }
      }
    };

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('click', handleLinkClick);

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
};