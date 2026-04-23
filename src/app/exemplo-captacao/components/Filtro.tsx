import SectionWrapper from "./shared/SectionWrapper";
import { Check, X } from "lucide-react";
import { motion } from "motion/react";

export default function Filtro() {
  return (
    <SectionWrapper className="bg-white py-24 sm:py-32 px-6">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-texto-escuro mb-20 text-center font-bold">
          Para quem é a <span className="text-principal">H7 Imóveis?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-white"
          >
            <div className="flex items-center gap-4 mb-8 text-principal">
              <div className="w-12 h-12 bg-principal/10 rounded-full flex items-center justify-center">
                <Check size={24} />
              </div>
              <h3 className="font-lora text-2xl font-bold text-texto-escuro">
                Seu lugar é aqui se:
              </h3>
            </div>
            <ul className="space-y-5 font-lora text-lg text-texto-sec">
              <li className="flex gap-3"><span>•</span> Está cansado de promessas e quer processos.</li>
              <li className="flex gap-3"><span>•</span> Valoriza um CRM bem alimentado e leads reais.</li>
              <li className="flex gap-3"><span>•</span> Busca autoridade no mercado de alto padrão.</li>
              <li className="flex gap-3"><span>•</span> Prefere o foco na venda do que na burocracia.</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-white border-dashed bg-fundo-claro/30"
          >
            <div className="flex items-center gap-4 mb-8 text-texto-sec opacity-60">
              <div className="w-12 h-12 bg-texto-sec/10 rounded-full flex items-center justify-center">
                <X size={24} />
              </div>
              <h3 className="font-lora text-2xl font-bold text-texto-escuro">
                Não é para você se:
              </h3>
            </div>
            <ul className="space-y-5 font-lora text-lg text-texto-sec">
              <li className="flex gap-3"><span>•</span> Está apenas começando no mercado agora.</li>
              <li className="flex gap-3"><span>•</span> Prefere trabalhar em isolamento total.</li>
              <li className="flex gap-3"><span>•</span> Acredita na cultura de agressividade e competição interna.</li>
              <li className="flex gap-3"><span>•</span> Busca resultados rápidos sem paciência.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
