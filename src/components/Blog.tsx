import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface BlogProps {
  darkMode: boolean;
  onArticleClick?: (articleId: string) => void;
}

const Blog: React.FC<BlogProps> = ({ darkMode, onArticleClick }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const blogPosts = [
    {
      id: 'flutter-cross-platform',
      title: language === 'en' 
        ? "Why I Chose Flutter for Cross-Platform Development"
        : "چرا فلاتر را برای توسعه چندسکویی انتخاب کردم",
      excerpt: language === 'en'
        ? "Exploring the advantages of Flutter for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."
        : "کشف مزایای فلاتر برای ساخت اپلیکیشن‌های زیبا و کامپایل شده بومی برای موبایل، وب و دسکتاپ از یک کدبیس واحد.",
      date: "2024-01-15",
      readTime: language === 'en' ? "5 min read" : "5 دقیقه مطالعه",
      category: language === 'en' ? "Development" : "توسعه",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 'django-ai-integration',
      title: language === 'en'
        ? "How I Built a Smart App with Django & AI"
        : "چگونه یک اپلیکیشن هوشمند با Django و AI ساختم",
      excerpt: language === 'en'
        ? "A deep dive into integrating artificial intelligence features into Django applications, from machine learning models to intelligent automation."
        : "غوطه‌وری عمیق در یکپارچه‌سازی ویژگی‌های هوش مصنوعی در اپلیکیشن‌های Django، از مدل‌های یادگیری ماشین تا اتوماسیون هوشمند.",
      date: "2024-01-08",
      readTime: language === 'en' ? "8 min read" : "8 دقیقه مطالعه",
      category: language === 'en' ? "AI & Backend" : "هوش مصنوعی و بک‌اند",
      image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 'sam-altman-inspiration',
      title: language === 'en'
        ? "The Role of Sam Altman and OpenAI in My Inspiration"
        : "نقش سم آلتمن و OpenAI در الهام من",
      excerpt: language === 'en'
        ? "How visionary leaders in AI are shaping the future of technology and inspiring the next generation of developers to build meaningful solutions."
        : "چگونه رهبران آینده‌نگر در هوش مصنوعی آینده تکنولوژی را شکل می‌دهند و نسل بعدی توسعه‌دهندگان را برای ساخت راه‌حل‌های معنادار الهام می‌دهند.",
      date: "2023-12-22",
      readTime: language === 'en' ? "6 min read" : "6 دقیقه مطالعه",
      category: language === 'en' ? "Inspiration" : "الهام",
      image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 'responsive-flutter-ui',
      title: language === 'en'
        ? "Building Responsive UIs with Flutter"
        : "ساخت رابط‌های کاربری واکنش‌گرا با فلاتر",
      excerpt: language === 'en'
        ? "Best practices for creating beautiful, responsive user interfaces that work seamlessly across different screen sizes and orientations."
        : "بهترین شیوه‌ها برای ایجاد رابط‌های کاربری زیبا و واکنش‌گرا که به طور بی‌نقص در اندازه‌ها و جهت‌های مختلف صفحه کار می‌کنند.",
      date: "2023-12-15",
      readTime: language === 'en' ? "7 min read" : "7 دقیقه مطالعه",
      category: language === 'en' ? "UI/UX" : "رابط کاربری",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 'api-integration-strategies',
      title: language === 'en'
        ? "API Integration Strategies for Mobile Apps"
        : "استراتژی‌های یکپارچه‌سازی API برای اپلیکیشن‌های موبایل",
      excerpt: language === 'en'
        ? "Comprehensive guide to implementing robust API integrations in mobile applications with error handling and performance optimization."
        : "راهنمای جامع برای پیاده‌سازی یکپارچه‌سازی‌های قوی API در اپلیکیشن‌های موبایل با مدیریت خطا و بهینه‌سازی عملکرد.",
      date: "2023-12-01",
      readTime: language === 'en' ? "10 min read" : "10 دقیقه مطالعه",
      category: language === 'en' ? "Backend" : "بک‌اند",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 'afghan-tech-community',
      title: language === 'en'
        ? "The Future of Afghan Tech Community"
        : "آینده جامعه تکنولوژی افغانستان",
      excerpt: language === 'en'
        ? "Thoughts on the growing tech community in Afghanistan and how we can contribute to global innovation while building local capacity."
        : "اندیشه‌هایی درباره جامعه تکنولوژی در حال رشد در افغانستان و اینکه چگونه می‌توانیم در حالی که ظرفیت محلی را می‌سازیم، به نوآوری جهانی کمک کنیم.",
      date: "2023-11-20",
      readTime: language === 'en' ? "4 min read" : "4 دقیقه مطالعه",
      category: language === 'en' ? "Community" : "جامعه",
      image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleArticleClick = (articleId: string) => {
    if (onArticleClick) {
      onArticleClick(articleId);
    }
  };

  return (
    <section
      id="blog"
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
            {language === 'en' ? 'Latest ' : ''}<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.blog.title}
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {language === 'en'
              ? "Sharing insights about technology, development practices, and the future of software engineering."
              : "اشتراک‌گذاری بینش‌هایی درباره تکنولوژی، شیوه‌های توسعه و آینده مهندسی نرم‌افزار."
            }
          </p>
        </motion.div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'en' ? 'Featured Articles' : 'مقالات برجسته'}
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => handleArticleClick(post.id)}
                className={`${
                  darkMode ? 'bg-gray-900' : 'bg-gray-50'
                } rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-4 text-sm">
                    <div className="flex items-center mr-6">
                      <User size={16} className="mr-2 text-blue-600" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        Jawad Rahimi
                      </span>
                    </div>
                    <div className="flex items-center mr-6">
                      <Calendar size={16} className="mr-2 text-blue-600" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-blue-600" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h3>

                  <p className={`text-base mb-6 leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-blue-600 hover:text-purple-600 font-medium transition-colors duration-200"
                  >
                    <span>{t.blog.readMore}</span>
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Recent Articles */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'en' ? 'Recent Articles' : 'مقالات اخیر'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => handleArticleClick(post.id)}
                className={`${
                  darkMode ? 'bg-gray-900' : 'bg-gray-50'
                } rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3 text-xs">
                    <Calendar size={14} className="mr-2 text-blue-600" />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {formatDate(post.date)}
                    </span>
                    <Clock size={14} className="ml-4 mr-2 text-blue-600" />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className={`text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h4>

                  <p className={`text-sm mb-4 leading-relaxed line-clamp-3 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>

                  <motion.button
                    whileHover={{ x: 3 }}
                    className="flex items-center text-blue-600 hover:text-purple-600 font-medium text-sm transition-colors duration-200"
                  >
                    <span>{t.blog.readMore}</span>
                    <ArrowRight size={14} className="ml-2" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className={`${
            darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          } rounded-2xl p-8 md:p-12 text-center`}>
            <h3 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t.blog.stayUpdated}
            </h3>
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.blog.stayUpdatedDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.blog.emailPlaceholder}
                className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                {t.blog.subscribe}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;