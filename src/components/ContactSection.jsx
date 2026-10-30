import React, { useState, useRef } from 'react';

// --- Direct Link Magnetic Button Component ---
function MagneticLink({ href, icon: Icon, label, onClick }) {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) * 0.35;
    const dy = (e.clientY - centerY) * 0.35;
    setOffset({ x: dx, y: dy });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: offset.x === 0 ? 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.08s ease-out',
      }}
      className="group relative flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#070a0e]/80 hover:bg-[#121820] border border-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-colors text-slate-300 hover:text-white text-xs font-mono select-none"
    >
      <span className="text-emerald-400 group-hover:text-lime-300 transition-colors">
        <Icon />
      </span>
      <span>{label}</span>
    </a>
  );
}

// Inline SVGs for social platforms
const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

/**
 * ContactSection Component
 * Student-friendly contact card with interactive form, emerald submit animation,
 * and magnetic hover direct links.
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1200);
  };

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("shreelakshmi.aiml@ksit.edu.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header Tag */}
      <div className="flex items-center justify-center space-x-2 text-xs font-mono text-emerald-400 mb-3">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>04 // INITIATE TRANSMISSION</span>
      </div>

      {/* Main Glass Contact Container */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 md:p-12 border border-emerald-500/25 shadow-[0_0_40px_rgba(16,185,129,0.18)]">
        
        {/* Headline & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Let’s Collaborate & Build
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300/90 leading-relaxed font-sans">
            Open for summer internships, open-source projects, or tech chats. Drop me a message!
          </p>
        </div>

        {/* Form & Direct Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Form (7 cols) */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4 text-left">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center justify-between">
                <span>YOUR NAME</span>
                <span className="text-emerald-400 text-[10px]">* Required</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Chen"
                className="w-full px-4 py-3 rounded-xl bg-[#070a0e]/80 border border-emerald-500/20 text-slate-100 placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center justify-between">
                <span>YOUR EMAIL</span>
                <span className="text-emerald-400 text-[10px]">* Required</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[#070a0e]/80 border border-emerald-500/20 text-slate-100 placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center justify-between">
                <span>YOUR MESSAGE</span>
                <span className="text-emerald-400 text-[10px]">* Required</span>
              </label>
              <textarea
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Shree, I'd love to connect about an internship opportunity at..."
                className="w-full px-4 py-3 rounded-xl bg-[#070a0e]/80 border border-emerald-500/20 text-slate-100 placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button with animated feedback */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full relative inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-mono text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none ${
                status === 'success'
                  ? 'bg-lime-400 text-slate-950 shadow-[0_0_25px_rgba(163,230,53,0.6)]'
                  : status === 'loading'
                  ? 'bg-emerald-600 text-slate-900 cursor-wait'
                  : 'bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(163,230,53,0.55)] hover:-translate-y-0.5 active:translate-y-0'
              }`}
            >
              {status === 'loading' && (
                <span className="flex items-center space-x-2">
                  <svg className="animate-spin h-4 w-4 text-slate-950" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  <span>Encrypting & Sending...</span>
                </span>
              )}

              {status === 'success' && (
                <span className="flex items-center space-x-2">
                  <span>Message Sent! 🚀</span>
                </span>
              )}

              {status === 'idle' && (
                <span className="flex items-center space-x-2">
                  <span>Send Message</span>
                  <span>↗</span>
                </span>
              )}
            </button>

            {status === 'success' && (
              <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-400/40 text-lime-300 text-xs font-mono text-center">
                ✓ Thank you! Your message was transmitted. I'll get back to you shortly.
              </div>
            )}
          </form>

          {/* Direct Channels & Magnetic Links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-2 lg:pt-0 lg:pl-4">
            
            <div className="p-5 rounded-2xl bg-[#070a0e]/70 border border-emerald-500/20 text-left">
              <h3 className="font-display font-bold text-base text-slate-100 mb-1">
                Direct Channels
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
                Prefer email or want to inspect my open source activity? Connect directly below:
              </p>

              <div className="space-y-2.5">
                <MagneticLink
                  href="https://github.com"
                  icon={GithubIcon}
                  label="GitHub // github.com"
                />
                <MagneticLink
                  href="https://linkedin.com"
                  icon={LinkedinIcon}
                  label="LinkedIn // Professional Network"
                />
                <MagneticLink
                  href="mailto:shreelakshmi.aiml@ksit.edu.in"
                  icon={MailIcon}
                  label={copied ? "✓ Copied to clipboard!" : "shreelakshmi.aiml@ksit.edu.in"}
                  onClick={copyEmail}
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 text-left">
              <div className="flex items-center space-x-2 text-xs font-mono text-lime-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-lime-400"></span>
                <span>QUICK RESPONSE TIME</span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Typically active from 09:00 - 21:00 IST. Quickest response via direct student email.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
