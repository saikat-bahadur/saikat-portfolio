import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element w-32 h-32 top-20 left-10"></div>
        <div className="floating-element w-24 h-24 top-40 right-20"></div>
        <div className="floating-element w-40 h-40 bottom-40 left-1/4"></div>
        <div className="floating-element w-20 h-20 top-1/2 right-1/3"></div>
        <div className="floating-element w-28 h-28 bottom-20 right-10"></div>
      </div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
