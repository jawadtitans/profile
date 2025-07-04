import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Code, Monitor, Smartphone, FileCode } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-48 h-48 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/jawad.jpg" 
                  alt="Jawad Rahimi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse opacity-30"></div>
              
              {/* Orbiting Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <Monitor className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <FileCode className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl md:text-2xl mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 ${
              isRTL ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <span>{language === 'en' ? 'See My Work' : 'مشاهده کارهای من'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/resume.pdf'}
              className={`px-8 py-3 rounded-full font-medium border-2 transition-all duration-300 flex items-center space-x-2 ${
                darkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Download size={20} />
              <span>{language === 'en' ? 'Download Resume' : 'دانلود رزومه'}</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://rbs-technology.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-medium border-2 border-blue-500 text-blue-600 bg-transparent hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2"
            >
              <span>{t.hero.digitalPlatform}</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="#"
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="#"
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ y: 5 }}
            onClick={() => scrollToSection('#about')}
            className={`animate-bounce ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            <ArrowDown size={32} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;