import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe element itself and children with reveal classes
    const revealElements = node.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    
    if (node.classList.contains('reveal') || 
        node.classList.contains('reveal-left') || 
        node.classList.contains('reveal-right') ||
        node.classList.contains('reveal-scale')) {
      observer.observe(node);
    }
    
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
