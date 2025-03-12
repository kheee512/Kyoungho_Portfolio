'use client';

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import GoalSection from '../components/GoalSection';

export default function Home() {
  // 페이지 로드 시 해시가 있으면 부드럽게 스크롤
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 500);
      }
    }
  }, []);

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
