import React from 'react';
import { ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useModal } from '../contexts/ModalContext';

export function Hero() {
  const { openModal } = useModal();

  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Sua empresa está na rota certa para o lucro, ou apenas <span className="text-gradient">seguindo o fluxo?</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl"
        >
          Na <strong className="text-white">G Compass</strong>, não entregamos apenas marketing. Estruturamos os pilares comercial e estratégico do seu negócio para transformar caos em receita previsível e crescimento sustentável.
        </motion.p>

        <motion.button
          onClick={openModal}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]"
        >
          {/* Base animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-[length:200%_auto] animate-[flow_3s_linear_infinite]" />
          
          {/* Hover animated gradient background (brighter) */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-500 bg-[length:200%_auto] animate-[flow_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <span className="relative z-10">Quero traçar minha rota de crescimento</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 w-full max-w-lg relative"
      >
        {/* Dashboard Visual */}
        <div className="glass rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-slate-800 to-emerald-500" />

          <div className="flex justify-between items-center mb-8">
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Análise de Rota</div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
            </div>
          </div>

          <div className="space-y-6">
            {/* Bad Route */}
            <motion.div 
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 rounded-xl bg-red-500/5 border border-red-500/10"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-red-400 font-medium flex items-center gap-2">
                  <TrendingDown className="w-4 h-4" /> Canais Isolados
                </span>
                <span className="text-slate-500 text-sm">Caos</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-red-500/50 rounded-full border-r-2 border-transparent border-dashed" />
              </div>
            </motion.div>

            {/* Good Route */}
            <motion.div 
              className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 relative overflow-hidden"
            >
              <motion.div
                animate={{ 
                  opacity: [0, 0.4, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-emerald-500/20 blur-xl pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-emerald-400 font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> A Rota G Compass
                </span>
                <span className="text-emerald-400 text-sm font-bold">Receita Previsível</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden relative z-10">
                <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/30 blur-3xl rounded-full" />
      </motion.div>
    </section>
  );
}
