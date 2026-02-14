import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Building2, Ticket, Globe, Check } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const solutions = [
  {
    key: 'management',
    icon: Building2,
  },
  {
    key: 'tickets',
    icon: Ticket,
  },
  {
    key: 'platforms',
    icon: Globe,
  },
];

export function Solutions() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="solutions" className="py-24 bg-white dark:bg-synexia-dark">
      <div className="section-container">
        <SectionTitle
          badge={t('solutions.badge')}
          title={t('solutions.title')}
          subtitle={t('solutions.subtitle')}
          className="mb-16"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const features = t(`solutions.${solution.key}.features`, { returnObjects: true }) as string[];

            return (
              <motion.div
                key={solution.key}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-synexia-light dark:bg-synexia-navy rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-synexia-cyan/10 flex items-center justify-center mb-6 group-hover:bg-synexia-cyan group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-synexia-cyan group-hover:text-synexia-navy transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-synexia-navy dark:text-white mb-4">
                  {t(`solutions.${solution.key}.title`)}
                </h3>
                <p className="text-synexia-gray dark:text-gray-400 mb-6">
                  {t(`solutions.${solution.key}.description`)}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm text-synexia-gray dark:text-gray-400"
                    >
                      <Check className="w-5 h-5 text-synexia-cyan flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-synexia-cyan/0 to-synexia-cyan/0 group-hover:from-synexia-cyan/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}