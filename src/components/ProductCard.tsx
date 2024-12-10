import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={t(product.titleKey)}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 dark:from-black/60 to-transparent" />
      </div>
      <div className="relative px-4 py-6">
        <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
          {t(product.titleKey)}
        </h3>
        <p
          className="text-black/80 dark:text-gray-400 -200 mb-4 line-clamp-1"
          title={t(product.descriptionKey)}
        >
          {t(product.descriptionKey)}
        </p>
        <button className="inline-flex items-center mt-auto px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-300">
          {t("products.learnMore")}
        </button>
      </div>
    </motion.div>
  );
};
