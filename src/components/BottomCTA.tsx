"use client";

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useModal } from '../contexts/ModalContext';

export function BottomCTA() {
  const { openModal } = useModal();

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>O Próximo Passo</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight max-w-4xl">
            Pronto para parar de seguir o fluxo e assumir o <span className="text-gradient">controle da sua receita?</span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Agende uma sessão estratégica gratuita com nossos especialistas e descubra onde estão os vazamentos de lucro da sua empresa.
          </p>
          
          <button 
            onClick={openModal}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:shadow-[0_0_60px_rgba(124,58,237,0.6)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_auto] animate-[flow_3s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:200%_auto] animate-[flow_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              Falar com um Especialista Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
