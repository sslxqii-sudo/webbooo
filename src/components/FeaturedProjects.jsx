import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

/**
 * FeaturedProjects Component
 * Placed directly below the intro hero section.
 * Features:
 * - Filter pill row: 'All', 'Web Apps', 'AI / ML', 'Mini-Projects'
 * - Clean responsive 3-column grid
 * - Dark glass panels with border-emerald-500/20
 * - Interactive 3D tilt, hover translateY(-6px), emerald edge glow, and sleek shine effect
 * - Project 1: Campus Event Finder (React, Firebase) + Live Demo & GitHub Code
 * - Project 2: Smart Attendance Tracker (Python, OpenCV) + Live Demo & GitHub Code
 * - Project 3: Student Notes Marketplace (Tailwind, Node.js) + Live Demo & GitHub Code
 */
export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      id: "01 // FULL-STACK",
      title: "Campus Event Finder",
      categoryBadge: "Web Apps",
      categories: ["All", "Web Apps", "Mini-Projects"],
      description: "A centralized campus discovery platform that aggregates hackathons, tech workshops, and college fests into an interactive real-time timeline. Eliminates fragmented WhatsApp announcements and enables instant RSVP syncing directly to student Google Calendars.",
      techBadges: ["React", "Firebase", "Tailwind CSS", "REST API"],
      demoUrl: "https://campus-events-demo.ksit.dev",
      githubUrl: "https://github.com/shreelakshmi/campus-event-finder"
    },
    {
      id: "02 // COMPUTER VISION",
      title: "Smart Attendance Tracker",
      categoryBadge: "AI / ML",
      categories: ["All", "AI / ML"],
      description: "An automated classroom attendance system utilizing facial recognition and computer vision to verify student check-ins in under two seconds. Minimizes proxy attendance while automatically syncing real-time attendance rosters to faculty analytics dashboards.",
      techBadges: ["Python", "OpenCV", "TensorFlow", "FastAPI"],
      demoUrl: "https://smart-attendance-demo.ksit.dev",
      githubUrl: "https://github.com/shreelakshmi/smart-attendance-tracker"
    },
    {
      id: "03 // ACADEMIC PLATFORM",
      title: "Student Notes Marketplace",
      categoryBadge: "Web Apps",
      categories: ["All", "Web Apps", "Mini-Projects"],
      description: "A peer-to-peer academic repository where engineering students can upload, review, and exchange verified semester study materials and lecture guides. Features categorized subject tagging, peer ratings, and instant previewing to streamline exam prep.",
      techBadges: ["Tailwind", "Node.js", "Express", "MongoDB"],
      demoUrl: "https://student-notes-demo.ksit.dev",
      githubUrl: "https://github.com/shreelakshmi/student-notes-marketplace"
    }
  ];

  const filterOptions = [
    { id: 'All', label: 'All', count: 3 },
    { id: 'Web Apps', label: 'Web Apps', count: 2 },
    { id: 'AI / ML', label: 'AI / ML', count: 1 },
    { id: 'Mini-Projects', label: 'Mini-Projects', count: 2 },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  const handleDemoClick = (project) => {
    setActiveModal({
      title: `${project.title} - Live Demo`,
      message: `Navigating to live preview environment for ${project.title}. Demo URL: ${project.demoUrl}`,
      url: project.demoUrl
    });
  };

  const handleCodeClick = (project) => {
    setActiveModal({
      title: `${project.title} - Source Code`,
      message: `Opening GitHub repository for ${project.title}. Repo: ${project.githubUrl}`,
      url: project.githubUrl
    });
  };

  return (
    <section id="projects" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-emerald-500/20 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            <span>PORTFOLIO HIGHLIGHTS // AIML & WEB DEV</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Real-world software built to solve actual student and campus challenges with modern AI pipelines and high-performance frontend craft.
          </p>
        </div>

        {/* Dynamic Project Counter */}
        <div className="hidden sm:flex items-center space-x-2 font-mono text-xs text-slate-400 bg-[#070a0e]/70 px-4 py-2 rounded-xl border border-emerald-500/20">
          <span className="text-emerald-400 font-bold">{filteredProjects.length}</span> of{' '}
          <span className="text-slate-200 font-bold">{projects.length}</span> PROJECTS DISPLAYED
        </div>
      </div>

      {/* Filter Pill Row */}
      <div className="flex flex-wrap items-center gap-2.5 mb-10">
        <span className="text-xs font-mono text-emerald-400/80 mr-1 hidden sm:inline-block">Filter:</span>
        {filterOptions.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 flex items-center space-x-2 focus:outline-none ${
                isActive
                  ? 'bg-emerald-950/90 text-lime-300 border border-emerald-400/80 shadow-[0_0_18px_rgba(16,185,129,0.35)] -translate-y-0.5'
                  : 'bg-[#0d1117]/60 text-slate-400 hover:text-emerald-300 hover:bg-[#121820] border border-emerald-500/15'
              }`}
            >
              <span>{filter.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive
                    ? 'bg-emerald-400/25 text-lime-300'
                    : 'bg-carbon-950 text-slate-500'
                }`}
              >
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3-Column Grid with 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDemoClick={handleDemoClick}
            onCodeClick={handleCodeClick}
          />
        ))}
      </div>

      {/* Interactive Modal Toast */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-carbon-950/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel border border-emerald-400/40 rounded-2xl max-w-md w-full p-6 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 mb-4">
              <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>EXTERNAL LINK SIMULATOR</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>
            <h3 className="font-display font-bold text-lg text-slate-100 mb-2">
              {activeModal.title}
            </h3>
            <p className="text-sm text-slate-300 mb-5 leading-relaxed font-sans">
              {activeModal.message}
            </p>
            <div className="flex items-center justify-end gap-3 font-mono text-xs">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl text-slate-300 hover:text-white bg-carbon-950 border border-emerald-500/20"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(`Redirecting to: ${activeModal.url}`);
                  setActiveModal(null);
                }}
                className="px-4 py-2 rounded-xl font-bold bg-gradient-to-r from-emerald-400 to-lime-400 text-carbon-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              >
                Proceed to URL ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
