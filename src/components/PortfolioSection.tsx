
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Play, 
  Code, 
  BarChart3, 
  Activity, 
  Target,
  ArrowRight,
  Maximize2
} from 'lucide-react';

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  metrics: { label: string; value: string; }[];
  icon: React.ReactNode;
  color: string;
  beforeAfter: {
    before: string;
    after: string;
  };
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Clinical Evidence Synthesis Platform",
    category: "Healthcare AI",
    description: "Automated meta-analysis and systematic review platform that accelerates medical research by 10x.",
    technologies: ["R", "Shiny", "GRADE", "PRISMA", "Machine Learning"],
    features: [
      "Automated literature screening",
      "GRADE evidence assessment",
      "Interactive forest plots",
      "Real-time collaboration tools"
    ],
    metrics: [
      { label: "Time Reduction", value: "90%" },
      { label: "Accuracy Improvement", value: "95%" },
      { label: "Researchers Served", value: "500+" }
    ],
    icon: <Activity className="w-8 h-8" />,
    color: "sybo-neon",
    beforeAfter: {
      before: "Manual review taking 6+ months per study",
      after: "Automated pipeline completing in 2-3 weeks"
    }
  },
  {
    title: "Industrial Forecasting Dashboard",
    category: "Oil & Gas Intelligence",
    description: "Monte Carlo simulation platform for strategic decision-making in energy sector investments.",
    technologies: ["Python", "Monte Carlo", "Machine Learning", "Streamlit", "PostgreSQL"],
    features: [
      "Risk assessment modeling",
      "Predictive analytics",
      "Scenario planning",
      "Interactive visualizations"
    ],
    metrics: [
      { label: "Prediction Accuracy", value: "87%" },
      { label: "Decision Speed", value: "5x faster" },
      { label: "Cost Savings", value: "$2.3M" }
    ],
    icon: <Target className="w-8 h-8" />,
    color: "sybo-mineral",
    beforeAfter: {
      before: "Static Excel models with limited scenarios",
      after: "Dynamic AI-powered forecasting system"
    }
  },
  {
    title: "Workflow Automation Suite",
    category: "Process Intelligence",
    description: "n8n-powered automation ecosystem that transforms manual processes into intelligent workflows.",
    technologies: ["n8n", "Python", "REST APIs", "Docker", "MongoDB"],
    features: [
      "Visual workflow builder",
      "Custom integrations",
      "Real-time monitoring",
      "Scalable architecture"
    ],
    metrics: [
      { label: "Processes Automated", value: "150+" },
      { label: "Time Saved", value: "2000 hrs/month" },
      { label: "Error Reduction", value: "99.5%" }
    ],
    icon: <Code className="w-8 h-8" />,
    color: "sybo-sapphire",
    beforeAfter: {
      before: "Manual data entry and processing",
      after: "Fully automated intelligent workflows"
    }
  },
  {
    title: "Real-Time Analytics Platform",
    category: "Business Intelligence",
    description: "Interactive dashboard ecosystem providing real-time insights across multiple data sources.",
    technologies: ["R", "Shiny", "Python", "Dash", "SQL", "Docker"],
    features: [
      "Real-time data processing",
      "Interactive visualizations",
      "Custom KPI tracking",
      "Mobile-responsive design"
    ],
    metrics: [
      { label: "Data Sources", value: "25+" },
      { label: "Daily Users", value: "1000+" },
      { label: "Response Time", value: "<2s" }
    ],
    icon: <BarChart3 className="w-8 h-8" />,
    color: "sybo-neon-blue",
    beforeAfter: {
      before: "Weekly static reports with outdated data",
      after: "Real-time interactive dashboards"
    }
  }
];

export const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 sybo-fade-in">
          <div className="inline-flex items-center space-x-2 bg-sybo-surface/50 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Maximize2 className="w-4 h-4 text-sybo-sapphire" />
            <span className="text-sybo-text-muted sybo-mono text-sm">Showcase Mode</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold sybo-heading mb-6">
            <span className="text-sybo-text">Our</span>
            <span className="sybo-gradient-text"> Portfolio</span>
          </h2>
          
          <p className="text-xl text-sybo-text-muted max-w-3xl mx-auto">
            Real solutions delivering measurable impact across healthcare and industrial sectors.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Portfolio Navigation */}
          <div className="lg:col-span-1 space-y-4">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 border ${
                  selectedItem === index 
                    ? 'sybo-glass border-sybo-sapphire/50 sybo-pulse-glow' 
                    : 'bg-sybo-surface/30 border-sybo-border/20 hover:bg-sybo-surface/50'
                }`}
                onClick={() => setSelectedItem(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    item.color === 'sybo-neon' ? 'bg-sybo-neon/20 text-sybo-neon' :
                    item.color === 'sybo-sapphire' ? 'bg-sybo-sapphire/20 text-sybo-sapphire' :
                    item.color === 'sybo-mineral' ? 'bg-sybo-mineral/20 text-sybo-mineral' :
                    'bg-sybo-neon-blue/20 text-sybo-neon-blue'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sybo-text-muted sybo-mono text-xs mb-1">
                      {item.category}
                    </div>
                    <h3 className="text-sybo-text font-semibold sybo-heading">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Portfolio Detail */}
          <div className="lg:col-span-2">
            <div className="sybo-glass rounded-2xl p-8 backdrop-blur-xl border border-sybo-border/20 sybo-scale-in">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sybo-text-muted sybo-mono text-sm mb-2">
                    {portfolioItems[selectedItem].category}
                  </div>
                  <h3 className="text-2xl font-bold sybo-heading text-sybo-text mb-4">
                    {portfolioItems[selectedItem].title}
                  </h3>
                  <p className="text-sybo-text-muted">
                    {portfolioItems[selectedItem].description}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="sybo-btn-ghost"
                  onClick={() => setShowDemo(!showDemo)}
                >
                  <Play className="w-5 h-5" />
                </Button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {portfolioItems[selectedItem].metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl font-bold sybo-heading ${
                      portfolioItems[selectedItem].color === 'sybo-neon' ? 'text-sybo-neon' :
                      portfolioItems[selectedItem].color === 'sybo-sapphire' ? 'text-sybo-sapphire' :
                      portfolioItems[selectedItem].color === 'sybo-mineral' ? 'text-sybo-mineral' :
                      'text-sybo-neon-blue'
                    }`}>
                      {metric.value}
                    </div>
                    <div className="text-sybo-text-muted text-sm sybo-mono">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sybo-text font-semibold mb-3 sybo-mono text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioItems[selectedItem].technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-sybo-surface/50 rounded-full text-sybo-text text-sm sybo-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Before/After */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-sybo-surface/30 rounded-xl p-4">
                  <h5 className="text-sybo-text-muted sybo-mono text-sm mb-2">Before:</h5>
                  <p className="text-sybo-text text-sm">
                    {portfolioItems[selectedItem].beforeAfter.before}
                  </p>
                </div>
                <div className="bg-sybo-surface/30 rounded-xl p-4">
                  <h5 className={`sybo-mono text-sm mb-2 ${
                    portfolioItems[selectedItem].color === 'sybo-neon' ? 'text-sybo-neon' :
                    portfolioItems[selectedItem].color === 'sybo-sapphire' ? 'text-sybo-sapphire' :
                    portfolioItems[selectedItem].color === 'sybo-mineral' ? 'text-sybo-mineral' :
                    'text-sybo-neon-blue'
                  }`}>After:</h5>
                  <p className="text-sybo-text text-sm">
                    {portfolioItems[selectedItem].beforeAfter.after}
                  </p>
                </div>
              </div>

              {/* Demo Section */}
              {showDemo && (
                <div className="bg-sybo-black/50 rounded-xl p-6 sybo-mono text-sm mb-6 sybo-fade-in">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sybo-text-muted ml-4">
                      {portfolioItems[selectedItem].title} - Live Demo
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sybo-text-muted">
                    <div className="text-sybo-neon">
                      → Loading {portfolioItems[selectedItem].category.toLowerCase()} system...
                    </div>
                    <div>✓ Data sources connected</div>
                    <div>✓ AI models initialized</div>
                    <div>✓ Real-time processing active</div>
                    <div className="text-sybo-sapphire">
                      → System ready for demonstration
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex space-x-4">
                <Button className="sybo-btn-primary flex-1 py-3 rounded-full group">
                  Get Similar Solution
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button className="sybo-btn-ghost px-6 py-3 rounded-full">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center sybo-fade-in">
          <div className="sybo-glass rounded-2xl p-12 backdrop-blur-xl border border-sybo-border/20">
            <h3 className="text-3xl font-bold sybo-heading text-sybo-text mb-4">
              Ready to Build Your Solution?
            </h3>
            <p className="text-sybo-text-muted mb-8 max-w-2xl mx-auto">
              Every project starts with understanding your unique challenges. 
              Let's discuss how we can transform your processes into intelligent systems.
            </p>
            <Button className="sybo-btn-primary px-8 py-4 rounded-full text-lg font-semibold group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
