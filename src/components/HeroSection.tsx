
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap, Brain, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Data Nodes */}
        <div className="absolute top-20 left-10 w-3 h-3 md:w-4 md:h-4 bg-sybo-sapphire rounded-full sybo-floating opacity-60"></div>
        <div className="absolute top-40 right-20 w-2 h-2 md:w-3 md:h-3 bg-sybo-neon rounded-full sybo-floating opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 md:w-5 md:h-5 bg-sybo-mineral rounded-full sybo-floating opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-sybo-neon-blue rounded-full sybo-floating opacity-70" style={{ animationDelay: '3s' }}></div>
        
        {/* Data Flow Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sybo-sapphire/30 to-transparent sybo-data-flow"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-sybo-neon/20 to-transparent sybo-data-flow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Interactive Cursor Effect - Hidden on mobile */}
      <div 
        className="fixed w-6 h-6 bg-sybo-sapphire/20 rounded-full pointer-events-none z-10 transition-all duration-300 ease-out hidden md:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1)',
        }}
      ></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center py-20">
        {/* Main Hero Content */}
        <div className="sybo-fade-in">
          <div className="inline-flex items-center space-x-2 bg-sybo-surface/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 sybo-holographic">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-sybo-neon" />
            <span className="text-sybo-text-muted sybo-mono text-xs sm:text-sm">{t('hero.tagline')}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold sybo-heading mb-4 sm:mb-6 leading-tight">
            <span className="text-sybo-text">{t('hero.title')}</span>
            <br />
            <span className="sybo-gradient-text">{t('hero.title.highlight')}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-sybo-text-muted max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="sybo-btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold group min-h-[44px]"
            >
              <span className="text-center">{t('hero.cta.primary')}</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('what-we-do')}
              className="sybo-btn-ghost w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold group min-h-[44px]"
            >
              <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t('hero.cta.secondary')}</span>
            </Button>
          </div>
        </div>

        {/* Interactive Dashboard Preview */}
        <div className="sybo-scale-in" style={{ animationDelay: '0.5s' }}>
          <div className="relative max-w-4xl mx-auto px-4">
            <div className="sybo-glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl border border-sybo-border/20 sybo-pulse-glow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Health Analytics */}
                <div className="bg-sybo-surface/50 rounded-lg sm:rounded-xl p-4 sm:p-6 sybo-floating">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sybo-neon/20 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-sybo-neon" />
                    </div>
                    <div>
                      <h3 className="text-sybo-text font-semibold text-sm sm:text-base">Health AI</h3>
                      <p className="text-sybo-text-muted text-xs sm:text-sm">Clinical Research</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 sm:h-2 bg-sybo-surface rounded-full overflow-hidden">
                      <div className="h-full bg-sybo-neon w-3/4 rounded-full"></div>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-sybo-surface rounded-full overflow-hidden">
                      <div className="h-full bg-sybo-neon w-1/2 rounded-full"></div>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-sybo-surface rounded-full overflow-hidden">
                      <div className="h-full bg-sybo-neon w-5/6 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Industrial Automation */}
                <div className="bg-sybo-surface/50 rounded-lg sm:rounded-xl p-4 sm:p-6 sybo-floating" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sybo-sapphire/20 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-sybo-sapphire" />
                    </div>
                    <div>
                      <h3 className="text-sybo-text font-semibold text-sm sm:text-base">Industrial AI</h3>
                      <p className="text-sybo-text-muted text-xs sm:text-sm">Oil & Gas</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 sm:h-2 bg-sybo-surface rounded-full overflow-hidden">
                      <div className="h-full bg-sybo-sapphire w-4/5 rounded-full"></div>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-sybo-surface rounded-full overflow-hidden">
                      <div className="h-full bg-sybo-sapphire w-2/3 rounded-full"></div>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-sybo-surface rounded-full overflow-hidden">
                      <div className="h-full bg-sybo-sapphire w-3/4 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Automation Systems */}
                <div className="bg-sybo-surface/50 rounded-lg sm:rounded-xl p-4 sm:p-6 sybo-floating" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sybo-mineral/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-sybo-mineral" />
                    </div>
                    <div>
                      <h3 className="text-sybo-text font-semibold text-sm sm:text-base">Automation</h3>
                      <p className="text-sybo-text-muted text-xs sm:text-sm">Workflow Engine</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 sm:h-2 bg-sybo-surface rounded-full overflow-hidden">
                      <div className="h-full bg-sybo-mineral w-5/6 rounded-full"></div>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-sybo-surface rounded-full overflow-hidden">
                      <div className="h-full bg-sybo-mineral w-3/5 rounded-full"></div>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-sybo-surface rounded-full overflow-hidden">
                      <div className="h-full bg-sybo-mineral w-4/5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 sybo-fade-in" style={{ animationDelay: '1s' }}>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-sybo-sapphire rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-sybo-sapphire rounded-full mt-1.5 sm:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
