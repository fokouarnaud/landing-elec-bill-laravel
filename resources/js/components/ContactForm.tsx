import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Alert, AlertTitle } from './ui/alert';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Succès
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // Erreur
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Réinitialiser l'état après 5 secondes
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-section-tertiary text-section-tertiary-foreground relative overflow-hidden">
      {/* Formes d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
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
            <MessageSquare className="w-4 h-4 mr-2" />
            {t('contact.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Infos de contact */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card shadow-lg rounded-2xl p-8 border border-primary/10 h-full">
              <h3 className="text-2xl font-bold mb-6">{t('contact.getInTouch')}</h3>
              <p className="text-muted-foreground mb-8">
                {t('contact.getInTouchText')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground mb-1">
                      {t('contact.emailText')}
                    </p>
                    <a href="mailto:contact@electrimeterpro.com" className="text-primary hover:underline">
                      contact@electrimeterpro.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t('contact.phone')}</h4>
                    <p className="text-muted-foreground mb-1">
                      {t('contact.phoneText')}
                    </p>
                    <a href="tel:+33123456789" className="text-primary hover:underline">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t('contact.address')}</h4>
                    <p className="text-muted-foreground mb-1">
                      {t('contact.addressText')}
                    </p>
                    <address className="not-italic">
                      123 Avenue de l'Innovation<br />
                      75001 Paris, France
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h4 className="font-semibold mb-2">{t('contact.officeHours')}</h4>
                <p className="text-muted-foreground">{t('contact.mondayFriday')}: 9:00 - 18:00</p>
                <p className="text-muted-foreground">{t('contact.weekend')}: {t('contact.closed')}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Formulaire de contact */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card shadow-lg rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-bold mb-6">{t('contact.sendMessage')}</h3>
              
              {formStatus === 'success' && (
                <Alert className="mb-6 bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertTitle className="text-green-800 dark:text-green-300">{t('contact.success')}</AlertTitle>
                </Alert>
              )}
              
              {formStatus === 'error' && (
                <Alert className="mb-6 bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  <AlertTitle className="text-red-800 dark:text-red-300">{t('contact.error')}</AlertTitle>
                </Alert>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('contact.name')} <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-card/50 dark:bg-card/10 border-primary/10"
                      placeholder={t('contact.namePlaceholder')}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('contact.email')} <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-card/50 dark:bg-card/10 border-primary/10"
                      placeholder={t('contact.emailPlaceholder')}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t('contact.subject')} <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-card/50 dark:bg-card/10 border-primary/10"
                    placeholder={t('contact.subjectPlaceholder')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.message')} <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-card/50 dark:bg-card/10 border-primary/10"
                    placeholder={t('contact.messagePlaceholder')}
                    required
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="energy"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-6 px-8" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin w-5 h-5 border-2 border-white border-opacity-50 border-t-transparent rounded-full"></div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {t('contact.submit')}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;