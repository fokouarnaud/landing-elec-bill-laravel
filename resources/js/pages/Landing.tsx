import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import LandingLayout from '@/layouts/LandingLayout';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AppDownload from '@/components/AppDownload';
import SocialShare from '@/components/SocialShare';
import FAQAccordion from '@/components/FAQAccordion';
import ContactForm from '@/components/ContactForm';

const Landing: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Configurer la direction de la page en fonction de la langue (pour les langues RTL comme l'arabe)
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <>
      <Head title={t('app.name') + ' - ' + t('app.tagline')} />
      
      <LandingLayout>
        <HeroSection />
        <FeaturesSection />
        <AppDownload />
        <SocialShare />
        <FAQAccordion />
        <ContactForm />
      </LandingLayout>
    </>
  );
};

export default Landing;