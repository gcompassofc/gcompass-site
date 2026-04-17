import React from 'react';
import { Compass } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#020203] pt-16 pb-8 px-6 mt-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img 
              src="/logo_growth.png" 
              alt="Growth Compass" 
              width="160"
              height="40"
              className="h-8 md:h-10 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="text-xl font-bold tracking-tighter text-white">G COMPASS</span>');
              }}
            />
          </div>
        </div>

        <div className="text-left md:text-right">
          <h2 className="text-sm font-semibold text-slate-300 mb-2">Consultoria de Estruturação Comercial e Marketing Digital</h2>
          <p className="text-xs text-slate-500 max-w-md">
            Especialistas em: Receita Previsível, Implementação de CRM, Estratégias de Vendas, Aquisição de Clientes com IA e Treinamento de Equipes Comerciais.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
        <p>&copy; {new Date().getFullYear()} G Compass. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
