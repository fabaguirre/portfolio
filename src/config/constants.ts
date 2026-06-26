import { useTranslation } from "@/i18n";
import { PAGE_SECTION_IDS } from "@/data/portfolio";

const PAGE_SECTIONS = [
  {
    id: PAGE_SECTION_IDS[0],
    icon: () => import("@icons/Briefcase.astro").then((mod) => mod.default),
    component: () =>
      import("@components/Experience.astro").then((mod) => mod.default),
  },
  // {
  //   id: PAGE_SECTION_IDS[1],
  //   icon: () => import("@icons/SourceCode.astro").then((mod) => mod.default),
  //   component: () =>
  //     import("@components/Projects.astro").then((mod) => mod.default),
  // },
  {
    id: PAGE_SECTION_IDS[2],
    icon: () => import("@icons/UserSquare.astro").then((mod) => mod.default),
    component: () =>
      import("@components/AboutMe.astro").then((mod) => mod.default),
  },
  {
    id: PAGE_SECTION_IDS[3],
    icon: () => import("@icons/AddressBook.astro").then((mod) => mod.default),
    component: () =>
      import("@components/Contact.astro").then((mod) => mod.default),
  },
];

export function useSections({ currentLocale }: { currentLocale?: string }) {
  const { t } = useTranslation(currentLocale);
  return PAGE_SECTIONS.map((section) => ({
    ...section,
    // @ts-ignore
    title: t(`${section.id}.title`) as string,
  }));
}
