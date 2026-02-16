import { useTranslation } from 'react-i18next';
import { Logo } from '../ui/Logo';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-synexia-navy text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo size={50} showSlogan className="mb-6" />
            <p className="text-gray-400 max-w-md mb-6">
              Transformamos organizaciones mediante sistemas de software que integran visiones y fortalecen vínculos. Su éxito es nuestra métrica de desempeño.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-synexia-cyan hover:text-synexia-navy transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-synexia-cyan hover:text-synexia-navy transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('nav.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>synexiatech.dev@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+54 9 11 5758-8536</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#solutions"
                  className="text-gray-400 hover:text-synexia-cyan transition-colors"
                >
                  {t('nav.solutions')}
                </a>
              </li>
              <li>
                <a
                  href="#method"
                  className="text-gray-400 hover:text-synexia-cyan transition-colors"
                >
                  {t('nav.method')}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-synexia-cyan transition-colors"
                >
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-synexia-cyan transition-colors"
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Synexia Soluciones Tecnológicas. {t('footer.rights')}.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-synexia-cyan transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-synexia-cyan transition-colors"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}