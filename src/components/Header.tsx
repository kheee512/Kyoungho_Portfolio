import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold text-gray-800"
          whileHover={{ scale: 1.05 }}
        >
          포트폴리오
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#intro" className="text-gray-700 hover:text-gray-900">소개</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#skills" className="text-gray-700 hover:text-gray-900">기술 스택</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">프로젝트</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#goals" className="text-gray-700 hover:text-gray-900">목표</a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header; 