import { PROFILE_DATA } from "@/config/constants";
import type { DeepPartial } from "node_modules/astro/dist/type-utils";
import type { Paths } from "./types";

const {
  names: { firstName, lastName, callName },
} = PROFILE_DATA;
const fullName = `${firstName} ${lastName}`;

const es = {
  meta: {
    title: "Fab | Desarrollador Full Stack",
    description:
      "Software Engineer especializado en Golang y React Native. Con experiencia en backend, liderando proyectos tecnológicos y desarrollando soluciones eficientes.",
  },
  hero: {
    badge: "¡Conectemos!",
    title: `Hola, soy ${callName}`,
    description: `Con más de 4 años de experiencia.
    <strong>Ingeniero de Software</strong> <small>y</small> <strong>Desarrollador Full Stack</strong>.
    Basado en Perú 🇵🇪. Actualmente especializado en
    <span class="font-medium text-[#00ADD8]">Golang</span>
    y
    <span class="font-medium text-[#61dbfb]">React Native</span>`,
    alt: `Foto de perfil de ${fullName}`,
  },
  experiences: {
    title: "Experiencia",
    present: "presente",
    fractalup_project_manager: {
      title: "Project Manager de Software",
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
    encora_senior_software_engineer: {
      title: "Software Engineer II",
      description: [
        "Especializado en el sector financiero, utilizo Golang y React Native para desarrollar soluciones innovadoras y eficientes. Mi enfoque está en la creación de aplicaciones seguras y de alto rendimiento, adaptadas a las necesidades del mercado financiero.",
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
      `Hola, soy ${firstName}, aunque la mayoría me conoce como <em>"${callName}"</em>. Con <strong>más de 4 años de experiencia</strong> en el desarrollo de software, he trabajado como Full Stack Developer y en la gestión de proyectos tecnológicos. Recientemente, me he especializado en Golang y React Native, con un <strong>enfoque particular en el backend</strong>.
      `,
      "He desarrollado y optimizado aplicaciones completas, mejorando tanto el rendimiento como la experiencia del usuario. Esta experiencia me ha permitido <strong>liderar equipos y entregar soluciones tecnológicas efectivas</strong>, gestionando recursos y plazos de manera eficiente.",
      `Soy una persona muy curiosa, <strong>siempre buscando aprender cosas nuevas</strong>, tanto en tecnología como en otros campos. Uno de mis hobbies es explorar contenido educativo en YouTube, desde ciencia y tecnología hasta arte y deportes. Mi <strong>personalidad lógica</strong> (INTP-A) me permite abordar problemas de manera estructurada, encontrando soluciones eficientes y bien pensadas en mi trabajo.`,
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
};

const en: DeepPartial<typeof es> = {
  meta: {
    title: "Fab | Full Stack Developer",
    description:
      "Software Engineer specializing in Golang and React Native. Experienced in backend, leading tech projects, and developing efficient solutions.",
  },
  hero: {
    badge: "Let's connect!",
    title: `Hey, I'm ${callName}`,
    description: `4+ years of experience.
    <strong>Software Engineer</strong> <small>&</small> <strong>Full Stack Developer</strong>.
    Based in Peru 🇵🇪. Currently specializing in
    <span class="font-medium text-[#00ADD8]">Golang</span>
    and
    <span class="font-medium text-[#61dbfb]">React Native</span>`,
    alt: `Profile picture of ${fullName}`,
  },
  experiences: {
    title: "Experience",
    present: "present",
    fractalup_project_manager: {
      title: "Software Project Manager",
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

    encora_senior_software_engineer: {
      title: "Software Engineer II",
      description: [
        "Specialized in the financial sector, I use Golang and React Native to develop innovative and efficient solutions. My focus is on creating secure and high-performance applications tailored to the needs of the financial market.",
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
      `Hi, I'm ${firstName}, though most know me as <em>"${callName}"</em>. With <strong>over 4 years of experience</strong> in software development, I have worked as a Full Stack Developer and in technology project management. Recently, I’ve specialized in Golang and React Native, with a <strong>particular focus on backend development</strong>`,
      "I’ve developed and optimized full applications, enhancing both performance and user experience. This experience has allowed me to <strong>lead teams and deliver effective technological solutions</strong>, managing resources and deadlines efficiently.",
      `I’m a highly curious person, <strong>always eager to learn new things</strong>, both in technology and other fields. One of my hobbies is exploring educational content on YouTube, from science and technology to art and sports. My <strong>logical personality</strong> (INTP-A) helps me approach problems in a structured manner, finding efficient and well-thought-out solutions in my work.`,
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
};

export type Translation = typeof es;

export type TranslationPath = Paths<Translation>;

export const locales = {
  es,
  en,
};

export type Locale = keyof typeof locales;
