
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin,
  Zap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', company: '', project: '', message: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "hello@sybosolution.com",
      action: "mailto:hello@sybosolution.com",
      color: "sybo-sapphire"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick response guaranteed",
      action: "https://wa.me/1234567890",
      color: "sybo-neon"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Schedule Call",
      description: "30-min strategy session",
      action: "#",
      color: "sybo-mineral"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 sybo-fade-in">
          <div className="inline-flex items-center space-x-2 bg-sybo-surface/50 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Zap className="w-4 h-4 text-sybo-sapphire" />
            <span className="text-sybo-text-muted sybo-mono text-sm">Contact Hub</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold sybo-heading mb-6">
            <span className="text-sybo-text">Let's Build</span>
            <span className="sybo-gradient-text"> Together</span>
          </h2>
          
          <p className="text-xl text-sybo-text-muted max-w-3xl mx-auto">
            Your system is already thinking. We just need to bring it to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="sybo-scale-in">
            <div className="sybo-glass rounded-2xl p-8 backdrop-blur-xl border border-sybo-border/20">
              <h3 className="text-2xl font-bold sybo-heading text-sybo-text mb-6">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-sybo-surface/50 border-sybo-border/30 text-sybo-text placeholder:text-sybo-text-muted focus:border-sybo-sapphire"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-sybo-surface/50 border-sybo-border/30 text-sybo-text placeholder:text-sybo-text-muted focus:border-sybo-sapphire"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-sybo-surface/50 border-sybo-border/30 text-sybo-text placeholder:text-sybo-text-muted focus:border-sybo-sapphire"
                    />
                  </div>
                  <div>
                    <Input
                      name="project"
                      placeholder="Project Type"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="bg-sybo-surface/50 border-sybo-border/30 text-sybo-text placeholder:text-sybo-text-muted focus:border-sybo-sapphire"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your vision, challenges, and what you want to automate..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-sybo-surface/50 border-sybo-border/30 text-sybo-text placeholder:text-sybo-text-muted focus:border-sybo-sapphire resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="sybo-btn-primary w-full py-4 rounded-full font-semibold group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              {/* Confirmation Message */}
              <div className="mt-6 p-4 bg-sybo-neon/10 border border-sybo-neon/20 rounded-xl">
                <div className="flex items-center space-x-2 text-sybo-neon">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="sybo-mono text-sm">
                    We got your message. Your system is already thinking.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-8 sybo-fade-in" style={{ animationDelay: '0.3s' }}>
            <div>
              <h3 className="text-2xl font-bold sybo-heading text-sybo-text mb-6">
                Other Ways to Connect
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="block sybo-glass rounded-2xl p-6 backdrop-blur-xl border border-sybo-border/20 hover:border-sybo-sapphire/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        method.color === 'sybo-sapphire' ? 'bg-sybo-sapphire/20 text-sybo-sapphire' :
                        method.color === 'sybo-neon' ? 'bg-sybo-neon/20 text-sybo-neon' :
                        'bg-sybo-mineral/20 text-sybo-mineral'
                      }`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sybo-text font-semibold sybo-heading">
                          {method.title}
                        </h4>
                        <p className="text-sybo-text-muted text-sm">
                          {method.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-sybo-text-muted group-hover:text-sybo-sapphire group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location Info */}
            <div className="sybo-glass rounded-2xl p-6 backdrop-blur-xl border border-sybo-border/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sybo-sapphire/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-sybo-sapphire" />
                </div>
                <div>
                  <h4 className="text-sybo-text font-semibold sybo-heading mb-2">
                    Global Reach, Personal Touch
                  </h4>
                  <p className="text-sybo-text-muted text-sm mb-4">
                    We work with clients worldwide, bringing local expertise with global perspective.
                  </p>
                  <div className="flex items-center space-x-2 text-sybo-sapphire sybo-mono text-sm">
                    <div className="w-2 h-2 bg-sybo-sapphire rounded-full animate-pulse"></div>
                    <span>Available for projects globally</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="sybo-glass rounded-2xl p-6 backdrop-blur-xl border border-sybo-border/20">
              <h4 className="text-sybo-text font-semibold sybo-heading mb-4">
                What Happens Next?
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-sybo-neon/20 rounded-full flex items-center justify-center">
                    <span className="text-sybo-neon sybo-mono text-xs">1</span>
                  </div>
                  <span className="text-sybo-text-muted text-sm">
                    We respond within 24 hours
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-sybo-sapphire/20 rounded-full flex items-center justify-center">
                    <span className="text-sybo-sapphire sybo-mono text-xs">2</span>
                  </div>
                  <span className="text-sybo-text-muted text-sm">
                    30-min discovery call scheduled
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-sybo-mineral/20 rounded-full flex items-center justify-center">
                    <span className="text-sybo-mineral sybo-mono text-xs">3</span>
                  </div>
                  <span className="text-sybo-text-muted text-sm">
                    Custom proposal delivered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
