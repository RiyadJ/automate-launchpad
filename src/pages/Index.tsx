import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/sections/Hero';
import Comparison from '@/sections/Comparison';
import Services from '@/sections/Services';
import HowItWorks from '@/sections/HowItWorks';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import CTA from '@/sections/CTA';
import { ScrollProgress } from '@/components/brand/ScrollProgress';

const CHAPTERS = [
  { id: 'hero',         index: '01', label: 'HERO',         labelAr: 'البداية' },
  { id: 'comparison',   index: '02', label: 'COMPARE',      labelAr: 'مقارنة' },
  { id: 'services',     index: '03', label: 'SERVICES',     labelAr: 'خدمات' },
  { id: 'how-it-works', index: '04', label: 'PROCESS',      labelAr: 'العملية' },
  { id: 'testimonials', index: '05', label: 'PROOF',        labelAr: 'شهادات' },
  { id: 'faq',          index: '06', label: 'FAQ',          labelAr: 'أسئلة' },
  { id: 'cta',          index: '07', label: 'CONTACT',      labelAr: 'تواصل' },
];

const Index = () => {
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');

  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage') || 'EN';
    setLanguage(saved as 'EN' | 'AR');
    const handler = (e: CustomEvent) => setLanguage(e.detail);
    window.addEventListener('languageChange', handler as EventListener);
    return () => window.removeEventListener('languageChange', handler as EventListener);
  }, []);

  return (
    <div className="bg-background film-grain">
      <Header />
      <ScrollProgress chapters={CHAPTERS} container=".snap-container" language={language} />
      <main className="snap-container pt-16">
        <Hero />
        <Comparison />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        {/* CTA and Footer grouped as the last snap section */}
        <div className="snap-section min-h-[100dvh] flex flex-col justify-center">
          <CTA />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
