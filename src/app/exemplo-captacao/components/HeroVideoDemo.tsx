import { 
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroButton,
  HeroImage 
} from "./ui/animated-video-on-scroll"
import { motion } from "motion/react"

export const HeroVideoDemo = () => {
  return (
    <section>
      <ContainerScroll className="h-[300vh]">
        <ContainerSticky
          className="bg-white px-6 py-20 text-texto-escuro"
        >
          <ContainerAnimated className="space-y-6 text-center max-w-[900px] mx-auto">
             <div className="mb-4">
               <span className="font-sans text-xl tracking-[0.2em] font-bold text-principal">H7 IMÓVEIS</span>
             </div>
            <h1 className="text-[clamp(40px,7vw,90px)] leading-[1.1] text-texto-escuro font-sans font-extrabold tracking-tighter">
              A imobiliária que <span className="text-principal">trabalha</span> <br /> 
              para o seu resultado.
            </h1>
            <p className="mx-auto max-w-[50ch] text-texto-sec text-lg md:text-xl font-sans">
              A H7 Imóveis conecta corretores de elite ao mercado de alto padrão em Santa Catarina. 
              Experimente um fluxo de leads real e uma estrutura focada em conversão.
            </p>
          </ContainerAnimated>

          <ContainerInset className="max-h-[600px] w-full flex justify-center items-center py-10">
            <HeroImage
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
              alt="Luxury modern house"
              className="rounded-3xl shadow-2xl w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </ContainerInset>
          
          <ContainerAnimated
            transition={{ delay: 0.4 }}
            outputRange={[-100, 0]}
            inputRange={[0, 0.7]}
            className="mx-auto mt-6 w-fit"
          >
            <HeroButton 
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-sans font-bold"
            >
              QUERO CONVERSAR COM A H7
            </HeroButton>
          </ContainerAnimated>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  )
}
