import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

export function WhatsAppModal() {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({ name: '', company: '', need: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá, meu nome é ${formData.name}.
Empresa: ${formData.company}
Preciso de ajuda com: ${formData.need}

Gostaria de saber mais sobre a G Compass.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5516988301706?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-purple-500/20 blur-[60px] pointer-events-none" />
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-20"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-display font-bold text-white mb-2 relative z-10">
              Vamos conversar!
            </h2>
            <p className="text-slate-400 mb-6 text-sm relative z-10">
              Preencha alguns dados rápidos para que possamos entender melhor o seu momento antes de irmos para o WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                  placeholder="Como podemos te chamar?"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
                  Sua Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                  placeholder="Nome do seu negócio"
                />
              </div>

              <div>
                <label htmlFor="need" className="block text-sm font-medium text-slate-300 mb-1">
                  Qual é o seu maior desafio hoje?
                </label>
                <select
                  id="need"
                  required
                  value={formData.need}
                  onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all appearance-none"
                >
                  <option value="" disabled>Selecione uma opção</option>
                  <option value="Aumentar vendas">Aumentar vendas</option>
                  <option value="Melhorar posicionamento digital">Melhorar posicionamento digital</option>
                  <option value="Estruturar processo comercial">Estruturar processo comercial</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium py-3 rounded-lg transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              >
                Ir para o WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
