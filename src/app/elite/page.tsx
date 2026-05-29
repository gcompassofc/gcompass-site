'use client';

import Image from 'next/image';
import { ChevronRight, Star, Phone, Gift } from 'lucide-react';
import './elite.css';

const LINKS = {
  clubeVip: "https://chat.whatsapp.com/L6RAPfH4ctGIHXrEuxidlz",
  delivery: "https://pedir.delivery/app/pizzariaeliteilhabela-loja2/menu",
  maps: "https://www.google.com/maps/place/Pizzaria+Elite+no+Shopping+Mares/data=!4m2!3m1!1s0x0:0x54279c528844467c",
  instagram: "https://www.instagram.com/eliteshoppingmares/",
  googleReview: "https://www.google.com/search?kgmid=/g/11nc5tdk3h&q=Pizzaria+Elite+no+Shopping+Mares",
  telefone: "tel:+5512988062122",
};

const PRATOS = Array.from(
  { length: 10 },
  (_, i) => `/elite/fotos/carrossel-${String(i + 1).padStart(2, "0")}.webp`
);

export default function ElitePage() {
  return (
    <main className="bg-neutral-950 min-h-screen pb-24 overflow-x-hidden">

      {/* ========================================== */}
      {/* HEADER / HERO SECTION                      */}
      {/* ========================================== */}
      <section className="relative w-full h-[45vh] md:h-[55vh] flex flex-col items-center justify-center text-center">
        <Image
          src="/elite/fotos/banner.webp"
          priority
          alt="Elite Pizzaria — Shopping Ilhabela"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold drop-shadow-lg leading-tight">
            Todos os nossos links reunidos em um só lugar.
          </h1>
        </div>
      </section>

      {/* ========================================== */}
      {/* CLUBE ELITE VIP — BOTAO DE DESTAQUE        */}
      {/* ========================================== */}
      <section className="px-4 -mt-8 md:-mt-10 relative z-30">
        <a
          href={LINKS.clubeVip}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entrar no Clube Elite VIP e participar dos sorteios semanais"
          className="elite-vip-card group relative block max-w-3xl mx-auto rounded-2xl overflow-hidden px-5 py-4 md:px-8 md:py-5 shadow-2xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99]"
        >
          {/* Shimmer deslizante */}
          <span className="elite-vip-shimmer pointer-events-none absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#f5d77a]/25 to-transparent" />

          <div className="relative z-10 flex items-center gap-4 md:gap-5">
            {/* Ícone de presente */}
            <div className="shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#f5d77a] to-[#c19a2e] shadow-lg shadow-[#d4af37]/40">
              <Gift className="elite-vip-gift w-6 h-6 md:w-7 md:h-7 text-[#1a1407]" strokeWidth={2.4} />
            </div>

            {/* Texto */}
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="elite-vip-dot inline-block w-2 h-2 rounded-full bg-[#f5d77a]" />
                <span className="text-[#f5d77a] text-[0.65rem] md:text-xs font-bold tracking-[0.18em] uppercase">
                  Sorteios toda semana
                </span>
              </div>
              <h2 className="text-white font-extrabold leading-tight text-lg md:text-2xl tracking-tight">
                Clube Elite VIP
              </h2>
              <p className="text-neutral-300 text-xs md:text-sm mt-0.5 truncate">
                Entre no grupo e concorra a prêmios toda semana.
              </p>
            </div>

            {/* CTA */}
            <span className="shrink-0 hidden sm:flex items-center gap-1.5 bg-gradient-to-br from-[#f5d77a] to-[#c19a2e] text-[#1a1407] font-bold text-sm md:text-base rounded-full px-5 py-2.5 md:px-6 md:py-3 shadow-md group-hover:shadow-lg transition-shadow whitespace-nowrap">
              Participar <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
            {/* CTA compacto (mobile) */}
            <span className="shrink-0 flex sm:hidden items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#f5d77a] to-[#c19a2e] text-[#1a1407] shadow-md">
              <ChevronRight className="w-5 h-5" />
            </span>
          </div>
        </a>
      </section>

      {/* ========================================== */}
      {/* CARDS GRANDES PRINCIPAIS                   */}
      {/* ========================================== */}
      <section className="px-4 md:px-12 mt-12 mb-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* CARD 1: DELIVERY */}
        <a href={LINKS.delivery} target="_blank" rel="noopener noreferrer" className="relative rounded-[2rem] h-[260px] md:h-[320px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image
            src="/elite/fotos/delivery.webp"
            alt="Delivery Elite Pizzaria"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-black/95 transition-colors duration-300" />
          <div className="absolute inset-0 bg-[#ea1d2c]/10 z-10 mix-blend-overlay" />

          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
            <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:-translate-y-1 transition-transform duration-300">
              Pedir <br/> Delivery
            </h3>
            <span className="bg-[#ea1d2c] text-white w-max rounded-full px-6 py-3 font-semibold text-sm flex items-center gap-2 shadow-md hover:bg-[#cc1825] transition-colors">
              Fazer pedido <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </a>

        {/* CARD 2: COMER NO LOCAL */}
        <a href={LINKS.maps} target="_blank" rel="noopener noreferrer" className="relative rounded-[2rem] h-[260px] md:h-[320px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image
            src="/elite/fotos/local.webp"
            alt="Espaço físico da Elite Pizzaria"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-black/95 transition-colors duration-300" />
          <div className="absolute inset-0 bg-[#16a34a]/10 z-10 mix-blend-overlay" />

          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
            <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:-translate-y-1 transition-transform duration-300">
              Comer no <br/> espaço físico
            </h3>
            <span className="bg-[#16a34a] text-white w-max rounded-full px-6 py-3 font-semibold text-sm flex items-center gap-2 shadow-md hover:bg-[#15803d] transition-colors">
              Ver localização <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </a>

      </section>


      {/* ========================================== */}
      {/* CATEGORIAS INFERIORES (MINI CARDS)         */}
      {/* ========================================== */}
      <section className="px-4 md:px-12 mt-12 max-w-2xl mx-auto grid grid-cols-3 gap-4 md:gap-8">

         {/* Item 1: Instagram */}
         <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center group cursor-pointer w-full mx-auto">
             <div className="relative w-16 h-16 md:w-24 md:h-24 mb-3 md:mb-4">
                 <Image src="/elite/instagram-avatar.jpg" alt="Instagram Elite Pizzaria" fill sizes="96px" className="object-cover rounded-full shadow-lg border-[3px] border-neutral-800 group-hover:border-[#ea1d2c] group-hover:-translate-y-1 transition-all duration-300" />
             </div>
             <span className="font-semibold text-neutral-300 text-xs md:text-base flex items-center gap-1 group-hover:text-white transition-colors">
                 Instagram <span className="text-[#ea1d2c] font-black leading-none pb-0.5">›</span>
             </span>
         </a>

         {/* Item 2: Avaliações */}
         <a href={LINKS.googleReview} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center group cursor-pointer w-full mx-auto">
             <div className="relative w-16 h-16 md:w-24 md:h-24 mb-3 md:mb-4 rounded-full shadow-lg border-[3px] border-neutral-800 group-hover:border-yellow-400 group-hover:-translate-y-1 bg-neutral-900 flex items-center justify-center transition-all duration-300">
                 <Star className="w-7 h-7 md:w-10 md:h-10 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
             </div>
             <span className="font-semibold text-neutral-300 text-xs md:text-base flex items-center gap-1 group-hover:text-white transition-colors">
                 Avaliações <span className="text-yellow-400 font-black leading-none pb-0.5">›</span>
             </span>
         </a>

         {/* Item 3: Precisa de ajuda? (telefone) */}
         <a href={LINKS.telefone} className="flex flex-col items-center text-center group cursor-pointer w-full mx-auto">
             <div className="relative w-16 h-16 md:w-24 md:h-24 mb-3 md:mb-4 rounded-full shadow-lg border-[3px] border-neutral-800 group-hover:border-[#16a34a] group-hover:-translate-y-1 bg-neutral-900 flex items-center justify-center transition-all duration-300">
                 <Phone className="w-7 h-7 md:w-10 md:h-10 text-[#16a34a] fill-[#16a34a] drop-shadow-sm" />
             </div>
             <span className="font-semibold text-neutral-300 text-xs md:text-base flex items-center gap-1 group-hover:text-white transition-colors">
                 Precisa de ajuda? <span className="text-[#16a34a] font-black leading-none pb-0.5">›</span>
             </span>
         </a>

      </section>

      {/* ========================================== */}
      {/* CARROSSEL INFINITO DE PRATOS (VERTICAL)    */}
      {/* ========================================== */}
      <section className="mt-20 md:mt-32 pb-4 relative">
         <h2 className="text-center text-white text-xl md:text-3xl font-bold tracking-tight mb-8 md:mb-12 px-6">
            Conheça um pouco da Elite
         </h2>
         {/* Decorative Fade Edges */}
         <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
         <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

         <div className="flex w-max elite-marquee hover:[animation-play-state:paused]">
            {/* Bloco 1 */}
            <div className="flex px-3 gap-6">
               {PRATOS.map((src, i) => (
                  <div key={`a-${i}`} className="relative w-[240px] h-[420px] md:w-[300px] md:h-[520px] rounded-[2rem] overflow-hidden shadow-sm">
                     <Image src={src} alt={`Prato Elite Pizzaria ${i + 1}`} fill sizes="(max-width: 768px) 240px, 300px" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
               ))}
            </div>

            {/* Bloco 2 (cópia exata para o loop infinito) */}
            <div className="flex px-3 pr-9 gap-6" aria-hidden="true">
               {PRATOS.map((src, i) => (
                  <div key={`b-${i}`} className="relative w-[240px] h-[420px] md:w-[300px] md:h-[520px] rounded-[2rem] overflow-hidden shadow-sm">
                     <Image src={src} alt="" fill sizes="(max-width: 768px) 240px, 300px" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
               ))}
            </div>
         </div>
      </section>

    </main>
  );
}
