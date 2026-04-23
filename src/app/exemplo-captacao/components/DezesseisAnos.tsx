import SectionWrapper from "./shared/SectionWrapper";
import AnimatedCounter from "./shared/AnimatedCounter";
import ImagePlaceholder from "./shared/ImagePlaceholder";

export default function DezesseisAnos() {
  return (
    <SectionWrapper className="relative bg-fundo-alt py-32 px-6 sm:px-12 md:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder 
          label="[IMAGE_JOINVILLE]"
          description="Imóvel contemporâneo em região valorizada"
          src="https://images.unsplash.com/photo-1572120339554-d72626284ee1?auto=format&fit=crop&q=80&w=1600"
          className="w-full h-[300px] object-cover opacity-20 sepia brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fundo-alt via-transparent to-fundo-alt" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto text-center md:text-left pt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 select-none opacity-15">
          <AnimatedCounter 
            value={16} 
            className="font-bebas text-[25vw] leading-none text-principal"
          />
        </div>

        <div className="relative z-20 pt-[10vw]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-texto mb-12 uppercase">
            16 ANOS DE MERCADO NÃO SÃO SOBRE O PASSADO
          </h2>
          
          <div className="max-w-2xl space-y-6 font-lora text-xl text-texto-sec leading-relaxed">
            <p>
              São sobre o que o nome da empresa abre de porta para você.
            </p>
            <p>
              Quando você diz que trabalha na H7 para um cliente de alto padrão em Joinville, você não precisa explicar quem é a empresa. Esse reconhecimento regional é um ativo que você usa em cada negociação. E é algo que não se constrói em seis meses.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
