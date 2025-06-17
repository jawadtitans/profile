import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, FileDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        'service_3awva8d', // Replace with your EmailJS service ID
        'template_kim0rat', // Replace with your EmailJS template ID
        formRef.current,
        'agJWS10A7kzDKKkBT' // Replace with your EmailJS public key
      );

      setSubmitStatus({
        type: 'success',
        message: t.contact.formSuccess
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t.contact.formError
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: t.contact.email,
      value: "engjawadrahimi@gmail.com",
      link: "mailto:engjawadrahimi@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      title: t.contact.phone,
      value: "+93767180833",
      link: "tel:+93767180833"
    },
    {
      icon: <MapPin size={20} />,
      title: t.contact.location,
      value: t.contact.locationValue,
      link: "https://maps.google.com/?q=Kabul,Afghanistan"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      title: "GitHub",
      link: "https://github.com/jawadtitans"
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/jawad-rahimi-751695306"
    },
    {
      icon: <MessageCircle size={20} />,
      title: "WhatsApp",
      link: "https://wa.me/0767180833"
    }
  ];

  return (
    <section
      id="contact"
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
            {language === 'en' ? 'Get In ' : ''}<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {language === 'en'
              ? "Ready to start your next project? Let's collaborate and bring your ideas to life with innovative technology solutions."
              : "آماده شروع پروژه بعدی خود هستید؟ بیایید همکاری کنیم و ایده‌هایتان را با راه‌حل‌های تکنولوژی نوآورانه به زندگی بیاوریم."
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
              {language === 'en' ? 'Send Me a Message' : 'برای من پیام بفرستید'}
            </h3>

            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder={language === 'en' ? "Your full name" : "نام کامل شما"}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder={language === 'en' ? "your.email@example.com" : "ایمیل شما"}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder={language === 'en' ? "What's this about?" : "درباره چیست؟"}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t.contact.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder={language === 'en' ? "Tell me about your project or idea..." : "درباره پروژه یا ایده خود به من بگویید..."}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{language === 'en' ? 'Sending...' : 'در حال ارسال...'}</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t.contact.sendMessage}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {language === 'en' ? 'Contact Information' : 'اطلاعات تماس'}
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center">
                  <div className="mr-4 text-2xl text-gray-500">
                    {info.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {info.title}
                    </p>
                    <a
                      href={info.link}
                      className={`text-sm font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {language === 'en' ? 'Social Links' : 'لینک های اجتماعی'}
              </h3>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <div key={link.title} className="flex items-center">
                    <div className="mr-4 text-2xl text-gray-500">
                      {link.icon}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {link.title}
                      </p>
                      <a
                        href={link.link}
                        className={`text-sm font-medium ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {link.title}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;