import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Workflow, BarChart3, MessageSquare, Database, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import React from 'react';

const Services = () => {
  const [currentService, setCurrentService] = useState(0);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    setLanguage(document.documentElement.lang === 'ar' ? 'AR' : 'EN');
  }, []);

  const services = [
    {
      icon: Workflow,
      title: language === 'AR' ? "أتمتة العمليات التجارية" : "Business Process Automation",
      description: language === 'AR' 
        ? "نحن نقضي على المهام المتكررة التي تستنزف وقت فريقك. إدخال البيانات، إنتاج التقارير، تسلسل البريد الإلكتروني، معالجة الطلبات - كلها تتم تلقائياً."
        : "We eliminate the repetitive tasks that eat your team's time. Data entry, report generation, email sequences, order processing - all handled automatically.",
      features: language === 'AR' 
        ? ["أتمتة سير العمل", "معالجة البيانات", "أتمتة البريد الإلكتروني", "إنتاج الوثائق"]
        : ["Workflow automation", "Data processing", "Email automation", "Document generation"],
    },
    {
      icon: Bot,
      title: language === 'AR' ? "خدمة العملاء المدعومة بالذكاء الاصطناعي" : "AI-Powered Customer Service",
      description: language === 'AR'
        ? "روبوتات محادثة ذكية ومساعدين AI يتعاملون مع استفسارات العملاء على مدار الساعة، ويؤهلون العملاء المحتملين، ويحولون القضايا المعقدة إلى فريقك."
        : "Smart chatbots and AI assistants that handle customer inquiries 24/7, qualify leads, and escalate complex issues to your team.",
      features: language === 'AR'
        ? ["دعم العملاء 24/7", "تأهيل العملاء المحتملين", "حجز المواعيد", "أتمتة الأسئلة الشائعة"]
        : ["24/7 customer support", "Lead qualification", "Appointment booking", "FAQ automation"],
    },
    {
      icon: Database,
      title: language === 'AR' ? "تكامل ومزامنة البيانات" : "Data Integration & Sync",
      description: language === 'AR'
        ? "اربط جميع أدواتك ومنصاتك. لا مزيد من إدخال البيانات اليدوي بين الأنظمة. كل شيء يبقى متزامناً تلقائياً."
        : "Connect all your tools and platforms. No more manual data entry between systems. Everything stays synchronized automatically.",
      features: language === 'AR'
        ? ["تكامل CRM", "مزامنة متعددة المنصات", "تحديثات فورية", "التحقق من صحة البيانات"]
        : ["CRM integration", "Multi-platform sync", "Real-time updates", "Data validation"],
    },
    {
      icon: BarChart3,
      title: language === 'AR' ? "أتمتة التحليلات والتقارير" : "Analytics & Reporting Automation",
      description: language === 'AR'
        ? "احصل على لوحات معلومات فورية وتقارير آلية. اتخذ قرارات مبنية على البيانات دون قضاء ساعات في إنشاء جداول البيانات."
        : "Get real-time dashboards and automated reports. Make data-driven decisions without spending hours creating spreadsheets.",
      features: language === 'AR'
        ? ["لوحات معلومات آلية", "تقارير مخصصة", "تتبع KPI", "تنبيهات الأداء"]
        : ["Automated dashboards", "Custom reports", "KPI tracking", "Performance alerts"],
    },
    {
      icon: MessageSquare,
      title: language === 'AR' ? "توليد ورعاية العملاء المحتملين" : "Lead Generation & Nurturing",
      description: language === 'AR'
        ? "التقاط آلي للعملاء المحتملين، والتأهيل، وتسلسل الرعاية الذي يحول المحتملين إلى عملاء أثناء نومك."
        : "Automated lead capture, qualification, and nurturing sequences that turn prospects into customers while you sleep.",
      features: language === 'AR'
        ? ["نماذج التقاط العملاء المحتملين", "تسلسل البريد الإلكتروني", "تسجيل نقاط العملاء المحتملين", "أتمتة CRM"]
        : ["Lead capture forms", "Email sequences", "Lead scoring", "CRM automation"],
    },
    {
      icon: Zap,
      title: language === 'AR' ? "حلول الأتمتة المخصصة" : "Custom Automation Solutions",
      description: language === 'AR'
        ? "التحديات التجارية الفريدة تتطلب حلولاً فريدة. نحن نبني أتمتة مخصصة مصممة خصيصاً لاحتياجاتك المحددة."
        : "Unique business challenges require unique solutions. We build custom automations tailored to your specific needs.",
      features: language === 'AR'
        ? ["سير عمل مخصص", "تكامل API", "لوحات معلومات مخصصة", "حلول قابلة للتوسع"]
        : ["Bespoke workflows", "API integrations", "Custom dashboards", "Scalable solutions"],
    }
  ];

  // Auto-loop through services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              {language === 'AR' ? 'ما نقوم بأتمته' : 'What We Automate'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'AR' 
              ? 'نحن نؤتمت كل ما يضيع وقتك'
              : 'We Automate Everything That Wastes Your Time'
            }
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'AR'
              ? 'من إدخال البيانات البسيط إلى سير العمل المعقد متعدد الخطوات - إذا كان متكرراً، يمكننا أتمته.'
              : 'From simple data entry to complex multi-step workflows - if it\'s repetitive, we can automate it.'
            }
          </p>
        </motion.div>

        {/* Service Display Area */}
        <div className="max-w-4xl mx-auto">
          {/* Service Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentService(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentService 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Current Service Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative p-8 rounded-xl bg-card border border-border shadow-lg"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/20 mx-auto mb-6">
                {React.createElement(services[currentService].icon, { className: "w-8 h-8 text-primary" })}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {services[currentService].title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {services[currentService].description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                  {services[currentService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Services;