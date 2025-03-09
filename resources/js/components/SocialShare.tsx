import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Share2, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { FaXTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { Button } from './ui/button';
import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

const SocialShare: React.FC = () => {
  const { t } = useTranslation();
  
  const appUrl = 'https://electrimeterpro.com'; // Remplacer par votre URL réelle
  const appName = t('app.name');
  const appDescription = t('app.description');
  
  // État pour le carrousel de témoignages
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
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
  
  // Témoignages d'utilisateurs
  const testimonials = [
    {
      id: 1,
      text: t('social.testimonials.1.text'),
      author: t('social.testimonials.1.author'),
      position: t('social.testimonials.1.position'),
      avatar: '/images/avatars/avatar-1.jpg',
      rating: 5
    },
    {
      id: 2,
      text: t('social.testimonials.2.text'),
      author: t('social.testimonials.2.author'),
      position: t('social.testimonials.2.position'),
      avatar: '/images/avatars/avatar-2.jpg',
      rating: 5
    },
    {
      id: 3,
      text: t('social.testimonials.3.text'),
      author: t('social.testimonials.3.author'),
      position: t('social.testimonials.3.position'),
      avatar: '/images/avatars/avatar-3.jpg',
      rating: 4
    }
  ];
  
  // Navigation du carrousel
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);
  
  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);
  
  // Auto-rotation du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);
  
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
    <section id="social" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('social.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          
          <p className="text-gray-600 dark:text-gray-300 mt-6 mb-10 max-w-2xl mx-auto">
            {t('social.description')}
          </p>
          
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
                  {link.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Carrousel de témoignages */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Contrôles du carrousel */}
            <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 bg-white/90 dark:bg-gray-800/90 shadow-md hover:bg-white dark:hover:bg-gray-800"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10">
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 bg-white/90 dark:bg-gray-800/90 shadow-md hover:bg-white dark:hover:bg-gray-800"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Conteneur du carrousel */}
            <div className="overflow-hidden relative rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-8 py-10 sm:px-12"
                  >
                    {/* Étoiles */}
                    <div className="flex mb-6 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "w-5 h-5 fill-current", 
                            i < testimonial.rating ? "text-amber-400" : "text-gray-300"
                          )} 
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    
                    {/* Citation */}
                    <blockquote>
                      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-8">
                        "{testimonial.text}"
                      </p>
                      
                      <footer className="flex items-center">
                        <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback si l'image n'existe pas
                              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='15' r='8' fill='%23CBD5E0'/%3E%3Cpath d='M2 35a18 18 0 0 1 36 0H2Z' fill='%23CBD5E0'/%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.position}
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicateurs de pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors",
                    index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  )}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialShare;