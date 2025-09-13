import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const gradientVariants = {
  initial: {
    backgroundPosition: '0% 50%',
  },
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: 'linear' as const
    }
  }
};

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(-45deg, #8b5cf6, #3b82f6, #06b6d4, #10b981, #f59e0b, #ec4899)',
          backgroundSize: '400% 400%',
        }}
        variants={gradientVariants}
        initial="initial"
        animate="animate"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-sm"></div>
      </motion.div>

      {/* Additional floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 top-20 -left-32"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 bottom-20 -right-24"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-orange-400/20 to-pink-400/20 top-1/2 right-1/4"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Main heading */}
          <motion.div variants={item}>
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span 
                className="block text-4xl md:text-5xl font-light mb-2 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                className="gradient-text block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                Saikat Bahadur
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={item}>
            <motion.div 
              className="text-2xl md:text-3xl font-semibold mb-4 max-w-4xl mx-auto leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              <motion.span 
                className="gradient-text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                Computer Science Engineering Student
              </motion.span>
              <br />
              <motion.span 
                className="text-3xl md:text-4xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                & Aspiring Full Stack Developer
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div variants={item}>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              Passionate about building{' '}
              <motion.span 
                className="font-semibold text-primary"
                whileHover={{ scale: 1.05 }}
              >
                scalable web applications
              </motion.span>
              {' '}and{' '}
              <motion.span 
                className="font-semibold text-accent"
                whileHover={{ scale: 1.05 }}
              >
                cloud solutions
              </motion.span>
              . Currently pursuing B.Tech in Computer Science Engineering at GIET University.
            </motion.p>
          </motion.div>

          {/* Location */}
          <motion.div 
            className="flex items-center justify-center gap-2 mb-8"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div whileHover={{ rotate: 360, transition: { duration: 1 } }}>
              <MapPin className="w-5 h-5 text-muted-foreground" />
            </motion.div>
            <span className="text-muted-foreground">Angul, Odisha, India</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            variants={item}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="relative overflow-hidden group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
                <Mail className="w-5 h-5 mr-3" />
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="relative overflow-hidden group px-8 py-4 text-lg font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowDown className="w-5 h-5 ml-3" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-7"
            variants={item}
          >
            <motion.a
              href="https://github.com/saikat-bahadur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors relative p-2 cursor-pointer"
              aria-label="GitHub"
              whileHover={{ y: -3, color: 'hsl(var(--foreground))' }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            
            {/* Add more social links with similar animation */}
            <motion.a
              href="https://www.linkedin.com/in/saikatbahadur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors relative p-2 cursor-pointer"
              aria-label="LinkedIn"
              whileHover={{ y: -3, color: 'hsl(var(--foreground))' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>
            
            {/* <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors relative p-2"
              aria-label="Twitter"
              whileHover={{ y: -3, color: 'hsl(var(--foreground))' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </motion.a> */}
          </motion.div>

          {/* Animated Scroll indicator */}
          <motion.div 
            className="absolute bottom-3 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToSection('about')}
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-8 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1 overflow-hidden">
              <motion.div 
                className="w-1 h-2 bg-muted-foreground/70 rounded-full"
                animate={{ 
                  y: [0, 24, 0],
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;