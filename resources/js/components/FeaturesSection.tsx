import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Zap, BarChart3, FileText, Mail, ArrowRight, Check } from 'lucide-react';
import { Button } from './ui/button';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('features.meter.title'),
      description: t('features.meter.description'),
      icon: Zap,
      delay: 0.1
    },
    {
      title: t('features.readings.title'),
      description: t('features.readings.description'),
      icon: BarChart3,
      delay: 0.2
    },
    {
      title: t('features.billing.title'),
      description: t('features.billing.description'),
      icon: FileText,
      delay: 0.3
    },
    {
      title: t('features.communication.title'),
      description: t('features.communication.description'),
      icon: Mail,
      delay: 0.4
    }
  ];

  const mainFeatures = [
    t('features.mainFeatures.tracking'),
    t('features.mainFeatures.reports'),
    t('features.mainFeatures.billing'),
    t('features.mainFeatures.notifications'),
    t('features.mainFeatures.dataExport'),
    t('features.mainFeatures.multiDevice')
  ];

  return (
    <section id="features" className="py-20 bg-section-secondary text-section-secondary-foreground relative overflow-hidden">
      {/* Formes d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="hidden lg:block absolute top-1/4 right-10 w-32 h-32 border border-primary/10 rounded-full"></div>
        <div className="hidden lg:block absolute bottom-1/4 left-1/4 w-64 h-64 border border-primary/5 rounded-full"></div>
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
            {t('features.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Fonctionnalités principales avec image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/app-features.jpg" 
              alt="ElectriMeter Pro Features"
              className="w-full h-auto rounded-2xl shadow-lg border border-primary/10 transform -rotate-1"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">
              {t('features.mainTitle')}
            </h3>

            <p className="text-muted-foreground mb-8">
              {t('features.mainDescription')}
            </p>

            <ul className="space-y-4 mb-8">
              {mainFeatures.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="energy" className="group">
              {t('features.learnMore')}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

     
      </div>
    </section>
  );
};

export default FeaturesSection;