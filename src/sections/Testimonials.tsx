import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [language, setLanguage] = useState('EN');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setLanguage(document.documentElement.lang === 'ar' ? 'AR' : 'EN');
  }, []);

  const testimonials = [
    {
      name: language === 'AR' ? "سارة أحمد" : "Sarah Ahmed",
      title: language === 'AR' ? "مديرة العمليات" : "Operations Manager",
      company: "TechFlow Inc",
      avatar: "/lovable-uploads/948527d9-7f86-4dab-bef7-0d1a84c7ef82.png",
      rating: 5,
      testimonial: language === 'AR'
        ? "لقد وفرت أتمتة أوتوميت لنا 180 ساعة شهرياً. فريقنا الآن يركز على النمو الاستراتيجي بدلاً من الأعمال الإدارية."
        : "Aotumate's automation saved us 180 hours monthly. Our team now focuses on strategic growth instead of admin work."
    },
    {
      name: language === 'AR' ? "مايكل تشين" : "Michael Chen", 
      title: language === 'AR' ? "الرئيس التنفيذي" : "CEO",
      company: "DataSync Corp",
      avatar: "/lovable-uploads/948527d9-7f86-4dab-bef7-0d1a84c7ef82.png",
      rating: 5,
      testimonial: language === 'AR'
        ? "عائد الاستثمار كان فورياً. استرددنا تكلفة الأتمتة خلال الشهر الأول من خلال الوقت المُوفر والكفاءة المُحسنة."
        : "ROI was immediate. We recovered the automation cost in the first month through saved time and improved efficiency."
    },
    {
      name: language === 'AR' ? "إميلي جونسون" : "Emily Johnson",
      title: language === 'AR' ? "مديرة التسويق" : "Marketing Director", 
      company: "GrowthLab",
      avatar: "/lovable-uploads/948527d9-7f86-4dab-bef7-0d1a84c7ef82.png",
      rating: 5,
      testimonial: language === 'AR'
        ? "أنظمة رعاية العملاء المحتملين الآلية تولد لنا عملاء محتملين مؤهلين بجودة عالية 24/7. لقد تحولت مبيعاتنا."
        : "The automated lead nurturing system generates high-quality qualified leads for us 24/7. Our sales have transformed."
    },
    {
      name: language === 'AR' ? "ديفيد روبرتس" : "David Roberts",
      title: language === 'AR' ? "مؤسس مشارك" : "Co-Founder",
      company: "AutoFlow Solutions", 
      avatar: "/lovable-uploads/948527d9-7f86-4dab-bef7-0d1a84c7ef82.png",
      rating: 5,
      testimonial: language === 'AR'
        ? "تعالج أنظمتنا الآن 10 أضعاف الطلبات بنفس حجم الفريق. الأتمتة جعلت النمو السريع ممكناً."
        : "Our systems now process 10x more orders with the same team size. Automation made rapid scaling possible."
    },
    {
      name: language === 'AR' ? "ليزا مارتينيز" : "Lisa Martinez",
      title: language === 'AR' ? "نائبة الرئيس للعمليات" : "VP of Operations",
      company: "StreamlineHQ",
      avatar: "/lovable-uploads/948527d9-7f86-4dab-bef7-0d1a84c7ef82.png", 
      rating: 5,
      testimonial: language === 'AR'
        ? "ما أُعجبني حقاً هو كيف فهم فريق أوتوميت احتياجاتنا المحددة وقدم حلولاً مخصصة تماماً."
        : "What impressed me most was how Aotumate's team understood our specific needs and delivered perfectly tailored solutions."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-warning/20 text-warning border border-warning/30 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              {language === 'AR' ? 'قصص نجاح العملاء' : 'Client Success Stories'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'AR' 
              ? 'ما يقوله عملاؤنا'
              : 'What Our Clients Say'
            }
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'AR'
              ? 'اكتشف كيف حولت الشركات عملياتها وحققت نتائج استثنائية'
              : 'Discover how companies transformed their operations and achieved extraordinary results'
            }
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ 
              x: isPaused ? 0 : ['0%', '-100%']
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            className="flex space-x-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-80 bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-colors cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;