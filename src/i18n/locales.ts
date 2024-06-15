import type { DeepPartial } from "node_modules/astro/dist/type-utils";

const es = {
  parent: "",
};

const en: DeepPartial<typeof es> = {
  parent: "",
};

export type Translation = typeof es;

export type TranslationPath = Paths<Translation>;

export const locales = {
  es,
  en,
};

export type Locale = keyof typeof locales;
