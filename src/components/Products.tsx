import React from "react";
import { useTranslation } from "react-i18next";
import { ProductCard } from "./ProductCard";
import type { Product } from "../types";

const products: Product[] = [
  {
    id: "gesco",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    titleKey: "products.gesco.title",
    descriptionKey: "products.gesco.description",
  },
  {
    id: "taskBox",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    titleKey: "products.taskBox.title",
    descriptionKey: "products.taskBox.description",
  },
  {
    id: "taskManager",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    titleKey: "products.taskManager.title",
    descriptionKey: "products.taskManager.description",
  },
];

export const Products: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("products.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
