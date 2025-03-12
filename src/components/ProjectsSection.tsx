import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'TIP.ZIP',
    description: '첫 번째 프로젝트에 대한 설명입니다. 이 프로젝트는 어떤 문제를 해결하기 위해 만들어졌으며, 어떤 기능을 제공합니다.',
    technologies: ['React', 'TypeScript', 'Styled-Components', 'Framer-motion', 'Git'],
    imageUrl: '/images/tipzip.jpg',
    githubUrl: 'https://github.com'
  },
  {
    title: 'Feelow',
    description: '두 번째 프로젝트에 대한 설명입니다. 이 프로젝트는 어떤 문제를 해결하기 위해 만들어졌으며, 어떤 기능을 제공합니다.',
    technologies: ['React', 'JavaScript', 'Emotion', 'Framer-motion'],
    imageUrl: '/images/feelow.png',
    githubUrl: 'https://github.com'
  },
  {
    title: 'Hongik Univ. Exhibition Interaction Service',
    description: '세 번째 프로젝트에 대한 설명입니다. 이 프로젝트는 어떤 문제를 해결하기 위해 만들어졌으며, 어떤 기능을 제공합니다.',
    technologies: ['React', 'JavaScript', 'Styled-Components', 'OpenAI API'],
    imageUrl: '/images/hongikid.png',
    githubUrl: 'https://github.com'
  },
  {
    title: 'LocalIt',
    description: '네 번째 프로젝트에 대한 설명입니다. 이 프로젝트는 어떤 문제를 해결하기 위해 만들어졌으며, 어떤 기능을 제공합니다.',
    technologies: ['illustrator', 'Figma', 'React Native'],
    imageUrl: '/next.svg'
  }
];

const ProjectsSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-white snap-start py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">프로젝트</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            제가 진행한 주요 프로젝트들입니다. 각 프로젝트는 다양한 기술과 문제 해결 능력을 보여줍니다.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative group"
            >
              <div className="relative h-64 w-full">
                {/* 실제 이미지 표시 */}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                
                {/* 깃허브 버튼 - 우측 상단에 위치하며 호버 시 나타남 */}
                {project.githubUrl && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center shadow-lg"
                      aria-label="GitHub 저장소 방문하기"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 