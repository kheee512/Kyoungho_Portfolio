import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
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
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-500/30 to-violet-300/30 backdrop-blur-sm shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold text-slate-100"
          whileHover={{ scale: 1.05 }}
        >
          Eom Kyoungho
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#intro" className="text-slate-700 hover:text-violet-700" onClick={scrollToSection('intro')}>소개</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#skills" className="text-slate-700 hover:text-violet-700" onClick={scrollToSection('skills')}>기술 스택</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#projects" className="text-slate-700 hover:text-violet-700" onClick={scrollToSection('projects')}>프로젝트</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#goals" className="text-slate-700 hover:text-violet-700" onClick={scrollToSection('goals')}>목표</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#roadmap" className="text-slate-700 hover:text-violet-700" onClick={scrollToSection('roadmap')}>로드맵</a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header; 