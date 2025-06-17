import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: language === 'en' ? "Top Academic Performance" : "عملکرد تحصیلی برتر",
      description: language === 'en' ? "Achieved highest scores throughout academic career" : "دستیابی به بالاترین نمرات در طول دوران تحصیلی"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: language === 'en' ? "Rushd Foundation Work" : "کار در بنیاد رشد",
      description: language === 'en' ? "Contributing to educational initiatives and community development" : "مشارکت در ابتکارات آموزشی و توسعه جامعه"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: language === 'en' ? "Continuous Learning" : "یادگیری مداوم",
      description: language === 'en' ? "Always exploring new technologies and methodologies" : "همیشه در حال کشف تکنولوژی‌ها و روش‌های جدید"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: language === 'en' ? "Innovation Focus" : "تمرکز بر نوآوری",
      description: language === 'en' ? "Passionate about creating solutions that make a difference" : "علاقه‌مند به ایجاد راه‌حل‌هایی که تفاوت ایجاد می‌کنند"
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: language === 'en' ? "Senior Flutter Developer" : "توسعه‌دهنده ارشد فلاتر",
      description: language === 'en' ? "Leading mobile app development projects with Django backends" : "رهبری پروژه‌های توسعه اپلیکیشن موبایل با بک‌اند جنگو"
    },
    {
      year: "2022",
      title: language === 'en' ? "Full-Stack Developer" : "توسعه‌دهنده فول‌استک",
      description: language === 'en' ? "Expanded expertise in web development and API integration" : "گسترش تخصص در توسعه وب و یکپارچه‌سازی API"
    },
    {
      year: "2021",
      title: language === 'en' ? "Mobile Development Focus" : "تمرکز بر توسعه موبایل",
      description: language === 'en' ? "Specialized in Flutter development for cross-platform solutions" : "تخصص در توسعه فلاتر برای راه‌حل‌های چندسکویی"
    },
    {
      year: "2020",
      title: language === 'en' ? "Programming Journey Begins" : "شروع سفر برنامه‌نویسی",
      description: language === 'en' ? "Started with Python and discovered passion for app development" : "شروع با پایتون و کشف علاقه به توسعه اپلیکیشن"
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
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
            {t.about.title} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Me' : 'من'}
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {language === 'en' 
              ? "I'm a passionate developer from Kabul, Afghanistan, dedicated to creating innovative solutions that bridge technology and human needs. Inspired by leaders like Sam Altman and the potential of AI, I strive to build applications that make a meaningful impact."
              : "من یک توسعه‌دهنده پرشور از کابل، افغانستان هستم که متعهد به ایجاد راه‌حل‌های نوآورانه‌ای است که تکنولوژی و نیازهای انسانی را پیوند می‌دهد. با الهام از رهبرانی مانند سم آلتمن و پتانسیل هوش مصنوعی، من تلاش می‌کنم تا اپلیکیشن‌هایی بسازم که تأثیر معناداری داشته باشند."
            }
          </p>
        </motion.div>

        <div className={`grid lg:grid-cols-2 gap-16 mb-16 ${
          isRTL ? 'lg:grid-cols-2' : ''
        }`}>
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-2xl p-8 shadow-xl`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {language === 'en' ? 'My Journey' : 'سفر من'}
            </h3>
            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {language === 'en'
                ? "My passion for technology began with a curiosity about how apps work. This led me to explore Flutter for mobile development and Django for robust backend solutions. I believe in the power of technology to solve real-world problems and create opportunities."
                : "علاقه من به تکنولوژی با کنجکاوی درباره نحوه کارکرد اپلیکیشن‌ها شروع شد. این مرا به سمت کشف فلاتر برای توسعه موبایل و جنگو برای راه‌حل‌های بک‌اند قوی هدایت کرد. من به قدرت تکنولوژی در حل مشکلات دنیای واقعی و ایجاد فرصت‌ها اعتقاد دارم."
              }
            </p>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {language === 'en'
                ? "When I'm not coding, I'm involved with the Rushd Foundation, working on educational initiatives that help empower the next generation of developers and innovators in Afghanistan."
                : "وقتی برنامه‌نویسی نمی‌کنم، با بنیاد رشد همکاری می‌کنم و روی ابتکارات آموزشی کار می‌کنم که به توانمندسازی نسل بعدی توسعه‌دهندگان و نوآوران در افغانستان کمک می‌کند."
              }
            </p>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-2xl p-8 shadow-xl`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {language === 'en' ? 'Technical Expertise' : 'تخصص فنی'}
            </h3>
            <div className="space-y-4">
              {[
                { skill: language === 'en' ? "Flutter Development" : "توسعه فلاتر", level: 95 },
                { skill: language === 'en' ? "Django & Python" : "جنگو و پایتون", level: 90 },
                { skill: language === 'en' ? "UI/UX Design" : "طراحی رابط کاربری", level: 85 },
                { skill: language === 'en' ? "API Integration" : "یکپارچه‌سازی API", level: 88 },
                { skill: language === 'en' ? "Database Design" : "طراحی پایگاه داده", level: 82 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {item.skill}
                    </span>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {item.level}%
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'en' ? 'Key Achievements' : 'دستاوردهای کلیدی'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'en' ? 'My Timeline' : 'جدول زمانی من'}
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 ${
              isRTL ? 'right-8' : 'left-8'
            }`}></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isRTL ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white ${
                    isRTL ? 'right-6' : 'left-6'
                  } ${darkMode ? 'border-gray-900' : 'border-white'}`}></div>
                  
                  {/* Content */}
                  <div className={`${
                    isRTL ? 'mr-16 text-right' : 'ml-16 text-left'
                  }`}>
                    <div className={`${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    } p-6 rounded-xl shadow-lg`}>
                      <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                      <h4 className={`text-lg font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;