
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
  Zap
} from 'lucide-react';

interface ServiceDetail {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  color: string;
  features: string[];
}

const services: ServiceDetail[] = [
  {
    title: "Automations with n8n + Python",
    description: "Transform manual workflows into intelligent, self-executing systems that work 24/7.",
    technologies: ["n8n", "Python", "REST APIs", "Docker", "GitHub Actions"],
    icon: <Workflow className="w-8 h-8" />,
    color: "sybo-neon",
    features: [
      "Drag-and-drop workflow builder",
      "Custom Python integrations",
      "Real-time monitoring & alerts",
      "Scalable cloud deployment"
    ]
  },
  {
    title: "Dashboards with R, Shiny, Python",
    description: "Interactive data visualization platforms that turn complex data into actionable insights.",
    technologies: ["R", "Shiny", "Python", "Dash", "Streamlit", "SQL"],
    icon: <BarChart3 className="w-8 h-8" />,
    color: "sybo-sapphire",
    features: [
      "Real-time data visualization",
      "Interactive filtering & exploration",
      "Custom analytics modules",
      "Mobile-responsive design"
    ]
  },
  {
    title: "AI for Clinical Research",
    description: "Evidence synthesis and meta-analysis platforms that accelerate medical research breakthroughs.",
    technologies: ["R", "GRADE", "PRISMA", "Machine Learning", "Statistical Analysis"],
    icon: <Activity className="w-8 h-8" />,
    color: "sybo-neon",
    features: [
      "Automated literature review",
      "GRADE evidence assessment",
      "Meta-analysis automation",
      "Research workflow optimization"
    ]
  },
  {
    title: "Intelligent Bidding Systems for Oil & Gas",
    description: "Monte Carlo simulations and predictive models for strategic decision-making in energy sectors.",
    technologies: ["Python", "Monte Carlo", "Machine Learning", "Business Intelligence"],
    icon: <Target className="w-8 h-8" />,
    color: "sybo-mineral",
    features: [
      "Risk assessment models",
      "Predictive analytics",
      "Strategic forecasting",
      "Decision support systems"
    ]
  }
];

export const WhatWeDoSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="what-we-do" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 sybo-fade-in">
          <div className="inline-flex items-center space-x-2 bg-sybo-surface/50 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Code className="w-4 h-4 text-sybo-sapphire" />
            <span className="text-sybo-text-muted sybo-mono text-sm">Ultra-Interactive Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold sybo-heading mb-6">
            <span className="text-sybo-text">What We</span>
            <span className="sybo-gradient-text"> Build</span>
          </h2>
          
          <p className="text-xl text-sybo-text-muted max-w-3xl mx-auto">
            Each solution is a micro-ecosystem designed to transform how you work, 
            think, and make decisions in your industry.
          </p>
        </div>

        {/* Interactive Service Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Selection */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 border ${
                  activeService === index 
                    ? 'sybo-glass border-sybo-sapphire/50 sybo-pulse-glow' 
                    : 'bg-sybo-surface/30 border-sybo-border/20 hover:bg-sybo-surface/50'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    service.color === 'sybo-neon' ? 'bg-sybo-neon/20 text-sybo-neon' :
                    service.color === 'sybo-sapphire' ? 'bg-sybo-sapphire/20 text-sybo-sapphire' :
                    'bg-sybo-mineral/20 text-sybo-mineral'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sybo-text font-semibold text-lg mb-2 sybo-heading">
                      {service.title}
                    </h3>
                    <p className="text-sybo-text-muted text-sm">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                    activeService === index ? 'text-sybo-sapphire rotate-90' : 'text-sybo-text-muted'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Detail */}
          <div className="sticky top-24">
            <div className="sybo-glass rounded-2xl p-8 backdrop-blur-xl border border-sybo-border/20 sybo-scale-in">
              <div className="mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  services[activeService].color === 'sybo-neon' ? 'bg-sybo-neon/20 text-sybo-neon' :
                  services[activeService].color === 'sybo-sapphire' ? 'bg-sybo-sapphire/20 text-sybo-sapphire' :
                  'bg-sybo-mineral/20 text-sybo-mineral'
                }`}>
                  {services[activeService].icon}
                </div>
                
                <h3 className="text-2xl font-bold sybo-heading text-sybo-text mb-4">
                  {services[activeService].title}
                </h3>
                
                <p className="text-sybo-text-muted mb-6">
                  {services[activeService].description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
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

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sybo-text font-semibold mb-3 sybo-mono text-sm">Key Features:</h4>
                  <div className="space-y-2">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          services[activeService].color === 'sybo-neon' ? 'bg-sybo-neon' :
                          services[activeService].color === 'sybo-sapphire' ? 'bg-sybo-sapphire' :
                          'bg-sybo-mineral'
                        }`}></div>
                        <span className="text-sybo-text-muted text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="sybo-btn-primary w-full py-3 rounded-full group">
                  Get This Solution
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo Preview */}
        <div className="mt-20 sybo-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold sybo-heading text-sybo-text mb-4">
              See It In Action
            </h3>
            <p className="text-sybo-text-muted">
              Interactive preview of our {services[activeService].title.toLowerCase()}
            </p>
          </div>

          <div className="sybo-glass rounded-2xl p-8 backdrop-blur-xl border border-sybo-border/20">
            <div className="bg-sybo-black/50 rounded-xl p-6 sybo-mono text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sybo-text-muted ml-4">
                  {services[activeService].title} - Live Preview
                </span>
              </div>
              
              <div className="space-y-2 text-sybo-text-muted">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-sybo-neon" />
                  <span>System initialized successfully</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database className="w-4 h-4 text-sybo-sapphire" />
                  <span>Data pipeline connected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-sybo-mineral" />
                  <span>AI models loaded and ready</span>
                </div>
                <div className="text-sybo-neon">
                  → Ready to process your workflows
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
