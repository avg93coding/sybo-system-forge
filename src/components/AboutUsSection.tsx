
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  ArrowRight, 
  Quote,
  Stethoscope,
  Cog
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const foundersData = {
  es: [
    {
      name: "Aura Gutiérrez",
      title: "CEO & Co-Fundadora de Sybo Solution",
      subtitle: "Médica, Especialista y MSc en Epidemiología Clínica | Científica de Datos Aplicada | Estratega en automatización y dashboards de salud",
      bio: "Soy médica y científica de datos enfocada en crear soluciones que convierten la información en poder real. Diseño dashboards que comunican con claridad, automatizo flujos de trabajo para que funcionen solos, y traduzco datos en decisiones estratégicas. Lo que construyo no es solo código — es impacto, claridad y eficiencia en entornos donde la evidencia salva tiempo, recursos y vidas.\n\nEn Sybo Solution, lidero proyectos que transforman cómo los equipos de salud visualizan y usan sus datos. Creamos herramientas visuales poderosas, automatizamos tareas repetitivas, y habilitamos a clínicas, laboratorios y sistemas de salud para actuar con precisión y mejorar sus indicadores usando inteligencia real.",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "sybo-neon",
      tags: ["R & Shiny", "IA Clínica", "Síntesis de Evidencia"]
    },
    {
      name: "Leonardo Cervo",
      title: "CEO & Co-Fundador de Sybo Solution",
      subtitle: "Ingeniero Metalúrgico | Especialista y MSc en Gestión de Proyectos | Experto en automatización industrial y analítica estratégica",
      bio: "Soy ingeniero y estratega de alto impacto, enfocado en convertir datos complejos en sistemas accionables. Mi experiencia abarca sectores industriales, energéticos y de mantenimiento, donde diseño soluciones automatizadas que optimizan operaciones, predicen necesidades y apoyan decisiones a nivel ejecutivo.\n\nEn Sybo Solution, lidero proyectos integrando Power BI, inteligencia de negocios y automatización de procesos para empresas que no solo quieren ver datos — quieren dominarlos. Combinamos ingeniería, analítica avanzada e insight gerencial para construir herramientas inteligentes que anticipan el futuro y responden con precisión. Nuestra misión es clara: menos tiempo perdido, más decisiones acertadas.",
      icon: <Cog className="w-8 h-8" />,
      color: "sybo-sapphire",
      tags: ["IA Industrial", "Petróleo & Gas", "Automatización"]
    }
  ],
  en: [
    {
      name: "Aura Gutiérrez",
      title: "CEO & Co-Founder of Sybo Solution",
      subtitle: "Physician, Specialist and MSc in Clinical Epidemiology | Applied Data Scientist | Health automation & dashboard strategist",
      bio: "I'm a physician and data scientist focused on creating solutions that turn information into real power. I design dashboards that communicate clearly, automate workflows so they run on their own, and translate data into strategic decisions. What I build isn't just code — it's impact, clarity, and efficiency in environments where evidence saves time, resources, and lives.\n\nAt Sybo Solution, I lead projects that transform how health teams visualize and use their data. We create powerful visual tools, automate repetitive tasks, and enable clinics, labs, and healthcare systems to act with precision and improve their indicators using real intelligence.",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "sybo-neon",
      tags: ["R & Shiny", "Clinical AI", "Evidence Synthesis"]
    },
    {
      name: "Leonardo Cervo",
      title: "CEO & Co-Founder of Sybo Solution",
      subtitle: "Metallurgical Engineer | Specialist & MSc in Project Management | Expert in industrial automation and strategic analytics",
      bio: "I'm an engineer and high-impact strategist, focused on turning complex data into actionable systems. My experience spans industrial, energy, and maintenance sectors, where I design automated solutions that optimize operations, predict needs, and support executive-level decisions.\n\nAt Sybo Solution, I lead projects integrating Power BI, business intelligence, and process automation for companies that don't just want to see data — they want to master it. We combine engineering, advanced analytics, and management insight to build smart tools that anticipate the future and respond with precision. Our mission is clear: less time wasted, more decisions done right.",
      icon: <Cog className="w-8 h-8" />,
      color: "sybo-sapphire",
      tags: ["Industrial AI", "Oil & Gas", "Automation"]
    }
  ]
};

const quotesData = {
  es: [
    {
      text: "No automatizamos para ahorrar tiempo. Lo hacemos para elevar cómo pensamos.",
      author: "Filosofía Sybo"
    },
    {
      text: "Cada algoritmo que escribimos lleva el peso del impacto del mundo real.",
      author: "Nuestro Compromiso"
    },
    {
      text: "La inteligencia no se trata de reemplazar humanos—se trata de amplificar el potencial humano.",
      author: "Nuestra Visión"
    }
  ],
  en: [
    {
      text: "We didn't automate to save time. We did it to elevate how we think.",
      author: "Sybo Philosophy"
    },
    {
      text: "Every algorithm we write carries the weight of real-world impact.",
      author: "Our Commitment"
    },
    {
      text: "Intelligence isn't about replacing humans—it's about amplifying human potential.",
      author: "Our Vision"
    }
  ]
};

export const AboutUsSection = () => {
  const { language, t } = useLanguage();
  const founders = foundersData[language];
  const quotes = quotesData[language];

  return (
    <section id="about-us" className="sybo-section-mobile relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sybo-sapphire to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-sybo-neon to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto sybo-mobile-padding relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-20 sybo-fade-in">
          <div className="inline-flex items-center space-x-2 bg-sybo-surface/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-sybo-sapphire" />
            <span className="text-sybo-text-muted sybo-mono text-xs sm:text-sm">{t('about.tagline')}</span>
          </div>
          
          <h2 className="sybo-heading-responsive font-bold sybo-heading mb-4 sm:mb-6">
            <span className="text-sybo-text">{t('about.title')}</span>
            <span className="sybo-gradient-text"> {t('about.title.highlight')}</span>
          </h2>
          
          <p className="sybo-text-responsive text-sybo-text-muted max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        {/* Enhanced Founders Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20">
          {founders.map((founder, index) => (
            <div key={index} className="sybo-glass rounded-xl sm:rounded-2xl sybo-card-mobile backdrop-blur-xl border border-sybo-border/20 sybo-scale-in hover:scale-105 transition-all duration-300 group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center sybo-floating mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300 ${
                  founder.color === 'sybo-neon' ? 'bg-sybo-neon/20 text-sybo-neon' : 'bg-sybo-sapphire/20 text-sybo-sapphire'
                }`} style={{ animationDelay: `${index}s` }}>
                  {founder.icon}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="sybo-heading-responsive font-bold sybo-heading text-sybo-text mb-2">
                    {founder.name}
                  </h3>
                  <p className={`font-semibold mb-3 sm:mb-4 sybo-mono text-sm sm:text-base ${
                    founder.color === 'sybo-neon' ? 'text-sybo-neon' : 'text-sybo-sapphire'
                  }`}>
                    {founder.title}
                  </p>
                  <p className="text-sybo-text-muted text-sm sm:text-base mb-4 sm:mb-6 italic">
                    {founder.subtitle}
                  </p>
                  <div className="text-sybo-text-muted sybo-text-responsive mb-4 sm:mb-6 leading-relaxed">
                    {founder.bio.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {founder.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm sybo-mono hover:scale-105 transition-transform duration-200 ${
                          founder.color === 'sybo-neon' 
                            ? 'bg-sybo-neon/10 text-sybo-neon hover:bg-sybo-neon/20' 
                            : 'bg-sybo-sapphire/10 text-sybo-sapphire hover:bg-sybo-sapphire/20'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Quote Wall */}
        <div className="sybo-fade-in">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="sybo-heading-responsive font-bold sybo-heading text-sybo-text mb-4">
              {language === 'es' ? 'Nuestro Manifiesto' : 'Our Manifesto'}
            </h3>
            <p className="text-sybo-text-muted sybo-text-responsive">
              {language === 'es' ? 'Los principios que guían cada decisión que tomamos' : 'The principles that guide every decision we make'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="sybo-glass rounded-xl sm:rounded-2xl sybo-card-mobile backdrop-blur-xl border border-sybo-border/20 sybo-scale-in hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-sybo-sapphire mb-4 sm:mb-6 sybo-floating group-hover:text-sybo-neon transition-colors duration-300" />
                <blockquote className="text-sybo-text sybo-text-responsive mb-4 italic leading-relaxed">
                  "{quote.text}"
                </blockquote>
                <cite className="text-sybo-text-muted sybo-mono text-sm">
                  — {quote.author}
                </cite>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center sybo-fade-in">
          <Button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="sybo-btn-primary sybo-mobile-button px-8 py-4 rounded-full font-semibold group shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {language === 'es' ? 'Experimenta la Manera Sybo' : 'Experience The Sybo Way'}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
