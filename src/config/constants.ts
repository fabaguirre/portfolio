export const PROFILE_DATA = {
  names: {
    firstName: "Fabrizio",
    callName: "Fab",
    socialNickname: "fabos",
    lastName: "Aguirre",
  },
  email: "faguirrecruz@hotmail.com",
  titles: [
    "Software Engineer",
    // "Frontend Developer",
    "Full Stack Developer",
  ],
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

export const PAGE_SECTIONS = [
  {
    id: "experience",
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
