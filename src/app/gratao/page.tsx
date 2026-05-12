"use client";

import "./gratao.css";
import { Play, ArrowDown, Check, X, Quote, MessagesSquare, Laptop, UserCheck, CreditCard, Clock, Receipt } from 'lucide-react';
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

      {/* SEÇÃO 1 — HERO / HEADLINE */}
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
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-10 text-[14px] font-medium text-white/80 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Criada por Luís Gratão · Planejador financeiro 40+
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
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Sem jargão financeiro</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Plano prático e direto</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Acompanhamento real</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="w-full mt-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button
                  className="btn-primary text-[17px] px-10 py-4 shadow-[0_0_40px_rgba(34,211,238,0.2)] hover:shadow-[0_0_60px_rgba(34,211,238,0.4)]"
                  onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Quero entender o plano
                  <ArrowDown className="w-5 h-5 ml-2" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 1.5 — VIDEO */}
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
                  <p className="tracking-widest uppercase text-xs md:text-sm font-medium text-cyan-100">Aperte o play para entender como funciona</p>
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
            <h2 className="mb-14 text-center">Uma história que eu nunca vou esquecer</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-8 text-body mx-auto">
              <p>Eu atendi um cara uma vez. Vou chamar ele de Ricardo.</p>
              <p>Ricardo tinha 44 anos. Casado. Dois filhos. Trabalhava desde os 16. Bom emprego, bom salário. Carro financiado, casa financiada. Do lado de fora, tudo certo.</p>
              <p>Mas o Ricardo me procurou por causa de uma coisa que ele não contava pra ninguém.</p>
              <p>Toda noite era a mesma cena. Ele colocava os filhos pra dormir, dava boa noite pra esposa, deitava, fechava o olho. E a cabeça não desligava. Cartão estourado. Boleto que vence sexta. Financiamento que não acaba. O mês que sobra mais dia do que dinheiro.</p>
            </div>

            <div className="my-12 px-8 py-10 md:py-12 border-l-2 border-cyan-500/50 bg-white/[0.02] rounded-r-3xl">
              <p className="text-[clamp(20px,2vw,24px)] leading-[1.5] text-white italic font-light tracking-tight">
                "Como eu trabalhei tanto e ainda me sinto tão inseguro?"
              </p>
            </div>

            <div className="space-y-8 text-body mx-auto">
              <p>Quando eu pedi pra ele me mostrar quanto entrava e quanto saía por mês, ele travou. Não sabia. Não de verdade. Tinha uma ideia, um "mais ou menos". Mas o número real? Não fazia ideia.</p>
              <p>Aí eu pedi uma coisa simples: soma tudo que você deve. Tudo. Cartão, financiamento, empréstimo, cheque especial. Tudo junto.</p>
              <p>Ele ficou em silêncio. Depois disse:</p>
              <p className="text-white font-medium">"Não tá tão ruim assim."</p>

              <div className="py-6 space-y-3">
                <p>"Mês que vem eu organizo."</p>
                <p>"Estou numa fase de transição."</p>
                <p>"Depois eu vejo isso."</p>
              </div>

              <p>Essa é a voz que mora dentro da cabeça de quase todo mundo acima de 40 anos. A voz que prefere não saber. Que adia. Que mascara. Que enfeita a realidade pra não ter que encarar.</p>
              <p>O Ricardo mudou. Levou meses. Não foi mágico. Mas ele olhou pro espelho financeiro e decidiu que não ia chegar aos 60 no escuro.</p>

              <div className="pt-8">
                <p className="text-[20px] font-semibold text-cyan-400">E você?</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-24">
            <div className="card text-center !items-center border-cyan-500/10 bg-cyan-950/10">
              <h3 className="text-cyan-400 mb-8">O Teste Definitivo</h3>

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
              <p className="text-[clamp(18px,2vw,22px)] leading-[1.55] text-white/90 mb-8 max-w-[650px] mx-auto font-light">
                Se a sua renda parar hoje e a sua família não conseguir sustentar o padrão por 6 meses sem desespero, <strong className="text-red-400 font-medium">você não tem paz, você tem sorte.</strong>
              </p>
              <p className="text-body mx-auto">
                Não é pessimismo. É risco real. Acontece todos os dias com excelentes profissionais que trabalharam a vida inteira, pagaram seus impostos e acreditavam que estavam seguros.
              </p>
              <div className="mt-10 inline-flex flex-col items-center px-8 py-6 border border-cyan-500/20 rounded-2xl bg-cyan-950/20 shadow-[0_0_30px_rgba(34,211,238,0.05)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 bg-cyan-500 h-full" />
                <p className="text-[16px] text-white/80 mb-2">Se esse diagnóstico te incomodou, aqui está a boa notícia:</p>
                <p className="text-cyan-400 font-semibold text-[19px]">Você ainda tem idade, energia e tempo para corrigir a rota.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 3 — AS VOZES REAIS */}
      <section className="bg-[#05080C] border-t border-white/[0.02]">
        <div className="container-premium">
          <FadeIn className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row gap-8 justify-between items-end">
            <div className="max-w-[700px]">
              <h2 className="mb-6">Eles gostariam de ter tido essa chance</h2>
              <p className="text-body mx-auto text-center md:text-left">
                Essas são pessoas reais. Com 60, 67, 74, 81 anos. Todas trabalharam a vida inteira e responderam à mesma pergunta: <strong>dá pra viver do que você construiu?</strong>
              </p>
            </div>
            <p className="text-[clamp(22px,2vw,28px)] text-cyan-400 font-semibold text-left border-l-2 border-cyan-500/30 pl-6 py-2">
              A resposta foi não.
            </p>
          </FadeIn>

          <div className="grid-3">
            {[
              { text: "Se pudesse voltar, voltaria. Faria diferente. Mas o tempo passou e me deixou a experiência.", author: "Avanísio, 60 anos" },
              { text: "Eu achava que minha aposentadoria ia ser ótima. Quando cheguei lá, cadê meu dinheiro?", author: "Bete, 74 anos" },
              { text: "Dois anos desempregado. Trabalhei arriscando a minha vida e de repente não tenho nada.", author: "Rosier, 62 anos" }
            ].map((quote, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="card interactive h-full justify-between !p-8">
                    <div>
                      <Quote className="w-8 h-8 text-white/10 mb-6" />
                      <p className="text-[17px] leading-[1.65] text-white/80 mb-10 font-light">"{quote.text}"</p>
                    </div>
                    <p className="text-[15px] text-cyan-400 font-medium">— {quote.author}</p>
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
              <div className="image-wrapper shadow-[0_24px_80px_rgba(0,0,0,0.4)] border border-white/[0.04]">
                <img src="/gratao/gratao-sobre.png" alt="Luís Gratão" />
              </div>
            </FadeIn>

            <div className="mt-12 md:mt-0">
              <FadeIn delay={0.1}>
                <h2 className="mb-8">Quem está do outro lado</h2>
                <div className="space-y-6 text-body">
                  <p>Minha mãe esfregou privada dos outros a vida toda. Meu padrasto dava 14 horas do dia dele em 2 trabalhos pra colocar arroz e feijão na mesa de casa.</p>
                  <p className="text-white/90 font-medium">
                    Eu mudei minha realidade financeira porque fiz bom uso de um plano financeiro simples. De 4 passos. Prático. Há mais de 12 anos não atraso um boleto.
                  </p>
                  <p>Hoje sou planejador financeiro. Trabalho de perto com famílias. Não só com os números, mas com a relação emocional que cada pessoa tem com o dinheiro.</p>
                </div>

                <div className="my-10 p-8 border border-white/[0.06] rounded-3xl bg-white/[0.02]">
                  <p className="text-[18px] leading-[1.6] text-white/90 italic font-light">
                    "A Virada 40+ nasceu porque eu não quero que ninguém chegue aos 60 respondendo 'não' quando perguntarem: dá pra viver do que você construiu?"
                  </p>
                </div>

                <div className="mt-8">
                  <button className="btn-secondary">Conhecer a Virada 40+</button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — O QUE VOCÊ ENCONTRA AQUI */}
      <section className="bg-[#0A0D14] border-t border-white/[0.02]">
        <div className="container-premium">
          <FadeIn className="max-w-[720px] mb-20 text-left">
            <h2 className="mb-6">Tudo que você precisa pra virar o jogo. Num lugar só.</h2>
            <p className="text-body">
              A Virada 40+ não é curso. Não é grupo de dicas. É o ambiente definitivo para organizar sua vida financeira, guiado pelo Método dos 4 Passos e acompanhado por quem entende.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-24">
            {[
              {
                icon: MessagesSquare,
                title: "Encontros ao vivo",
                desc: "Bate-papo de verdade para tirar dúvidas. Sem aulas chatas e enroladas, aqui você tem vida real e direto ao ponto.",
                glowColor: "bg-cyan-500/15",
                iconColor: "text-cyan-400",
                iconBg: "bg-cyan-950/30 border-cyan-500/20 group-hover:bg-cyan-900/40 group-hover:border-cyan-500/30"
              },
              {
                icon: Laptop,
                title: "Ferramentas prontas",
                desc: "Planilhas fáceis e modelos prontos. Tudo muito simples de usar no seu dia a dia, sem precisar ser expert em matemática.",
                glowColor: "bg-blue-500/15",
                iconColor: "text-blue-400",
                iconBg: "bg-blue-950/30 border-blue-500/20 group-hover:bg-blue-900/40 group-hover:border-blue-500/30"
              },
              {
                icon: UserCheck,
                title: "Acompanhamento",
                desc: "Você lado a lado de outras pessoas reais, que passam pelos exatos mesmos desafios e vontades que você na vida financeira.",
                glowColor: "bg-indigo-500/15",
                iconColor: "text-indigo-400",
                iconBg: "bg-indigo-950/30 border-indigo-500/20 group-hover:bg-indigo-900/40 group-hover:border-indigo-500/30"
              }
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full pt-10 pb-10 px-8 relative overflow-hidden group transition-all duration-500 rounded-[28px] border border-white/[0.05] bg-[#05080C] hover:border-white/[0.1] shadow-2xl shadow-black/50 cursor-pointer"
                  style={{ transform: "translateZ(0)" }}
                >
                  <div className={`absolute top-0 right-0 w-[400px] h-[400px] ${pillar.glowColor} rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`} />
                  <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 transition-all duration-500 border ${pillar.iconBg} group-hover:scale-110 shadow-lg`}>
                    <pillar.icon className={`w-7 h-7 ${pillar.iconColor} drop-shadow-md`} />
                  </div>
                  <h3 className="mb-4 text-white/90 text-xl font-bold tracking-tight relative z-10 group-hover:text-white transition-colors duration-300">{pillar.title}</h3>
                  <p className="text-white/50 mb-0 leading-[1.7] relative z-10 group-hover:text-white/70 transition-colors duration-500 text-[15px]">{pillar.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-b from-[#0B1220] to-[#0A0D14] p-8 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-[300px] bg-cyan-900/10 blur-[120px] pointer-events-none" />

              <div className="text-center mb-16 relative z-10">
                <span className="text-cyan-400 font-mono text-[13px] tracking-widest uppercase mb-4 block">O Método Validado</span>
                <h3 className="text-white text-3xl md:text-4xl font-bold">O seu primeiro mês em 4 Passos</h3>
                <p className="text-white/50 mt-4 max-w-2xl mx-auto text-lg">Sem planilhas indecifráveis. Um caminho reto e lógico que tira você do caos direto para o controle total em 30 dias.</p>
              </div>

              <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
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
                  { title: "Encarar a Realidade", desc: "Mapeie tudo o que entra e sai. Vamos olhar para a sua conta sem medo pela primeira vez." },
                  { title: "Fechar as Torneiras", desc: "Descubra para onde o dinheiro está fugindo e corte os pequenos gastos que devoram o seu salário." },
                  { title: "A Primeira Reserva", desc: "Guarde o seu primeiro dinheiro sagrado. É aqui que você começa a comprar a sua paz mental." },
                  { title: "Fazer Sobrar", desc: "Crie a rotina certa para o dinheiro sobrar e começar a trabalhar para garantir o seu futuro." }
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
                      whileInView={{ scale: 1, borderColor: "rgba(34, 211, 238, 0.5)", backgroundColor: "rgba(34, 211, 238, 0.1)", color: "rgba(34, 211, 238, 1)" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.3 + (i * 0.3), duration: 0.5 }}
                      className="w-14 h-14 rounded-full border mx-auto flex items-center justify-center text-[16px] font-bold mb-6 font-mono transition-all duration-500 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    >
                      0{i+1}
                    </motion.div>
                    <h3 className="text-[20px] font-semibold text-white mb-3 text-center transition-colors group-hover:text-cyan-300">{item.title}</h3>
                    <p className="text-[14px] leading-[1.65] text-white/50 text-center mx-auto max-w-[220px] group-hover:text-white/70 transition-colors">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 6 — OS INIMIGOS */}
      <section className="bg-[#080A0F] border-t border-white/[0.02]">
        <div className="container-premium">
          <FadeIn className="mb-20 text-center max-w-[800px] mx-auto">
            <h2 className="mb-6">Dois grandes inimigos te travam. E nenhum deles é o dinheiro.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <FadeIn delay={0.1}>
              <div className="h-full border border-white/[0.05] bg-[#0A0D14] rounded-[24px] p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 group-hover:bg-red-500/10 transition-colors duration-700 pointer-events-none" />

                <div className="w-full aspect-[2/1] bg-[#05080C] rounded-xl border border-white/[0.05] mb-10 overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#05080C] to-transparent z-10" />
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#05080C] to-transparent z-10" />
                  <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#05080C] to-transparent z-10" />
                  <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#05080C] to-transparent z-10" />

                  <div className="flex flex-col items-center gap-4 py-10 opacity-40 group-hover:opacity-80 transition-opacity duration-1000 -rotate-12 translate-y-4">
                    {[1, 2, 3].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -100], opacity: [0.2, 0.8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "linear" }}
                        className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.1] bg-white/[0.02] backdrop-blur-sm shadow-xl"
                      >
                        <CreditCard className="w-6 h-6 text-red-400" />
                        <div className="font-mono text-sm text-red-500/80 uppercase tracking-widest">Aprovado 12x</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-24 h-24 rounded-full border border-red-500/20 bg-red-950/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                      <Receipt className="w-10 h-10 text-red-400" />
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-red-400 font-mono text-[13px] tracking-widest mb-4">OBSTÁCULO 01</p>
                  <h3 className="mb-5">A armadilha do cartão e do status social</h3>
                  <p className="text-body mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                    O mundo de hoje é feito para você gastar tudo o que ganha. Seu salário aumenta, mas as parcelas também. O padrão de vida sobe, mas o dinheiro na conta não acompanha.
                  </p>
                  <div className="pl-6 border-l-2 border-red-500/30 space-y-3">
                    <p className="text-[15px] text-white/60 italic font-medium">"Pode passar em 12x."</p>
                    <p className="text-[15px] text-white/60 italic font-medium">"Eu mereço, trabalhei pra isso."</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="h-full border border-white/[0.05] bg-[#0A0D14] rounded-[24px] p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-500/10 transition-colors duration-700 pointer-events-none" />

                <div className="w-full aspect-[2/1] bg-[#05080C] rounded-xl border border-white/[0.05] mb-10 overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#05080C] to-transparent z-10" />
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#05080C] to-transparent z-10" />
                  <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#05080C] to-transparent z-10" />
                  <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#05080C] to-transparent z-10" />

                  <div className="absolute inset-0 flex items-center justify-center gap-8 opacity-30 group-hover:opacity-70 transition-opacity duration-1000 scale-[1.5]">
                    {['2024', '2025', '2026', '2027'].map((year, i) => (
                      <motion.div
                        key={i}
                        animate={{ x: [-150, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="text-4xl font-bold text-white/10 opacity-50"
                      >
                        {year}
                      </motion.div>
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-24 h-24 rounded-full border border-orange-500/20 bg-orange-950/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.15)] relative">
                      <Clock className="w-10 h-10 text-orange-400 absolute" />
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-10 h-10 border-2 border-transparent border-t-orange-400/50 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-orange-400 font-mono text-[13px] tracking-widest mb-4">OBSTÁCULO 02</p>
                  <h3 className="mb-5">O costume de deixar tudo para amanhã</h3>
                  <p className="text-body mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                    É a mania de empurrar as contas com a barriga porque olhar para o extrato dá medo. É aceitar a falsa esperança de que até os 60 anos algum milagre vai acontecer e resolver tudo.
                  </p>
                  <div className="pl-6 border-l-2 border-orange-500/30 space-y-3">
                    <p className="text-[15px] text-white/60 italic font-medium">"Mês que vem eu organizo as contas."</p>
                    <p className="text-[15px] text-white/60 italic font-medium">"Ainda dá tempo de guardar dinheiro."</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — OFERTA + PLANOS */}
      <section className="bg-[#0A0D14] border-t border-white/[0.02]">
        <div className="container-premium">
          <FadeIn className="text-center mb-20 max-w-[700px] mx-auto">
            <h2 className="mb-6">Escolha o caminho certo para o seu momento</h2>
            <p className="text-body mx-auto">
              Duas maneiras de entrar na Virada 40+. Um começo sem compromisso para conhecer o terreno, e o acesso completo à metodologia e ao grupo.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            <FadeIn delay={0.1}>
              <div className="card h-full justify-between">
                <div>
                  <h3 className="mb-2">Acesso Básico</h3>
                  <p className="text-[15px] text-white/50 mb-10 pb-8 border-b border-white/[0.06]">Para dar o primeiro passo sem amarras.</p>
                  <ul className="space-y-5 mb-12">
                    {["Acesso básico à comunidade aberta", "Encontros seletos ao vivo", "Conteúdo educacional gratuito"].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-[16px] text-white/80">
                        <Check className="w-5 h-5 text-white/30 shrink-0 mt-0.5" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-6">
                    <p className="text-3xl font-semibold text-white">Gratuito</p>
                  </div>
                  <button className="btn-secondary w-full">Entrar gratuitamente</button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="card h-full justify-between !border-cyan-500/30 !bg-[#0E1524] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-cyan-500 text-[#050B14] font-semibold text-[11px] uppercase tracking-widest px-5 py-2 rounded-bl-[20px]">
                  Recomendado
                </div>
                <div>
                  <h3 className="mb-2 text-cyan-400">Plano Membro</h3>
                  <p className="text-[15px] text-white/60 mb-10 pb-8 border-b border-white/[0.06]">A experiência definitiva para curar sua vida financeira.</p>
                  <ul className="space-y-5 mb-12">
                    {[
                      "Caminho completo do Método em 4 Passos",
                      "Diagnóstico Financeiro Pessoal Exclusivo",
                      "Acesso completo às planilhas e modelos de IA",
                      "Acompanhamento direto e suporte tático",
                      "Gravações liberadas de todas as sessões"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-[16px] text-white/90">
                        <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-6 flex flex-col justify-end">
                    <div className="flex items-end gap-1">
                      <span className="text-xl text-white/40 mb-1">R$</span>
                      <span className="text-4xl font-bold text-white">___</span>
                      <span className="text-lg text-white/40 mb-1">/mês</span>
                    </div>
                  </div>
                  <button className="btn-primary w-full">Assinar Plano Membro</button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 — FECHAMENTO */}
      <section className="bg-[#080A0F] border-t border-white/[0.02]">
        <div className="content-container text-center">
          <FadeIn>
            <h2 className="mb-8 text-white leading-[1.1] max-w-4xl mx-auto">Você não precisa ter feito tudo certo até aqui.</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-[clamp(20px,3vw,24px)] text-white/70 font-light leading-[1.6] mb-16 max-w-3xl mx-auto">
              O dinheiro que você gastou errado lá nos seus 20 ou 30 anos já foi. <br className="hidden md:block" />
              O verdadeiro erro é <strong className="text-white font-medium">ter vergonha de arrumar a casa agora aos 40.</strong> O que importa é o que você vai fazer daqui por diante.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="relative max-w-[800px] mx-auto mb-16">
            <div className="absolute inset-0 bg-cyan-900/20 blur-3xl rounded-full" />
            <div className="relative border border-white/[0.05] bg-[#05080C]/80 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl">
              <p className="text-cyan-400 font-mono text-[14px] uppercase tracking-widest font-semibold mb-6">A Última Pergunta</p>
              <p className="text-[clamp(26px,4vw,36px)] font-bold leading-[1.2] text-white mb-6">
                Se você parasse de trabalhar hoje, daria para viver do que você construiu?
              </p>
              <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
                O seu amanhã depende de uma única decisão que você pode tomar hoje. Vamos virar essa chave juntos.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <button className="btn-primary text-lg px-12 py-5 shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] whitespace-nowrap">
                  Quero garantir minha segurança
                </button>
                <button className="btn-secondary px-8 py-5 whitespace-nowrap">
                  Entrar no acesso gratuito
                </button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.05] bg-[#0B101A] max-w-full overflow-hidden">
              <div className="flex -space-x-2 shrink-0">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B101A] bg-cyan-900 flex items-center justify-center">
                    <UserCheck className="w-4 h-4 text-cyan-400" />
                  </div>
                ))}
              </div>
              <p className="text-[13px] md:text-[14px] text-white/50 truncate">Junte-se aos membros que já tomaram essa decisão.</p>
            </div>

            <p className="mt-8 text-[15px] text-white/40">
              Precisa de ajuda? <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4">Fale no WhatsApp com o suporte</a>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#0A0D14] border-t border-white/[0.04] py-16">
        <div className="container-premium flex flex-col md:flex-row justify-between items-center gap-8 text-[14px]">
          <div className="text-white/60 text-center md:text-left">
            <p className="font-semibold text-white/80 mb-2 mt-0">Virada 40+</p>
            <p>Criado por Luís Gratão · Todos os direitos reservados.</p>
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
