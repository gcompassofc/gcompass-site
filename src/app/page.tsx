"use client";

import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Objection } from '../components/Objection';
import { PainPoints } from '../components/PainPoints';
import { ServicesBento } from '../components/ServicesBento';
import { Solution } from '../components/Solution';
import { ValueProof } from '../components/ValueProof';
import { BottomCTA } from '../components/BottomCTA';
import { Footer } from '../components/Footer';
import { WebGLShader } from '../components/WebGLShader';
import { ModalProvider } from '../contexts/ModalContext';
import { WhatsAppModal } from '../components/WhatsAppModal';

export default function HomePage() {
  return (
    <ModalProvider>
      <div className="min-h-screen text-slate-200 selection:bg-purple-500/30">
        {/* Global Background Glows */}
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />
        <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />

        <main className="relative z-10 flex flex-col items-center w-full overflow-hidden">
          <div className="relative w-full flex flex-col items-center">
            <WebGLShader />
            <Header />
            <Hero />
          </div>
          <Objection />
          <PainPoints />
          <ServicesBento />
          <Solution />
          <ValueProof />
          <BottomCTA />
        </main>
        <Footer />
        <WhatsAppModal />
      </div>
    </ModalProvider>
  );
}
