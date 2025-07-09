
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'sybo-glass backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-sybo-gradient rounded-lg sybo-pulse-glow flex items-center justify-center">
              <span className="text-white font-bold text-xl sybo-heading">S</span>
            </div>
            <div>
              <div className="text-sybo-text font-bold sybo-heading text-lg">Sybo Solution</div>
              <div className="text-sybo-sapphire text-xs sybo-mono">{t('hero.tagline')}</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-sm lg:text-base"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('what-we-do')}
              className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-sm lg:text-base"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('about-us')}
              className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-sm lg:text-base"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-sm lg:text-base"
            >
              {t('nav.portfolio')}
            </button>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-sm"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="sybo-btn-primary px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base"
            >
              {t('nav.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 p-2"
            >
              <Globe className="w-5 h-5" />
            </button>
            <Button
              variant="ghost"
              size="icon"
              className="text-sybo-text"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 sybo-glass rounded-lg backdrop-blur-xl border border-sybo-border/20">
            <div className="flex flex-col space-y-4 p-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-left py-2"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('what-we-do')}
                className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-left py-2"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('about-us')}
                className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-left py-2"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-sybo-text hover:text-sybo-sapphire transition-colors duration-300 text-left py-2"
              >
                {t('nav.portfolio')}
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="sybo-btn-primary w-full py-3 rounded-full mt-4 min-h-[44px]"
              >
                {t('nav.cta')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
