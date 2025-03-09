import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';
import { HelpCircle, ChevronRight } from 'lucide-react';

const FAQAccordion: React.FC = () => {
  const { t } = useTranslation();

  // Liste des questions basée sur nos traductions
  const faqItems = [
    {
      question: t('faq.questions.q1'),
      answer: t('faq.questions.a1'),
    },
    {
      question: t('faq.questions.q2'),
      answer: t('faq.questions.a2'),
    },
    {
      question: t('faq.questions.q3'),
      answer: t('faq.questions.a3'),
    },
    {
      question: t('faq.questions.q4'),
      answer: t('faq.questions.a4'),
    },
    {
      question: t('faq.questions.q5'),
      answer: t('faq.questions.a5'),
    }
  ];

  return (
    <section id="faq" className="py-20 bg-section-primary text-section-primary-foreground relative overflow-hidden">
      {/* Formes d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
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
            <HelpCircle className="w-4 h-4 mr-2" />
            {t('faq.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Image décorative */}
          <motion.div 
            className="hidden lg:block lg:col-span-2 relative" 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-3xl transform rotate-3 blur-xl"></div>
                <img 
                  src="/images/faq-illustration.png" 
                  alt="Support illustration"
                  className="relative z-10 w-full max-w-md mx-auto"
                />
              </div>
              <div className="mt-8 bg-card shadow-lg rounded-xl p-6 border border-primary/10 max-w-md mx-auto">
                <h3 className="text-xl font-bold mb-4">{t('faq.needHelp')}</h3>
                <p className="text-muted-foreground mb-6">{t('faq.needHelpText')}</p>
                <Button variant="energy" className="w-full group">
                  {t('faq.contactSupport')}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-card rounded-xl overflow-hidden shadow-sm border border-primary/10"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-medium hover:bg-primary/5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-muted-foreground border-t border-primary/10">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* CTA */}
            <motion.div 
              className="mt-10 text-center lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-4">{t('faq.moreQuestions')}</p>
              <Button variant="outline" className="group">
                {t('faq.browseAll')}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;