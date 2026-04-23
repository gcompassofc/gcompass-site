import SectionWrapper from "./shared/SectionWrapper";
import AnimatedCounter from "./shared/AnimatedCounter";
import ImagePlaceholder from "./shared/ImagePlaceholder";
import { Users, Database, ShieldCheck, Cpu } from "lucide-react";

const cards = [
  {
    label: "LEADS",
    title: "Fluxo real de leads",
    text: "Você entra com acesso imediato a um fluxo de leads gerado pelas campanhas da empresa. Não é promessa de \"carteira de clientes\" — são contatos reais, com perfil definido, prontos para o primeiro atendimento.",
    highlight: "Primeira venda entre 30 a 60 dias.",
    value: 60,
    suffix: " dias",
    icon: Users,
  },
  {
    label: "CRM",
    title: "Gestão inteligente",
    text: "O CRM que usamos garante que nenhum contato caia no esquecimento. Cada lead tem um protocolo rigoroso de acompanhamento seguido por 7 a 10 dias.",
    highlight: "Converte o cliente indeciso em contrato assinado.",
    value: 10,
    suffix: " dias",
    icon: Database,
  },
  {
    label: "GESTÃO",
    title: "Revisão de Descarte",
    text: "Antes de considerar um contato perdido, nossa gestão sênior revisa a situação. Oportunidades que seriam perdidas são recuperadas por processo.",
    highlight: "Experiência de 16 anos recuperando vendas.",
    value: 16,
    suffix: " anos",
    icon: ShieldCheck,
  },
  {
    label: "ESTRUTURA",
    title: "Foco 100% em Conversão",
    text: "Fornecemos toda a infraestrutura e auxílio-anúncio. Você entra para vender, não para montar a operação do zero.",
    highlight: "Estrutura completa. Seu foco é o fechamento.",
    value: 100,
    suffix: "%",
    icon: Cpu,
  },
];

export default function ComoFunciona() {
  return (
    <SectionWrapper className="bg-fundo-claro py-24 sm:py-32 px-6 sm:px-12 md:px-24">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-texto-escuro mb-6 font-bold">
            Como funciona o <span className="text-principal">Método H7</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-texto-sec max-w-2xl mx-auto leading-relaxed">
            Nossa estrutura foi desenhada para que você pare de perder tempo com processos manuais e foque no topo da pirâmide: o fechamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="card-white flex flex-col h-full group hover:border-principal/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-principal/5 rounded-2xl text-principal group-hover:bg-principal group-hover:text-white transition-colors duration-500">
                  <card.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="text-right">
                   <span className="block font-mono text-[10px] text-texto-sec uppercase tracking-[0.2em] mb-1">{card.label}</span>
                   <AnimatedCounter 
                    value={card.value} 
                    suffix={card.suffix}
                    className="font-sans text-2xl text-principal font-bold" 
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="font-sans text-2xl text-texto-escuro font-bold mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="font-sans text-texto-sec leading-relaxed text-base mb-8">
                  {card.text}
                </p>
              </div>

              <div className="pt-6 border-t border-borda">
                <div className="flex items-center gap-3 text-texto-escuro">
                  <div className="w-1.5 h-1.5 rounded-full bg-principal animate-pulse" />
                  <span className="font-sans text-sm font-semibold tracking-wide">
                    {card.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <ImagePlaceholder 
            label="[MÉTODO_EM_AÇÃO]"
            description="Reunião de alinhamento tático na H7 Imóveis"
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600"
            className="w-full h-[300px] md:h-[450px] shadow-2xl border-none grayscale hover:grayscale-0 transition-all duration-700 rounded-[2.5rem]"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
