import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SectionWrapper from "./shared/SectionWrapper";
import { motion } from "motion/react";
import { TrendingUp, BookOpen, Target, DollarSign } from "lucide-react";

const data = [
  { name: 'Mês 1', desempenho: 30, aprendizado: 'Processos e Lead H7' },
  { name: 'Mês 2', desempenho: 45, aprendizado: 'Gestão de Pipeline' },
  { name: 'Mês 3', desempenho: 75, aprendizado: '1ª Venda de Alto Padrão' },
  { name: 'Mês 4', desempenho: 85, aprendizado: 'Fluxo de Conversão' },
  { name: 'Mês 6', desempenho: 120, aprendizado: 'Estabilidade de Carteira' },
  { name: 'Mês 9', desempenho: 160, aprendizado: 'Referência no Mercado' },
  { name: 'Mês 12', desempenho: 210, aprendizado: 'Alta Performance Consistente' },
];

export default function ProjecaoSucesso() {
  return (
    <SectionWrapper className="bg-white py-24 sm:py-32 px-6 sm:px-12 md:px-24">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-texto-escuro font-bold mb-6">
            A Projeção do seu <span className="text-principal">Sucesso</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-texto-sec max-w-2xl mx-auto leading-relaxed">
            Na H7, o resultado não é sorte, é método. Veja como evolui o desempenho e o conhecimento de um corretor que segue o nosso plano de 12 meses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="card-white !p-6 sm:!p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 bg-principal/5 rounded-bl-[3rem] border-b border-l border-principal/10">
                 <div className="text-right">
                    <span className="block font-mono text-[10px] text-texto-sec uppercase tracking-[0.2em] mb-1">Time to Result</span>
                    <span className="block font-sans text-3xl font-extrabold text-principal">3 Meses</span>
                 </div>
              </div>

              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="text-principal" size={24} />
                <h3 className="font-sans text-xl font-bold">Curva de Geração de Valor</h3>
              </div>
              
              <div className="h-[300px] sm:h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8C2323" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#8C2323" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: '1px solid #E9ECEF', boxShadow: '0 8px 30px rgb(0,0,0,0.08)', fontFamily: 'Plus Jakarta Sans' }} 
                      labelStyle={{ fontWeight: 'bold', color: '#8C2323' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="desempenho" 
                      stroke="#8C2323" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorPerf)" 
                    />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: '#6C757D', fontFamily: 'Plus Jakarta Sans' }} 
                      dy={10}
                    />
                    <YAxis hide />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-texto-sec mt-6 font-sans text-center">
                *Projeção baseada na média de crescimento de corretores veteranos na H7.
              </p>
            </div>

            <div className="bg-principal p-8 rounded-[2.5rem] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold mb-2">Resumo do Dashboard</h4>
                <p className="text-white/80 font-sans">O ponto de virada acontece no <span className="font-bold text-white uppercase">3º Mês</span> com a maturidade do processo.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 px-6 py-4 rounded-2xl text-center backdrop-blur-sm">
                  <span className="block text-xl font-bold">90 dias</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">Payback Médio</span>
                </div>
                <div className="bg-white/10 px-6 py-4 rounded-2xl text-center backdrop-blur-sm">
                  <span className="block text-xl font-bold">1ª Venda</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">Confirmada</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-principal/10 rounded-2xl text-principal">
                  <DollarSign size={24} />
                </div>
                <h4 className="font-sans text-lg font-bold">Ganhos de Escala</h4>
              </div>
              <p className="text-texto-sec font-sans text-sm leading-relaxed">
                No alto padrão, uma venda equivale ao faturamento anual de muitos corretores do mercado popular. Com o fluxo recorrente da H7, você sai da oscilação para a estabilidade.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-principal/10 rounded-2xl text-principal">
                   <BookOpen size={24} />
                </div>
                <h4 className="font-sans text-lg font-bold">Mentoria Constante</h4>
              </div>
              <p className="text-texto-sec font-sans text-sm leading-relaxed">
                O maior ganho é o invisível: o conhecimento de 16 anos condensado. Você aprende a ler o cliente de alto luxo, a dominar objeções e a fechar contratos complexos.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-principal/10 rounded-2xl text-principal">
                  <Target size={24} />
                </div>
                <h4 className="font-sans text-lg font-bold">Foco no VIP</h4>
              </div>
              <p className="text-texto-sec font-sans text-sm leading-relaxed">
                Você deixa de gastar 80% do seu tempo procurando clientes e passa a gastar 100% do tempo atendendo quem realmente tem potencial de compra.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-fundo p-6 rounded-3xl border border-borda text-center">
            <span className="block text-2xl font-bold text-principal mb-1">90%</span>
            <span className="text-xs text-texto-sec uppercase tracking-widest font-mono">Conversão Assistida</span>
          </div>
          <div className="bg-fundo p-6 rounded-3xl border border-borda text-center">
            <span className="block text-2xl font-bold text-principal mb-1">3x</span>
            <span className="text-xs text-texto-sec uppercase tracking-widest font-mono">Mais Visitas Reais</span>
          </div>
          <div className="bg-fundo p-6 rounded-3xl border border-borda text-center">
            <span className="block text-2xl font-bold text-principal mb-1">R$ 2M+</span>
            <span className="text-xs text-texto-sec uppercase tracking-widest font-mono">Ticket Médio</span>
          </div>
          <div className="bg-fundo p-6 rounded-3xl border border-borda text-center">
            <span className="block text-2xl font-bold text-principal mb-1">Zero</span>
            <span className="text-xs text-texto-sec uppercase tracking-widest font-mono">Custo de Lead</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
