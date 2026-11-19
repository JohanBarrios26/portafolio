import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Johan Barrios | Ingeniero de Sistemas, software y datos",
  description:
    "Portafolio de Johan Barrios, Ingeniero de Sistemas en Girardot, Colombia: desarrollo web, bases de datos y análisis de datos. Proyectos, experiencia y CV.",
  openGraph: {
    title: "Johan Barrios | Ingeniero de Sistemas",
    description:
      "Desarrollo software y convierto datos en decisiones. Proyectos, experiencia y CV.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${bricolage.variable} ${figtree.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
