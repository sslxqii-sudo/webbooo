import React from 'react';

/**
 * RadarStatusBadge Component
 * Displays an animated blinking radar pill:
 * '🟢 Student Developer // Open for Internships'
 * Features:
 * - Expanding radar ping animation
 * - Glowing emerald core dot
 * - Cyber monospace typography and lime accent
 */
export default function RadarStatusBadge({ className = '' }) {
  return (
    <div
      className={`inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#0d1117]/90 border border-emerald-500/35 shadow-[0_0_20px_rgba(16,185,129,0.18)] hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(163,230,53,0.25)] transition-all duration-300 backdrop-blur-md group cursor-default select-none ${className}`}
    >
      {/* Animated Blinking Radar Core */}
      <div className="relative flex items-center justify-center w-3 h-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_10px_#10b981]"></span>
      </div>

      {/* Status Label */}
      <span className="font-mono text-xs sm:text-[13px] tracking-wide text-slate-200">
        Student Developer{' '}
        <span className="text-emerald-400 font-bold mx-1">//</span>{' '}
        <span className="text-lime-300 font-medium">Open for Internships</span>
      </span>

      {/* Micro pulsing spark */}
      <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
    </div>
  );
}
