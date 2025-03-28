'use client';

import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set first section as active

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};