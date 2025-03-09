import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Share2, ArrowRight, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaXTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { Button } from './ui/button';

const SocialShare: React.FC = () => {
  const { t } = useTranslation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const appUrl = 'https://electrimeterpro.com';
  const appName = t('app.name');
  const appDescription = t('app.description');
  
  const shareLinks = [
    {
      name: 'X',
      icon: FaXTwitter,
      url: `https://x.com/intent/tweet?text=${encodeURIComponent(appDescription)}&url=${encodeURIComponent(appUrl)}`,
      color: 'bg-black hover:bg-black/90'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appUrl)}`,
      color: 'bg-[#1877F2] hover:bg-[#1877F2]/90'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(appUrl)}`,
      color: 'bg-[#0A66C2] hover:bg-[#0A66C2]/90'
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      text: t('social.testimonials.1.text'),
      author: t('social.testimonials.1.author'),
      position: t('social.testimonials.1.position'),
      image: '/images/testimonials/avatar-1.jpg',
      rating: 5
    },
    {
      id: 2,
      text: t('social.testimonials.2.text'),
      author: t('social.testimonials.2.author'),
      position: t('social.testimonials.2.position'),
      image: '/images/testimonials/avatar-2.jpg',
      rating: 5
    },
    {
      id: 3,
      text: t('social.testimonials.3.text'),
      author: t('social.testimonials.3.author'),
      position: t('social.testimonials.3.position'),
      image: '/images/testimonials/avatar-3.jpg',
      rating: 4
    }
  ];
  
  // Fonction de partage native (mobile)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: appName,
          text: appDescription,
          url: appUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };
  
  return (
    <section id="social" className="py-20 bg-section-primary text-section-primary-foreground relative overflow-hidden">
      {/* Formes d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbC1vcGFjaXR5PSIwLjAyIiBmaWxsPSJjdXJyZW50Q29sb3IiIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section des témoignages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          {/* En-tête et texte */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Quote className="w-4 h-4 mr-2" />
              {t('social.badge')}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('social.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              {t('social.description')}
            </p>
            
            <div className="hidden lg:block">
              <Button 
                variant="energy" 
                className="group"
                onClick={() => {
                  window.location.href = '#download';
                }}
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
          
          {/* Carrousel de témoignages */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Témoignage courant */}
              <div className="bg-card shadow-lg rounded-2xl p-8 border border-primary/10 relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                
                <div className="mb-6">
                  {/* Étoiles */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[activeTestimonial].rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-300 fill-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg italic mb-6">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>
                </div>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          testimonials[activeTestimonial].author
                        )}&background=random`;
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg">
                      {testimonials[activeTestimonial].author}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[activeTestimonial].position}
                    </div>
                  </div>
                </div>
                
                {/* Navigation du carrousel */}
                <div className="absolute bottom-8 right-8 flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-8 h-8"
                    onClick={() => {
                      const newIndex = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
                      setActiveTestimonial(newIndex);
                    }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-8 h-8"
                    onClick={() => {
                      const newIndex = (activeTestimonial + 1) % testimonials.length;
                      setActiveTestimonial(newIndex);
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Indicateurs de page */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeTestimonial
                        ? 'bg-primary w-8'
                        : 'bg-primary/20'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="lg:hidden mt-8 flex justify-center">
              <Button 
                variant="energy" 
                className="group"
                onClick={() => {
                  window.location.href = '#download';
                }}
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Section de partage social */}
        <motion.div
          className="border-t border-primary/10 pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              {t('social.shareTitle')}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('social.shareDescription')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {/* Bouton de partage natif (mobile) */}
            {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Button 
                  onClick={handleNativeShare}
                  className="flex items-center gap-2 shadow-md px-6 py-5 rounded-lg"
                  size="lg"
                >
                  <Share2 className="w-5 h-5" />
                  {t('social.share')}
                </Button>
              </motion.div>
            )}
            
            {/* Boutons de partage social */}
            {shareLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <Button
                  onClick={() => window.open(link.url, '_blank')}
                  className={`flex items-center gap-2 text-white shadow-md px-6 py-5 rounded-lg ${link.color}`}
                  size="lg"
                >
                  <link.icon className="w-5 h-5" />
                  {t('social.shareOn')} {link.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialShare;