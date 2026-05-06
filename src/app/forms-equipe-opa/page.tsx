"use client";
import './FormsEquipeOpa.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  Bot, 
  Zap, 
  Layers, 
  Layout, 
  Users, 
  MessageSquare, 
  Search, 
  Filter, 
  BarChart3, 
  Map, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

type QuestionId = 
  | 'intro'
  | 'nome'
  | 'tempo_digital'
  | 'canais_captacao'
  | 'frequencia_post'
  | 'fechamentos_digital'
  | 'uso_ia_trabalho'
  | 'trava_conteudo'
  | 'atrapalha_gravacao'
  | 'sabe_bombar'
  | 'domina_menos'
  | 'ja_anunciou'
  | 'dificuldade_anuncio'
  | 'diferenca_anuncio'
  | 'confianca_investir'
  | 'uso_ia_hoje'
  | 'interesse_ia'
  | 'duvida_ia'
  | 'ferramentas_uso'
  | 'ferramenta_aprender'
  | 'preferencia_device'
  | 'diferencial_corretor'
  | 'como_prospecta'
  | 'duvida_lead_novo'
  | 'temas_aprender'
  | 'dominar_30dias'
  | 'formato_preferido'
  | 'duracao_ideal'
  | 'melhor_dia_horario'
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
    title: 'Formulário Equipe OPA',
    subtitle: 'Bem-vindo ao diagnóstico da Equipe OPA. Vamos entender o seu momento atual!',
    next: () => 'nome'
  },
  {
    id: 'nome',
    type: 'text',
    title: 'Qual é o seu nome?',
    placeholder: 'Digite seu nome...',
    next: () => 'tempo_digital'
  },
  // Bloco 1
  {
    id: 'tempo_digital',
    type: 'choice',
    title: 'Quanto tempo, em média, você dedica por semana ao seu digital?',
    subtitle: 'Postar, gravar, responder, prospectar online.',
    options: [
      { value: 'menos_1h', label: 'Menos de 1 hora' },
      { value: '1_a_3h', label: 'De 1 a 3 horas' },
      { value: '3_a_5h', label: 'De 3 a 5 horas' },
      { value: 'mais_5h', label: 'Mais de 5 horas' }
    ],
    next: () => 'canais_captacao'
  },
  {
    id: 'canais_captacao',
    type: 'multiple_choice',
    title: 'Quais canais você usa hoje pra captar cliente?',
    options: [
      { value: 'instagram', label: 'Instagram' },
      { value: 'whatsapp', label: 'WhatsApp' },
      { value: 'indicacao', label: 'Indicação' },
      { value: 'portal', label: 'Portal' },
      { value: 'site', label: 'Site' },
      { value: 'outros', label: 'Outros' }
    ],
    next: () => 'frequencia_post'
  },
  {
    id: 'frequencia_post',
    type: 'choice',
    title: 'Com que frequência você posta no Instagram?',
    options: [
      { value: 'todo_dia', label: 'Todo dia' },
      { value: '3x_semana', label: '3x por semana' },
      { value: '1x_semana', label: '1x por semana' },
      { value: 'quando_da', label: 'Quando dá' },
      { value: 'nao_posto', label: 'Não posto' }
    ],
    next: () => 'fechamentos_digital'
  },
  {
    id: 'fechamentos_digital',
    type: 'text',
    title: 'Dos seus últimos 5 fechamentos, quantos vieram do digital?',
    placeholder: 'Ex: 2 de 5...',
    next: () => 'uso_ia_trabalho'
  },
  {
    id: 'uso_ia_trabalho',
    type: 'text',
    title: 'Você já usou alguma ferramenta de IA no seu trabalho? Pra quê?',
    subtitle: 'Ex: ChatGPT, Gemini, Claude, CapCut com IA...',
    placeholder: 'Sua resposta...',
    next: () => 'trava_conteudo'
  },
  // Bloco 2
  {
    id: 'trava_conteudo',
    type: 'choice',
    title: 'Qual sua maior trava na hora de criar conteúdo?',
    options: [
      { value: 'sem_ideia', label: 'Não ter ideia' },
      { value: 'travar_camera', label: 'Travar na câmera' },
      { value: 'nao_editar', label: 'Não saber editar' },
      { value: 'achar_ruim', label: 'Achar que ficou ruim e não postar' },
      { value: 'falta_tempo', label: 'Falta de tempo' }
    ],
    next: () => 'atrapalha_gravacao'
  },
  {
    id: 'atrapalha_gravacao',
    type: 'choice',
    title: 'Quando você grava um vídeo, o que mais te atrapalha?',
    options: [
      { value: 'pensar_falar', label: 'Pensar no que falar' },
      { value: 'jeito_falar', label: 'O jeito de falar' },
      { value: 'tecnica', label: 'A parte técnica (luz, som, corte)' }
    ],
    next: () => 'sabe_bombar'
  },
  {
    id: 'sabe_bombar',
    type: 'choice',
    title: 'Você sabe identificar o que faz um vídeo "bombar" no Instagram hoje?',
    options: [
      { value: 'sim', label: 'Sim' },
      { value: 'mais_ou_menos', label: 'Mais ou menos' },
      { value: 'nao', label: 'Não' }
    ],
    next: () => 'domina_menos'
  },
  {
    id: 'domina_menos',
    type: 'choice',
    title: 'Sobre carrossel, stories e Reels: qual desses formatos você sente que domina menos?',
    options: [
      { value: 'carrossel', label: 'Carrossel' },
      { value: 'stories', label: 'Stories' },
      { value: 'reels', label: 'Reels' }
    ],
    next: () => 'ja_anunciou'
  },
  // Bloco 3
  {
    id: 'ja_anunciou',
    type: 'choice',
    title: 'Você já anunciou no Instagram ou Facebook?',
    options: [
      { value: 'nunca', label: 'Nunca' },
      { value: 'impulsionou', label: 'Só impulsionei' },
      { value: 'gerenciador', label: 'Já fiz pelo Gerenciador' }
    ],
    next: () => 'dificuldade_anuncio'
  },
  {
    id: 'dificuldade_anuncio',
    type: 'choice',
    title: 'Se já anunciou, qual foi sua maior dificuldade?',
    options: [
      { value: 'pra_quem', label: 'Não sei pra quem mostrar' },
      { value: 'o_que_escrever', label: 'Não sei o que escrever' },
      { value: 'medir_resultado', label: 'Não sei medir o resultado' },
      { value: 'sem_retorno', label: 'Gastei e não veio retorno' },
      { value: 'nunca_anunciei', label: 'Nunca anunciei' }
    ],
    next: () => 'diferenca_anuncio'
  },
  {
    id: 'diferenca_anuncio',
    type: 'choice',
    title: 'Você sabe a diferença entre impulsionar um post e criar uma campanha no Gerenciador?',
    options: [
      { value: 'sim', label: 'Sim' },
      { value: 'mais_ou_menos', label: 'Mais ou menos' },
      { value: 'nao', label: 'Não' }
    ],
    next: () => 'confianca_investir'
  },
  {
    id: 'confianca_investir',
    type: 'text',
    title: 'Numa escala de 0 a 10, quanto você se sente confiante pra investir R$ 500 em anúncio sozinho?',
    placeholder: 'Sua nota (0 a 10)...',
    next: () => 'uso_ia_hoje'
  },
  // Bloco 4
  {
    id: 'uso_ia_hoje',
    type: 'multiple_choice',
    title: 'Você usa IA hoje pra alguma dessas coisas?',
    options: [
      { value: 'legenda', label: 'Escrever legenda' },
      { value: 'ideia_post', label: 'Criar ideia de post' },
      { value: 'responder_wpp', label: 'Responder cliente no WhatsApp' },
      { value: 'descrever_imovel', label: 'Descrever imóvel pra anúncio' },
      { value: 'editar_foto_video', label: 'Editar foto/vídeo' },
      { value: 'pesquisar_bairro', label: 'Pesquisar sobre bairro/região' },
      { value: 'nao_uso', label: 'Não uso pra nada disso' }
    ],
    next: () => 'interesse_ia'
  },
  {
    id: 'interesse_ia',
    type: 'text',
    title: 'O que mais te interessa aprender sobre IA aplicada à corretagem?',
    placeholder: 'Sua resposta...',
    next: () => 'duvida_ia'
  },
  {
    id: 'duvida_ia',
    type: 'choice',
    title: 'Qual sua maior dúvida ou receio com IA hoje?',
    options: [
      { value: 'nao_sabe_comecar', label: 'Não sei começar' },
      { value: 'fica_artificial', label: 'Acho que vai ficar artificial' },
      { value: 'medo_errar', label: 'Tenho medo de errar com cliente' },
      { value: 'nao_confia', label: 'Não confio na informação' },
      { value: 'outros', label: 'Outros' }
    ],
    next: () => 'ferramentas_uso'
  },
  // Bloco 5
  {
    id: 'ferramentas_uso',
    type: 'multiple_choice',
    title: 'Quais dessas ferramentas você já usa?',
    options: [
      { value: 'capcut', label: 'CapCut' },
      { value: 'canva', label: 'Canva' },
      { value: 'chatgpt', label: 'ChatGPT' },
      { value: 'inshot', label: 'InShot' },
      { value: 'vn', label: 'VN' },
      { value: 'notion', label: 'Notion' },
      { value: 'trello', label: 'Trello' },
      { value: 'planilha', label: 'Planilha de cliente' },
      { value: 'crm', label: 'CRM' },
      { value: 'nenhuma', label: 'Nenhuma' }
    ],
    next: () => 'ferramenta_aprender'
  },
  {
    id: 'ferramenta_aprender',
    type: 'text',
    title: 'Tem alguma ferramenta que você ouve outros corretores comentando e gostaria de aprender a usar?',
    placeholder: 'Ex: Chatbot, automação, CRM X...',
    next: () => 'preferencia_device'
  },
  {
    id: 'preferencia_device',
    type: 'choice',
    title: 'Você prefere usar tudo no celular ou também usa computador pra trabalhar?',
    options: [
      { value: 'celular', label: 'Tudo no celular' },
      { value: 'ambos', label: 'Uso computador também' }
    ],
    next: () => 'diferencial_corretor'
  },
  // Bloco 6
  {
    id: 'diferencial_corretor',
    type: 'text',
    title: 'Hoje, se um cliente perguntasse "por que eu deveria fechar com você?", você teria resposta na ponta da língua?',
    placeholder: 'Qual seria sua resposta?',
    next: () => 'como_prospecta'
  },
  {
    id: 'como_prospecta',
    type: 'text',
    title: 'Como você prospecta novos clientes hoje além de quem chega pela imobiliária?',
    placeholder: 'Sua resposta...',
    next: () => 'duvida_lead_novo'
  },
  {
    id: 'duvida_lead_novo',
    type: 'text',
    title: 'Quando aparece um lead novo no DM ou WhatsApp, qual sua maior dúvida na hora de conduzir a conversa?',
    placeholder: 'Sua resposta...',
    next: () => 'temas_aprender'
  },
  // Bloco 7
  {
    id: 'temas_aprender',
    type: 'multiple_choice',
    title: 'Marque os temas que você MAIS quer aprender nos próximos meses:',
    options: [
      { value: 'criar_conteudo', label: 'Criar conteúdo pro Instagram' },
      { value: 'gravar_video', label: 'Gravar vídeo sem travar' },
      { value: 'editar_video', label: 'Editar vídeo' },
      { value: 'fotografar', label: 'Fotografar imóvel' },
      { value: 'crescer_seguidor', label: 'Crescer seguidor e alcance' },
      { value: 'transformar_lead', label: 'Transformar seguidor em lead' },
      { value: 'trafego_pago', label: 'Tráfego pago (anunciar do zero)' },
      { value: 'ia_ganhar_tempo', label: 'IA pra ganhar tempo' },
      { value: 'ia_criar_conteudo', label: 'IA pra criar conteúdo' },
      { value: 'posicionamento', label: 'Posicionamento pessoal' },
      { value: 'stories_vendem', label: 'Stories que vendem' },
      { value: 'prospeccao_ativa', label: 'Prospecção ativa por DM/WhatsApp' },
      { value: 'atendimento_digital', label: 'Atendimento e fechamento' }
    ],
    next: () => 'dominar_30dias'
  },
  {
    id: 'dominar_30dias',
    type: 'text',
    title: 'Se pudesse dominar UMA coisa nos próximos 30 dias, qual seria?',
    placeholder: 'Sua resposta...',
    next: () => 'formato_preferido'
  },
  {
    id: 'formato_preferido',
    type: 'choice',
    title: 'Formato preferido para aprender:',
    options: [
      { value: 'ao_vivo', label: 'Ao vivo (tira dúvida na hora)' },
      { value: 'gravada', label: 'Gravada (no seu ritmo)' },
      { value: 'misto', label: 'Misto' }
    ],
    next: () => 'duracao_ideal'
  },
  {
    id: 'duracao_ideal',
    type: 'choice',
    title: 'Duração ideal de uma aula/treinamento:',
    options: [
      { value: '15_min', label: '15 min direto ao ponto' },
      { value: '30_45_min', label: '30–45 min com prática' },
      { value: '1h_mais', label: '1h+ com profundidade' }
    ],
    next: () => 'melhor_dia_horario'
  },
  {
    id: 'melhor_dia_horario',
    type: 'text',
    title: 'Qual o melhor dia e horário pra você participar de um treinamento?',
    placeholder: 'Ex: Segundas às 19h...',
    next: () => 'outro'
  },
  {
    id: 'outro',
    type: 'info',
    title: 'Diagnóstico Concluído! 🎉',
    subtitle: 'Obrigado por responder. Suas respostas foram enviadas com sucesso e nossa equipe vai analisar tudo em breve.',
    next: () => null
  }
];

export default function FormsEquipeOpa() {
  const [currentQuestionId, setCurrentQuestionId] = useState<QuestionId>('intro');
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<QuestionId[]>([]);
  const [multiSelectValues, setMultiSelectValues] = useState<string[]>([]);
  
  const inputRef = useRef<HTMLInputElement>(null);

  const currentQuestionIndex = questions.findIndex(q => q.id === currentQuestionId);
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion.type === 'multiple_choice') {
      setMultiSelectValues(answers[currentQuestionId] || []);
    }
  }, [currentQuestionId, currentQuestion.type, answers]);

  useEffect(() => {
    if (currentQuestionId === 'outro') {
      const subject = `Novo Formulário: Equipe OPA - ${answers['nome'] || 'Novo'}`;
      
      const formattedAnswers: Record<string, any> = {};
      questions.forEach(q => {
        if (q.type !== 'info' && answers[q.id]) {
            const title = typeof q.title === 'function' ? q.title(answers) : q.title;
            formattedAnswers[title] = answers[q.id];
        }
      });

      fetch('https://formsubmit.co/ajax/growthcompassofc@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: subject,
          ...formattedAnswers
        })
      }).catch(err => console.error('Erro ao enviar email:', err));
    }
  }, [currentQuestionId, answers]);

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
          <span className="font-bold tracking-tighter text-xl">OPA</span>
        </div>
        <div className="flex flex-col gap-6">
          {Array.from({ length: 5 }).map((_, i) => {
            const progress = history.length / (questions.length - 1 || 1);
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
                  <span className="w-5 h-[1px] bg-purple-400"></span> Equipe OPA
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
                {currentQuestion.type === 'info' && currentQuestion.id !== 'outro' && (
                  <button
                    onClick={() => handleNext()}
                    className="px-10 py-4 rounded-full font-semibold flex items-center gap-3 bg-gradient-to-br from-purple-500 to-indigo-600 text-white hover:opacity-90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  >
                    {currentQuestion.id === 'intro' ? 'Iniciar' : 'Continuar'}
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
