import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/sections/Hero';
import TrustedBy from '@/sections/TrustedBy';
import PainPoints from '@/sections/PainPoints';
import Benefits from '@/sections/Benefits';
import Services from '@/sections/Services';
import CaseStudies from '@/sections/CaseStudies';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import BookCall from '@/sections/BookCall';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <PainPoints />
        <Benefits />
        <Services />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <BookCall />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
