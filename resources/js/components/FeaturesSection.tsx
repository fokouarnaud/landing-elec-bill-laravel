
// FeaturesSection.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureCard';
import { Zap, BarChart3, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('features.meter.title'),
      description: t('features.meter.description'),
      icon: Zap
    },
    {
      title: t('features.readings.title'),
      description: t('features.readings.description'),
      icon: BarChart3
    },
    {
      title: t('features.billing.title'),
      description: t('features.billing.description'),
      icon: FileText
    },
    {
      title: t('features.communication.title'),
      description: t('features.communication.description'),
      icon: Mail
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('features.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;