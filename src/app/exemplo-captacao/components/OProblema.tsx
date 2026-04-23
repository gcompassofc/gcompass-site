import SectionWrapper from "./shared/SectionWrapper";
import ImagePlaceholder from "./shared/ImagePlaceholder";

export default function OProblema() {
  return (
    <SectionWrapper className="relative bg-white py-32 px-6 overflow-hidden">
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="font-lora font-bold text-[30vw] leading-none text-principal opacity-[0.03]">
          16
        </span>
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto text-center md:text-left">
        <div className="inline-block p-4 bg-principal/5 rounded-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-texto-escuro font-bold leading-tight">
            Você está deixando dinheiro na mesa <br className="hidden md:block" />
            por <span className="text-principal">falta de estrutura?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-texto-sec leading-relaxed">
            <p>
              Não é falta de talento. Não é falta de esforço.
            </p>
            <p>
              Vender alto padrão sem uma carteira qualificada e sem processos de conversão é como jogar xadrez sem metade das peças.
            </p>
            <p className="font-semibold text-texto-escuro">
              "Eu não sabia o que estava perdendo."
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
             <ImagePlaceholder 
                label="[PROPERTY_IMAGE]"
                description="Detalhe de arquitetura moderna"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600"
                className="w-full aspect-square md:w-80 shadow-2xl skew-y-3"
             />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
