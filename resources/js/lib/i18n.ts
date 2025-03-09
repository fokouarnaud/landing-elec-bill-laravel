import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../translations/en.json';
import frTranslation from '../translations/fr.json';

// Détection de la langue préférée du navigateur
const getUserLanguage = () => {
  const storedLanguage = localStorage.getItem('language');
  if (storedLanguage) return storedLanguage;
  
  const browserLang = navigator.language;
  return browserLang.startsWith('fr') ? 'fr' : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      }
    },
    lng: getUserLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React escape par défaut
    }
  });

export default i18n;