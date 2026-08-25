import fs from "node:fs";
import path from "node:path";

// Lê a pasta em tempo de build: basta commitar o .html que ele aparece aqui.
export const dynamic = "force-static";

const REVISAO_DIR = path.join(process.cwd(), "public", "revisao");

type Item = {
  slug: string;
  titulo: string;
  atualizadoEm: string;
};

/** Extrai o <title> do arquivo, com fallback pro nome do slug. */
function lerTitulo(html: string, slug: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const bruto = match?.[1]?.trim();
  if (bruto) {
    // Decodifica as entidades mais comuns e colapsa espaços.
    return bruto
      .replace(/\s+/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  }
  return slug.replace(/[-_]/g, " ");
}

function listarRevisoes(): Item[] {
  if (!fs.existsSync(REVISAO_DIR)) return [];

  return fs
    .readdirSync(REVISAO_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"))
    .map((entry) => {
      const arquivo = path.join(REVISAO_DIR, entry.name);
      const slug = entry.name.replace(/\.html$/i, "");
      const html = fs.readFileSync(arquivo, "utf8");

      return {
        slug,
        titulo: lerTitulo(html, slug),
        atualizadoEm: fs.statSync(arquivo).mtime.toISOString(),
      };
    })
    .sort((a, b) => b.atualizadoEm.localeCompare(a.atualizadoEm));
}

function formatarData(iso: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(iso));
}

export default function RevisaoIndex() {
  const itens = listarRevisoes();

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-neutral-100">
      <div className="mx-auto w-full max-w-3xl">
        <header className="border-b border-neutral-800 pb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            G Compass
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Revisão
          </h1>
          <p className="mt-3 text-neutral-400">
            Materiais publicados para revisão. Links privados — não indexados em
            buscadores.
          </p>
        </header>

        {itens.length === 0 ? (
          <p className="mt-10 rounded-lg border border-dashed border-neutral-800 px-5 py-10 text-center text-neutral-500">
            Nenhum material publicado ainda.
          </p>
        ) : (
          <ul className="mt-10 space-y-3">
            {itens.map((item) => (
              <li key={item.slug}>
                <a
                  href={`/revisao/${item.slug}`}
                  className="group flex items-baseline justify-between gap-4 rounded-lg border border-neutral-800 bg-neutral-900/40 px-5 py-4 transition-colors hover:border-neutral-600 hover:bg-neutral-900"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-medium group-hover:text-white">
                      {item.titulo}
                    </span>
                    <span className="mt-0.5 block truncate font-mono text-xs text-neutral-500">
                      /revisao/{item.slug}
                    </span>
                  </span>
                  <time
                    dateTime={item.atualizadoEm}
                    className="shrink-0 text-xs text-neutral-500"
                  >
                    {formatarData(item.atualizadoEm)}
                  </time>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
