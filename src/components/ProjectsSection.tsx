import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: '프로젝트 1',
    description: '첫 번째 프로젝트에 대한 설명입니다. 이 프로젝트는 어떤 문제를 해결하기 위해 만들어졌으며, 어떤 기능을 제공합니다.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/project1.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: '프로젝트 2',
    description: '두 번째 프로젝트에 대한 설명입니다. 이 프로젝트는 어떤 문제를 해결하기 위해 만들어졌으며, 어떤 기능을 제공합니다.',
    technologies: ['Next.js', 'TypeScript', 'Styled-Components'],
    imageUrl: '/images/project2.jpg',
    githubUrl: 'https://github.com'
  },
  {
    title: '프로젝트 3',
    description: '세 번째 프로젝트에 대한 설명입니다. 이 프로젝트는 어떤 문제를 해결하기 위해 만들어졌으며, 어떤 기능을 제공합니다.',
    technologies: ['React', 'JavaScript', 'CSS'],
    imageUrl: '/images/project3.jpg',
    liveUrl: 'https://example.com'
  },
  {
    title: '프로젝트 4',
    description: '네 번째 프로젝트에 대한 설명입니다. 이 프로젝트는 어떤 문제를 해결하기 위해 만들어졌으며, 어떤 기능을 제공합니다.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/images/project4.jpg'
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
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">이미지 준비 중</p>
                </div>
                {/* 실제 이미지가 있을 때 사용할 코드 */}
                {/* <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                /> */}
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
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      라이브 데모
                    </a>
                  )}
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