import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Download, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="py-20 lg:py-28 overflow-hidden bg-section-primary text-section-primary-foreground relative">
      {/* Formes d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-primary/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Texte et CTA */}
          <motion.div 
            className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t('hero.badge')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
              <span className="text-primary"> {t('hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="energy" size="lg" className="group">
                <Download className="mr-1" />
                {t('hero.cta')}
                <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg">
                {t('hero.secondaryCta')}
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-primary/20 flex items-center justify-center text-xs font-medium`}>
                    {i}
                  </div>
                ))}
              </div>
              <div className="ml-4 text-sm">
                <span className="font-semibold text-primary">4.8/5</span> {t('hero.userRating')}
              </div>
            </div>
          </motion.div>
          
          {/* Image de l'application */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Formes décoratives */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg transform rotate-12 blur-sm"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-md"></div>
              
              {/* Effet de brillance derrière l'appareil */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl transform scale-105 blur-xl"></div>
              
              {/* Appareil */}
              <div className="relative bg-card shadow-2xl rounded-3xl p-4 border border-primary/10 transform rotate-1">
                <img 
                  src="/images/app-mockup.jpg" 
                  alt="ElectriMeter Pro App"
                  className="w-full h-auto rounded-2xl shadow-sm"
                />
                
                {/* Badge flottant */}
                <div className="absolute -left-6 top-1/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 transform -rotate-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-xl">↓</span>
                    </div>
                    <div>
                      <div className="text-xs font-medium">{t('hero.savingsLabel')}</div>
                      <div className="text-lg font-bold text-primary">-25%</div>
                    </div>
                  </div>
                </div>
                
                {/* Badge de fonctionnalité */}
                <div className="absolute -right-4 bottom-1/4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 transform rotate-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <span className="text-xl">✓</span>
                    </div>
                    <div className="text-sm font-medium">{t('hero.featureHighlight')}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;