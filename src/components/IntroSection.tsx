import React from 'react';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="intro" className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-stone-100/80 to-violet-100/60 snap-start relative">
      {/* 왼쪽 상단에 제목과 텍스트 */}
      <div className="container mx-auto px-4 pt-36 md:pt-48">
        <motion.div 
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-3 text-slate-800"
            whileHover={{ scale: 1.02 }}
          >
            안녕하세요, <span className="text-violet-600">엄경호</span>입니다.
          </motion.h2>
          <motion.div 
            className="text-xl md:text-2xl text-slate-600 space-y-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p>Kyoungho Eom, Hongik Univ.</p>
            <p>Computer Engineering Major, Senior</p>
            <p>Web Frontend Developer</p>
            <p>Seoul, Mapo-gu</p>
          </motion.div>
        </motion.div>
      </div>

      {/* 화면 중앙 하단에 버튼만 남기기 */}
      <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="text-xl md:text-2xl font-medium text-violet-600 hover:text-violet-800 transition-colors px-2 py-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSection('projects')}
            >
              프로젝트 보기
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection; 