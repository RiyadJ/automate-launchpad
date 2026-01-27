import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {language === 'AR' ? 'جاهز لأتمتة عملك؟' : 'Ready to Automate?'}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            {language === 'AR'
              ? 'احجز مكالمة استشارة مجانية وابدأ رحلتك.'
              : 'Book a free consultation call and start your journey.'
            }
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open(
                "https://cal.com/riyad-jaamour/30-mins-discovery-call",
                "_blank"
              )
            }
            className="border-primary text-primary hover:bg-primary/10 hover:text-primary px-8 py-6 text-lg font-medium group"
          >
            {language === 'AR' ? 'تواصل معنا' : 'Get In Touch'}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
