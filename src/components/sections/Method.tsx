import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Network, Shield, Handshake } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const methods = [
  {
    key: 'integration',
    icon: Network,
  },
  {
    key: 'property',
    icon: Shield,
  },
  {
    key: 'bond',
    icon: Handshake,
  },
];

export function Method() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="method" className="py-24 bg-synexia-light dark:bg-synexia-navy/50">
      <div className="section-container">
        <SectionTitle
          badge={t('method.badge')}
          title={t('method.title')}
          subtitle={t('method.subtitle')}
          className="mb-16"
        />

        <div ref={ref} className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-synexia-cyan/30 to-transparent transform -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {methods.map((method, index) => {
              const Icon = method.icon;

              return (
                <motion.div
                  key={method.key}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-2 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 rounded-full bg-synexia-cyan text-synexia-navy font-bold flex items-center justify-center text-sm z-10">
                    {index + 1}
                  </div>

                  <div className="bg-white dark:bg-synexia-dark rounded-2xl p-8 pt-10 shadow-lg border border-gray-100 dark:border-gray-800 h-full">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-synexia-cyan/20 to-synexia-cyan/5 flex items-center justify-center mb-6"
                    >
                      <Icon className="w-8 h-8 text-synexia-cyan" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-synexia-navy dark:text-white mb-4">
                      {t(`method.${method.key}.title`)}
                    </h3>
                    <p className="text-synexia-gray dark:text-gray-400 leading-relaxed">
                      {t(`method.${method.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}