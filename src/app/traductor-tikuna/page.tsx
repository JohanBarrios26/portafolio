import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Traductor Tikuna–español | Johan Barrios",
  description:
    "Caso de estudio: un motor de consulta y análisis Tikuna–español con evidencia trazable, hecho en Python y con enfoque ético sobre licencias y comunidad.",
};

const wrap = "mx-auto w-full max-w-3xl px-6 sm:px-10";
const h2 = "mt-16 font-display text-3xl font-bold";
const p = "mt-4 text-lg leading-relaxed text-muted";

const results = [
  { value: "55,6 %", label: "de las apariciones de palabras con candidato documentado" },
  { value: "8,9 %", label: "de las palabras distintas con candidato documentado" },
  { value: "41 %", label: "de precisión estimada en candidatos fiables (indicador aproximado)" },
  { value: "44", label: "pruebas automáticas, con integración continua" },
];

export default function CaseStudy() {
  return (
    <>
      <header className="border-b border-line">
        <nav className={`${wrap} flex items-center justify-between py-4`}>
          <Link href="/" className="font-display text-lg font-bold">
            {site.name}
          </Link>
          <Link
            href="/#proyectos"
            className="text-sm text-muted transition-colors hover:text-amber"
          >
            Volver a proyectos
          </Link>
        </nav>
      </header>

      <main className={`${wrap} pb-24 pt-16`}>
        <p className="text-amber">Caso de estudio</p>
        <h1 className="mt-2 font-display text-5xl font-extrabold leading-tight sm:text-6xl">
          Traductor Tikuna–español
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted">
          Un motor que consulta y analiza el Tikuna mostrando siempre de dónde sale cada resultado.
          Lo construí en Python, sin dependencias externas, y lo mantengo privado por una razón
          que también explico aquí: los datos no son míos.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {["Python", "Lingüística computacional", "Pruebas automáticas", "GitHub Actions", "Ética de datos"].map(
            (t) => (
              <li key={t} className="rounded-full border border-line px-3 py-1 text-sm">
                {t}
              </li>
            ),
          )}
        </ul>

        <h2 className={h2}>El problema</h2>
        <p className={p}>
          El Tikuna es una lengua de la Amazonía que se habla en Colombia, Perú y Brasil, con muy
          pocos recursos digitales. Quería una herramienta útil para quienes la estudian o trabajan
          con ella, pero con una condición: que nunca invente. Un traductor que genera Tikuna
          falso es peor que ninguno, porque quien lo usa no puede distinguirlo del real.
        </p>

        <h2 className={h2}>Cómo lo resolví</h2>
        <p className={p}>
          Partí de dos fuentes: el diccionario Tikuna–Castellano de Anderson y Anderson (SIL) y un
          corpus paralelo de textos bíblicos. Con ellas construí un motor que, para cada palabra,
          entrega candidatos con tres cosas: el <strong className="text-text">nivel</strong> de
          conocimiento, la <strong className="text-text">confianza</strong> y la{" "}
          <strong className="text-text">evidencia</strong> (la entrada del diccionario o el
          versículo de donde sale).
        </p>
        <ul className="mt-6 space-y-3 text-lg text-muted">
          <li>
            <strong className="text-text">Documentado:</strong> sale directo del diccionario, de una
            relación morfológica explícita o de una traducción idéntica ya conocida.
          </li>
          <li>
            <strong className="text-text">Inferido:</strong> coincidencia aproximada, variante
            ortográfica atestiguada o asociación estadística.
          </li>
          <li>
            <strong className="text-text">Generado:</strong> reservado y vacío. El sistema no genera
            nada nuevo.
          </li>
        </ul>
        <p className={p}>
          Si no hay una oración idéntica en el corpus, el sistema no finge traducirla: entrega un
          análisis palabra por palabra y lo dice claramente.
        </p>

        <h2 className={h2}>Lo que construí</h2>
        <ul className="mt-6 space-y-3 text-lg text-muted">
          <li>Un diccionario consultable de unas 5.200 entradas, con problemas de calidad marcados en vez de borrados.</li>
          <li>Un corpus de unos 23.500 pares Tikuna–español, con las dos ortografías (Brasil y Perú) conservadas por separado.</li>
          <li>Búsqueda que entiende las marcas combinantes de Unicode, que parten las palabras en muchos tokenizadores.</li>
          <li>Consola, interfaz web local y un formulario para que una hablante valide los resultados.</li>
          <li>Una auditoría de datos y una evaluación que mide el motor con partes del corpus que no vio.</li>
        </ul>

        <h2 className={h2}>Resultados, con sus límites</h2>
        <p className={p}>
          Es la versión 0.1 y los números son modestos. Los publico porque la medición es parte del
          método.
        </p>
        <dl className="mt-8 grid gap-8 sm:grid-cols-2">
          {results.map((r) => (
            <div key={r.label} className="border-t border-line pt-4">
              <dt className="sr-only">{r.label}</dt>
              <dd>
                <span className="font-display text-4xl font-extrabold text-amber">{r.value}</span>
                <span className="mt-1 block text-muted">{r.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className={p}>
          La cobertura por apariciones es alta porque las palabras funcionales se repiten mucho;
          por palabras distintas es baja. El Tikuna flexiona mucho y todavía no hay un analizador
          morfológico validado. Mi conclusión: el cuello de botella no es el modelo, sino la
          morfología y la validación con hablantes.
        </p>

        <h2 className={h2}>Un error que encontré y corregí</h2>
        <p className={p}>
          Al auditar mis primeros scripts descubrí que todos leían solo la partición de
          entrenamiento e ignoraban las otras dos. Perdía cerca del 10 % del léxico y casi 2.000
          pares del corpus sin avisar. Reconstruí la carga de datos para usar todo, conservar la
          trazabilidad y poder reproducir cada resultado.
        </p>

        <h2 className={h2}>Por qué el código es privado</h2>
        <p className={p}>
          El diccionario es de SIL y no permite redistribución. El corpus tiene licencias
          restrictivas o sin declarar. Además, el Tikuna es la lengua de un pueblo vivo. Por eso el
          repositorio no incluye ningún dato, los regenera quien tenga permiso, y no publico
          archivos derivados ni modelos mientras no resuelva los permisos y hable con hablantes y
          autoridades de la comunidad.
        </p>
        <p className={p}>
          Decidí no trabajar con un modelo neuronal en esta fase: con unos 23 mil versículos de un
          solo dominio y esas licencias, generaría Tikuna inventado.
        </p>

        <h2 className={h2}>Qué sigue</h2>
        <ul className="mt-6 space-y-3 text-lg text-muted">
          <li>Resolver permisos con SIL y las sociedades bíblicas.</li>
          <li>Validar unos 200 resultados con una persona hablante.</li>
          <li>Construir un analizador morfológico junto a un lingüista.</li>
          <li>Sumar fuentes no bíblicas, con consentimiento.</li>
        </ul>

        <div className="mt-20 rounded-3xl border border-line bg-surface p-8">
          <p className="font-display text-2xl font-bold">¿Quieres saber más?</p>
          <p className="mt-3 text-muted">
            Puedo contarte el método, mostrar el proyecto en una conversación o hablar de cómo
            abordo datos con licencias y comunidades.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block rounded-full bg-amber px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Escríbeme
          </a>
        </div>
      </main>

      <footer className={`${wrap} border-t border-line py-8 text-sm text-muted`}>
        © 2026 {site.name}
      </footer>
    </>
  );
}
