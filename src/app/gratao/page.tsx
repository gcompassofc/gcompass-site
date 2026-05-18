"use client";

import "./gratao.css";
import {
  Play,
  Check,
  X,
  Quote,
  CalendarCheck,
  Route,
  HandHelping,
  Wrench,
  UsersRound,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const scrollToPlanos = () => {
  document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
};

const SlideButton = ({ label, onClick, fullWidth = false }: { label: string, onClick?: () => void, fullWidth?: boolean }) => (
  <button
    onClick={onClick ?? scrollToPlanos}
    className={`slide-btn${fullWidth ? ' slide-btn--full' : ''}`}
  >
    <span className="slide-btn__label">{label}</span>
    <span className="slide-btn__arrow">→</span>
  </button>
);

export default function GrataoPage() {
  return (
    <div className="gratao-page min-h-screen selection:bg-cyan-500 selection:text-[#050B14] overflow-hidden"
         style={{
           background: `
            radial-gradient(circle at top left, rgba(6, 182, 212, 0.08), transparent 32%),
            radial-gradient(circle at bottom right, rgba(2, 11, 24, 0.12), transparent 30%),
            #080A0F`,
           minHeight: '100vh',
           color: '#fafafa',
           fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
         }}>

      {/* SEÇÃO 1 — HERO */}
      <section className="relative w-full pt-16 md:pt-28 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[#080A0F]/70 z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080A0F] to-transparent z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
            poster="https://images.unsplash.com/photo-1542382257-80ddcb239ad5?q=80&w=2000&auto=format&fit=crop"
          >
            <source src="https://videos.pexels.com/video-files/5535311/5535311-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container-premium relative z-20">
          <FadeIn className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-10 text-[14px] font-medium text-white/80 backdrop-blur-md text-center">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shrink-0"></span>
              <span>Criada por Luís Gratão · Planejador financeiro 40+ · +100 famílias atendidas</span>
            </div>
          </FadeIn>

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <h1 className="mb-6 leading-tight">
                Aos 40, o tempo parou de perdoar erros.
                <span className="block text-cyan-400 mt-2">Você vai continuar no <span className="animate-flicker inline-block">escuro?</span></span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-hero-sub mb-8 mx-auto max-w-3xl">
                A <strong className="text-white font-medium">Virada 40+</strong> é o lugar certo para quem cansou de empurrar a vida financeira com a barriga e quer garantir um futuro seguro para a família.
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[15px] text-white/60 mb-10">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Sem papo coach</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Sem fórmula mágica</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Sem enrolação</span>
              </div>
              <p className="text-[15px] text-white/55 max-w-xl mx-auto leading-[1.6]">
                Antes de qualquer decisão, assiste esse vídeo. Ele mostra o que ninguém te contou sobre os próximos 20 anos.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="w-full mt-8">
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <SlideButton
                  label="Assistir o vídeo agora"
                  onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 1.5 — VÍDEO */}
      <section id="video-section" className="relative w-full pt-8 md:pt-12 pb-24 md:pb-32">
        <div className="container-premium">
          <FadeIn delay={0.4} className="relative w-full max-w-5xl mx-auto group cursor-pointer mt-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-900/30 via-transparent to-cyan-900/10 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-80 transition duration-1000 -z-10" />
            <div className="hero-image bg-[#05080C] border border-white/[0.08] flex flex-col items-center justify-center text-white/40 hover:text-white/90 transition-all duration-500 aspect-[16/10] sm:aspect-[21/9] relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-15 mix-blend-overlay group-hover:opacity-25 transition-opacity duration-700"></div>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05080C] to-transparent" />
              <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#05080C] to-transparent" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl relative z-10">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 translate-x-[3px] drop-shadow-lg" />
                  </div>
                </div>
                <div className="bg-black/50 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full mt-2">
                  <p className="tracking-widest uppercase text-xs md:text-sm font-medium text-cyan-100">O Fim da Vida · Aperte o play</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 2 — O ESPELHO */}
      <section className="bg-[#0A0D14] border-t border-white/[0.02]">
        <div className="content-container">
          <FadeIn>
            <p className="text-cyan-400 font-mono text-[13px] tracking-widest uppercase mb-4 text-center">O Espelho</p>
            <h2 className="mb-14 text-center">Uma história que eu nunca vou esquecer</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-6 text-body mx-auto">
              <p>Eu atendi um cara uma vez. Para não expor, vou chamar ele de Ricardo.</p>
              <p>Ricardo tinha 44 anos. Casado. Dois filhos. Trabalhava desde os 16. Bom emprego, bom salário. Carro financiado, casa financiada. Do lado de fora, tudo certo.</p>
              <p>Mas o Ricardo me procurou por causa de uma coisa que ele não contava pra ninguém.</p>
              <p>Toda noite era a mesma cena. Ele colocava os filhos pra dormir, dava boa noite pra esposa, deitava, fechava o olho. E a cabeça não desligava. Cartão estourado. Boleto que vence sexta. Financiamento que não acaba. O mês que sobra mais dia do que dinheiro.</p>
              <p>Ele trabalhava o dia inteiro. Dava tudo de si. E no silêncio da madrugada, a mesma pergunta:</p>
            </div>

            <div className="my-12 px-8 py-10 md:py-12 border-l-2 border-cyan-500/50 bg-white/[0.02] rounded-r-3xl">
              <p className="text-[clamp(20px,2vw,24px)] leading-[1.5] text-white italic font-light tracking-tight">
                "Como eu trabalhei tanto e ainda me sinto tão inseguro?"
              </p>
            </div>

            <div className="space-y-6 text-body mx-auto">
              <p>Quando eu pedi pra ele me mostrar quanto entrava e quanto saía por mês, ele travou. Não sabia. Não de verdade. Tinha uma ideia, um "mais ou menos". Mas o número real? Não fazia ideia.</p>
              <p>Aí eu pedi uma coisa simples: soma tudo que você deve. Tudo. Cartão, financiamento, empréstimo, cheque especial. Tudo junto.</p>
              <p>Ele ficou em silêncio. Depois disse:</p>
            </div>

            <div className="my-10 text-center">
              <p className="text-[clamp(22px,2.4vw,28px)] text-white font-medium italic">
                "Não tá tão ruim assim."
              </p>
              <p className="text-[14px] text-white/40 mt-4 uppercase tracking-widest">Essa frase. Eu já perdi a conta de quantas vezes ouvi ela.</p>
            </div>

            <div className="my-12 grid sm:grid-cols-2 gap-4">
              {[
                '"Não tá tão ruim assim."',
                '"Mês que vem eu organizo."',
                '"Estou numa fase de transição."',
                '"Depois eu vejo isso."',
              ].map((phrase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="px-5 py-4 border border-white/[0.06] bg-white/[0.02] rounded-2xl text-[15px] text-white/70 italic"
                >
                  {phrase}
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 text-body mx-auto">
              <p>Essa é a voz que mora dentro da cabeça de quase todo mundo acima de 40 anos. A voz que prefere não saber. Que adia. Que mascara. Que enfeita a realidade pra não ter que encarar.</p>
              <p>O Ricardo não era irresponsável. Era um cara que trabalhou a vida inteira, sustentou a família e nunca parou pra olhar os números de verdade. Porque ninguém ensinou. Porque dói. Porque parece que admitir que está perdido depois de 20 anos trabalhando é admitir que fracassou.</p>
              <p className="text-white/90 font-medium">Não é. É só o primeiro passo pra mudar.</p>
              <p>O Ricardo mudou. Levou meses. Não foi mágico. Mas ele olhou pro espelho financeiro e decidiu que não ia chegar aos 60 no escuro.</p>

              <div className="pt-6">
                <p className="text-[22px] font-semibold text-cyan-400">E você?</p>
              </div>
            </div>
          </FadeIn>

          {/* O TESTE */}
          <FadeIn delay={0.2} className="mt-24">
            <div className="card text-center !items-center border-cyan-500/10 bg-cyan-950/10">
              <p className="text-cyan-400 font-mono text-[13px] tracking-widest uppercase mb-2">O Teste</p>
              <h3 className="text-white mb-8">Responde pra você mesmo</h3>

              <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10 w-full max-w-2xl mx-auto">
                {[1, 2, 3, 4, 5, 6].map((month, i) => {
                  const isSafe = i < 3;
                  const isWarning = i === 3 || i === 4;
                  const isBroken = i === 5;

                  return (
                    <motion.div
                      key={month}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: isBroken ? 0.5 : 1,
                        y: isBroken ? 20 : 0,
                        rotateZ: isBroken ? 6 : 0
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        y: { delay: i * 0.1, duration: 0.5, type: 'spring' },
                        opacity: { delay: i * 0.1, duration: 0.5 },
                        rotateZ: { delay: 0.8, duration: 0.4, type: 'spring', bounce: 0.6 }
                      }}
                      className={`relative w-[14%] sm:w-16 md:w-20 aspect-[3/4] sm:aspect-[4/5] rounded-lg md:rounded-xl flex flex-col items-center justify-start pt-2 md:pt-3 border overflow-hidden ${
                        isSafe ? 'bg-cyan-950/20 border-cyan-500/20 text-cyan-400' :
                        isWarning ? 'bg-orange-950/20 border-orange-500/30 text-orange-400' :
                        'bg-red-950/20 border-red-500/40 text-red-500'
                      }`}
                    >
                      <div className={`absolute top-0 left-0 w-full h-1.5 md:h-2 ${
                        isSafe ? 'bg-cyan-500/40' :
                        isWarning ? 'bg-orange-500/40' :
                        'bg-red-500/50'
                      }`} />

                      <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-wider mt-1 opacity-70">Mês</span>
                      <span className="text-xl md:text-3xl font-bold mt-0.5 md:mt-1">{month}</span>

                      {isBroken && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1, type: 'spring' }}
                          className="absolute inset-0 flex items-center justify-center bg-red-950/60 backdrop-blur-[1px]"
                        >
                          <X className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <p className="text-[clamp(18px,2vw,22px)] leading-[1.55] text-white/90 mb-8 max-w-[680px] mx-auto font-light">
                Se você ficar desempregado por 6 meses ou 1 ano e isso devastar sua vida, <strong className="text-red-400 font-medium">nós temos um problema financeiro.</strong>
              </p>
              <p className="text-body mx-auto">
                Não é pessimismo. É realidade. Acontece todo dia com gente que trabalhou a vida inteira. Gente que deu tudo de si. Gente que achava que estava segura.
              </p>
              <div className="mt-10 inline-flex flex-col items-center px-8 py-6 border border-cyan-500/20 rounded-2xl bg-cyan-950/20 shadow-[0_0_30px_rgba(34,211,238,0.05)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 bg-cyan-500 h-full" />
                <p className="text-[16px] text-white/80 mb-2">Se isso te incomodou, bom.</p>
                <p className="text-cyan-400 font-semibold text-[19px]">Significa que você ainda tem tempo de fazer diferente.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 3 — AS VOZES REAIS */}
      <section className="bg-[#05080C] border-t border-white/[0.02]">
        <div className="container-premium">
          <FadeIn className="text-center md:text-left mb-16 md:mb-20 flex flex-col md:flex-row gap-8 justify-between items-end">
            <div className="max-w-[700px]">
              <p className="text-cyan-400 font-mono text-[13px] tracking-widest uppercase mb-4">Vozes Reais</p>
              <h2 className="mb-6">Eles gostariam de ter tido essa chance</h2>
              <p className="text-body mx-auto text-center md:text-left">
                Pessoas reais. Com 60, 67, 74, 81 anos. Todas trabalharam a vida inteira. Todas responderam a mesma pergunta: <strong>dá pra viver do que você construiu?</strong>
              </p>
            </div>
            <p className="text-[clamp(22px,2vw,28px)] text-cyan-400 font-semibold text-center md:text-left border-l-0 md:border-l-2 border-cyan-500/30 md:pl-6 py-2 w-full md:w-auto">
              A resposta foi não.
            </p>
          </FadeIn>

          <div className="grid-3">
            {[
              { text: "Se pudesse voltar, voltaria. Faria diferente. Mas o tempo passou e me deixou a experiência.", author: "Avanísio, 60 anos" },
              { text: "Eu achava que minha aposentadoria ia ser ótima, ia dar para tudo que eu queria. Quando cheguei na aposentadoria, cadê meu dinheiro?", author: "Bete, 74 anos" },
              { text: "Dois anos e oito meses desempregado. Trabalhei arriscando a minha vida e de repente não tenho nada. É isso que me dói no coração.", author: "Rosier, 62 anos" },
              { text: "Meu sonho era fazer uma viagem quando eu tivesse aposentada. Não consegui até hoje.", author: "Áurea, 67 anos" },
              { text: "Hoje gasto mais com medicamentos do que com comida.", author: "Bete, 74 anos" },
            ].map((quote, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.08}>
                  <div className="card interactive h-full justify-between !p-8">
                    <div>
                      <Quote className="w-8 h-8 text-white/10 mb-6" />
                      <p className="text-[17px] leading-[1.65] text-white/80 mb-10 font-light">"{quote.text}"</p>
                    </div>
                    <p className="text-[15px] text-cyan-400 font-medium">{quote.author}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-20 text-center">
            <p className="text-body mx-auto mb-4">Nenhum deles planejou. Todos acharam que dava tempo.</p>
            <p className="text-[clamp(24px,2vw,30px)] text-white font-semibold">Você ainda pode.</p>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 4 — QUEM É O LUÍS GRATÃO */}
      <section className="bg-[#080A0F] border-t border-white/[0.02]">
        <div className="container-premium">
          <div className="hero-grid">
            <FadeIn>
              <div className="image-wrapper image-wrapper--portrait shadow-[0_24px_80px_rgba(0,0,0,0.4)] border border-white/[0.04]">
                <img src="/gratao/gratao-sobre.png" alt="Luís Gratão" />
              </div>
            </FadeIn>

            <div className="mt-12 md:mt-0">
              <FadeIn delay={0.1}>
                <p className="text-cyan-400 font-mono text-[13px] tracking-widest uppercase mb-4">Quem está do outro lado</p>
                <h2 className="mb-8">Luís Gratão</h2>
                <div className="space-y-5 text-body">
                  <p>Minha mãe esfregou privada dos outros a vida toda. Meu padrasto dava 14 horas do dia dele em 2 trabalhos pra colocar arroz e feijão na mesa de casa.</p>
                  <p className="text-white/90 font-medium">
                    Eu mudei minha realidade financeira com um plano simples, de 4 passos. Há mais de 12 anos não atraso um boleto.
                  </p>
                  <p>Hoje sou planejador financeiro. Já atendi mais de 100 famílias nos últimos 5 anos. Não só com números, mas com a relação emocional que cada pessoa tem com o dinheiro.</p>
                  <p className="text-white/90 font-medium">
                    Atendendo tanta gente, percebi um padrão: organização financeira que dura não depende só de força de vontade. Depende de ambiente, rotina e acompanhamento. Foi aí que comecei a construir a Virada 40+.
                  </p>
                </div>

                <div className="mt-8">
                  <SlideButton label="Quero entrar na Virada 40+" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — O QUE VOCÊ ENCONTRA AQUI DENTRO */}
      <section className="bg-[#0A0D14] border-t border-white/[0.02]">
        <div className="container-premium">
          <FadeIn className="max-w-[760px] mb-20 mx-auto text-center">
            <p className="text-cyan-400 font-mono text-[13px] tracking-widest uppercase mb-4">A Solução</p>
            <h2 className="mb-6">Tudo que você precisa pra virar o jogo. Num lugar só.</h2>
            <p className="text-body mx-auto">
              A Virada 40+ não é curso. Não é grupo de dicas. Não é mais um perfil de finanças no Instagram.
            </p>
            <p className="text-body mt-4 mx-auto">
              É o ambiente que faltava. Pensado pra quem tem 40+, família, trabalho e pouco tempo sobrando. Pra que organizar a vida financeira não dependa só da sua força de vontade.
            </p>
            <p className="text-body mt-4 mx-auto text-white/85 font-medium">
              Aqui você não fica sozinho, não fica perdido e não fica sem ferramenta.
            </p>
          </FadeIn>

          {/* MÉTODO 4 PASSOS — DESTAQUE */}
          <FadeIn>
            <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-b from-[#0B1220] to-[#0A0D14] p-8 md:p-16 shadow-2xl relative overflow-hidden mb-16">
              <div className="absolute top-0 right-0 w-full h-[300px] bg-cyan-900/10 blur-[120px] pointer-events-none" />

              <div className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/30 mb-6">
                  <Route className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-mono text-[12px] tracking-widest uppercase">O Coração da Virada</span>
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">O Método dos 4 Passos</h3>
                <p className="text-white/55 max-w-2xl mx-auto text-[17px] leading-[1.6]">
                  Um método testado há mais de 12 anos com famílias reais. Um caminho claro onde cada passo leva ao próximo.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10 mb-12">
                <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[1px] bg-white/[0.05] z-0 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                  />
                </div>

                {[
                  { title: "Encarar a Realidade", desc: "Mapear tudo que entra e sai. Olhar pra sua conta sem medo pela primeira vez." },
                  { title: "Fechar as Torneiras", desc: "Descobrir pra onde o dinheiro está fugindo e cortar os gastos que devoram seu salário." },
                  { title: "A Primeira Reserva", desc: "Guardar o primeiro dinheiro sagrado. É aqui que você começa a comprar sua paz." },
                  { title: "Fazer Sobrar", desc: "Criar a rotina certa pro dinheiro sobrar e começar a trabalhar pelo seu futuro." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.3 + (i * 0.3), duration: 0.5 }}
                    className="relative z-10 flex flex-col pt-4 md:pt-0 group cursor-default"
                  >
                    <motion.div
                      initial={{ scale: 0.8, borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "#0A0D14", color: "rgba(34, 211, 238, 0.4)" }}
                      whileInView={{ scale: 1, borderColor: "rgba(34, 211, 238, 0.5)", backgroundColor: "#0B1626", color: "rgba(34, 211, 238, 1)" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.3 + (i * 0.3), duration: 0.5 }}
                      className="w-14 h-14 rounded-full border mx-auto flex items-center justify-center text-[16px] font-bold mb-6 font-mono transition-all duration-500 relative z-20 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    >
                      0{i+1}
                    </motion.div>
                    <h3 className="text-[20px] font-semibold text-white mb-3 text-center transition-colors group-hover:text-cyan-300">{item.title}</h3>
                    <p className="text-[14px] leading-[1.65] text-white/50 text-center mx-auto max-w-[220px] group-hover:text-white/70 transition-colors">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/[0.06] pt-8 max-w-2xl mx-auto relative z-10">
                <p className="text-[13px] text-white/40 uppercase tracking-widest mb-3 text-center">O que você recebe</p>
                <p className="text-[15px] leading-[1.7] text-white/70 text-center">
                  Caminho completo do Método dos 4 Passos + Diagnóstico Financeiro Personalizado + exercícios práticos por etapa.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* PILARES DE APOIO */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-24">
            {[
              {
                icon: CalendarCheck,
                title: "Encontros ao vivo",
                desc: "Aqui não tem aula chata nem enrolação. É bate-papo de verdade, ao vivo, onde você pergunta, tira dúvida e sai sabendo o que fazer. Se não puder assistir na hora, a gravação fica disponível.",
                glowColor: "bg-cyan-500/15",
                iconColor: "text-cyan-400",
                iconBg: "bg-cyan-950/30 border-cyan-500/20 group-hover:bg-cyan-900/40 group-hover:border-cyan-500/30"
              },
              {
                icon: HandHelping,
                title: "Acompanhamento de verdade",
                desc: "Você não fica sozinho. Se travar numa decisão, se pintar uma dúvida sobre a sua situação específica, tem gente de verdade do outro lado pra te ajudar. Nada de ficar pesquisando no Google ou tentando adivinhar sozinho.",
                glowColor: "bg-blue-500/15",
                iconColor: "text-blue-400",
                iconBg: "bg-blue-950/30 border-blue-500/20 group-hover:bg-blue-900/40 group-hover:border-blue-500/30"
              },
              {
                icon: Wrench,
                title: "As ferramentas certas pra você",
                desc: "Nós temos tudo que você precisa pra organizar sua vida financeira. Planilha, inteligência artificial, modelo pronto. Não importa se você é bom com tecnologia ou não. A gente te entrega a ferramenta certa pro seu momento e te ensina a usar. Simples assim.",
                glowColor: "bg-indigo-500/15",
                iconColor: "text-indigo-400",
                iconBg: "bg-indigo-950/30 border-indigo-500/20 group-hover:bg-indigo-900/40 group-hover:border-indigo-500/30"
              },
              {
                icon: UsersRound,
                title: "Gente real, na mesma luta",
                desc: "Sem julgamento. Sem vergonha. Suas decisões financeiras erradas são respeitadas e compreendidas por pessoas assim como você. Gente com 40, 50, 60 anos. Que entende o peso de sustentar uma família e o medo de não ter segurança no futuro.",
                glowColor: "bg-emerald-500/15",
                iconColor: "text-emerald-400",
                iconBg: "bg-emerald-950/30 border-emerald-500/20 group-hover:bg-emerald-900/40 group-hover:border-emerald-500/30"
              }
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full pt-10 pb-10 px-8 relative overflow-hidden group transition-all duration-500 rounded-[28px] border border-white/[0.05] bg-[#05080C] hover:border-white/[0.1] shadow-2xl shadow-black/50 cursor-default flex flex-col"
                  style={{ transform: "translateZ(0)" }}
                >
                  <div className={`absolute top-0 right-0 w-[400px] h-[400px] ${pillar.glowColor} rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`} />
                  <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 transition-all duration-500 border ${pillar.iconBg} group-hover:scale-110 shadow-lg`}>
                    <pillar.icon className={`w-7 h-7 ${pillar.iconColor} drop-shadow-md`} />
                  </div>
                  <h3 className="mb-4 text-white/90 text-xl font-bold tracking-tight relative z-10 group-hover:text-white transition-colors duration-300">{pillar.title}</h3>
                  <p className="text-white/60 leading-[1.7] relative z-10 group-hover:text-white/80 transition-colors duration-500 text-[15px]">{pillar.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* TIMELINE 30 DIAS */}
          <FadeIn>
            <div className="rounded-[32px] border border-white/[0.06] bg-[#05080C] p-8 md:p-12 relative overflow-hidden">
              <div className="text-center mb-10">
                <p className="text-cyan-400 font-mono text-[13px] tracking-widest uppercase mb-3">Seu primeiro mês aqui dentro</p>
                <h3 className="text-white mb-4">Em 30 dias, você sabe onde está e pra onde vai.</h3>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { week: "Semana 1", title: "Boas-vindas", desc: "Diagnóstico Financeiro + seu primeiro passo prático." },
                  { week: "Semana 2", title: "Passo 1 · Ganhar", desc: "De onde vem a renda. Quanto entra de verdade." },
                  { week: "Semana 3", title: "Passo 2 · Gastar", desc: "Mapear vazamentos. Cortar o que não faz sentido." },
                  { week: "Semana 4", title: "Encontro ao vivo", desc: "Seu plano de ação pro mês seguinte." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/20 transition-colors"
                  >
                    <p className="text-cyan-400 font-mono text-[12px] tracking-widest uppercase mb-3">{item.week}</p>
                    <p className="text-white font-semibold text-[17px] mb-2 leading-tight">{item.title}</p>
                    <p className="text-white/55 text-[14px] leading-[1.55]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 6 — OFERTA + FILTRO */}
      <section id="planos" className="bg-[#0A0D14] border-t border-white/[0.02]">
        <div className="container-premium">
          <FadeIn className="text-center mb-16 max-w-[720px] mx-auto">
            <p className="text-cyan-400 font-mono text-[13px] tracking-widest uppercase mb-4">A Decisão</p>
            <h2 className="mb-6">Quanto vale ter clareza sobre o seu futuro financeiro?</h2>
          </FadeIn>

          {/* CARD ÚNICO DE PLANO */}
          <FadeIn delay={0.1}>
            <div className="max-w-[640px] mx-auto mb-20">
              <div className="card !border-cyan-500/30 !bg-[#0E1524] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-cyan-500 text-[#050B14] font-semibold text-[11px] uppercase tracking-widest px-5 py-2 rounded-bl-[20px]">
                  Acesso completo
                </div>

                <div className="p-2">
                  <h3 className="mb-2 text-cyan-400">Membro Virada 40+</h3>
                  <p className="text-[15px] text-white/60 mb-8 pb-8 border-b border-white/[0.06]">
                    Tudo que você precisa pra organizar a vida financeira de verdade. Com método, ferramentas e acompanhamento.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Acesso ao grupo exclusivo da Virada 40+",
                      "Encontros ao vivo (participe e tire dúvidas)",
                      "Caminho completo do Método dos 4 Passos",
                      "Diagnóstico Financeiro Personalizado",
                      "Ferramentas que te ajudam e não atrapalham",
                      "Como usar IA pra te ajudar a organizar",
                      "Acompanhamento direto nas suas dúvidas reais",
                      "Conteúdo exclusivo pra membros",
                      "Todas as gravações pra você rever quando quiser",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-[16px] text-white/90">
                        <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 flex items-end gap-1">
                    <span className="text-xl text-white/40 mb-2">R$</span>
                    <span className="text-5xl font-bold text-white leading-none">75</span>
                    <span className="text-lg text-white/40 mb-2">/mês</span>
                  </div>
                  <SlideButton label="Quero entrar na Virada 40+" fullWidth />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* FILTRO É / NÃO É PARA VOCÊ */}
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-[1000px] mx-auto">
              <div className="p-8 rounded-[24px] border border-cyan-500/15 bg-cyan-950/10">
                <p className="text-cyan-400 font-mono text-[13px] tracking-widest uppercase mb-6">A Virada 40+ é pra você se:</p>
                <ul className="space-y-4">
                  {[
                    "Tem 40+ e sente que o tempo está passando",
                    "Quer organizar a vida financeira de verdade",
                    "Tem família e quer construir segurança pra quem depende de você",
                    "Sabe que sozinho não está conseguindo",
                    "Está disposto a olhar de frente pra sua realidade",
                    "Quer dar passos práticos, não só consumir conteúdo",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-[15px] text-white/85 leading-[1.55]">
                      <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-[24px] border border-red-500/15 bg-red-950/10">
                <p className="text-red-400 font-mono text-[13px] tracking-widest uppercase mb-6">Não é pra você se:</p>
                <ul className="space-y-4">
                  {[
                    "Quer ficar rico rápido",
                    "Procura dica quente de investimento",
                    "Quer terceirizar a responsabilidade da sua vida financeira",
                    "Não quer encarar a própria realidade",
                    "Acha que organizar finanças é só baixar uma planilha",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-[15px] text-white/70 leading-[1.55]">
                      <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 7 — OS INIMIGOS */}
      <section className="bg-[#080A0F] border-t border-white/[0.02]">
        <div className="container-premium">
          <FadeIn className="mb-16 text-center max-w-[820px] mx-auto">
            <p className="text-cyan-400 font-mono text-[13px] tracking-widest uppercase mb-4">Por trás da inércia</p>
            <h2 className="mb-6">Por que você ainda não resolveu isso?</h2>
            <p className="text-body mx-auto">
              Existem dois inimigos que impedem qualquer pessoa acima de 40 anos de organizar a vida financeira. E nenhum deles é falta de dinheiro.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12">
            <FadeIn delay={0.1}>
              <div className="h-full border border-white/[0.05] bg-[#0A0D14] rounded-[24px] p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 group-hover:bg-red-500/10 transition-colors duration-700 pointer-events-none" />

                <div className="w-full aspect-[2/1] bg-[#05080C] rounded-xl border border-white/[0.05] mb-10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-950/20" />

                  <div className="absolute inset-0 px-6 py-5 flex flex-col justify-center gap-4">
                    {[
                      { label: 'RENDA', value: 72, color: 'from-white/60 to-white/30', valueColor: 'text-white/50', loopDelay: 0 },
                      { label: 'PADRÃO DE VIDA', value: 76, color: 'from-red-400 to-red-500/50', valueColor: 'text-red-400/80', loopDelay: 0.4 },
                      { label: 'PATRIMÔNIO', value: 6, color: 'from-red-500/40 to-red-500/10', valueColor: 'text-red-500/60', loopDelay: 0.9 },
                    ].map((bar, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-widest text-white/45 font-mono w-[110px] shrink-0">{bar.label}</span>
                        <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden relative">
                          <motion.div
                            animate={{ width: [`0%`, `${bar.value}%`, `${bar.value}%`, `${bar.value}%`, `0%`] }}
                            transition={{
                              duration: 6,
                              times: [0, 0.25, 0.5, 0.85, 1],
                              delay: bar.loopDelay,
                              repeat: Infinity,
                              repeatDelay: 0.4,
                              ease: 'easeOut',
                            }}
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${bar.color} rounded-full`}
                          />
                        </div>
                        <motion.span
                          animate={{ opacity: [0, 1, 1, 1, 0] }}
                          transition={{
                            duration: 6,
                            times: [0, 0.25, 0.5, 0.85, 1],
                            delay: bar.loopDelay,
                            repeat: Infinity,
                            repeatDelay: 0.4,
                          }}
                          className={`text-[11px] font-mono ${bar.valueColor} w-10 text-right`}
                        >
                          {bar.value}%
                        </motion.span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-red-400 font-mono text-[13px] tracking-widest mb-4">INIMIGO 01</p>
                  <h3 className="mb-5">O mundo que te ensinou a parecer, não a construir</h3>
                  <p className="text-body mb-6 opacity-85">
                    Você foi criado num sistema que normalizou a dívida. O parcelamento virou rotina. O cartão no limite virou normal. O padrão de vida subiu junto com o salário. E o patrimônio ficou pra depois.
                  </p>
                  <div className="pl-6 border-l-2 border-red-500/30 space-y-3 mb-6">
                    <p className="text-[15px] text-white/60 italic font-medium">"Você merece."</p>
                    <p className="text-[15px] text-white/60 italic font-medium">"Parcele em 12x sem juros."</p>
                    <p className="text-[15px] text-white/60 italic font-medium">"Todo mundo faz assim."</p>
                  </div>
                  <p className="text-[15px] text-white/55 leading-[1.65]">
                    Ninguém te ensinou na escola. Ninguém te ensinou no trabalho. A família fez o que pôde. E o mercado fez o resto: te convenceu que gastar era viver.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="h-full border border-white/[0.05] bg-[#0A0D14] rounded-[24px] p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-500/10 transition-colors duration-700 pointer-events-none" />

                <div className="w-full aspect-[2/1] bg-[#05080C] rounded-xl border border-white/[0.05] mb-10 overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-950/20" />

                  <div className="absolute inset-0 flex items-center overflow-hidden">
                    <motion.div
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                      className="flex gap-10 whitespace-nowrap shrink-0"
                    >
                      {['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ', 'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'].map((m, i) => (
                        <span key={i} className="text-[40px] font-bold text-white/[0.07] font-mono tracking-widest leading-none">{m}</span>
                      ))}
                    </motion.div>
                  </div>

                  <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[#05080C] to-transparent z-10" />
                  <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[#05080C] to-transparent z-10" />

                  <motion.div
                    animate={{ y: [0, -3, 0, 3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-20 px-5 py-3 bg-orange-950/60 border border-orange-500/40 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.25)]"
                  >
                    <p className="text-[13px] text-orange-300 italic font-medium">"mês que vem eu organizo"</p>
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <p className="text-orange-400 font-mono text-[13px] tracking-widest mb-4">INIMIGO 02</p>
                  <h3 className="mb-5">A voz dentro da sua cabeça</h3>
                  <p className="text-body mb-6 opacity-85">
                    É a voz que diz que está tudo bem quando não está. Que adia o diagnóstico porque olhar pra verdade dói. Que prefere não saber.
                  </p>
                  <div className="pl-6 border-l-2 border-orange-500/30 space-y-3 mb-6">
                    <p className="text-[15px] text-white/60 italic font-medium">"Depois eu organizo."</p>
                    <p className="text-[15px] text-white/60 italic font-medium">"Não está tão ruim assim."</p>
                    <p className="text-[15px] text-white/60 italic font-medium">"Mês que vem eu começo."</p>
                  </div>
                  <p className="text-[15px] text-white/55 leading-[1.65]">
                    Você já ouviu essas frases. Talvez tenha dito hoje.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="text-center max-w-[720px] mx-auto">
            <p className="text-[clamp(20px,2.2vw,24px)] text-white font-medium leading-[1.5]">
              A Virada 40+ existe pra te ajudar a vencer esses dois inimigos. <span className="text-cyan-400">Com método. Com suporte. Com gente que entende.</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 8 — FECHAMENTO */}
      <section className="bg-[#080A0F] border-t border-white/[0.02]">
        <div className="content-container text-center">
          <FadeIn>
            <h2 className="mb-8 text-white leading-[1.1] max-w-4xl mx-auto">Você não precisa ter sido perfeito até aqui</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-[clamp(18px,2.2vw,22px)] text-white/70 font-light leading-[1.6] mb-14 max-w-3xl mx-auto">
              Você não precisa ter feito tudo certo. Não precisa entender de investimento. Não precisa ter vergonha do que já passou.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-5 mb-14 max-w-2xl mx-auto text-left">
              {[
                { name: "Avanísio, 60", quote: "Se pudesse voltar, voltaria. Faria diferente." },
                { name: "Bete, 74", quote: "Cadê meu dinheiro?" },
                { name: "Rosier, 62", quote: "Trabalhei arriscando a minha vida e de repente não tenho nada." },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex items-baseline gap-4 border-l-2 border-white/10 pl-6 py-1"
                >
                  <span className="text-cyan-400/80 font-mono text-[13px] uppercase tracking-widest shrink-0">{p.name}</span>
                  <span className="text-white/75 italic text-[17px] leading-[1.5]">"{p.quote}"</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mb-14">
              <p className="text-[clamp(22px,3vw,30px)] text-white/60 font-light mb-2">Eles não podem voltar.</p>
              <p className="text-[clamp(28px,4vw,42px)] text-cyan-400 font-bold">Você pode.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-[clamp(17px,2vw,20px)] text-white/70 leading-[1.65] mb-4 max-w-3xl mx-auto">
              O dinheiro que você gastou errado lá nos seus 20 ou 30 anos já foi. O verdadeiro erro é <strong className="text-white font-medium">ter vergonha de arrumar a casa agora aos 40</strong>. O que importa é o que você vai fazer daqui pra frente.
            </p>
            <p className="text-[clamp(17px,2vw,20px)] text-white/90 font-medium mb-16">
              Porque depois dos 40, cada mês conta.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="relative max-w-[820px] mx-auto mb-12">
            <div className="absolute inset-0 bg-cyan-900/20 blur-3xl rounded-full" />
            <div className="relative border border-white/[0.05] bg-[#05080C]/80 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl">
              <p className="text-cyan-400 font-mono text-[13px] uppercase tracking-widest font-semibold mb-6">A Pergunta Final</p>
              <p className="text-[clamp(15px,1.6vw,17px)] text-white/60 mb-3 leading-[1.6]">
                Você vai chegar aos 60 respondendo "sim" ou "não" quando perguntarem:
              </p>
              <p className="text-[clamp(24px,4vw,36px)] font-bold leading-[1.15] text-white mb-10">
                Dá pra viver do que você construiu?
              </p>
              <div className="flex flex-col items-center gap-5">
                <SlideButton label="Quero entrar na Virada 40+ · R$ 75/mês" />
                <p className="text-[14px] text-white/40">
                  Dúvidas? <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4">Fale direto com o Luís pelo WhatsApp</a>.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/[0.05] bg-[#0B101A] max-w-[640px] mt-6 text-left">
              <div className="flex -space-x-2 shrink-0">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B101A] bg-cyan-900 flex items-center justify-center">
                    <Users className="w-4 h-4 text-cyan-400" />
                  </div>
                ))}
              </div>
              <p className="text-[13px] md:text-[14px] text-white/70 leading-[1.5]">Nós seremos a maior comunidade de 40 a mais do Brasil. E você fará parte junto conosco.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#0A0D14] border-t border-white/[0.04] py-16">
        <div className="container-premium flex flex-col md:flex-row justify-between items-center gap-8 text-[14px]">
          <div className="text-white/60 text-center md:text-left">
            <p className="font-semibold text-white/80 mb-2 mt-0">Virada 40+</p>
            <p>Criada por Luís Gratão · Planejador Financeiro</p>
            <p className="text-cyan-400/70 mt-2 italic">Depois dos 40, cada mês conta.</p>
          </div>
          <div className="flex justify-center gap-6 text-white/40">
            <a href="#" className="hover:text-white/80 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white/80 transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
