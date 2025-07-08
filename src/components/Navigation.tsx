
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'sybo-glass backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-sybo-gradient rounded-lg sybo-pulse-glow flex items-center justify-center">
              <span className="text-white font-bold text-xl sybo-heading">S</span>
            </div>
            <div>
              <div className="text-sybo-text font-bold sybo-heading text-lg">Sybo AI Solution</div>
              <div className="text-sybo-sapphire text-xs sybo-mono">AI System Booster</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('what-we-do')}
              className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('sybo-way')}
              className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300"
            >
              The Sybo Way
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300"
            >
              Portfolio
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="sybo-btn-primary px-6 py-2 rounded-full"
            >
              Let's Build Together
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-sybo-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 sybo-glass rounded-lg backdrop-blur-xl border border-sybo-border/20">
            <div className="flex flex-col space-y-4 p-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('what-we-do')}
                className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-left"
              >
                What We Do
              </button>
              <button 
                onClick={() => scrollToSection('sybo-way')}
                className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-left"
              >
                The Sybo Way
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-left"
              >
                Portfolio
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="sybo-btn-primary w-full py-3 rounded-full mt-4"
              >
                Let's Build Together
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
