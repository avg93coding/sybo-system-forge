
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { WhatWeDoSection } from '@/components/WhatWeDoSection';
import { AboutUsSection } from '@/components/AboutUsSection';
import { LearningHubSection } from '@/components/LearningHubSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-sybo-black overflow-x-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sybo-sapphire/10 rounded-full blur-3xl sybo-floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sybo-neon-blue/10 rounded-full blur-3xl sybo-floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sybo-mineral/5 rounded-full blur-3xl sybo-floating" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-sybo-neon/5 to-sybo-sapphire/5 rounded-full blur-2xl sybo-floating" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <WhatWeDoSection />
        <AboutUsSection />
        <LearningHubSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
