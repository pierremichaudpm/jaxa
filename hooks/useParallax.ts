'use client';

import { useEffect, useState } from 'react';

export const useParallax = (speed: number = 0.1) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

export const useScrollRotation = (elementId: string, speed: number = 0.1) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const element = document.querySelector(elementId);
      if (element) {
        (element as HTMLElement).style.transform = `translate(-50%, -50%) rotate(${scrolled * speed}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementId, speed]);
};