import React from 'react';
import { AlertTriangle, Ghost, Compass, Users } from 'lucide-react';
import { motion } from 'motion/react';

const pains = [
  {
    icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
    title: 'A "Escravidão" do Canal Único',
    desc: 'Se o tráfego pago parar hoje, suas vendas morrem?'
  },
  {
    icon: <Ghost className="w-6 h-6 text-slate-400" />,
    title: 'Processos Fantasmas',
    desc: 'Você sente que tem processos, mas na prática vive apagando incêndios?'
  },
  {
    icon: <Compass className="w-6 h-6 text-orange-400" />,
    title: 'Falta de Bússola',
    desc: 'O faturamento oscila e você não tem previsibilidade do próximo mês.'
  },
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: 'Cultura Frágil',
    desc: 'Sua equipe executa tarefas, mas não vive a narrativa de valor da marca.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function PainPoints() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16 flex flex-col items-center"
      >
        {/* Route Deviation Animation */}
        <div className="relative w-32 h-16 mb-8 flex items-center justify-center">
          {/* Main Route (Straight) */}
          <div className="absolute w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="w-1/2 h-full bg-emerald-500/50 rounded-full"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Deviation Route 1 (Upwards) */}
          <svg className="absolute w-full h-full overflow-visible" viewBox="0 0 128 64">
            <motion.path 
              d="M 64 32 Q 80 0 128 0" 
              fill="none" 
              stroke="rgba(248, 113, 113, 0.2)" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
            <motion.circle 
              r="3" 
              fill="#f87171"
              animate={{ 
                offsetDistance: ["0%", "100%"],
                opacity: [0, 1, 0]
              }}
              style={{ offsetPath: "path('M 64 32 Q 80 0 128 0')" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
          </svg>

          {/* Deviation Route 2 (Downwards) */}
          <svg className="absolute w-full h-full overflow-visible" viewBox="0 0 128 64">
            <motion.path 
              d="M 48 32 Q 64 64 128 64" 
              fill="none" 
              stroke="rgba(248, 113, 113, 0.2)" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
            <motion.circle 
              r="3" 
              fill="#f87171"
              animate={{ 
                offsetDistance: ["0%", "100%"],
                opacity: [0, 1, 0]
              }}
              style={{ offsetPath: "path('M 48 32 Q 64 64 128 64')" }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
            />
          </svg>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Sua empresa sofre com algum desses <span className="text-red-400">"desvios de rota"?</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Onde sua empresa está perdendo pressão? Muitas agências vendem o "mapa", mas poucas descem para a casa de máquinas para consertar o motor com você.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {pains.map((pain, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="glass glass-hover rounded-2xl p-6 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 transition-colors">
              {pain.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">{pain.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{pain.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
