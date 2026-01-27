import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PainPoints = () => {
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

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {language === 'AR'
              ? 'هل تعمل يدوياً؟'
              : 'Still Working Manually?'
            }
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {language === 'AR'
              ? 'كل ساعة تقضيها في المهام المتكررة هي ساعة لا تقضيها في النمو.'
              : 'Every hour spent on repetitive tasks is an hour not spent growing.'
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;