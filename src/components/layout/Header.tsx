import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
// No longer importing the old logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('EN');
  const [showNavCTA, setShowNavCTA] = useState(false);

  // Initialize theme based on system preference
  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(systemPrefersDark);
    if (!systemPrefersDark) {
      document.documentElement.classList.add('light');
    }

    // Check for scroll to show/hide nav CTA
    const handleScroll = () => {
      const heroCTA = document.getElementById('hero-cta');
      if (heroCTA) {
        const rect = heroCTA.getBoundingClientRect();
        setShowNavCTA(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'AR' : 'EN');
    document.documentElement.dir = language === 'EN' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'EN' ? 'ar' : 'en';
    
    // Reload the page to apply language changes to all sections
    window.location.reload();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass border-b border-border/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={isDark ? "/lovable-uploads/a270aaad-d239-493f-9118-0d53a9fd87fd.png" : "/lovable-uploads/59f8f8cd-a970-4082-ba6b-3793802720dc.png"}
              alt="Aotumate logo" 
              className="h-8 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {language === 'AR' ? 'خدماتنا' : 'Services'}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {language === 'AR' ? 'آراء العملاء' : 'Testimonials'}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {language === 'AR' ? 'الأسئلة الشائعة' : 'FAQs'}
            </button>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - show only after scrolling past hero CTA */}
            <AnimatePresence>
              {showNavCTA && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    onClick={() => window.open('https://cal.com/riyad-jaamour/30-mins-discovery-call', '_blank')}
                    className="hidden sm:inline-flex bg-warning text-warning-foreground hover:bg-warning/90"
                  >
                    {language === 'AR' ? 'احجز مكالمتك' : 'Book Your Call'}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.div>
              </AnimatePresence>
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="p-2 flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs">{language}</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/30 py-4"
          >
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {language === 'AR' ? 'خدماتنا' : 'Services'}
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {language === 'AR' ? 'آراء العملاء' : 'Testimonials'}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {language === 'AR' ? 'الأسئلة الشائعة' : 'FAQs'}
              </button>
              <Button 
                onClick={() => window.open('https://cal.com/riyad-jaamour/30-mins-discovery-call', '_blank')}
                className="bg-warning text-warning-foreground hover:bg-warning/90 mx-4"
              >
                {language === 'AR' ? 'احجز مكالمتك' : 'Book Your Call'}
              </Button>
            </nav>
          </motion.div>
        )}
      </div>

    </motion.header>
  );
};

export default Header;