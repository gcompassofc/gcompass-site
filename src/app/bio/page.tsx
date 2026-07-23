"use client";

import { useState, useRef, useEffect, type ReactNode, type CSSProperties } from "react";
import "./bio.css";

/* ============================================================
   ⚙️  CONFIG CENTRAL — edite aqui os links, preço e textos.
   Os CTAs hoje usam âncoras internas (#offer) ou placeholders.
   Troque CONFIG.checkout / CONFIG.whatsapp pelos links reais.
   ============================================================ */
const CONFIG = {
  brand: "GCompass",
  price: "197",
  // Link de compra/checkout (Pix, cartão, etc.). Troque "#" pelo link real.
  checkout: "#offer",
  // WhatsApp comercial. Ex.: "https://api.whatsapp.com/send?phone=55..."
  whatsapp: "#",
  // Accent inicial: "azul" ou "lilas"
  accent: "azul" as "azul" | "lilas",

  /* ----------------------------------------------------------------
     📱 PRINTS REAIS DAS BIOS QUE VOCÊ FEZ
     Coloque os prints (PNG/JPG) na pasta:  public/bio/  e aponte aqui.
     Para cada nicho:
       src  → caminho da imagem ("" = usa o modelo desenhado)
       mode → "cover"  : preenche a tela (corta o que sobrar)
              "scroll" : imagem comprida que ROLA dentro do celular,
                         como um site de verdade ali dentro.
     Ex.: restaurante: { src: "/bio/restaurante-bio.png", mode: "scroll" }
     ---------------------------------------------------------------- */
  bioImages: {
    imobiliaria: { src: "/bio/imobiliaria-bio.png", mode: "scroll" },
    clinica: { src: "/bio/clinica-bio.webp", mode: "scroll" },
    restaurante: { src: "/bio/restaurante-bio.png", mode: "scroll" },
    viagens: { src: "/bio/bios-feitos/saltur - agencia de viagem - mobile.png", mode: "scroll" },
  } as Record<string, { src: string; mode: "cover" | "scroll" }>,
} as const;

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

/* ---------- Ícones SVG inline ---------- */
type IconProps = { size?: number };
const Icon = {
  Whats: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
  ),
  Insta: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  Map: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Phone: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Mail: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  ),
  Cal: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  Cart: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  ),
  Doc: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  ),
  House: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  Plus: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Check: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="3">
      <path d="m5 12 5 5L20 7" />
    </svg>
  ),
  X: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
  Arrow: ({ size = 16 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  ArrowUp: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m7 17 10-10M7 7h10v10" />
    </svg>
  ),
  Star: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="currentColor">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  ),
  Wifi: ({ size = 12 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="currentColor">
      <path d="M1 9a16 16 0 0 1 22 0l-2 2a13 13 0 0 0-18 0z" />
      <path d="M5 13a10 10 0 0 1 14 0l-2 2a7 7 0 0 0-10 0z" />
      <circle cx="12" cy="20" r="2" />
    </svg>
  ),
  Battery: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={8} aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="6" width="18" height="12" rx="2" />
      <path d="M22 11v2" strokeLinecap="round" strokeWidth="2" />
      <rect x="4" y="8" width="13" height="8" rx="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Sig: ({ size = 12 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false"fill="currentColor">
      <rect x="1" y="9" width="3" height="6" />
      <rect x="6" y="6" width="3" height="9" />
      <rect x="11" y="3" width="3" height="12" />
      <rect x="16" y="0" width="3" height="15" />
    </svg>
  ),
  Plane: ({ size = 14 }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a1 1 0 0 0-.9 1.7l4.9 3.3-2.3 3.4-2.8-.3a.9.9 0 0 0-.8 1.5l2.3 2.3 2.3 2.3a.9.9 0 0 0 1.5-.8l-.3-2.8 3.4-2.3 3.3 4.9a1 1 0 0 0 1.7-.9z" />
    </svg>
  ),
};

/* ---------- Presets de nicho (conteúdo do phone mockup) ---------- */
type NicheLink = { label: string; icon: ReactNode; primary?: boolean; meta?: string };
type Niche = {
  label: string;
  tabIcon: ReactNode;
  name: string;
  tag: string;
  initial: string;
  cover: string;
  avatarBg: string;
  avatarColor: string;
  links: NicheLink[];
};

const NICHES: Record<string, Niche> = {
  imobiliaria: {
    label: "Imobiliária",
    tabIcon: <Icon.House size={14} />,
    name: "Vértice Imóveis",
    tag: "Imóveis selecionados · Zona Sul",
    initial: "V",
    cover: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 60%, #93c5fd 100%)",
    avatarBg: "#fff",
    avatarColor: "#1e3a8a",
    links: [
      { label: "Falar no WhatsApp", icon: <Icon.Whats size={12} />, primary: true, meta: "Hoje" },
      { label: "Imóveis disponíveis", icon: <Icon.House size={12} /> },
      { label: "Agendar visita", icon: <Icon.Cal size={12} /> },
      { label: "Nosso Instagram", icon: <Icon.Insta size={12} />, meta: "@vertice" },
      { label: "Como chegar", icon: <Icon.Map size={12} /> },
    ],
  },
  clinica: {
    label: "Clínica",
    tabIcon: <Icon.Plus size={14} />,
    name: "Clínica Aura",
    tag: "Estética avançada · Cuidado personalizado",
    initial: "A",
    cover: "linear-gradient(135deg, #0d9488 0%, #5eead4 60%, #ccfbf1 100%)",
    avatarBg: "#fff",
    avatarColor: "#0d9488",
    links: [
      { label: "Agendar consulta", icon: <Icon.Cal size={12} />, primary: true },
      { label: "WhatsApp da clínica", icon: <Icon.Whats size={12} /> },
      { label: "Nossos serviços", icon: <Icon.Plus size={12} /> },
      { label: "Convênios aceitos", icon: <Icon.Doc size={12} /> },
      { label: "Localização", icon: <Icon.Map size={12} /> },
    ],
  },
  restaurante: {
    label: "Restaurante",
    tabIcon: <Icon.Star size={14} />,
    name: "Casa Fornello",
    tag: "Cozinha italiana · Pinheiros",
    initial: "F",
    cover: "linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #fed7aa 100%)",
    avatarBg: "#fff",
    avatarColor: "#7c2d12",
    links: [
      { label: "Reservar mesa", icon: <Icon.Cal size={12} />, primary: true },
      { label: "Cardápio digital", icon: <Icon.Doc size={12} /> },
      { label: "Delivery iFood", icon: <Icon.Cart size={12} /> },
      { label: "WhatsApp", icon: <Icon.Whats size={12} /> },
      { label: "Como chegar", icon: <Icon.Map size={12} /> },
    ],
  },
  viagens: {
    label: "Agência de Viagens",
    tabIcon: <Icon.Plane size={14} />,
    name: "Saltur Viagens",
    tag: "Pacotes nacionais e internacionais",
    initial: "S",
    cover: "linear-gradient(135deg, #075985 0%, #0ea5e9 55%, #fbbf24 100%)",
    avatarBg: "#fff",
    avatarColor: "#075985",
    links: [
      { label: "Tirar dúvidas no WhatsApp", icon: <Icon.Whats size={12} />, primary: true },
      { label: "Pacotes em destaque", icon: <Icon.Plane size={12} /> },
      { label: "Nosso site completo", icon: <Icon.Doc size={12} /> },
      { label: "Instagram", icon: <Icon.Insta size={12} />, meta: "@saltur" },
      { label: "Fale agora", icon: <Icon.Phone size={12} /> },
    ],
  },
};

/* ---------- Bio rolável dentro do celular ----------
   Mostra a imagem comprida e uma dica "arraste para ver mais" que
   desaparece assim que o visitante começa a rolar. */
function ScrollableBio({ src, alt }: { src: string; alt: string }) {
  const [scrolled, setScrolled] = useState(false);
  return (
    <div
      className="ms-scroll"
      onScroll={(e) => {
        if (!scrolled && e.currentTarget.scrollTop > 8) setScrolled(true);
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ms-photo-tall" src={src} alt={alt} loading="lazy" decoding="async" />
      <div className={"ms-scroll-hint" + (scrolled ? " is-hidden" : "")} aria-hidden="true">
        <span className="ms-scroll-hint-dot" />
        Arraste para ver mais
      </div>
    </div>
  );
}

/* ---------- Phone bezel + screen ----------
   Se houver um print configurado em CONFIG.bioImages[niche], a tela
   mostra a SUA imagem real. Caso contrário, desenha o modelo do nicho. */
function Phone({
  niche = "imobiliaria",
  className = "",
  style,
}: {
  niche?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const n = NICHES[niche] || NICHES.imobiliaria;
  const image = CONFIG.bioImages[niche];
  return (
    <div className={"phone " + className} style={style}>
      <div className="phone-notch" />
      <div className="phone-screen">
        {image?.src ? (
          image.mode === "scroll" ? (
            <ScrollableBio src={image.src} alt={`Bio — ${n.name}`} />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img className="ms-photo" src={image.src} alt={`Bio — ${n.name}`} loading="lazy" decoding="async" />
          )
        ) : (
          <>
            <div className="phone-status">
              <span>9:41</span>
              <span className="right">
                <Icon.Sig size={12} />
                <Icon.Wifi size={12} />
                <Icon.Battery />
              </span>
            </div>
            <div className="ms">
              <div className="ms-cover" style={{ background: n.cover }} />
              <div className="ms-avatar" style={{ background: n.avatarBg, color: n.avatarColor }}>
                {n.initial}
              </div>
              <p className="ms-name">{n.name}</p>
              <p className="ms-tag">{n.tag}</p>
              <div className="ms-links">
                {n.links.map((l, i) => (
                  <div key={i} className={"ms-link" + (l.primary ? " primary" : "")}>
                    <span className="ms-link-icon">{l.icon}</span>
                    <span>{l.label}</span>
                    {l.meta && <span className="ms-link-meta">{l.meta}</span>}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Seção 1: Nav ---------- */
function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" className="brand" aria-label={CONFIG.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo" src="/bio/Logo - GCompass - escuro.png" alt={CONFIG.brand} />
        </a>
        <nav className="nav-links">
          <a href="#demo">Modelos</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#benefits">Benefícios</a>
          <a href="#offer">Oferta</a>
          <a href="#how">Como funciona</a>
          <a href={CONFIG.checkout} className="btn btn-primary btn-sm">
            Comprar — R${CONFIG.price}
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- Seção 1: Hero ---------- */
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Mini Site Comercial · {CONFIG.brand}
          </span>
          <h1 className="headline">
            Sua empresa merece mais do que <em>links soltos.</em>
          </h1>
          <p className="subhead">
            Enquanto seus concorrentes ainda usam uma bio improvisada, você pode ter um{" "}
            <strong>Mini Site Comercial personalizado</strong>, com todos os seus links reunidos,
            visual profissional e estrutura preparada para rastreamento.
          </p>
          <div className="hero-ctas">
            <a href={CONFIG.checkout} className="btn btn-primary btn-lg">
              Quero meu Mini Site
              <Icon.Arrow size={16} />
            </a>
            <a href="#demo" className="btn btn-secondary btn-lg">
              Ver modelos
            </a>
          </div>
          <p className="hero-micro">
            Pronto para celular · Personalizado com sua marca · Entregue em até 3 dias
          </p>
          <div className="hero-seals">
            <span className="seal">
              <Icon.Check size={14} />
              Entrega rápida
            </span>
            <span className="seal">
              <Icon.Check size={14} />
              Visual personalizado
            </span>
            <span className="seal">
              <Icon.Check size={14} />
              Pronto para rastreamento
            </span>
            <span className="seal">
              <Icon.Check size={14} />
              Instagram, WhatsApp e anúncios
            </span>
          </div>
        </div>

        <div className="hero-stage">
          <Phone niche="clinica" className="phone-left" />
          <Phone niche="imobiliaria" className="phone-center float" />
          <Phone niche="restaurante" className="phone-right" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Seção 2: Demo interativa por nicho ---------- */
type Blurb = { heading: ReactNode; text: string; points: string[] };
const BLURBS: Record<string, Blurb> = {
  imobiliaria: {
    heading: (
      <>
        Reúna seus <em>imóveis e contato</em> num só lugar.
      </>
    ),
    text: "Visitas, catálogo, WhatsApp e Instagram organizados em uma página pronta para anúncios.",
    points: ["WhatsApp direto para corretores", "Catálogo de imóveis disponíveis", "Agendamento de visitas com 1 toque"],
  },
  clinica: {
    heading: (
      <>
        Marcação simples, <em>cuidado profissional.</em>
      </>
    ),
    text: "Agendamento, convênios e serviços organizados de forma clara para o seu paciente.",
    points: ["Botão direto para agendamento", "Convênios aceitos com clareza", "Endereço, telefone e horários"],
  },
  restaurante: {
    heading: (
      <>
        Cardápio, reserva e <em>delivery — sem confusão.</em>
      </>
    ),
    text: "Reservas, iFood, cardápio digital e WhatsApp num só link bonito para divulgar.",
    points: ["Reservas com 1 toque", "Cardápio sempre atualizado", "Delivery linkado direto"],
  },
  viagens: {
    heading: (
      <>
        Pacotes, contato e <em>site — tudo em um link.</em>
      </>
    ),
    text: "WhatsApp, pacotes em destaque, site e redes reunidos numa página pronta para anúncios e stories.",
    points: ["WhatsApp direto para orçamento", "Pacotes em destaque com fotos", "Site e Instagram a um toque"],
  },
};

function Demo() {
  const niches = Object.keys(NICHES);
  const [active, setActive] = useState("imobiliaria");
  const [fade, setFade] = useState(false);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const switchTo = (key: string) => {
    if (key === active) return;
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    setFade(true);
    fadeTimer.current = setTimeout(() => {
      setActive(key);
      setFade(false);
    }, 220);
  };

  useEffect(() => () => {
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
  }, []);

  const blurb = BLURBS[active];

  return (
    <section className="section-tinted" id="demo">
      <div className="container">
        <div className="section-head">
          <span className="section-pill">
            <Icon.Star size={12} /> Demonstração por nicho
          </span>
          <h2 className="title">
            Veja como sua empresa pode aparecer <em>no primeiro clique.</em>
          </h2>
          <p className="lead">
            Escolha um segmento e veja como seus links podem ficar organizados em uma página
            profissional, bonita e fácil de usar.
          </p>
        </div>

        <div className="demo">
          <div className="demo-info">
            <div className="demo-tabs" role="tablist" aria-label="Escolha um segmento">
              {niches.map((k) => (
                <button
                  key={k}
                  id={`demo-tab-${k}`}
                  role="tab"
                  aria-selected={k === active}
                  aria-controls={`demo-panel-${k}`}
                  tabIndex={k === active ? 0 : -1}
                  className={"demo-tab" + (k === active ? " active" : "")}
                  onClick={() => switchTo(k)}
                  type="button"
                >
                  <span className="demo-tab-icon">{NICHES[k].tabIcon}</span>
                  {NICHES[k].label}
                </button>
              ))}
            </div>

            <div
              id={`demo-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`demo-tab-${active}`}
              className={"demo-content " + (fade ? "fade-out" : "")}
              style={{ transition: "opacity .22s" }}
            >
              <h3>{blurb.heading}</h3>
              <p>{blurb.text}</p>
              <div className="demo-points">
                {blurb.points.map((p, i) => (
                  <div className="demo-point" key={i}>
                    <Icon.Check size={16} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={CONFIG.checkout} className="btn btn-dark">
                  Quero meu modelo
                  <Icon.Arrow size={14} />
                </a>
                <a href="#offer" className="btn btn-secondary">
                  Ver oferta
                </a>
              </div>
            </div>
          </div>

          <div className="demo-stage">
            <div className={"demo-phone-anim " + (fade ? "fade-out" : "")}>
              <Phone niche={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Seção 4: Benefícios ---------- */
function Benefits() {
  const items = [
    { icon: <Icon.Star size={20} />, h: "Presença digital mais profissional", p: "Sua empresa passa mais confiança logo no primeiro clique." },
    { icon: <Icon.Plus size={20} />, h: "Todos os links reunidos em um só lugar", p: "WhatsApp, Instagram, localização, serviços, ofertas e informações organizados." },
    { icon: <Icon.ArrowUp size={20} />, h: "Inteligência para ir atrás do cliente", p: "Estrutura preparada para rastrear acessos, cliques e criar públicos para campanhas.", feature: true },
    { icon: <Icon.Check size={20} />, h: "Primeiro impacto diferenciado", p: "O cliente percebe uma empresa mais organizada, moderna e confiável." },
    { icon: <Icon.Doc size={20} />, h: "Visual personalizado para sua marca", p: "Nada genérico. A página segue as cores, identidade e estilo da sua empresa." },
    { icon: <Icon.House size={20} />, h: "Base para Google e inteligência artificial", p: "Primeiro passo para construir presença indexável e mais organizada na internet." },
  ];
  return (
    <section id="benefits">
      <div className="container">
        <div className="section-head">
          <span className="section-pill">
            <Icon.Plus size={12} /> O que muda
          </span>
          <h2 className="title">
            O que muda quando sua empresa tem um <em>Mini Site Comercial?</em>
          </h2>
          <p className="lead">
            Não é só estética. É um conjunto de pequenas vantagens que somadas mudam a forma como
            sua empresa é percebida e medida no digital.
          </p>
        </div>

        <div className="benefits-grid">
          {items.map((it, i) => (
            <div key={i} className={"benefit-card" + (it.feature ? " feature" : "")}>
              <div className="benefit-icon">{it.icon}</div>
              <h3>{it.h}</h3>
              <p>{it.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Seção 5: Autoridade ---------- */
function Authority() {
  const competitors = [
    { label: "Concorrente A", w: "42%", num: "42%" },
    { label: "Concorrente B", w: "31%", num: "31%" },
    { label: "Concorrente C", w: "55%", num: "55%" },
  ];
  return (
    <section className="section-tinted">
      <div className="container">
        <div className="authority">
          <div>
            <span className="section-pill">
              <Icon.ArrowUp size={12} /> À frente dos concorrentes
            </span>
            <h2 className="title" style={{ marginTop: 18, textAlign: "left" }}>
              Enquanto muitos negócios ainda improvisam, você começa a <em>construir presença.</em>
            </h2>
            <p className="lead" style={{ textAlign: "left", marginTop: 8 }}>
              Seu concorrente pode até ter Instagram. Mas isso não significa que ele tem uma
              estrutura profissional. Com um Mini Site Comercial, sua empresa organiza a experiência
              do cliente, melhora o primeiro impacto e cria base para campanhas, rastreamento,
              Google e inteligência artificial.
            </p>
            <p className="quote">No digital, quem organiza melhor o caminho do cliente sai na frente.</p>
          </div>
          <div className="authority-visual">
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "var(--muted)",
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: ".05em",
              }}
            >
              Primeiro impacto · simulação
            </div>
            <div className="race-row">
              <span className="race-label">Você</span>
              <div className="race-bar">
                <div className="fill" style={{ width: "92%" }} />
              </div>
              <span className="race-num">92%</span>
            </div>
            {competitors.map((c) => (
              <div className="race-row gen" key={c.label}>
                <span className="race-label">{c.label}</span>
                <div className="race-bar">
                  <div className="fill" style={{ width: c.w }} />
                </div>
                <span className="race-num">{c.num}</span>
              </div>
            ))}
            <div style={{ fontSize: 11, color: "var(--muted-2)", marginTop: 10, lineHeight: 1.4 }}>
              * Percepção de profissionalismo em estudo qualitativo com bios de Instagram vs Mini
              Sites Comerciais {CONFIG.brand}.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Seção 6: Oferta ---------- */
function Offer() {
  const includes = [
    "Página personalizada com identidade da sua marca",
    "WhatsApp, Instagram, localização e links principais",
    "Botões comerciais organizados e priorizados",
    "Otimizada para celular, com carregamento rápido",
    "Estrutura base para rastreamento de cliques",
    "Preparação para presença no Google e IA",
    "QR Code personalizado de bônus",
  ];
  return (
    <section id="offer">
      <div className="container">
        <div className="section-head">
          <span className="section-pill">
            <Icon.Star size={12} /> Oferta única
          </span>
          <h2 className="title">
            Mini Site Comercial por <em>R${CONFIG.price}.</em>
          </h2>
          <p className="lead">
            Uma página personalizada para centralizar seus links, fortalecer sua presença digital e
            preparar sua empresa para vender melhor no online.
          </p>
        </div>

        <div className="offer-wrap">
          <div className="offer-card">
            <div className="offer-price">
              <span className="currency">R$</span>
              <span className="amount">{CONFIG.price}</span>
            </div>
            <div className="offer-once">
              Pagamento único
              <span className="pay-pill">
                <Icon.Check size={10} /> sem mensalidade
              </span>
            </div>
            <p className="lead" style={{ fontSize: 16 }}>
              Tudo incluso, sem custos recorrentes. Sua página fica pronta em até 3 dias.
            </p>
            <ul className="offer-includes">
              {includes.map((t, i) => (
                <li key={i}>
                  <span className="check">
                    <Icon.Check size={12} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <a href={CONFIG.checkout} className="btn btn-primary btn-lg" style={{ width: "100%" }}>
              Quero criar meu Mini Site
              <Icon.Arrow size={16} />
            </a>
          </div>

          <div className="offer-aside">
            <div>
              <span className="section-pill" style={{ background: "rgba(255,255,255,.08)", color: "#fff" }}>
                <Icon.Star size={12} /> Para quem é
              </span>
              <h3 style={{ marginTop: 18 }}>
                Para a empresa que quer parecer preparada — não improvisada.
              </h3>
              <p>
                Imobiliárias, clínicas, restaurantes, lojas, prestadores de serviço. Qualquer
                negócio que precisa de presença digital organizada para receber bem o cliente que
                chega pelo Instagram, anúncios ou WhatsApp.
              </p>
            </div>
            <div className="meta-row">
              <div className="meta">
                <span className="k">Prazo</span>
                <span className="v">Até 3 dias úteis</span>
              </div>
              <div className="meta">
                <span className="k">Pagamento</span>
                <span className="v">Pix, cartão ou boleto</span>
              </div>
              <div className="meta">
                <span className="k">Suporte</span>
                <span className="v">Time {CONFIG.brand}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Seção 7: Inteligência (dashboard) ---------- */
function Intelligence() {
  const clicks = [
    { label: "WhatsApp", w: "82%", num: "317" },
    { label: "Instagram", w: "58%", num: "221" },
    { label: "Catálogo", w: "44%", num: "168" },
    { label: "Localização", w: "28%", num: "107" },
    { label: "Telefone", w: "18%", num: "68" },
  ];
  return (
    <section className="section-dark">
      <div className="container">
        <div className="intel">
          <div className="intel-info">
            <span className="section-pill">
              <Icon.ArrowUp size={12} /> Rastreamento e inteligência
            </span>
            <h2 className="title" style={{ marginTop: 18, textAlign: "left", color: "#fff" }}>
              Bonito por fora. <em>Inteligente por dentro.</em>
            </h2>
            <p className="lead" style={{ textAlign: "left" }}>
              Além de deixar sua empresa mais profissional, o Mini Site pode ser preparado para
              gerar dados importantes sobre o comportamento dos visitantes.
            </p>
            <div className="intel-list" style={{ marginTop: 24 }}>
              {[
                "Saber quantas pessoas acessaram",
                "Entender quais botões receberam mais cliques",
                "Medir interesse por canal de contato",
                "Criar públicos para campanhas futuras",
                "Ir atrás de quem demonstrou interesse",
              ].map((t) => (
                <div className="item" key={t}>
                  <span className="item-dot">
                    <Icon.Check size={14} />
                  </span>
                  {t}
                </div>
              ))}
            </div>
            <p className="intel-quote">
              Marketing de verdade começa quando você para de apenas aparecer e começa a medir.
            </p>
          </div>

          <div className="dashboard">
            <div className="dash-head">
              <div className="h-title">Visão geral — últimos 7 dias</div>
              <span className="h-live">ao vivo</span>
            </div>
            <div className="dash-grid">
              <div className="dash-stat">
                <div className="k">Visitas</div>
                <div className="v">1.284</div>
                <div className="d">+38%</div>
              </div>
              <div className="dash-stat">
                <div className="k">Cliques</div>
                <div className="v">912</div>
                <div className="d">+24%</div>
              </div>
              <div className="dash-stat">
                <div className="k">WhatsApp</div>
                <div className="v">317</div>
                <div className="d">+52%</div>
              </div>
            </div>
            <div className="dash-chart">
              <svg viewBox="0 0 300 130" preserveAspectRatio="none" width="100%" height="100%" aria-hidden="true" focusable="false">
                <defs>
                  <linearGradient id="bio-g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,90 C30,80 50,70 80,60 C110,50 130,72 160,55 C190,40 215,30 240,22 C265,18 285,10 300,8 L300,130 L0,130 Z"
                  fill="url(#bio-g1)"
                />
                <path
                  d="M0,90 C30,80 50,70 80,60 C110,50 130,72 160,55 C190,40 215,30 240,22 C265,18 285,10 300,8"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  fill="none"
                />
                <circle cx="240" cy="22" r="4" fill="var(--accent)" />
                <circle cx="240" cy="22" r="10" fill="var(--accent)" fillOpacity="0.2" />
              </svg>
            </div>
            <div className="dash-clicks">
              {clicks.map((c) => (
                <div className="click-row" key={c.label}>
                  <span className="label">{c.label}</span>
                  <div className="bar">
                    <div className="fill" style={{ "--w": c.w } as CSSProperties} />
                  </div>
                  <span className="num">{c.num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Seção 8: Google & IA ---------- */
function GoogleAI() {
  return (
    <section className="section-tinted">
      <div className="container">
        <div className="section-head">
          <span className="section-pill">
            <Icon.Star size={12} /> Encontrabilidade
          </span>
          <h2 className="title">
            Sua empresa também precisa <em>ser encontrada.</em>
          </h2>
          <p className="lead">
            Se sua empresa ainda depende apenas do Instagram e do WhatsApp, ela está limitada. O
            Mini Site cria uma estrutura própria na internet — com informações organizadas sobre sua
            empresa, seus serviços e seus canais de contato. Isso ajuda a construir base para
            Google, mecanismos de busca e inteligências artificiais.
          </p>
        </div>

        <div className="search-mock">
          <div className="search-bar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5b6072" strokeWidth="2" aria-hidden="true" focusable="false">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              readOnly
              tabIndex={-1}
              aria-label="Exemplo de busca no Google"
              defaultValue="vértice imóveis zona sul"
            />
          </div>
          <div className="search-results">
            <div className="search-result your">
              <div className="url is-yours">
                <span className="favicon">V</span>
                vertice-imoveis.gcompass.site
              </div>
              <a href="#" className="h">
                Vértice Imóveis · Imóveis selecionados na Zona Sul
              </a>
              <p className="desc">
                WhatsApp direto, imóveis disponíveis e agendamento de visita em um só lugar.
                Atendimento de segunda a sábado.
              </p>
            </div>
            <div className="search-result">
              <div className="url">instagram.com/vertice</div>
              <a href="#" className="h">
                Vértice Imóveis (@vertice) · Instagram
              </a>
              <p className="desc">25 publicações · Veja as fotos e vídeos do Instagram da Vértice Imóveis.</p>
            </div>
            <div className="search-result">
              <div className="url">facebook.com/vertice</div>
              <a href="#" className="h">
                Vértice Imóveis | Facebook
              </a>
              <p className="desc">Página com informações de contato e algumas publicações da imobiliária.</p>
            </div>
          </div>
        </div>

        <div className="ai-mock">
          <div className="ai-head">
            <span className="dot" />
            Assistente · resposta
          </div>
          <div>
            &quot;Imobiliárias na Zona Sul com bom atendimento incluem a{" "}
            <mark>Vértice Imóveis</mark>, que tem uma página comercial organizada com WhatsApp
            direto, catálogo de imóveis e agendamento de visitas online.&quot;
            <span className="typing" />
          </div>
          <div style={{ marginTop: 14, fontSize: 12, color: "rgba(255,255,255,.45)" }}>
            * Exemplo ilustrativo. O Mini Site ajuda a organizar e indexar as informações da sua
            empresa — não garante ranking ou aparição automática em IAs.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Seção 9: Como funciona (timeline) ---------- */
function HowItWorks() {
  return (
    <section id="how">
      <div className="container">
        <div className="section-head">
          <span className="section-pill">
            <Icon.Cal size={12} /> Como funciona
          </span>
          <h2 className="title">
            Seu Mini Site pronto em <em>até 3 dias.</em>
          </h2>
          <p className="lead">
            Um processo simples, sem reuniões longas. Você envia, a gente monta, você aprova.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-step">
            <div className="timeline-icon">
              <Icon.Mail size={20} />
            </div>
            <span className="timeline-day">Dia 1 · Briefing</span>
            <h3>Envio das informações</h3>
            <p>
              Nome, logo, cores, WhatsApp, Instagram, localização, links e serviços principais. Tudo
              via formulário simples.
            </p>
          </div>
          <div className="timeline-step">
            <div className="timeline-icon">
              <Icon.Doc size={20} />
            </div>
            <span className="timeline-day">Dia 2 · Produção</span>
            <h3>Criação da página</h3>
            <p>
              Nossa equipe organiza tudo, aplica sua identidade visual e monta seu Mini Site
              Comercial.
            </p>
          </div>
          <div className="timeline-step">
            <div className="timeline-icon">
              <Icon.Check size={20} />
            </div>
            <span className="timeline-day">Dia 3 · Entrega</span>
            <h3>Pronto para usar</h3>
            <p>
              Você recebe o link para colocar na bio, divulgar no WhatsApp, usar em anúncios ou
              transformar em QR Code.
            </p>
          </div>
        </div>

        <div className="fast-card">
          <div>
            <h3>Quer receber mais rápido?</h3>
            <p>
              Depois da compra, você é direcionado para uma página de obrigado com o formulário
              completo. Quanto mais rápido você enviar as informações, mais rápido começamos sua
              página — em alguns casos, reduzimos até 1 dia do prazo.
            </p>
          </div>
          <a href={CONFIG.checkout} className="btn btn-primary btn-lg fast-cta">
            Acelerar entrega
            <Icon.Arrow size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Seção 10: CTA final ---------- */
function Finale() {
  return (
    <section className="finale">
      <div className="container">
        <span className="section-pill">
          <Icon.Star size={12} /> É a hora
        </span>
        <h2 className="title" style={{ marginTop: 18 }}>
          Seu cliente já está <em>clicando.</em>
        </h2>
        <p className="lead" style={{ maxWidth: 680, margin: "0 auto" }}>
          A pergunta é: quando ele clica, sua empresa parece comum ou parece preparada? Por{" "}
          <span className="price-inline">R${CONFIG.price}</span>, você organiza sua presença
          digital, melhora o primeiro impacto, reúne seus links em um só lugar e começa a construir
          uma estrutura mais inteligente para o futuro.
        </p>
        <div className="finale-ctas">
          <a href={CONFIG.checkout} className="btn btn-primary btn-lg">
            Quero meu Mini Site Comercial
            <Icon.Arrow size={16} />
          </a>
          <a href="#demo" className="btn btn-secondary btn-lg">
            Ver modelos antes
          </a>
        </div>
        <p className="finale-micro">Compra rápida · Briefing simples · Entrega em até 3 dias</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bio-footer">
      <div className="container footer-inner">
        <a href="#" className="brand" aria-label={CONFIG.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo" src="/bio/Logo - GCompass - escuro.png" alt={CONFIG.brand} />
        </a>
        <div className="footer-links">
          <a href="#">Termos</a>
          <a href="#">Privacidade</a>
          <a href="#">Contato</a>
        </div>
        <div className="footer-meta">
          © {new Date().getFullYear()} {CONFIG.brand} · Mini Site Comercial
        </div>
      </div>
    </footer>
  );
}

/* ---------- Portfólio de Bios ---------- */
const PORTFOLIO_ITEMS = [
  { title: "Atelie For House", file: "Atelie For House.webp", tag: "Decoração & Design" },
  { title: "Bio Aline", file: "Bio-aline.webp", tag: "Profissional Liberal" },
  { title: "Bio Junior", file: "Bio-junior.webp", tag: "Personal Trainer" },
  { title: "Bio Thais", file: "Bio-thais.webp", tag: "Estética & Beleza" },
  { title: "Carina Bio", file: "Carina_Bio.webp", tag: "Saúde & Bem-estar" },
  { title: "Dk Bio", file: "Dk_bio.webp", tag: "Moda & Acessórios" },
  { title: "Dra Jussara", file: "Dra Jussara.webp", tag: "Medicina & Clínicas" },
  { title: "Flor de Canela", file: "Flor de Canela.webp", tag: "Gastronomia & Doceria" },
  { title: "Hinode Center", file: "Hinode center.webp", tag: "Cosméticos & Vendas" },
  { title: "Luigi", file: "Luigi.webp", tag: "Restaurantes & Bares" },
  { title: "Maria Flor", file: "Maria Flor.webp", tag: "Moda Feminina" },
  { title: "Move Fácil", file: "Move-facil_Final.webp", tag: "Serviços & Mudanças" },
  { title: "Pharmalab", file: "Pharmalab.webp", tag: "Farmácia & Laboratórios" },
  { title: "Regilaine", file: "Regilaine_bio.webp", tag: "Advocacia & Consultoria" },
  { title: "Vibe Sma", file: "Vibe_smabio.webp", tag: "Eventos & Entretenimento" },
  { title: "Bills Bio", file: "bills-bio.webp", tag: "Finanças & Negócios" },
  { title: "Nutri Jose Augusto", file: "nutrijoseaugusto_bio.webp", tag: "Nutrição & Esportes" },
  { title: "Saltur Viagens", file: "saltur - agencia de viagem.png", tag: "Agência de Viagens" },
];

function PortfolioCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Avança exatamente uma "página" — os cards visíveis no momento (3 / 2 / 1),
     medindo o card real para acertar o encaixe em qualquer breakpoint. */
  const scroll = (direction: "left" | "right") => {
    const track = scrollRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".portfolio-item-card");
    if (!card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const step = card.getBoundingClientRect().width + gap;
    const perPage = Math.max(1, Math.round(track.clientWidth / step));
    const offset = step * perPage * (direction === "left" ? -1 : 1);

    track.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-head">
          <span className="section-pill">
            <Icon.Star size={12} /> Galeria de Projetos
          </span>
          <h2 className="title">
            Mais de 15 links de <em>bios reais entregues.</em>
          </h2>
          <p className="lead">
            Veja exemplos reais de páginas que criamos para nossos clientes. Passe o mouse sobre as imagens — no celular, elas rolam sozinhas para revelar a página completa.
          </p>
        </div>

        <div className="portfolio-carousel-wrapper">
          <button className="carousel-btn prev" onClick={() => scroll("left")} aria-label="Anterior">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" focusable="false">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div
            className="portfolio-carousel-track"
            ref={scrollRef}
            tabIndex={0}
            role="region"
            aria-label="Galeria de bios entregues — role para ver mais"
          >
            {PORTFOLIO_ITEMS.map((item) => (
              <div className="portfolio-item-card" key={item.file}>
                <div className="portfolio-card-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="portfolio-img"
                    src={`/bio/bios-feitos/${item.file}`}
                    alt={`Link bio - ${item.title}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="portfolio-meta">
                  <h3>{item.title}</h3>
                  <span>{item.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={() => scroll("right")} aria-label="Próximo">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" focusable="false">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Dados estruturados (Schema.org) ----------
   Ajuda Google e IAs a entenderem que a página vende um serviço com preço.
   Sem aggregateRating/review (não há avaliações reais) — as barras "92%" e o
   dashboard da página são ilustrativos e NÃO são modelados aqui. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Mini Site Comercial GCompass",
  description:
    "Página profissional que reúne WhatsApp, Instagram, localização e todos os links da sua marca em um só lugar. Personalizada e entregue em até 3 dias.",
  brand: { "@type": "Brand", name: CONFIG.brand },
  offers: {
    "@type": "Offer",
    price: CONFIG.price,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: "https://gcompass.com.br/bio",
  },
};

/* ---------- Página ---------- */
export default function BioPage() {
  return (
    <div className="bio-root" data-accent={CONFIG.accent}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Nav />
      <Hero />
      <Demo />
      <PortfolioCarousel />
      <Benefits />
      <Authority />
      <Offer />
      <Intelligence />
      <GoogleAI />
      <HowItWorks />
      <Finale />
      <Footer />
    </div>
  );
}
