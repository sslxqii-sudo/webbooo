import React, { useEffect, useRef, useState } from 'react';

/**
 * CursorFollower Component (Easter Egg)
 * Smoothly tracks the user's mouse position with a gentle trailing light spark
 * and glowing ring that expands over interactive elements.
 */
export default function CursorFollower() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const render = () => {
      // Smooth lerp for trailing ring
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animId = requestAnimationFrame(render);

    const handleElementHover = (e) => {
      const target = e.target.closest('a, button, input, textarea, .group, [role="button"]');
      setIsHovered(!!target);
    };
    window.addEventListener('mouseover', handleElementHover);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Trailing Soft Ambient Glow Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full border transition-all duration-150 pointer-events-none ${
          isHovered
            ? 'w-10 h-10 border-lime-400/80 bg-emerald-500/10 shadow-[0_0_24px_rgba(163,230,53,0.45)] scale-125'
            : 'w-8 h-8 border-emerald-400/50 bg-emerald-500/5 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
        }`}
        style={{ willChange: 'transform' }}
      />
      {/* Core Center Spark */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-lime-300 shadow-[0_0_8px_#a3e635] pointer-events-none"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
