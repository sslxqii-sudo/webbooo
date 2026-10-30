import React, { useState, useRef } from 'react';

/**
 * ProjectCard Component
 * Implements interactive 3D perspective tilt physics:
 * - Tilts subtly based on cursor position relative to card center
 * - Lifts smoothly on hover (translateY(-6px))
 * - Casts a soft emerald & lime glow around edges
 * - Features a dynamic cursor-following shine/glare effect and sweeping sheen
 * - 3D parallax depth for text, tech badges, and buttons
 */
export default function ProjectCard({ project, onDemoClick, onCodeClick }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate subtle 3D tilt angles (max ~8.5 degrees)
    const rotateX = -((y - centerY) / centerY) * 8.5;
    const rotateY = ((x - centerX) / centerX) * 8.5;

    setCoords({ x: rotateX, y: rotateY });
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered
          ? `perspective(1000px) rotateX(${coords.x}deg) rotateY(${coords.y}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)',
        transition: isHovered
          ? 'transform 0.12s ease-out, border-color 0.3s ease, box-shadow 0.3s ease'
          : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.5s ease, box-shadow 0.5s ease',
      }}
      className={`relative rounded-2xl p-6 sm:p-7 glass-panel border border-emerald-500/20 overflow-hidden flex flex-col justify-between group cursor-default transition-all duration-300 ${
        isHovered
          ? 'border-emerald-400/50 shadow-[0_16px_36px_-8px_rgba(16,185,129,0.35),0_0_24px_rgba(163,230,53,0.18)]'
          : 'shadow-[0_8px_24px_rgba(0,0,0,0.5)]'
      }`}
    >
      {/* Sleek Shine / Glare Reflection following mouse */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.35 : 0,
          background: `radial-gradient(circle 300px at ${glarePos.x}% ${glarePos.y}%, rgba(163, 230, 53, 0.35), rgba(16, 185, 129, 0.15) 40%, transparent 80%)`,
        }}
      />

      {/* Sleek Diagonal Shine Bar */}
      <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-card-shine" />

      {/* 3D Foreground Content Layer */}
      <div
        style={{ transform: 'translateZ(26px)' }}
        className="relative z-20 flex flex-col h-full justify-between"
      >
        <div>
          {/* Card Top: Category Badge & Index Indicator */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#070a0e]/90 text-lime-300 border border-emerald-500/30">
                {project.categoryBadge}
              </span>
            </div>
            <span className="font-mono text-xs text-emerald-400/70 font-semibold tracking-wider">
              {project.id}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-100 group-hover:text-emerald-300 transition-colors mb-3">
            {project.title}
          </h3>

          {/* 2-Sentence Description */}
          <p className="text-sm text-slate-300/90 leading-relaxed font-sans mb-5">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techBadges.map((badge, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#070a0e]/90 text-slate-300 border border-emerald-500/20 group-hover:border-emerald-500/40 group-hover:text-emerald-300 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: 'Live Demo' & 'GitHub Code' */}
        <div className="pt-4 border-t border-emerald-500/15 flex items-center gap-3">
          <button
            type="button"
            onClick={() => onDemoClick(project)}
            className="flex-1 group/btn inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.35)] hover:shadow-[0_0_22px_rgba(163,230,53,0.5)] active:scale-[0.98] focus:outline-none"
          >
            <span>Live Demo</span>
            <svg
              className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>

          <button
            type="button"
            onClick={() => onCodeClick(project)}
            className="flex-1 group/btn inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-emerald-300 hover:text-white bg-[#070a0e]/80 hover:bg-emerald-950/50 border border-emerald-500/40 hover:border-lime-400 transition-all duration-200 shadow-sm active:scale-[0.98] focus:outline-none"
          >
            <svg
              className="w-3.5 h-3.5 mr-1.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>GitHub Code</span>
          </button>
        </div>
      </div>
    </div>
  );
}
