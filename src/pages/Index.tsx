
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import TechStack from '@/components/TechStack';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Portfolio />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
