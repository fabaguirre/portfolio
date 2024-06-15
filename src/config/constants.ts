import { useTranslation } from "@/i18n";

export const PROFILE_DATA = {
  names: {
    firstName: "Fabrizio",
    callName: "Fab",
    socialNickname: "fabos",
    lastName: "Aguirre",
  },
  email: "faguirrecruz@hotmail.com",
  socialMedia: {
    linkedin: {
      url: "https://www.linkedin.com/in/fabaguirre/",
      username: "fabaguirre",
    },
    github: {
      url: "https://github.com/fabaguirre",
      username: "fabaguirre",
    },
    gitlab: {
      url: "https://gitlab.com/fabaguirre",
      username: "fabaguirre",
    },
  },
};

const PAGE_SECTIONS = [
  {
    id: "experiences",
    title: "Experiencia",
    icon: () => import("@icons/Briefcase.astro").then((mod) => mod.default),
    component: () =>
      import("@components/Experience.astro").then((mod) => mod.default),
  },
  {
    id: "projects",
    title: "Proyectos",
    icon: () => import("@icons/SourceCode.astro").then((mod) => mod.default),
    component: () =>
      import("@components/Projects.astro").then((mod) => mod.default),
  },
  {
    id: "about",
    title: "Sobre mí",
    icon: () => import("@icons/UserSquare.astro").then((mod) => mod.default),
    component: () =>
      import("@components/AboutMe.astro").then((mod) => mod.default),
  },
  {
    id: "contact",
    title: "Contacto",
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
