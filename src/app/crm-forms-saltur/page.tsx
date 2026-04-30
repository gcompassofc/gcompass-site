"use client";
import './CrmFormsSaltur.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Map, 
  Check, 
  ArrowRight, 
  Info,
  MessageSquare,
  Users,
  Hash,
  Clock,
  AlertCircle,
  BarChart3,
  Bot,
  Zap,
  Layout,
  Layers,
  Search,
  Filter
} from 'lucide-react';

type QuestionId = 
  | 'intro'
  | 'main_problem'
  | 'leads_volume'
  | 'leads_channels'
  | 'breather_1'
  | 'whatsapp_central'
  | 'team_size'
  | 'whatsapp_numbers'
  | 'breather_2'
  | 'sales_stages'
  | 'closing_time'
  | 'followup_loss'
  | 'breather_3'
  | 'dashboard_metrics'
  | 'conversion_tracking'
  | 'automation_need'
  | 'bot_vs_tasks'
  | 'integrations'
  | 'tool_complexity'
  | 'outro';

interface Option {
  label: string;
  value: string;
  icon?: React.ElementType;
  tooltip?: string;
}

interface Question {
  id: QuestionId;
  type: 'info' | 'text' | 'choice' | 'multiple_choice';
  title: string | ((answers: Record<string, any>) => string);
  subtitle?: string | ((answers: Record<string, any>) => string);
  tooltip?: string;
  options?: Option[] | ((answers: Record<string, any>) => Option[]);
  placeholder?: string;
  next: (answer?: any) => QuestionId | null;
}

const questions: Question[] = [
  {
    id: 'intro',
    type: 'info',
    title: 'Análise de CRM Saltur',
    subtitle: 'Vamos entender as dificuldades da sua equipe com o CRM e desenhar uma solução personalizada.',
    next: () => 'main_problem'
  },
  {
    id: 'main_problem',
    type: 'text',
    title: 'Qual problema principal vocês querem resolver com o CRM?',
    placeholder: 'Ex: Falta de organização, perda de leads...',
    next: () => 'leads_volume'
  },
  {
    id: 'leads_volume',
    type: 'choice',
    title: 'Quantos leads PF entram por mês?',
    options: [
      { value: '0_50', label: 'Até 50 leads' },
      { value: '51_150', label: '51 a 150 leads' },
      { value: '151_500', label: '151 a 500 leads' },
      { value: '500_plus', label: 'Mais de 500 leads' }
    ],
    next: () => 'leads_channels'
  },
  {
    id: 'leads_channels',
    type: 'multiple_choice',
    title: 'Quais são os principais canais de entrada?',
    subtitle: 'Selecione as origens mais comuns dos seus leads.',
    options: [
      { value: 'instagram', label: 'Instagram Ads', icon: Search },
      { value: 'google', label: 'Google Ads', icon: Filter },
      { value: 'site', label: 'Site Próprio', icon: Layout },
      { value: 'indicacao', label: 'Indicação', icon: Users },
      { value: 'whatsapp_direto', label: 'WhatsApp Direto', icon: MessageSquare },
      { value: 'outros', label: 'Outros' }
    ],
    next: () => 'breather_1'
  },
  {
    id: 'breather_1',
    type: 'info',
    title: 'Interessante...',
    subtitle: 'Entender de onde vêm os leads é o primeiro passo para otimizar o seu investimento em marketing.',
    next: () => 'whatsapp_central'
  },
  {
    id: 'whatsapp_central',
    type: 'choice',
    title: 'O WhatsApp é o canal central de atendimento e venda?',
    options: [
      { value: 'sim', label: 'Sim, usamos para tudo' },
      { value: 'parcialmente', label: 'Sim, mas usamos outros canais' },
      { value: 'nao', label: 'Não, o foco é outro' }
    ],
    next: () => 'team_size'
  },
  {
    id: 'team_size',
    type: 'text',
    title: 'Quantas pessoas vão atender dentro do CRM?',
    placeholder: 'Ex: 5 pessoas',
    next: () => 'whatsapp_numbers'
  },
  {
    id: 'whatsapp_numbers',
    type: 'choice',
    title: 'Vocês usam um WhatsApp único ou vários números?',
    options: [
      { value: 'unico', label: 'Um número único para todos' },
      { value: 'varios', label: 'Cada atendente tem seu número' },
      { value: 'setores', label: 'Um número por setor' }
    ],
    next: () => 'breather_2'
  },
  {
    id: 'breather_2',
    type: 'info',
    title: 'Faz todo sentido.',
    subtitle: 'O WhatsApp hoje é o coração do comercial. Vamos garantir que ele funcione a favor de vocês, e não contra.',
    next: () => 'sales_stages'
  },
  {
    id: 'sales_stages',
    type: 'text',
    title: 'O processo de venda tem quantas etapas?',
    placeholder: 'Ex: 5 etapas (Lead, Agendamento, Visita...)',
    next: () => 'closing_time'
  },
  {
    id: 'closing_time',
    type: 'choice',
    title: 'Quanto tempo o cliente demora para fechar?',
    options: [
      { value: 'imediato', label: 'Até 7 dias' },
      { value: 'curto', label: '7 a 30 dias' },
      { value: 'medio', label: '30 a 90 dias' },
      { value: 'longo', label: 'Mais de 90 dias' }
    ],
    next: () => 'followup_loss'
  },
  {
    id: 'followup_loss',
    type: 'choice',
    title: 'Hoje vocês perdem vendas por falta de follow-up?',
    options: [
      { value: 'sim', label: 'Sim, acontece com frequência', icon: AlertCircle },
      { value: 'as_vezes', label: 'Às vezes, nos perdemos no volume', icon: Clock },
      { value: 'nao', label: 'Não, temos controle total', icon: Check }
    ],
    next: () => 'breather_3'
  },
  {
    id: 'breather_3',
    type: 'info',
    title: 'Essa é a dor de muitos...',
    subtitle: 'O follow-up é onde a maioria das empresas deixa dinheiro na mesa. Vamos ajustar esse processo para vocês não perderem mais nada.',
    next: () => 'dashboard_metrics'
  },
  {
    id: 'dashboard_metrics',
    type: 'multiple_choice',
    title: 'Quais métricas vocês querem ver no dashboard?',
    options: [
      { value: 'conversao', label: 'Taxa de Conversão', icon: BarChart3 },
      { value: 'origem', label: 'Vendas por Origem', icon: Map },
      { value: 'tempo_resposta', label: 'Tempo de Resposta', icon: Clock },
      { value: 'performance_equipe', label: 'Performance por Vendedor', icon: Users },
      { value: 'motivo_perda', label: 'Motivos de Perda', icon: AlertCircle }
    ],
    next: () => 'conversion_tracking'
  },
  {
    id: 'conversion_tracking',
    type: 'choice',
    title: 'Precisam saber conversão por canal/campanha?',
    options: [
      { value: 'sim', label: 'Sim, é fundamental' },
      { value: 'nao', label: 'Não agora' }
    ],
    next: () => 'automation_need'
  },
  {
    id: 'automation_need',
    type: 'choice',
    title: 'Precisam de automação de mensagens?',
    options: [
      { value: 'sim', label: 'Sim, para agilizar o contato', icon: Zap },
      { value: 'nao', label: 'Não, preferimos manual' }
    ],
    next: () => 'bot_vs_tasks'
  },
  {
    id: 'bot_vs_tasks',
    type: 'choice',
    title: 'Precisam de bot ou só organização e tarefas?',
    options: [
      { value: 'bot', label: 'Bot de qualificação inicial', icon: Bot },
      { value: 'organizacao', label: 'Apenas organização e tarefas', icon: Layers },
      { value: 'ambos', label: 'Ambos' }
    ],
    next: () => 'integrations'
  },
  {
    id: 'integrations',
    type: 'choice',
    title: 'O CRM precisa integrar com site, anúncios e WhatsApp?',
    options: [
      { value: 'sim', label: 'Sim, integração total' },
      { value: 'parcial', label: 'Apenas com alguns canais' },
      { value: 'nao', label: 'Não precisa agora' }
    ],
    next: () => 'tool_complexity'
  },
  {
    id: 'tool_complexity',
    type: 'choice',
    title: 'A equipe precisa de uma ferramenta simples ou aguenta uma mais completa?',
    options: [
      { value: 'simples', label: 'Simples e intuitiva' },
      { value: 'completa', label: 'Robusta e completa' },
      { value: 'intermediaria', label: 'Equilíbrio entre os dois' }
    ],
    next: () => 'outro'
  },
  {
    id: 'outro',
    type: 'info',
    title: 'Diagnóstico Concluído!',
    subtitle: 'Obrigado por responder. Com essas informações, nossa equipe vai preparar o cenário ideal para o seu CRM.',
    next: () => null
  }
];

export default function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState<QuestionId>('intro');
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<QuestionId[]>([]);
  const [multiSelectValues, setMultiSelectValues] = useState<string[]>([]);
  
  const inputRef = useRef<HTMLInputElement>(null);

  const currentQuestionIndex = questions.findIndex(q => q.id === currentQuestionId);
  const currentQuestion = questions[currentQuestionIndex];
  const isFinished = currentQuestionId === 'outro';

  useEffect(() => {
    if (currentQuestion.type === 'multiple_choice') {
      setMultiSelectValues(answers[currentQuestionId] || []);
    }
  }, [currentQuestionId, currentQuestion.type, answers]);

  const toggleMultiSelect = (val: string) => {
    setMultiSelectValues(prev => 
      prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
    );
  };

  useEffect(() => {
    if (currentQuestion.type === 'text' && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
    setInputValue(answers[currentQuestionId] || '');
  }, [currentQuestionId, currentQuestion.type]);

  const handleNext = async (value?: any) => {
    const finalValue = value !== undefined ? value : inputValue;
    const newAnswers = { ...answers, [currentQuestionId]: finalValue };

    if (currentQuestion.type !== 'info') {
      setAnswers(newAnswers);
    }

    const nextId = currentQuestion.next(finalValue);
    
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
    if (e.key === 'Enter' && currentQuestion.type === 'text') {
      handleNext();
    }
  };

  const renderTitle = (title: string | ((answers: Record<string, any>) => string)) => {
    return typeof title === 'function' ? title(answers) : title;
  };

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white overflow-hidden font-sans">
      {/* Sidebar - Visual representation of progress */}
      <nav className="w-[80px] h-full border-r border-white/10 flex-col items-center py-10 justify-between shrink-0 hidden md:flex">
        <div className="mt-16 -rotate-90 w-32 flex justify-center shrink-0">
          <span className="font-bold tracking-tighter text-xl">SALTUR</span>
        </div>
        <div className="flex flex-col gap-6">
          {Array.from({ length: 5 }).map((_, i) => {
            const progress = history.length / questions.length;
            const isActive = i <= Math.floor(progress * 5);
            return (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full relative transition-all duration-1000 ${
                  isActive 
                    ? 'bg-purple-500 shadow-[0_0_15px_#8b5cf6]'
                    : 'bg-[#444444]'
                }`} 
              />
            );
          })}
        </div>
        <div className="text-[#888888] text-xs">
          {Math.min(questions.length, history.length + 1)}/{questions.length}
        </div>
      </nav>

      {/* Main Container */}
      <div className="flex-1 flex flex-col relative h-full overflow-y-auto">
        
        {/* Form Section */}
        <section className="flex-1 p-6 py-10 md:p-12 lg:p-20 flex flex-col justify-center relative z-10 max-w-4xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Header Label */}
              {currentQuestion.id !== 'intro' && currentQuestion.id !== 'outro' && (
                <div className="text-[12px] uppercase tracking-[0.2em] text-purple-400 mb-6 flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-purple-400"></span> Análise CRM
                </div>
              )}

              {/* Title & Subtitle */}
              <h1 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] mb-8 flex items-center gap-3 flex-wrap">
                {renderTitle(currentQuestion.title)}
              </h1>
              
              {currentQuestion.subtitle && (
                <p className="text-[#888888] text-base lg:text-lg mb-10 -mt-4">
                  {renderTitle(currentQuestion.subtitle)}
                </p>
              )}

              {/* Input Area */}
              <div className="w-full">
                {currentQuestion.type === 'info' && (
                  <button
                    onClick={() => handleNext()}
                    className="px-10 py-4 rounded-full font-semibold flex items-center gap-3 bg-gradient-to-br from-purple-500 to-indigo-600 text-white hover:opacity-90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  >
                    {currentQuestion.id === 'intro' ? 'Iniciar Análise' : 'Continuar'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}

                {currentQuestion.type === 'text' && (
                  <div className="space-y-6 w-full">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={currentQuestion.placeholder}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-2xl md:text-3xl text-white placeholder:text-[#444444] focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    <button
                      onClick={() => handleNext()}
                      disabled={!inputValue.trim()}
                      className="mt-8 px-10 py-4 rounded-full font-semibold flex items-center gap-3 bg-white text-black hover:bg-gray-200 transition-all disabled:opacity-30"
                    >
                      Próxima <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {(currentQuestion.type === 'choice' || currentQuestion.type === 'multiple_choice') && (
                  <div className="w-full flex flex-col gap-6">
                    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
                      { (typeof currentQuestion.options === 'function' ? currentQuestion.options(answers) : currentQuestion.options || []).map((option, index) => {
                        const Icon = option.icon || ArrowRight;
                        const isMulti = currentQuestion.type === 'multiple_choice';
                        const isSelected = isMulti && multiSelectValues.includes(option.value);

                        return (
                          <motion.button
                            key={option.value}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => isMulti ? toggleMultiSelect(option.value) : handleNext(option.value)}
                            className={`group border p-6 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between text-left w-full ${
                              isSelected 
                                ? 'bg-purple-500/10 border-purple-500' 
                                : 'bg-[#111111] border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5'
                            }`}
                          >
                            <span className={`text-[16px] font-medium ${isSelected ? 'text-purple-400' : 'text-white'}`}>
                              {option.label}
                            </span>
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-purple-400' : 'text-[#444444] group-hover:text-purple-400'}`} />
                          </motion.button>
                        );
                      })}
                    </div>
                    {currentQuestion.type === 'multiple_choice' && (
                      <button
                        onClick={() => handleNext(multiSelectValues)}
                        disabled={multiSelectValues.length === 0}
                        className="self-end mt-4 bg-purple-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-3 hover:bg-purple-600 transition-all disabled:opacity-30"
                      >
                        Confirmar <ArrowRight className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-20 flex items-center justify-between w-full">
            {history.length > 0 && currentQuestion.id !== 'outro' && (
              <button 
                onClick={handleBack}
                className="text-[#888888] hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                Voltar
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
