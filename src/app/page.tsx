'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import GoalSection from '../components/GoalSection';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <IntroSection />
        <SkillsSection />
        <ProjectsSection />
        <GoalSection />
      </main>
      <Footer />
    </div>
  );
}
