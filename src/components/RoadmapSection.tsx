import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaAward } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface RoadmapItem {
  year: string;
  title: string;
  description: string;
  icon: 'education' | 'project' | 'career' | 'achievement';
  status: 'past' | 'present' | 'future';
}

const roadmapItems: RoadmapItem[] = [
  {
    year: '2023',
    title: '웹 프론트엔드 기술 심화',
    description: 'React, TypeScript 심화 학습 및 프로젝트 적용',
    icon: 'education',
    status: 'past'
  },
  {
    year: '2024',
    title: '풀스택 개발자로 성장',
    description: 'Node.js, Express, MongoDB 등 백엔드 기술 학습',
    icon: 'project',
    status: 'present'
  },
  {
    year: '2025',
    title: '프론트엔드 개발자 취업',
    description: '웹 프론트엔드 개발자로 취업하여 실무 경험 쌓기',
    icon: 'career',
    status: 'future'
  },
  {
    year: '2026',
    title: '기술 블로그 운영',
    description: '개발 경험을 공유하는 기술 블로그 운영 및 오픈소스 기여',
    icon: 'achievement',
    status: 'future'
  }
];

const iconMap: Record<string, IconType> = {
  education: FaGraduationCap,
  project: FaLaptopCode,
  career: FaBriefcase,
  achievement: FaAward
};

const RoadmapSection: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="roadmap" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-slate-50 to-violet-50 snap-start py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">로드맵</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            제 개발자 커리어의 과거, 현재, 그리고 미래 계획입니다.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto relative"
        >
          {/* 타임라인 중앙선 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-violet-200 transform -translate-x-1/2 rounded-full"></div>

          {roadmapItems.map((roadmapItem, index) => {
            const Icon = iconMap[roadmapItem.icon];
            const isEven = index % 2 === 0;
            
            // 상태에 따른 색상 설정
            const statusColors: Record<string, string> = {
              past: 'from-slate-400 to-slate-500',
              present: 'from-violet-500 to-purple-600',
              future: 'from-blue-400 to-cyan-500'
            };
            
            return (
              <motion.div
                key={index}
                variants={item}
                className={`flex items-center mb-16 relative ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* 타임라인 점 */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 z-10"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${statusColors[roadmapItem.status]} shadow-md flex items-center justify-center text-white`}>
                    {roadmapItem.status === 'present' && (
                      <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                    )}
                  </div>
                </motion.div>

                {/* 내용 박스 - 왼쪽 또는 오른쪽에 배치 */}
                <motion.div 
                  className={`w-5/12 ${isEven ? 'pr-10' : 'pl-10'}`}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${statusColors[roadmapItem.status]} text-white mr-4`}>
                        {Icon && React.createElement(Icon as any, { size: 24 })}
                      </div>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-white text-sm bg-gradient-to-r ${statusColors[roadmapItem.status]} mb-1`}>
                          {roadmapItem.year}
                        </span>
                        <h3 className="text-xl font-bold text-slate-800">{roadmapItem.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600">{roadmapItem.description}</p>
                  </div>
                </motion.div>

                {/* 빈 공간 (반대쪽) */}
                <div className="w-5/12"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection; 