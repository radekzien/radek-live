"use client";
import React, { ReactNode, useEffect, useRef, useState } from 'react';

type FadeInSectionProps = {
  children: ReactNode;
  delay?: number;
};

export const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`fadeIn ${isVisible ? 'is-visible' : ''}`} 
    style={{ transitionDelay: `${delay}s` }}
    ref={domRef}>
      {children}
    </div>
  );
};
