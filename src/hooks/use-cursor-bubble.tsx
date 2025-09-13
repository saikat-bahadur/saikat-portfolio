import { useEffect, useRef } from 'react';

export const useCursorBubble = () => {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    let mouseX = 0;
    let mouseY = 0;
    let bubbleX = 0;
    let bubbleY = 0;

    const updateBubblePosition = () => {
      const diffX = mouseX - bubbleX;
      const diffY = mouseY - bubbleY;
      
      bubbleX += diffX * 0.1;
      bubbleY += diffY * 0.1;
      
      bubble.style.left = bubbleX + 'px';
      bubble.style.top = bubbleY + 'px';
      
      requestAnimationFrame(updateBubblePosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.classList.contains('cursor-pointer')) {
        bubble.classList.add('hover');
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.classList.contains('cursor-pointer')) {
        bubble.classList.remove('hover');
      }
    };

    // Initialize bubble position
    bubbleX = window.innerWidth / 2;
    bubbleY = window.innerHeight / 2;
    bubble.style.left = bubbleX + 'px';
    bubble.style.top = bubbleY + 'px';

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Start animation
    updateBubblePosition();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return bubbleRef;
};
