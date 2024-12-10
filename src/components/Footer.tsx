import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Data Master</h3>
            <p className="text-gray-400">{t("hero.subtitle")}</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-primary transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {["home", "expertise", "products", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="hover:text-primary transition"
                  >
                    {t(`nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:213552194686" className="hover:text-primary">
                  +213 552 19 46 86
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contact@datamasterai.com"
                  className="hover:text-primary"
                >
                  contact@datamasterai.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>
                  N°547, El Kiffane Central, Residence Nassima - Tlemcen
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("footer.newsletter")}
            </h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={t("footer.emailInput")}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition"
              >
                {t("footer.subscribeBtn")}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p>
            &copy; {currentYear} Data Master. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};
