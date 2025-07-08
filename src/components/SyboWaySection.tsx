
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Lightbulb, 
  Heart, 
  ArrowRight, 
  Quote,
  Clock,
  Target,
  Zap
} from 'lucide-react';

const timelineSteps = [
  {
    phase: "Discovery",
    title: "We Listen First",
    description: "Deep dive into your processes, pain points, and vision for the future.",
    icon: <Heart className="w-6 h-6" />,
    color: "sybo-neon"
  },
  {
    phase: "Design",
    title: "Blueprint Intelligence",
    description: "Architect systems that blend health expertise with industrial precision.",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "sybo-sapphire"
  },
  {
    phase: "Develop",
    title: "Code with Purpose",
    description: "Build robust, scalable solutions using cutting-edge AI and automation.",
    icon: <Zap className="w-6 h-6" />,
    color: "sybo-mineral"
  },
  {
    phase: "Deploy",
    title: "Launch & Evolve",
    description: "Continuous optimization and support to ensure your systems grow with you.",
    icon: <Target className="w-6 h-6" />,
    color: "sybo-neon-blue"
  }
];

const quotes = [
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
];

export const SyboWaySection = () => {
  return (
    <section id="sybo-way" className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sybo-sapphire to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-sybo-neon to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 sybo-fade-in">
          <div className="inline-flex items-center space-x-2 bg-sybo-surface/50 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Users className="w-4 h-4 text-sybo-sapphire" />
            <span className="text-sybo-text-muted sybo-mono text-sm">Our Philosophy</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold sybo-heading mb-6">
            <span className="text-sybo-text">The</span>
            <span className="sybo-gradient-text"> Sybo Way</span>
          </h2>
          
          <p className="text-xl text-sybo-text-muted max-w-3xl mx-auto">
            Where medical precision meets industrial innovation. 
            Our unique approach blends health expertise with engineering excellence.
          </p>
        </div>

        {/* Founders Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Aura Gutiérrez */}
          <div className="sybo-glass rounded-2xl p-8 backdrop-blur-xl border border-sybo-border/20 sybo-scale-in">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-sybo-neon/20 rounded-2xl flex items-center justify-center sybo-floating">
                <Heart className="w-10 h-10 text-sybo-neon" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold sybo-heading text-sybo-text mb-2">
                  Aura Gutiérrez
                </h3>
                <p className="text-sybo-sapphire font-semibold mb-4 sybo-mono">
                  Medical Doctor, MSc Clinical Epidemiology
                </p>
                <p className="text-sybo-text-muted mb-4">
                  Expert in R, Shiny, evidence synthesis, automation, and AI for health. 
                  Bridges the gap between clinical research and intelligent systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sybo-neon/10 text-sybo-neon rounded-full text-sm sybo-mono">R & Shiny</span>
                  <span className="px-3 py-1 bg-sybo-neon/10 text-sybo-neon rounded-full text-sm sybo-mono">Clinical AI</span>
                  <span className="px-3 py-1 bg-sybo-neon/10 text-sybo-neon rounded-full text-sm sybo-mono">Evidence Synthesis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Leonardo Cervo */}
          <div className="sybo-glass rounded-2xl p-8 backdrop-blur-xl border border-sybo-border/20 sybo-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-sybo-sapphire/20 rounded-2xl flex items-center justify-center sybo-floating" style={{ animationDelay: '1s' }}>
                <Target className="w-10 h-10 text-sybo-sapphire" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold sybo-heading text-sybo-text mb-2">
                  Leonardo Cervo
                </h3>
                <p className="text-sybo-sapphire font-semibold mb-4 sybo-mono">
                  Metallurgical Engineer, Industrial Strategist
                </p>
                <p className="text-sybo-text-muted mb-4">
                  Automation architect and project intelligence expert in oil & gas. 
                  Transforms complex industrial processes into intelligent systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sybo-sapphire/10 text-sybo-sapphire rounded-full text-sm sybo-mono">Industrial AI</span>
                  <span className="px-3 py-1 bg-sybo-sapphire/10 text-sybo-sapphire rounded-full text-sm sybo-mono">Oil & Gas</span>
                  <span className="px-3 py-1 bg-sybo-sapphire/10 text-sybo-sapphire rounded-full text-sm sybo-mono">Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold sybo-heading text-sybo-text mb-4">
              How We Transform Your Vision
            </h3>
            <p className="text-sybo-text-muted">
              Our proven methodology that blends health + engineering + AI
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-sybo-sapphire via-sybo-neon to-sybo-mineral"></div>

            <div className="space-y-16">
              {timelineSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="sybo-glass rounded-2xl p-6 backdrop-blur-xl border border-sybo-border/20 sybo-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className={`inline-flex items-center space-x-2 mb-4 ${
                        step.color === 'sybo-neon' ? 'text-sybo-neon' :
                        step.color === 'sybo-sapphire' ? 'text-sybo-sapphire' :
                        step.color === 'sybo-mineral' ? 'text-sybo-mineral' :
                        'text-sybo-neon-blue'
                      }`}>
                        {step.icon}
                        <span className="sybo-mono text-sm font-semibold">{step.phase}</span>
                      </div>
                      <h4 className="text-xl font-bold sybo-heading text-sybo-text mb-3">
                        {step.title}
                      </h4>
                      <p className="text-sybo-text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-sybo-black ${
                      step.color === 'sybo-neon' ? 'bg-sybo-neon' :
                      step.color === 'sybo-sapphire' ? 'bg-sybo-sapphire' :
                      step.color === 'sybo-mineral' ? 'bg-sybo-mineral' :
                      'bg-sybo-neon-blue'
                    } sybo-pulse-glow`}>
                      <Clock className="w-5 h-5 text-sybo-black" />
                    </div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Wall */}
        <div className="sybo-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold sybo-heading text-sybo-text mb-4">
              Our Manifesto
            </h3>
            <p className="text-sybo-text-muted">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="sybo-glass rounded-2xl p-8 backdrop-blur-xl border border-sybo-border/20 sybo-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Quote className="w-8 h-8 text-sybo-sapphire mb-6 sybo-floating" />
                <blockquote className="text-sybo-text text-lg mb-4 italic">
                  "{quote.text}"
                </blockquote>
                <cite className="text-sybo-text-muted sybo-mono text-sm">
                  — {quote.author}
                </cite>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 sybo-fade-in">
          <Button className="sybo-btn-primary px-8 py-4 rounded-full text-lg font-semibold group">
            Experience The Sybo Way
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
