import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Comparison = () => {
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

  const comparisons = [
    {
      manual: language === 'AR' ? "40+ ساعة مهدورة" : "40+ hours wasted",
      automated: language === 'AR' ? "95% توفير" : "95% time saved"
    },
    {
      manual: language === 'AR' ? "أخطاء مكلفة" : "Costly errors",
      automated: language === 'AR' ? "99.9% دقة" : "99.9% accuracy"
    },
    {
      manual: language === 'AR' ? "نمو بطيء" : "Slow growth",
      automated: language === 'AR' ? "5x أسرع" : "5x faster"
    }
  ];

  return (
    <section id="comparison" className="snap-section min-h-[100dvh] flex items-center py-20 md:py-0 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {language === 'AR' ? 'يدوي مقابل آلي' : 'Manual vs Automated'}
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
                {language === 'AR' ? 'يدوي' : 'Manual'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-primary text-sm uppercase tracking-wider mb-4">
                {language === 'AR' ? 'آلي' : 'Automated'}
              </p>
            </div>
          </div>

          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-2 gap-8 py-6 border-t border-border"
            >
              <div className="text-center">
                <p className="text-muted-foreground">{item.manual}</p>
              </div>
              <div className="text-center">
                <p className="text-primary font-medium">{item.automated}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;