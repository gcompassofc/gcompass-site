import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#030305]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
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
        <button 
          onClick={openModal}
          className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${scrolled ? 'bg-white text-black hover:bg-slate-200' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10'}`}
        >
          Falar com Especialista
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
