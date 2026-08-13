"use client";

import React from 'react';
import Link from 'next/link';
import { openCookiePreferences } from './CookieConsent';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#020203] pt-16 pb-8 px-6 mt-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img 
              src="/gcompass-logo-white.svg" 
              alt="G Compass" 
              className="h-8 md:h-10 object-contain"
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
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/politica-de-privacidade" className="hover:text-slate-300 transition-colors">Política de Privacidade</Link>
          <button
            type="button"
            onClick={openCookiePreferences}
            className="hover:text-slate-300 transition-colors"
          >
            Preferências de cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
