import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">포트폴리오</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} 모든 권리 보유</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              LinkedIn
            </a>
            <a href="mailto:example@example.com" className="hover:text-gray-300">
              이메일
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 