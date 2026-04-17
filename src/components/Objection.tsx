import React from 'react';
import { Navigation, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export function Objection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full" />

        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
              <Compass className="w-4 h-4" />
              <span>A Analogia do GPS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Nem sempre o caminho mais curto é o caminho correto.
            </h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                No GPS, a rota mais rápida pode te colocar em um engarrafamento inesperado. No mundo dos negócios, depender de um único canal de aquisição ou de "hacks" de momento é o caminho mais curto para a estagnação.
              </p>
              <p>
                Quando você conhece o terreno, você não depende apenas do algoritmo. <strong className="text-white">Você domina a estratégia.</strong> Nós somos o seu guia especializado para garantir que o destino final seja o lucro, não apenas o movimento.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 border-2 border-dashed border-slate-700 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                  <Navigation className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
