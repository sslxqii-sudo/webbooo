import React, { useState } from 'react';

/**
 * SkillBadge Component
 * Renders an interactive skill pill badge with official tech icon and hover tooltip:
 * - Scales up slightly (scale-105) on hover
 * - Glows with an emerald border and ambient shadow
 * - Displays a tiny tooltip indicating comfort level:
 *   'Proficient' (Emerald), 'Familiar' (Lime), or 'Currently Learning' (Teal/Cyan)
 */
export default function SkillBadge({ name, level, icon: Icon, note }) {
  const [isHovered, setIsHovered] = useState(false);

  const levelConfigs = {
    'Proficient': {
      dotColor: 'bg-emerald-400',
      badgeBg: 'bg-emerald-950/80',
      badgeBorder: 'border-emerald-400/60',
      textColor: 'text-emerald-300',
      tag: '🟢 Proficient',
      desc: 'Daily driver // High confidence'
    },
    'Familiar': {
      dotColor: 'bg-lime-400',
      badgeBg: 'bg-lime-950/80',
      badgeBorder: 'border-lime-400/60',
      textColor: 'text-lime-300',
      tag: '⚡ Familiar',
      desc: 'Active projects // Solid foundation'
    },
    'Currently Learning': {
      dotColor: 'bg-teal-400',
      badgeBg: 'bg-teal-950/80',
      badgeBorder: 'border-teal-400/60',
      textColor: 'text-teal-300',
      tag: '🚀 Learning',
      desc: 'Actively exploring // Deepening skills'
    }
  };

  const config = levelConfigs[level] || levelConfigs['Proficient'];

  return (
    <div
      className="relative group inline-flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Skill Pill Container */}
      <div
        className={`relative flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-[#0d1117]/80 hover:bg-[#121820] border border-emerald-500/20 hover:border-emerald-400/70 hover:shadow-[0_0_18px_rgba(16,185,129,0.35),0_0_8px_rgba(163,230,53,0.2)] hover:scale-105 active:scale-100 transition-all duration-200 cursor-default select-none group-hover:text-white`}
      >
        {/* Tech Icon */}
        <div className="w-5 h-5 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 transition-colors">
          {Icon ? <Icon /> : <span className="text-xs font-mono">#</span>}
        </div>

        {/* Skill Label */}
        <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-slate-100 transition-colors">
          {name}
        </span>

        {/* Comfort Status Micro-Dot */}
        <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} opacity-80 group-hover:opacity-100 group-hover:animate-ping`}></span>
      </div>

      {/* Floating Comfort Level Tooltip */}
      <div
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 pointer-events-none transition-all duration-200 ease-out ${
          isHovered
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-1.5 scale-95'
        }`}
      >
        <div className="relative px-3 py-1.5 rounded-lg bg-[#070a0e]/95 backdrop-blur-md border border-emerald-500/40 shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_12px_rgba(16,185,129,0.25)] flex flex-col items-center whitespace-nowrap">
          <div className="flex items-center space-x-1.5">
            <span className={`text-[11px] font-mono font-bold ${config.textColor}`}>
              {config.tag}
            </span>
          </div>
          {note && (
            <span className="text-[10px] text-slate-400 font-sans mt-0.5">
              {note}
            </span>
          )}

          {/* Tiny arrow pointer */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-emerald-500/40" />
        </div>
      </div>
    </div>
  );
}
