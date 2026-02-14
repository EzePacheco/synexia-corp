import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../ui/Logo';
import { useTheme } from '../../hooks/useTheme';

const navItems = [
  { key: 'solutions', href: '#solutions' },
  { key: 'method', href: '#method' },
  { key: 'showcase', href: '#showcase' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
];

export function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme, mounted } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-synexia-dark/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Logo size={40} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-synexia-navy dark:text-white hover:text-synexia-cyan transition-colors"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-synexia-navy/5 dark:hover:bg-white/5 transition-colors flex items-center gap-2 text-sm font-medium text-synexia-navy dark:text-white"
            >
              <Globe className="w-4 h-4" />
              {i18n.language === 'es' ? 'ES' : 'EN'}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-synexia-navy/5 dark:hover:bg-white/5 transition-colors"
              aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-synexia-navy" />
              ) : (
                <Sun className="w-5 h-5 text-synexia-cyan" />
              )}
            </button>

            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="px-5 py-2.5 bg-synexia-cyan text-synexia-navy font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.ctaPrimary')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-synexia-navy/5 dark:hover:bg-white/5 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-synexia-navy dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-synexia-navy dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-synexia-dark border-t border-gray-200 dark:border-gray-800"
          >
            <nav className="section-container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-2 text-base font-medium text-synexia-navy dark:text-white hover:text-synexia-cyan transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-sm font-medium text-synexia-navy dark:text-white"
                >
                  <Globe className="w-4 h-4" />
                  {i18n.language === 'es' ? 'Español' : 'English'}
                </button>

                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-sm font-medium text-synexia-navy dark:text-white"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="w-4 h-4" />
                      Modo oscuro
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4" />
                      Modo claro
                    </>
                  )}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}