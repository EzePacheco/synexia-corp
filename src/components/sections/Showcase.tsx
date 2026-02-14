import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, ShoppingCart, Headphones } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const showcaseItems = [
  {
    id: '1',
    title: 'Panel Administrativo ERP',
    category: 'Sistemas de Gestión',
    icon: LayoutDashboard,
  },
  {
    id: '2',
    title: 'Dashboard E-commerce',
    category: 'Plataformas Web',
    icon: ShoppingCart,
  },
  {
    id: '3',
    title: 'Sistema de Tickets',
    category: 'Atención al Cliente',
    icon: Headphones,
  },
];

export function Showcase() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="showcase" className="py-24 bg-white dark:bg-synexia-dark">
      <div className="section-container">
        <SectionTitle
          badge={t('showcase.badge')}
          title={t('showcase.title')}
          subtitle={t('showcase.subtitle')}
          className="mb-16"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-synexia-navy to-synexia-dark border border-gray-800 mb-4">
                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-20 h-20 rounded-2xl bg-synexia-cyan/10 flex items-center justify-center mb-4"
                    >
                      <Icon className="w-10 h-10 text-synexia-cyan" />
                    </motion.div>
                    <p className="text-synexia-cyan font-semibold mb-2">
                      {t('showcase.placeholder')}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {t('showcase.comingSoon')}
                    </p>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-synexia-cyan/0 group-hover:bg-synexia-cyan/10 transition-all duration-300" />

                  {/* Browser Chrome */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                </div>

                {/* Caption */}
                <div className="px-2">
                  <span className="text-xs font-medium text-synexia-cyan uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-synexia-navy dark:text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}