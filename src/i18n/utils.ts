import {
  locales,
  type Locale,
  type Translation,
  type TranslationPath,
} from "./locales";

function getTranslation<P extends TranslationPath>(
  keypath: P,
  currentLanguage: Locale,
): PathValue<Translation, P> {
  return keypath.split(".").reduce(
    // @ts-ignore
    (acc, key) => acc[key as keyof typeof acc],
    locales[currentLanguage],
  ) as PathValue<Translation, P>;
}

export function useTranslation(currentLocale: Locale): {
  t: <P extends TranslationPath>(keypath: P) => PathValue<Translation, P>;
} {
  return {
    t: (keypath) => getTranslation(keypath, currentLocale),
  };
}
