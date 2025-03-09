import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Twitter, Facebook, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const AppFooter: React.FC = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/electrimeterpro', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/electrimeterpro', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/electrimeterpro', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/electrimeterpro', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/electrimeterpro', label: 'GitHub' }
  ];
  
  const navLinks = [
    { href: '#features', label: t('nav.features') },
    { href: '#download', label: t('nav.download') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') }
  ];
  
  const legalLinks = [
    { href: '/privacy', label: t('footer.privacy') },
    { href: '/terms', label: t('footer.terms') },
    { href: '/cookies', label: t('footer.cookies') }
  ];
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonne 1: À propos */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">{t('app.name')}</h3>
            <p className="mb-4 text-gray-400 max-w-md">
              {t('app.description')}
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Colonne 2: Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Colonne 3: Contact & Légal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>contact@electrimeterpro.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Avenue de l'Innovation, 75001 Paris, France</span>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold text-white mt-6 mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-6">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">{t('footer.language')}:</span>
                  <LanguageSwitcher />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Section copyright avec barre séparatrice */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('footer.copyright').replace('2025', currentYear.toString())}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.sitemap')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.accessibility')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;