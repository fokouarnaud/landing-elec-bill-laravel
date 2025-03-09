import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { AppStoreBadge, PlayStoreBadge } from './StoreBadges';
import { QrCode, ArrowDown, Star, Shield, Smartphone, Award } from 'lucide-react';

const AppDownload: React.FC = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Star,
      title: t('download.benefits.quality.title'),
      description: t('download.benefits.quality.description'),
    },
    {
      icon: Shield,
      title: t('download.benefits.security.title'),
      description: t('download.benefits.security.description'),
    },
    {
      icon: Smartphone,
      title: t('download.benefits.compatibility.title'),
      description: t('download.benefits.compatibility.description'),
    },
    {
      icon: Award,
      title: t('download.benefits.support.title'),
      description: t('download.benefits.support.description'),
    },
  ];

  return (
    <section id="download" className="py-20 bg-section-tertiary text-section-tertiary-foreground relative overflow-hidden">
      {/* Formes d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbC1vcGFjaXR5PSIwLjAyIiBmaWxsPSJjdXJyZW50Q29sb3IiIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête de section */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <ArrowDown className="w-4 h-4 mr-2" />
            {t('download.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('download.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('download.subtitle')}
          </p>
        </motion.div>

        {/* Téléchargement et mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">
              {t('download.getTitle')}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t('download.getDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <AppStoreBadge href="https://apps.apple.com/app/your-app-id" />
              <PlayStoreBadge href="https://play.google.com/store/apps/details?id=com.yourapp.id" />
            </div>

            <div className="p-4 bg-card rounded-lg border border-primary/10 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <QrCode className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t('download.scanQR')}</h4>
                <p className="text-sm text-muted-foreground">{t('download.scanDescription')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-xs">
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-3xl transform scale-105 blur-xl"></div>
              
              {/* Téléphones */}
              <div className="relative">
                <img 
                  src="/images/app-screenshot-1.jpg" 
                  alt="ElectriMeter Pro Screenshot 1"
                  className="w-full h-auto rounded-3xl shadow-lg border border-primary/10 transform rotate-3"
                />
                <img 
                  src="/images/app-screenshot-2.jpg" 
                  alt="ElectriMeter Pro Screenshot 2"
                  className="absolute -bottom-20 -left-16 w-3/4 h-auto rounded-3xl shadow-lg border border-primary/10 transform -rotate-6"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Avantages */}
        <div className="pt-16 border-t border-primary/10">
          <motion.h3 
            className="text-center text-2xl font-bold mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('download.benefitsTitle')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;