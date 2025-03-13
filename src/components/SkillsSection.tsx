import React from 'react';
import { motion } from 'framer-motion';
// 아이콘 라이브러리 import
import { 
  FaReact, 
  FaJs 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiStyledcomponents, 
  SiTailwindcss, 
  SiNextdotjs 
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  level: '상' | '중' | '하';
  description: string;
}

// 스킬 정보
const skills: Skill[] = [
  {
    name: 'React',
    level: '상',
    description: 'React를 학습 후 다양한 앱 구현에 적용하였습니다.'
  },
  {
    name: 'TypeScript',
    level: '중',
    description: '코드 안정성을 갖춘 서비스를 구현하도록 노력하였습니다.'
  },
  {
    name: 'JavaScript',
    level: '상',
    description: '웹 개발의 기본인 언어를 심도 있게 학습하였습니다.'
  },
  {
    name: 'Styled-Components',
    level: '중',
    description: 'CSS-in-JS 방식으로 스타일링을 구현하였습니다.'
  },
  {
    name: 'Tailwind CSS',
    level: '하',
    description: '유틸리티 클래스를 활용한 빠른 UI 개발에 대해 학습 중입니다.'
  },
  {
    name: 'Next.js',
    level: '하',
    description: 'SSR과 정적 사이트 생성을 활용한 웹 개발에 대해 학습 중입니다.'
  }
];

// 스킬별 아이콘 매핑
const skillIconMap: Record<string, IconType> = {
  'React': FaReact,
  'TypeScript': SiTypescript,
  'JavaScript': FaJs,
  'Styled-Components': SiStyledcomponents,
  'Tailwind CSS': SiTailwindcss,
  'Next.js': SiNextdotjs
};

// 스킬별 아이콘 색상 매핑
const skillColorMap: Record<string, string> = {
  'React': '#61DAFB',
  'TypeScript': '#3178C6',
  'JavaScript': '#F7DF1E',
  'Styled-Components': '#DB7093',
  'Tailwind CSS': '#06B6D4',
  'Next.js': '#000000'
};

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
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-100 snap-start py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">기술 스택</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            다양한 프로젝트를 통해 습득한 기술들입니다.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => {
            // 각 스킬에 맞는 아이콘 컴포넌트를 가져옵니다
            const IconComponent = skillIconMap[skill.name];
            const iconColor = skillColorMap[skill.name];
            
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    {IconComponent && React.createElement(IconComponent as React.ElementType, { size: 40, color: iconColor })}
                  </div>
                  <div className="flex items-center justify-center mb-4 gap-3">
                    <h3 className="text-2xl font-bold text-slate-800">{skill.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-white text-sm ${
                      skill.level === '상' ? 'bg-gradient-to-r from-violet-500 to-purple-600' :
                      skill.level === '중' ? 'bg-gradient-to-r from-teal-500 to-cyan-600' : 'bg-gradient-to-r from-amber-500 to-orange-600'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 text-center">{skill.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 