import { motion } from 'framer-motion';
import { Mail, CalendarDays, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [language, setLanguage] = useState('EN');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'EN';
    setLanguage(savedLanguage);

    // Check initial theme state
    const isLightMode = document.documentElement.classList.contains('light');
    setIsDark(!isLightMode);

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isLightMode = document.documentElement.classList.contains('light');
          setIsDark(!isLightMode);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          
          {/* Company Info */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <img
                src={isDark ? "/lovable-uploads/a270aaad-d239-493f-9118-0d53a9fd87fd.png" : "/lovable-uploads/f294ea93-bf1a-479a-98e1-b191f9897ffa.png"}
                alt="Aotumate logo"
                className="h-6 w-auto"
              />
            </motion.div>
            
            <p className="text-muted-foreground leading-relaxed">
              {language === 'AR' 
                ? 'نحن نقضي على المهام المتكررة حتى يتمكن فريقك من التركيز على ما ينمي عملك فعلاً.'
                : 'We eliminate repetitive tasks so your team can focus on what actually grows your business.'
              }
            </p>
            
            <div className="flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/riyadjaamour/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://x.com/JaamourRiyad"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.instagram.com/r1y4dja3mour/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.tiktok.com/@rjaamour"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.8a6.34 6.34 0 0 0 10.86-4.43V7.83a8.2 8.2 0 0 0 4.77 1.52v-2.66a4.83 4.83 0 0 1-1.2 0z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.threads.com/@r1y4dja3mour"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.024.921-.767 2.205-1.202 3.61-1.224 1.04-.016 1.99.14 2.836.465-.034-.79-.173-1.46-.416-2.016-.313-.715-.81-1.2-1.478-1.44-.712-.256-1.603-.324-2.645-.202l-.26-2.066c1.364-.172 2.54-.087 3.498.252 1.043.369 1.86 1.058 2.428 2.047.498.869.784 1.93.867 3.222.55.299 1.04.653 1.467 1.06.932.888 1.552 2.022 1.843 3.375.476 2.212.026 4.574-1.675 6.318-1.888 1.937-4.327 2.74-7.669 2.762zm1.508-8.236c-.644-.019-1.404.07-1.942.478-.378.287-.606.699-.578 1.132.025.405.247.793.648 1.053.464.3 1.097.452 1.778.42 1.037-.056 1.82-.426 2.33-1.1.383-.506.648-1.165.79-1.963-.916-.038-1.974-.016-3.026-.02z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.youtube.com/@RiyadJaamour"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {language === 'AR' ? 'تواصل معنا' : 'Contact'}
            </h3>
            <ul className="space-y-3">
              <li className={`flex items-center text-muted-foreground ${language === 'AR' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <Mail className="w-4 h-4 text-primary" />
                <span>Riyad@aotumate.com</span>
              </li>
              <li className="text-muted-foreground">
                <a
                  href="https://cal.com/riyad-jaamour/30-mins-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center hover:text-foreground transition-colors ${language === 'AR' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
                >
                  <CalendarDays className="w-4 h-4 text-primary" />
                  <span>
                    {language === 'AR' ? 'احجز مكالمة استشارة مجانية' : 'Book Free Consultation Call'}
                  </span>
                </a>
              </li>
              <li className={`flex items-center text-muted-foreground ${language === 'AR' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <MapPin className="w-4 h-4 text-primary" />
                <span>
                  {language === 'AR' ? 'جدة، السعودية' : 'Jeddah, SA'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} aotumate. {language === 'AR' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          
          <div className={`flex text-sm ${language === 'AR' ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
            <Link
              to="/privacy-policy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {language === 'AR' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <Link
              to="/terms-of-service"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {language === 'AR' ? 'شروط الخدمة' : 'Terms of Service'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;