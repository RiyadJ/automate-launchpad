import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Search, Lightbulb, Cog, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const detectedLanguage = document.documentElement.lang === 'ar' ? 'AR' : 'EN';
    setLanguage(detectedLanguage);
  }, []);

  const steps = [
    {
      number: '01',
      title: language === 'EN' ? 'Identification' : 'التحديد',
      subtitle: language === 'EN' ? 'Discovery & Analysis' : 'الاستكشاف والتحليل',
      description: language === 'EN' 
        ? 'We conduct a comprehensive audit of your current processes, identifying inefficiencies and automation opportunities that will deliver the highest ROI.'
        : 'نقوم بإجراء تدقيق شامل لعملياتك الحالية، وتحديد أوجه عدم الكفاءة وفرص الأتمتة التي ستحقق أعلى عائد على الاستثمار.',
      icon: Search,
      image: '/placeholder.svg?height=300&width=400&text=Process+Analysis'
    },
    {
      number: '02',
      title: language === 'EN' ? 'Concept Development' : 'تطوير المفهوم',
      subtitle: language === 'EN' ? 'Strategic Planning' : 'التخطيط الاستراتيجي',
      description: language === 'EN'
        ? 'We design custom automation solutions tailored to your specific needs, creating detailed blueprints and proof-of-concept prototypes.'
        : 'نصمم حلول أتمتة مخصصة تناسب احتياجاتك المحددة، وننشئ مخططات مفصلة ونماذج أولية للمفهوم.',
      icon: Lightbulb,
      image: '/placeholder.svg?height=300&width=400&text=Solution+Design'
    },
    {
      number: '03',
      title: language === 'EN' ? 'Implementation' : 'التنفيذ',
      subtitle: language === 'EN' ? 'Build & Integration' : 'البناء والتكامل',
      description: language === 'EN'
        ? 'Our team builds and deploys production-ready systems with seamless integration into your existing infrastructure and comprehensive testing.'
        : 'يقوم فريقنا ببناء ونشر أنظمة جاهزة للإنتاج مع التكامل السلس في البنية التحتية الحالية والاختبار الشامل.',
      icon: Cog,
      image: '/placeholder.svg?height=300&width=400&text=System+Integration'
    },
    {
      number: '04',
      title: language === 'EN' ? 'Optimization' : 'التحسين',
      subtitle: language === 'EN' ? 'Monitor & Scale' : 'المراقبة والتوسع',
      description: language === 'EN'
        ? 'We continuously monitor performance, provide ongoing support, and identify new opportunities for further automation and optimization.'
        : 'نراقب الأداء بشكل مستمر، ونقدم الدعم المستمر، ونحدد فرص جديدة للمزيد من الأتمتة والتحسين.',
      icon: BarChart3,
      image: '/placeholder.svg?height=300&width=400&text=Performance+Monitoring'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <BarChart3 className="w-4 h-4 mr-2" />
            {language === 'EN' ? 'Our Process' : 'عمليتنا'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {language === 'EN' ? 'How We\'ll Collaborate,' : 'كيف سنتعاون،'}
            <br />
            <span className="text-primary">
              {language === 'EN' ? 'In 4 Simple Steps' : 'في 4 خطوات بسيطة'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'EN' 
              ? 'We identify your biggest opportunities, rapidly validate concepts, and seamlessly integrate scalable AI agents to deliver efficiency and measurable growth for your company.'
              : 'نحدد أكبر الفرص المتاحة لك، ونتحقق بسرعة من المفاهيم، وندمج بسلاسة وكلاء الذكاء الاصطناعي القابلين للتوسع لتحقيق الكفاءة والنمو القابل للقياس لشركتك.'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                          <p className="text-sm text-primary font-medium">{step.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Placeholder Image */}
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-muted/50 to-muted border border-border/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover rounded-xl opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-sm font-medium text-foreground/80">
                            {step.title} Phase
                          </div>
                        </div>
                      </div>
                      
                      {/* Connection line to next step */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'EN' ? 'Ready to Transform Your Business?' : 'هل أنت مستعد لتحويل عملك؟'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'EN' 
                ? 'Let\'s discuss how we can automate your processes and accelerate your growth.'
                : 'دعنا نناقش كيف يمكننا أتمتة عملياتك وتسريع نموك.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;