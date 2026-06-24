import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable cursor on fine pointer devices (non-touch)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Immediately position the tiny inner dot
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    // Smooth easing animation loop for the outer ring
    const animateRing = () => {
      // Linear interpolation: ease value determines the delay/lag of the outer ring
      const ease = 0.15;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      // Update position and dynamic scale if hovering over interactive elements
      const scaleValue = isHovering ? 1.6 : 1.0;
      const opacityValue = isHovering ? '0.4' : '0.15';
      
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scaleValue})`;
      ring.style.opacity = opacityValue;

      requestAnimationFrame(animateRing);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Match elements that are buttons, links, or have interactive classes/attributes
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer');

      if (isInteractive) {
        isHovering = true;
        if (dot) {
          dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(0.5)`;
          dot.style.background = '#8E8E9F';
        }
      } else {
        isHovering = false;
        if (dot) {
          dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1)`;
          dot.style.background = '#ffffff';
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Start animation loop
    const animationFrameId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Hidden by default on touch screens, rendered fixed on top of everything */}
      <div className="hidden pointer-events-none fixed inset-0 z-50 mix-blend-difference sm:block">
        {/* Core Dot */}
        <div
          ref={cursorDotRef}
          className="fixed w-1.5 h-1.5 bg-white rounded-full -top-0.5 -left-0.5 will-change-transform transition-all duration-200 pointer-events-none"
          style={{ transform: 'translate3d(-20px, -20px, 0)' }}
        />
        {/* Ambient Ring */}
        <div
          ref={cursorRingRef}
          className="fixed w-8 h-8 border border-white rounded-full -top-4 -left-4 will-change-transform pointer-events-none transition-transform duration-300 ease-out"
          style={{ transform: 'translate3d(-40px, -40px, 0)', opacity: 0.15 }}
        />
      </div>
    </>
  );
}
