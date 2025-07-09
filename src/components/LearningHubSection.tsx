
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Play, 
  Zap, 
  TrendingUp, 
  Database, 
  Bot, 
  BarChart3,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const LearningHubSection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const courses = [
    {
      id: 1,
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      titleKey: 'hub.courses.r_dashboards.title',
      descriptionKey: 'hub.courses.r_dashboards.description',
      duration: '4h',
      level: 'Intermediate'
    },
    {
      id: 2,
      icon: <Bot className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
      titleKey: 'hub.courses.n8n_automation.title',
      descriptionKey: 'hub.courses.n8n_automation.description',
      duration: '6h',
      level: 'Advanced'
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      titleKey: 'hub.courses.kpi_visualization.title',
      descriptionKey: 'hub.courses.kpi_visualization.description',
      duration: '3h',
      level: 'Beginner'
    },
    {
      id: 4,
      icon: <Database className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      titleKey: 'hub.courses.data_cleaning.title',
      descriptionKey: 'hub.courses.data_cleaning.description',
      duration: '5h',
      level: 'Intermediate'
    },
    {
      id: 5,
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      titleKey: 'hub.courses.ai_workflows.title',
      descriptionKey: 'hub.courses.ai_workflows.description',
      duration: '8h',
      level: 'Expert'
    },
    {
      id: 6,
      icon: <Users className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      titleKey: 'hub.courses.team_collaboration.title',
      descriptionKey: 'hub.courses.team_collaboration.description',
      duration: '2h',
      level: 'Beginner'
    }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      role: "Clinical Data Director",
      content: "hub.testimonials.maria.content",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Carlos Rodriguez",
      role: "Industrial Engineer",
      content: "hub.testimonials.carlos.content",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana López",
      role: "Healthcare Analytics Lead",
      content: "hub.testimonials.ana.content",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    // Add your email submission logic here
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="learning-hub" className="relative py-32 overflow-hidden">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sybo-sapphire/10 rounded-full blur-3xl sybo-floating"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-sybo-neon/8 rounded-full blur-3xl sybo-floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sybo-mineral/5 rounded-full blur-3xl sybo-floating" style={{ animationDelay: '4s' }}></div>
        
        {/* Matrix-like data flow */}
        <div className="absolute inset-0 opacity-20">
          <div className="sybo-data-flow absolute top-20 left-10 w-1 h-20 bg-gradient-to-b from-sybo-neon to-transparent"></div>
          <div className="sybo-data-flow absolute top-40 right-20 w-1 h-16 bg-gradient-to-b from-sybo-sapphire to-transparent" style={{ animationDelay: '1s' }}></div>
          <div className="sybo-data-flow absolute bottom-20 left-1/3 w-1 h-24 bg-gradient-to-b from-sybo-mineral to-transparent" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Banner */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6 sybo-glass rounded-full px-6 py-3 backdrop-blur-xl border border-sybo-border/20">
            <Sparkles className="w-5 h-5 text-sybo-neon" />
            <span className="sybo-mono text-sm text-sybo-text">{t('hub.badge')}</span>
          </div>
          
          <h2 className="sybo-hero-title-responsive sybo-heading text-sybo-text mb-6 sybo-fade-in">
            {t('hub.hero.title')}
          </h2>
          
          <p className="sybo-description-responsive text-sybo-text-muted mb-8 max-w-3xl mx-auto sybo-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hub.hero.description')}
          </p>

          <Button 
            className="sybo-btn-primary px-8 py-4 rounded-full text-lg sybo-pulse-glow group"
            onClick={() => scrollToSection('courses')}
          >
            <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            {t('hub.hero.cta')}
          </Button>
        </div>

        {/* Course Grid */}
        <div id="courses" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="sybo-heading-responsive sybo-heading text-sybo-text mb-4">
              {t('hub.courses.title')}
            </h3>
            <p className="text-sybo-text-muted max-w-2xl mx-auto">
              {t('hub.courses.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                className="sybo-glass backdrop-blur-xl border border-sybo-border/20 sybo-card-mobile hover:border-sybo-sapphire/50 transition-all duration-500 group sybo-fade-in cursor-pointer sybo-holographic"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0 relative overflow-hidden">
                  {/* Course Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={t(course.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sybo-black via-sybo-black/50 to-transparent"></div>
                    
                    {/* Course Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-sybo-sapphire/20 backdrop-blur-xl rounded-lg flex items-center justify-center text-sybo-sapphire group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-sybo-sapphire/80 backdrop-blur-xl rounded-full flex items-center justify-center sybo-pulse-glow">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs sybo-mono bg-sybo-sapphire/20 text-sybo-sapphire px-2 py-1 rounded-full">
                        {course.level}
                      </span>
                      <span className="text-xs text-sybo-text-muted">
                        {course.duration}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold sybo-heading text-sybo-text mb-2 group-hover:text-sybo-sapphire transition-colors duration-300">
                      {t(course.titleKey)}
                    </h4>
                    
                    <p className="text-sm text-sybo-text-muted mb-4">
                      {t(course.descriptionKey)}
                    </p>

                    <div className="flex items-center text-sybo-sapphire group-hover:text-sybo-neon transition-colors duration-300">
                      <span className="text-sm font-medium mr-2">{t('hub.courses.start')}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join the Tribe Section */}
        <div className="mb-20">
          <div className="sybo-glass rounded-3xl p-12 backdrop-blur-xl border border-sybo-border/20 text-center relative overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-sybo-sapphire/10 via-sybo-neon/5 to-sybo-mineral/10 sybo-holographic"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 mb-6">
                <Users className="w-6 h-6 text-sybo-neon" />
                <span className="sybo-mono text-sm text-sybo-neon">{t('hub.tribe.badge')}</span>
              </div>

              <h3 className="sybo-heading-responsive sybo-heading text-sybo-text mb-4">
                {t('hub.tribe.title')}
              </h3>
              
              <p className="text-sybo-text-muted mb-8 max-w-2xl mx-auto">
                {t('hub.tribe.description')}
              </p>

              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('hub.tribe.email_placeholder')}
                  className="flex-1 px-6 py-3 bg-sybo-surface/50 border border-sybo-border/30 rounded-full text-sybo-text placeholder:text-sybo-text-muted focus:border-sybo-sapphire focus:outline-none sybo-mobile-button"
                  required
                />
                <Button type="submit" className="sybo-btn-primary px-8 py-3 rounded-full sybo-mobile-button">
                  {t('hub.tribe.cta')}
                </Button>
              </form>

              <p className="text-xs text-sybo-text-muted mt-4">
                {t('hub.tribe.disclaimer')}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="sybo-heading-responsive sybo-heading text-sybo-text mb-4">
              {t('hub.testimonials.title')}
            </h3>
            <p className="text-sybo-text-muted">
              {t('hub.testimonials.subtitle')}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="sybo-glass rounded-2xl p-8 backdrop-blur-xl border border-sybo-border/20">
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="text-sybo-text hover:text-sybo-sapphire"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex-1 text-center">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <img 
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full border-2 border-sybo-sapphire/50"
                    />
                    <div className="text-left">
                      <h4 className="text-sybo-text font-semibold">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-sybo-text-muted text-sm">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                  
                  <blockquote className="text-sybo-text italic text-lg">
                    "{t(testimonials[currentTestimonial].content)}"
                  </blockquote>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="text-sybo-text hover:text-sybo-sapphire"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Testimonial Dots */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-sybo-sapphire' : 'bg-sybo-text-muted/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline"
              onClick={() => scrollToSection('what-we-do')}
              className="sybo-btn-ghost px-6 py-3 rounded-full"
            >
              {t('hub.footer.back_to_services')}
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="sybo-btn-primary px-6 py-3 rounded-full"
            >
              {t('hub.footer.explore_dashboards')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
