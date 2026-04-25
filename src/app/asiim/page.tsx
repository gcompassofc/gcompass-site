"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedHero } from "./components/ui/animated-hero-section-1";
import { Button } from "./components/ui/button";
import { CtaCard } from "./components/ui/cta-card";
import { 
  TrendingUp, 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  BarChart3, 
  CheckCircle2, 
  ChevronRight, 
  Wallet, 
  Building2, 
  Compass, 
  MessageSquare,
} from 'lucide-react';

// --- Shared Components & Variants ---

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

function Eyebrow({ children, color = 'yellow' }: { children: React.ReactNode; color?: 'yellow' | 'primary' }) {
  const colorClass = color === 'yellow' ? 'text-asiim-yellow' : 'text-asiim-primary';
  return (
    <motion.span 
      {...fadeIn}
      className={`${colorClass} uppercase tracking-[0.2em] font-bold text-xs sm:text-sm mb-4 block`}
    >
      {children}
    </motion.span>
  );
}

function Counter({ value, decimal = 0, suffix = '' }: { value: number; decimal?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toFixed(decimal).replace('.', ',')}{suffix}</span>;
}

// --- Sections ---

const navLinks = [
  { label: "Dificuldades", href: "#problemas" },
  { label: "O que fazemos", href: "#solucao" },
  { label: "Rentabilidade", href: "#rentabilidade" },
];

function HeroSection() {
  const handleCtaClick = () => {
    const element = document.getElementById('contato');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSecondaryCtaClick = () => {
    window.open('https://wa.me/5531999999999', '_blank');
  };

  return (
    <AnimatedHero
      backgroundImageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
      logo={
        <img src="https://www.asiimimoveis.com/assets/img/logo/logo.webp?v=1.11" alt="Asiim Imóveis" className="h-8 md:h-10 object-contain" />
      }
      navLinks={navLinks}
      topRightAction={
        <a href="#contato">
          <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20">
            Ver Oportunidades
          </Button>
        </a>
      }
      title={
        <>Compre imóveis abaixo do mercado em BH e transforme em <span className="text-asiim-yellow">renda passiva</span></>
      }
      description="A Asiim é uma das 29 imobiliárias credenciadas pela Caixa em Minas Gerais para operar leilões. A gente identifica, avalia e te mostra só o que vale a pena."
      ctaButton={{
        text: "Ver Oportunidades",
        onClick: handleCtaClick,
      }}
      secondaryCta={{
        text: "Falar com Consultor",
        onClick: handleSecondaryCtaClick,
      }}
    />
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: <AlertTriangle className="text-asiim-primary" size={32} />,
      title: "Problema 1",
      subtitle: "Imóveis com dívida escondida",
      description: "Muitos lotes carregam IPTU atrasado, condomínio em aberto ou pendências jurídicas que o comprador não percebe na hora do lance.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      icon: <FileText className="text-asiim-primary" size={32} />,
      title: "Problema 2",
      subtitle: "Burocracia que trava",
      description: "Arrematação, escritura, regularização. O processo tem etapas que, sem acompanhamento, viram meses de atraso e custo extra.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"
    },
    {
      icon: <BarChart3 className="text-asiim-primary" size={32} />,
      title: "Problema 3",
      subtitle: "Você não sabe se vale a pena",
      description: "Sem análise de mercado, o investidor paga barato no leilão e descobre depois que o imóvel não rende o esperado.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="problemas" className="pt-32 pb-40 md:pt-40 md:pb-48 bg-background-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <Eyebrow color="primary">POR QUE ISSO É MAIS DIFÍCIL DO QUE PARECE</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-asiim-primary tracking-tight mt-4">
            Leilão sem orientação é armadilha
          </h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {problems.map((p, idx) => (
            <motion.div key={idx} variants={fadeIn}>
              <CtaCard
                title={p.title}
                subtitle={p.subtitle}
                description={p.description}
                imageSrc={p.image}
                imageAlt={p.subtitle}
                icon={p.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const steps = [
    "Análise de viabilidade antes do lance",
    "Identificação de dívidas e pendências jurídicas",
    "Projeção de rentabilidade de aluguel",
    "Acompanhamento em todo o processo de arrematação",
    "Gestão do imóvel após a compra, se quiser"
  ];

  return (
    <section id="solucao" className="pt-32 pb-40 md:pt-40 md:pb-48 bg-background-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div {...fadeIn}>
          <Eyebrow>O QUE A ASIIM FAZ POR VOCÊ</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-asiim-primary mt-4 mb-10 tracking-tight">A gente faz o trabalho duro. Você decide.</h2>
          
          <ul className="space-y-6">
            {steps.map((step, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-asiim-primary/5 rounded-full flex items-center justify-center text-asiim-primary group-hover:bg-asiim-yellow transition-colors">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-lg font-medium text-text-main">{step}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-asiim-primary/5 relative z-10">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="font-bold text-xl text-asiim-primary">Checklist de Segurança Asiim</h3>
              <div className="w-12 h-12 bg-asiim-mist rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-asiim-primary" size={24} />
              </div>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 bg-background-alt rounded-full w-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 bg-asiim-yellow/30"
                  />
                  <div className="absolute inset-y-0 left-4 flex items-center">
                    <div className="w-2 h-2 bg-asiim-yellow rounded-full mr-3" />
                    <div className="w-24 h-2 bg-asiim-primary/10 rounded-full" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-background-alt flex items-center gap-6">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" 
                alt="Consultor"
                className="w-16 h-16 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold text-asiim-primary text-lg leading-tight uppercase tracking-tight">Equipe Especialista</p>
                <p className="text-text-secondary text-sm">Consultores em BH</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-asiim-yellow/5 rounded-full blur-2xl z-0"></div>
        </motion.div>
      </div>
    </section>
  );
}

function ProfitabilitySection() {
  const data = [
    {
      title: "Imóvel de Leilão com Asiim",
      value: "R$ 150.000",
      rent: "R$ 1.400/mês",
      annual: 11.2,
      featured: true
    },
    {
      title: "Poupança",
      value: "Investimento Igual",
      rent: "R$ 750/mês",
      annual: 6.0,
      featured: false
    },
    {
      title: "Tesouro Selic",
      value: "Investimento Igual",
      rent: "R$ 1.312/mês",
      annual: 10.5,
      featured: false
    }
  ];

  return (
    <section id="rentabilidade" className="pt-32 pb-40 md:pt-40 md:pb-48 bg-asiim-deep relative overflow-hidden">
      <div className="absolute inset-0 glow-blue opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <Eyebrow>SIMULE SUA RENTABILIDADE</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-4">Quanto seu dinheiro pode render</h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {data.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeIn}
              className={`p-8 md:p-10 rounded-[2rem] border ${item.featured ? 'bg-white/10 border-asiim-yellow shadow-2xl shadow-asiim-yellow/10' : 'bg-white/5 border-white/10 opacity-80'} relative transition-all duration-500 hover:opacity-100`}
            >
              {item.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-asiim-yellow text-asiim-deep px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Melhor Retorno
                </div>
              )}
              <h3 className="text-white text-xl font-bold mb-6 text-center">{item.title}</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-white/10 text-sm">
                  <span className="text-white/40 uppercase">Valor do Imóvel</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10 text-sm">
                  <span className="text-white/40 uppercase">Aluguel Estimado</span>
                  <span className="text-white font-medium text-lg">{item.rent}</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-white/40 text-xs uppercase mb-2 leading-tight uppercase tracking-tight">Rentabilidade anual</p>
                <p className={`text-4xl font-extrabold ${item.featured ? 'text-asiim-yellow' : 'text-white/60'}`}>
                   ~<Counter value={item.annual} decimal={1} suffix="%" /> 
                </p>
                <p className="text-white/30 text-[10px] mt-2 uppercase tracking-widest">ao ano</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <p className="text-white/40 text-xs mb-10 max-w-2xl mx-auto">
            *Simulação baseada em valores médios de mercado em BH. Rentabilidade real pode variar conforme o imóvel e as condições do leilão.
          </p>
          <motion.a 
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 border border-asiim-yellow text-asiim-yellow px-8 py-4 rounded-full font-bold hover:bg-asiim-yellow/10 transition-all"
          >
            Quero uma simulação personalizada
            <Compass size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function CredentialSection() {
  return (
    <section className="pt-32 pb-40 md:pt-40 md:pb-48 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Eyebrow color="primary">QUEM ESTÁ POR TRÁS DISSO</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-asiim-primary mb-8 mt-4">Uma das 29 imobiliárias credenciadas pela Caixa em Minas Gerais</h2>
        <p className="text-base md:text-lg text-text-secondary mb-12 leading-relaxed">
          O credenciamento pela Caixa Econômica Federal não é padrão. São 29 imobiliárias autorizadas em todo o estado. A Asiim é uma delas. Isso significa processo seguro, respaldo institucional e acesso a lotes que o investidor comum não consegue sozinho.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-background-alt border border-asiim-yellow/30 p-12 rounded-3xl flex flex-col md:flex-row items-center justify-center gap-10 shadow-lg relative"
        >
          <div className="absolute top-0 left-0 w-2 h-2 bg-asiim-yellow -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-asiim-yellow translate-x-1/2 translate-y-1/2"></div>
          
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyiu3zJJVm4nemKjLfiidr6m6emTrEXCicg&s" 
            alt="Logo Caixa"
            className="h-12 md:h-16 grayscale opacity-80"
          />
          
          <div className="h-10 w-px bg-asiim-primary/10 hidden md:block" />
          
          <div className="text-left space-y-1">
            <p className="text-asiim-primary font-bold text-xl uppercase tracking-tighter">Asiim Imóveis</p>
            <p className="text-text-secondary text-base">CRECI: MG-J-XXXXX</p>
            <p className="text-asiim-yellow font-bold text-sm">CREDÊNCIA: BH0029</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProfileSection() {
  const profiles = [
    {
      icon: <Wallet className="text-asiim-deep" size={28} />,
      title: "Tem dinheiro parado",
      text: "Quer fazer o dinheiro render acima da poupança e do CDI sem abrir mão de segurança."
    },
    {
      icon: <Building2 className="text-asiim-deep" size={28} />,
      title: "Já investe em imóveis",
      text: "Quer escalar a carteira com ativos abaixo do valor de mercado e aumentar a renda passiva."
    },
    {
      icon: <Compass className="text-asiim-deep" size={28} />,
      title: "Está começando",
      text: "Quer entrar no mercado imobiliário com orientação, sem tomar decisão errada na primeira compra."
    }
  ];

  return (
    <section className="pt-32 pb-40 md:pt-40 md:pb-48 bg-background-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <Eyebrow>PARA QUEM É ESSA OPORTUNIDADE</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-asiim-primary mt-4">Você se encaixa em um desses perfis?</h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {profiles.map((p, idx) => (
            <motion.div 
              key={idx}
              variants={fadeIn}
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-asiim border border-asiim-primary/5 hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 bg-asiim-yellow/20 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold text-asiim-primary mb-4">{p.title}</h3>
              <p className="text-text-secondary text-lg leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    investimento: '',
    objetivo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contato" className="pt-32 pb-40 md:pt-40 md:pb-48 bg-asiim-deep relative overflow-hidden">
      <div className="absolute inset-0 glow-blue opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeIn}>
          <Eyebrow>PRÓXIMO PASSO</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8 mt-4">Mostre as oportunidades disponíveis agora</h2>
          <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed font-medium">
            Preencha abaixo. Nossa equipe entra em contato em até 24 horas com os lotes disponíveis em BH compatíveis com seu perfil.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-asiim-yellow">
                <CheckCircle2 size={24} />
              </div>
              <span className="font-medium text-lg">Acesso exclusivo a lotes da Caixa em BH</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-asiim-yellow">
                <CheckCircle2 size={24} />
              </div>
              <span className="font-medium text-lg">Consultoria técnica antes do arremate</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-asiim-yellow">
                <CheckCircle2 size={24} />
              </div>
              <span className="font-medium text-lg">Suporte total na regularização</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative"
        >
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-asiim-primary mb-4">Recebemos seu contato!</h3>
              <p className="text-text-secondary mb-8">Em breve um consultor especialista entrará em contato via WhatsApp.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-asiim-primary font-bold hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-text-secondary uppercase tracking-widest pl-1">Nome completo</label>
                <input 
                  required
                  type="text" 
                  placeholder="Seu nome"
                  className="w-full px-5 py-4 rounded-xl bg-background-alt border border-asiim-primary/5 focus:border-asiim-yellow focus:ring-4 focus:ring-asiim-yellow/10 outline-none transition-all placeholder:text-text-secondary/50 font-medium text-black"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-text-secondary uppercase tracking-widest pl-1">WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  placeholder="(31) 99999-9999"
                  className="w-full px-5 py-4 rounded-xl bg-background-alt border border-asiim-primary/5 focus:border-asiim-yellow focus:ring-4 focus:ring-asiim-yellow/10 outline-none transition-all placeholder:text-text-secondary/50 font-medium text-black"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-text-secondary uppercase tracking-widest pl-1">Quanto você tem para investir?</label>
                <select 
                  required
                  className="w-full px-5 py-4 rounded-xl bg-background-alt border border-asiim-primary/5 focus:border-asiim-yellow focus:ring-4 focus:ring-asiim-yellow/10 outline-none transition-all appearance-none font-medium text-black"
                  value={formData.investimento}
                  onChange={(e) => setFormData({...formData, investimento: e.target.value})}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="ate-150">Até R$ 150.000</option>
                  <option value="150-300">R$ 150.000 a R$ 300.000</option>
                  <option value="acima-300">Acima de R$ 300.000</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-text-secondary uppercase tracking-widest pl-1">Qual seu objetivo?</label>
                <select 
                  required
                  className="w-full px-5 py-4 rounded-xl bg-background-alt border border-asiim-primary/5 focus:border-asiim-yellow focus:ring-4 focus:ring-asiim-yellow/10 outline-none transition-all appearance-none font-medium text-black"
                  value={formData.objetivo}
                  onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="rentabilidade">Renda de aluguel</option>
                  <option value="revenda">Revenda</option>
                  <option value="avaliando">Ainda estou avaliando</option>
                </select>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-asiim-yellow text-asiim-deep py-5 rounded-full font-bold text-lg shadow-xl shadow-asiim-yellow/20 hover:bg-asiim-yellow-light transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Enviando...' : 'Quero ver as oportunidades disponíveis'}
                <ChevronRight size={20} />
              </button>

              <p className="text-center text-[10px] text-text-secondary uppercase tracking-widest">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-asiim-deep pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="https://www.asiimimoveis.com/assets/img/logo/logo.webp?v=1.11" alt="Asiim Imóveis" className="h-10 object-contain" />
            </div>
            <p className="text-white/40 max-w-sm mb-6 leading-relaxed">
              Especialistas em leilões imobiliários em Belo Horizonte. Transformamos capital em patrimônio seguro e rentável.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-asiim-yellow transition-colors cursor-pointer">
                <MessageSquare size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-asiim-yellow transition-colors cursor-pointer">
                <TrendingUp size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Institucional</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li>CRECI: MG-J-XXXXX</li>
              <li>Credenciada Caixa Nº BH0029</li>
              <li>Belo Horizonte - MG</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Fale Conosco</h4>
            <a 
              href="https://wa.me/5531999999999" 
              className="inline-flex items-center gap-2 bg-white/5 text-white px-4 py-3 rounded-xl hover:bg-asiim-yellow/10 hover:text-asiim-yellow transition-all"
            >
              <MessageSquare size={18} />
              <span className="font-medium font-mono text-sm">(31) 99999-9999</span>
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">© 2026 Asiim Imóveis. Todos os direitos reservados.</p>
          <div className="bg-asiim-yellow/10 px-4 py-1 rounded-full border border-asiim-yellow/20">
            <p className="text-asiim-yellow text-[10px] font-bold uppercase tracking-wider">Credenciada pela Caixa Econômica Federal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function AsiimPage() {
  return (
    <div className="selection:bg-asiim-yellow selection:text-asiim-deep bg-background-main text-text-main">
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProfitabilitySection />
        <CredentialSection />
        <ProfileSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
