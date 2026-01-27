import { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
// No longer importing the old logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('EN');
  const [showNavCTA, setShowNavCTA] = useState(false);

  // Initialize theme and language
  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(systemPrefersDark);
    if (!systemPrefersDark) {
      document.documentElement.classList.add('light');
    }

    // Initialize language from localStorage or default to EN
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'EN';
    setLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLanguage === 'AR' ? 'ar' : 'en';

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
    const newLanguage = language === 'EN' ? 'AR' : 'EN';
    setLanguage(newLanguage);
    document.documentElement.dir = newLanguage === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage === 'AR' ? 'ar' : 'en';
    
    // Store language preference
    localStorage.setItem('preferredLanguage', newLanguage);
    
    // Trigger custom event to update all components
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLanguage }));
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
      dir="ltr"
    >
      <div className="container mx-auto px-4">
        <LayoutGroup>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src={isDark ? "/lovable-uploads/a270aaad-d239-493f-9118-0d53a9fd87fd.png" : "/lovable-uploads/f294ea93-bf1a-479a-98e1-b191f9897ffa.png"}
                alt="Aotumate logo"
                className="h-8 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              className={`hidden md:flex items-center gap-8 ${language === 'AR' ? 'flex-row-reverse' : ''}`}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {[
                { id: 'comparison', en: 'Working Manually?', ar: 'عملك يدوي؟' },
                { id: 'services', en: 'Services', ar: 'خدماتنا' },
                { id: 'how-it-works', en: 'How It Works', ar: 'كيف نعمل' },
                { id: 'testimonials', en: 'Testimonials', ar: 'آراء العملاء' },
                { id: 'faq', en: 'FAQs', ar: 'الأسئلة الشائعة' },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  layout
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {language === 'AR' ? item.ar : item.en}
                </motion.button>
              ))}
            </motion.nav>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
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
                    variant="outline"
                    onClick={() => window.open('https://cal.com/riyad-jaamour/30-mins-discovery-call', '_blank')}
                    className="hidden sm:inline-flex border-primary text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    {language === 'AR' ? 'تواصل معنا' : 'Get In Touch'}
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
        </LayoutGroup>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/30 py-4"
            >
              <nav className={`flex flex-col space-y-4 ${language === 'AR' ? 'items-end' : 'items-start'}`}>
                {[
                  { id: 'comparison', en: 'Working Manually?', ar: 'عملك يدوي؟' },
                  { id: 'services', en: 'Services', ar: 'خدماتنا' },
                  { id: 'how-it-works', en: 'How It Works', ar: 'كيف نعمل' },
                  { id: 'testimonials', en: 'Testimonials', ar: 'آراء العملاء' },
                  { id: 'faq', en: 'FAQs', ar: 'الأسئلة الشائعة' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {language === 'AR' ? item.ar : item.en}
                  </button>
                ))}
                <Button
                  variant="outline"
                  onClick={() => window.open('https://cal.com/riyad-jaamour/30-mins-discovery-call', '_blank')}
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
                >
                  {language === 'AR' ? 'تواصل معنا' : 'Get In Touch'}
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.header>
  );
};

export default Header;