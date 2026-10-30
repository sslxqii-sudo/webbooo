import React, { useState } from 'react';
import RadarStatusBadge from './RadarStatusBadge';

/**
 * Hero Component
 * Opening intro screen for Shree Lakshmi's student developer portfolio.
 * Requirements met:
 * - Animated blinking radar pill: '🟢 Student Developer // Open for Internships'
 * - Main Headline: 'Hey, I am shree lakshmi— Building the Future of Tech.'
 * - Student Bio: '2nd year aiml engineer at ksit passionate about web development, AI, and building real-world projects.'
 * - Glowing emerald primary button 'View My Projects' (lifts slightly on hover)
 * - Outline secondary button 'Download Resume / CV'
 * - Responsive layout for mobile and desktop screens
 */
export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleResumeDownload = (e) => {
    e.preventDefault();
    const dummyPdfContent = "%PDF-1.4 ... Shree Lakshmi Resume - 2nd Year AIML Engineer, KSIT ...";
    const blob = new Blob([dummyPdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Shree_Lakshmi_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert("Resume download started: Shree_Lakshmi_Resume.pdf");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("shreelakshmi.aiml@ksit.edu.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Status Badge: Animated blinking radar pill */}
        <div className="mb-6 sm:mb-8">
          <RadarStatusBadge />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-slate-100 leading-[1.12] max-w-4xl">
          Hey, I am{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(16,185,129,0.35)]">
              shree lakshmi
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-2 text-emerald-400/50"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
          <span className="text-emerald-400 font-mono font-light ml-1 sm:ml-2">—</span>
          <br className="hidden sm:inline" />
          <span className="text-slate-100 block sm:inline mt-2 sm:mt-0">
            {' '}Building the Future of Tech.
          </span>
        </h1>

        {/* Student Bio */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-300/90 max-w-2xl font-normal leading-relaxed">
          <span className="text-white font-medium">2nd year AIML engineer</span> at{' '}
          <span className="text-emerald-400 font-semibold bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-500/30">
            KSIT
          </span>{' '}
          passionate about <span className="text-lime-300 font-medium">web development</span>,{' '}
          <span className="text-emerald-300 font-medium">AI</span>, and building real-world projects.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          {/* Primary Button: Glowing Emerald with hover lift */}
          <a
            href="#projects"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 rounded-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-[0_0_20px_-5px_rgba(16,185,129,0.5),0_0_8px_rgba(163,230,53,0.3)] hover:shadow-[0_0_32px_0px_rgba(16,185,129,0.7),0_0_16px_rgba(163,230,53,0.5)] focus:outline-none"
          >
            <span className="relative flex items-center font-bold tracking-wide">
              View My Projects
              <svg
                className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </a>

          {/* Secondary Outline Button: Download Resume */}
          <button
            type="button"
            onClick={handleResumeDownload}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-medium text-emerald-300 hover:text-white bg-[#0d1117]/80 hover:bg-emerald-950/40 rounded-xl border border-emerald-500/40 hover:border-lime-400/80 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_24px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none"
          >
            <svg
              className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download Resume / CV</span>
          </button>
        </div>

        {/* Cyber Terminal Card */}
        <div className="mt-12 sm:mt-16 w-full max-w-3xl rounded-2xl p-4 sm:p-5 shadow-2xl bg-[#0d1117]/75 backdrop-blur-xl border border-emerald-500/20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-500/20 pb-3 text-xs font-mono">
            <div className="flex items-center space-x-2 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 text-slate-400">shree@ksit-terminal:~$</span>
            </div>
            <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              BENGALURU, INDIA (IST)
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3.5 text-left">
            <div className="p-2.5 rounded-xl bg-[#070a0e]/60 border border-emerald-500/15">
              <div className="text-[10px] font-mono text-emerald-400/80 uppercase">Primary Focus</div>
              <div className="text-sm font-semibold text-slate-100 mt-0.5">AI / Machine Learning</div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#070a0e]/60 border border-emerald-500/15">
              <div className="text-[10px] font-mono text-lime-400/80 uppercase">Frontend Craft</div>
              <div className="text-sm font-semibold text-slate-100 mt-0.5">React + Tailwind</div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#070a0e]/60 border border-emerald-500/15">
              <div className="text-[10px] font-mono text-teal-400/80 uppercase">Institution</div>
              <div className="text-sm font-semibold text-slate-100 mt-0.5">KSIT, Batch of '27</div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#070a0e]/60 border border-emerald-500/15">
              <div className="text-[10px] font-mono text-emerald-400/80 uppercase">Availability</div>
              <div className="text-sm font-semibold text-lime-300 mt-0.5">Summer '25 Intern</div>
            </div>
          </div>

          <div className="mt-3.5 pt-3 border-t border-emerald-500/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-1">
              <span className="text-emerald-400 font-bold">Interactive:</span> Move mouse or click to ripple matrix dots.
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className="hover:text-lime-300 transition-colors flex items-center gap-1 focus:outline-none"
            >
              <span>{copied ? '✓ Copied to clipboard!' : 'shreelakshmi.aiml@ksit.edu.in'}</span>
            </button>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 flex flex-col items-center">
          <a
            href="#projects"
            className="group flex flex-col items-center text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase mb-1.5 text-slate-500 group-hover:text-emerald-400">
              Explore Section
            </span>
            <div className="w-5 h-8 rounded-full border border-emerald-500/30 flex items-start justify-center p-1 group-hover:border-emerald-400 transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-emerald-400 animate-bounce"></div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
