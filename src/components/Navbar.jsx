import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Floating frosted-glass navigation bar fixed at the top as the user scrolls.
 * Features:
 * - Shree Lakshmi tech logo with live status ping
 * - Navigation links: 'About', 'Projects', 'Skills', 'Campus Life', 'Contact'
 * - Responsive mobile menu drawer with smooth toggle
 * - Cyber-Emerald theme styling with frosted glass backdrop blur
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <nav
        className={`max-w-6xl mx-auto transition-all duration-500 rounded-2xl ${
          isScrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/30 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.15)] py-2.5 px-4 sm:px-6'
            : 'bg-[#0d1117]/60 backdrop-blur-md border border-emerald-500/20 shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-3 px-5 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Name */}
          <a
            href="#"
            className="group flex items-center space-x-2.5 focus:outline-none"
            onClick={() => setActiveLink('Home')}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#121820] border border-emerald-500/40 text-emerald-400 group-hover:border-lime-400 group-hover:text-lime-300 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.25)] group-hover:shadow-[0_0_20px_rgba(163,230,53,0.4)]">
              <span className="font-mono text-sm font-bold tracking-tighter">SL</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-bold text-base sm:text-lg tracking-wide text-slate-100 group-hover:text-emerald-300 transition-colors">
                shree lakshmi
              </span>
              <span className="text-[10px] font-mono text-emerald-400/80 -mt-1 tracking-wider uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> AIML @ KSIT
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#070a0e]/60 p-1.5 rounded-xl border border-emerald-500/15">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-lime-300 bg-emerald-950/80 shadow-[0_0_12px_rgba(16,185,129,0.3)] border border-emerald-500/40'
                      : 'text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action / Let's Connect Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 rounded-xl transition-all duration-300 shadow-[0_0_18px_rgba(16,185,129,0.35)] hover:shadow-[0_0_26px_rgba(163,230,53,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative flex items-center">
                Let's Connect
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
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10 border border-emerald-500/20 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="8" x2="20" y2="8"></line>
                  <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-emerald-500/20 flex flex-col space-y-1.5 pb-2">
            <div className="px-3 py-1.5 mb-1 text-[11px] font-mono text-emerald-400 flex items-center justify-between bg-[#070a0e]/70 rounded-lg">
              <span>STATUS: ONLINE</span>
              <span className="text-lime-400">KSIT // AIML '27</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-colors flex items-center justify-between ${
                  activeLink === link.name
                    ? 'text-lime-300 bg-emerald-950/70 border border-emerald-500/40'
                    : 'text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-emerald-500/60">→</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-2.5 text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              >
                <span>Let's Connect</span>
                <span className="ml-1.5">↗</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
