'use client';

import React, { useState, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Check, MessageSquare, Clock4, Target, 
  PenTool, TrendingUp, HeartHandshake 
} from 'lucide-react';
import Image from 'next/image';

interface SurveyData {
  name: string;
  q1: number | null;
  q2: string;
  q3: string;
  q4: string[];
  q5: string;
  q6: string;
  q7: number | null;
  q8: string;
  q9_choice: string;
  q9_text: string;
  q10: string;
}

const INITIAL_DATA: SurveyData = {
  name: '', q1: null, q2: '', q3: '', q4: [], q5: '', q6: '', q7: null, q8: '', q9_choice: '', q9_text: '', q10: ''
};

const Q4_OPTIONS = [
  { id: 'comms', label: 'Comunicação e alinhamento', icon: MessageSquare },
  { id: 'prazos', label: 'Prazos e entregas', icon: Clock4 },
  { id: 'estrategia', label: 'Estratégia e direcionamento', icon: Target },
  { id: 'conteudo', label: 'Criativos e conteúdo', icon: PenTool },
  { id: 'resultados', label: 'Resultados e métricas', icon: TrendingUp },
  { id: 'suporte', label: 'Atendimento e suporte', icon: HeartHandshake },
];

const Q9_OPTIONS = [
  { id: 'alguem', label: 'Sim, tenho alguém em mente', showInput: true },
  { id: 'pensar', label: 'Sim, mas preciso pensar melhor', showInput: false },
  { id: 'ninguem', label: 'No momento não estou lembrando de ninguém', showInput: false }
];

export default function OpaPesquisaPage() {
  const [data, setData] = useState<SurveyData>(INITIAL_DATA);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const totalSteps = 12; // 0 to 11 questions + ending

  const updateData = (partial: Partial<SurveyData>) => {
    setData(prev => ({ ...prev, ...partial }));
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setDirection(1);
      setStep(s => s + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(s => s - 1);
    }
  };

  const canProceed = () => {
    switch(step) {
      case 0: return data.name.trim().length > 0;
      case 2: return data.q1 !== null;
      case 8: return data.q7 !== null;
      case 10: return data.q9_choice !== '';
      default: return true;
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (canProceed()) nextStep();
    }
  };

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      y: dir < 0 ? 20 : -20,
      opacity: 0,
    })
  };

  const progress = Math.max(0, Math.min(100, ((step - 1) / 10) * 100));
  const showFooter = step > 1 && step < 12;

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="w-full">
            <h2 className="text-[28px] md:text-[32px] font-medium mb-6 leading-tight">
              Para começarmos, qual o seu <span className="text-[#9333ea]">nome</span>?
            </h2>
            <input
              type="text"
              autoFocus
              value={data.name}
              onChange={e => updateData({ name: e.target.value })}
              onKeyDown={handleKeyDown}
              className="w-full bg-white/5 border border-white/10 rounded-[12px] p-5 text-lg text-white outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
              placeholder="Seu nome aqui..."
            />
            <p className="text-white/30 text-sm mt-4">Pressione Enter para continuar</p>
          </div>
        );

      case 1:
        return (
          <div className="w-full">
            <h2 className="text-[28px] md:text-[36px] font-medium mb-4">
              Olá, {data.name.split(' ')[0]}!
            </h2>
            <p className="text-white/60 text-[16px] leading-[1.6] max-w-lg mb-10">
              Separei algumas perguntas rápidas — leva menos de 5 minutos. Sua honestidade aqui é o que vai guiar o nosso trabalho nos próximos meses. Pode responder com calma.
            </p>
            <button
              onClick={nextStep}
              className="bg-[#38bdf8] text-black font-semibold rounded-xl px-7 py-3 flex items-center gap-2 hover:bg-[#38bdf8]/90 transition-colors"
            >
              Começar agora <ArrowRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        );

      case 2:
        return (
          <div className="w-full">
            <div className="text-[12px] text-[#9333ea] font-bold uppercase mb-3">Parte 1 — Satisfação Geral</div>
            <h2 className="text-[24px] mb-3 leading-snug font-medium">Como você avalia o nosso primeiro mês de trabalho juntos?</h2>
            <p className="text-white/50 text-[14px] mb-8">Sendo 1 muito abaixo do esperado e 5 muito acima.</p>
            
            <div className="flex gap-4 flex-wrap">
              {[1,2,3,4,5].map(num => (
                <button
                  key={num}
                  onClick={() => { updateData({ q1: num }); setTimeout(nextStep, 350); }}
                  className={`w-16 h-16 rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-300 text-[20px] font-semibold border
                    ${data.q1 === num 
                      ? 'bg-[#9333ea] border-[#9333ea] shadow-[0_0_20px_rgba(147,51,234,0.4)] text-white' 
                      : 'bg-white/5 border-white/10 hover:bg-[#9333ea]/20 hover:border-[#9333ea] hover:-translate-y-0.5'
                    }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="w-full">
            <div className="text-[12px] text-[#9333ea] font-bold uppercase mb-3">Parte 1 — Satisfação Geral</div>
            <h2 className="text-[24px] mb-3 leading-snug font-medium">O que mais te <span className="text-[#9333ea]">agradou</span> até agora?</h2>
            <p className="text-white/50 text-[14px] mb-6">Pode ser uma entrega, uma interação, um resultado — qualquer coisa.</p>
            <textarea
              autoFocus
              value={data.q2}
              onChange={e => updateData({ q2: e.target.value })}
              onKeyDown={handleKeyDown}
              className="w-full bg-white/5 border border-white/10 rounded-[12px] p-4 text-white text-[16px] outline-none min-h-[140px] focus:border-[#9333ea] transition-all resize-none"
              placeholder="Escreva aqui sua percepção..."
            />
          </div>
        );

      case 4:
        return (
          <div className="w-full">
            <div className="text-[12px] text-[#9333ea] font-bold uppercase mb-3">Parte 1 — Satisfação Geral</div>
            <h2 className="text-[24px] mb-3 leading-snug font-medium">Teve algo que ficou <span className="text-[#9333ea]">abaixo</span> da sua expectativa?</h2>
            <p className="text-white/50 text-[14px] mb-6">Sem filtro. Isso nos ajuda a melhorar de verdade.</p>
            <textarea
              autoFocus
              value={data.q3}
              onChange={e => updateData({ q3: e.target.value })}
              onKeyDown={handleKeyDown}
              className="w-full bg-white/5 border border-white/10 rounded-[12px] p-4 text-white text-[16px] outline-none min-h-[140px] focus:border-[#9333ea] transition-all resize-none"
              placeholder="Acredito que poderíamos..."
            />
          </div>
        );

      case 5:
        return (
          <div className="w-full">
            <div className="text-[12px] text-[#9333ea] font-bold uppercase mb-3">Parte 2 — Pontos de Melhoria</div>
            <h2 className="text-[24px] mb-3 leading-snug font-medium">Em quais áreas você sente que podemos melhorar?</h2>
            <p className="text-white/50 text-[14px] mb-6">Marque todas que se aplicam.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Q4_OPTIONS.map(opt => {
                const isSelected = data.q4.includes(opt.label);
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      const newQ4 = isSelected
                        ? data.q4.filter(l => l !== opt.label)
                        : [...data.q4, opt.label];
                      updateData({ q4: newQ4 });
                    }}
                    className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-left
                      ${isSelected 
                        ? 'bg-[#9333ea] border-[#9333ea] shadow-[0_0_20px_rgba(147,51,234,0.4)]' 
                        : 'bg-white/5 border-white/10 hover:bg-[#9333ea]/20 hover:border-[#9333ea]'
                      }`}
                  >
                    <opt.icon className={`w-5 h-5 shrink-0 ${isSelected ? 'text-white' : 'text-white/40'}`} />
                    <span className="font-medium text-[15px]">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="w-full">
            <div className="text-[12px] text-[#9333ea] font-bold uppercase mb-3">Parte 2 — Pontos de Melhoria</div>
            <h2 className="text-[24px] mb-3 leading-snug font-medium">Se pudesse mudar <span className="text-[#9333ea]">uma coisa</span> no nosso jeito de trabalhar, o que seria?</h2>
            <p className="text-white/50 text-[14px] mb-6">Pode ser um processo, formato de reunião, frequência de contato — qualquer coisa.</p>
            <textarea
              autoFocus
              value={data.q5}
              onChange={e => updateData({ q5: e.target.value })}
              onKeyDown={handleKeyDown}
              className="w-full bg-white/5 border border-white/10 rounded-[12px] p-4 text-white text-[16px] outline-none min-h-[140px] focus:border-[#9333ea] transition-all resize-none"
              placeholder="Eu gostaria de..."
            />
          </div>
        );

      case 7:
        return (
          <div className="w-full">
            <div className="text-[12px] text-[#9333ea] font-bold uppercase mb-3">Parte 2 — Pontos de Melhoria</div>
            <h2 className="text-[24px] mb-3 leading-snug font-medium">Tem algo que você <span className="text-[#9333ea]">esperava</span> que a gente fizesse e que ainda não fizemos?</h2>
            <p className="text-white/50 text-[14px] mb-6">Nos ajuda a calibrar as expectativas para os próximos meses.</p>
            <textarea
              autoFocus
              value={data.q6}
              onChange={e => updateData({ q6: e.target.value })}
              onKeyDown={handleKeyDown}
              className="w-full bg-white/5 border border-white/10 rounded-[12px] p-4 text-white text-[16px] outline-none min-h-[140px] focus:border-[#9333ea] transition-all resize-none"
              placeholder="Senti falta de..."
            />
          </div>
        );

      case 8:
        return (
          <div className="w-full">
            <div className="text-[12px] text-[#38bdf8] font-bold uppercase mb-3">Parte 3 — NPS e Indicação</div>
            <h2 className="text-[24px] mb-3 leading-snug font-medium">Qual a probabilidade de você <span className="text-[#38bdf8]">indicar</span> a Growth Compass a um colega, parceiro ou amigo empresário?</h2>
            
            <div className="flex flex-wrap gap-2 mt-8">
              {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                <button
                  key={num}
                  onClick={() => { updateData({ q7: num }); setTimeout(nextStep, 350); }}
                  className={`min-w-[44px] h-12 flex-1 rounded-xl flex justify-center items-center cursor-pointer transition-all duration-300 text-[15px] font-semibold border
                    ${data.q7 === num 
                      ? 'bg-[#38bdf8] border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.4)] text-black' 
                      : 'bg-white/5 border-white/10 hover:bg-[#38bdf8]/20 hover:border-[#38bdf8]'
                    }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center mt-3 text-white/40 text-[12px] font-medium px-1">
              <span>0 = Certamente não indicaria</span>
              <span>10 = Indicaria com certeza</span>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="w-full">
            <div className="text-[12px] text-[#38bdf8] font-bold uppercase mb-3">Parte 3 — NPS e Indicação</div>
            <h2 className="text-[24px] mb-3 leading-snug font-medium">O que motivou essa nota? ({data.q7})</h2>
            <p className="text-white/50 text-[14px] mb-6">Pode ser positivo, negativo ou os dois.</p>
            <textarea
              autoFocus
              value={data.q8}
              onChange={e => updateData({ q8: e.target.value })}
              onKeyDown={handleKeyDown}
              className="w-full bg-white/5 border border-white/10 rounded-[12px] p-4 text-white text-[16px] outline-none min-h-[140px] focus:border-[#38bdf8] transition-all resize-none"
              placeholder="Dei essa nota porque..."
            />
          </div>
        );

      case 10:
        return (
          <div className="w-full">
            <div className="text-[12px] text-[#38bdf8] font-bold uppercase mb-3">Parte 3 — NPS e Indicação</div>
            <h2 className="text-[24px] mb-6 leading-snug font-medium">Você conhece alguém que poderia se beneficiar do trabalho da G Compass agora?</h2>
            
            <div className="flex flex-col gap-3">
              {Q9_OPTIONS.map(opt => (
                <div key={opt.id} className="w-full">
                  <button
                    onClick={() => updateData({ q9_choice: opt.id })}
                    className={`flex w-full items-center justify-between p-4 rounded-xl border transition-all duration-300
                      ${data.q9_choice === opt.id 
                        ? 'bg-[#38bdf8]/20 border-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                        : 'bg-white/5 border-white/10 hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]'
                      }`}
                  >
                    <span className="font-medium text-[15px]">{opt.label}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0
                      ${data.q9_choice === opt.id ? 'border-[#38bdf8]' : 'border-white/20'}`}>
                      {data.q9_choice === opt.id && <div className="w-2 h-2 bg-[#38bdf8] rounded-full" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {opt.showInput && data.q9_choice === opt.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <input
                          autoFocus
                          type="text"
                          placeholder="Nome ou contato... (opcional)"
                          value={data.q9_text}
                          onChange={e => updateData({ q9_text: e.target.value })}
                          className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-[15px] text-white outline-none focus:border-[#38bdf8] transition-all mt-3"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        );

      case 11:
        return (
          <div className="w-full">
            <div className="text-[12px] text-[#9333ea] font-bold uppercase mb-3">Considerações Finais</div>
            <h2 className="text-[24px] mb-6 leading-snug font-medium">Espaço livre — elogio, crítica, sugestão, o que quiser:</h2>
            <textarea
              autoFocus
              value={data.q10}
              onChange={e => updateData({ q10: e.target.value })}
              onKeyDown={handleKeyDown}
              className="w-full bg-white/5 border border-white/10 rounded-[12px] p-4 text-white text-[16px] outline-none min-h-[160px] focus:border-[#9333ea] transition-all resize-none"
              placeholder="Fique à vontade..."
            />
          </div>
        );

      case 12:
        return (
          <div className="w-full flex flex-col items-center justify-center text-center py-10">
            <div className="w-20 h-20 rounded-full bg-[#9333ea]/20 border border-[#9333ea] flex items-center justify-center text-[#9333ea] mb-6 shadow-[0_0_30px_rgba(147,51,234,0.4)]">
              <Check className="w-10 h-10" />
            </div>
            <h2 className="text-[32px] mb-4 font-medium">Obrigado pela honestidade!</h2>
            <p className="text-white/60 text-[16px] max-w-[400px] leading-[1.6]">
              Cada resposta aqui vai direto para o nosso processo de melhoria contínua.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-50px] right-[-50px] md:top-[-100px] md:right-[-100px] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] z-0 pointer-events-none" />
      <div className="absolute bottom-[-50px] left-[-50px] md:bottom-[-100px] md:left-[-100px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle,rgba(56,189,248,0.1)_0%,transparent_70%)] z-0 pointer-events-none" />

      {/* Main Glass Container */}
      <div className="relative z-10 w-full max-w-[960px] bg-white/[0.03] backdrop-blur-[20px] border border-white/10 rounded-[24px] md:rounded-[32px] flex flex-col md:flex-row overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] min-h-[600px]">
        
        {/* Sidebar (Invisible on small screens, expands naturally on md+) */}
        <aside className="hidden md:flex w-[320px] lg:w-[360px] bg-black/20 border-r border-white/5 p-8 lg:p-10 flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Image 
                src="/gcompass-logo-white.svg" 
                alt="G Compass Logo" 
                width={120} 
                height={40} 
                className="opacity-90"
              />
            </div>
            <h1 className="text-[28px] leading-[1.2] mb-6 font-medium">
              Pesquisa de Satisfação<br />
              <span className="text-[#38bdf8]">1º Mês</span>
            </h1>
            <p className="text-[14px] leading-[1.6] text-white/60 mb-8 font-light">
              "{data.name ? `${data.name.split(' ')[0]}, completamos` : 'Completamos'} um mês juntos e queremos ouvir você de verdade. Sua honestidade vai guiar o nosso trabalho nos próximos meses."
            </p>
          </div>
          <div className="border-t border-white/10 pt-6">
            <div className="text-[11px] font-bold tracking-wider uppercase text-white/30 mb-2">Consultores Responsáveis</div>
            <div className="font-semibold text-[14px] text-white">Kallyl e Allyson</div>
          </div>
        </aside>

        {/* Dynamic Content Area */}
        <div className="flex-1 p-6 sm:p-10 md:p-12 flex flex-col min-h-[600px]">
          
          {/* Progress Bar */}
          {step > 1 && step < 12 && (
            <div className="w-full h-1.5 bg-white/10 rounded-[10px] mb-10 overflow-hidden shrink-0">
              <motion.div
                className="h-full rounded-[10px] bg-gradient-to-r from-[#9333ea] to-[#38bdf8]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          )}

          {/* Active Question/Step */}
          <div className="flex-1 flex flex-col justify-center relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
                className="w-full absolute inset-0 flex flex-col justify-center mt-[-20px] md:mt-0"
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Navigation (Next, Prev) */}
          {showFooter && (
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 shrink-0 gap-4 pt-4 z-10 bg-[#09090b]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 md:p-0 rounded-2xl md:rounded-none">
              <div className="text-white/40 text-[13px] font-medium hidden sm:block">
                Pergunta {step - 1} de 10
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={prevStep}
                  className="flex-1 sm:flex-none text-center justify-center text-[#94a3b8] border border-[#94a3b8]/30 font-semibold px-5 md:px-7 py-3 rounded-xl hover:bg-white/5 transition-colors text-[14px] md:text-[15px]"
                >
                  Anterior
                </button>
                <button
                  disabled={!canProceed()}
                  onClick={nextStep}
                  className="flex-1 sm:flex-none text-center justify-center bg-[#38bdf8] text-black font-semibold px-5 md:px-7 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#38bdf8]/90 transition-colors text-[14px] md:text-[15px] flex items-center justify-center gap-2"
                >
                  {step === 11 ? 'Finalizar' : 'Próxima'}
                  {step === 11 ? <Check className="w-4 h-4 ml-1" /> : null}
                </button>
              </div>
            </div>
          )}

          {/* Mobile Footer branding (only on Steps 0 and 1, or 12) */}
          {(!showFooter || step === 12) && (
            <div className="md:hidden mt-auto pt-8 flex items-center justify-center gap-2 text-white/30 text-[12px] font-bold tracking-widest uppercase">
              <Image 
                src="/gcompass-logo-white.svg" 
                alt="G Compass Logo" 
                width={80} 
                height={26} 
                className="opacity-70"
              />
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
