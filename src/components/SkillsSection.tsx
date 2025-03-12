import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: '상' | '중' | '하';
  description: string;
}

const skills: Skill[] = [
  {
    name: 'React',
    level: '상',
    description: 'React를 통해 다양한 앱 구현 가능하였습니다.'
  },
  {
    name: 'TypeScript',
    level: '중',
    description: '타입 안정성을 갖춘 코드를 작성할 수 있습니다.'
  },
  {
    name: 'JavaScript',
    level: '상',
    description: '웹 개발의 기본이 되는 언어를 능숙하게 다룹니다.'
  },
  {
    name: 'Styled-Components',
    level: '중',
    description: 'CSS-in-JS 방식으로 스타일링을 구현합니다.'
  },
  {
    name: 'Tailwind CSS',
    level: '하',
    description: '유틸리티 클래스를 활용한 빠른 UI 개발이 가능합니다.'
  },
  {
    name: 'Next.js',
    level: '하',
    description: 'SSR과 정적 사이트 생성을 활용한 웹 개발을 합니다.'
  }
];

const SkillsSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-50 snap-start py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">기술 스택</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 프로젝트를 통해 습득한 기술들입니다.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">{skill.name}</h3>
              <div className="flex justify-center mb-4">
                <span className={`px-4 py-1 rounded-full text-white ${
                  skill.level === '상' ? 'bg-green-500' :
                  skill.level === '중' ? 'bg-blue-500' : 'bg-yellow-500'
                }`}>
                  {skill.level}
                </span>
              </div>
              <p className="text-gray-600 text-center">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 