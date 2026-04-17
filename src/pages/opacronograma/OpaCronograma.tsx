import React, { useState, useEffect } from 'react';
import './OpaCronograma.css';
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
      tasks: ["Reunião de análise 90 dias", "Discussão de oportunidades", "Definição do próximo ciclo"],
      deliverables: ["Relatório de ROI", "Plano de expansão"]
  }
];

export default function OpaCronograma() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [demandsOpen, setDemandsOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  const currentItem = timelineData[currentIndex];
  const CurrentIcon = iconMap[currentItem.icon] || Search;
  const progress = Math.round(((currentIndex + 1) / timelineData.length) * 100);

  const goToSlide = (index: number) => {
    if (index !== currentIndex && !animating) {
      setAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setAnimating(false), 500);
    }
  };

  const nextSlide = () => {
    if (currentIndex < timelineData.length - 1) {
      goToSlide(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  };

  const handleMainAction = () => {
    if (currentIndex === timelineData.length - 1) {
      goToSlide(0);
    } else {
      nextSlide();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, animating]);

  return (
    <div className="opacronograma-page bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans relative">
      {/* Elementos Decorativos de Fundo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="bg-blob absolute -top-[10%] -left-[10%] w-[80%] md:w-[60%] h-[60%] bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-[80px] md:blur-[120px] rounded-full"></div>
          <div className="bg-blob absolute -bottom-[10%] -right-[10%] w-[70%] md:w-[50%] h-[50%] bg-gradient-to-br from-purple-100/30 to-blue-100/30 blur-[70px] md:blur-[100px] rounded-full" style={{ animationDelay: '-5s' }}></div>
      </div>

      {/* Cabeçalho */}
      <header className="relative z-50 px-4 md:px-8 py-4 md:py-6 flex items-center justify-between bg-blue-600 backdrop-blur-xl border-b border-blue-700 sticky top-0 text-white">
          <div className="flex items-center gap-3 md:gap-6">
              <img 
                  src="/gcompass-logo-white.svg" 
                  alt="Growth Compass" 
                  className="h-6 md:h-10 w-auto object-contain brightness-0 invert"
              />
              <div className="w-px h-6 md:h-8 bg-blue-400 hidden sm:block"></div>
              <div className="hidden sm:block">
                  <h1 className="text-sm md:text-lg font-bold tracking-tight text-white">OPA Imóveis</h1>
                  <p className="text-[8px] md:text-xs font-medium text-blue-100 uppercase tracking-widest leading-none">Cronograma de Implementação</p>
              </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
              <div className="text-right">
                  <p className="text-[8px] md:text-xs font-bold text-blue-200 uppercase tracking-tighter">Progresso</p>
                  <p className="text-xs md:text-sm font-black text-white">{progress}%</p>
              </div>
              <div className="w-16 md:w-32 h-1 md:h-1.5 bg-blue-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-white to-blue-200 transition-all duration-500" style={{ width: `${progress}%` }}></div>
              </div>
          </div>
      </header>

      {/* Área Principal do Conteúdo */}
      <main className="flex-1 relative z-10 flex items-center justify-center p-3 md:p-8 overflow-hidden">
          <div className={`w-full max-w-6xl h-full md:h-auto md:max-h-[800px] flex flex-col md:flex-row bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-200/50 overflow-hidden relative ${animating ? 'slide-exit' : 'slide-active'}`}>
              
              {/* Lado Esquerdo: Visual */}
              <div className={`w-full md:w-2/5 bg-gradient-to-br ${currentItem.color} p-6 md:p-12 text-white flex flex-row md:flex-col justify-between items-center md:items-start relative overflow-hidden shrink-0 transition-colors duration-500`}>
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-full border-[20px] md:border-[40px] border-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute bottom-0 right-0 w-full h-full border-[10px] md:border-[20px] border-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
                  </div>

                  <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] md:text-sm font-bold mb-2 md:mb-8 w-fit">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          <span>{currentItem.date}</span>
                      </div>
                      <h2 className="text-2xl md:text-7xl font-black leading-none tracking-tighter">
                          {currentItem.week.split(' ')[0]} <span className="opacity-50">{currentItem.week.split(' ')[1]}</span>
                      </h2>
                  </div>

                  <div className="relative z-10 w-12 h-12 md:w-20 md:h-20 bg-white/20 backdrop-blur-xl rounded-xl md:rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl">
                      <CurrentIcon className="w-6 h-6 md:w-10 md:h-10" />
                  </div>
              </div>

              {/* Lado Direito: Conteúdo */}
              <div className="flex-1 p-6 md:p-16 overflow-y-auto custom-scrollbar flex flex-col bg-white">
                  <h3 className="text-xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
                      {currentItem.title}
                  </h3>
                  <p className="text-sm md:text-lg text-slate-500 mb-6 md:mb-10 leading-relaxed">
                      {currentItem.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <section>
                          <h4 className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 md:mb-6 flex items-center gap-2">
                              <Target className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                              Ações Estratégicas
                          </h4>
                          <ul className="space-y-3 md:space-y-4">
                              {currentItem.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                    <span className="text-xs md:text-sm font-medium text-slate-600 leading-snug">{task}</span>
                                </li>
                              ))}
                          </ul>
                      </section>

                      <section>
                          <h4 className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 md:mb-6 flex items-center gap-2">
                              <Layout className="w-3 h-3 md:w-4 md:h-4 text-purple-500" />
                              Entregáveis
                          </h4>
                          <div className="space-y-2 md:space-y-3">
                              {currentItem.deliverables.map((del, i) => (
                                <div key={i} className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200/50 flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0" />
                                    <span className="text-xs md:text-sm font-bold text-slate-700">{del}</span>
                                </div>
                              ))}
                          </div>
                      </section>
                  </div>
              </div>
          </div>

          {/* Botões de Navegação Desktop */}
          <div className="hidden md:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-12 pointer-events-none">
              <button onClick={prevSlide} disabled={currentIndex === 0} className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-xl border border-slate-200 pointer-events-auto transition-all hover:bg-slate-50 active:scale-90 disabled:opacity-0">
                  <ChevronLeft className="w-6 h-6 text-slate-600" />
              </button>
              <button onClick={nextSlide} disabled={currentIndex === timelineData.length - 1} className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-xl border border-slate-200 pointer-events-auto transition-all hover:bg-slate-50 active:scale-90 disabled:opacity-0">
                  <ChevronRight className="w-6 h-6 text-slate-600" />
              </button>
          </div>
      </main>

      {/* Demandas Contínuas */}
      <div className="w-full max-w-6xl mx-auto px-3 md:px-8 pb-4 relative z-20">
          <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
              <button onClick={() => setDemandsOpen(!demandsOpen)} className="w-full px-5 py-3 md:px-6 md:py-4 flex items-center justify-between text-slate-800 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                      <RefreshCw className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                      <span className="font-bold text-xs md:text-sm uppercase tracking-wider">Demandas Contínuas</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 text-slate-400 transition-transform duration-300 ${demandsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className="transition-all duration-300 ease-in-out overflow-hidden" 
                style={{ maxHeight: demandsOpen ? '500px' : '0px' }}
              >
                  <div className="p-5 pt-0 md:p-6 md:pt-0 border-t border-slate-100/50">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-4">
                          {[
                            "Pesquisa contínua de mercado imobiliário",
                            "Pesquisa aprofundada sobre Ilhabela",
                            "Escuta ativa com equipe",
                            "Otimização contínua dos formatos",
                            "Melhorias constantes no blog e site",
                            "Monitoramento de assuntos de timing"
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-xs md:text-sm font-medium text-slate-600">{item}</span>
                            </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </div>

      {/* Rodapé */}
      <footer className="relative z-50 px-4 md:px-8 py-4 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 bg-white/50 backdrop-blur-md border-t border-slate-200/50">
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto max-w-full pb-2 md:pb-0 no-scrollbar">
              {timelineData.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => goToSlide(i)} 
                  className={`h-1.5 md:h-2 rounded-full transition-all duration-500 shrink-0 ${i === currentIndex ? 'w-6 md:w-8 bg-blue-600' : 'w-1.5 md:w-2 bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-slate-400">
                  <Info className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Use as setas ou clique nos pontos</span>
              </div>
              
              <button onClick={handleMainAction} className="group px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl bg-slate-900 text-white font-bold text-xs md:text-sm flex items-center gap-2 md:gap-3 hover:bg-blue-600 transition-colors shadow-xl shadow-slate-900/20">
                  <span>{currentIndex === timelineData.length - 1 ? 'Reiniciar' : 'Próxima'}</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
          </div>
      </footer>
    </div>
  );
}
