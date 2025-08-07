import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Search, Lightbulb, Cog, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
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
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              {language === 'EN' ? 'Our Process' : 'عمليتنا'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'EN' 
              ? 'Drive Real ROI With Production-Ready Systems'
              : 'حقق عائد استثمار حقيقي مع أنظمة جاهزة للإنتاج'
            }
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'EN' 
              ? 'We identify your biggest opportunities, rapidly validate concepts, and seamlessly integrate scalable AI agents to deliver efficiency and measurable growth for your company.'
              : 'نحدد أكبر الفرص المتاحة لك، ونتحقق بسرعة من المفاهيم، وندمج بسلاسة وكلاء الذكاء الاصطناعي القابلين للتوسع لتحقيق الكفاءة والنمو القابل للقياس لشركتك.'
            }
          </p>
        </motion.div>

        {/* Main Process Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Stage Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-card border-primary shadow-lg'
                    : 'bg-card/50 border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${
                      activeStep === index ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${
                      activeStep === index ? 'text-primary' : 'text-muted-foreground/70'
                    }`}>
                      {step.subtitle}
                    </p>
                  </div>
                </div>
                
                {activeStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="mt-4 pl-12 overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Side - Visual Display */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative h-full"
          >
            {/* Main Visual Area - matches height of step buttons */}
            <div className="h-full bg-gradient-to-br from-muted/30 to-muted/60 rounded-2xl border border-border/50 flex items-center justify-center relative overflow-hidden">
              <img 
                src={steps[activeStep].image} 
                alt={steps[activeStep].title}
                className="w-full h-full object-cover opacity-70"
              />
              
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeStep ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;