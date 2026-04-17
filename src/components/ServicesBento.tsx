import React from 'react';
import { Database, Users, Target, Bot, Zap, Wind, Search } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Implementação de CRM',
    subtitle: 'Fim do "Balde Furado"',
    desc: 'Para de perder dinheiro com leads que entram e ninguém entra em contato ou esquece de dar retorno.',
    icon: <Database className="w-6 h-6" />,
    className: 'md:col-span-2 md:row-span-1 bg-gradient-to-br from-purple-900/20 to-transparent',
    color: 'text-purple-400'
  },
  {
    title: 'Implementação de IA',
    subtitle: 'Piloto Automático Inteligente',
    desc: 'Automatizamos tarefas repetitivas para que sua equipe foque em estratégia, não em trabalho braçal.',
    icon: <Bot className="w-6 h-6" />,
    className: 'md:col-span-1 md:row-span-2 bg-gradient-to-b from-blue-900/20 to-transparent',
    color: 'text-blue-400'
  },
  {
    title: 'Estruturação Comercial',
    subtitle: 'Treinamento da Tripulação',
    desc: 'De nada adianta o capitão saber a rota se a equipe não sabe remar. Alinhamos processos, scripts e cultura.',
    icon: <Users className="w-6 h-6" />,
    className: 'md:col-span-1 md:row-span-1',
    color: 'text-emerald-400'
  },
  {
    title: 'Criação de Oferta e Narrativa',
    subtitle: 'Anzol Afiado',
    desc: 'Diferencia sua empresa no mar da mesmice. Se o mercado briga por preço, você briga por valor percebido.',
    icon: <Target className="w-6 h-6" />,
    className: 'md:col-span-1 md:row-span-1',
    color: 'text-orange-400'
  },
  {
    title: 'Tráfego Pago',
    subtitle: 'Combustível no Motor',
    desc: 'Se o seu motor é bom, nós aceleramos. Trazemos as pessoas certas, na hora certa.',
    icon: <Zap className="w-6 h-6" />,
    className: 'md:col-span-1 md:row-span-1',
    color: 'text-yellow-400'
  },
  {
    title: 'Estratégias de CAC Zero',
    subtitle: 'Vento a Favor',
    desc: 'Criação de canais de indicação e fidelização para reduzir drasticamente o custo de aquisição.',
    icon: <Wind className="w-6 h-6" />,
    className: 'md:col-span-1 md:row-span-1',
    color: 'text-cyan-400'
  },
  {
    title: 'SEO e AEO',
    subtitle: 'Farol de Longo Alcance',
    desc: 'Faz com que sua empresa seja a primeira resposta do Google e das novas buscas de Inteligência Artificial.',
    icon: <Search className="w-6 h-6" />,
    className: 'md:col-span-1 md:row-span-1',
    color: 'text-pink-400'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function ServicesBento() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Consultoria comercial e marketing: <br/>
          <span className="text-gradient">A Casa de Máquinas</span>
        </h2>
        <p className="text-xl text-slate-400">Identifique o seu gargalo e veja o que resolvemos na prática:</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)] relative z-10"
      >
        {services.map((svc, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className={`glass glass-hover rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group ${svc.className}`}
          >
            <div>
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform ${svc.color}`}>
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{svc.title}</h3>
              <div className={`text-sm font-medium mb-4 ${svc.color}`}>{svc.subtitle}</div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {svc.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
