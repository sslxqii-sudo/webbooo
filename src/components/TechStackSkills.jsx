import React, { useState } from 'react';
import SkillBadge from './SkillBadge';

// --- Technology SVG Logos & Conceptual Icons ---
const CppIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.394 6.002L13.606.928a3.212 3.212 0 00-3.212 0L1.606 6.002A3.21 3.21 0 000 8.784v10.15c0 1.15.613 2.21 1.606 2.782l8.788 5.074a3.212 3.212 0 003.212 0l8.788-5.074c.993-.573 1.606-1.633 1.606-2.783V8.784a3.21 3.21 0 00-1.606-2.782zM12 21.65l-7.5-4.33V8.68L12 4.35l7.5 4.33v8.64L12 21.65zm1.5-12.65h-1.8v2.4h-2.4v1.8h2.4v2.4h1.8v-2.4h2.4v-1.8h-2.4V9zm5 0h-1.8v2.4h-2.4v1.8h2.4v2.4h1.8v-2.4h2.4v-1.8h-2.4V9z"/>
  </svg>
);

const PythonIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.813v.825H3.896S0 5.787 0 11.9c0 6.112 3.4 5.88 3.4 5.88h2.03v-2.85s-.11-3.4 3.34-3.4h5.76v-.844h-5.76c-3.45 0-3.34-3.4-3.34-3.4V4.93s.33-2.656 6.48-2.656c6.15 0 5.8 2.656 5.8 2.656v2.33h-2.85v.845h5.75s3.4-.23 3.4 5.88c0 6.113-3.896 6.113-3.896 6.113h-2.02v-2.75s.1-3.4-3.35-3.4h-5.76v.844h5.76c3.45 0 3.35 3.4 3.35 3.4v2.35s-.38 2.656-6.48 2.656c-6.1 0-5.8-2.656-5.8-2.656l-.006-2.75h-2.9v-.825h8.12s3.9.444 3.9-5.67c0-6.112-3.4-5.88-3.4-5.88h-2.03v2.85s.11 3.4-3.34 3.4h-5.76v.844h5.76c3.45 0 3.34-3.4 3.34-3.4V7.26s-.33-2.656-6.48-2.656zM8.88 1.94a.88.88 0 110 1.76.88.88 0 010-1.76zm6.24 18.36a.88.88 0 110 1.76.88.88 0 010-1.76z"/>
  </svg>
);

const JsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.888-1.798-2.85-2.584l-.744-.306c-1.2-.5-1.573-.85-1.573-1.47 0-.54.38-1.005 1.2-1.005.815 0 1.258.338 1.54 1.005l1.988-.847c-.508-1.288-1.54-1.92-3.528-1.92-2.32 0-3.454 1.355-3.454 2.898 0 1.762 1.084 2.457 2.846 3.169l.745.305c1.372.56 1.83.983 1.83 1.677 0 .746-.66 1.152-1.66 1.152-1.39 0-2.033-.678-2.355-1.559l-2.05.847c.474 1.457 1.694 2.44 4.405 2.44 2.627 0 3.847-1.321 3.847-3.143l-.004-.704zM13.29 11.23h-2.22v7.184c0 1.458-.695 2.05-1.932 2.05-.627 0-1.084-.118-1.423-.338l-.44.745c.457.305 1.152.474 2.033.474 2.372 0 3.982-1.186 3.982-3.66V11.23z"/>
  </svg>
);

const JavaIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
    <line x1="6" y1="1" x2="6" y2="4"></line>
    <line x1="10" y1="1" x2="10" y2="4"></line>
    <line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>
);

const SqlIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const TsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM11.95 8.922h-3.41v9.64h-2.12v-9.64H3.01V7.158h8.94v1.764zm10.02 5.093c-.09.608-.344 1.135-.762 1.58-.418.446-1.002.775-1.752.986-.75.212-1.636.318-2.658.318-.89 0-1.705-.09-2.443-.27-.738-.18-1.34-.455-1.807-.824l.87-1.637c.39.293.882.527 1.478.702.595.176 1.198.264 1.808.264.678 0 1.233-.08 1.665-.24.432-.16.745-.38.938-.66.194-.28.29-.6.29-.96 0-.317-.078-.587-.234-.81-.157-.223-.426-.425-.808-.606-.382-.18-.915-.36-1.6-.54-.86-.23-1.57-.492-2.13-.787-.56-.294-.972-.656-1.236-1.085-.264-.43-.396-.96-.396-1.59 0-.67.165-1.26.495-1.77.33-.51.815-.91 1.455-1.2.64-.29 1.43-.435 2.37-.435.8 0 1.54.08 2.22.24.68.16 1.25.39 1.71.69l-.75 1.65c-.41-.26-.88-.46-1.41-.6-.53-.14-1.07-.21-1.62-.21-.6 0-1.1.07-1.5.21-.4.14-.69.34-.87.6-.18.26-.27.56-.27.9 0 .31.08.57.24.78.16.21.43.4.81.57.38.17.91.35 1.59.54.89.24 1.62.51 2.19.81.57.3.99.68 1.26 1.14.27.46.405 1.02.405 1.68 0 .42-.06.82-.18 1.2z"/>
  </svg>
);

const ReactIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
  </svg>
);

const NodeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const GitIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="6" y2="15"></line>
    <circle cx="18" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <path d="M18 9a9 9 0 0 1-9 9"></path>
  </svg>
);

const PyTorchIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
  </svg>
);

const FastApiIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const DsaIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3"></circle>
    <circle cx="6" cy="19" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="10" y1="7.5" x2="7.5" y2="16.5"></line>
    <line x1="14" y1="7.5" x2="16.5" y2="16.5"></line>
  </svg>
);

const OopIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const DbmsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const OsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
);

const NetworksIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

/**
 * TechStackSkills Component
 * Displays 3 categorized groups:
 * 1. Languages (C++, Python, JavaScript, Java, SQL, TypeScript)
 * 2. Frameworks & Tools (React, Tailwind CSS, Node.js, Git/GitHub, PyTorch, FastAPI)
 * 3. Core CS Concepts (Data Structures & Algorithms, OOP, DBMS, OS, Computer Networks)
 */
export default function TechStackSkills() {
  const categories = [
    {
      id: "languages",
      title: "Languages",
      badge: "Syntax & Logic",
      tagline: "Core programming languages for algorithmic problem solving and software architecture.",
      icon: CppIcon,
      accent: "emerald",
      skills: [
        { name: "C++", level: "Proficient", icon: CppIcon, note: "Competitive Programming & STL" },
        { name: "Python", level: "Proficient", icon: PythonIcon, note: "AI/ML, Automation & Scripting" },
        { name: "JavaScript (ES6+)", level: "Proficient", icon: JsIcon, note: "DOM, Async/Await & Modern Web" },
        { name: "Java", level: "Familiar", icon: JavaIcon, note: "OOP Foundations & JVM" },
        { name: "SQL", level: "Familiar", icon: SqlIcon, note: "Relational Queries & Indexing" },
        { name: "TypeScript", level: "Currently Learning", icon: TsIcon, note: "Type Safety & Enterprise React" },
      ]
    },
    {
      id: "frameworks",
      title: "Frameworks & Tools",
      badge: "Libraries & DevOps",
      tagline: "Full-stack tools, styling systems, and machine learning pipelines for modern deployment.",
      icon: ReactIcon,
      accent: "lime",
      skills: [
        { name: "React", level: "Proficient", icon: ReactIcon, note: "Hooks, State & Component Architecture" },
        { name: "Tailwind CSS", level: "Proficient", icon: TailwindIcon, note: "Responsive Cyber-Dark UI Systems" },
        { name: "Node.js", level: "Familiar", icon: NodeIcon, note: "REST APIs & Backend Runtimes" },
        { name: "Git / GitHub", level: "Proficient", icon: GitIcon, note: "Branching, Collaboration & PRs" },
        { name: "PyTorch", level: "Familiar", icon: PyTorchIcon, note: "Neural Networks & Computer Vision" },
        { name: "FastAPI", level: "Familiar", icon: FastApiIcon, note: "High-throughput Python Microservices" },
      ]
    },
    {
      id: "concepts",
      title: "Core CS Concepts",
      badge: "Theoretical Foundations",
      tagline: "Fundamental engineering pillars driving robust systems and scalable performance.",
      icon: DsaIcon,
      accent: "teal",
      skills: [
        { name: "Data Structures", level: "Proficient", icon: DsaIcon, note: "Trees, Graphs, DP & Heaps" },
        { name: "OOP Principles", level: "Proficient", icon: OopIcon, note: "Encapsulation, Polymorphism, Design" },
        { name: "DBMS", level: "Proficient", icon: DbmsIcon, note: "Normalization, ACID, Transactions" },
        { name: "Operating Systems", level: "Familiar", icon: OsIcon, note: "Processes, Threads, Memory Mgmt" },
        { name: "Computer Networks", level: "Familiar", icon: NetworksIcon, note: "TCP/IP, HTTP/S, Sockets" },
      ]
    }
  ];

  return (
    <section id="skills" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-emerald-500/20 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>02 // ARSENAL & PROFICIENCY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Tech Stack & Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            A curated breakdown of the programming languages, full-stack frameworks, and core engineering concepts I use to engineer real-world software.
          </p>
        </div>

        {/* Interactive Comfort Level Legend */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-2.5 rounded-xl bg-[#070a0e]/80 border border-emerald-500/20 font-mono text-[11px]">
          <span className="text-slate-400 mr-1">Legend:</span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Proficient
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-lime-950/70 text-lime-300 border border-lime-500/30">
            <span className="w-2 h-2 rounded-full bg-lime-400"></span> Familiar
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-950/70 text-teal-300 border border-teal-500/30">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span> Learning
          </span>
        </div>
      </div>

      {/* 3 Tidy Category Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {categories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <div
              key={category.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.15)]"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-emerald-500/15 mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-[#070a0e] border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 group-hover:border-lime-400/50 transition-colors shadow-sm">
                      <CategoryIcon />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-emerald-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-emerald-400/70 uppercase tracking-wider block">
                        {category.badge}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    {category.skills.length} Items
                  </span>
                </div>

                {/* Subtitle / Scope */}
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.tagline}
                </p>

                {/* Interactive Skill Pill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <SkillBadge
                      key={sIdx}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      note={skill.note}
                    />
                  ))}
                </div>
              </div>

              {/* Card Footer Micro-Terminal Note */}
              <div className="mt-8 pt-4 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified @ KSIT AIML</span>
                <span className="text-emerald-400/80 flex items-center gap-1">
                  Hover for status ↗
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
