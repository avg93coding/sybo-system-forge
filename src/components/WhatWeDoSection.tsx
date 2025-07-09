
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Workflow, 
  BarChart3, 
  Activity, 
  Target, 
  ArrowRight, 
  Code, 
  Database, 
  Brain,
  Zap,
  X
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceDetail {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  color: string;
  features: string[];
  benefits: string[];
}

export const WhatWeDoSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [expandedModal, setExpandedModal] = useState<number | null>(null);
  const { t } = useLanguage();

  const services: ServiceDetail[] = [
    {
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      technologies: ["n8n", "Python", "REST APIs", "Docker", "GitHub Actions"],
      icon: <Workflow className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "sybo-neon",
      features: [
        "Drag-and-drop workflow builder",
        "Custom Python integrations", 
        "Real-time monitoring & alerts",
        "Scalable cloud deployment"
      ],
      benefits: [
        "Reduce manual work by 90%",
        "24/7 automated operations",
        "Error-free execution"
      ]
    },
    {
      title: t('services.dashboards.title'),
      description: t('services.dashboards.description'),
      technologies: ["R", "Shiny", "Python", "Dash", "Streamlit", "SQL"],
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "sybo-sapphire",
      features: [
        "Real-time data visualization",
        "Interactive filtering & exploration",
        "Custom analytics modules",
        "Mobile-responsive design"
      ],
      benefits: [
        "Make data-driven decisions faster",
        "Interactive exploration tools",
        "Beautiful, clear visualizations"
      ]
    },
    {
      title: t('services.clinical.title'),
      description: t('services.clinical.description'),
      technologies: ["R", "GRADE", "PRISMA", "Machine Learning", "Statistical Analysis"],
      icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "sybo-neon",
      features: [
        "Automated literature review",
        "GRADE evidence assessment",
        "Meta-analysis automation",
        "Research workflow optimization"
      ],
      benefits: [
        "Accelerate research by 70%",
        "Evidence-based insights",
        "Streamlined workflows"
      ]
    },
    {
      title: t('services.bidding.title'),
      description: t('services.bidding.description'),
      technologies: ["Python", "Monte Carlo", "Machine Learning", "Business Intelligence"],
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "sybo-mineral",
      features: [
        "Risk assessment models",
        "Predictive analytics",
        "Strategic forecasting",
        "Decision support systems"
      ],
      benefits: [
        "Optimize bidding strategies",
        "Risk-informed decisions",
        "Strategic competitive advantage"
      ]
    }
  ];

  const openModal = (index: number) => {
    setExpandedModal(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setExpandedModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="what-we-do" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 sybo-fade-in">
          <div className="inline-flex items-center space-x-2 bg-sybo-surface/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <Code className="w-3 h-3 sm:w-4 sm:h-4 text-sybo-sapphire" />
            <span className="text-sybo-text-muted sybo-mono text-xs sm:text-sm">{t('services.tagline')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sybo-heading mb-4 sm:mb-6">
            <span className="text-sybo-text">{t('services.title')}</span>
            <span className="sybo-gradient-text"> {t('services.title.highlight')}</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-sybo-text-muted max-w-3xl mx-auto px-4">
            {t('services.description')}
          </p>
        </div>

        {/* Interactive Service Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Service Selection */}
          <div className="space-y-4 sm:space-y-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-500 border transform hover:scale-105 ${
                  activeService === index 
                    ? 'sybo-glass border-sybo-sapphire/50 sybo-pulse-glow' 
                    : 'bg-sybo-surface/30 border-sybo-border/20 hover:bg-sybo-surface/50'
                }`}
                onClick={() => {
                  setActiveService(index);
                  openModal(index);
                }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center sybo-floating ${
                    service.color === 'sybo-neon' ? 'bg-sybo-neon/20 text-sybo-neon' :
                    service.color === 'sybo-sapphire' ? 'bg-sybo-sapphire/20 text-sybo-sapphire' :
                    'bg-sybo-mineral/20 text-sybo-mineral'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sybo-text font-semibold text-base sm:text-lg mb-2 sybo-heading">
                      {service.title}
                    </h3>
                    <p className="text-sybo-text-muted text-sm">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                    activeService === index ? 'text-sybo-sapphire rotate-90' : 'text-sybo-text-muted'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Detail */}
          <div className="sticky top-24">
            <div className="sybo-glass rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-xl border border-sybo-border/20 sybo-scale-in">
              <div className="mb-6 sm:mb-8">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 ${
                  services[activeService].color === 'sybo-neon' ? 'bg-sybo-neon/20 text-sybo-neon' :
                  services[activeService].color === 'sybo-sapphire' ? 'bg-sybo-sapphire/20 text-sybo-sapphire' :
                  'bg-sybo-mineral/20 text-sybo-mineral'
                }`}>
                  {services[activeService].icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold sybo-heading text-sybo-text mb-3 sm:mb-4">
                  {services[activeService].title}
                </h3>
                
                <p className="text-sybo-text-muted mb-4 sm:mb-6">
                  {services[activeService].description}
                </p>

                {/* Technologies */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sybo-text font-semibold mb-3 sybo-mono text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-sybo-surface/50 rounded-full text-sybo-text text-sm sybo-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="sybo-btn-primary w-full py-3 rounded-full group min-h-[44px]">
                  {t('services.get.solution')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {expandedModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto sybo-glass rounded-2xl p-6 sm:p-8 border border-sybo-border/20">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-sybo-surface/80 flex items-center justify-center hover:bg-sybo-surface transition-colors"
            >
              <X className="w-4 h-4 text-sybo-text" />
            </button>

            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
              services[expandedModal].color === 'sybo-neon' ? 'bg-sybo-neon/20 text-sybo-neon' :
              services[expandedModal].color === 'sybo-sapphire' ? 'bg-sybo-sapphire/20 text-sybo-sapphire' :
              'bg-sybo-mineral/20 text-sybo-mineral'
            }`}>
              {services[expandedModal].icon}
            </div>

            <h3 className="text-2xl font-bold sybo-heading text-sybo-text mb-4">
              {services[expandedModal].title}
            </h3>

            <p className="text-sybo-text-muted mb-6">
              {services[expandedModal].description}
            </p>

            {/* Key Benefits */}
            <div className="mb-6">
              <h4 className="text-sybo-text font-semibold mb-3 sybo-mono text-sm">Key Benefits:</h4>
              <div className="space-y-2">
                {services[expandedModal].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      services[expandedModal].color === 'sybo-neon' ? 'bg-sybo-neon' :
                      services[expandedModal].color === 'sybo-sapphire' ? 'bg-sybo-sapphire' :
                      'bg-sybo-mineral'
                    }`}></div>
                    <span className="text-sybo-text-muted text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-sybo-text font-semibold mb-3 sybo-mono text-sm">Features:</h4>
              <div className="space-y-2">
                {services[expandedModal].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      services[expandedModal].color === 'sybo-neon' ? 'bg-sybo-neon' :
                      services[expandedModal].color === 'sybo-sapphire' ? 'bg-sybo-sapphire' :
                      'bg-sybo-mineral'
                    }`}></div>
                    <span className="text-sybo-text-muted text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="sybo-btn-primary w-full py-3 rounded-full group">
              {t('services.get.solution')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
