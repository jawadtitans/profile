import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const quickLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.blog, href: '#blog' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const services = [
    t.services.mobileDev,
    t.services.webDev,
    t.services.uiuxDesign,
    t.services.apiIntegration,
    language === 'en' ? 'AI Integration' : 'یکپارچه‌سازی هوش مصنوعی',
    language === 'en' ? 'Mentorship' : 'مربیگری'
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <MessageCircle size={20} />, href: '#', label: 'Telegram' },
    { icon: <Mail size={20} />, href: '#', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    } border-t ${
      darkMode ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Jawad Rahimi
                </h3>
                <p className={`text-sm mt-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {language === 'en' ? 'Flutter Developer & Django Expert' : 'توسعه‌دهنده فلاتر و متخصص جنگو'}
                </p>
              </div>
              <p className={`text-sm mb-6 leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {language === 'en'
                  ? "Building innovative mobile and web applications that bridge technology and user experience. Passionate about creating solutions that make a difference."
                  : "ساخت برنامه‌های موبایل و وب نوآورانه که تکنولوژی و تجربه کاربری را به هم متصل می‌کند. علاقه‌مند به ایجاد راه‌حل‌هایی که تفاوت ایجاد می‌کنند."
                }
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-sm'
                    }`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-lg font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {language === 'en' ? 'Quick Links' : 'پیوندهای سریع'}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className={`text-sm hover:text-blue-600 transition-colors duration-200 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-lg font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t.services.title}
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-lg font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t.contact.getInTouch}
              </h4>
              <div className="space-y-3">
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {t.contact.locationValue}
                </p>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {t.contact.emailValue}
                </p>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {t.contact.phoneValue}
                </p>
              </div>
              
              <div className="mt-6">
                <h5 className={`text-sm font-medium mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {t.contact.availableFor}
                </h5>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                >
                  {t.contact.letsTalk}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-center py-8 text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-600'
          } border-t ${
            darkMode ? 'border-gray-800' : 'border-gray-200'
          } flex justify-center items-center flex-wrap gap-1`}
        >
          <span>&copy; {new Date().getFullYear()} Jawad Rahimi. {t.footer.rights}</span>
          <Heart size={16} className="text-red-500" />
          <span>{language === 'en' ? 'Made with love in Afghanistan.' : 'ساخته شده با عشق در افغانستان.'}</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;