import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/sections/Hero';
import PainPoints from '@/sections/PainPoints';
import Benefits from '@/sections/Benefits';
import Services from '@/sections/Services';

import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <PainPoints />
        <Benefits />
        <Services />
        
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
