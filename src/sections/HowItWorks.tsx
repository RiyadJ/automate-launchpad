import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HowItWorks = () => {
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

  const steps = [
    {
      number: '01',
      title: language === 'EN' ? 'Audit' : 'تدقيق',
      description: language === 'EN'
        ? 'We identify automation opportunities.'
        : 'نحدد فرص الأتمتة.'
    },
    {
      number: '02',
      title: language === 'EN' ? 'Build' : 'بناء',
      description: language === 'EN'
        ? 'We design and implement solutions.'
        : 'نصمم وننفذ الحلول.'
    },
    {
      number: '03',
      title: language === 'EN' ? 'Scale' : 'توسع',
      description: language === 'EN'
        ? 'We optimize and grow with you.'
        : 'نحسن وننمو معك.'
    }
  ];

  return (
    <section id="how-it-works" className="snap-section min-h-0 md:min-h-[100dvh] flex items-center py-20 md:py-0 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {language === 'EN' ? 'How It Works' : 'كيف نعمل'}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;