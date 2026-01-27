import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'EN';
    setLanguage(savedLanguage);

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChange', handleLanguageChange as EventListener);
  }, []);

  const testimonials = [
    {
      name: language === "AR" ? "سارة أحمد" : "Sarah A.",
      company: "TechFlow",
      quote: language === "AR"
        ? "180 ساعة توفر شهرياً."
        : "180 hours saved monthly."
    },
    {
      name: language === "AR" ? "مايكل تشين" : "Michael C.",
      company: "DataSync",
      quote: language === "AR"
        ? "عائد الاستثمار في الشهر الأول."
        : "ROI in the first month."
    },
    {
      name: language === "AR" ? "ديفيد روبرتس" : "David R.",
      company: "AutoFlow",
      quote: language === "AR"
        ? "10x الطلبات، نفس الفريق."
        : "10x orders, same team."
    }
  ];

  return (
    <section id="testimonials" className="snap-section min-h-0 md:min-h-[100dvh] flex items-center py-20 md:py-0 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {language === "AR" ? "ما يقوله العملاء" : "What Clients Say"}
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-xl text-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-primary font-medium">{testimonial.name}</p>
              <p className="text-muted-foreground text-sm">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
