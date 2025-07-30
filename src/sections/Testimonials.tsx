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
              x: isPaused ? undefined : ['0%', '-100%']
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-80 bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-colors cursor-pointer"
                whileHover={{ y: -5 }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pause Indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            {language === 'AR' 
              ? 'مرر فوق أي بطاقة لإيقاف التمرير'
              : 'Hover over any card to pause scrolling'
            }
          </p>
        </div>
      </div>
    </section>
  );
      name: "Lisa Thompson",
      title: "VP of Operations, AutoFlow Systems",
      company: "Manufacturing Solutions",
      avatar: "👩‍💼",
      rating: 5,
      testimonial: "I thought our manufacturing processes were too complex to automate. I was wrong. aotumate streamlined our entire order-to-delivery pipeline. We handle twice the volume with half the errors. Absolutely transformational.",
      results: {
        timeSaved: "80 hours per week",
        errorReduction: "94%",
        revenue: "+$150,000 annually"
      }
    },
    {
      name: "Alex Morgan",
      title: "Founder, InnovateLab",
      company: "Product Development Studio",
      avatar: "👨‍💻",
      rating: 5,
      testimonial: "Project management was chaos before automation. Now timelines update automatically, clients get real-time progress reports, and our team focuses on innovation instead of admin work. We're shipping products 40% faster.",
      results: {
        timeSaved: "30 hours per week",
        errorReduction: "88%",
        revenue: "+$65,000 annually"
      }
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/20 text-success border border-success/30 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Their Results
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say about their automation transformation:
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/30 group-hover:text-primary/50 transition-colors" />
              
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-muted-foreground opacity-70">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warning fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.testimonial}"
              </p>

              {/* Results */}
              <div className="space-y-2 pt-4 border-t border-border/50">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Time Saved:</span>
                  <span className="font-semibold text-success">{testimonial.results.timeSaved}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Error Reduction:</span>
                  <span className="font-semibold text-primary">{testimonial.results.errorReduction}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Revenue Impact:</span>
                  <span className="font-semibold text-secondary">{testimonial.results.revenue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;