import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Clock, TrendingUp, Bot, GitBranch, Workflow, Play, Webhook, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentLetter, setCurrentLetter] = useState('o');
  const [language, setLanguage] = useState('EN');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetter(prev => prev === 'o' ? 'u' : 'o');
    }, 4000); // Increased from 2000ms to 4000ms for longer interval
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLanguage(document.documentElement.lang === 'ar' ? 'AR' : 'EN');
  }, []);

  const scrollToCaseStudies = () => {
    const element = document.getElementById('case-studies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="automation-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="hsl(var(--primary))" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#automation-grid)" />
          
          {/* Automation icons */}
          <foreignObject x="185" y="135" width="30" height="30">
            <Bot className="w-6 h-6 text-primary opacity-70" />
          </foreignObject>
          <foreignObject x="585" y="285" width="30" height="30">
            <GitBranch className="w-6 h-6 text-secondary opacity-70" />
          </foreignObject>
          <foreignObject x="985" y="185" width="30" height="30">
            <Workflow className="w-6 h-6 text-primary opacity-70" />
          </foreignObject>
          <foreignObject x="385" y="585" width="30" height="30">
            <Webhook className="w-6 h-6 text-secondary opacity-70" />
          </foreignObject>
          <foreignObject x="785" y="485" width="30" height="30">
            <Activity className="w-6 h-6 text-primary opacity-70" />
          </foreignObject>
          <foreignObject x="300" y="400" width="30" height="30">
            <Play className="w-6 h-6 text-secondary opacity-70" />
          </foreignObject>
          <foreignObject x="1100" y="350" width="30" height="30">
            <Zap className="w-6 h-6 text-primary opacity-70" />
          </foreignObject>
          
          {/* Animated connection lines with more turns and fade-out effect */}
          <motion.path
            d="M-100,150 L200,150 L300,400 L600,300 L1000,200 L1100,350 L1540,250"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ 
              pathLength: [0, 1, 1, 1],
              opacity: [0, 0.5, 0.5, 0]
            }}
            transition={{ 
              duration: 16, 
              repeat: Infinity, 
              ease: "linear",
              times: [0, 0.7, 0.9, 1]
            }}
          />
          <motion.path
            d="M-100,600 L400,600 L500,450 L800,500 L950,300 L1200,400 L1540,350"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.4 }}
            animate={{ 
              pathLength: [0, 1, 1, 1],
              opacity: [0, 0.4, 0.4, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear", 
              delay: 4,
              times: [0, 0.7, 0.9, 1]
            }}
          />
          <motion.path
            d="M-100,400 L250,400 L350,250 L650,350 L750,600 L1150,500 L1540,450"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ 
              pathLength: [0, 1, 1, 1],
              opacity: [0, 0.3, 0.3, 0]
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity, 
              ease: "linear", 
              delay: 8,
              times: [0, 0.7, 0.9, 1]
            }}
          />
        </svg>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-success/20 text-success border border-success/30 mb-8"
          >
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              {language === 'AR' ? 'موثوق به من أكثر من 100 شركة نامية' : 'Trusted by 100+ Growing Businesses'}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            {language === 'AR' ? (
              <>
                لا عمل يدوي.<br />
                استرد وقتك.<br />
                أتمت عملك.
              </>
            ) : (
              <>
                No Manual Work.<br />
                Reclaim Your Time.<br />
                A
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentLetter}
                    initial={{ y: 20, opacity: 0, rotateX: 90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -20, opacity: 0, rotateX: -90 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    {currentLetter}
                  </motion.span>
                </AnimatePresence>
                t
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`second-${currentLetter === 'o' ? 'u' : 'o'}`}
                    initial={{ y: -20, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: 20, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    {currentLetter === 'o' ? 'u' : 'o'}
                  </motion.span>
                </AnimatePresence>
                mate Your Business.
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {language === 'AR' 
              ? 'نحن نصمم أنظمة الأتمتة المخصصة التي تقطع المهام المتكررة، وتقلل الأخطاء، وتحرر فريقك للتركيز على ما ينمي عملك فعلاً.'
              : 'We design custom automation systems that cut repetitive tasks, reduce errors, and free your team to focus on what actually grows your business.'
            }
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">
                {language === 'AR' ? '40-200 ساعة توفر شهرياً' : '40-200 hours saved monthly'}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <TrendingUp className="w-5 h-5 text-secondary" />
              <span className="text-sm">
                {language === 'AR' ? '95% تحسن في الكفاءة' : '95% efficiency boost'}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-success" />
              <span className="text-sm">
                {language === 'AR' ? 'عائد استثمار خلال 30 يوم' : 'ROI visible in 30 days'}
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            id="hero-cta"
          >
            <Button 
              size="lg" 
              onClick={() => window.open('https://cal.com/riyad-jaamour/30-mins-discovery-call', '_blank')}
              className="bg-warning text-warning-foreground hover:bg-warning/90 px-8 py-4 text-lg font-semibold animate-pulse-glow group"
            >
              {language === 'AR' ? 'احصل على تدقيق مجاني للأتمتة' : 'Get Your Free Automation Audit'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToCaseStudies}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            >
              {language === 'AR' ? 'شاهد دراسات الحالة' : 'See Case Studies'}
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-muted-foreground mt-8"
          >
            {language === 'AR' 
              ? '✓ لا عقود طويلة الأمد • ✓ ضمان استرداد 30 يوم • ✓ إعداد خلال أسبوعين'
              : '✓ No long-term contracts • ✓ 30-day money-back guarantee • ✓ Setup in 2 weeks'
            }
          </motion.p>

          {/* Trusted By Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <p className="text-sm text-muted-foreground mb-6">
              {language === 'AR' ? 'موثوق من قبل' : 'Trusted by'}
            </p>
            <div className="overflow-hidden relative max-w-4xl mx-auto">
              <motion.div
                animate={{ x: [0, -1848] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex space-x-12 whitespace-nowrap"
              >
                {[...Array(4)].map((_, setIndex) => 
                  ['TechFlow Inc', 'DataSync Corp', 'AutoFlow Solutions', 'GrowthLab', 'StreamlineHQ', 'InnovateCorp'].map((company, index) => (
                    <span
                      key={`${company}-${setIndex}-${index}`}
                      className="text-muted-foreground font-medium text-lg px-6 animate-[text-shine_4s_ease-in-out_infinite]"
                    >
                      {company}
                    </span>
                  ))
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-20 w-20 h-20 bg-secondary/20 rounded-full blur-xl"
      />
      
    </section>
  );
};

export default Hero;