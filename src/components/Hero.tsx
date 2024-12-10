import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-white dark:from-primary/20 dark:to-gray-900" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-1/4 right-[5%] w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[10%] w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container min-h-screen mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-start mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {t("hero.subtitle")}
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
            {t("hero.cta")}
          </button>
        </motion.div>

        {/* Hero Image */}
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            alt="Data Analytics"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
