export const PROFILE_DATA = {
  names: {
    firstName: "Fabrizio",
    callName: "Fab",
    socialNickname: "fabos",
    lastName: "Aguirre",
  },
  email: "me@fabos.dev",
  phone: "+51 968 653 101",
  yearsExperience: 6,
  location: {
    country: "Peru",
    emoji: "🇵🇪",
  },
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
} as const;

const {
  names: { firstName, lastName, callName },
  yearsExperience,
  location,
} = PROFILE_DATA;

const fullName = `${firstName} ${lastName}`;

export const PAGE_SECTION_IDS = [
  "experiences",
  "projects",
  "about",
  "contact",
] as const;

export const EXPERIENCES_DATA = [
  {
    company: "Oka",
    companyIcon: "oka",
    companyUrl: "https://www.oka.com.pe/",
    type: "remote",
    startDate: "2025-07-01",
    endDate: "2025-07-01",
    isCurrent: true,
    content: {
      es: {
        title: "Líder Técnico",
        description: [
          "Lidero un equipo backend responsable de plataformas críticas del negocio, convirtiendo requerimientos funcionales en soluciones técnicas escalables.",
          "Defino arquitecturas, estándares de desarrollo y decisiones técnicas, coordinando la entrega junto a Developers, QA, DevOps y Product.",
        ],
      },
      en: {
        title: "Tech Lead",
        description: [
          "Leading a backend team responsible for business-critical platforms, turning product requirements into scalable technical solutions.",
          "Defining architecture, engineering standards, and technical decisions while coordinating delivery across Developers, QA, DevOps, and Product.",
        ],
      },
    },
  },
  {
    company: "Encora Inc.",
    companyIcon: "encora",
    companyUrl: "https://www.encora.com/",
    type: "remote",
    startDate: "2024-09-01",
    endDate: "2025-07-01",
    content: {
      es: {
        title: "Desarrollador Backend",
        description: [
          "Desarrollé servicios backend para el sector financiero utilizando Golang y Google Cloud Platform.",
          "Participé en la modernización de sistemas bancarios, mejorando rendimiento, seguridad y escalabilidad.",
        ],
      },
      en: {
        title: "Backend Developer",
        description: [
          "Built backend services for the financial industry using Golang and Google Cloud Platform.",
          "Contributed to modernizing banking systems, improving performance, security, and scalability.",
        ],
      },
    },
  },
  {
    company: "FractalUp",
    companyIcon: "fractalup",
    companyUrl: "https://www.info.fractalup.com/",
    type: "remote",
    startDate: "2021-02-01",
    endDate: "2024-02-01",
    content: {
      es: {
        title: "Líder Técnico",
        description: [
          "Crecí desde Desarrollador Full Stack hasta Líder Técnico, liderando la evolución técnica del producto y nuevas funcionalidades.",
          "Participé en el diseño de arquitectura, liderazgo del equipo y desarrollo full stack con Vue, TypeScript y GraphQL.",
        ],
      },
      en: {
        title: "Tech Lead",
        description: [
          "Progressed from Full Stack Developer to Tech Lead, leading the product's technical evolution and the development of new features.",
          "Worked on architecture, team leadership, and full-stack development using Vue, TypeScript, and GraphQL.",
        ],
      },
    },
  },
] as const;
export const PROJECTS_DATA = [
  {
    link: "https://fractalup.com/",
    imageDirectory: "fractalup",
    technologies: ["vue", "typescript", "graphql"],
    content: {
      es: {
        title: "FractalUp | All-in-One Metaverse",
        description:
          "FractalUp es una plataforma de red todo en uno que ofrece SuperApps autoconfigurables. Optimiza el compromiso y la productividad en diversos sectores, como marketing y formación, creando comunidades online activas y aumentando la fidelización sin necesidad de código.",
      },
      en: {
        title: "FractalUp | All-in-One Metaverse",
        description:
          "FractalUp is an all-in-one network platform that offers self-configurable SuperApps. It optimizes engagement and productivity in various sectors, such as marketing and training, creating active online communities and increasing loyalty without the need for code.",
      },
    },
  },
  {
    imageDirectory: "med_appt",
    technologies: [
      "vue",
      "typescript",
      "node",
      "express",
      "aws",
      "mysql",
      "prisma",
    ],
    content: {
      es: {
        title: "Medical Appointment App",
        description:
          "Una aplicación de gestión de citas médicas diseñada para profesionales sanitarios. Permite gestionar citas, pacientes y disponibilidad de manera eficiente.",
      },
      en: {
        title: "Medical Appointment App",
        description:
          "A medical appointment management application designed for healthcare professionals. It allows appointments, patients, and availability to be managed efficiently.",
      },
    },
  },
] as const;

export const CONTENT_DATA = {
  es: {
    meta: {
      title: "Fab | Líder Técnico Backend",
      description:
        "Líder Técnico especializado en plataformas para el sector financiero, arquitectura backend y sistemas distribuidos.",
    },
    hero: {
      badge: "¡Conectemos!",
      title: `Hola, soy ${callName}`,
      description: `<strong>Líder Técnico</strong> con más de ${yearsExperience} años de experiencia construyendo plataformas para el <span class="font-medium text-[#22C55E]">sector financiero</span>.`,
      alt: `Foto de perfil de ${fullName}`,
    },
    experiences: {
      title: "Experiencia",
      present: "presente",
    },
    projects: {
      title: "Proyectos",
      visitWebsite: "Visita el sitio web",
    },
    about: {
      title: "Sobre mí",
      description: [
        `Soy <strong>Líder Técnico Backend</strong> con <strong>más de ${yearsExperience} años de experiencia</strong> construyendo plataformas para el <strong>sector financiero</strong> y liderando la evolución técnica de productos de software.`,

        `Con el paso de los años, mi enfoque ha evolucionado desde el desarrollo backend hacia el <strong>diseño de soluciones</strong>, participando activamente en <strong>decisiones de arquitectura</strong>, definición de estándares técnicos y evolución de sistemas distribuidos.`,

        `Disfruto especialmente la <strong>arquitectura de software</strong> y el diseño de <strong>Event-Driven Architectures</strong>. Busco construir <strong>plataformas escalables, resilientes y preparadas para evolucionar</strong>, creando soluciones que acompañen el crecimiento del negocio a largo plazo.`,
      ],
      alt: `Foto de perfil de ${fullName}`,
    },
    contact: {
      title: "Contacto",
      mailme: "Envíame un correo",
    },
    footer: {
      greeting: "¡Ten un bonito día! 🎉",
    },
    theme: {
      light: "Claro",
      dark: "Oscuro",
      system: "Sistema",
    },
  },
  en: {
    meta: {
      title: "Fab | Backend Technical Lead",
      description:
        "Technical Lead specialized in financial platforms, backend architecture, and distributed systems.",
    },
    hero: {
      badge: "Let's connect!",
      title: `Hey, I'm ${callName}`,
      description: `<strong>Technical Lead</strong> with over ${yearsExperience} years of experience building platforms for the <span class="font-medium text-[#22C55E]">financial industry</span>.`,
      alt: `Profile picture of ${fullName}`,
    },
    experiences: {
      title: "Experience",
      present: "present",
    },
    projects: {
      title: "Projects",
      visitWebsite: "Visit website",
    },
    about: {
      title: "About me",
      description: [
        `I'm a <strong>Backend Technical Lead</strong> with <strong>over ${yearsExperience} years of experience</strong> building platforms for the <strong>financial industry</strong> and leading the technical evolution of software products.`,

        `Over the years, my focus has evolved from backend development to <strong>solution design</strong>, actively contributing to <strong>architecture decisions</strong>, engineering standards, and the evolution of distributed systems.`,

        `I'm particularly interested in <strong>software architecture</strong> and <strong>Event-Driven Architectures</strong>. I enjoy building <strong>scalable, resilient, and evolvable platforms</strong> that support long-term business growth.`,
      ],
      alt: `Profile picture of ${fullName}`,
    },
    contact: {
      title: "Contact",
      mailme: "Send me an email",
    },
    footer: {
      greeting: "Have a nice day! 🎉",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      system: "System",
    },
  },
} as const;

export type TechnologyId =
  (typeof PROJECTS_DATA)[number]["technologies"][number];
