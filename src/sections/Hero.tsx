import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Clock, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/aotumate-hero-bg.jpg';

const Hero = () => {
  const [currentLetter, setCurrentLetter] = useState('o');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetter(prev => prev === 'o' ? 'u' : 'o');
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="automation-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="hsl(var(--primary))" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#automation-grid)" />
          
          {/* Animated connection lines */}
          <motion.path
            d="M100,200 Q300,100 500,300 T900,400"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M200,600 Q400,400 600,700 T900,500"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
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
            <span className="text-sm font-medium">Trusted by 100+ Growing Businesses</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Stop Losing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              40+ Hours
            </span>{' '}
            Per Month to Man
            <AnimatePresence mode="wait">
              <motion.span
                key={currentLetter}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {currentLetter}
              </motion.span>
            </AnimatePresence>
            al W
            <AnimatePresence mode="wait">
              <motion.span
                key={currentLetter === 'o' ? 'o' : 'u'}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block"
              >
                {currentLetter === 'o' ? 'o' : 'u'}
              </motion.span>
            </AnimatePresence>
            rk
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We build intelligent automation systems that eliminate repetitive tasks, reduce human errors by 95%, and let your team focus on what actually grows your business.
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
              <span className="text-sm">40-200 hours saved monthly</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <TrendingUp className="w-5 h-5 text-secondary" />
              <span className="text-sm">95% error reduction</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-success" />
              <span className="text-sm">ROI visible in 30 days</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="bg-warning text-warning-foreground hover:bg-warning/90 px-8 py-4 text-lg font-semibold animate-pulse-glow group"
            >
              Get Your Free Automation Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToCaseStudies}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            >
              See Case Studies
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-muted-foreground mt-8"
          >
            ✓ No long-term contracts • ✓ 30-day money-back guarantee • ✓ Setup in 2 weeks
          </motion.p>

          {/* Trusted By Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <p className="text-sm text-muted-foreground mb-6">Trusted by</p>
            <div className="overflow-hidden relative">
              <motion.div
                animate={{ x: [0, -200] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="flex space-x-8 whitespace-nowrap"
              >
                {['TechFlow Inc', 'DataSync Corp', 'AutoFlow Solutions', 'GrowthLab', 'StreamlineHQ', 'InnovateCorp'].map((company, index) => (
                  <motion.span
                    key={`${company}-${index}`}
                    className="text-muted-foreground font-medium"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  >
                    {company}
                  </motion.span>
                ))}
                {/* Duplicate for seamless loop */}
                {['TechFlow Inc', 'DataSync Corp', 'AutoFlow Solutions', 'GrowthLab', 'StreamlineHQ', 'InnovateCorp'].map((company, index) => (
                  <motion.span
                    key={`${company}-duplicate-${index}`}
                    className="text-muted-foreground font-medium"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5 + 3 
                    }}
                  >
                    {company}
                  </motion.span>
                ))}
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