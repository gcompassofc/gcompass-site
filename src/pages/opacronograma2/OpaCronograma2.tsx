import React, { useState, useEffect, useRef } from 'react';
import './OpaCronograma2.css';
import { motion, useAnimation } from 'motion/react';
import { 
  Search, Users, Cpu, FileCheck, Rocket, TrendingUp, ShieldCheck, 
  BookOpen, BarChart3, Network, ClipboardCheck, PieChart, Target, 
  Layout, Calendar, CheckCircle2, ChevronRight, ChevronLeft, GripHorizontal
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'search': Search,
  'users': Users,
  'cpu': Cpu,
  'file-check': FileCheck,
  'rocket': Rocket,
  'trending-up': TrendingUp,
  'shield-check': ShieldCheck,
  'book-open': BookOpen,
  'bar-chart-3': BarChart3,
  'network': Network,
  'clipboard-check': ClipboardCheck,
  'pie-chart': PieChart
};

const timelineData = [
  {
      week: "Semana 1",
      date: "20/03 a 27/03",
      title: "Laboratório de Conteúdo",
      description: "Começamos com o Laboratório de Conteúdo com Equipe OPA, explorando a visão do imóvel como recipiente de memórias.",
      icon: "search",
      color: "from-blue-500 to-indigo-600",
      glowColor: "rgba(99,102,241,0.5)",
      tasks: ["Integração e onboarding", "Levantamento de vídeos", "Pesquisa sobre públicos", "Confirmação de imóveis"],
      deliverables: ["Banco de ideias", "Lista de imóveis", "Primeiros conteúdos"]
  },
  {
      week: "Semana 2",
      date: "28/03 a 03/04",
      title: "Identidade",
      description: "Semana de transição oficial. Novas ideias para Marco e OPA em produção.",
      icon: "users",
      color: "from-indigo-500 to-purple-600",
      glowColor: "rgba(139,92,246,0.5)",
      tasks: ["Cronograma de postagens", "Configuração de LinkedIn", "Definição do fluxo", "Rascunho do site"],
      deliverables: ["Perfis configurados", "Cronograma definido", "Rascunho inicial"]
  },
  {
      week: "Semana 3",
      date: "04/04 a 10/04",
      title: "Setup Tecnológico",
      description: "Configuramos toda a arquitetura do site voltada para o blog AEO.",
      icon: "cpu",
      color: "from-purple-500 to-pink-600",
      glowColor: "rgba(217,70,239,0.5)",
      tasks: ["Configuração de hospedagem", "Práticas de SEO/AEO", "Produção de Tours Virtuais", "Revisões de SEO"],
      deliverables: ["Site funcional", "Primeiro Tour", "Making of gravados"]
  },
  {
      week: "Semana 4",
      date: "11/04 a 17/04",
      title: "Homologação",
      description: "Semana de revisão e validação cuidadosa do primeiro lote de conteúdo.",
      icon: "file-check",
      color: "from-pink-500 to-rose-600",
      glowColor: "rgba(244,63,94,0.5)",
      tasks: ["Melhorias nos textos", "Design final do blog", "Entrega de 4 artigos", "Selo Visita Virtual"],
      deliverables: ["4 artigos finalizados", "Design aprovado", "Selo pronto"]
  },
  {
      week: "Semana 5",
      date: "18/04 a 24/04",
      title: "Lançamento e SEO",
      description: "O blog vai ao ar com a estrutura de SEO Local totalmente ativada.",
      icon: "rocket",
      color: "from-rose-500 to-orange-600",
      glowColor: "rgba(249,115,22,0.5)",
      tasks: ["Lançamento do blog", "Publicação de artigos", "Selo no portfólio", "Preparação de Google Ads"],
      deliverables: ["Blog no ar", "Portfólio atualizado", "Campanhas Ads"]
  },
  {
      week: "Semana 6",
      date: "25/04 a 01/05",
      title: "Ativação Google Ads",
      description: "Ativação de mídia paga com segmentação para público de alto poder aquisitivo.",
      icon: "trending-up",
      color: "from-orange-500 to-amber-600",
      glowColor: "rgba(245,158,11,0.5)",
      tasks: ["Ativação Google Ads", "Análise inicial", "Otimização de palavras", "Preparação Meta Ads"],
      deliverables: ["Campanhas ativas", "Meta Ads estruturado", "Artigo publicado"]
  },
  {
      week: "Semana 7",
      date: "02/05 a 08/05",
      title: "Remarketing",
      description: "O pixel entra em ação. Quem visita os Tours recebe vídeos no Instagram.",
      icon: "shield-check",
      color: "from-amber-500 to-yellow-600",
      glowColor: "rgba(234,179,8,0.5)",
      tasks: ["Remarketing Meta Ads", "Métricas iniciais", "Análise de blog AEO", "Publicação semanal"],
      deliverables: ["Remarketing ativo", "Relatório inicial"]
  },
  {
      week: "Semana 8",
      date: "09/05 a 15/05",
      title: "A Trilogia do Legado",
      description: "Publicação de conteúdos densos e estratégicos sobre raridade e patrimônio.",
      icon: "book-open",
      color: "from-yellow-500 to-lime-600",
      glowColor: "rgba(132,204,22,0.5)",
      tasks: ["Artigos fundo de funil", "Análise de performance", "Otimizações gerais"],
      deliverables: ["Artigos publicados", "Análise comparativa"]
  },
  {
      week: "Semana 9",
      date: "16/05 a 22/05",
      title: "Inteligência e Ajuste",
      description: "Semana dedicada à análise fina de retenção e termos de busca reais.",
      icon: "bar-chart-3",
      color: "from-lime-500 to-green-600",
      glowColor: "rgba(34,197,94,0.5)",
      tasks: ["Análise de retenção", "Refinamento HNW", "Ajustes em SEO"],
      deliverables: ["Relatório de retenção", "Campanhas otimizadas"]
  },
  {
      week: "Semana 10",
      date: "23/05 a 29/05",
      title: "Networking Escalado",
      description: "Marco utiliza artigos de alto nível para retomar contatos com a rede VIP.",
      icon: "network",
      color: "from-green-500 to-teal-600",
      glowColor: "rgba(20,184,166,0.5)",
      tasks: ["Seleção de artigos", "Análise de interações"],
      deliverables: ["Seleção VIP", "Registro de feedbacks"]
  },
  {
      week: "Semana 11",
      date: "30/05 a 05/06",
      title: "Auditoria da Jornada",
      description: "Cruzamento de métricas da jornada do lead para entender a qualidade do atendimento.",
      icon: "clipboard-check",
      color: "from-teal-500 to-cyan-600",
      glowColor: "rgba(6,182,212,0.5)",
      tasks: ["Cruzamento de métricas", "Análise de canais", "Avaliação integrada"],
      deliverables: ["Relatório de auditoria", "Análise comparativa"]
  },
  {
      week: "Semana 12",
      date: "06/06 a 12/06",
      title: "Expansão — Relatório",
      description: "O fechamento de ciclo com apresentação de ROI e próximos passos.",
      icon: "pie-chart",
      color: "from-cyan-500 to-blue-600",
      glowColor: "rgba(59,130,246,0.5)",
      tasks: ["Reunião 90 dias", "Oportunidades", "Próximo ciclo"],
      deliverables: ["Relatório de ROI", "Plano de expansão"]
  }
];

export default function OpaCronograma2() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const trackAnimation = useAnimation();

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };
    
    // Pequeno delay para garantir que as fontes/icones renderizaram o layout
    setTimeout(updateWidth, 100);
    window.addEventListener('resize', updateWidth);
    
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const moveLeft = () => {
    trackAnimation.start({
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  };

  const moveRight = () => {
    trackAnimation.start({
      x: -width,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  };

  return (
    <div className="opacronograma2-page bg-[#f1f5f9] text-slate-900 min-h-screen flex flex-col font-sans relative overflow-hidden">
      
      {/* Background Animado */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="bg-blob2 absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-gradient-to-br from-indigo-200/50 to-purple-200/50 blur-[120px] rounded-full mix-blend-multiply"></div>
          <div className="bg-blob2 absolute top-[20%] -right-[10%] w-[70%] h-[70%] bg-gradient-to-br from-blue-200/50 to-cyan-200/50 blur-[100px] rounded-full mix-blend-multiply" style={{ animationDelay: '-10s' }}></div>
      </div>

      {/* Cabeçalho Fixo */}
      <header className="relative z-50 px-6 md:px-10 py-5 flex items-center justify-between bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-sm">
          <div className="flex items-center gap-4">
              <img 
                  src="/gcompass-logo-dark.svg" 
                  alt="Growth Compass" 
                  className="h-8 md:h-10 w-auto object-contain"
              />
              <div className="w-px h-8 bg-slate-300 hidden sm:block"></div>
              <div className="hidden sm:block">
                  <h1 className="text-lg md:text-xl font-bold tracking-tight text-slate-800">OPA Imóveis</h1>
                  <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mt-0.5">Timeline Estratégica</p>
              </div>
          </div>
          <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider hidden md:inline-flex items-center gap-2 mr-2">
                  <GripHorizontal className="w-4 h-4" /> Arraste para navegar
              </span>
              <button onClick={moveLeft} className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={moveRight} className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors">
                  <ChevronRight className="w-5 h-5" />
              </button>
          </div>
      </header>

      {/* Pista de Scroll Horizontal (Drag) */}
      <main className="flex-1 relative z-10 w-full overflow-hidden flex items-center py-10" ref={carousel}>
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-6 md:gap-8 px-6 md:px-10 items-stretch cursor-grab active:cursor-grabbing"
            animate={trackAnimation}
          >
              {timelineData.map((item, index) => {
                  const CurrentIcon = iconMap[item.icon] || Search;
                  return (
                      <motion.div 
                          key={index}
                          className="min-w-[320px] max-w-[320px] md:min-w-[380px] md:max-w-[380px] bg-white/60 backdrop-blur-md rounded-3xl border border-white/60 shadow-lg shadow-slate-200/50 overflow-hidden flex flex-col relative group"
                          whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                          {/* Topo do Card (Week & Icon) */}
                          <div className={`p-6 bg-gradient-to-br ${item.color} text-white relative overflow-hidden shrink-0`}>
                              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl"></div>
                              <div className="flex justify-between items-start relative z-10">
                                  <div>
                                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
                                          <Calendar className="w-3 h-3" />
                                          {item.date}
                                      </div>
                                      <h2 className="text-3xl font-black tracking-tight">{item.week}</h2>
                                  </div>
                                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-inner">
                                      <CurrentIcon className="w-6 h-6 text-white" />
                                  </div>
                              </div>
                          </div>

                          {/* Conteúdo do Card */}
                          <div className="p-6 flex-1 flex flex-col bg-white/40">
                              <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                                  {item.title}
                              </h3>
                              <p className="text-sm text-slate-500 mb-6 flex-none h-[60px] line-clamp-3">
                                  {item.description}
                              </p>

                              <div className="flex-1 flex flex-col gap-6">
                                  {/* Ações */}
                                  <div className="flex-1">
                                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                          <Target className="w-3 h-3 text-indigo-500" />
                                          Ações Estratégicas
                                      </h4>
                                      <ul className="space-y-2.5">
                                          {item.tasks.map((task, i) => (
                                              <li key={i} className="flex items-start gap-2.5">
                                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.glowColor.replace('0.5', '1') }}></div>
                                                  <span className="text-[13px] font-medium text-slate-700 leading-snug">{task}</span>
                                              </li>
                                          ))}
                                      </ul>
                                  </div>

                                  {/* Entregáveis */}
                                  <div className="mt-auto">
                                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                          <Layout className="w-3 h-3 text-purple-500" />
                                          Entregáveis
                                      </h4>
                                      <div className="space-y-2">
                                          {item.deliverables.map((del, i) => (
                                              <div key={i} className="p-2.5 bg-white/80 rounded-xl border border-slate-100 flex items-center gap-2.5 shadow-sm group-hover:border-indigo-100 transition-colors">
                                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                                  <span className="text-xs font-bold text-slate-700">{del}</span>
                                              </div>
                                          ))}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </motion.div>
                  );
              })}
          </motion.div>
      </main>

      <div className="absolute bottom-6 w-full text-center pointer-events-none z-20">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-white/50 backdrop-blur-md px-4 py-2 rounded-full inline-block shadow-sm">
              Use o mouse para arrastar a esteira
          </p>
      </div>

    </div>
  );
}
