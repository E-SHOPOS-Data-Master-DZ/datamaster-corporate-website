import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Service } from "../types";

interface ExpertiseCardProps {
  service: Service;
  index: number;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  service,
  index,
}) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="text-primary mb-4">
        {React.createElement(service.icon, { size: 48 })}
      </div>
      <h3 className="text-lg font-semibold mb-2">{t(service.titleKey)}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {t(service.descriptionKey)}
      </p>
    </motion.div>
  );
};
