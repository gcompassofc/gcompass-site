"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, type MouseEvent, type ReactNode } from "react";
import {
  Instagram,
  Globe,
  Facebook,
  MessageCircle,
  PhoneCall,
  MapPin,
  Plane,
  ChevronDown,
  Star,
} from "lucide-react";

// ⚙️ Configuração central — substitua pelos contatos oficiais da Saltur
const CONFIG = {
  whatsapp: "https://api.whatsapp.com/send?phone=555421016161&text=Ol%C3%A1%21%20Vim%20pelo%20link%20da%20bio.",
  phoneTel: "tel:+555421016161",
  site: "https://www.saltur.com.br",
  facebook: "https://www.facebook.com/saltur.viagenseturismo/",
  instagram: "https://www.instagram.com/salturviagenseturismo/",
  heroVideo: "/saltur-bio/hero-saltur.mp4",
  brand: "#FEA601",
};

type SocialLink = {
  id: "facebook" | "instagram";
  title: string;
  prefix: string;
  url: string;
  icon: ReactNode;
  className: string;
};

type PrimaryLink = {
  id: "whatsapp" | "site" | "contato";
  title: string;
  subtitle: string;
  url: string;
  icon: ReactNode;
  image: string;
  tone: "dark" | "orange";
};

type Tour = {
  title: string;
  location: string;
  image: string;
  url: string;
};

const socialLinks: SocialLink[] = [
  {
    id: "facebook",
    title: "Facebook",
    prefix: "Veja o nosso",
    url: CONFIG.facebook,
    icon: <Facebook className="w-7 h-7" />,
    className: "bg-[#1877F2]",
  },
  {
    id: "instagram",
    title: "Instagram",
    prefix: "Acesse nosso",
    url: CONFIG.instagram,
    icon: <Instagram className="w-7 h-7" />,
    className: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500",
  },
];

const primaryLinks: PrimaryLink[] = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    subtitle: "Tire suas dúvidas agora",
    url: CONFIG.whatsapp,
    icon: <MessageCircle className="w-8 h-8" />,
    image: "/saltur-bio/whatsapp-saltur.jpg",
    tone: "dark",
  },
  {
    id: "site",
    title: "Nosso Site",
    subtitle: "Pacotes completos",
    url: CONFIG.site,
    icon: <Globe className="w-8 h-8" />,
    image: "/saltur-bio/site-saltur.jpg",
    tone: "dark",
  },
  {
    id: "contato",
    title: "Falar Agora",
    subtitle: "Especialista Online",
    url: CONFIG.phoneTel,
    icon: <PhoneCall className="w-8 h-8" />,
    image: "/saltur-bio/atendimento-saltur.jpg",
    tone: "orange",
  },
];

const featuredTours: Tour[] = [
  {
    title: "Circuito Italiano",
    location: "Itália",
    image:
      "https://www.saltur.com.br/uploads/yIHVnN6jqyTnNiiYN8ZCp6CAlXAXn9A8Ijr42yIu.jpg",
    url: "https://www.saltur.com.br/pacote/italia-cicuito-italiano",
  },
  {
    title: "Bloqueio Porto de Galinhas",
    location: "Pernambuco, Brasil",
    image:
      "https://saltur.com.br/uploads/destinations/2e71b030-1e37-11f1-8930-02006e230003.jpg",
    url: "https://www.saltur.com.br/pacote/bloqueio-porto-de-galinhas",
  },
];

const externalProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export default function SalturBioPage() {
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFloat(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToLinks = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("links")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-[#fcfcfc] text-gray-900 selection:bg-[#FEA601]/30"
      style={{ fontFamily: "var(--font-saltur), Montserrat, system-ui, sans-serif" }}
    >
      <AnimatePresence>
        {showFloat && (
          <motion.a
            href={CONFIG.whatsapp}
            {...externalProps}
            aria-label="Conversar no WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 border-2 border-white"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-bold text-sm pr-2 hidden sm:block">Chamar no WhatsApp</span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a1a2f]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={CONFIG.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55 z-10" />

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6 bg-white/10 backdrop-blur-md w-fit mx-auto px-4 py-2 rounded-full border border-white/20"
          >
            <Star className="w-4 h-4 text-[#FEA601] fill-[#FEA601]" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              47 anos de história
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-semibold text-white mb-6 tracking-tight leading-[0.9]"
          >
            Saltur Viagens <br />
            <span className="text-[#FEA601] drop-shadow-lg">e Turismo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white/90 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto italic"
          >
            Sonhe... Planeje... Viaje...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="#links"
              onClick={scrollToLinks}
              className="bg-[#FEA601] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_20px_50px_rgba(254,166,1,0.4)] flex items-center gap-3 mx-auto w-fit active:scale-95"
            >
              Ver nossos links
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      <main id="links" className="max-w-4xl mx-auto px-6 pt-24 pb-24">
        {/* Social row */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              {...externalProps}
              aria-label={`Abrir ${link.title} da Saltur`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.04 }}
              className={`flex items-center gap-3 p-4 rounded-[28px] text-white shadow-lg border-2 border-white group ${link.className}`}
            >
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none mb-1">
                  {link.prefix}
                </span>
                <span className="font-black text-sm uppercase tracking-tight">{link.title}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Primary vertical links */}
        <div className="flex flex-col gap-6 mb-24">
          {primaryLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              {...(link.id === "contato" ? {} : externalProps)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative w-full max-w-[846px] aspect-[16/9] md:aspect-[846/251] rounded-[40px] overflow-hidden bg-white shadow-xl border border-gray-50 flex items-center mx-auto"
            >
              <div className="absolute inset-0">
                <img
                  src={link.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    link.tone === "orange" ? "from-orange-600/90" : "from-black/80"
                  } via-transparent to-transparent`}
                />
              </div>

              <div className="relative p-8 md:p-10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[#FEA601] transition-colors">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {link.title}
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">
                    {link.subtitle}
                  </p>
                </div>
              </div>

              <div className="absolute right-8 md:right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-white">
                <ChevronDown className="w-8 h-8 -rotate-90" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Featured tours */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-semibold tracking-tight">Pacotes em Destaque</h2>
            <div className="h-[2px] flex-1 bg-gray-100 mx-8 hidden sm:block" />
            <Plane className="text-[#FEA601] w-6 h-6 rotate-45" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredTours.map((tour, index) => (
              <motion.a
                key={tour.title}
                href={tour.url}
                {...externalProps}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 * index }}
                className="group relative h-80 rounded-[40px] overflow-hidden shadow-xl border-2 border-white"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-3 h-3 text-[#FEA601]" />
                    <span className="text-[10px] font-bold text-[#FEA601] uppercase tracking-[0.2em]">
                      {tour.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white leading-tight mb-4">
                    {tour.title}
                  </h3>
                  <div className="flex justify-center items-center bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 group-hover:bg-white/20 transition-colors">
                    <span className="w-full text-center bg-white text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest group-hover:bg-[#FEA601] group-hover:text-white transition-all">
                      Quero saber mais
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <footer className="text-center pt-16 border-t border-gray-100 mt-20">
          <div className="flex justify-center gap-8 mb-10 text-gray-400">
            <a href={CONFIG.instagram} {...externalProps} aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
            </a>
            <a href={CONFIG.facebook} {...externalProps} aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-[#1877F2] transition-colors" />
            </a>
            <a href={CONFIG.whatsapp} {...externalProps} aria-label="WhatsApp">
              <MessageCircle className="w-6 h-6 hover:text-green-500 transition-colors" />
            </a>
          </div>
          <p className="text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
            Saltur Viagens & Turismo &copy; {new Date().getFullYear()}
          </p>
          <p className="text-[10px] text-gray-300 mt-4 uppercase tracking-widest">
            Roteiros com alma e estratégia
          </p>
        </footer>
      </main>
    </div>
  );
}
