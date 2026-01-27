import { motion } from 'framer-motion';
import { Clock, TrendingUp, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Benefits = () => {
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

  const benefits = [
    {
      icon: Clock,
      title: language === 'AR' ? "وفر الوقت" : "Save Time",
      description: language === 'AR'
        ? "40-200 ساعة شهرياً"
        : "40-200 hours monthly"
    },
    {
      icon: TrendingUp,
      title: language === 'AR' ? "توسع بسهولة" : "Scale Easily",
      description: language === 'AR'
        ? "10x الحجم، نفس الفريق"
        : "10x volume, same team"
    },
    {
      icon: Zap,
      title: language === 'AR' ? "عائد سريع" : "Fast ROI",
      description: language === 'AR'
        ? "نتائج خلال 30 يوم"
        : "Results in 30 days"
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {language === 'AR' ? 'ما تحصل عليه' : 'What You Get'}
          </h2>
        </motion.div>

        {/* Benefits Grid - Simple */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;