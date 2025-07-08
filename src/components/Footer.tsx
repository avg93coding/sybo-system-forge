
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Linkedin, 
  Github, 
  Mail, 
  ExternalLink,
  Heart,
  Zap
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "Healthcare AI", href: "#what-we-do" },
        { name: "Industrial Automation", href: "#what-we-do" },
        { name: "Data Analytics", href: "#what-we-do" },
        { name: "Workflow Automation", href: "#what-we-do" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#sybo-way" },
        { name: "Our Process", href: "#sybo-way" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Technologies",
      links: [
        { name: "R & Shiny", href: "#" },
        { name: "Python & AI", href: "#" },
        { name: "n8n Automation", href: "#" },
        { name: "Clinical Research", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/company/sybo-ai-solution"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/sybo-ai-solution"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:hello@sybosolution.com"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-20 border-t border-sybo-border/20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sybo-sapphire/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-sybo-neon/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-sybo-gradient rounded-lg sybo-pulse-glow flex items-center justify-center">
                <span className="text-white font-bold text-xl sybo-heading">S</span>
              </div>
              <div>
                <div className="text-sybo-text font-bold sybo-heading text-xl">Sybo AI Solution</div>
                <div className="text-sybo-sapphire sybo-mono text-sm">AI System Booster</div>
              </div>
            </div>
            
            <p className="text-sybo-text-muted mb-6 max-w-md">
              We turn messy processes into intelligent systems. With automation, data science, 
              and design thinking, we build the future — one workflow at a time.
            </p>

            <div className="flex items-center space-x-2 text-sybo-neon mb-6">
              <Heart className="w-4 h-4" />
              <span className="sybo-mono text-sm">Made with intelligence & precision</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-sybo-surface/50 rounded-lg flex items-center justify-center text-sybo-text-muted hover:text-sybo-sapphire hover:bg-sybo-sapphire/10 transition-all duration-300 group"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-sybo-text font-semibold sybo-heading mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sybo-text-muted hover:text-sybo-sapphire transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="sybo-glass rounded-2xl p-8 backdrop-blur-xl border border-sybo-border/20 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-sybo-neon" />
                <h3 className="text-xl font-bold sybo-heading text-sybo-text">
                  Stay Ahead of AI Innovation
                </h3>
              </div>
              <p className="text-sybo-text-muted">
                Get insights on the latest in AI automation, healthcare technology, 
                and industrial intelligence.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-sybo-surface/50 border border-sybo-border/30 rounded-full text-sybo-text placeholder:text-sybo-text-muted focus:border-sybo-sapphire focus:outline-none"
              />
              <Button className="sybo-btn-primary px-6 py-3 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-sybo-border/20">
          <div className="text-sybo-text-muted text-sm mb-4 md:mb-0">
            © {currentYear} Sybo AI Solution. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="#" 
              className="text-sybo-text-muted hover:text-sybo-sapphire transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sybo-text-muted hover:text-sybo-sapphire transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a 
              href="https://sybosolution.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sybo-text-muted hover:text-sybo-sapphire transition-colors duration-300 flex items-center space-x-1"
            >
              <span>sybosolution.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Floating Back to Top */}
        <Button
          onClick={() => scrollToSection('hero')}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full sybo-btn-primary p-0 shadow-sybo-premium z-50 group"
        >
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full group-hover:animate-spin"></div>
        </Button>
      </div>
    </footer>
  );
};
