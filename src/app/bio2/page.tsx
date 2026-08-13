"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import "./bio2.css";

/* ============================================================
   CONFIG — edite aqui. Mesmos dados da /bio.
   ============================================================ */
const CONFIG = {
  brand: "GCompass",
  price: "197",
  // A venda acontece no WhatsApp: não há checkout. Todo CTA abre a conversa.
  // Para trocar o número, mude só esta linha (formato 55 + DDD + número).
  whatsapp: "5516988301706",
  prazo: "3 dias",
};

/* Cada CTA abre o WhatsApp com uma primeira mensagem já escrita — quem
   clica não precisa pensar no que dizer, e o vendedor sabe de onde veio. */
const zap = (mensagem: string) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;

const LINKS = {
  principal: zap(`Olá! Vi a página e quero meu Mini Site por R$${CONFIG.price}.`),
  oferta: zap(`Olá! Quero começar minha bio de R$${CONFIG.price}. Como funciona?`),
  duvida: zap("Olá! Tenho uma dúvida sobre o Mini Site antes de fechar."),
};

/* Bios reais entregues — o herói da página.
   Arquivos em public/bio/bios-feitos/ (compartilhados com a /bio). */
const BIOS = [
  { nome: "Saltur Viagens", ramo: "Agência de Viagens", file: "saltur - agencia de viagem.png" },
  { nome: "Flor de Canela", ramo: "Doceria", file: "Flor de Canela.webp" },
  { nome: "Dra. Jussara", ramo: "Clínica", file: "Dra Jussara.webp" },
  { nome: "Luigi", ramo: "Restaurante", file: "Luigi.webp" },
  { nome: "Move Fácil", ramo: "Mudanças", file: "Move-facil_Final.webp" },
  { nome: "Maria Flor", ramo: "Moda", file: "Maria Flor.webp" },
  { nome: "Junior", ramo: "Personal trainer", file: "Bio-junior.webp" },
  { nome: "Pharmalab", ramo: "Farmácia", file: "Pharmalab.webp" },
  { nome: "Thais", ramo: "Estética", file: "Bio-thais.webp" },
  { nome: "Regilaine", ramo: "Advocacia", file: "Regilaine_bio.webp" },
  { nome: "Ateliê For House", ramo: "Decoração", file: "Atelie For House.webp" },
  { nome: "Nutri José Augusto", ramo: "Nutrição", file: "nutrijoseaugusto_bio.webp" },
  { nome: "Carina", ramo: "Bem-estar", file: "Carina_Bio.webp" },
];

const Seta = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
);

const Check = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12 5 5L20 7" />
  </svg>
);

/* ------------------------------------------------------------
   O herói é a própria bio entregue: uma página real, inteira,
   dentro de uma janela. Os prints são páginas largas — mostrar
   num aparelho de celular cortaria metade do trabalho.
   ------------------------------------------------------------ */
function Janela({ bio, rolando }: { bio: (typeof BIOS)[number]; rolando: boolean }) {
  return (
    <figure className="janela">
      <div className="janela-barra" aria-hidden="true">
        <span className="janela-bolas">
          <i /><i /><i />
        </span>
        <span className="janela-url">gcompass.site/{bio.nome.toLowerCase().replace(/[^a-z]+/g, "")}</span>
      </div>
      <div className="janela-tela">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={bio.file}
          className={"janela-img" + (rolando ? " is-rolando" : "")}
          src={`/bio/bios-feitos/${bio.file}`}
          alt={`Bio entregue para ${bio.nome} — ${bio.ramo}`}
          decoding="async"
        />
      </div>
      <figcaption className="janela-legenda">
        <strong>{bio.nome}</strong>
        <span>{bio.ramo}</span>
      </figcaption>
    </figure>
  );
}

/* Barra fina no topo só com a logo — versão clara, para o fundo escuro. */
function Topo() {
  return (
    <div className="topo">
      <a href="#" className="topo-logo" aria-label={CONFIG.brand}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bio/Logo - GCompass - claro.png" alt={CONFIG.brand} />
      </a>
      <a href={LINKS.principal} className="topo-cta"
        target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </div>
  );
}

/* ------------------------------------------------------------
   Hero — o celular ocupa o palco, o texto encosta nele.
   ------------------------------------------------------------ */
function Hero({ i, setI }: { i: number; setI: (n: number) => void }) {
  return (
    <header className="hero">
      <div className="hero-grid">
        <div className="hero-texto">
          <span className="marca">
            <span className="marca-ponto" />
            Mini Site Comercial
          </span>

          <h1>
            Um link só.
            <br />
            <span className="destaque">Tudo o que seu cliente precisa.</span>
          </h1>

          <p className="hero-sub">
            Hoje sua bio manda o cliente pro WhatsApp e acabou. A gente monta uma página
            sua — com contato, endereço, catálogo, horário e redes — no lugar daquele link.
          </p>

          <div className="hero-acoes">
            <a href={LINKS.principal} className="botao botao-acao botao-g"
              target="_blank" rel="noopener noreferrer">
              Chamar no WhatsApp
              <Seta />
            </a>
            <a href="#exemplos" className="botao botao-fantasma botao-g">
              Ver bios prontas
            </a>
          </div>

          <p className="hero-nota">
            R${CONFIG.price} à vista · sem mensalidade · pronta em até {CONFIG.prazo}
          </p>
        </div>

        <div className="hero-palco">
          <Janela bio={BIOS[i]} rolando />
          <div className="palco-trocar" role="group" aria-label="Trocar bio em exibição">
            {BIOS.slice(0, 6).map((b, n) => (
              <button
                key={b.file}
                type="button"
                className={"trocar-ponto" + (n === i ? " is-ativo" : "")}
                aria-label={`Ver a bio de ${b.nome}`}
                aria-current={n === i}
                onClick={() => setI(n)}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------
   O problema, em três frases. Sem cards, sem ícones.
   ------------------------------------------------------------ */
function Problema() {
  return (
    <section className="secao problema">
      <p className="problema-texto">
        O cliente vê seu anúncio, gosta, clica na sua bio —{" "}
        <span className="risco">e encontra um link solto</span>. Ele não sabe seu
        horário, não acha seu endereço, não vê o que você vende.{" "}
        <span className="grifo">Aí ele volta pro feed.</span>
      </p>
    </section>
  );
}

/* ------------------------------------------------------------
   Prova: parede de bios reais.
   ------------------------------------------------------------ */
function Exemplos() {
  const trilho = useRef<HTMLDivElement>(null);

  /* Avança uma "página" de cards — quantos couberem na largura atual. */
  const rolar = (dir: -1 | 1) => {
    const t = trilho.current;
    if (!t) return;
    const card = t.querySelector<HTMLElement>(".parede-item");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(t).columnGap || "0") || 0;
    const passo = card.getBoundingClientRect().width + gap;
    const porPagina = Math.max(1, Math.floor(t.clientWidth / passo));
    t.scrollBy({ left: passo * porPagina * dir, behavior: "smooth" });
  };

  return (
    <section className="secao" id="exemplos">
      <div className="secao-topo">
        <h2>
          {BIOS.length}+ bios já entregues.
          <br />
          <span className="sub-linha">Role e veja as páginas por dentro.</span>
        </h2>
        <div className="parede-setas">
          <button type="button" onClick={() => rolar(-1)} aria-label="Bios anteriores">
            <Seta size={18} />
          </button>
          <button type="button" onClick={() => rolar(1)} aria-label="Próximas bios">
            <Seta size={18} />
          </button>
        </div>
      </div>

      <div className="parede" ref={trilho} tabIndex={0} role="region"
        aria-label="Bios entregues — role para o lado para ver mais">
        {BIOS.map((b) => (
          <figure className="parede-item" key={b.file}>
            <div className="parede-tela">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/bio/bios-feitos/${b.file}`} alt={`Bio de ${b.nome}`} loading="lazy" decoding="async" />
            </div>
            <figcaption>
              <strong>{b.nome}</strong>
              <span>{b.ramo}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Oferta — o único bloco com moldura na página.
   ------------------------------------------------------------ */
const INCLUI = [
  "Página com a cara da sua marca — suas cores, sua logo",
  "WhatsApp, Instagram, endereço, horário e o que mais precisar",
  "Abre rápido no celular, que é de onde seu cliente vem",
  "QR Code pra imprimir no balcão, no cardápio ou no carro",
  "Ajustes de conteúdo por 30 dias, sem custo",
];

function Oferta() {
  return (
    <section className="secao" id="comprar">
      <div className="oferta">
        <div className="oferta-preco">
          <span className="oferta-rotulo">Pagamento único</span>
          <p className="preco">
            <span className="moeda">R$</span>
            <span className="valor">{CONFIG.price}</span>
          </p>
          <p className="oferta-nota">
            Não tem mensalidade. Não tem taxa depois. Você paga uma vez e a página é sua.
          </p>
          <a href={LINKS.oferta} className="botao botao-acao botao-g botao-cheio"
            target="_blank" rel="noopener noreferrer">
            Começar pelo WhatsApp
            <Seta />
          </a>
          <a href={LINKS.duvida} className="oferta-duvida"
            target="_blank" rel="noopener noreferrer">
            Só quero tirar uma dúvida antes
          </a>
        </div>

        <ul className="oferta-lista">
          {INCLUI.map((t) => (
            <li key={t}>
              <span className="lista-check"><Check size={13} /></span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Como funciona — uma frase por etapa, porque é curto mesmo.
   ------------------------------------------------------------ */
function Etapas() {
  const passos = [
    { q: "Você chama no WhatsApp", d: "A gente tira suas dúvidas e pede o material: nome, logo, cores e links. Leva cinco minutos." },
    { q: "A gente monta", d: `Sua página fica pronta em até ${CONFIG.prazo} úteis e volta pro seu WhatsApp pra você aprovar.` },
    { q: "Você troca o link", d: "Cola na bio do Instagram no lugar do link atual. Pronto, já está no ar." },
  ];
  return (
    <section className="secao etapas">
      <h2>Como funciona</h2>
      <div className="etapas-lista">
        {passos.map((p) => (
          <div className="etapa" key={p.q}>
            <h3>{p.q}</h3>
            <p>{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Objeções — o que trava a compra, respondido direto.
   ------------------------------------------------------------ */
const DUVIDAS = [
  {
    p: "Eu não entendo nada de site. Vou ter que mexer em alguma coisa?",
    r: "Não. Você manda as informações por um formulário e a gente faz o resto. Se quiser mudar algo depois, é só pedir.",
  },
  {
    p: "Já tenho Instagram. Preciso mesmo disso?",
    r: "O Instagram é da Meta e só deixa você colocar um link. A página é sua, cabe tudo, e continua no ar mesmo se sua conta cair.",
  },
  {
    p: "Vou pagar mensalidade depois?",
    r: `Não. R$${CONFIG.price} uma vez, com hospedagem inclusa. Só cobramos de novo se você quiser uma reformulação grande depois.`,
  },
  {
    p: "E se eu não gostar do resultado?",
    r: "A gente ajusta até ficar do seu jeito. Nos primeiros 30 dias, mudanças de texto, link, cor e foto entram sem cobrança.",
  },
];

function Duvidas() {
  return (
    <section className="secao">
      <h2>Antes que você pergunte</h2>
      <div className="duvidas">
        {DUVIDAS.map((d) => (
          <details className="duvida" key={d.p}>
            <summary>
              {d.p}
              <span className="duvida-sinal" aria-hidden="true" />
            </summary>
            <p>{d.r}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Fecho() {
  return (
    <section className="secao fecho">
      <h2>
        Seu cliente já está clicando.
        <br />
        <span className="destaque">Vale a pena ele achar o que procura.</span>
      </h2>
      <a href={LINKS.principal} className="botao botao-acao botao-g"
        target="_blank" rel="noopener noreferrer">
        Chamar no WhatsApp
        <Seta />
      </a>
      <p className="fecho-nota">
        © {new Date().getFullYear()} {CONFIG.brand}
      </p>
    </section>
  );
}

/* Barra fixa no celular — o CTA nunca sai da tela. */
function BarraFixa({ visivel }: { visivel: boolean }) {
  return (
    <div className={"barra" + (visivel ? " is-visivel" : "")} aria-hidden={!visivel}>
      <div className="barra-preco">
        <span>Bio completa</span>
        <strong>R${CONFIG.price}</strong>
      </div>
      <a href={LINKS.principal} className="botao botao-acao" tabIndex={visivel ? 0 : -1}
        target="_blank" rel="noopener noreferrer">
        Chamar no zap
      </a>
    </div>
  );
}

export default function Bio2Page() {
  const [i, setI] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [barra, setBarra] = useState(false);

  /* Troca a bio do herói sozinha, até alguém escolher uma. */
  useEffect(() => {
    if (pausado) return;
    const t = setInterval(() => setI((n) => (n + 1) % 6), 4200);
    return () => clearInterval(t);
  }, [pausado]);

  const escolher = useCallback((n: number) => {
    setPausado(true);
    setI(n);
  }, []);

  /* A barra aparece depois que o herói sai da tela. */
  useEffect(() => {
    const aoRolar = () => setBarra(window.scrollY > window.innerHeight * 0.85);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <div className="b2">
      <Topo />
      <Hero i={i} setI={escolher} />
      <Problema />
      <Exemplos />
      <Oferta />
      <Etapas />
      <Duvidas />
      <Fecho />
      <BarraFixa visivel={barra} />
    </div>
  );
}
