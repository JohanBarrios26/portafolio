// Todo el contenido del portafolio vive aquí. Edita este archivo y la web se actualiza.
// Los proyectos son de ejemplo: reemplázalos por los tuyos cuando los tengas.

export const site = {
  name: "Johan Barrios",
  handle: "JohanBarrios26",
  role: "Ingeniero de Sistemas · Desarrollo de software y datos",
  tagline:
    "Construyo sitios web y herramientas que automatizan procesos y convierten datos en decisiones.",
  email: "farith2699@gmail.com",
  github: "https://github.com/JohanBarrios26",
  // Pega aquí la URL de tu LinkedIn (ej. "https://www.linkedin.com/in/tu-usuario"). Vacío = no se muestra.
  linkedin: "https://www.linkedin.com/in/johan-barrios-08832326b/",
  // Otras redes opcionales: { label: "Instagram", href: "https://..." }
  otherLinks: [] as { label: string; href: string }[],
  // Archivos opcionales: guarda tu foto en public/foto.jpg y tu CV en public/cv.pdf.
  // Si el archivo existe, aparece solo en la web.
  photoFile: "foto.png",
  cvFile: "cv.pdf",
  about: [
    "Soy Ingeniero de Sistemas (UNIMINUTO) y Tecnólogo en Análisis y Desarrollo de Sistemas de Información (SENA), de Girardot, Colombia.",
    "Tengo más de cinco años de experiencia laboral: administré inventarios y bases de datos, y coordiné un equipo de hasta 30 personas en el Censo Económico del DANE. Hoy uso esa mirada de procesos y datos para construir software propio, como LifeOS y un traductor tikuna–español.",
  ],
};

export const projects = [
  {
    title: "JUCUM Leticia",
    year: "2026",
    description:
      "Sitio web bilingüe para JUCUM Leticia, en el Amazonas colombiano, con contenido editable y sin librerías de animación.",
    tech: ["Astro", "i18n", "Sitio web"],
    href: "https://github.com/JohanBarrios26/jucum-leticia-web",
  },
  {
    title: "LifeOS",
    year: "2026",
    description:
      "App personal para llevar finanzas, hábitos y momentos importantes. Instalable en el celular, funciona sin conexión y guarda los datos solo en tu dispositivo.",
    tech: ["Next.js", "TypeScript", "PWA", "Vitest"],
    href: "https://github.com/JohanBarrios26/LifeOS",
  },
  {
    title: "Tienda en línea",
    year: "2023",
    description:
      "Comercio electrónico con catálogo, carrito, pago con PayPal y panel de administración, sobre una arquitectura MVC propia.",
    tech: ["PHP", "MySQL", "PayPal", "MVC"],
    href: "https://github.com/JohanBarrios26/Pagina_Tienda",
  },
  {
    title: "Mi primer proyecto Android",
    year: "2023",
    description:
      "Mi primera app móvil, hecha con Java para Android. El punto de partida de todo lo demás.",
    tech: ["Java", "Android"],
    href: "https://github.com/JohanBarrios26/MiPrimerProyectoAndroid",
  },
];

export const stack = [
  {
    group: "Interfaz",
    items: ["HTML y CSS", "JavaScript", "TypeScript", "React", "Next.js", "Astro", "Tailwind"],
  },
  {
    group: "Servidor",
    items: ["Node.js", "Python", "Java", "PHP", "SQL Server, MySQL y PostgreSQL"],
  },
  {
    group: "Datos y herramientas",
    items: ["Power BI", "Excel avanzado", "Git y GitHub", "VS Code", "Scrum (básico)"],
  },
];
