import {
  locales,
  type Locale,
  type Translation,
  type TranslationPath,
} from "./locales";
import merge from "deepmerge";

function getLocale(locale: Locale): Translation {
  return merge(locales.es, locales[locale], {
    isMergeableObject: (val) => typeof val === "object" && !Array.isArray(val),
  }) as Translation;
}

function getTranslation<P extends TranslationPath>(
  keypath: P,
  currentLanguage: Locale,
): PathValue<Translation, P> {
  const locale = getLocale(currentLanguage);
  return keypath.split(".").reduce(
    // @ts-ignore
    (acc, key) => acc[key as keyof typeof acc],
    locale,
  ) as PathValue<Translation, P>;
}

export function useTranslation(currentLocale: string = "es"): {
  t: <P extends TranslationPath>(keypath: P) => PathValue<Translation, P>;
} {
  return {
    t: (keypath) => getTranslation(keypath, currentLocale as Locale),
  };
}
