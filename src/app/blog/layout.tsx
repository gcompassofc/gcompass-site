"use client";

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ModalProvider } from '../../contexts/ModalContext';
import { WhatsAppModal } from '../../components/WhatsAppModal';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col relative bg-[#050505] text-slate-200">
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <WhatsAppModal />
      </div>
    </ModalProvider>
  );
}
