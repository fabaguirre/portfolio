import { CONTENT_DATA } from "@/data/portfolio";
import type { Paths } from "./types";

const { es, en } = CONTENT_DATA;

export type Translation = typeof es;

export type TranslationPath = Paths<Translation>;

export const locales = {
  es,
  en,
};

export type Locale = keyof typeof locales;
