'use client';

import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Function to handle smooth scrolling
    const smoothScrollToSection = (targetSection: HTMLElement) => {
      targetSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    };

    // Add smooth scroll to all internal links
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      
      // Check if it's an internal hash link
      if (target.tagName === 'A' && target.hash) {
        event.preventDefault();
        const targetSection = document.querySelector(target.hash) as HTMLElement;
        
        if (targetSection) {
          smoothScrollToSection(targetSection);
        }
      }
    };

    // Add click event listener to the document
    document.addEventListener('click', handleLinkClick);

    // Optional: Highlight active section
    const highlightActiveSection = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 100 && 
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', highlightActiveSection);

    // Initial call to set first section as active
    highlightActiveSection();

    // Cleanup
    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('scroll', highlightActiveSection);
    };
  }, []);
};