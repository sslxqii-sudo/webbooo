import React from 'react';

/**
 * Footer Component
 * Clean, modern cyber-emerald footer with centered credit:
 * 'Designed & Engineered by Shree Lakshmi • Class of 2027.'
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-6 border-t border-emerald-500/10 text-center font-mono">
      <div className="flex flex-col items-center justify-center space-y-3">
        
        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#070a0e]/70 border border-emerald-500/20 text-slate-400 hover:text-lime-300 hover:border-emerald-400 text-xs transition-all hover:-translate-y-0.5 focus:outline-none"
        >
          <span>Back to Top</span>
          <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
        </button>

        {/* Centered Credit Line */}
        <p className="text-xs text-slate-300 tracking-wide">
          Designed & Engineered by <span className="text-emerald-400 font-semibold">Shree Lakshmi</span> • Class of <span className="text-lime-300 font-semibold">2027</span>.
        </p>

        {/* Sub-note */}
        <p className="text-[11px] text-slate-500">
          Built with React 18, Tailwind CSS & HTML5 Canvas // KSIT Bengaluru
        </p>
      </div>
    </footer>
  );
}
