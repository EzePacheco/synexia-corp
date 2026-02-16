import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Send, Loader2 } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import emailjs from '@emailjs/browser';

export function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = t('contact.form.projectTypes', { returnObjects: true }) as Record<string, string>;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-synexia-dark">
      <div className="section-container">
        <SectionTitle
          badge={t('contact.badge')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          className="mb-16"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-synexia-light dark:bg-synexia-navy rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-synexia-navy dark:text-white mb-2">
                  {t('contact.form.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-synexia-dark border border-gray-200 dark:border-gray-700 text-synexia-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-synexia-cyan focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-synexia-navy dark:text-white mb-2">
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-synexia-dark border border-gray-200 dark:border-gray-700 text-synexia-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-synexia-cyan focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-synexia-navy dark:text-white mb-2">
                  {t('contact.form.company')} *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-synexia-dark border border-gray-200 dark:border-gray-700 text-synexia-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-synexia-cyan focus:border-transparent transition-all"
                  placeholder="Company S.A."
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-synexia-navy dark:text-white mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-synexia-dark border border-gray-200 dark:border-gray-700 text-synexia-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-synexia-cyan focus:border-transparent transition-all"
                  placeholder="+54 9 11 5758-8536"
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="mb-6">
              <label htmlFor="projectType" className="block text-sm font-medium text-synexia-navy dark:text-white mb-2">
                {t('contact.form.projectType')} *
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-synexia-dark border border-gray-200 dark:border-gray-700 text-synexia-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-synexia-cyan focus:border-transparent transition-all"
              >
                <option value="">{t('contact.form.projectTypes.other')}</option>
                {Object.entries(projectTypes).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-synexia-navy dark:text-white mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-synexia-dark border border-gray-200 dark:border-gray-700 text-synexia-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-synexia-cyan focus:border-transparent transition-all resize-none"
                placeholder="Describa su proyecto..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  {t('contact.form.sending')}
                </>
              ) : (
                <>
                  {t('contact.form.submit')}
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-green-600 dark:text-green-400"
              >
                {t('contact.form.success')}
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-red-600 dark:text-red-400"
              >
                {t('contact.form.error')}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}