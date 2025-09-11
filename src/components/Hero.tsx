import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">
                Saikat Bahadur
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Computer Science Engineering Student & Aspiring{' '}
              <span className="text-primary font-semibold">Full Stack Developer</span>
            </p>
          </div>

          {/* Description */}
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate about building scalable web applications and cloud solutions. 
              Currently pursuing B.Tech in Computer Science Engineering at GIET University.
            </p>
          </div>

          {/* Location */}
          <div className="fade-in-up flex items-center justify-center gap-2 mb-8" style={{ animationDelay: '0.5s' }}>
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">Angul, Odisha, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-hero hover:opacity-90 text-white border-0 px-8"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('mailto:saikatbahadur918@gmail.com', '_blank')}
              className="px-8"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="fade-in-up flex justify-center gap-6 mb-12" style={{ animationDelay: '0.8s' }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://github.com/saikat-bahadur', '_blank')}
              className="hover:text-primary"
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://www.linkedin.com/in/saikatbahadur', '_blank')}
              className="hover:text-primary"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="fade-in-up" style={{ animationDelay: '1s' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;