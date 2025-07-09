
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    'nav.cta': 'Construyamos Juntos',
    
    // Hero Section
    'hero.tagline': 'AI System Booster',
    'hero.title': 'Construimos',
    'hero.title.highlight': 'Sistemas Que Piensan',
    'hero.description': 'Transformamos procesos complejos en sistemas inteligentes. Con automatización, ciencia de datos y pensamiento estratégico, construimos el futuro — un flujo de trabajo a la vez.',
    'hero.cta.primary': 'Obtener un Dashboard Personalizado',
    'hero.cta.secondary': 'Ver Nuestro Trabajo',
    
    // What We Do
    'services.tagline': 'Soluciones Ultra-Interactivas',
    'services.title': 'Lo Que',
    'services.title.highlight': 'Construimos',
    'services.description': 'Cada solución es un micro-ecosistema diseñado para transformar cómo trabajas, piensas y tomas decisiones en tu industria.',
    'services.automation.title': 'Automatizaciones con n8n + Python',
    'services.automation.description': 'Transforma flujos de trabajo manuales en sistemas inteligentes que funcionan 24/7.',
    'services.dashboards.title': 'Dashboards con R, Shiny, Python',
    'services.dashboards.description': 'Plataformas de visualización interactiva que convierten datos complejos en insights accionables.',
    'services.clinical.title': 'IA para Investigación Clínica',
    'services.clinical.description': 'Plataformas de síntesis de evidencia y meta-análisis que aceleran avances en investigación médica.',
    'services.bidding.title': 'Sistemas Inteligentes de Licitación para Petróleo y Gas',
    'services.bidding.description': 'Simulaciones Monte Carlo y modelos predictivos para toma de decisiones estratégicas en sectores energéticos.',
    'services.get.solution': 'Obtener Esta Solución',
    
    // About Us
    'about.tagline': 'Nuestra Filosofía',
    'about.title': 'El Equipo',
    'about.title.highlight': 'Sybo',
    'about.description': 'Donde la precisión médica se encuentra con la innovación industrial. Nuestro enfoque único combina experiencia en salud con excelencia en ingeniería.',
    
    // Contact
    'contact.title': 'Construyamos',
    'contact.title.highlight': 'Juntos',
    'contact.description': 'Tu sistema ya está pensando. Solo necesitamos darle vida.',
    'contact.form.name': 'Tu Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.company': 'Nombre de la Empresa',
    'contact.form.project': 'Tipo de Proyecto',
    'contact.form.message': 'Cuéntanos sobre tu visión, desafíos y qué quieres automatizar...',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.success': '¡Mensaje enviado! Te responderemos en 24 horas.',
    'contact.confirmation': 'Recibimos tu mensaje. Tu sistema ya está pensando.',
    
    // Footer
    'footer.tagline': 'AI System Booster',
    'footer.description': 'Transformando procesos en sistemas inteligentes.',
    'footer.links': 'Enlaces',
    'footer.contact': 'Contacto',
    'footer.copyright': '© 2025 Sybo Solution. Todos los derechos reservados.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.cta': "Let's Build Together",
    
    // Hero Section
    'hero.tagline': 'AI System Booster',
    'hero.title': 'We Build',
    'hero.title.highlight': 'Systems That Think',
    'hero.description': 'We turn messy processes into intelligent systems. With automation, data science, and design thinking, we build the future — one workflow at a time.',
    'hero.cta.primary': 'Get a Custom Dashboard',
    'hero.cta.secondary': 'See Our Work',
    
    // What We Do
    'services.tagline': 'Ultra-Interactive Solutions',
    'services.title': 'What We',
    'services.title.highlight': 'Build',
    'services.description': 'Each solution is a micro-ecosystem designed to transform how you work, think, and make decisions in your industry.',
    'services.automation.title': 'Automations with n8n + Python',
    'services.automation.description': 'Transform manual workflows into intelligent, self-executing systems that work 24/7.',
    'services.dashboards.title': 'Dashboards with R, Shiny, Python',
    'services.dashboards.description': 'Interactive data visualization platforms that turn complex data into actionable insights.',
    'services.clinical.title': 'AI for Clinical Research',
    'services.clinical.description': 'Evidence synthesis and meta-analysis platforms that accelerate medical research breakthroughs.',
    'services.bidding.title': 'Intelligent Bidding Systems for Oil & Gas',
    'services.bidding.description': 'Monte Carlo simulations and predictive models for strategic decision-making in energy sectors.',
    'services.get.solution': 'Get This Solution',
    
    // About Us
    'about.tagline': 'Our Philosophy',
    'about.title': 'The',
    'about.title.highlight': 'Sybo Team',
    'about.description': 'Where medical precision meets industrial innovation. Our unique approach blends health expertise with engineering excellence.',
    
    // Contact
    'contact.title': "Let's Build",
    'contact.title.highlight': 'Together',
    'contact.description': 'Your system is already thinking. We just need to bring it to life.',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company Name',
    'contact.form.project': 'Project Type',
    'contact.form.message': 'Tell us about your vision, challenges, and what you want to automate...',
    'contact.form.submit': 'Send Message',
    'contact.success': 'Message sent successfully! We\'ll get back to you within 24 hours.',
    'contact.confirmation': 'We got your message. Your system is already thinking.',
    
    // Footer
    'footer.tagline': 'AI System Booster',
    'footer.description': 'Transforming processes into intelligent systems.',
    'footer.links': 'Links',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 Sybo Solution. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es'); // Spanish as default

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
