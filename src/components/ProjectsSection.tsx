import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    description: '일상 속 꿀팁 공유 플랫폼',
    technologies: ['React', 'TypeScript', 'Styled-Components', 'Vite', 'React Quill', 'Framer-Motion', 'ESLint', 'Prettier'],
    imageUrl: '/images/tipzip2.jpg',
    githubUrl: 'https://github.com/TIP-ZIP/TIPZIP_FE'
  },
  {
    title: 'Feelow',
    description: '현대인들의 감정 관리를 위한 감정 타이머 서비스',
    technologies: ['React', 'JavaScript', 'Emotion', 'Framer-Motion', 'React Calendar'],
    imageUrl: '/images/feelow.png',
    githubUrl: 'https://github.com/Likelion-Feelow/Feelow-Client'
  },
  {
    title: 'Hongik Univ. Exhibition Interaction Service',
    description: '2024년 홍익대학교 산업디자인학과 졸업 전시 부스에 게시된 전시 관람객을 위한 인터랙션 서비스',
    technologies: ['React', 'JavaScript', 'React Router DOM', 'Styled-Components', 'OpenAI API'],
    imageUrl: '/images/hongikid.png',
    githubUrl: 'https://github.com/kheee512/2024-Hongik-ID-Exhibition'
  },
  {
    title: 'LocalIt',
    description: '지역 거주민과 여행객 매칭 서비스',
    technologies: ['illustrator', 'Figma', 'React Native'],
    imageUrl: '/images/localit.png'
  }
];

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // 이전 프로젝트로 이동
  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };
  
  // 다음 프로젝트로 이동
  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // 페이지네이션 점 클릭 핸들러
  const goToProject = (index: number) => {
    // 방향 설정 추가
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // 애니메이션 변형 - 수직 이동 없음을 보장 (타입 에러 수정)
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      y: 0,
      opacity: 0
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      y: 0,
      opacity: 0
    })
  };

  // 페이지 이동 함수
  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      nextProject();
    } else {
      prevProject();
    }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-white snap-start py-20 pt-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">프로젝트</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            제가 진행했던 주요 프로젝트들입니다.
          </p>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto">
          {/* 좌측 화살표 - 이미지 영역 밖에 위치 (더 바깥쪽으로 이동) */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-24 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="이전 프로젝트"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>

          {/* 캐러셀 컨테이너 - 고정 높이 추가 */}
          <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-lg relative" style={{ height: '450px' }}>
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.3, ease: "easeInOut" },
                  opacity: { duration: 0.2 }
                }}
                className="w-full h-full absolute inset-0"
                style={{ zIndex: 1 }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={projects[currentIndex].imageUrl}
                    alt={projects[currentIndex].title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  
                  {/* 깃허브 버튼 */}
                  {projects[currentIndex].githubUrl && (
                    <div className="absolute top-4 right-4 transition-opacity duration-300">
                      <a
                        href={projects[currentIndex].githubUrl}
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{projects[currentIndex].title}</h3>
                  <p className="text-gray-600 mb-4">{projects[currentIndex].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[currentIndex].technologies.map((tech, techIndex) => (
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
            </AnimatePresence>
          </div>

          {/* 우측 화살표 - 이미지 영역 밖에 위치 (더 바깥쪽으로 이동) */}
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-24 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="다음 프로젝트"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>

          {/* 페이지네이션 인디케이터 */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full focus:outline-none ${index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'}`}
                aria-label={`프로젝트 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 