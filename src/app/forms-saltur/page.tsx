"use client";
import './FormsSaltur.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Map, 
  ArrowRight, 
  Check, 
  Info,
  Globe,
  Camera,
  Layout,
  Target,
  MessageSquare,
  Sparkles,
  Heart,
  HelpCircle,
  Zap,
  Users,
  Search,
  Eye,
  Send
} from 'lucide-react';

type QuestionId = 
  | 'intro'
  | 'objetivo_principal'
  | 'maiores_problemas'
  | 'site_ideal'
  | 'paginas_indispensaveis'
  | 'manter_preservar'
  | 'remover_reorganizar'
  | 'organizacao_viagens'
  | 'informacoes_facilidade'
  | 'informacoes_home'
  | 'tipos_clientes'
  | 'destinos_vendas'
  | 'visual_percebido'
  | 'referencias'
  | 'elementos_dinamicos'
  | 'maiores_diferenciais'
  | 'essencia_saltur'
  | 'duvidas_clientes'
  | 'ideias_extras'
  | 'contato'
  | 'outro';

interface Question {
  id: QuestionId;
  type: 'info' | 'text' | 'textarea';
  title: string | ((answers: Record<string, any>) => string);
  subtitle?: string | ((answers: Record<string, any>) => string);
  tooltip?: string;
  placeholder?: string;
  next: (answer?: any) => QuestionId | null;
  icon?: React.ElementType;
}

const questions: Question[] = [
  {
    id: 'intro',
    type: 'info',
    title: 'Formulário Pré-Reunião — Novo Site Saltur',
    subtitle: 'Este formulário tem como objetivo entender melhor suas expectativas, preferências e necessidades para o novo site da Saltur. As respostas vão nos ajudar a preparar a reunião de alinhamento de forma mais objetiva e produtiva.',
    next: () => 'objetivo_principal',
    icon: Compass
  },
  {
    id: 'objetivo_principal',
    type: 'textarea',
    title: '1. Qual é o principal objetivo do novo site da Saltur hoje?',
    subtitle: 'Objetivo: reforçar qual é a prioridade principal.',
    placeholder: 'Descreva aqui o objetivo principal...',
    next: () => 'maiores_problemas',
    icon: Target
  },
  {
    id: 'maiores_problemas',
    type: 'textarea',
    title: '2. Quais são hoje os 3 maiores problemas ou frustrações que você tem com o site atual?',
    subtitle: 'Objetivo: entender exatamente quais pontos mais incomodam você hoje.',
    placeholder: 'Ex: Lentidão, visual datado, difícil de atualizar...',
    next: () => 'site_ideal',
    icon: Zap
  },
  {
    id: 'site_ideal',
    type: 'textarea',
    title: '3. Quando o novo site estiver pronto, o que faria você pensar: "Agora sim o site ficou do jeito que eu queria"?',
    subtitle: 'Objetivo: entender como seria, na sua visão, um site ideal para a Saltur.',
    placeholder: 'Descreva sua visão de sucesso...',
    next: () => 'paginas_indispensaveis',
    icon: Sparkles
  },
  {
    id: 'paginas_indispensaveis',
    type: 'textarea',
    title: '4. Quais páginas ou áreas você considera indispensáveis no novo site?',
    subtitle: 'Exemplos: turismo, viagens corporativas, destinos, blog, institucional, experiências, etc.',
    placeholder: 'Liste as páginas essenciais...',
    next: () => 'manter_preservar',
    icon: Layout
  },
  {
    id: 'manter_preservar',
    type: 'textarea',
    title: '5. Existe algo no site atual que você gostaria de manter ou preservar no novo site?',
    subtitle: 'Objetivo: identificar elementos importantes que não devem se perder.',
    placeholder: 'Elementos a manter...',
    next: () => 'remover_reorganizar',
    icon: Heart
  },
  {
    id: 'remover_reorganizar',
    type: 'textarea',
    title: '6. Existe alguma parte do site atual que você gostaria de remover, reorganizar ou melhorar?',
    subtitle: 'Objetivo: entender quais pontos poderiam ser melhor estruturados.',
    placeholder: 'O que precisa mudar...',
    next: () => 'organizacao_viagens',
    icon: Map
  },
  {
    id: 'organizacao_viagens',
    type: 'textarea',
    title: '7. Pensando nos pacotes e viagens, qual forma de organização faz mais sentido para você?',
    subtitle: 'Exemplos: por destino, por data, por temporada, por tipo de viagem...',
    placeholder: 'Como você prefere organizar as viagens?',
    next: () => 'informacoes_facilidade',
    icon: Globe
  },
  {
    id: 'informacoes_facilidade',
    type: 'textarea',
    title: '8. Quais informações você acredita que o cliente precisa encontrar com mais facilidade no site?',
    subtitle: 'Objetivo: garantir que o mais importante fique acessível.',
    placeholder: 'Informações cruciais para o cliente...',
    next: () => 'informacoes_home',
    icon: Search
  },
  {
    id: 'informacoes_home',
    type: 'textarea',
    title: '9. Existe alguma informação que você acredita que deveria aparecer logo na página inicial do site?',
    subtitle: 'Exemplos: destinos mais procurados, pacotes próximos, promoções, diferenciais...',
    placeholder: 'O que destacar na home...',
    next: () => 'tipos_clientes',
    icon: Eye
  },
  {
    id: 'tipos_clientes',
    type: 'textarea',
    title: '10. Quais tipos de clientes você mais quer atrair através do novo site?',
    subtitle: 'Exemplos: famílias, grupos de amigos, casais, viagens corporativas...',
    placeholder: 'Defina seu público-alvo...',
    next: () => 'destinos_vendas',
    icon: Users
  },
  {
    id: 'destinos_vendas',
    type: 'textarea',
    title: '11. Quais destinos ou tipos de viagem costumam ter mais procura ou mais vendas hoje na Saltur?',
    subtitle: 'Objetivo: identificar o que deve ganhar mais destaque.',
    placeholder: 'Principais produtos da Saltur...',
    next: () => 'visual_percebido',
    icon: Camera
  },
  {
    id: 'visual_percebido',
    type: 'textarea',
    title: '12. Como você gostaria que o visual do novo site fosse percebido?',
    subtitle: 'Exemplos: moderno, elegante, inspirador, organizado, sofisticado, leve...',
    placeholder: 'Qual a sensação que o site deve passar?',
    next: () => 'referencias',
    icon: Sparkles
  },
  {
    id: 'referencias',
    type: 'textarea',
    title: '13. Existem sites de turismo ou empresas que você considera boas referências de visual ou organização?',
    subtitle: 'Envia links por aqui dos principais ou no WhatsApp.',
    placeholder: 'Links ou nomes de referências...',
    next: () => 'elementos_dinamicos',
    icon: Layout
  },
  {
    id: 'elementos_dinamicos',
    type: 'textarea',
    title: '14. Pensando na página inicial, você gostaria de utilizar elementos visuais mais dinâmicos?',
    subtitle: 'Exemplos: vídeos curtos, movimento leve, banners com transição...',
    placeholder: 'Sua visão para a home...',
    next: () => 'maiores_diferenciais',
    icon: Zap
  },
  {
    id: 'maiores_diferenciais',
    type: 'textarea',
    title: '15. Na sua visão, quais são os maiores diferenciais da Saltur hoje?',
    subtitle: 'Objetivo: identificar os pontos fortes a serem destacados.',
    placeholder: 'O que torna a Saltur única?',
    next: () => 'essencia_saltur',
    icon: Target
  },
  {
    id: 'essencia_saltur',
    type: 'textarea',
    title: '16. Existe algum tipo de viagem, roteiro ou experiência que representa muito bem a essência da Saltur?',
    subtitle: 'Exemplos: roteiros personalizados, experiências temáticas, viagens em grupo...',
    placeholder: 'A alma da Saltur em uma viagem...',
    next: () => 'duvidas_clientes',
    icon: Heart
  },
  {
    id: 'duvidas_clientes',
    type: 'textarea',
    title: '17. Quais perguntas ou dúvidas os clientes costumam ter antes de comprar uma viagem?',
    subtitle: 'Objetivo: identificar conteúdos para ajudar na decisão.',
    placeholder: 'Dúvidas frequentes...',
    next: () => 'ideias_extras',
    icon: HelpCircle
  },
  {
    id: 'ideias_extras',
    type: 'textarea',
    title: '18. Existe mais alguma ideia, necessidade ou observação que você gostaria de compartilhar?',
    subtitle: 'Espaço aberto para qualquer detalhe importante.',
    placeholder: 'Outras considerações...',
    next: () => 'contato',
    icon: MessageSquare
  },
  {
    id: 'contato',
    type: 'text',
    title: 'Para finalizar, qual o seu nome e WhatsApp?',
    subtitle: 'Isso nos ajuda a identificar suas respostas.',
    placeholder: 'Nome e WhatsApp...',
    next: () => 'outro',
    icon: Send
  },
  {
    id: 'outro',
    type: 'info',
    title: 'Tudo pronto!',
    subtitle: 'Obrigado por compartilhar essas informações. Suas respostas serão fundamentais para a nossa reunião de alinhamento. Entraremos em contato em breve!',
    next: () => null,
    icon: Check
  }
];

export default function FormsSaltur() {
  const [currentQuestionId, setCurrentQuestionId] = useState<QuestionId>('intro');
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<QuestionId[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentQuestionIndex = questions.findIndex(q => q.id === currentQuestionId);
  const currentQuestion = questions[currentQuestionIndex];
  const isFinished = currentQuestionId === 'outro';

  useEffect(() => {
    if (currentQuestion.type === 'text' && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 400);
    } else if (currentQuestion.type === 'textarea' && textareaRef.current) {
      setTimeout(() => textareaRef.current?.focus(), 400);
    }
    setInputValue(answers[currentQuestionId] || '');
  }, [currentQuestionId, currentQuestion.type]);

  const isNextDisabled = () => {
    if (currentQuestion.type === 'info') return false;
    return !inputValue.trim();
  };

  const submitToEmail = async (finalAnswers: Record<string, any>) => {
    const payload: Record<string, string> = {};
    
    questions.forEach(q => {
      if (finalAnswers[q.id] && q.id !== 'intro' && q.id !== 'outro') {
        const title = typeof q.title === 'function' ? q.title(finalAnswers) : q.title;
        payload[title] = finalAnswers[q.id];
      }
    });

    try {
      await fetch('https://formsubmit.co/ajax/growthcompassofc@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Novo Formulário Saltur: ${finalAnswers.contato || 'Cliente'}`,
          _template: 'table',
          ...payload
        })
      });
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  const handleNext = async (value?: any) => {
    const finalValue = value !== undefined ? value : inputValue;
    
    if (currentQuestion.type !== 'info' && isNextDisabled()) {
      return;
    }

    const newAnswers = { ...answers, [currentQuestionId]: finalValue };

    if (currentQuestion.type !== 'info') {
      setAnswers(newAnswers);
    }

    const nextId = currentQuestion.next(finalValue);
    
    if (nextId === 'outro') {
      setIsSubmitting(true);
      await submitToEmail(newAnswers);
      setIsSubmitting(false);
    }

    if (nextId) {
      setHistory(prev => [...prev, currentQuestionId]);
      setCurrentQuestionId(nextId);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const prevId = newHistory.pop()!;
      setHistory(newHistory);
      setCurrentQuestionId(prevId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && currentQuestion.type === 'text') {
      handleNext();
    }
  };

  const renderTitle = (title: string | ((answers: Record<string, any>) => string)) => {
    return typeof title === 'function' ? title(answers) : title;
  };

  const progress = (currentQuestionIndex / (questions.length - 1)) * 100;

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white overflow-hidden font-sans">
      {/* Sidebar - Desktop Only */}
      <nav className="w-[80px] h-full border-r border-white/10 flex-col items-center py-10 justify-between shrink-0 hidden md:flex">
        <div className="mt-16 -rotate-90 w-32 flex justify-center shrink-0">
          <img src="/gcompass-logo-white.svg" alt="G Compass" className="w-full object-contain" />
        </div>
        <div className="flex flex-col gap-4">
          {questions.map((q, i) => {
            if (q.id === 'intro' || q.id === 'outro') return null;
            const isActive = q.id === currentQuestionId;
            const isCompleted = history.includes(q.id);
            return (
              <div 
                key={q.id} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  isActive 
                    ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6] scale-150' 
                    : isCompleted ? 'bg-blue-500/50' : 'bg-zinc-700'
                }`} 
              />
            );
          })}
        </div>
        <div className="text-zinc-500 text-xs font-medium">
          {String(currentQuestionIndex + 1).padStart(2, '0')}/{String(questions.length).padStart(2, '0')}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative h-full">
        {/* Progress bar mobile */}
        <div className="md:hidden w-full h-1 bg-zinc-900 absolute top-0 left-0 z-50">
          <motion.div 
            className="h-full bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <section className="flex-1 p-6 md:p-12 lg:p-24 flex flex-col justify-center relative z-10 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-3xl mx-auto"
            >
              {/* Question Icon & Badge */}
              <div className="flex items-center gap-4 mb-8">
                {currentQuestion.icon && (
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <currentQuestion.icon size={24} />
                  </div>
                )}
                {currentQuestion.id !== 'intro' && currentQuestion.id !== 'outro' && (
                  <span className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold">
                    Questão {currentQuestionIndex} de {questions.length - 2}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
                {renderTitle(currentQuestion.title)}
              </h1>
              
              {currentQuestion.subtitle && (
                <p className="text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                  {renderTitle(currentQuestion.subtitle)}
                </p>
              )}

              {/* Input Area */}
              <div className="w-full">
                {currentQuestion.type === 'info' && (
                  <button
                    onClick={() => handleNext()}
                    className="group px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center gap-3 transition-all transform hover:scale-105"
                  >
                    {currentQuestion.id === 'intro' ? 'Começar Agora' : 'Reiniciar'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}

                {currentQuestion.type === 'text' && (
                  <div className="relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={currentQuestion.placeholder}
                      className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-2xl md:text-3xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={() => handleNext()}
                        disabled={isNextDisabled()}
                        className="px-8 py-3 rounded-full bg-blue-600 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold transition-all"
                      >
                        Próximo
                      </button>
                    </div>
                  </div>
                )}

                {currentQuestion.type === 'textarea' && (
                  <div className="relative">
                    <textarea
                      ref={textareaRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={currentQuestion.placeholder}
                      rows={4}
                      className="w-full bg-zinc-900/50 border-2 border-zinc-800 rounded-2xl p-6 text-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                    <div className="mt-6 flex justify-between items-center">
                      <span className="text-zinc-500 text-sm">Pressione Shift + Enter para quebrar linha</span>
                      <button
                        onClick={() => handleNext()}
                        disabled={isNextDisabled()}
                        className="px-8 py-3 rounded-full bg-blue-600 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold transition-all flex items-center gap-2 group"
                      >
                        Confirmar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Navigation Controls */}
        <div className="p-6 md:p-12 flex justify-between items-center border-t border-white/5 bg-[#050505]">
          <button
            onClick={handleBack}
            disabled={history.length === 0 || isFinished}
            className="flex items-center gap-2 text-zinc-500 hover:text-white disabled:opacity-0 transition-all font-medium"
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> Voltar
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <img src="/gcompass-logo-white.svg" alt="G Compass" className="h-4 opacity-30" />
          </div>
        </div>
      </div>

      {isSubmitting && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-blue-400 font-medium">Enviando suas respostas...</p>
          </div>
        </div>
      )}
    </div>
  );
}
