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
    <section id="intro" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 snap-start">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            안녕하세요, <span className="text-indigo-600">엄경호</span>입니다.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            프론트엔드 개발에 열정을 가진 웹 개발자입니다.
            사용자 경험을 향상시키는 인터랙티브한 웹 애플리케이션을 만드는 것을 좋아합니다.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSection('projects')}
            >
              프로젝트 보기
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              연락하기
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection; 