import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { LanguageSelector } from "./LanguageSelector";
import { useTheme } from "../hooks/useTheme";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Data Master" className="w-10 h-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {["home", "expertise", "products"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            {["home", "expertise", "products"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};
