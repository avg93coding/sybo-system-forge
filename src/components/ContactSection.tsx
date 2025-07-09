
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
import { useLanguage } from '@/contexts/LanguageContext';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

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
    
    toast.success(t('contact.success'));
    setFormData({ name: '', email: '', company: '', project: '', message: '' });
    setShowConfirmation(true);
    setIsSubmitting(false);
    
    // Hide confirmation after 5 seconds
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email Us",
      description: "hello@sybosolution.com",
      action: "mailto:hello@sybosolution.com",
      color: "sybo-sapphire"
    },
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "WhatsApp",
      description: "Quick response guaranteed",
      action: "https://wa.me/1234567890",
      color: "sybo-neon"
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Schedule Call",
      description: "30-min strategy session",
      action: "#",
      color: "sybo-mineral"
    }
  ];

  return (
    <section id="contact" className="sybo-section-mobile relative">
      <div className="max-w-7xl mx-auto sybo-mobile-padding">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-20 sybo-fade-in">
          <div className="inline-flex items-center space-x-2 bg-sybo-surface/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-sybo-sapphire" />
            <span className="text-sybo-text-muted sybo-mono text-xs sm:text-sm">Contact Hub</span>
          </div>
          
          <h2 className="sybo-heading-responsive font-bold sybo-heading mb-4 sm:mb-6">
            <span className="text-sybo-text">{t('contact.title')}</span>
            <span className="sybo-gradient-text"> {t('contact.title.highlight')}</span>
          </h2>
          
          <p className="sybo-text-responsive text-sybo-text-muted max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* Enhanced Contact Form */}
          <div className="sybo-scale-in">
            <div className="sybo-glass rounded-xl sm:rounded-2xl sybo-card-mobile backdrop-blur-xl border border-sybo-border/20">
              <h3 className="sybo-heading-responsive font-bold sybo-heading text-sybo-text mb-4 sm:mb-6">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="sybo-mobile-spacing">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Input
                      name="name"
                      placeholder={t('contact.form.name')}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-sybo-surface/50 border-sybo-border/30 text-sybo-text placeholder:text-sybo-text-muted focus:border-sybo-sapphire sybo-touch-target"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder={t('contact.form.email')}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-sybo-surface/50 border-sybo-border/30 text-sybo-text placeholder:text-sybo-text-muted focus:border-sybo-sapphire sybo-touch-target"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Input
                      name="company"
                      placeholder={t('contact.form.company')}
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-sybo-surface/50 border-sybo-border/30 text-sybo-text placeholder:text-sybo-text-muted focus:border-sybo-sapphire sybo-touch-target"
                    />
                  </div>
                  <div>
                    <Input
                      name="project"
                      placeholder={t('contact.form.project')}
                      value={formData.project}
                      onChange={handleInputChange}
                      className="bg-sybo-surface/50 border-sybo-border/30 text-sybo-text placeholder:text-sybo-text-muted focus:border-sybo-sapphire sybo-touch-target"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder={t('contact.form.message')}
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
                  className="sybo-btn-primary w-full sybo-mobile-button rounded-full font-semibold group shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      {t('contact.form.submit')}
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              {/* Enhanced Confirmation Message */}
              {showConfirmation && (
                <div className="mt-6 p-4 sm:p-6 bg-sybo-neon/10 border border-sybo-neon/20 rounded-xl sybo-fade-in">
                  <div className="flex items-center space-x-3 text-sybo-neon">
                    <CheckCircle2 className="w-5 h-5 sybo-floating" />
                    <span className="sybo-mono text-sm">
                      {t('contact.confirmation')}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Contact Methods */}
          <div className="space-y-6 sm:space-y-8 sybo-fade-in" style={{ animationDelay: '0.3s' }}>
            <div>
              <h3 className="sybo-heading-responsive font-bold sybo-heading text-sybo-text mb-6">
                Other Ways to Connect
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="block sybo-glass rounded-2xl sybo-card-mobile backdrop-blur-xl border border-sybo-border/20 hover:border-sybo-sapphire/30 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center sybo-touch-target ${
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

            {/* Enhanced Location Info */}
            <div className="sybo-glass rounded-2xl sybo-card-mobile backdrop-blur-xl border border-sybo-border/20 hover:scale-105 transition-transform duration-300">
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

            {/* Enhanced Response Time */}
            <div className="sybo-glass rounded-2xl sybo-card-mobile backdrop-blur-xl border border-sybo-border/20 hover:scale-105 transition-transform duration-300">
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
