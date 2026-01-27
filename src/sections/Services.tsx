import { motion } from 'framer-motion';
import { Bot, Workflow, Database } from 'lucide-react';
import { useState, useEffect } from 'react';

const Services = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'EN';
    setLanguage(savedLanguage);

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, []);

  const services = [
    {
      icon: Workflow,
      title: language === 'AR' ? "أتمتة العمليات" : "Process Automation",
      description: language === 'AR'
        ? "سير العمل، التقارير، البريد الإلكتروني"
        : "Workflows, reports, emails"
    },
    {
      icon: Bot,
      title: language === 'AR' ? "دعم العملاء بالذكاء الاصطناعي" : "AI Customer Support",
      description: language === 'AR'
        ? "روبوتات محادثة ومساعدين 24/7"
        : "Chatbots and assistants 24/7"
    },
    {
      icon: Database,
      title: language === 'AR' ? "تكامل البيانات" : "Data Integration",
      description: language === 'AR'
        ? "ربط جميع أدواتك"
        : "Connect all your tools"
    }
  ];

  return (
    <section id="services" className="snap-section h-screen flex items-center bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'AR'
              ? 'ما نقوم بأتمته'
              : 'What We Automate'
            }
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {language === 'AR'
              ? 'إذا كان متكرراً، يمكننا أتمته.'
              : 'If it\'s repetitive, we can automate it.'
            }
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;