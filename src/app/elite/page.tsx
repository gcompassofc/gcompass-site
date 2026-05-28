'use client';

import Image from 'next/image';
import { ChevronRight, Star, MapPin } from 'lucide-react';
import './elite.css';

const LINKS = {
  ifood: "https://www.ifood.com.br/delivery/ilhabela-sp/elite-pizzaria",
  whatsappPedido: "https://wa.me/5512988062122?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20na%20Elite%20Shopping",
  whatsappReserva: "https://wa.me/5512988062122?text=Ol%C3%A1!%20Quero%20reservar%20uma%20mesa",
  maps: "https://maps.app.goo.gl/",
  cardapio: "https://cardapio.digital/elite",
  instagram: "https://www.instagram.com/eliteshoppingmares/",
  googleReview: "https://share.google/khB7baRFsLCClIpbe"
};

export default function ElitePage() {
  return (
    <main className="bg-neutral-950 min-h-screen pb-24 overflow-x-hidden">

      {/* ========================================== */}
      {/* HEADER / HERO SECTION                      */}
      {/* ========================================== */}
      <section className="relative w-full h-[45vh] md:h-[55vh] flex flex-col items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop"
          priority
          alt="Pizza Napolitana da Elite"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold drop-shadow-lg leading-tight">
            Todos os nossos links reunidos em um só lugar.
          </h1>
        </div>
      </section>

      {/* ========================================== */}
      {/* BOTAO DE LOCALIZACAO                       */}
      {/* ========================================== */}
      <section className="text-center px-4 -mt-7 md:-mt-8 relative z-30">
        <div className="max-w-3xl mx-auto flex h-14 md:h-16 shadow-2xl group">
          <div className="flex-1 border border-neutral-800 border-r-0 rounded-l-xl overflow-hidden flex items-center px-4 gap-3 bg-neutral-900/95 backdrop-blur-md">
             <MapPin className="w-5 h-5 text-[#ea1d2c] shrink-0 group-hover:scale-110 transition-transform" />
             <input type="text" readOnly value="Av. São João, 492 - Shopping Ilhabela" className="w-full bg-transparent focus:outline-none text-white font-semibold cursor-default py-4 truncate text-sm md:text-lg" />
          </div>
          <a href={LINKS.maps} className="bg-[#ea1d2c] hover:bg-[#cc1825] transition text-white font-bold px-6 md:px-10 rounded-r-xl flex items-center justify-center text-sm md:text-base whitespace-nowrap shadow-lg">
             Ver local físico
          </a>
        </div>
      </section>

      {/* ========================================== */}
      {/* CARDS GRANDES PRINCIPAIS                   */}
      {/* ========================================== */}
      <section className="px-4 md:px-12 mt-12 mb-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* CARD 1: DELIVERY DIRETO */}
        <a href={LINKS.whatsappPedido} className="relative rounded-[2rem] h-[260px] md:h-[320px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop"
            alt="Delivery Pizza"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
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
        <a href={LINKS.maps} className="relative rounded-[2rem] h-[260px] md:h-[320px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop"
            alt="Restaurante"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
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
      <section className="px-4 md:px-12 mt-12 max-w-2xl mx-auto grid grid-cols-2 gap-8">

         {/* Item 1: Instagram */}
         <a href={LINKS.instagram} className="flex flex-col items-center group cursor-pointer w-full mx-auto">
             <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                 <Image src="/elite/instagram-avatar.jpg" alt="Instagram Elite Pizzaria" fill sizes="96px" className="object-cover rounded-full shadow-lg border-[3px] border-neutral-800 group-hover:border-[#ea1d2c] group-hover:-translate-y-1 transition-all duration-300" />
             </div>
             <span className="font-semibold text-neutral-300 text-sm md:text-base flex items-center gap-1 group-hover:text-white transition-colors whitespace-nowrap">
                 Instagram <span className="text-[#ea1d2c] font-black leading-none pb-0.5">›</span>
             </span>
         </a>

         {/* Item 2: Avaliações */}
         <a href={LINKS.googleReview} className="flex flex-col items-center group cursor-pointer w-full mx-auto">
             <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full shadow-lg border-[3px] border-neutral-800 group-hover:border-yellow-400 group-hover:-translate-y-1 bg-neutral-900 flex items-center justify-center transition-all duration-300">
                 <Star className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
             </div>
             <span className="font-semibold text-neutral-300 text-sm md:text-base flex items-center gap-1 group-hover:text-white transition-colors whitespace-nowrap">
                 Avaliações Google <span className="text-yellow-400 font-black leading-none pb-0.5">›</span>
             </span>
         </a>

      </section>

      {/* ========================================== */}
      {/* CARROSSEL INFINITO DE PRATOS               */}
      {/* ========================================== */}
      <section className="mt-20 md:mt-32 pb-4 relative">
         {/* Decorative Fade Edges */}
         <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
         <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

         <div className="flex w-max elite-marquee hover:[animation-play-state:paused]">
            {/* Bloco 1 */}
            <div className="flex px-3 gap-6">
               <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] rounded-[2rem] overflow-hidden shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop" alt="Prato Elite" fill sizes="(max-width: 768px) 280px, 400px" className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] rounded-[2rem] overflow-hidden shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop" alt="Prato Elite" fill sizes="(max-width: 768px) 280px, 400px" className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] rounded-[2rem] overflow-hidden shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop" alt="Prato Elite" fill sizes="(max-width: 768px) 280px, 400px" className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] rounded-[2rem] overflow-hidden shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop" alt="Prato Elite" fill sizes="(max-width: 768px) 280px, 400px" className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] rounded-[2rem] overflow-hidden shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=800&auto=format&fit=crop" alt="Prato Elite" fill sizes="(max-width: 768px) 280px, 400px" className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
            </div>

            {/* Bloco 2 (Cópia exata para o loop infinito) */}
            <div className="flex px-3 pr-9 gap-6" aria-hidden="true">
               <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] rounded-[2rem] overflow-hidden shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop" alt="" fill sizes="(max-width: 768px) 280px, 400px" className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] rounded-[2rem] overflow-hidden shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop" alt="" fill sizes="(max-width: 768px) 280px, 400px" className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] rounded-[2rem] overflow-hidden shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop" alt="" fill sizes="(max-width: 768px) 280px, 400px" className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] rounded-[2rem] overflow-hidden shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop" alt="" fill sizes="(max-width: 768px) 280px, 400px" className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] rounded-[2rem] overflow-hidden shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=800&auto=format&fit=crop" alt="" fill sizes="(max-width: 768px) 280px, 400px" className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}
