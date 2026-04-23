import SectionWrapper from "./shared/SectionWrapper";
import { motion } from "motion/react";

export default function OAmbiente() {
  return (
    <SectionWrapper className="bg-fundo py-32 px-6 sm:px-12">
      <div className="max-w-[1000px] mx-auto">
        <div className="card-white !p-12 md:!p-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-texto mb-12 leading-tight font-bold">
            Ambiente que gera <span className="text-principal">confiança.</span>
          </h2>

          <div className="space-y-8 font-sans text-lg sm:text-xl text-texto-sec leading-relaxed max-w-2xl mx-auto">
            <p>
              Tem imobiliária que cresce em cima de competição interna. Na H7, o foco é o cliente. O modelo centraliza leads e compartilha processos, não conflitos.
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="py-10"
            >
              <blockquote className="font-sans text-3xl sm:text-4xl md:text-5xl text-principal font-bold leading-tight">
                "Quando o ambiente é saudável, as pessoas ficam."
              </blockquote>
            </motion.div>

            <p>
              O nosso cliente de alto padrão compra por confiança. E isso começa no clima da nossa mesa de trabalho.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
