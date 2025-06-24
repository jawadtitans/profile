import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star, Users, Clock, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface ServiceDetailProps {
  darkMode: boolean;
  serviceId: string;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ darkMode, serviceId, onBack }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const services = {
    'mobile-development': {
      title: t.services.mobileDev,
      subtitle: language === 'en' ? "Cross-platform excellence with Flutter" : "برتری چندسکویی با فلاتر",
      description: language === 'en' 
        ? "I specialize in creating beautiful, high-performance mobile applications using Flutter that work seamlessly across iOS and Android platforms. My approach combines modern design principles with robust functionality to deliver apps that users love."
        : "من در ایجاد اپلیکیشن‌های موبایل زیبا و با عملکرد بالا با استفاده از فلاتر که به طور بی‌نقص در پلتفرم‌های iOS و Android کار می‌کنند، تخصص دارم. رویکرد من اصول طراحی مدرن را با قابلیت‌های قوی ترکیب می‌کند تا اپلیکیشن‌هایی را ارائه دهم که کاربران دوست دارند.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: language === 'en' ? [
        "Cross-platform development with single codebase",
        "Native performance and smooth animations",
        "Custom UI components and design systems",
        "State management with Provider/Bloc patterns",
        "Integration with REST APIs and databases",
        "Push notifications and real-time features",
        "App store deployment and optimization",
        "Performance monitoring and analytics"
      ] : [
        "توسعه چندسکویی با یک کدبیس واحد",
        "عملکرد بومی و انیمیشن‌های روان",
        "مولفه‌های رابط کاربری سفارشی و سیستم‌های طراحی",
        "مدیریت حالت با الگوهای Provider/Bloc",
        "یکپارچه‌سازی با REST API ها و پایگاه‌های داده",
        "اعلان‌های فشاری و ویژگی‌های بلادرنگ",
        "استقرار و بهینه‌سازی در فروشگاه‌های اپلیکیشن",
        "نظارت بر عملکرد و تحلیل"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "SQLite", "REST APIs", "Provider", "Bloc", "Git"],
      process: [
        {
          step: t.services.planning,
          description: language === 'en' ? "Understanding your requirements, target audience, and business goals to create a comprehensive development strategy." : "درک نیازمندی‌ها، مخاطبان هدف و اهداف کسب‌وکار شما برای ایجاد یک استراتژی توسعه جامع."
        },
        {
          step: t.services.design,
          description: language === 'en' ? "Creating wireframes, mockups, and interactive prototypes that prioritize user experience and visual appeal." : "ایجاد وایرفریم‌ها، ماکت‌ها و نمونه‌های اولیه تعاملی که تجربه کاربری و جذابیت بصری را در اولویت قرار می‌دهند."
        },
        {
          step: t.services.development,
          description: language === 'en' ? "Building the app with clean, maintainable code following best practices and industry standards." : "ساخت اپلیکیشن با کد تمیز و قابل نگهداری با رعایت بهترین شیوه‌ها و استانداردهای صنعتی."
        },
        {
          step: t.services.testing,
          description: language === 'en' ? "Comprehensive testing across devices and platforms to ensure reliability and performance." : "تست جامع در دستگاه‌ها و پلتفرم‌ها برای اطمینان از قابلیت اطمینان و عملکرد."
        },
        {
          step: t.services.deployment,
          description: language === 'en' ? "App store submission, optimization, and ongoing support for updates and maintenance." : "ارسال به فروشگاه اپلیکیشن، بهینه‌سازی و پشتیبانی مداوم برای به‌روزرسانی‌ها و نگهداری."
        }
      ],
      stats: [
        { label: language === 'en' ? "Apps Developed" : "اپلیکیشن‌های توسعه‌یافته", value: "15+" },
        { label: language === 'en' ? "Client Satisfaction" : "رضایت مشتری", value: "100%" },
        { label: language === 'en' ? "Average Rating" : "امتیاز متوسط", value: "4.8/5" },
        { label: language === 'en' ? "Code Quality" : "کیفیت کد", value: "A+" }
      ],
      testimonials: [
        {
          name: language === 'en' ? "Ahmad Hassan" : "احمد حسن",
          role: language === 'en' ? "Business Owner" : "صاحب کسب‌وکار",
          content: language === 'en' ? "Jawad delivered an exceptional mobile app that exceeded our expectations. The attention to detail and user experience is outstanding." : "جواد یک اپلیکیشن موبایل استثنایی ارائه داد که فراتر از انتظارات ما بود. توجه به جزئیات و تجربه کاربری فوق‌العاده است."
        },
        {
          name: language === 'en' ? "Sarah Khan" : "سارا خان",
          role: language === 'en' ? "Startup Founder" : "بنیانگذار استارتاپ",
          content: language === 'en' ? "Working with Jawad was a pleasure. He understood our vision and brought it to life with a beautiful, functional app." : "کار با جواد لذت‌بخش بود. او دیدگاه ما را درک کرد و آن را با یک اپلیکیشن زیبا و کاربردی به واقعیت تبدیل کرد."
        }
      ]
    },
    'web-development': {
      title: t.services.webDev,
      subtitle: language === 'en' ? "Full-stack solutions with Django & Modern Frontend" : "راه‌حل‌های فول‌استک با جنگو و فرانت‌اند مدرن",
      description: language === 'en' 
        ? "I create robust, scalable web applications using Django for the backend and modern frontend technologies. My solutions are designed to handle real-world business needs with security, performance, and user experience as top priorities."
        : "من برنامه‌های وب قوی و مقیاس‌پذیر را با استفاده از جنگو برای بک‌اند و تکنولوژی‌های فرانت‌اند مدرن ایجاد می‌کنم. راه‌حل‌های من برای رفع نیازهای کسب‌وکار واقعی با اولویت‌های امنیتی، عملکرد و تجربه کاربری طراحی شده‌اند.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: language === 'en' ? [
        "Django REST API development",
        "Responsive frontend with React/Vue.js",
        "Database design and optimization",
        "User authentication and authorization",
        "Payment gateway integration",
        "Real-time features with WebSockets",
        "SEO optimization and performance tuning",
        "Cloud deployment and DevOps"
      ] : [
        "توسعه Django REST API",
        "فرانت‌اند واکنش‌گرا با React/Vue.js",
        "طراحی و بهینه‌سازی پایگاه داده",
        "احراز هویت و مجوز کاربر",
        "یکپارچه‌سازی درگاه پرداخت",
        "ویژگی‌های بلادرنگ با WebSockets",
        "بهینه‌سازی SEO و تنظیم عملکرد",
        "استقرار ابری و DevOps"
      ],
      technologies: ["Django", "Python", "React", "PostgreSQL", "Redis", "Docker", "AWS", "Nginx"],
      process: [
        {
          step: language === 'en' ? "Requirements Analysis" : "تحلیل نیازمندی‌ها",
          description: language === 'en' ? "Detailed analysis of business requirements, user stories, and technical specifications." : "تحلیل دقیق نیازمندی‌های کسب‌وکار، داستان‌های کاربر و مشخصات فنی."
        },
        {
          step: language === 'en' ? "Architecture Design" : "طراحی معماری",
          description: language === 'en' ? "Designing scalable system architecture, database schema, and API structure." : "طراحی معماری سیستم مقیاس‌پذیر، شمای پایگاه داده و ساختار API."
        },
        {
          step: language === 'en' ? "Backend Development" : "توسعه بک‌اند",
          description: language === 'en' ? "Building robust Django APIs with proper authentication, validation, and error handling." : "ساخت Django API های قوی با احراز هویت مناسب، اعتبارسنجی و مدیریت خطا."
        },
        {
          step: language === 'en' ? "Frontend Integration" : "یکپارچه‌سازی فرانت‌اند",
          description: language === 'en' ? "Creating responsive, interactive user interfaces that consume the backend APIs." : "ایجاد رابط‌های کاربری واکنش‌گرا و تعاملی که API های بک‌اند را مصرف می‌کنند."
        },
        {
          step: language === 'en' ? "Deployment & Monitoring" : "استقرار و نظارت",
          description: language === 'en' ? "Cloud deployment with monitoring, logging, and automated backup systems." : "استقرار ابری با نظارت، ثبت وقایع و سیستم‌های پشتیبان‌گیری خودکار."
        }
      ],
      stats: [
        { label: language === 'en' ? "Web Apps Built" : "اپلیکیشن‌های وب ساخته شده", value: "20+" },
        { label: language === 'en' ? "Uptime Achieved" : "زمان آپتایم به دست آمده", value: "99.9%" },
        { label: language === 'en' ? "Performance Score" : "امتیاز عملکرد", value: "95+" },
        { label: language === 'en' ? "Security Rating" : "امتیاز امنیتی", value: "A+" }
      ],
      testimonials: [
        {
          name: language === 'en' ? "Omar Farid" : "عمر فرید",
          role: language === 'en' ? "E-commerce Manager" : "مدیر تجارت الکترونیک",
          content: language === 'en' ? "The web application Jawad built for us handles thousands of users daily without any issues. Excellent work!" : "اپلیکیشن وبی که جواد برای ما ساخت، روزانه هزاران کاربر را بدون هیچ مشکلی مدیریت می‌کند. کار عالی بود!"
        },
        {
          name: language === 'en' ? "Fatima Ali" : "فاطمه علی",
          role: language === 'en' ? "NGO Director" : "مدیر سازمان غیردولتی",
          content: language === 'en' ? "Our organization's web platform has transformed how we operate. Jawad's expertise made all the difference." : "پلتفرم وب سازمان ما نحوه عملکرد ما را متحول کرده است. تخصص جواد تفاوت بزرگی ایجاد کرد."
        }
      ]
    },
    'ui-ux-design': {
      title: t.services.uiuxDesign,
      subtitle: language === 'en' ? "User-centered design that converts" : "طراحی کاربر محور که تبدیل می‌کند",
      description: language === 'en' 
        ? "I create intuitive, beautiful user interfaces that not only look great but also provide exceptional user experiences. My design process is rooted in user research, usability principles, and modern design trends."
        : "من رابط‌های کاربری بصری و زیبا ایجاد می‌کنم که نه تنها ظاهر خوبی دارند بلکه تجربه‌های کاربری استثنایی را نیز ارائه می‌دهند. فرآیند طراحی من ریشه در تحقیق کاربر، اصول قابلیت استفاده و روندهای طراحی مدرن دارد.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: language === 'en' ? [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Responsive design systems",
        "Usability testing and iteration",
        "Accessibility compliance",
        "Design handoff and documentation",
        "Conversion rate optimization"
      ] : [
        "تحقیق کاربر و توسعه پرسونای کاربری",
        "وایرفریمینگ و نمونه‌سازی اولیه",
        "طراحی بصری و برندینگ",
        "سیستم‌های طراحی واکنش‌گرا",
        "تست قابلیت استفاده و تکرار",
        "سازگاری با دسترسی‌پذیری",
        "انتقال و مستندسازی طراحی",
        "بهینه‌سازی نرخ تبدیل"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Zeplin", "Miro", "Hotjar"],
      process: [
        {
          step: language === 'en' ? "Research & Discovery" : "تحقیق و کشف",
          description: language === 'en' ? "Understanding users, business goals, and market landscape through research and analysis." : "درک کاربران، اهداف کسب‌وکار و چشم‌انداز بازار از طریق تحقیق و تحلیل."
        },
        {
          step: language === 'en' ? "Information Architecture" : "معماری اطلاعات",
          description: language === 'en' ? "Organizing content and features in a logical, user-friendly structure." : "سازماندهی محتوا و ویژگی‌ها در یک ساختار منطقی و کاربرپسند."
        },
        {
          step: language === 'en' ? "Wireframing" : "وایرفریمینگ",
          description: language === 'en' ? "Creating low-fidelity wireframes to establish layout and functionality." : "ایجاد وایرفریم‌های با کیفیت پایین برای ایجاد طرح‌بندی و عملکرد."
        },
        {
          step: language === 'en' ? "Visual Design" : "طراحی بصری",
          description: language === 'en' ? "Developing high-fidelity designs with colors, typography, and visual elements." : "توسعه طراحی‌های با کیفیت بالا با رنگ‌ها، تایپوگرافی و عناصر بصری."
        },
        {
          step: language === 'en' ? "Testing & Iteration" : "تست و تکرار",
          description: language === 'en' ? "User testing and iterative improvements based on feedback and analytics." : "تست کاربر و بهبودهای تکراری بر اساس بازخورد و تحلیل‌ها."
        }
      ],
      stats: [
        { label: language === 'en' ? "Designs Created" : "طراحی‌های ایجاد شده", value: "50+" },
        { label: language === 'en' ? "User Satisfaction" : "رضایت کاربر", value: "96%" },
        { label: language === 'en' ? "Conversion Increase" : "افزایش تبدیل", value: "40%" },
        { label: language === 'en' ? "Design Awards" : "جوایز طراحی", value: "3" }
      ],
      testimonials: [
        {
          name: language === 'en' ? "Nadia Karimi" : "نادیا کریمی",
          role: language === 'en' ? "Product Manager" : "مدیر محصول",
          content: language === 'en' ? "Jawad's design work significantly improved our user engagement. The interface is both beautiful and functional." : "کار طراحی جواد به طور قابل توجهی تعامل کاربران ما را بهبود بخشید. رابط کاربری هم زیبا و هم کاربردی است."
        },
        {
          name: language === 'en' ? "Hassan Ahmadi" : "حسن احمدی",
          role: language === 'en' ? "Marketing Director" : "مدیر بازاریابی",
          content: language === 'en' ? "The redesign led to a 40% increase in conversions. Jawad truly understands user psychology." : "بازطراحی منجر به افزایش 40 درصدی در تبدیل‌ها شد. جواد واقعاً روانشناسی کاربر را درک می‌کند."
        }
      ]
    },
    'api-integration': {
      title: t.services.apiIntegration,
      subtitle: language === 'en' ? "Seamless connectivity for your applications" : "اتصال بی‌نقص برای برنامه‌های شما",
      description: language === 'en'
        ? "I build robust backend solutions and integrate third-party APIs seamlessly, ensuring your applications communicate efficiently and securely. My focus is on creating reliable data flows and scalable infrastructures."
        : "من راه‌حل‌های بک‌اند قوی ایجاد می‌کنم و API های شخص ثالث را به طور بی‌نقص یکپارچه می‌کنم و اطمینان می‌دهم که برنامه‌های شما به طور کارآمد و ایمن ارتباط برقرار می‌کنند. تمرکز من بر ایجاد جریان‌های داده قابل اعتماد و زیرساخت‌های مقیاس‌پذیر است.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: language === 'en' ? [
        "RESTful API development and consumption",
        "GraphQL API implementation",
        "Third-party service integrations (payment, social, etc.)",
        "Data synchronization and caching strategies",
        "Authentication and authorization mechanisms",
        "Error handling and logging",
        "Security best practices",
        "Scalable microservices architecture"
      ] : [
        "توسعه و مصرف RESTful API",
        "پیاده‌سازی GraphQL API",
        "یکپارچه‌سازی خدمات شخص ثالث (پرداخت، اجتماعی و غیره)",
        "استراتژی‌های همگام‌سازی و کش داده",
        "مکانیسم‌های احراز هویت و مجوز",
        "مدیریت خطا و ثبت وقایع",
        "بهترین شیوه‌های امنیتی",
        "معماری میکروسرویس‌های مقیاس‌پذیر"
      ],
      technologies: ["Node.js", "Express.js", "Python", "Django REST Framework", "PostgreSQL", "MongoDB", "AWS Lambda", "API Gateway"],
      process: [
        {
          step: language === 'en' ? "Strategy & Planning" : "استراتژی و برنامه‌ریزی",
          description: language === 'en' ? "Defining API requirements, data models, and integration points." : "تعریف نیازمندی‌های API، مدل‌های داده و نقاط یکپارچه‌سازی."
        },
        {
          step: language === 'en' ? "Backend & API Development" : "توسعه بک‌اند و API",
          description: language === 'en' ? "Building the core API functionalities and data processing logic." : "ساخت قابلیت‌های اصلی API و منطق پردازش داده."
        },
        {
          step: language === 'en' ? "Integration & Testing" : "یکپارچه‌سازی و تست",
          description: language === 'en' ? "Connecting with third-party services and thorough testing of data flows." : "اتصال با خدمات شخص ثالث و تست کامل جریان‌های داده."
        },
        {
          step: language === 'en' ? "Deployment & Monitoring" : "استقرار و نظارت",
          description: language === 'en' ? "Deploying the integrated system and setting up monitoring for performance and errors." : "استقرار سیستم یکپارچه و راه‌اندازی نظارت بر عملکرد و خطاها."
        },
        {
          step: language === 'en' ? "Maintenance & Updates" : "نگهداری و به‌روزرسانی",
          description: language === 'en' ? "Ongoing support for API changes, security updates, and performance optimizations." : "پشتیبانی مداوم برای تغییرات API، به‌روزرسانی‌های امنیتی و بهینه‌سازی عملکرد."
        }
      ],
      stats: [
        { label: language === 'en' ? "APIs Integrated" : "API های یکپارچه‌شده", value: "30+" },
        { label: language === 'en' ? "Data Throughput (GB/day)" : "توان عملیاتی داده (گیگابایت/روز)", value: "500+" },
        { label: language === 'en' ? "Response Time (ms)" : "زمان پاسخ (میلی‌ثانیه)", value: "<100" },
        { label: language === 'en' ? "Security Incidents" : "حوادث امنیتی", value: "0" }
      ],
      testimonials: [
        {
          name: language === 'en' ? "Ali Reza" : "علی رضا",
          role: language === 'en' ? "CTO, Tech Solutions" : "مدیر ارشد فناوری، راه‌حل‌های تکنولوژی",
          content: language === 'en' ? "Jawad's expertise in API integration was crucial for our project. Everything works flawlessly." : "تخصص جواد در یکپارچه‌سازی API برای پروژه ما حیاتی بود. همه چیز بی‌عیب و نقص کار می‌کند."
        },
        {
          name: language === 'en' ? "Laila Nazari" : "لیلا نظری",
          role: language === 'en' ? "Project Lead" : "مسئول پروژه",
          content: language === 'en' ? "The backend solution provided by Jawad is incredibly stable and scalable. Highly recommend." : "راه حل بک‌اند ارائه شده توسط جواد فوق‌العاده پایدار و مقیاس‌پذیر است. به شدت توصیه می‌شود."
        }
      ]
    },
    'ai-integration': {
      title: language === 'en' ? "AI Integration" : "یکپارچه‌سازی هوش مصنوعی",
      subtitle: language === 'en' ? "Smart solutions for a smarter future" : "راه‌حل‌های هوشمند برای آینده‌ای هوشمندتر",
      description: language === 'en'
        ? "I bring artificial intelligence capabilities to your applications, from machine learning models to natural language processing. My goal is to enhance user experience, automate processes, and derive actionable insights from your data."
        : "من قابلیت‌های هوش مصنوعی را به برنامه‌های شما می‌آورم، از مدل‌های یادگیری ماشین گرفته تا پردازش زبان طبیعی. هدف من افزایش تجربه کاربری، خودکارسازی فرآیندها و استخراج بینش‌های قابل اقدام از داده‌های شماست.",
      image: "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: language === 'en' ? [
        "Machine learning model development",
        "Natural Language Processing (NLP)",
        "Computer Vision implementation",
        "Predictive analytics and forecasting",
        "Recommendation engines",
        "Chatbot and virtual assistant integration",
        "Data labeling and preparation",
        "AI model deployment and monitoring"
      ] : [
        "توسعه مدل یادگیری ماشین",
        "پردازش زبان طبیعی (NLP)",
        "پیاده‌سازی بینایی کامپیوتر",
        "تحلیل پیش‌بینی‌کننده و پیش‌بینی",
        "موتورهای توصیه",
        "یکپارچه‌سازی چت‌بات و دستیار مجازی",
        "برچسب‌گذاری و آماده‌سازی داده",
        "استقرار و نظارت بر مدل AI"
      ],
      technologies: ["Python ML", "TensorFlow", "PyTorch", "Scikit-learn", "NLTK", "OpenCV", "AWS SageMaker", "Google AI Platform"],
      process: [
        {
          step: language === 'en' ? "Problem Definition" : "تعریف مسئله",
          description: language === 'en' ? "Identifying suitable AI applications and defining clear objectives for the solution." : "شناسایی کاربردهای مناسب هوش مصنوعی و تعریف اهداف روشن برای راه‌حل."
        },
        {
          step: language === 'en' ? "Data Collection & Preparation" : "جمع‌آوری و آماده‌سازی داده",
          description: language === 'en' ? "Gathering, cleaning, and transforming data for model training." : "جمع‌آوری، پاکسازی و تبدیل داده‌ها برای آموزش مدل."
        },
        {
          step: language === 'en' ? "Model Development & Training" : "توسعه و آموزش مدل",
          description: language === 'en' ? "Building and training machine learning models tailored to the problem." : "ساخت و آموزش مدل‌های یادگیری ماشین متناسب با مسئله."
        },
        {
          step: language === 'en' ? "Integration & Deployment" : "یکپارچه‌سازی و استقرار",
          description: language === 'en' ? "Integrating the AI model into your existing systems and deploying it for use." : "یکپارچه‌سازی مدل هوش مصنوعی در سیستم‌های موجود شما و استقرار آن برای استفاده."
        },
        {
          step: language === 'en' ? "Monitoring & Improvement" : "نظارت و بهبود",
          description: language === 'en' ? "Continuously monitoring model performance and making iterative improvements." : "نظارت مستمر بر عملکرد مدل و انجام بهبودهای تکراری."
        }
      ],
      stats: [
        { label: language === 'en' ? "AI Models Deployed" : "مدل‌های هوش مصنوعی مستقر شده", value: "10+" },
        { label: language === 'en' ? "Accuracy Achieved" : "دقت به دست آمده", value: "90%+" },
        { label: language === 'en' ? "Process Automation" : "اتوماسیون فرآیند", value: "60%+" },
        { label: language === 'en' ? "Insights Generated" : "بینش‌های تولید شده", value: "High" }
      ],
      testimonials: [
        {
          name: language === 'en' ? "Jamaluddin Khaliqi" : "جمال‌الدین خالقی",
          role: language === 'en' ? "Research Lead" : "مسئول تحقیق",
          content: language === 'en' ? "The AI solution provided by Jawad helped us automate complex data analysis, saving significant time." : "راه‌حل هوش مصنوعی ارائه شده توسط جواد به ما کمک کرد تحلیل داده‌های پیچیده را خودکار کنیم و در زمان قابل توجهی صرفه‌جویی کنیم."
        },
        {
          name: language === 'en' ? "Maryam Jafari" : "مریم جعفری",
          role: language === 'en' ? "Data Scientist" : "دانشمند داده",
          content: language === 'en' ? "Jawad's understanding of machine learning is impressive. He integrated our models seamlessly." : "درک جواد از یادگیری ماشین چشمگیر است. او مدل‌های ما را به طور بی‌نقص یکپارچه کرد."
        }
      ]
    },
    'mentorship': {
      title: language === 'en' ? "Educational Content & Mentorship" : "محتوای آموزشی و مربیگری",
      subtitle: language === 'en' ? "Empowering the next generation of developers" : "توانمندسازی نسل بعدی توسعه‌دهندگان",
      description: language === 'en'
        ? "I am passionate about sharing knowledge and guiding aspiring developers. I provide personalized mentorship, create educational content, and conduct workshops to help individuals grow their skills and navigate their career paths."
        : "من به اشتراک‌گذاری دانش و راهنمایی توسعه‌دهندگان مشتاق علاقه‌مندم. من مربیگری شخصی‌سازی شده ارائه می‌دهم، محتوای آموزشی ایجاد می‌کنم و کارگاه‌هایی برگزار می‌کنم تا به افراد کمک کنم مهارت‌های خود را رشد دهند و مسیر شغلی خود را طی کنند.",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: language === 'en' ? [
        "Personalized one-on-one mentorship sessions",
        "Curated learning paths and resources",
        "Code reviews and project feedback",
        "Career guidance and job search strategies",
        "Technical writing and blog post contributions",
        "Workshop facilitation and public speaking",
        "Community building and support",
        "Open-source contributions and guidance"
      ] : [
        "جلسات مربیگری یک به یک شخصی‌سازی شده",
        "مسیرهای یادگیری و منابع سازمان‌یافته",
        "بازبینی کد و بازخورد پروژه",
        "راهنمایی شغلی و استراتژی‌های جستجوی کار",
        "نوشتن فنی و مشارکت در پست‌های وبلاگ",
        "تسهیل کارگاه‌ها و سخنرانی عمومی",
        "ساخت و پشتیبانی جامعه",
        "مشارکت در اوپن‌سورس و راهنمایی"
      ],
      technologies: ["Teaching", "Mentoring", "Curriculum Design", "Public Speaking", "Technical Writing", "Community Management", "Career Coaching"],
      process: [
        {
          step: language === 'en' ? "Assessment & Goal Setting" : "ارزیابی و تعیین هدف",
          description: language === 'en' ? "Understanding your current skill level and defining clear, achievable learning goals." : "درک سطح مهارت فعلی شما و تعیین اهداف یادگیری روشن و قابل دستیابی."
        },
        {
          step: language === 'en' ? "Customized Learning Path" : "مسیر یادگیری سفارشی",
          description: language === 'en' ? "Developing a personalized curriculum and recommending resources based on your goals." : "توسعه یک برنامه درسی شخصی‌سازی شده و توصیه منابع بر اساس اهداف شما."
        },
        {
          step: language === 'en' ? "Hands-on Projects & Feedback" : "پروژه‌های عملی و بازخورد",
          description: language === 'en' ? "Working on real-world projects with regular feedback and code reviews." : "کار بر روی پروژه‌های دنیای واقعی با بازخورد منظم و بازبینی کد."
        },
        {
          step: language === 'en' ? "Career Guidance & Networking" : "راهنمایی شغلی و شبکه‌سازی",
          description: language === 'en' ? "Providing insights into industry trends, interview preparation, and networking opportunities." : "ارائه بینش‌هایی در مورد روندهای صنعت، آماده‌سازی مصاحبه و فرصت‌های شبکه‌سازی."
        },
        {
          step: language === 'en' ? "Continuous Support" : "پشتیبانی مداوم",
          description: language === 'en' ? "Ongoing support for challenges, new learning, and career progression." : "پشتیبانی مداوم برای چالش‌ها، یادگیری‌های جدید و پیشرفت شغلی."
        }
      ],
      stats: [
        { label: language === 'en' ? "Mentees Guided" : "کارآموزان راهنمایی شده", value: "20+" },
        { label: language === 'en' ? "Workshops Conducted" : "کارگاه‌های برگزار شده", value: "5+" },
        { label: language === 'en' ? "Articles Published" : "مقالات منتشر شده", value: "10+" },
        { label: language === 'en' ? "Community Impact" : "تاثیر جامعه", value: "High" }
      ],
      testimonials: [
        {
          name: language === 'en' ? "Mustafa Amiri" : "مصطفی امیری",
          role: language === 'en' ? "Junior Developer" : "توسعه‌دهنده جونیور",
          content: language === 'en' ? "Jawad's mentorship was instrumental in my journey. He helped me land my first developer job." : "مربیگری جواد در مسیر من بسیار موثر بود. او به من کمک کرد اولین شغل توسعه‌دهندگی خود را پیدا کنم."
        },
        {
          name: language === 'en' ? "Aisha Noor" : "عایشه نور",
          role: language === 'en' ? "Student" : "دانشجو",
          content: language === 'en' ? "The workshops Jawad conducts are incredibly insightful and practical. I learned so much!" : "کارگاه‌های آموزشی جواد فوق‌العاده آموزنده و کاربردی هستند. من خیلی چیزها یاد گرفتم!"
        }
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <button onClick={onBack} className="text-blue-600 hover:text-blue-800">
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''} ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            } transition-colors duration-200`}
          >
            <ArrowLeft size={20} className={`${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
            {t.services.backToServices}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {service.title}
            </h1>
            <p className={`text-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 overflow-hidden"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'en' ? 'Service Overview' : 'مرور کلی خدمات'}
          </h2>
          <p className={`text-lg leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {service.description}
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t.services.features}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-start p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
              >
                <Check size={20} className={`mt-1 ${
                  isRTL ? 'ml-3 rotate-180' : 'mr-3'
                } text-blue-600`} />
                <p className={`text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t.services.technologies}
          </h3>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`px-4 py-2 rounded-full font-medium text-sm ${
                  darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t.services.process}
          </h3>
          <div className="relative">
            <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 ${
              isRTL ? 'right-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'
            } md:left-1/2 md:-translate-x-1/2`}></div>
            <div className="space-y-12">
              {service.process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 
                      ? (isRTL ? 'justify-start flex-row-reverse' : 'justify-end flex-row') 
                      : (isRTL ? 'justify-end flex-row-reverse' : 'justify-start flex-row')
                  } md:justify-center md:flex-row md:even:flex-row-reverse`}
                >
                  <div className={`w-full md:w-1/2 p-4 ${
                    index % 2 === 0 ? (isRTL ? 'text-right pr-12 md:pr-0 md:pl-12' : 'text-left pl-12 md:pl-0 md:pr-12') : (isRTL ? 'text-left pl-12 md:pl-0 md:pr-12' : 'text-right pr-12 md:pr-0 md:pl-12')
                  }`}>
                    <div className={`p-6 rounded-lg shadow-lg ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    }`}>
                      <h4 className={`text-lg font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.step}
                      </h4>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute w-6 h-6 rounded-full bg-blue-600 left-1/2 -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'en' ? 'Key Statistics' : 'آمار کلیدی'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg text-center shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <p className={`text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </p>
                <p className={`text-sm font-medium ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'en' ? 'Client Testimonials' : 'نظرات مشتریان'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-lg shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <Star size={24} className="text-yellow-500 mb-4" />
                <p className={`text-lg italic mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.content}"
                </p>
                <p className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {testimonial.name}
                </p>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {testimonial.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;