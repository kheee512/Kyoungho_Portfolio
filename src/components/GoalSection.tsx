import React from 'react';
import { motion } from 'framer-motion';

interface Goal {
  title: string;
  description: string;
  icon: string;
}

const goals: Goal[] = [
  {
    title: '기술적 성장',
    description: '프론트엔드 기술을 더욱 깊이 이해하고, 백엔드 기술도 함께 학습하여 풀스택 개발자로 성장하고자 합니다.',
    icon: '🚀'
  },
  {
    title: '소통하는 팀원',
    description: '팀원들과 소통하여 프로젝트를 함께 진행하고, 서로 도움을 주고 받으며 성장하고자 합니다.',
    icon: '👥'
  },
  {
    title: '몰입감 있는 사용자 경험',
    description: '사용자의 몰입감을 최대화하는 서비스를 만드는 프론트엔드 개발자가 되고자 합니다.',
    icon: '🌐'
  },
  {
    title: '지속적인 학습',
    description: '빠르게 변화하는 기술 트렌드를 따라가며 끊임없이 학습하고 성장하는 개발자가 되고자 합니다.',
    icon: '📚'
  }
];

const GoalSection: React.FC = () => {
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
    <section id="goals" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-slate-50 to-zinc-100 snap-start py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">목표</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            개발자로서 이루고 싶은 목표와 성장 방향입니다.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4 text-center">{goal.icon}</div>
              <h3 className="text-2xl font-bold text-center text-slate-800 mb-4">{goal.title}</h3>
              <p className="text-slate-600 text-center">{goal.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoalSection; 