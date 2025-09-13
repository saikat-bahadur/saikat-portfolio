import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ExternalLink, Download, Eye, X as CloseIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleResumeView = () => {
    setIsResumeModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume/saikat_resume(2).pdf'; // Path to your resume file
    link.download = 'Saikat_Bahadur_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyan-100 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform cursor-pointer"
          >
            SB
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleResumeView}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://www.linkedin.com/in/saikatbahadur', '_blank')}
                  className="border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </motion.div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-background/95 backdrop-blur-md rounded-lg border border-border">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleResumeView}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Resume
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('https://www.linkedin.com/in/saikatbahadur', '_blank')}
                    className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* Resume Modal */}
      <Dialog open={isResumeModalOpen} onOpenChange={setIsResumeModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-4 border-b relative">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold gradient-text">
                Saikat Bahadur - Resume
              </DialogTitle>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleResumeDownload}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </motion.div>
            </div>
          </DialogHeader>
          
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[70vh] border rounded-lg overflow-hidden bg-gray-50"
            >
              <iframe
                src="/resume/saikat_resume(2).pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="w-full h-full border-0"
                title="Resume Preview"
                onLoad={() => {
                  console.log('Resume PDF loaded successfully');
                }}
                onError={(e) => {
                  console.error('Error loading resume PDF:', e);
                  // Fallback if PDF viewer doesn't work
                  const iframe = e.target as HTMLIFrameElement;
                  if (iframe) {
                    iframe.innerHTML = `
                      <div class="flex flex-col items-center justify-center h-full text-center p-8">
                        <div class="mb-4">
                          <svg class="w-16 h-16 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-700 mb-2">Resume Preview</h3>
                        <p class="text-gray-500 mb-4">PDF viewer not available. Click download to view the resume.</p>
                        <button onclick="window.open('/resume/saikat_resume(2).pdf', '_blank')" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                          Open Resume
                        </button>
                      </div>
                    `;
                  }
                }}
              />
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;