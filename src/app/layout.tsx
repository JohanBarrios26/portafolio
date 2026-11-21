import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { site } from "@/data/site";
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
  metadataBase: new URL(site.siteUrl),
  title: "Johan Barrios | Ingeniero de Sistemas, software y datos",
  description:
    "Portafolio de Johan Barrios, Ingeniero de Sistemas en Girardot, Colombia: desarrollo web, bases de datos y análisis de datos. Proyectos, experiencia y CV.",
  keywords: [
    "Johan Barrios",
    "Ingeniero de Sistemas",
    "desarrollador de software junior",
    "analista de datos",
    "Girardot",
    "Colombia",
    "Python",
    "SQL",
    "React",
    "Next.js",
  ],
  authors: [{ name: site.name, url: site.siteUrl }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Johan Barrios | Ingeniero de Sistemas",
    description:
      "Desarrollo software y convierto datos en decisiones. Proyectos, experiencia y CV.",
    url: "/",
    siteName: "Portafolio de Johan Barrios",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johan Barrios | Ingeniero de Sistemas",
    description: "Desarrollo software y convierto datos en decisiones.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${bricolage.variable} ${figtree.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
