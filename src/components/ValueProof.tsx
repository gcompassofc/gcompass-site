import React from 'react';
import { Award, ShieldCheck, Star, Unlock } from 'lucide-react';
import { motion } from 'motion/react';
import { useModal } from '../contexts/ModalContext';

const values = [
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    title: 'Orgulho do que construiu',
    desc: 'Uma empresa consolidada que honra compromissos.',
    color: 'from-yellow-500/20 to-yellow-500/0',
    border: 'group-hover:border-yellow-500/50'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
    title: 'Tranquilidade',
    desc: 'Fim do ciclo de "apagar incêndios" constante.',
    color: 'from-emerald-500/20 to-emerald-500/0',
    border: 'group-hover:border-emerald-500/50'
  },
  {
    icon: <Star className="w-8 h-8 text-purple-400" />,
    title: 'Referência',
    desc: 'Sua marca passa a ditar as regras no seu nicho.',
    color: 'from-purple-500/20 to-purple-500/0',
    border: 'group-hover:border-purple-500/50'
  },
  {
    icon: <Unlock className="w-8 h-8 text-blue-400" />,
    title: 'Liberdade',
    desc: 'Processos que rodam sem depender 100% da sua presença operacional.',
    color: 'from-blue-500/20 to-blue-500/0',
    border: 'group-hover:border-blue-500/50'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function ValueProof() {
  const { openModal } = useModal();

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="glass rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6 relative z-10"
        >
          O que acontece quando você <span className="text-gradient">calibra sua bússola</span> conosco:
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 relative z-10"
        >
          {values.map((val, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`group relative flex flex-col items-center text-center p-8 rounded-3xl glass border border-white/5 transition-all duration-500 hover:-translate-y-2 ${val.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${val.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative z-10 w-20 h-20 rounded-2xl glass flex items-center justify-center mb-6 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                {val.icon}
              </div>
              <h3 className="relative z-10 text-xl font-bold text-white mb-3">{val.title}</h3>
              <p className="relative z-10 text-slate-400 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 relative z-10"
        >
          <button 
            onClick={openModal}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-[length:200%_auto] animate-[flow_3s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-500 bg-[length:200%_auto] animate-[flow_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Quero traçar minha rota de crescimento</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
