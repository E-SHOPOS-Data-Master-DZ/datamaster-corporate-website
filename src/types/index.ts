import { LucideIcon } from "lucide-react";

export type Language = "fr" | "en" | "ar";

export type Theme = "light" | "dark";

export interface Service {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

export interface Product {
  id: string;
  imageUrl: string;
  titleKey: string;
  descriptionKey: string;
}
