import { PROFILE_DATA } from "@/config/constants";
import type { DeepPartial } from "node_modules/astro/dist/type-utils";

const {
  names: { firstName, lastName, callName },
} = PROFILE_DATA;
const fullName = `${firstName} ${lastName}`;

const es = {
  meta: {
    title: "Fab | Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack con amplia experiencia en frontend, especializado en Vue.js. También he trabajado como Project Manager y tengo una sólida trayectoria en backend con Node.js, Express y MySQL. Descubre mis proyectos y habilidades en desarrollo web y gestión de proyectos.",
  },
  hero: {
    badge: "Disponible para trabajar",
    title: `Hola, soy ${callName}`,
    description: `+3 años de experiencia.
    <strong> Ingeniero de Software y Desarrollador Full Stack </strong>
    de Perú 🇵🇪. Especializado en
    <span class="font-medium text-[#42b883]">Vue.js</span>
    para frontend y
    <span class="font-medium text-[#68A063]">Node.js</span>
    para backend.`,
    alt: `Foto de perfil de ${fullName}`,
  },
  experiences: {
    title: "Experiencia",
    present: "presente",
    fractalup_project_manager: {
      title: "Software Project Manager",
      description: [
        "Durante mi tiempo en FractalUp, trabajé como Project Software Manager, contribuyendo significativamente al éxito del equipo. Me especialicé en programación con TypeScript Vue, enfocándome en resolver tareas desafiantes para el equipo.",
        "Lideré el análisis y diseño de nuevas funcionalidades, creando diagramas de flujo, diagramas de clase y estructuras de tablas en la base de datos para guiar el desarrollo. También organicé y coordiné tareas para los programadores, asegurando el cumplimiento de los plazos establecidos.",
        "Desarrollé características clave como analítica del sitio web, chat de mensajería, flujo completo de inicio de sesión y registro de usuarios, y perfil de usuario. Estas tareas me dieron una comprensión integral del desarrollo de software.",
        "Esta experiencia fortaleció mis habilidades técnicas y mejoró mis capacidades de liderazgo y organización, permitiéndome gestionar proyectos complejos y garantizar entregas eficientes.",
      ],
    },
    fractalup_fullstack: {
      title: "Desarrollador Full Stack",
      description: [
        "Desarrollé componentes de UI para una biblioteca de componentes y para el resto de la aplicación utilizando Vue.js y TypeScript, asegurando su calidad mediante pruebas con Jest.",
        "Implementé integraciones API con GraphQL, mejorando el uso de la caché de Apollo para minimizar la cantidad de peticiones al servidor y optimizar el rendimiento.",
        "Mantuve y actualicé continuamente la base de código para adaptarse a los cambios y mejoras necesarias, asegurando la estabilidad y eficiencia del sistema.",
      ],
    },
  },
  projects: {
    title: "Proyectos",
    fractalup: {
      title: "FractalUp | All-in-One Metaverse",
      description:
        "FractalUp es una plataforma de red todo en uno que ofrece SuperApps autoconfigurables. Optimiza el compromiso y la productividad en diversos sectores, como marketing y formación, creando comunidades online activas y aumentando la fidelización sin necesidad de código.",
    },
    med_appt_app: {
      title: "Medical Appointment App",
      description:
        "Una aplicación de gestión de citas médicas diseñada para profesionales sanitarios. Permite a los médicos y al personal sanitario gestionar eficazmente las citas con sus pacientes.",
    },
  },
  about: {
    title: "Sobre mí",
    description: [
      `<p>
  Hola, soy ${firstName}, pero me conocen como <em>"${callName}"</em>. Con una
  pasión por el desarrollo de software, he trabajado como Full Stack
  Developer y también
  <strong>gestionando proyectos tecnológicos</strong>. En los últimos meses,
  como freelance, me he especializado en frontend y backend utilizando
  Node.js, Express, MySQL y Vue.js.
</p>`,
      `<p>
  He creado y mantenido aplicaciones completas, optimizando el rendimiento y
  la experiencia del usuario. Esta experiencia me ha permitido <strong
    >liderar equipos en la entrega de soluciones tecnológicas</strong
  >, gestionando eficazmente recursos y plazos para cumplir con los
  objetivos establecidos.
</p>`,
      `<p>
  Fuera del trabajo, disfruto explorando nuevas culturas a través de mis
  viajes internacionales. Esta pasión por la aventura no solo enriquece mi
  vida personal, sino que también fortalece mi capacidad para adaptarme
  rápidamente a diferentes entornos y desafíos. Estoy emocionado por seguir
  creciendo en mi carrera, <strong
    >buscando nuevas oportunidades que me desafíen
  </strong> y me permitan continuar aprendiendo y evolucionando como profesional.
</p>`,
    ],
    alt: `Foto de perfil de ${fullName}`,
  },
  contact: {
    title: "Contacto",
  },
  footer: {
    greeting: "¡Ten un bonito día! 🎉",
  },
  theme: {
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
  },
};

const en: DeepPartial<typeof es> = {
  meta: {
    title: "Fab | Full Stack Developer",
    description:
      "Desarrollador Full Stack con amplia experiencia en frontend, especializado en Vue.js. También he trabajado como Project Manager y tengo una sólida trayectoria en backend con Node.js, Express y MySQL. Descubre mis proyectos y habilidades en desarrollo web y gestión de proyectos.",
  },
  hero: {
    badge: "Available for work",
    title: `Hey, I'm ${callName}`,
    description: `+3 years of experience.
    <strong> Software Engineer and Full Stack Developer </strong>
    from Peru 🇵🇪. Specialized in
    <span class="font-medium text-[#42b883]">Vue.js</span>
    for frontend and
    <span class="font-medium text-[#68A063]">Node.js</span>
    for backend.`,
    alt: `Profile picture of ${fullName}`,
  },
  experiences: {
    title: "Experience",
    present: "present",
    fractalup_project_manager: {
      description: [
        "During my time at FractalUp, I worked as a Project Software Manager, contributing significantly to the team's success. I specialized in programming with TypeScript Vue, focusing on solving challenging tasks for the team.",
        "I led the analysis and design of new features, creating flowcharts, class diagrams, and database table structures to guide development. I also organized and coordinated tasks for programmers, ensuring compliance with established deadlines.",
        "I developed key features such as website analytics, messaging chat, full login and user registration flow, and user profile. These tasks gave me a comprehensive understanding of software development.",
        "This experience strengthened my technical skills and improved my leadership and organizational abilities, allowing me to manage complex projects and ensure efficient deliveries.",
      ],
    },

    fractalup_fullstack: {
      title: "Full Stack Developer",
      description: [
        "Developed UI components for a component library and for the rest of the application using Vue.js and TypeScript, ensuring its quality through Jest tests.",
        "Implemented API integrations with GraphQL, improving the use of Apollo cache to minimize the number of requests to the server and optimize performance.",
        "Continuously maintained and updated the codebase to adapt to necessary changes and improvements, ensuring system stability and efficiency.",
      ],
    },
  },
  projects: {
    title: "Projects",
    fractalup: {
      title: "FractalUp | All-in-One Metaverse",
      description:
        "FractalUp is an all-in-one network platform that offers self-configurable SuperApps. It optimizes engagement and productivity in various sectors, such as marketing and training, creating active online communities and increasing loyalty without the need for code.",
    },
    med_appt_app: {
      title: "Medical Appointment App",
      description:
        "A medical appointment management application designed for healthcare professionals. It allows doctors and healthcare staff to effectively manage appointments with their patients.",
    },
  },
  about: {
    title: "About me",
    description: [
      `<p>
  Hi, I'm ${firstName}, but I'm known as <em>"${callName}"</em>. With a
  passion for software development, I have worked as a Full Stack
  Developer and also
  <strong>managing technological projects</strong>. In recent months,
  as a freelancer, I have specialized in frontend and backend using
  Node.js, Express, MySQL, and Vue.js.
</p>`,
      `<p>
  I have created and maintained complete applications, optimizing performance
  and user experience. This experience has allowed me to <strong
    >lead teams in delivering technological solutions</strong
  >, effectively managing resources and deadlines to meet the
  established objectives.
</p>`,
      `<p>
  Outside of work, I enjoy exploring new cultures through my international
  travels. This passion for adventure not only enriches my personal life, but
  also strengthens my ability to quickly adapt to different environments and
  challenges. I am excited to continue growing in my career, <strong
    >seeking new opportunities that challenge me
  </strong> and allow me to continue learning and evolving as a professional.
</p>`,
    ],
    alt: `Profile picture of ${fullName}`,
  },
  contact: {
    title: "Contact",
  },
  footer: {
    greeting: "Have a nice day! 🎉",
  },
  theme: {
    light: "Light",
    dark: "Dark",
    system: "System",
  },
};

export type Translation = typeof es;

export type TranslationPath = Paths<Translation>;

export const locales = {
  es,
  en,
};

export type Locale = keyof typeof locales;
