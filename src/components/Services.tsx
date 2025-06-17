import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Palette, Server, Brain, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface ServicesProps {
  darkMode: boolean;
  onServiceClick?: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ darkMode, onServiceClick }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const services = [
    {
      id: 'mobile-development',
      icon: <Smartphone className="w-8 h-8" />,
      title: t.services.mobileDev,
      description: t.services.mobileDevDesc,
      features: language === 'en' 
        ? ["iOS & Android", "Custom UI/UX", "State Management", "Performance Optimized"]
        : ["iOS و Android", "رابط کاربری سفارشی", "مدیریت حالت", "بهینه‌سازی عملکرد"]
    },
    {
      id: 'web-development',
      icon: <Globe className="w-8 h-8" />,
      title: t.services.webDev,
      description: t.services.webDevDesc,
      features: language === 'en'
        ? ["Django REST API", "Responsive Design", "Database Design", "Security Implementation"]
        : ["Django REST API", "طراحی واکنش‌گرا", "طراحی پایگاه داده", "پیاده‌سازی امنیت"]
    },
    {
      id: 'ui-ux-design',
      icon: <Palette className="w-8 h-8" />,
      title: t.services.uiuxDesign,
      description: t.services.uiuxDesignDesc,
      features: language === 'en'
        ? ["Figma Prototyping", "User Research", "Design Systems", "Usability Testing"]
        : ["نمونه‌سازی Figma", "تحقیق کاربری", "سیستم‌های طراحی", "تست قابلیت استفاده"]
    },
    {
      id: 'api-integration',
      icon: <Server className="w-8 h-8" />,
      title: t.services.apiIntegration,
      description: t.services.apiIntegrationDesc,
      features: language === 'en'
        ? ["RESTful APIs", "Database Management", "Cloud Integration", "Authentication Systems"]
        : ["RESTful APIs", "مدیریت پایگاه داده", "یکپارچه‌سازی ابری", "سیستم‌های احراز هویت"]
    },
    {
      id: 'ai-integration',
      icon: <Brain className="w-8 h-8" />,
      title: language === 'en' ? "AI Integration" : "یکپارچه‌سازی هوش مصنوعی",
      description: language === 'en'
        ? "Intelligent features powered by machine learning and AI technologies."
        : "ویژگی‌های هوشمند با استفاده از تکنولوژی‌های یادگیری ماشین و هوش مصنوعی.",
      features: language === 'en'
        ? ["Python ML", "AI-Powered Features", "Data Analysis", "Automation Solutions"]
        : ["یادگیری ماشین پایتون", "ویژگی‌های مبتنی بر AI", "تحلیل داده", "راه‌حل‌های اتوماسیون"]
    },
    {
      id: 'mentorship',
      icon: <GraduationCap className="w-8 h-8" />,
      title: language === 'en' ? "Educational Content & Mentorship" : "محتوای آموزشی و مربیگری",
      description: language === 'en'
        ? "Sharing knowledge through tutorials, mentorship, and educational content creation."
        : "اشتراک‌گذاری دانش از طریق آموزش‌ها، مربیگری و ایجاد محتوای آموزشی.",
      features: language === 'en'
        ? ["Technical Writing", "Code Reviews", "Mentorship", "Workshop Facilitation"]
        : ["نوشتن فنی", "بازبینی کد", "مربیگری", "تسهیل کارگاه‌ها"]
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    if (onServiceClick) {
      onServiceClick(serviceId);
    }
  };

  return (
    <section
      id="services"
      className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'en' ? 'My ' : ''}<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.services.title}
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {language === 'en'
              ? "I offer comprehensive development services to help bring your ideas to life with cutting-edge technology and thoughtful design."
              : "من خدمات توسعه جامعی ارائه می‌دهم تا به شما کمک کنم ایده‌هایتان را با تکنولوژی پیشرفته و طراحی متفکرانه به زندگی بیاورید."
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => handleServiceClick(service.id)}
              className={`${
                darkMode ? 'bg-gray-900' : 'bg-gray-50'
              } rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border cursor-pointer ${
                darkMode ? 'border-gray-700 hover:border-blue-500/30' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold ${isRTL ? 'mr-4' : 'ml-4'} ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
              </div>

              <p className={`text-base mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    viewport={{ once: true }}
                    className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ${
                      isRTL ? 'ml-3' : 'mr-3'
                    }`}></div>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <button className="text-blue-600 hover:text-purple-600 font-medium transition-colors duration-200 flex items-center group">
                  <span>{t.services.viewDetails}</span>
                  <motion.svg
                    className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`}
                    whileHover={{ x: isRTL ? -5 : 5 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`${
            darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          } rounded-2xl p-8 md:p-12`}>
            <h3 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {language === 'en' ? 'Ready to Start Your Project?' : 'آماده شروع پروژه خود هستید؟'}
            </h3>
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {language === 'en'
                ? "Let's collaborate to bring your ideas to life with innovative technology solutions."
                : "بیایید همکاری کنیم تا ایده‌هایتان را با راه‌حل‌های تکنولوژی نوآورانه به زندگی بیاوریم."
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              {t.contact.getInTouch}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;