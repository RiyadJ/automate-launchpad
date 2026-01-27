import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqsEN = [
    {
      question: "How fast can we see results?",
      answer: "Most clients see results within 30 days."
    },
    {
      question: "What does it cost?",
      answer: "70-90% less than hiring equivalent staff."
    },
    {
      question: "Can you integrate with our tools?",
      answer: "Yes. We connect with 2,000+ business tools."
    },
    {
      question: "How long does implementation take?",
      answer: "Simple automations: 48 hours. Complex workflows: 1-2 weeks."
    }
  ];

  const faqsAR = [
    {
      question: "ما مدى سرعة رؤية النتائج؟",
      answer: "معظم العملاء يرون النتائج خلال 30 يوماً."
    },
    {
      question: "ما هي التكلفة؟",
      answer: "70-90% أقل من توظيف موظفين مكافئين."
    },
    {
      question: "هل يمكنكم التكامل مع أدواتنا؟",
      answer: "نعم. نتصل مع أكثر من 2,000 أداة عمل."
    },
    {
      question: "كم يستغرق التنفيذ؟",
      answer: "أتمتة بسيطة: 48 ساعة. سير عمل معقد: 1-2 أسبوع."
    }
  ];

  const faqs = language === 'AR' ? faqsAR : faqsEN;

  return (
    <section key="faq-section" id="faq" className="snap-section h-screen flex items-center bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {language === 'AR' ? 'أسئلة شائعة' : 'FAQ'}
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;