// Todo el contenido del portafolio vive aquí. Edita este archivo y la web se actualiza.

export const site = {
  name: "Johan Barrios",
  handle: "JohanBarrios26",
  role: "Ingeniero de Sistemas",
  headline: "Desarrollo software y convierto datos en decisiones.",
  tagline:
    "Construyo sitios web y herramientas que automatizan procesos. Vengo de coordinar equipos y administrar bases de datos, así que programo pensando en cómo trabaja la gente de verdad.",
  availability: "Disponible para nuevas oportunidades",
  location: "Girardot, Colombia",
  email: "farith2699@gmail.com",
  github: "https://github.com/JohanBarrios26",
  linkedin: "https://www.linkedin.com/in/johan-barrios-08832326b/",
  otherLinks: [
    { label: "REDIX (servicios)", href: "https://kairos-web-5xq3.vercel.app" },
  ] as { label: string; href: string }[],
  // Archivos opcionales en public/: si existen, aparecen solos en la web.
  photoFile: "foto.png",
  cvFile: "cv.pdf",
  about: [
    "Soy Ingeniero de Sistemas (UNIMINUTO) y Tecnólogo en Análisis y Desarrollo de Sistemas de Información (SENA).",
    "Tengo más de cinco años de experiencia laboral. Administré inventarios y bases de datos, di seguimiento a operaciones con tableros de control y geovisores, y coordiné un equipo de hasta 30 personas en el Censo Económico del DANE.",
    "Hoy uso esa mirada de procesos y datos para construir software propio, como LifeOS y un traductor tikuna–español. Busco una oportunidad como desarrollador de software o analista de datos junior.",
  ],
};

export const highlights = [
  { value: "+5", label: "años de experiencia laboral" },
  { value: "30", label: "personas coordinadas en el DANE" },
  { value: "3", label: "bases de datos SQL" },
  { value: "4", label: "proyectos publicados en GitHub" },
];

export type Project = {
  title: string;
  year: string;
  description: string;
  tech: string[];
  code?: string;
  demo?: string;
  caseStudy?: string;
  note?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "LifeOS",
    year: "2026",
    description:
      "App personal para llevar finanzas, hábitos y momentos importantes. Se instala en el celular, funciona sin conexión y guarda los datos solo en tu dispositivo. Incluye entrada rápida en español (\"almuerzo 25 mil\"), reporte mensual y pruebas automáticas.",
    tech: ["Next.js", "TypeScript", "PWA", "IndexedDB", "Vitest"],
    code: "https://github.com/JohanBarrios26/LifeOS",
    demo: "https://life-os-green-ten.vercel.app",
    featured: true,
  },
  {
    title: "Traductor Tikuna–español",
    year: "2026",
    description:
      "Motor de consulta y análisis para una lengua amazónica con pocos recursos digitales. Cada resultado indica si es documentado o inferido y de dónde sale. Incluye auditoría de datos, evaluación honesta y pruebas automáticas.",
    tech: ["Python", "Lingüística computacional", "Pruebas", "CI"],
    caseStudy: "/traductor-tikuna",
    note: "Repositorio privado: los datos tienen licencias de terceros.",
  },
  {
    title: "JUCUM Leticia",
    year: "2026",
    description:
      "Sitio web bilingüe para una organización del Amazonas colombiano. El equipo edita el contenido sin programar, carga rápido con conexiones lentas y cuida el SEO y la accesibilidad.",
    tech: ["Astro", "Sanity CMS", "i18n", "SEO"],
    code: "https://github.com/JohanBarrios26/jucum-leticia-web",
  },
  {
    title: "Tienda en línea",
    year: "2023",
    description:
      "Comercio electrónico con catálogo, carrito, pago con PayPal y panel de administración, sobre una arquitectura MVC propia y base de datos MySQL.",
    tech: ["PHP", "MySQL", "PayPal", "MVC"],
    code: "https://github.com/JohanBarrios26/Pagina_Tienda",
  },
  {
    title: "Mi primer proyecto Android",
    year: "2023",
    description:
      "Mi primera app móvil, hecha con Java para Android. El punto de partida de todo lo demás.",
    tech: ["Java", "Android"],
    code: "https://github.com/JohanBarrios26/MiPrimerProyectoAndroid",
  },
];

export const experience = [
  {
    role: "Coordinador de Ruta, Censo Económico Nacional Urbano",
    org: "DANE",
    period: "Oct 2024 – Dic 2024",
    points: [
      "Lideré un equipo de hasta 30 personas entre supervisores, analistas y censistas.",
      "Seguí a diario los indicadores en tableros de control y geovisores.",
      "Controlé la calidad de la información recolectada y presenté informes de avance.",
    ],
  },
  {
    role: "Ingeniero Asistente de Sistemas (jornada parcial)",
    org: "Technored SAS",
    period: "Ene 2023 – Jul 2024",
    points: [
      "Hice análisis de datos para apoyar decisiones estratégicas.",
      "Participé en el desarrollo de software, verificando que cumpliera los objetivos del negocio.",
      "Di soporte técnico en hardware, software y redes, con mantenimiento preventivo y correctivo de equipos.",
      "Gestioné redes y seguridad informática, escribí documentación técnica y capacité a usuarios.",
    ],
  },
  {
    role: "Instructor de Alfabetización Digital y Uso de las TIC",
    org: "UNIMINUTO",
    period: "Feb 2024 – May 2024",
    points: [
      "Enseñé informática, uso de software y navegación segura a personas de la comunidad.",
    ],
  },
  {
    role: "Analista de Inventarios y Jefe de Bodega",
    org: "FITME Distribución",
    period: "Sep 2021 – Ene 2024",
    points: [
      "Administré la base de datos de inventario de más de 50 productos.",
      "Hice reportes en Excel para decidir compras, reposición y control de stock.",
      "Mejoré la trazabilidad de la mercancía en el registro de entradas y salidas.",
    ],
  },
];

export const education = [
  {
    title: "Ingeniero de Sistemas",
    org: "UNIMINUTO",
    period: "2026",
  },
  {
    title: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
    org: "SENA",
    period: "2018",
  },
];

export const certifications = [
  "Bootcamp de Programación, 159 h (MinTIC Talento Tech)",
  "Excel Avanzado y Fundamentos de Power BI, 40 h (Colsubsidio)",
  "Python para Data Science y AI (IBM, Coursera)",
  "Visualización de Datos con Python (IBM, Coursera)",
  "Manejo de Bases de Datos con Python (Universidad Austral)",
];

export const stack = [
  {
    group: "Interfaz",
    items: ["HTML y CSS", "JavaScript", "TypeScript", "React", "Next.js", "Astro", "Tailwind"],
  },
  {
    group: "Servidor y datos",
    items: ["Python", "Java", "Node.js", "PHP", "SQL Server, MySQL y PostgreSQL"],
  },
  {
    group: "Análisis y herramientas",
    items: ["Power BI", "Excel avanzado", "Git y GitHub", "Scrum (básico)", "Inglés B1"],
  },
];
