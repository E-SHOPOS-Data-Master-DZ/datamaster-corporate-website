import React from "react";
import { useTranslation } from "react-i18next";
import { Lightbulb, Code, HeadphonesIcon, Shield } from "lucide-react";
import { ExpertiseCard } from "./ExpertiseCard";
import type { Service } from "../types";

const services: Service[] = [
  {
    id: "consultation",
    icon: Lightbulb,
    titleKey: "expertise.consultation.title",
    descriptionKey: "expertise.consultation.description",
  },
  {
    id: "development",
    icon: Code,
    titleKey: "expertise.development.title",
    descriptionKey: "expertise.development.description",
  },
  {
    id: "support",
    icon: HeadphonesIcon,
    titleKey: "expertise.support.title",
    descriptionKey: "expertise.support.description",
  },
  {
    id: "qa",
    icon: Shield,
    titleKey: "expertise.qa.title",
    descriptionKey: "expertise.qa.description",
  },
];

export const Expertise: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="expertise" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("expertise.title")}
        </h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ExpertiseCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
