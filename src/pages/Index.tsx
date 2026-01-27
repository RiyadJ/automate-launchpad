import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/sections/Hero';
import Comparison from '@/sections/Comparison';
import Services from '@/sections/Services';
import HowItWorks from '@/sections/HowItWorks';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import CTA from '@/sections/CTA';

const Index = () => {
  return (
    <div className="bg-background">
      <Header />
      <main className="snap-container pt-16">
        <Hero />
        <Comparison />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        {/* CTA and Footer grouped as the last snap section */}
        <div className="snap-section min-h-screen flex flex-col justify-center">
          <CTA />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
