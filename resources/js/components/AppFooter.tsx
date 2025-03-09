import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { 
  Twitter, Facebook, Instagram, Linkedin, Github, 
  Mail, Phone, MapPin, ChevronRight, Zap, Heart 
} from 'lucide-react';
import { Button } from './ui/button';

const AppFooter: React.FC = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
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

  const quickLinks = [
    { href: '#', label: t('footer.quickLinks.support') },
    { href: '#', label: t('footer.quickLinks.documentation') },
    { href: '#', label: t('footer.quickLinks.updates') },
    { href: '#', label: t('footer.quickLinks.community') }
  ];
  
  return (
    <footer className="bg-section-primary text-section-primary-foreground">
      {/* Newsletter section */}
      <div className="py-12 bg-section-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">{t('footer.newsletter.title')}</h3>
              <p className="text-muted-foreground">{t('footer.newsletter.description')}</p>
            </div>
            <div className="w-full lg:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="px-4 py-3 rounded-lg border border-border bg-card/50 dark:bg-card/10 min-w-[300px]"
                  aria-label={t('footer.newsletter.placeholder')}
                />
                <Button variant="energy" type="submit">
                  {t('footer.newsletter.button')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">{t('app.name')}</span>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {t('footer.about')}
              </p>
              
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinksTitle')}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3: Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.navigation')}</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 4: Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('footer.contactInfo.email')}</p>
                    <p>contact@electrimeterpro.com</p>
                  </div>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('footer.contactInfo.phone')}</p>
                    <p>+33 1 23 45 67 89</p>
                  </div>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('footer.contactInfo.address')}</p>
                    <p>123 Avenue de l'Innovation<br />75001 Paris, France</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6">
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground">{t('footer.language')}:</span>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright section */}
      <div className="py-6 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              {t('footer.copyright').replace('2025', currentYear.toString())}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground mt-4 md:mt-0 flex items-center">
              {t('footer.madeWith')} <Heart className="h-3 w-3 mx-1 text-red-500" /> {t('footer.byTeam')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;