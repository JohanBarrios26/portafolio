import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Spotlight from "@/components/Spotlight";
import { projects, site, stack } from "@/data/site";

const wrap = "mx-auto w-full max-w-5xl px-6 sm:px-10";

const hasPublic = (file: string) =>
  existsSync(path.join(process.cwd(), "public", file));

export default function Home() {
  const hasPhoto = hasPublic(site.photoFile);
  const hasCv = hasPublic(site.cvFile);
  const links = [
    { label: "GitHub", href: site.github },
    ...(site.linkedin ? [{ label: "LinkedIn", href: site.linkedin }] : []),
    ...site.otherLinks,
  ];

  return (
    <>
      <Spotlight>
        <nav className={`${wrap} flex items-center justify-between py-7`}>
          <a href="#inicio" className="font-display text-lg font-bold">
            {site.handle}
          </a>
          <ul className="flex gap-6 text-sm text-muted sm:gap-8">
            <li><a className="transition-colors hover:text-amber" href="#proyectos">Proyectos</a></li>
            <li><a className="transition-colors hover:text-amber" href="#stack">Herramientas</a></li>
            <li><a className="transition-colors hover:text-amber" href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div id="inicio" className={`${wrap} pb-28 pt-20 sm:pb-40 sm:pt-32`}>
          <p className="rise text-lg text-muted">{site.role}</p>
          <h1 className="rise rise-2 mt-3 font-display text-[clamp(3.5rem,13vw,9.5rem)] font-extrabold leading-[0.9] tracking-tight">
            {site.name}
          </h1>
          <p className="rise rise-3 mt-10 max-w-xl text-xl leading-relaxed text-muted">
            {site.tagline}
          </p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-full bg-amber px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Ver proyectos
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-amber hover:text-amber"
            >
              Escríbeme
            </a>
            {hasCv && (
              <a
                href={`/${site.cvFile}`}
                download
                className="rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-amber hover:text-amber"
              >
                Descargar CV
              </a>
            )}
          </div>
        </div>
      </Spotlight>

      <main>
        <section id="proyectos" className={`${wrap} scroll-mt-8 py-24`}>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Proyectos</h2>
          <ul className="mt-12 border-t border-line">
            {projects.map((p) => (
              <li key={p.title} className="border-b border-line">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-3 py-8 transition-colors hover:bg-surface sm:grid-cols-[1fr_1.4fr] sm:gap-12 sm:px-4"
                >
                  <div>
                    <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-amber">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{p.year}</p>
                  </div>
                  <div>
                    <p className="max-w-md text-muted">{p.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-line px-3 py-1 text-sm"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="stack" className={`${wrap} scroll-mt-8 py-24`}>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Herramientas</h2>
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

        <section id="sobre-mi" className={`${wrap} scroll-mt-8 py-24`}>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Sobre mí</h2>
          <div className="mt-8 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-14">
            {hasPhoto && (
              <Image
                src={`/${site.photoFile}`}
                alt={`Foto de ${site.name}`}
                width={320}
                height={400}
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

        <section id="contacto" className={`${wrap} scroll-mt-8 py-24`}>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Hablemos</h2>
          <p className="mt-6 max-w-md text-lg text-muted">
            ¿Tienes una idea o un proyecto? Cuéntame qué necesitas y te respondo.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block break-all font-display text-2xl font-bold text-amber underline decoration-line underline-offset-8 transition-colors hover:decoration-amber sm:text-4xl"
          >
            {site.email}
          </a>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className={`${wrap} border-t border-line py-8 text-sm text-muted`}>
        © 2026 {site.name}
      </footer>
    </>
  );
}
