import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";
import {
  certifications,
  education,
  experience,
  highlights,
  projects,
  site,
  stack,
} from "@/data/site";

const wrap = "mx-auto w-full max-w-5xl px-6 sm:px-10";
const h2 = "font-display text-4xl font-bold sm:text-5xl";
const btnPrimary =
  "rounded-full bg-amber px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5";
const btnGhost =
  "rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-amber hover:text-amber";
const linkUnderline =
  "underline decoration-line underline-offset-4 transition-colors hover:text-amber hover:decoration-amber";

const hasPublic = (file: string) =>
  existsSync(path.join(process.cwd(), "public", file));

export default function Home() {
  const hasPhoto = hasPublic(site.photoFile);
  const hasCv = hasPublic(site.cvFile);
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const links = [
    { label: "LinkedIn", href: site.linkedin },
    { label: "GitHub", href: site.github },
    ...site.otherLinks,
  ].filter((l) => l.href);

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line/70 bg-ink/80 backdrop-blur">
        <nav className={`${wrap} flex items-center justify-between py-4`}>
          <a href="#inicio" className="font-display text-lg font-bold">
            {site.name}
          </a>
          <div className="flex items-center gap-6">
            <ul className="hidden gap-7 text-sm text-muted md:flex">
              <li><a className="transition-colors hover:text-amber" href="#proyectos">Proyectos</a></li>
              <li><a className="transition-colors hover:text-amber" href="#experiencia">Experiencia</a></li>
              <li><a className="transition-colors hover:text-amber" href="#herramientas">Herramientas</a></li>
              <li><a className="transition-colors hover:text-amber" href="#sobre-mi">Sobre mí</a></li>
            </ul>
            <a
              href="#contacto"
              className="rounded-full bg-amber px-4 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <Spotlight>
        <div id="inicio" className={`${wrap} pb-20 pt-16 sm:pb-28 sm:pt-24`}>
          <p className="rise inline-flex items-center gap-3 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm">
            <span className="dot-live h-2.5 w-2.5 rounded-full bg-amber" aria-hidden="true" />
            {site.availability}
          </p>
          <p className="rise rise-2 mt-8 text-lg text-muted">
            {site.role}, {site.location}
          </p>
          <h1 className="rise rise-2 mt-2 font-display text-[clamp(3.5rem,13vw,9.5rem)] font-extrabold leading-[0.9] tracking-tight">
            {site.name}
          </h1>
          <p className="rise rise-3 mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
            {site.headline}
          </p>
          <p className="rise rise-3 mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {site.tagline}
          </p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
            <a href={`mailto:${site.email}`} className={btnPrimary}>
              Contáctame
            </a>
            {hasCv && (
              <a href={`/${site.cvFile}`} download className={btnGhost}>
                Descargar CV
              </a>
            )}
            <a href="#proyectos" className={btnGhost}>
              Ver proyectos
            </a>
          </div>
        </div>
      </Spotlight>

      <section aria-label="En cifras" className="border-y border-line bg-surface/40">
        <dl className={`${wrap} grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4`}>
          {highlights.map((h) => (
            <div key={h.label}>
              <dt className="sr-only">{h.label}</dt>
              <dd>
                <span className="font-display text-4xl font-extrabold text-amber">{h.value}</span>
                <span className="mt-1 block max-w-[14rem] text-sm text-muted">{h.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <main>
        <section id="proyectos" className={`${wrap} scroll-mt-20 py-24`}>
          <h2 className={h2}>Proyectos</h2>
          <p className="mt-4 max-w-xl text-muted">
            Software que funciona y está publicado. Cada uno tiene su código abierto en GitHub.
          </p>

          {featured && (
            <article className="mt-12 grid items-center gap-10 rounded-3xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <p className="text-sm text-amber">Proyecto destacado</p>
                <h3 className="mt-2 font-display text-4xl font-bold">{featured.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted">{featured.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-sm">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  {featured.demo && (
                    <a
                      href={featured.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnPrimary}
                    >
                      Probar la demo
                    </a>
                  )}
                  <a
                    href={featured.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnGhost}
                  >
                    Ver código
                  </a>
                </div>
              </div>
              <div className="flex justify-center gap-4 sm:gap-6">
                <Image
                  src="/lifeos-panel.png"
                  alt="Panel principal de LifeOS con saldo disponible y movimientos recientes"
                  width={390}
                  height={844}
                  sizes="(min-width: 1024px) 220px, 40vw"
                  className="h-auto w-[44%] max-w-[220px] rounded-2xl border border-line"
                />
                <Image
                  src="/lifeos-reporte.png"
                  alt="Reporte mensual de LifeOS con ingresos, gastos y categorías"
                  width={390}
                  height={844}
                  sizes="(min-width: 1024px) 220px, 40vw"
                  className="mt-8 h-auto w-[44%] max-w-[220px] rounded-2xl border border-line"
                />
              </div>
            </article>
          )}

          <ul className="mt-10 border-t border-line">
            {others.map((p) => (
              <li key={p.title} className="border-b border-line">
                <div className="grid gap-4 py-8 sm:grid-cols-[1fr_1.4fr] sm:gap-12 sm:px-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted">{p.year}</p>
                  </div>
                  <div>
                    <p className="max-w-md text-muted">{p.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <li key={t} className="rounded-full border border-line px-3 py-1 text-sm">
                          {t}
                        </li>
                      ))}
                    </ul>
                    {p.note && <p className="mt-4 text-sm text-muted">{p.note}</p>}
                    <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                      {p.caseStudy && (
                        <Link href={p.caseStudy} className={linkUnderline}>
                          Leer el caso de estudio
                        </Link>
                      )}
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className={linkUnderline}>
                          Ver demo
                        </a>
                      )}
                      {p.code && (
                        <a href={p.code} target="_blank" rel="noopener noreferrer" className={linkUnderline}>
                          Ver código
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="experiencia" className={`${wrap} scroll-mt-20 py-24`}>
          <h2 className={h2}>Experiencia</h2>
          <ol className="mt-12 space-y-12 border-l border-line pl-8">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span
                  className="absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full border-2 border-amber bg-ink"
                  aria-hidden="true"
                />
                <p className="text-sm text-muted">{e.period}</p>
                <h3 className="mt-1 font-display text-2xl font-bold">{e.role}</h3>
                <p className="text-amber">{e.org}</p>
                <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-muted marker:text-line">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-20 grid gap-14 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold">Formación</h3>
              <ul className="mt-6 space-y-5">
                {education.map((ed) => (
                  <li key={ed.title}>
                    <p className="font-semibold">{ed.title}</p>
                    <p className="text-sm text-muted">
                      {ed.org}, {ed.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">Cursos y certificaciones</h3>
              <ul className="mt-6 space-y-3 text-muted">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="herramientas" className={`${wrap} scroll-mt-20 py-24`}>
          <h2 className={h2}>Herramientas</h2>
          <div className="mt-12 grid gap-12 sm:grid-cols-3">
            {stack.map((g) => (
              <div key={g.group}>
                <h3 className="font-display text-xl font-bold text-amber">{g.group}</h3>
                <ul className="mt-4 space-y-2 text-muted">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="sobre-mi" className={`${wrap} scroll-mt-20 py-24`}>
          <h2 className={h2}>Sobre mí</h2>
          <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-14">
            {hasPhoto && (
              <Image
                src={`/${site.photoFile}`}
                alt={`Foto de ${site.name}`}
                width={320}
                height={320}
                className="h-auto w-56 rounded-2xl border border-line object-cover sm:w-64"
              />
            )}
            <div className="max-w-xl space-y-5 text-lg text-muted">
              {site.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className={`${wrap} scroll-mt-20 pb-28 pt-24`}>
          <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
            <h2 className={h2}>¿Buscas a alguien para tu equipo?</h2>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Escríbeme con los detalles de la vacante o del proyecto y te respondo pronto.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block break-all font-display text-2xl font-bold text-amber underline decoration-line underline-offset-8 transition-colors hover:decoration-amber sm:text-4xl"
            >
              {site.email}
            </a>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              {hasCv && (
                <a href={`/${site.cvFile}`} download className={btnPrimary}>
                  Descargar CV
                </a>
              )}
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted ${linkUnderline}`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={`${wrap} border-t border-line py-8 text-sm text-muted`}>
        © 2026 {site.name}
      </footer>
    </>
  );
}
