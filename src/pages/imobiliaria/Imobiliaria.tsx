import './Imobiliaria.css';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { 
  ArrowRight, 
  Compass,
  Target,
  Briefcase,
  BarChart3,
  Layers,
  Eye,
  CheckCircle2,
  Phone,
  MessageCircle,
  AlertCircle,
  TrendingUp,
  XCircle
} from 'lucide-react';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button');
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
        rotate: isHovering ? 45 : 0
      }}
      transition={{ duration: 0.2 }}
    >
      <Compass className="w-8 h-8 text-white" strokeWidth={1.5} />
    </motion.div>
  );
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [hasProblems, setHasProblems] = useState(false);
  
  const timelineRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-dynamic text-slate-900 font-sans selection:bg-black selection:text-white">
      <CustomCursor />
      
      {/* Subtle Light Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-grid-light opacity-30" />

      {/* Minimalist Light Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/40">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Compass className="w-6 h-6 text-black" />
            <span className="text-lg font-display font-bold tracking-widest uppercase text-black">G Compass</span>
          </div>
          <a 
            href="https://forms.gcompass.com.br" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white hover:bg-slate-800 transition-all duration-300 text-xs font-bold tracking-widest uppercase"
          >
            Quero minha Análise Gratuita
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* HERO: Clean, White, Editorial */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
          {/* Subtle Brand Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div 
            style={{ y: yHeroText, opacity: opacityHero }}
            className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center z-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
              Engenharia de Crescimento para Imobiliárias
            </div>
            
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight uppercase text-black mb-8 text-center max-w-6xl mx-auto">
              Estruturamos o sistema que faz imobiliárias captar mais imóveis e vender com previsibilidade.
            </h1>
            
            <p className="text-base md:text-xl font-light text-slate-500 max-w-3xl mx-auto leading-[1.8] mb-16">
              Marketing, posicionamento e processo comercial organizados para gerar crescimento real.
            </p>

            <a 
              href="https://forms.gcompass.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full bg-black text-white font-display font-bold text-sm tracking-widest uppercase overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10">Quero minha análise gratuita</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Clean Image Accent */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl mx-auto h-[40vh] md:h-[50vh] mt-20 relative rounded-3xl overflow-hidden shadow-2xl shadow-black/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
              alt="Architecture" 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* 4 PROBLEMAS: Clean Grid */}
        <section className="py-20 md:py-28 relative border-y border-white/20">
          <div className="max-w-[1400px] mx-auto px-6">
            <FadeIn className="text-center mb-20">
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight leading-[1.1]">
                <span className="font-light text-slate-400 block mb-2">Sua imobiliária tem</span>
                <span className="font-black text-black">Algum desses problemas?</span>
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Falta de cliente comprador",
                  desc: "Leads chegando pouco, caros ou fora do perfil. O time trabalha muito para fechar pouco."
                },
                {
                  title: "Falta de cliente vendedor",
                  desc: "Captação lenta, portfólio fraco, dificuldade de conseguir exclusividade. Sem bom imóvel, não tem venda."
                },
                {
                  title: "Falta de corretores bons",
                  desc: "Alta rotatividade, corretores demorando meses para performar ou simplesmente não fechando. O dono resolve tudo."
                },
                {
                  title: "Falta de estrutura",
                  desc: "Processo no improviso, funil invisível, CRM abandonado, decisão no feeling. A empresa cresce até o limite do caos."
                }
              ].map((prob, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group glass-card p-8 md:p-10 rounded-[2rem] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-purple-200 transition-all duration-500 hover:-translate-y-1 h-full">
                    <div className="relative w-14 h-14 rounded-2xl bg-white/50 border border-white/60 flex items-center justify-center mb-8 overflow-hidden transition-all duration-500 group-hover:border-purple-200/50 group-hover:bg-purple-50/50">
                      {/* Subtle gradient glow inside the icon container on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <XCircle className="w-7 h-7 text-slate-400 relative z-10 transition-all duration-500 group-hover:text-purple-500 group-hover:scale-110 group-hover:-rotate-12" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-black mb-4">{prob.title}</h3>
                    <p className="text-slate-500 font-light leading-[1.7]">{prob.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4} className="mt-20 flex flex-col items-center">
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center gap-4 z-10">
                <span className="font-display text-xs font-bold tracking-[0.2em] uppercase text-slate-500 text-center">Se você enfrenta algum desses problemas, ative aqui.</span>
                <button 
                  onClick={() => setHasProblems(!hasProblems)}
                  className={`relative w-20 h-10 rounded-full transition-all duration-500 ${hasProblems ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-slate-200'}`}
                >
                  <motion.div 
                    className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-sm"
                    animate={{ x: hasProblems ? 40 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </button>
              </div>

              <motion.div
                initial={false}
                animate={{ 
                  height: hasProblems ? 'auto' : 0, 
                  opacity: hasProblems ? 1 : 0,
                  marginTop: hasProblems ? 32 : 0
                }}
                className="overflow-hidden flex justify-center"
              >
                <a 
                  href="https://forms.gcompass.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full bg-black text-white font-display font-bold text-sm tracking-widest uppercase transition-transform hover:scale-105"
                >
                  Marcar análise para traçar rota de ajuste
                </a>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* QUEM SOMOS: Flywheel */}
        <section className="py-20 md:py-28 relative">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/3">
                <FadeIn>
                  <h2 className="font-display text-3xl md:text-5xl uppercase mb-8 tracking-tight leading-[1.1]">
                    <span className="font-light text-slate-400 block mb-2">Estruturação empresarial</span>
                    <span className="font-black text-black">Para imobiliárias.</span>
                  </h2>
                  <p className="text-base md:text-lg text-slate-500 font-light leading-[1.8] mb-8">
                    A G Compass une marketing, processo comercial e gestão em um único sistema. O resultado é uma operação que cresce todo mês, sem depender de sorte, de um corretor estrela ou de um único canal.
                  </p>
                  <div className="w-12 h-px bg-black/20" />
                </FadeIn>
              </div>
              
              <div className="lg:w-2/3 w-full flex flex-col items-center justify-center pt-12 lg:pt-0">
                <div className="relative w-full aspect-square max-w-[350px] md:max-w-[500px] lg:max-w-[600px] mx-auto mb-12">
                  
                  {/* Rotating Container for Lines and Outer Nodes */}
                  <motion.div 
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  >
                    {/* Connections & Flywheel */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }}>
                      {/* Flywheel Outer Ring */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{ originX: "50%", originY: "50%" }}
                      >
                        <circle 
                          cx="50%" cy="50%" r="40%" 
                          stroke="#f1f5f9" strokeWidth="2" strokeDasharray="8 8" fill="none"
                        />
                      </motion.g>

                      {/* Radial Lines */}
                      {[
                        { x: "50%", y: "10%" },
                        { x: "88%", y: "38%" },
                        { x: "73.5%", y: "82.4%" },
                        { x: "26.5%", y: "82.4%" },
                        { x: "12%", y: "38%" },
                      ].map((node, i) => (
                        <motion.g
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        >
                          <motion.line 
                            x1="50%" y1="50%" x2={node.x} y2={node.y} 
                            stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4"
                            animate={{ strokeDashoffset: [0, -16] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                          />
                        </motion.g>
                      ))}
                    </svg>

                    {/* Outer Nodes */}
                    {[
                      { title: "Entender modelo de negócio", icon: Eye, x: "50%", y: "10%" },
                      { title: "Marketing verdadeiro", icon: Target, x: "88%", y: "38%" },
                      { title: "Comercial que funciona", icon: Briefcase, x: "73.5%", y: "82.4%" },
                      { title: "Gestão que ajuda o líder", icon: BarChart3, x: "26.5%", y: "82.4%" },
                      { title: "Sistema que escala", icon: Layers, x: "12%", y: "38%" },
                    ].map((node, i) => (
                      <motion.div 
                        key={i} 
                        className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full glass-card flex flex-col items-center justify-center text-center z-10 hover:shadow-lg transition-shadow hover:border-white/80"
                        style={{ left: node.x, top: node.y, x: "-50%", y: "-50%" }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.1, type: "spring" }}
                      >
                        <motion.div
                          className="w-full h-full flex flex-col items-center justify-center p-2 md:p-4"
                          animate={{ rotate: -360 }}
                          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                        >
                          <node.icon className="w-4 h-4 md:w-5 md:h-5 text-slate-400 mb-1 md:mb-2" />
                          <span className="font-display font-semibold text-[10px] md:text-xs text-slate-700 leading-snug">{node.title}</span>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 top-1/2 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-purple-400/40 to-blue-400/40 blur-2xl" style={{ transform: "translate(-50%, -50%)" }} />
                  <motion.div 
                    className="absolute left-1/2 top-1/2 w-40 h-40 md:w-56 md:h-56 rounded-full bg-black text-white flex flex-col items-center justify-center text-center p-4 md:p-6 z-20 shadow-2xl"
                    style={{ x: "-50%", y: "-50%" }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, type: "spring" }}
                  >
                    <Compass className="w-6 h-6 md:w-8 md:h-8 text-white/50 mb-2 md:mb-3" />
                    <span className="font-display font-bold text-sm md:text-lg leading-tight">Operação que cresce<br/>todo mês</span>
                  </motion.div>
                </div>

                <FadeIn delay={1.2} className="text-center mt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
                    <span className="font-display text-xs font-bold tracking-[0.1em] uppercase text-slate-600">
                      Efeito Flywheel
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-light max-w-sm mx-auto leading-relaxed">
                    Cada pilar se complementa e impulsiona o próximo, criando um ciclo de crescimento contínuo e previsível.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCACIONAL: Clean Typography & Huge Numbers */}
        <section className="py-20 md:py-28 relative border-y border-white/20">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">
              <FadeIn className="max-w-3xl">
                <h2 className="font-display text-3xl md:text-5xl uppercase leading-[1.2] tracking-tight">
                  <span className="font-light text-slate-500 block mb-2">O que separa uma imobiliária que cresce</span>
                  <span className="font-black text-black">De uma que se repete.</span>
                </h2>
              </FadeIn>
            </div>

            <div className="space-y-32">
              {[
                {
                  num: "01",
                  title: "Aquisição com inteligência",
                  desc: "Leads qualificados, no canal certo, com custo rastreado. Chega de pagar caro por contato que não compra."
                },
                {
                  num: "02",
                  title: "Processo comercial que fecha",
                  desc: "Do primeiro contato até a proposta, cada etapa com dono, prazo e critério. Corretor sem processo perde venda, não por má vontade, por falta de estrutura."
                },
                {
                  num: "03",
                  title: "Portfólio que vende sozinho",
                  desc: "Bom imóvel facilita o anúncio, a visita e o fechamento. Captação de imóveis não é operação separada do marketing. É parte do sistema."
                },
                {
                  num: "04",
                  title: "Gestão que mostra o caminho",
                  desc: "Quanto custa cada lead, onde o funil vaza, qual corretor converte mais. Decisão boa nasce de dado, não de intuição."
                }
              ].map((item, i) => (
                <FadeIn key={i}>
                  <div className="relative pl-0 md:pl-32">
                    <div className="md:absolute left-0 top-[-15px] font-display text-[60px] md:text-[100px] font-black text-slate-200 leading-none select-none pointer-events-none">
                      {item.num}
                    </div>
                    <div className="relative z-10 max-w-2xl">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">{item.title}</h3>
                      <p className="text-base md:text-lg text-slate-500 font-light leading-[1.8]">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PARA QUEM É: Clean Cards */}
        <section className="py-20 md:py-28 relative">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-5">
                <FadeIn>
                  <h2 className="font-display text-3xl md:text-5xl uppercase mb-8 tracking-tight leading-[1.1]">
                    <span className="font-light text-slate-400 block mb-2">Com quem</span>
                    <span className="font-black text-black">Trabalhamos</span>
                  </h2>
                  <p className="text-base md:text-lg text-slate-500 font-light mb-12 leading-[1.8] max-w-lg">
                    Imobiliárias de médio e alto padrão, ticket médio a partir de R$ 700 mil, com operação ativa e dono que pensa em crescer a empresa, não só em fechar o próximo imóvel.
                  </p>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-7">
                <FadeIn delay={0.2}>
                  <div className="glass-card rounded-[2rem] p-10 md:p-16">
                    <div className="space-y-10">
                      {[
                        { label: "Equipe", value: "3 ou mais corretores ativos" },
                        { label: "Foco", value: "Venda, não em locação ou temporada" },
                        { label: "Mentalidade", value: "Quer previsibilidade, não pico de resultado" }
                      ].map((stat, i) => (
                        <div key={i} className="border-b border-white/30 pb-8 last:border-0 last:pb-0">
                          <div className="font-display text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-2">{stat.label}</div>
                          <div className="font-display text-xl md:text-2xl font-bold text-black">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* A ANÁLISE ESTRATÉGICA: Timeline & Features */}
        <section className="py-20 md:py-28 relative border-t border-white/20" ref={timelineRef}>
          <div className="max-w-[1400px] mx-auto px-6">
            <FadeIn className="mb-24 text-center">
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight leading-[1.2] max-w-3xl mx-auto mb-8">
                <span className="font-light text-slate-400 block mb-2">Análise Estratégica</span>
                <span className="font-black text-black">100% gratuita.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-[1.8]">
                Mais de 200 imobiliárias já participaram. Em 45 minutos você enxerga onde sua operação está travada e sai com um plano claro do que fazer.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
              {/* Left: Na prática resolvemos */}
              <FadeIn>
                <div className="glass-card p-10 md:p-12 rounded-[2rem]">
                  <h3 className="font-display text-2xl font-bold text-black mb-8">Na prática resolvemos:</h3>
                  <ul className="space-y-6">
                    {[
                      "Faturamento imprevisível mês a mês",
                      "Leads chegando e sendo perdidos por demora no atendimento",
                      "Visitas marcadas que não acontecem",
                      "Captação de imóveis lenta e sem exclusividade",
                      "Funil de vendas sem visibilidade real",
                      "Custo de aquisição alto e crescendo"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full glass-card flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                        </div>
                        <span className="text-slate-700 font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Right: Timeline */}
              <div className="relative">
                <h3 className="font-display text-2xl font-bold text-black mb-12">Como funciona:</h3>
                
                {/* Animated Route Line */}
                <div className="absolute left-[11px] top-[80px] bottom-0 w-[2px] bg-slate-100">
                  <motion.div 
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-blue-500 origin-top"
                    style={{ scaleY: timelineProgress }}
                  />
                </div>

                <div className="space-y-16">
                  {[
                    {
                      title: "Leitura da operação",
                      desc: "A gente analisa aquisição, comercial, portfólio e posicionamento. Lemos o que funciona e o que está represado."
                    },
                    {
                      title: "Diagnóstico real",
                      desc: "Você descobre onde está o gargalo principal e o que, se resolvido agora, gera mais impacto."
                    },
                    {
                      title: "A melhor rota",
                      desc: "Sai com um plano específico para sua realidade, não um modelo genérico."
                    }
                  ].map((step, i) => (
                    <div key={i} className="relative flex gap-8 items-start">
                      {/* Route Node */}
                      <div className="absolute left-0 w-6 h-6 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center z-10 mt-1">
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                          transition={{ duration: 0.4, ease: "backOut" }}
                        />
                      </div>
                      
                      <FadeIn delay={0.2} className="ml-12">
                        <div className="text-sm font-display font-bold text-slate-300 mb-2">0{i+1}</div>
                        <h4 className="font-display text-xl font-bold text-black mb-3">{step.title}</h4>
                        <p className="text-base text-slate-500 font-light leading-[1.7]">{step.desc}</p>
                      </FadeIn>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <FadeIn className="mt-24 text-center max-w-3xl mx-auto">
              <p className="text-lg text-slate-600 font-light leading-[1.8] mb-10">
                Sem custo. Sem compromisso. Validação dos dois lados: a gente avalia se faz sentido uma parceria, você também avalia. Só seguimos juntos se for bom para os dois.
              </p>
              <a 
                href="https://forms.gcompass.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full bg-black text-white font-display font-bold text-sm tracking-widest uppercase transition-transform hover:scale-105"
              >
                Quero minha Análise Gratuita
              </a>
            </FadeIn>
          </div>
        </section>

        {/* NOVO EVENTO: Dark Contrast Waitlist */}
        <section className="py-20 md:py-28 relative bg-[#0a0a0a] text-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <FadeIn>
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] uppercase text-slate-300 mb-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse" />
                  Em Breve
                </div>
                <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-8">
                  <span className="font-light text-slate-400 block mb-2">Ainda não quer a análise?</span>
                  <span className="font-black text-white">Sem problema.</span>
                </h2>
                <p className="text-base md:text-lg text-slate-400 font-light leading-[1.8] mb-6">
                  Em breve realizamos nosso primeiro evento exclusivo para donos de imobiliárias:
                </p>
                <p className="text-xl md:text-2xl text-white font-display font-bold leading-[1.4] mb-8">
                  Como captar imóveis melhores traz mais vendas e bons corretores.
                </p>
                <p className="text-base md:text-lg text-slate-400 font-light leading-[1.8]">
                  Se cadastre e a gente te avisa quando abrir.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="glass-card-dark p-10 md:p-12 rounded-[2rem]">
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-white/20 py-3 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                        placeholder="Nome completo"
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-white/20 py-3 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                        placeholder="Nome da imobiliária"
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="tel" 
                        className="w-full bg-transparent border-b border-white/20 py-3 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                        placeholder="WhatsApp"
                      />
                    </div>
                    <button className="w-full py-4 rounded-full bg-white text-black font-display font-bold text-xs tracking-[0.2em] uppercase hover:bg-slate-200 transition-colors mt-6">
                      Quero ser avisado
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA FINAL & FORM: Minimalist Form */}
        <section id="agendar" className="py-20 md:py-28 relative border-t border-white/20">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24">
              <FadeIn>
                <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[1] mb-8">
                  <span className="font-light text-slate-500 block mb-2">Seria uma honra ter</span>
                  <span className="font-black text-black">Essa conversa com você.</span>
                </h2>
                <p className="text-lg text-slate-500 font-light mb-12 max-w-md leading-[1.8]">
                  Gratuita, online e direto ao ponto.
                </p>
                
                <div className="mt-8">
                  <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">
                    Prefere um contato mais rápido?
                  </p>
                  <a 
                    href="https://wa.me/5512992096501?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20G%20Compass." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-display font-bold text-sm tracking-widest uppercase transition-transform hover:scale-105 shadow-lg shadow-[#25D366]/20"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chamar no WhatsApp</span>
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="glass-card p-10 md:p-14 rounded-[2rem] flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-black mb-4">Preencha o formulário de aplicação</h3>
                  <p className="text-slate-500 font-light mb-8">
                    Para garantirmos que nossa análise será útil para o seu momento atual, precisamos de algumas informações sobre a sua imobiliária.
                  </p>
                  <a 
                    href="https://forms.gcompass.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full bg-black text-white font-display font-bold text-xs tracking-[0.2em] uppercase hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Acessar Formulário
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/30 py-12 glass-panel">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Compass className="w-6 h-6 text-black" />
            <span className="font-display font-black text-lg tracking-widest uppercase text-black">G Compass</span>
          </div>
          <div className="font-display text-xs font-bold tracking-[0.2em] uppercase text-slate-400 text-center">
            Empresa de Estruturação Empresarial para Imobiliárias
          </div>
          <div className="font-display text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
            © 2026 G Compass. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
