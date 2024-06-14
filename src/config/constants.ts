import { experimental_AstroContainer } from "astro/container";

export const profileData = {
  names: {
    firstName: "Fabrizio",
    callName: "Fab",
    socialNickname: "fabos",
    lastName: "Aguirre",
  },
  email: "faguirrecruz@hotmail.com",
  mailto: "mailto:faguirrecruz@hotmail.com",
  titles: ["Software Engineer", "Frontend Developer", "Full Stack Developer"],
  socialMedia: {
    linkedin: "https://www.linkedin.com/in/fabaguirre",
    github: "https://github.com/fabaguirre",
  },
};

export const SECTIONS = [
  {
    id: "experience",
    title: "Experience",
    icon: () => import("@icons/Briefcase.astro").then((mod) => mod.default),
    component: () =>
      import("@icons/Briefcase.astro").then((mod) => mod.default),
  },
  {
    id: "projects",
    title: "Projects",
    icon: () => import("@icons/SourceCode.astro").then((mod) => mod.default),
    component: () =>
      import("@icons/Briefcase.astro").then((mod) => mod.default),
  },
  {
    id: "about",
    title: "About",
    icon: () => import("@icons/UserSquare.astro").then((mod) => mod.default),
    component: () =>
      import("@icons/Briefcase.astro").then((mod) => mod.default),
  },
  {
    id: "contact",
    title: "Contact",
    href: profileData.mailto,
    icon: () => import("@icons/Express.astro").then((mod) => mod.default),
    component: () =>
      import("@icons/Briefcase.astro").then((mod) => mod.default),
  },
];
