import { motion } from 'framer-motion';
import { Mail, CalendarDays, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';
import PrivacyPolicy from '@/components/ui/privacy-policy';
import TermsOfService from '@/components/ui/terms-of-service';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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
                src="/lovable-uploads/f294ea93-bf1a-479a-98e1-b191f9897ffa.png"
                alt="Aotumate logo" 
                className="h-6 w-auto block dark:hidden"
              />
              <img 
                src="/lovable-uploads/a270aaad-d239-493f-9118-0d53a9fd87fd.png"
                alt="Aotumate logo" 
                className="h-6 w-auto hidden dark:block"
              />
            </motion.div>
            
            <p className="text-muted-foreground leading-relaxed">
              We eliminate repetitive tasks so your team can focus on what actually grows your business.
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
                <img 
                  src="/lovable-uploads/63c1c940-370d-4db6-aa76-fb42228306ea.png" 
                  alt="Threads" 
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(240deg) brightness(1) contrast(1)' }}
                />
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
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>Riyad@aotumate.com</span>
              </li>
              <li className="text-muted-foreground">
                <a
                  href="https://cal.com/riyad-jaamour/30-mins-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-foreground transition-colors"
                >
                  <CalendarDays className="w-4 h-4 text-primary" />
                  <span>Book Free Consultation Call</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Jeddah, SA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} aotumate. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <button 
              onClick={() => setShowPrivacy(true)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setShowTerms(true)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
      
      {/* Privacy Policy Modal */}
      <PrivacyPolicy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      
      {/* Terms of Service Modal */}
      <TermsOfService isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </footer>
  );
};

export default Footer;