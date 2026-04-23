import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ImagePlaceholder from "./shared/ImagePlaceholder";
import { MoveDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center bg-white overflow-hidden py-20 px-6"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <motion.div style={{ y }} className="w-full h-full">
           <ImagePlaceholder 
            label="[IMAGE_HERO]"
            description="Fachada de imóvel de alto padrão com piscina"
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600"
            className="w-full h-full rounded-none border-none shadow-none grayscale-0 opacity-100"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <span className="font-bebas text-3xl tracking-widest text-principal">H7 IMÓVEIS</span>
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="relative z-10 max-w-[900px] w-full mx-auto text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-[clamp(40px,7vw,90px)] leading-[1.1] text-texto-escuro mb-8 font-lora font-bold"
        >
          Encontre o lugar ideal <br />
          para você <span className="text-principal">trabalhar.</span>
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="bg-white/90 backdrop-blur-md p-2 rounded-full shadow-2xl max-w-xl mx-auto flex items-center border border-borda"
        >
          <div className="flex-1 px-8 text-left border-r border-borda hidden sm:block">
            <span className="block text-[10px] uppercase tracking-widest text-texto-sec mb-1">Localização</span>
            <span className="font-lora text-sm font-semibold">Joinville e região</span>
          </div>
          <button className="btn-primary w-full sm:w-auto px-10">
            QUERO CONVERSAR
          </button>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="mt-12 font-lora text-lg text-texto-sec max-w-2xl mx-auto leading-relaxed"
        >
          A H7 Imóveis conecta corretores de elite ao mercado de alto padrão em Santa Catarina. O lead chega, você converte.
        </motion.p>
      </motion.div>
    </section>
  );
}
