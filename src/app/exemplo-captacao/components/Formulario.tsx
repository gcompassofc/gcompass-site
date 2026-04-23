import SectionWrapper from "./shared/SectionWrapper";
import { motion } from "motion/react";
import { useState, FormEvent } from "react";

export default function Formulario() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (status === "sent") {
    return (
      <SectionWrapper className="bg-white py-32 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="text-5xl text-principal font-bold">MUITO OBRIGADO.</h2>
          <p className="font-lora text-xl text-texto-sec leading-relaxed">
            Sua candidatura foi recebida. Analisamos cada perfil individualmente e entraremos em contato em breve.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="formulario" className="bg-white py-32 px-6 sm:px-12 md:px-24">
      <div className="max-w-4xl mx-auto bg-fundo px-8 py-16 sm:p-20 rounded-[3rem] shadow-sm border border-borda">
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl text-texto-escuro mb-8 font-bold leading-tight">
            Seja um corretor <span className="text-principal">especialista</span> <br />
            na H7 Imóveis.
          </h2>
          <p className="font-lora text-xl text-texto-sec leading-relaxed max-w-xl mx-auto">
            Não é apenas um formulário. É o primeiro passo para elevar sua trajetória no mercado imobiliário Catarinense.
          </p>
        </div>

        <motion.form 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="font-lora text-sm font-semibold text-texto-escuro">
              Nome completo
            </label>
            <input 
              required
              type="text"
              className="w-full bg-white border border-borda py-4 px-6 rounded-2xl text-texto outline-none focus:ring-2 focus:ring-principal/20 focus:border-principal transition-all font-lora"
              placeholder="Digite seu nome..."
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <label className="font-lora text-sm font-semibold text-texto-escuro">
              Tempo de mercado
            </label>
            <div className="relative">
              <select 
                required
                className="w-full bg-white border border-borda py-4 px-6 rounded-2xl text-texto outline-none focus:ring-2 focus:ring-principal/20 focus:border-principal transition-all font-lora appearance-none"
              >
                <option value="" disabled selected>Selecione uma opção...</option>
                <option value="<1">Menos de 1 ano</option>
                <option value="1-3">1–3 anos</option>
                <option value="3-7">3–7 anos</option>
                <option value=">7">Mais de 7 anos</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-texto-sec">
                ↓
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 space-y-3">
            <label className="font-lora text-sm font-semibold text-texto-escuro">
              Cidade de atuação
            </label>
            <input 
              required
              type="text"
              className="w-full bg-white border border-borda py-4 px-6 rounded-2xl text-texto outline-none focus:ring-2 focus:ring-principal/20 focus:border-principal transition-all font-lora"
              placeholder="Sua cidade principal..."
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 space-y-3">
            <label className="font-lora text-sm font-semibold text-texto-escuro">
              Me conta um pouco sobre sua trajetória
            </label>
            <textarea 
              required
              rows={4}
              className="w-full bg-white border border-borda py-4 px-6 rounded-2xl text-texto outline-none focus:ring-2 focus:ring-principal/20 focus:border-principal transition-all font-lora resize-none"
              placeholder="Conte-nos sua essência..."
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 pt-6">
            <button 
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full py-5 text-lg"
            >
              {status === "sending" ? "ENVIANDO..." : "QUERO CONVERSAR COM A H7"}
            </button>
            <p className="mt-8 font-lora italic text-sm text-texto-sec text-center max-w-sm mx-auto">
              Respondemos todas as candidaturas. Nenhuma mensagem fica sem resposta na H7 Imóveis.
            </p>
          </motion.div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
