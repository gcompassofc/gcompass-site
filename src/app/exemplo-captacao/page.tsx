"use client";

import "./style.css";
import { HeroVideoDemo } from "./components/HeroVideoDemo";
import OProblema from "./components/OProblema";
import ComoFunciona from "./components/ComoFunciona";
import OAmbiente from "./components/OAmbiente";
import Filtro from "./components/Filtro";
import DezesseisAnos from "./components/DezesseisAnos";
import Formulario from "./components/Formulario";

export default function Page() {
  return (
    <main className="noise-overlay min-h-screen">
      <HeroVideoDemo />
      <OProblema />
      <ComoFunciona />
      <OAmbiente />
      <Filtro />
      <DezesseisAnos />
      <Formulario />
      
      <footer className="bg-fundo py-12 px-6 border-t border-borda">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="font-bebas text-xl tracking-widest text-texto opacity-50">H7 IMÓVEIS</span>
          <p className="font-mono text-[10px] text-texto-sec uppercase tracking-widest">
            © {new Date().getFullYear()} — JOINVILLE, SANTA CATARINA
          </p>
        </div>
      </footer>
    </main>
  );
}

