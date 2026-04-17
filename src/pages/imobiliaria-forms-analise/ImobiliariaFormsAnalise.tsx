import './ImobiliariaFormsAnalise.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Map, 
  MapPin, 
  Navigation, 
  ArrowRight, 
  Check, 
  Users, 
  TrendingUp, 
  Megaphone, 
  Settings, 
  Target, 
  Route,
  ChevronRight,
  Phone,
  Info,
  Magnet,
  UserX,
  Globe,
  Key,
  Percent,
  TrendingDown,
  GitMerge,
  BarChart2,
  HelpCircle,
  PieChart
} from 'lucide-react';

type QuestionId = 
  | 'intro'
  | 'agency_name'
  | 'region'
  | 'team_size'
  | 'main_bottleneck'
  | 'primary_bottleneck'
  | 'leads_source'
  | 'leads_volume'
  | 'leads_biggest_problem'
  | 'team_biggest_problem'
  | 'team_time_to_sell'
  | 'team_process'
  | 'cap_biggest_challenge'
  | 'cap_process'
  | 'cap_source'
  | 'conv_funnel_stuck'
  | 'conv_metrics'
  | 'conv_response_time'
  | 'ges_decisions'
  | 'ges_metrics'
  | 'ges_predictability'
  | 'impact_6_months'
  | 'impact_90_days'
  | 'contact'
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

const mainBottleneckOptions: Option[] = [
  { value: 'leads_falta', label: 'Falta de leads', icon: Magnet },
  { value: 'leads_ruins', label: 'Leads ruins / desqualificados', tooltip: 'Leads fora do perfil, buscando aluguel ou sem poder de compra.', icon: UserX },
  { value: 'leads_portais', label: 'Dependência de portais', tooltip: 'Ficar refém dos preços e algoritmos do Zap, Viva Real, etc.', icon: Globe },
  { value: 'cap_dificuldade', label: 'Dificuldade de captar imóveis', icon: Key },
  { value: 'conv_baixa', label: 'Baixa conversão de vendas', icon: Percent },
  { value: 'equipe_performance', label: 'Corretores não performam', icon: TrendingDown },
  { value: 'equipe_processo', label: 'Falta de processo comercial', icon: GitMerge },
  { value: 'ges_numeros', label: 'Falta de gestão por números', icon: BarChart2 },
  { value: 'leads_marketing', label: 'Marketing sem retorno previsível', icon: PieChart },
  { value: 'ges_outro', label: 'Outro', icon: HelpCircle }
];

const questions: Question[] = [
  {
    id: 'intro',
    type: 'info',
    title: 'Diagnóstico G Compass',
    subtitle: 'Essas perguntas vão tornar a nossa conversa muito mais produtiva e objetiva. Leva apenas alguns minutos.',
    next: () => 'agency_name'
  },
  {
    id: 'agency_name',
    type: 'text',
    title: 'Qual o nome da sua imobiliária?',
    placeholder: 'Ex: G Compass Imóveis',
    next: () => 'region'
  },
  {
    id: 'region',
    type: 'text',
    title: 'Cidade / região de atuação',
    placeholder: 'Ex: São Paulo - SP',
    next: () => 'team_size'
  },
  {
    id: 'team_size',
    type: 'choice',
    title: 'Quantos corretores ativos existem hoje?',
    options: [
      { value: '1_5', label: '1–5' },
      { value: '6_10', label: '6–10' },
      { value: '11_20', label: '11–20' },
      { value: '21_40', label: '21–40' },
      { value: '40_plus', label: '40+' }
    ],
    next: () => 'main_bottleneck'
  },
  {
    id: 'main_bottleneck',
    type: 'multiple_choice',
    title: 'Hoje, quais são os gargalos da sua imobiliária?',
    subtitle: 'Selecione um ou mais desafios que você enfrenta hoje.',
    options: mainBottleneckOptions,
    next: (val: string[]) => {
      if (val && val.length > 1) return 'primary_bottleneck';
      const singleVal = val && val[0];
      if (singleVal?.startsWith('leads_')) return 'leads_source';
      if (singleVal?.startsWith('equipe_')) return 'team_biggest_problem';
      if (singleVal?.startsWith('cap_')) return 'cap_biggest_challenge';
      if (singleVal?.startsWith('conv_')) return 'conv_funnel_stuck';
      return 'ges_decisions';
    }
  },
  {
    id: 'primary_bottleneck',
    type: 'choice',
    title: 'Dentre os selecionados, qual é o mais urgente para resolver?',
    subtitle: 'Essa é a pergunta que vai guiar o resto do nosso diagnóstico.',
    options: (answers) => {
      const selectedValues = answers.main_bottleneck || [];
      return mainBottleneckOptions.filter(o => selectedValues.includes(o.value));
    },
    next: (val) => {
      if (val?.startsWith('leads_')) return 'leads_source';
      if (val?.startsWith('equipe_')) return 'team_biggest_problem';
      if (val?.startsWith('cap_')) return 'cap_biggest_challenge';
      if (val?.startsWith('conv_')) return 'conv_funnel_stuck';
      return 'ges_decisions';
    }
  },
  // Path 1: Leads
  {
    id: 'leads_source',
    type: 'choice',
    title: 'Hoje a maior parte dos seus leads vem de onde?',
    options: [
      { value: 'portais', label: 'Zap / Viva Real' },
      { value: 'instagram', label: 'Instagram' },
      { value: 'google', label: 'Google' },
      { value: 'indicacoes', label: 'Indicações' },
      { value: 'varios', label: 'Vários canais' },
      { value: 'nao_sei', label: 'Não sabemos exatamente' }
    ],
    next: () => 'leads_volume'
  },
  {
    id: 'leads_volume',
    type: 'choice',
    title: 'Aproximadamente quantos leads novos entram por mês?',
    options: [
      { value: 'menos_20', label: 'Menos de 20' },
      { value: '20_50', label: '20–50' },
      { value: '50_100', label: '50–100' },
      { value: '100_mais', label: '100+' }
    ],
    next: () => 'leads_biggest_problem'
  },
  {
    id: 'leads_biggest_problem',
    type: 'choice',
    title: 'Você sente que o problema maior é:',
    options: [
      { value: 'volume', label: 'Pouco volume de leads' },
      { value: 'perfil', label: 'Leads sem perfil' },
      { value: 'atendimento', label: 'Corretores não atendem rápido' },
      { value: 'visita', label: 'Leads não viram visita' }
    ],
    next: () => 'impact_6_months'
  },
  // Path 2: Equipe
  {
    id: 'team_biggest_problem',
    type: 'choice',
    title: 'Qual é hoje o maior problema da equipe comercial?',
    options: [
      { value: 'fechamento', label: 'Corretores não fecham vendas' },
      { value: 'disciplina', label: 'Falta disciplina de processo' },
      { value: 'acompanhamento', label: 'Falta acompanhamento' },
      { value: 'rotatividade', label: 'Rotatividade alta' },
      { value: 'treinamento', label: 'Falta treinamento' }
    ],
    next: () => 'team_time_to_sell'
  },
  {
    id: 'team_time_to_sell',
    type: 'choice',
    title: 'Em média, quanto tempo um corretor novo demora para fechar a primeira venda?',
    options: [
      { value: 'menos_60', label: 'Menos de 60 dias' },
      { value: '60_90', label: '60–90 dias' },
      { value: '3_6_meses', label: '3–6 meses' },
      { value: '6_12_meses', label: '6–12 meses' },
      { value: 'mais_12', label: 'Mais de 12 meses' }
    ],
    next: () => 'team_process'
  },
  {
    id: 'team_process',
    type: 'choice',
    title: 'Existe um processo de vendas que todos seguem?',
    options: [
      { value: 'sim', label: 'Sim' },
      { value: 'parcialmente', label: 'Parcialmente' },
      { value: 'cada_um', label: 'Cada corretor faz do seu jeito' }
    ],
    next: () => 'impact_6_months'
  },
  // Path 3: Captação
  {
    id: 'cap_biggest_challenge',
    type: 'choice',
    title: 'Hoje o maior desafio na captação é:',
    options: [
      { value: 'exclusividade', label: 'Conseguir exclusividade', tooltip: 'Convencer o proprietário a deixar o imóvel apenas com a sua imobiliária.' },
      { value: 'concorrencia', label: 'Concorrência com outras imobiliárias' },
      { value: 'valor', label: 'Proprietário não percebe valor' },
      { value: 'metodo', label: 'Falta método de captação' },
      { value: 'corretores', label: 'Corretores não sabem captar' }
    ],
    next: () => 'cap_process'
  },
  {
    id: 'cap_process',
    type: 'choice',
    title: 'Existe um processo estruturado de captação?',
    options: [
      { value: 'sim', label: 'Sim' },
      { value: 'parcialmente', label: 'Parcialmente' },
      { value: 'nao', label: 'Não' }
    ],
    next: () => 'cap_source'
  },
  {
    id: 'cap_source',
    type: 'choice',
    title: 'Hoje a maior parte dos imóveis captados vem de:',
    options: [
      { value: 'indicacao', label: 'Indicação' },
      { value: 'prospeccao', label: 'Prospecção ativa' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'rede', label: 'Rede de contatos' },
      { value: 'oportunidades', label: 'Oportunidades pontuais' }
    ],
    next: () => 'impact_6_months'
  },
  // Path 4: Conversão
  {
    id: 'conv_funnel_stuck',
    type: 'choice',
    title: 'Em qual etapa do funil as vendas mais travam?',
    options: [
      { value: 'lead_atendimento', label: 'Lead → atendimento', tooltip: 'Tempo e qualidade da primeira abordagem ao cliente.' },
      { value: 'atendimento_visita', label: 'Atendimento → visita', tooltip: 'Capacidade de qualificar e agendar a visita presencial.' },
      { value: 'visita_proposta', label: 'Visita → proposta', tooltip: 'Habilidade de encantar o cliente e gerar intenção de compra.' },
      { value: 'proposta_fechamento', label: 'Proposta → fechamento', tooltip: 'Negociação de valores, condições e aprovação de crédito.' }
    ],
    next: () => 'conv_metrics'
  },
  {
    id: 'conv_metrics',
    type: 'choice',
    title: 'A imobiliária acompanha métricas de conversão?',
    options: [
      { value: 'sim', label: 'Sim' },
      { value: 'parcialmente', label: 'Parcialmente' },
      { value: 'nao', label: 'Não' }
    ],
    next: () => 'conv_response_time'
  },
  {
    id: 'conv_response_time',
    type: 'choice',
    title: 'Tempo médio para responder um lead',
    options: [
      { value: '5_min', label: 'Até 5 minutos' },
      { value: '30_min', label: 'Até 30 minutos' },
      { value: '2_horas', label: 'Até 2 horas' },
      { value: 'mais_2_horas', label: 'Mais de 2 horas' }
    ],
    next: () => 'impact_6_months'
  },
  // Path 5: Gestão
  {
    id: 'ges_decisions',
    type: 'choice',
    title: 'Hoje você toma decisões mais baseado em:',
    options: [
      { value: 'dados', label: 'Dados' },
      { value: 'percepcao', label: 'Percepção' },
      { value: 'mistura', label: 'Mistura dos dois' }
    ],
    next: () => 'ges_metrics'
  },
  {
    id: 'ges_metrics',
    type: 'choice',
    title: 'Quais métricas você acompanha com frequência?',
    options: [
      { value: 'leads', label: 'Leads' },
      { value: 'visitas', label: 'Visitas' },
      { value: 'propostas', label: 'Propostas' },
      { value: 'vendas', label: 'Vendas' },
      { value: 'vgv', label: 'VGV', tooltip: 'Valor Geral de Vendas: a soma do valor potencial de todos os imóveis vendidos.' },
      { value: 'nenhuma', label: 'Quase nenhuma' }
    ],
    next: () => 'ges_predictability'
  },
  {
    id: 'ges_predictability',
    type: 'choice',
    title: 'Você sente que hoje a imobiliária é:',
    options: [
      { value: 'previsivel', label: 'Previsível' },
      { value: 'parcialmente', label: 'Parcialmente previsível' },
      { value: 'esforco', label: 'Depende muito do esforço do mês' }
    ],
    next: () => 'impact_6_months'
  },
  // Final Block
  {
    id: 'impact_6_months',
    type: 'choice',
    title: 'Se nada mudar nos próximos 6 meses, o que tende a acontecer?',
    tooltip: 'Avalie o risco real de não resolver os gargalos atuais.',
    options: [
      { value: 'travado', label: 'Crescimento travado' },
      { value: 'perda', label: 'Perda de mercado' },
      { value: 'queda', label: 'Queda de resultado' },
      { value: 'sobrecarga', label: 'Sobrecarga da liderança' },
      { value: 'mesmo_ritmo', label: 'Continuaremos no mesmo ritmo' }
    ],
    next: () => 'impact_90_days'
  },
  {
    id: 'impact_90_days',
    type: 'text',
    title: 'Se você resolvesse esse gargalo nos próximos 90 dias, qual seria o maior impacto?',
    placeholder: 'Ex: Dobrar as vendas, ter mais tempo livre...',
    next: () => 'contact'
  },
  {
    id: 'contact',
    type: 'text',
    title: 'Para onde enviamos o seu plano de ação?',
    subtitle: 'Deixe seu melhor WhatsApp. Nossa equipe entrará em contato.',
    placeholder: '(11) 99999-9999',
    next: () => 'outro'
  },
  {
    id: 'outro',
    type: 'info',
    title: 'Tudo pronto para a nossa R1!',
    subtitle: (answers) => `Obrigado por compartilhar essas informações, ${answers.agency_name || 'parceiro'}. Já analisamos o seu cenário e agora estamos preparados para uma reunião muito mais objetiva e focada nos seus resultados. Nos vemos na nossa R1!`,
    next: () => null
  }
];

const getOptionLabel = (questionId: QuestionId, value: string) => {
  if (questionId === 'main_bottleneck' || questionId === 'primary_bottleneck') {
    return mainBottleneckOptions.find(o => o.value === value)?.label || value;
  }
  const q = questions.find(q => q.id === questionId);
  const opts = typeof q?.options === 'function' ? [] : q?.options;
  return opts?.find(o => o.value === value)?.label || value;
};

const resolveOptions = (q: Question, answers: Record<string, any>) => {
  return typeof q.options === 'function' ? q.options(answers) : (q.options || []);
};

export default function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState<QuestionId>('intro');
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<QuestionId[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const getCompassAngle = (id: QuestionId): number => {
    if (id === 'outro') return 45;
    const index = questions.findIndex(q => q.id === id);
    return (index / questions.length) * 360;
  };

  const getDynamicRoute = (challenge: string) => {
    if (!challenge) challenge = '';
    if (challenge.startsWith('leads_')) {
      return {
        path: "M 80 320 Q 100 100 320 80",
        waypoints: [{x: 80, y: 320}, {x: 175, y: 165}]
      };
    }
    if (challenge.startsWith('cap_')) {
      return {
        path: "M 80 320 L 150 150 L 320 80",
        waypoints: [{x: 80, y: 320}, {x: 150, y: 150}]
      };
    }
    if (challenge.startsWith('conv_')) {
      return {
        path: "M 80 320 L 150 320 L 150 200 L 250 200 L 250 80 L 320 80",
        waypoints: [{x: 80, y: 320}, {x: 150, y: 200}, {x: 250, y: 200}]
      };
    }
    if (challenge.startsWith('equipe_')) {
      return {
        path: "M 80 320 C 200 320, 100 80, 320 80",
        waypoints: [{x: 80, y: 320}, {x: 150, y: 200}]
      };
    }
    // gestao
    return {
      path: "M 80 320 Q 120 200 200 200 T 320 80",
      waypoints: [{x: 80, y: 320}, {x: 200, y: 200}]
    };
  };

  const routeData = getDynamicRoute(answers.main_challenge);

  useEffect(() => {
    if (currentQuestion.type === 'text' && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
    setInputValue(answers[currentQuestionId] || '');
  }, [currentQuestionId, currentQuestion.type]);

  const isNextDisabled = () => {
    if (!inputValue.trim()) return true;
    if (currentQuestion.id === 'contact') {
      const digits = inputValue.replace(/\D/g, '');
      return digits.length < 10;
    }
    return false;
  };

  const submitToEmail = async (finalAnswers: Record<string, any>) => {
    const payload: Record<string, string> = {};
    
    questions.forEach(q => {
      if (finalAnswers[q.id] && q.id !== 'intro' && q.id !== 'outro') {
        const title = typeof q.title === 'function' ? q.title(finalAnswers) : q.title;
        const val = finalAnswers[q.id];
        if (Array.isArray(val)) {
          payload[title] = val.map(v => getOptionLabel(q.id, v)).join(', ');
        } else {
          payload[title] = getOptionLabel(q.id, val);
        }
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
          _subject: `Novo Diagnóstico: ${finalAnswers.agency_name || 'Imobiliária'}`,
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
    
    if (currentQuestion.type === 'text' && isNextDisabled()) {
      return; // Prevent empty/invalid submission
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
    } else {
      // Form completed
      console.log('Form completed with answers:', newAnswers);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (currentQuestion.id === 'contact') {
      val = val.replace(/\D/g, '');
      if (val.length > 11) val = val.slice(0, 11);
      if (val.length > 2) val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
      if (val.length > 9) val = `${val.slice(0, 10)}-${val.slice(10)}`;
    }
    setInputValue(val);
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
      {/* Sidebar */}
      <nav className="w-[80px] h-full border-r border-white/10 flex-col items-center py-10 justify-between shrink-0 hidden md:flex">
        <div className="mt-16 -rotate-90 w-32 flex justify-center shrink-0">
          <img src="/gcompass-logo-white.svg" alt="G Compass" className="w-full object-contain" />
        </div>
        <div className="flex flex-col gap-6">
          {Array.from({ length: 5 }).map((_, i) => {
            const isActive = i === Math.min(4, Math.floor(history.length / 2));
            return (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full relative transition-all duration-1000 ${
                  isActive 
                    ? isFinished 
                      ? 'bg-emerald-500 shadow-[0_0_15px_#10b981] after:content-[""] after:absolute after:-top-1 after:-left-1 after:w-4 after:h-4 after:border after:border-emerald-500 after:rounded-full'
                      : 'bg-[#8b5cf6] shadow-[0_0_15px_#8b5cf6] after:content-[""] after:absolute after:-top-1 after:-left-1 after:w-4 after:h-4 after:border after:border-[#8b5cf6] after:rounded-full' 
                    : 'bg-[#888888]'
                }`} 
              />
            );
          })}
        </div>
        <div className="text-[#888888] text-xs">
          0{Math.min(8, history.length + 1)}/08
        </div>
      </nav>

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] relative h-full overflow-y-auto lg:overflow-hidden">
        
        {/* Form Section */}
        <section className="flex-none lg:flex-1 p-6 py-10 md:p-12 lg:p-20 flex flex-col justify-center relative z-10 lg:overflow-y-auto min-h-[60vh] lg:min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl mx-auto lg:mx-0 pb-8 lg:pb-0"
            >
              {/* Breadcrumb */}
              {currentQuestion.id !== 'intro' && currentQuestion.id !== 'outro' && (
                <div className="text-[12px] uppercase tracking-[0.2em] text-[#3b82f6] mb-6 flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-[#3b82f6]"></span> Rota de Diagnóstico
                </div>
              )}

              {/* Title & Subtitle */}
              {currentQuestion.id === 'outro' && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-8 border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                >
                  <Check className="w-8 h-8 lg:w-10 lg:h-10 text-emerald-400" />
                </motion.div>
              )}
              <h1 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] mb-8 lg:mb-10 flex items-center gap-3 flex-wrap">
                {renderTitle(currentQuestion.title)}
                {currentQuestion.tooltip && (
                  <div className="group relative inline-flex items-center justify-center">
                    <Info className="w-5 h-5 lg:w-6 lg:h-6 text-[#888888] cursor-help hover:text-[#8b5cf6] transition-colors" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:block w-64 p-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-sm text-white shadow-xl z-50 font-normal tracking-normal leading-relaxed">
                      {currentQuestion.tooltip}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1a1a1a]"></div>
                    </div>
                  </div>
                )}
              </h1>
              {currentQuestion.subtitle && (
                <p className="text-[#888888] text-base lg:text-lg mb-8 lg:mb-10 -mt-4 lg:-mt-6">
                  {renderTitle(currentQuestion.subtitle)}
                </p>
              )}

              {/* Input Area */}
              <div className="w-full">
                {currentQuestion.id === 'outro' && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-8 p-6 rounded-2xl bg-[#111111] border border-emerald-500/30 text-left space-y-4 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                    >
                      <h3 className="text-emerald-400 font-semibold text-lg flex items-center gap-2">
                        <Map className="w-5 h-5" /> Resumo do seu Mapa
                      </h3>
                      <div className="space-y-3 text-sm text-[#888888]">
                        <p><strong className="text-white font-medium">Imobiliária:</strong> {answers.agency_name}</p>
                        <p><strong className="text-white font-medium">Região:</strong> {answers.region}</p>
                        <p><strong className="text-white font-medium">Tamanho da Equipe:</strong> {getOptionLabel('team_size', answers.team_size)}</p>
                        <p><strong className="text-white font-medium">Gargalo Principal:</strong> {getOptionLabel('main_bottleneck', answers.primary_bottleneck || (answers.main_bottleneck && answers.main_bottleneck[0]))}</p>
                        <p><strong className="text-white font-medium">Risco em 6 meses:</strong> {getOptionLabel('impact_6_months', answers.impact_6_months)}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mb-8 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 text-left"
                    >
                      <p className="text-white text-[17px] md:text-lg font-medium leading-relaxed">
                        Parabéns, o primeiro passo é buscar as soluções dos problemas. <br className="hidden md:block" />
                        <span className="text-emerald-400">Vamos mostrar o caminho para isso!</span>
                      </p>
                    </motion.div>
                  </>
                )}

                {currentQuestion.type === 'info' && (
                  <button
                    onClick={() => {
                      if (currentQuestion.id === 'outro') {
                        setCurrentQuestionId('intro');
                        setHistory([]);
                        setAnswers({});
                        setInputValue('');
                      } else {
                        handleNext();
                      }
                    }}
                    className={`px-10 py-4 rounded-full font-semibold flex items-center gap-3 hover:opacity-90 transition-all duration-1000 ${
                      isFinished 
                        ? 'bg-gradient-to-br from-emerald-400 to-green-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                        : 'bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white'
                    }`}
                  >
                    {currentQuestion.id === 'intro' ? 'Iniciar Diagnóstico' : 'Nova Rota'}
                    {currentQuestion.id === 'outro' ? <Compass className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                  </button>
                )}

                {currentQuestion.type === 'text' && (
                  <div className="space-y-6 w-full">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder={currentQuestion.placeholder}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-2xl md:text-3xl text-white placeholder:text-[#888888] focus:outline-none focus:border-[#8b5cf6] transition-colors"
                    />
                    {currentQuestion.id === 'contact' && (
                      <p className="text-[#888888] text-sm mt-2">
                        Digite um número válido com DDD (ex: 11 99999-9999)
                      </p>
                    )}
                  </div>
                )}

                {(currentQuestion.type === 'choice' || currentQuestion.type === 'multiple_choice') && (
                  <div className="w-full flex flex-col gap-6">
                    <div className={`w-full grid gap-4 md:gap-5 ${resolveOptions(currentQuestion, answers).length > 5 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                      {resolveOptions(currentQuestion, answers).map((option, index) => {
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
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group border p-5 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between text-left w-full h-full shadow-sm hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] ${
                              isSelected 
                                ? 'bg-[#8b5cf6]/10 border-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.2)]' 
                                : 'bg-[#111111] border-white/10 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/5'
                            }`}
                          >
                            <div className="flex flex-col pr-4">
                              <h3 className={`text-[15px] md:text-[17px] font-semibold transition-colors flex items-center gap-2 ${isSelected ? 'text-[#8b5cf6]' : 'text-white group-hover:text-[#8b5cf6]'}`}>
                                {option.label}
                                {option.tooltip && (
                                  <div className="group/tooltip relative inline-flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                                    <Info className={`w-4 h-4 cursor-help transition-colors ${isSelected ? 'text-[#8b5cf6]' : 'text-[#888888] group-hover:text-[#8b5cf6]'}`} />
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block w-56 p-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-xs text-white shadow-xl z-50 font-normal tracking-normal leading-relaxed pointer-events-none">
                                      {option.tooltip}
                                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1a1a1a]"></div>
                                    </div>
                                  </div>
                                )}
                              </h3>
                            </div>
                            <div className="shrink-0 relative">
                              {isMulti && isSelected ? (
                                <Check className="w-5 h-5 md:w-6 md:h-6 text-[#8b5cf6]" />
                              ) : (
                                <Icon className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${isSelected ? 'text-[#8b5cf6]' : 'text-[#888888] group-hover:text-[#8b5cf6]'}`} />
                              )}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                    {currentQuestion.type === 'multiple_choice' && (
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={() => handleNext(multiSelectValues)}
                          disabled={multiSelectValues.length === 0}
                          className="bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-3 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Confirmar Seleção <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Footer Navigation */}
          <div className="mt-10 lg:mt-12 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-2xl mx-auto lg:mx-0 gap-6 md:gap-0">
            {history.length > 0 && currentQuestion.id !== 'outro' ? (
              <button
                onClick={handleBack}
                className="text-[#888888] text-sm hover:text-white transition-colors flex items-center gap-2 py-2"
              >
                Voltar à rota anterior
              </button>
            ) : <div className="hidden md:block" />}

            {currentQuestion.type === 'text' && (
              <button
                onClick={() => handleNext()}
                disabled={isNextDisabled() || isSubmitting}
                className="w-full md:w-auto justify-center bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white px-8 py-4 md:py-3 rounded-full font-semibold flex items-center gap-3 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Continuar Expedição'} 
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            )}
          </div>
        </section>

        {/* Visual Section */}
        <aside className={`flex shrink-0 relative items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10 transition-colors duration-1000 min-h-[280px] lg:min-h-0 py-10 lg:py-0 ${
          isFinished 
            ? 'bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)]' 
            : 'bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)]'
        }`}>
          <div className="relative w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            <div className="absolute w-full h-full border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <motion.div 
              className="w-[150px] h-[150px] lg:w-[280px] lg:h-[280px] border border-white/10 rounded-full flex items-center justify-center relative z-10"
              animate={{ rotate: -getCompassAngle(currentQuestionId) / 3 }}
              transition={{ type: "spring", stiffness: 40, damping: 20 }}
            >
              <span className="absolute top-2 lg:top-2.5 font-mono text-[8px] lg:text-[10px] text-[#888888]">N 0°</span>
              <span className="absolute bottom-2 lg:bottom-2.5 font-mono text-[8px] lg:text-[10px] text-[#888888]">S 180°</span>
              <span className="absolute right-2 lg:right-2.5 font-mono text-[8px] lg:text-[10px] text-[#888888]">E 90°</span>
              <span className="absolute left-2 lg:left-2.5 font-mono text-[8px] lg:text-[10px] text-[#888888]">W 270°</span>
              <motion.div 
                className={`w-1 h-[75px] lg:h-[140px] rounded-full absolute top-0 origin-bottom transition-all duration-1000 ${
                  isFinished 
                    ? 'bg-gradient-to-br from-emerald-400 to-green-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]' 
                    : 'bg-gradient-to-br from-[#6366f1] to-[#a855f7] shadow-[0_0_20px_rgba(168,85,247,0.5)]'
                }`}
                initial={{ rotate: 0 }}
                animate={{ rotate: getCompassAngle(currentQuestionId) }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
              />
            </motion.div>

            {/* Route Animation Overlay */}
            {isFinished && (
              <>
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="routeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                      <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* The Animated Path */}
                  <motion.path
                    d={routeData.path}
                    fill="transparent"
                    stroke="url(#routeGrad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  />
                  
                  {/* Waypoints */}
                  {routeData.waypoints.map((wp, i) => (
                    <motion.circle 
                      key={i} 
                      cx={wp.x} 
                      cy={wp.y} 
                      r="4" 
                      fill="#10b981" 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }} 
                      transition={{ delay: 0.5 + (i * 0.5) }} 
                    />
                  ))}
                  
                  {/* End Point Ripple */}
                  <motion.circle cx="320" cy="80" r="12" fill="transparent" stroke="#10b981" strokeWidth="2" initial={{ scale: 0.5, opacity: 1 }} animate={{ scale: 2, opacity: 0 }} transition={{ delay: 2.5, duration: 1.5, repeat: Infinity }} />
                </svg>
                
                {/* Destination Pin */}
                <motion.div
                  className="absolute z-30 text-emerald-400 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: '80%', top: '20%' }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, type: "spring", stiffness: 200, damping: 15 }}
                >
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 fill-emerald-400/20 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                </motion.div>
              </>
            )}
          </div>
        </aside>

      </div>
    </div>
  );
}
