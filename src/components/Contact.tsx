import { useLanguage } from '@/context/LanguageContext';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import React, { useRef, useState } from 'react';

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission

    emailjs
      .sendForm(
        'service_dwwv50c',
        'template_hag5ix3',
        form.current,
        'drMX4-RJeLIeZStQ1'
      )
      .then(
        (result) => {
          setSubmitSuccess(true);
          console.log('SUCCESS!', result.text);
          // alert('Message envoyé !');
          // e.target.reset();
        },
        (error) => {
          setSubmitSuccess(false);
          console.log('FAILED...', error.text);
          // alert('Erreur lors de l’envoi.');
        }
      ).finally(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      });

  };

  return (
    <section id="contact" className="min-h-[calc(100vh-72px)] flex items-center relative bg-gradient-to-br from-background to-muted">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('contact', 'title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-8 text-foreground/80">
              {t('contact', 'description')}
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-accent mr-4" size={20} />
                <span className="text-foreground">thibautscholaert@gmail.com</span>
              </div>

              {/* <div className="flex items-center">
                <Phone className="text-accent mr-4" size={20} />
                <span className="text-foreground">(123) 456-7890</span>
              </div> */}

              <div className="flex items-center">
                <MapPin className="text-accent mr-4" size={20} />
                <span className="text-foreground">{t('contact', 'location')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-foreground/80">
                  {t('contact', 'nameLabel')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                  placeholder={t('contact', 'namePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-foreground/80">
                  {t('contact', 'emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                  placeholder={t('contact', 'emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-foreground/80">
                  {t('contact', 'messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                  placeholder={t('contact', 'messagePlaceholder')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  t('contact', 'sending')
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    {t('contact', 'sendButton')}
                  </>
                )}
              </motion.button>

              {submitSuccess && (
                <motion.div
                  className="bg-accent/20 border border-accent text-accent px-4 py-3 rounded"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {t('contact', 'successMessage')}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
