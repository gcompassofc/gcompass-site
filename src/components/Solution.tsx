import React from 'react';
import { Layers, Wrench, Rocket, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const pillars = [
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Fundação Estratégica',
    desc: 'Alinhamento de cultura, criação de oferta irresistível e narrativa de marca que aumenta a percepção de valor.'
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: 'Engenharia de Vendas',
    desc: 'Implementação de CRM, treinamento de equipes (vendas e atendimento) e definição de funis de alta conversão.'
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: 'Aceleração Digital',
    desc: 'Tráfego pago, SEO, criação de sites focados em conversão e implementação de IA para otimizar processos.'
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Novos Horizontes',
    desc: 'Pesquisas de benchmark, estratégias de CAC Zero e criação de novas linhas de receita para sua empresa nunca parar de crescer.'
  }
];

export function Solution() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A Bússola da <span className="text-gradient">Receita Previsível</span>
            </h2>
            <h3 className="text-xl text-slate-300 font-medium">Estruturação de empresas 360°: Marketing + Comercial</h3>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed">
            Não somos uma agência de "artes", somos seus parceiros estratégicos. Atuamos em cada etapa da sua jornada para garantir que o crescimento seja sustentável e escalável.
          </p>

          <div className="space-y-6">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="mt-1 w-10 h-10 rounded-full glass flex items-center justify-center text-purple-400 shrink-0 border-purple-500/20">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{pillar.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex-1 w-full flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
            <div className="absolute inset-4 glass rounded-3xl border-white/10 flex flex-col p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/compass/800/800')] opacity-10 mix-blend-overlay bg-cover bg-center" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-2xl glass border-purple-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                    <div className="text-xl font-bold text-white">360°</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="glass rounded-xl p-4 border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Layers className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-xs font-bold text-purple-400">100%</span>
                    </div>
                    <div className="text-sm font-medium text-white">Estratégia</div>
                    <div className="w-full h-1.5 bg-slate-800/50 rounded-full mt-3 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-full h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" 
                      />
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4 border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Wrench className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-xs font-bold text-blue-400">100%</span>
                    </div>
                    <div className="text-sm font-medium text-white">Comercial</div>
                    <div className="w-full h-1.5 bg-slate-800/50 rounded-full mt-3 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" 
                      />
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4 border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <Rocket className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-xs font-bold text-emerald-400">100%</span>
                    </div>
                    <div className="text-sm font-medium text-white">Aceleração</div>
                    <div className="w-full h-1.5 bg-slate-800/50 rounded-full mt-3 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="w-full h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" 
                      />
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4 border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-orange-400" />
                      </div>
                      <span className="text-xs font-bold text-orange-400">100%</span>
                    </div>
                    <div className="text-sm font-medium text-white">Expansão</div>
                    <div className="w-full h-1.5 bg-slate-800/50 rounded-full mt-3 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="w-full h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
