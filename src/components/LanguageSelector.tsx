import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import type { Language } from "../types";

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onClick={() =>
          document.getElementById("language-menu")?.classList.toggle("hidden")
        }
      >
        <Globe className="w-5 h-5" />
      </button>
      <div
        id="language-menu"
        className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg hidden"
      >
        {[
          { code: "fr", label: "Français" },
          { code: "en", label: "English" },
          { code: "ar", label: "العربية" },
        ].map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              changeLanguage(lang.code as Language);
              document.getElementById("language-menu")?.classList.add("hidden");
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};
