import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStackSkills from './components/TechStackSkills';
import EducationCampusJourney from './components/EducationCampusJourney';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MatrixGridCanvas from './components/MatrixGridCanvas';
import CursorFollower from './components/CursorFollower';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-lime-300 overflow-x-hidden">
      {/* Background Interactive HTML5 Canvas Matrix Dot Grid */}
      <MatrixGridCanvas />

      {/* Interactive Mouse Feature (Easter Egg): Trailing Light Spark */}
      <CursorFollower />

      {/* Fixed Frosted Glass Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Intro Hero Screen */}
        <Hero />

        {/* Featured Projects Showcase */}
        <FeaturedProjects />

        {/* Tech Stack & Skills Section */}
        <TechStackSkills />

        {/* Education & Campus Journey Section */}
        <EducationCampusJourney />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
