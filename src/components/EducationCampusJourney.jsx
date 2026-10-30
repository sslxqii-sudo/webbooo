import React from 'react';

/**
 * EducationCampusJourney Component
 * Highlights college background at KSIT and student activities.
 * Features:
 * - Interactive vertical milestone timeline with illuminated emerald line & glowing nodal dots
 *   (2026: Pre-Final Year B.Tech & Hackathon Finalist, 2025: Core Technical Club Member / Web Lead, 2024: Began Degree & Built First Web App)
 * - Compact 2x2 grid of achievement callout badges with subtle hover highlights:
 *   🏆 1st Place - University Hackathon, ⚡ 150+ LeetCode Problems Solved, 👥 Tech Club Organizer, 📜 Full-Stack Certified
 */
export default function EducationCampusJourney() {
  const milestones = [
    {
      year: "2026",
      status: "CURRENT FOCUS",
      title: "Pre-Final Year B.Tech & Hackathon Finalist",
      institution: "KSIT Bangalore // Dept. of AIML",
      description: "Deepening AI/ML neural architecture research, leading student dev hackathons, and qualified as a finalist in national smart campus engineering competitions.",
      accent: "emerald",
      badge: "In Progress"
    },
    {
      year: "2025",
      status: "CAMPUS LEADERSHIP",
      title: "Core Technical Club Member & Web Lead",
      institution: "Student Developer Guild // KSIT",
      description: "Spearheaded frontend web initiatives for campus fests, organized Git/GitHub workshops for 100+ peers, and deployed real-time event portal systems.",
      accent: "lime",
      badge: "Completed"
    },
    {
      year: "2024",
      status: "FOUNDATIONAL MILESTONE",
      title: "Began Degree & Built First Web App",
      institution: "Kammavari Sangham Institute of Technology",
      description: "Commenced B.Tech in Artificial Intelligence & Machine Learning; mastered fundamental C++ / Python algorithms and built foundational full-stack web projects.",
      accent: "teal",
      badge: "Completed"
    }
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "1st Place - University Hackathon",
      category: "Competitive Coding",
      description: "Built an AI-driven automated campus navigation bot in 24 hours.",
      highlight: "Winner // Smart Campus Track"
    },
    {
      icon: "⚡",
      title: "150+ LeetCode Problems Solved",
      category: "Algorithms & DSA",
      description: "Proficient in graph traversals, binary trees, dynamic programming, and heaps.",
      highlight: "Consistent Practice"
    },
    {
      icon: "👥",
      title: "Tech Club Organizer",
      category: "Student Leadership",
      description: "Mentored 80+ junior engineering students in Git, UI/UX, and web development.",
      highlight: "KSIT Community"
    },
    {
      icon: "📜",
      title: "Full-Stack Certified",
      category: "Professional Credential",
      description: "Completed comprehensive certifications in modern React, RESTful APIs, and cloud basics.",
      highlight: "Verified Excellence"
    }
  ];

  return (
    <section id="campus-life" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Anchor hook for 'About' as well */}
      <div id="about" className="-mt-16 pt-16"></div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-emerald-500/20 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            <span>03 // ACADEMIC & LEADERSHIP TRAJECTORY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Education & Campus Journey
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            My engineering trajectory at KSIT, blending theoretical foundations in Artificial Intelligence with hands-on technical community leadership.
          </p>
        </div>

        <div className="hidden sm:flex items-center space-x-2 font-mono text-xs text-slate-400 bg-[#070a0e]/70 px-4 py-2 rounded-xl border border-emerald-500/20">
          <span className="text-emerald-400 font-bold">KSIT</span>
          <span className="text-slate-600">//</span>
          <span className="text-lime-300">AIML '27 BENGALURU</span>
        </div>
      </div>

      {/* Main Grid: Left Timeline + Right Achievement Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Column: Interactive Milestone Timeline (7 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/20 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-emerald-500/15 mb-8">
            <div className="flex items-center space-x-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
              <h3 className="font-display font-bold text-lg sm:text-xl text-slate-100">
                Academic Milestones
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400/80">3 Key Milestones</span>
          </div>

          {/* Vertical Illuminated Timeline */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/30 space-y-8 ml-2 sm:ml-4">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                
                {/* Glowing Nodal Dot on Line */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex items-center justify-center">
                  <div className="relative flex items-center justify-center w-5 h-5">
                    {idx === 0 && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                    )}
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#0d1117] border-2 border-emerald-400 group-hover:border-lime-400 group-hover:scale-125 transition-transform duration-200 shadow-[0_0_10px_#10b981]"></span>
                  </div>
                </div>

                {/* Milestone Card Content */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#070a0e]/60 border border-emerald-500/15 group-hover:border-emerald-400/50 group-hover:bg-[#121820]/90 transition-all duration-300 shadow-md group-hover:shadow-[0_8px_20px_rgba(16,185,129,0.15)] group-hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-950/80 text-lime-300 border border-emerald-500/30">
                        {milestone.year}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                        {milestone.status}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-carbon-950 text-slate-400 border border-emerald-500/10">
                      {milestone.badge}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-slate-100 group-hover:text-emerald-300 transition-colors">
                    {milestone.title}
                  </h4>
                  <div className="text-xs font-mono text-emerald-400/70 mb-2">
                    {milestone.institution}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans">
                    {milestone.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 2x2 Achievement Callout Badges (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/20 shadow-xl h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/15 mb-6">
                <div className="flex items-center space-x-2.5">
                  <span className="w-3 h-3 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]"></span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-100">
                    Accomplishments & Honors
                  </h3>
                </div>
                <span className="text-xs font-mono text-lime-300/80">Highlights</span>
              </div>

              {/* Compact 2x2 Grid of Achievement Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#070a0e]/70 border border-emerald-500/20 hover:border-emerald-400/70 hover:bg-[#121820] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-carbon-950 text-emerald-400 border border-emerald-500/20">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm text-slate-100 group-hover:text-lime-300 transition-colors leading-snug mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-emerald-500/10 text-[10px] font-mono text-emerald-400/80 flex items-center justify-between">
                      <span>{item.highlight}</span>
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Student Note */}
            <div className="mt-6 pt-4 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Active Contributor @ KSIT
              </span>
              <a
                href="#contact"
                className="text-emerald-400 hover:text-lime-300 transition-colors flex items-center gap-1"
              >
                Connect ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
