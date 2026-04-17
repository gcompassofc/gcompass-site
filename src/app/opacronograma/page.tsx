"use client";
import React, { useState, useEffect } from 'react';
import './OpaCronograma.css';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Users, Cpu, FileCheck, Rocket, TrendingUp, ShieldCheck, 
  BookOpen, BarChart3, Network, ClipboardCheck, PieChart, Target, 
  Layout, Calendar, ChevronLeft, ChevronRight, ArrowRight, 
  RefreshCw, ChevronDown, CheckCircle2, Info 
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
      title: "Laboratório de Conteúdo e Curadoria de Imóveis",
      description: "O primeiro momento é de imersão. Começamos com o Laboratório de Conteúdo com Equipe OPA, um trabalho de escuta e construção de narrativa, explorando a visão do imóvel como recipiente de memórias e a diferenciação.",
      icon: "search",
      color: "from-blue-500 to-indigo-600",
      glowColor: "rgba(99,102,241,0.5)",
      tasks: ["Integração e onboarding com a equipe OPA", "Acesso ao Trello e levantamento de vídeos", "Pesquisa sobre os três públicos estratégicos", "Confirmação dos imóveis para Tour Virtual", "Criação do banco de ideias inicial", "Início da edição de 2 a 3 conteúdos teste"],
      deliverables: ["Banco de ideias estruturado", "Lista dos imóveis confirmados", "Primeiros conteúdos em edição"]
  },
  {
      week: "Semana 2",
      date: "28/03 a 03/04",
      title: "Reposicionamento de Identidade",
      description: "Semana de transição oficial. Novas ideias para Marco e OPA em produção.",
      icon: "users",
      color: "from-indigo-500 to-purple-600",
      glowColor: "rgba(139,92,246,0.5)",
      tasks: ["Organização de cronograma de postagens", "Melhoria dos formatos de gravação", "Configuração dos perfis de LinkedIn", "Definição do fluxo de aprovação", "Início do rascunho do site"],
      deliverables: ["Perfis de LinkedIn configurados", "Cronograma de postagens definido", "Rascunho inicial do site"]
  },
  {
      week: "Semana 3",
      date: "04/04 a 10/04",
      title: "Setup Tecnológico",
      description: "Configuramos toda a arquitetura do site voltada para o blog AEO e iniciamos a captura imersiva dos primeiros Tours Virtuais.",
      icon: "cpu",
      color: "from-purple-500 to-pink-600",
      glowColor: "rgba(217,70,239,0.5)",
      tasks: ["Configuração de hospedagem e domínio", "Mapeamento de práticas de SEO/AEO", "Produção de Tours Virtuais no Engenho d'Água", "Gravação de making of", "Revisões de SEO nos textos de June"],
      deliverables: ["Site técnico funcional", "Primeiro Tour Virtual em produção", "Conteúdos de making of gravados"]
  },
  {
      week: "Semana 4",
      date: "11/04 a 17/04",
      title: "Homologação",
      description: "Semana de revisão e validação. O primeiro lote de conteúdo passa por um processo cuidadoso de homologação.",
      icon: "file-check",
      color: "from-pink-500 to-rose-600",
      glowColor: "rgba(244,63,94,0.5)",
      tasks: ["Melhorias nos textos de June", "Design final do blog para aprovação", "Entrega de 4 artigos para revisão", "Preparação do Selo Visita Virtual"],
      deliverables: ["4 artigos finalizados", "Design do blog aprovado", "Selo Visita Virtual pronto"]
  },
  {
      week: "Semana 5",
      date: "18/04 a 24/04",
      title: "Lançamento do Blog e SEO Local",
      description: "O blog vai ao ar. Os primeiros artigos pilares são publicados com toda a estrutura de SEO Local ativada.",
      icon: "rocket",
      color: "from-rose-500 to-orange-600",
      glowColor: "rgba(249,115,22,0.5)",
      tasks: ["Lançamento oficial do blog", "Publicação dos artigos aprovados", "Aplicação do Selo no portfólio", "Preparação das campanhas de Google Ads"],
      deliverables: ["Blog no ar", "Portfólio com Selo aplicado", "Campanhas Ads estruturadas"]
  },
  {
      week: "Semana 6",
      date: "25/04 a 01/05",
      title: "Ativação Google Ads — Fase 1",
      description: "Primeira ativação de mídia paga com segmentação para público de alto poder aquisitivo.",
      icon: "trending-up",
      color: "from-orange-500 to-amber-600",
      glowColor: "rgba(245,158,11,0.5)",
      tasks: ["Ativação das campanhas no Google Ads", "Análise dos primeiros dias", "Otimização de palavras-chave", "Preparação de Meta Ads"],
      deliverables: ["Campanhas Google Ads ativas", "Meta Ads estruturado", "Artigo semanal publicado"]
  },
  {
      week: "Semana 7",
      date: "02/05 a 08/05",
      title: "Cerco de Remarketing",
      description: "O pixel entra em ação. Quem visita os Tours Virtuais começa a receber vídeos de autoridade no Instagram.",
      icon: "shield-check",
      color: "from-amber-500 to-yellow-600",
      glowColor: "rgba(234,179,8,0.5)",
      tasks: ["Ativação de Remarketing no Meta Ads", "Análise de métricas iniciais", "Análise do blog com foco em AEO", "Publicação semanal"],
      deliverables: ["Campanhas Remarketing ativas", "Relatório inicial de métricas"]
  },
  {
      week: "Semana 8",
      date: "09/05 a 15/05",
      title: "A Trilogia do Legado",
      description: "Publicação dos artigos de fundo de funil, conteúdos densos e estratégicos sobre raridade e patrimônio.",
      icon: "book-open",
      color: "from-yellow-500 to-lime-600",
      glowColor: "rgba(132,204,22,0.5)",
      tasks: ["Publicação de artigos fundo de funil", "Análise de performance", "Otimizações gerais"],
      deliverables: ["Artigos de fundo de funil publicados", "Análise comparativa"]
  },
  {
      week: "Semana 9",
      date: "16/05 a 22/05",
      title: "Inteligência e Ajuste de Mira",
      description: "Semana dedicada à análise fina de retenção e termos de busca reais.",
      icon: "bar-chart-3",
      color: "from-lime-500 to-green-600",
      glowColor: "rgba(34,197,94,0.5)",
      tasks: ["Análise de retenção e termos", "Refinamento das campanhas (HNW)", "Ajustes em SEO e mídia"],
      deliverables: ["Relatório de retenção", "Campanhas otimizadas"]
  },
  {
      week: "Semana 10",
      date: "23/05 a 29/05",
      title: "Networking Escalado",
      description: "Marco utiliza os artigos de alto nível como isca de valor para retomar contatos com a rede VIP.",
      icon: "network",
      color: "from-green-500 to-teal-600",
      glowColor: "rgba(20,184,166,0.5)",
      tasks: ["Seleção de artigos para networking", "Análise das interações geradas"],
      deliverables: ["Seleção VIP definida", "Registro de feedbacks"]
  },
  {
      week: "Semana 11",
      date: "30/05 a 05/06",
      title: "Auditoria da Jornada",
      description: "Cruzamento de métricas de toda a jornada do lead para entender a qualidade do atendimento.",
      icon: "clipboard-check",
      color: "from-teal-500 to-cyan-600",
      glowColor: "rgba(6,182,212,0.5)",
      tasks: ["Cruzamento de métricas da jornada", "Análise qualitativa de canais", "Avaliação integrada"],
      deliverables: ["Relatório de auditoria", "Análise comparativa de canais"]
  },
  {
      week: "Semana 12",
      date: "06/06 a 12/06",
      title: "Expansão — Relatório dos 90 Dias",
      description: "O fechamento de ciclo com apresentação de ROI e definição dos próximos passos.",
      icon: "pie-chart",
      color: "from-cyan-500 to-blue-600",
      glowColor: "rgba(59,130,246,0.5)",
      tasks: ["Reunião de análise 90 dias", "Discussão de oportunidades", "Definição do próximo ciclo"],
      deliverables: ["Relatório de ROI", "Plano de expansão"]
  }
];

// Variante de transição do Framer Motion
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    filter: 'blur(8px)',
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    filter: 'blur(8px)',
  })
};

export default function OpaCronograma() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [demandsOpen, setDemandsOpen] = useState(false);

  const currentIndex = Math.max(0, Math.min(page, timelineData.length - 1));
  const currentItem = timelineData[currentIndex];
  const CurrentIcon = iconMap[currentItem.icon] || Search;
  const progress = Math.round(((currentIndex + 1) / timelineData.length) * 100);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < timelineData.length) {
      setPage([newPage, newDirection]);
    }
  };

  const goToSlide = (index: number) => {
    setPage([index, index > page ? 1 : -1]);
  };

  const handleMainAction = () => {
    if (currentIndex === timelineData.length - 1) {
      goToSlide(0);
    } else {
      paginate(1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page]);

  return (
    <div className="opacronograma-page bg-[#f8fafc] text-slate-900 min-h-screen flex flex-col font-sans relative">
      {/* Background Animado Vibrante */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#f8fafc]">
          <div className="bg-blob absolute -top-[10%] -left-[10%] w-[100%] md:w-[70%] h-[70%] bg-gradient-to-br from-blue-300/40 to-indigo-300/40 blur-[100px] md:blur-[140px] rounded-full mix-blend-multiply"></div>
          <div className="bg-blob absolute -bottom-[10%] -right-[10%] w-[90%] md:w-[60%] h-[60%] bg-gradient-to-br from-purple-300/40 to-pink-300/40 blur-[90px] md:blur-[120px] rounded-full mix-blend-multiply" style={{ animationDelay: '-5s' }}></div>
          <div className="bg-blob absolute top-[40%] left-[20%] w-[50%] h-[50%] bg-gradient-to-br from-cyan-300/30 to-blue-300/30 blur-[80px] rounded-full mix-blend-multiply" style={{ animationDelay: '-12s' }}></div>
      </div>

      {/* Cabeçalho */}
      <header className="relative z-50 px-4 md:px-8 py-4 md:py-6 flex items-center justify-between bg-white/60 backdrop-blur-2xl border-b border-white/40 sticky top-0 text-slate-800 shadow-sm">
          <div className="flex items-center gap-3 md:gap-6">
              <img 
                  src="/gcompass-logo-dark.svg" 
                  alt="Growth Compass" 
                  className="h-6 md:h-10 w-auto object-contain"
              />
              <div className="w-px h-6 md:h-8 bg-slate-300 hidden sm:block"></div>
              <div className="hidden sm:block">
                  <h1 className="text-sm md:text-lg font-bold tracking-tight text-slate-800">OPA Imóveis</h1>
                  <p className="text-[8px] md:text-xs font-semibold text-slate-500 uppercase tracking-widest leading-none mt-1">Cronograma de Implementação</p>
              </div>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
              <div className="text-right">
                  <p className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Progresso</p>
                  <motion.p 
                    key={progress}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm md:text-base font-black text-blue-600"
                  >
                    {progress}%
                  </motion.p>
              </div>
              <div className="w-20 md:w-40 h-2 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                  />
              </div>
          </div>
      </header>

      {/* Área Principal */}
      <main className="flex-1 relative z-10 flex items-center justify-center p-4 md:p-10 overflow-hidden">
          <div className="w-full max-w-6xl h-full md:h-auto md:max-h-[800px] bg-white/70 backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white overflow-hidden relative flex flex-col md:flex-row">
              
              {/* Lado Esquerdo: Identidade Visual Animada */}
              <motion.div 
                className={`w-full md:w-[40%] bg-gradient-to-br ${currentItem.color} p-8 md:p-14 text-white flex flex-row md:flex-col justify-between items-center md:items-start relative overflow-hidden shrink-0 shadow-inner`}
                layout
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                  {/* Padrões geométricos fluidos */}
                  <motion.div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                  >
                      <div className="absolute top-0 left-0 w-[150%] h-[150%] border-[40px] md:border-[60px] border-white rounded-full translate-x-1/4 -translate-y-1/4"></div>
                      <div className="absolute bottom-0 right-0 w-[100%] h-[100%] border-[20px] md:border-[40px] border-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
                  </motion.div>

                  <AnimatePresence mode="wait" custom={direction}>
                      <motion.div 
                          key={`date-${currentIndex}`}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.4 }}
                          className="relative z-10 w-full"
                      >
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] md:text-sm font-bold mb-4 md:mb-10 w-fit shadow-sm">
                              <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                              <span>{currentItem.date}</span>
                          </div>
                          <h2 className="text-3xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                              {currentItem.week.split(' ')[0]} <br className="hidden md:block" />
                              <span className="opacity-50 text-2xl md:text-6xl">{currentItem.week.split(' ')[1]}</span>
                          </h2>
                      </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                      <motion.div 
                          key={`icon-${currentIndex}`}
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 90 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                          className="relative z-10 w-14 h-14 md:w-24 md:h-24 bg-white/20 backdrop-blur-xl rounded-2xl md:rounded-[2rem] flex items-center justify-center border border-white/40 shadow-2xl"
                      >
                          <CurrentIcon className="w-7 h-7 md:w-12 md:h-12 text-white drop-shadow-md" />
                      </motion.div>
                  </AnimatePresence>
              </motion.div>

              {/* Lado Direito: Conteúdo e Interações */}
              <div className="flex-1 p-6 md:p-14 overflow-y-auto custom-scrollbar flex flex-col bg-transparent relative">
                  <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                          key={`content-${currentIndex}`}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.4 }}
                          className="w-full flex flex-col h-full"
                      >
                          <h3 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-4 md:mb-6 leading-tight tracking-tight">
                              {currentItem.title}
                          </h3>
                          <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 leading-relaxed">
                              {currentItem.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 flex-1">
                              {/* Coluna 1: Ações */}
                              <section>
                                  <h4 className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-5 md:mb-6 flex items-center gap-2">
                                      <Target className="w-4 h-4 text-indigo-500" />
                                      Ações Estratégicas
                                  </h4>
                                  <ul className="space-y-4">
                                      {currentItem.tasks.map((task, i) => (
                                        <motion.li 
                                          key={i} 
                                          className="flex items-start gap-3 group bg-white/40 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-200/50 hover:bg-white/80 transition-colors"
                                          whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,1)' }}
                                        >
                                            <div className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: currentItem.glowColor.replace('0.5', '1') }}></div>
                                            <span className="text-sm font-medium text-slate-700 leading-snug">{task}</span>
                                        </motion.li>
                                      ))}
                                  </ul>
                              </section>

                              {/* Coluna 2: Entregáveis */}
                              <section>
                                  <h4 className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-5 md:mb-6 flex items-center gap-2">
                                      <Layout className="w-4 h-4 text-purple-500" />
                                      Entregáveis
                                  </h4>
                                  <div className="space-y-3">
                                      {currentItem.deliverables.map((del, i) => (
                                        <motion.div 
                                          key={i} 
                                          className="p-4 md:p-5 rounded-xl md:rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 cursor-default relative overflow-hidden"
                                          whileHover={{ scale: 1.02, y: -2, boxShadow: `0 10px 25px -5px ${currentItem.glowColor}` }}
                                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        >
                                            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: currentItem.glowColor.replace('0.5', '1') }}></div>
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span className="text-sm font-bold text-slate-800">{del}</span>
                                        </motion.div>
                                      ))}
                                  </div>
                              </section>
                          </div>
                      </motion.div>
                  </AnimatePresence>
              </div>
          </div>

          {/* Botões Flutuantes Desktop */}
          <div className="hidden md:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-6 pointer-events-none z-20">
              <motion.button 
                  onClick={() => paginate(-1)} 
                  disabled={currentIndex === 0} 
                  className="w-16 h-16 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md shadow-xl border border-white pointer-events-auto text-slate-700 hover:text-indigo-600 disabled:opacity-0"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
              >
                  <ChevronLeft className="w-8 h-8" />
              </motion.button>
              <motion.button 
                  onClick={() => paginate(1)} 
                  disabled={currentIndex === timelineData.length - 1} 
                  className="w-16 h-16 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md shadow-xl border border-white pointer-events-auto text-slate-700 hover:text-indigo-600 disabled:opacity-0"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
              >
                  <ChevronRight className="w-8 h-8" />
              </motion.button>
          </div>
      </main>

      {/* Demandas Contínuas */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-10 pb-6 relative z-20">
          <motion.div 
            className="bg-white/60 backdrop-blur-2xl border border-white/60 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50"
            layout
          >
              <button onClick={() => setDemandsOpen(!demandsOpen)} className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-slate-800 hover:bg-white/80 transition-colors">
                  <div className="flex items-center gap-3">
                      <RefreshCw className={`w-5 h-5 text-indigo-500 ${demandsOpen ? 'animate-spin-slow' : ''}`} />
                      <span className="font-extrabold text-sm md:text-base uppercase tracking-widest text-slate-700">Demandas Contínuas</span>
                  </div>
                  <motion.div animate={{ rotate: demandsOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                      <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
                  </motion.div>
              </button>
              
              <AnimatePresence>
                {demandsOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white/40"
                  >
                      <div className="p-6 pt-2 md:p-8 md:pt-4 border-t border-slate-200/50">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                              {[
                                "Pesquisa contínua de mercado imobiliário",
                                "Pesquisa aprofundada sobre Ilhabela",
                                "Escuta ativa com equipe",
                                "Otimização contínua dos formatos",
                                "Melhorias constantes no blog e site",
                                "Monitoramento de assuntos de timing"
                              ].map((item, idx) => (
                                <motion.li 
                                  key={idx} 
                                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100"
                                  whileHover={{ y: -2, boxShadow: '0 4px 15px -3px rgba(0,0,0,0.05)' }}
                                >
                                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                                    <span className="text-sm font-semibold text-slate-700 leading-tight">{item}</span>
                                </motion.li>
                              ))}
                          </ul>
                      </div>
                  </motion.div>
                )}
              </AnimatePresence>
          </motion.div>
      </div>

      {/* Rodapé */}
      <footer className="relative z-50 px-4 md:px-8 py-5 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/70 backdrop-blur-xl border-t border-slate-200">
          <div className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto max-w-full pb-2 md:pb-0 no-scrollbar px-2">
              {timelineData.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => goToSlide(i)} 
                  className={`relative h-2 md:h-2.5 rounded-full transition-all duration-500 shrink-0 ${i === currentIndex ? 'w-8 md:w-12 bg-indigo-600' : 'w-2 md:w-2.5 bg-slate-300 hover:bg-slate-400'}`}
                >
                  {i === currentIndex && (
                    <motion.div 
                      layoutId="activeDot"
                      className="absolute inset-0 bg-indigo-600 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                    />
                  )}
                </button>
              ))}
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-8">
              <div className="flex items-center gap-2 text-slate-400 hidden sm:flex">
                  <Info className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Navegue pelas setas ou pontos</span>
              </div>
              
              <motion.button 
                onClick={handleMainAction} 
                className="group px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold text-sm flex items-center gap-3 shadow-[0_10px_20px_-5px_rgba(79,70,229,0.4)]"
                whileHover={{ scale: 1.05, backgroundColor: '#4f46e5' }}
                whileTap={{ scale: 0.95 }}
              >
                  <span>{currentIndex === timelineData.length - 1 ? 'Reiniciar' : 'Avançar Fase'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>
          </div>
      </footer>
    </div>
  );
}

