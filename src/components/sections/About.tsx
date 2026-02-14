import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Award, Users, Lightbulb } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function About() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const values = t('about.values.items', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-24 bg-synexia-light dark:bg-synexia-navy/50">
      <div className="section-container">
        <SectionTitle
          badge={t('about.badge')}
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          className="mb-16"
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-synexia-dark rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-synexia-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-synexia-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-synexia-navy dark:text-white mb-3">
                    {t('about.mission.title')}
                  </h3>
                  <p className="text-synexia-gray dark:text-gray-400 leading-relaxed">
                    {t('about.mission.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-synexia-dark rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-synexia-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-synexia-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-synexia-navy dark:text-white mb-3">
                    {t('about.values.title')}
                  </h3>
                  <ul className="space-y-2">
                    {values.map((value, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-synexia-gray dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-synexia-cyan" />
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Team */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white dark:bg-synexia-dark rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-synexia-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-synexia-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-synexia-navy dark:text-white mb-3">
                    {t('about.team.title')}
                  </h3>
                  <p className="text-synexia-gray dark:text-gray-400 leading-relaxed">
                    {t('about.team.description')}
                  </p>
                </div>
              </div>

              {/* Team Grid Placeholder */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="aspect-square rounded-xl bg-gradient-to-br from-synexia-navy to-synexia-dark flex items-center justify-center"
                  >
                    <Users className="w-8 h-8 text-synexia-cyan/50" />
                  </motion.div>
                ))}
              </div>

              {/* Innovation Badge */}
              <div className="mt-6 flex items-center gap-3 p-4 bg-synexia-cyan/5 rounded-xl border border-synexia-cyan/20">
                <Lightbulb className="w-5 h-5 text-synexia-cyan" />
                <span className="text-sm text-synexia-gray dark:text-gray-400">
                  Innovación continua en cada proyecto
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-synexia-cyan/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-synexia-cyan/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}