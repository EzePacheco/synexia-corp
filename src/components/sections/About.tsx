import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Heart, Users, Shield, Mail, Phone } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function About() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const values = t('about.values.items', { returnObjects: true }) as Array<{title: string; description: string}>;
  const team = t('about.team.members', { returnObjects: true }) as Array<{name: string; role: string}>;

  return (
    <section id="about" className="py-24 bg-synexia-light dark:bg-synexia-navy/50">
      <div className="section-container">
        <SectionTitle
          badge={t('about.badge')}
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          className="mb-16"
        />

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-2xl md:text-3xl font-light text-synexia-navy dark:text-white italic">
            "{t('about.philosophy.quote')}"
          </p>
          <p className="mt-4 text-synexia-cyan font-medium">{t('about.philosophy.title')}</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                  <p className="text-synexia-gray dark:text-gray-400 leading-relaxed mb-4">
                    {t('about.mission.description')}
                  </p>
                  <p className="text-synexia-gray dark:text-gray-400 leading-relaxed">
                    {t('about.mission.extended')}
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
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-synexia-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-synexia-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-synexia-navy dark:text-white mb-2">
                    {t('about.values.title')}
                  </h3>
                  <p className="text-sm text-synexia-gray dark:text-gray-400">
                    {t('about.values.subtitle')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="p-4 bg-synexia-light dark:bg-synexia-navy/30 rounded-xl"
                  >
                    <h4 className="font-semibold text-synexia-navy dark:text-white mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-synexia-gray dark:text-gray-400">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
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
                  <h3 className="text-xl font-bold text-synexia-navy dark:text-white mb-2">
                    {t('about.team.title')}
                  </h3>
                  <p className="text-synexia-gray dark:text-gray-400 text-sm">
                    {t('about.team.description')}
                  </p>
                </div>
              </div>

              {/* Team Grid */}
              <div className="space-y-3">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-synexia-light dark:bg-synexia-navy/30 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-full bg-synexia-cyan/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-synexia-cyan">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-synexia-navy dark:text-white">
                        {member.name}
                      </p>
                      <p className="text-sm text-synexia-gray dark:text-gray-400">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6 p-4 bg-synexia-cyan/5 rounded-xl border border-synexia-cyan/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-synexia-cyan" />
                  <span className="font-medium text-synexia-navy dark:text-white">
                    {t('about.contact.title')}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <a href="tel:+5491157588536" className="flex items-center gap-2 text-synexia-gray dark:text-gray-400 hover:text-synexia-cyan transition-colors">
                    <Phone className="w-4 h-4" />
                    +54 9 11 5758-8536
                  </a>
                  <a href="mailto:synexiatech.dev@gmail.com" className="flex items-center gap-2 text-synexia-gray dark:text-gray-400 hover:text-synexia-cyan transition-colors">
                    <Mail className="w-4 h-4" />
                    synexiatech.dev@gmail.com
                  </a>
                </div>
              </motion.div>
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