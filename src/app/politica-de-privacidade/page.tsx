"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Cookie } from "lucide-react";
import { Footer } from "../../components/Footer";
import { openCookiePreferences } from "../../components/CookieConsent";
import { SECOES, CONTROLADOR, VIGENCIA, type Bloco } from "./content";

function BlocoRenderer({ bloco }: { bloco: Bloco }) {
  switch (bloco.tipo) {
    case "paragrafo":
      return (
        <p className="text-[15px] leading-relaxed text-slate-400">
          {bloco.texto}
        </p>
      );

    case "lista":
      return (
        <ul className="flex flex-col gap-2.5">
          {bloco.itens.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[15px] leading-relaxed text-slate-400"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400/70"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "listaNumerada":
      return (
        <ol className="flex flex-col gap-2.5">
          {bloco.itens.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[15px] leading-relaxed text-slate-400"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-slate-300"
              >
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case "destaque":
      return (
        <div className="glass rounded-2xl border-l-2 border-l-purple-500/60 p-5">
          <h3 className="mb-2 text-sm font-semibold text-white">
            {bloco.titulo}
          </h3>
          <p className="text-[15px] leading-relaxed text-slate-400">
            {bloco.texto}
          </p>
        </div>
      );

    case "tabela":
      return (
        <div className="flex flex-col gap-3">
          {/* Tabela em telas médias+ */}
          <div className="hidden overflow-x-auto rounded-2xl border border-white/10 md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-white/[0.04]">
                  {bloco.colunas.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="border-b border-white/10 px-4 py-3 text-xs font-semibold tracking-wide text-slate-300 uppercase"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bloco.linhas.map((linha, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 last:border-b-0"
                  >
                    {linha.map((celula, j) => (
                      <td
                        key={j}
                        className={`px-4 py-3 align-top leading-relaxed ${
                          j === 0 ? "font-medium text-slate-200" : "text-slate-400"
                        }`}
                      >
                        {celula}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cartões no mobile: tabela larga não cabe em tela pequena */}
          <div className="flex flex-col gap-3 md:hidden">
            {bloco.linhas.map((linha, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
              >
                {linha.map((celula, j) => (
                  <div key={j} className={j > 0 ? "mt-3" : undefined}>
                    <div className="mb-1 text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                      {bloco.colunas[j]}
                    </div>
                    <div
                      className={`text-sm leading-relaxed ${
                        j === 0 ? "font-medium text-slate-200" : "text-slate-400"
                      }`}
                    >
                      {celula}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {bloco.legenda && (
            <p className="text-xs leading-relaxed text-slate-500 italic">
              {bloco.legenda}
            </p>
          )}
        </div>
      );
  }
}

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-purple-500/30">
      {/* Glows de fundo, coerentes com a home */}
      <div className="pointer-events-none fixed top-[-20%] left-[-10%] h-[50%] w-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
      <div className="pointer-events-none fixed right-[-10%] bottom-[-20%] h-[50%] w-[50%] rounded-full bg-blue-900/20 blur-[120px]" />

      <header className="relative z-10 w-full border-b border-white/10 bg-[#030305]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5">
          <Link href="/" aria-label="Voltar para a página inicial">
            <img
              src="/gcompass-logo-white.svg"
              alt="G Compass"
              className="h-8 object-contain md:h-9"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Voltar ao site</span>
            <span className="sm:hidden">Voltar</span>
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-6 pt-14 pb-20">
        {/* Cabeçalho do documento */}
        <div className="mb-12">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-purple-300">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Conformidade com a LGPD — Lei nº 13.709/2018
          </div>

          <h1 className="mb-4 text-4xl leading-tight font-bold text-white md:text-5xl">
            Política de Privacidade
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            Este documento explica, de forma direta, quais dados pessoais a G
            Compass coleta, por que os coleta, com quem os compartilha e como
            você pode controlar tudo isso a qualquer momento.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
            <span>
              Última atualização:{" "}
              <span className="text-slate-300">{VIGENCIA.atualizadoEm}</span>
            </span>
            <span>
              Versão <span className="text-slate-300">{VIGENCIA.versao}</span>
            </span>
            <span>
              Controlador:{" "}
              <span className="text-slate-300">
                {CONTROLADOR.nomeFantasia} — CNPJ {CONTROLADOR.cnpj}
              </span>
            </span>
          </div>
        </div>

        {/* Índice navegável */}
        <nav
          aria-label="Índice da política"
          className="glass mb-14 rounded-2xl p-6"
        >
          <h2 className="mb-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Neste documento
          </h2>
          <ol className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {SECOES.map((secao) => (
              <li key={secao.id}>
                <a
                  href={`#${secao.id}`}
                  className="group flex gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <span className="font-mono text-xs text-purple-400/70 group-hover:text-purple-300">
                    {secao.numero.padStart(2, "0")}
                  </span>
                  <span>{secao.titulo}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Seções */}
        <div className="flex flex-col gap-16">
          {SECOES.map((secao) => (
            <section
              key={secao.id}
              id={secao.id}
              className="scroll-mt-24"
              aria-labelledby={`${secao.id}-titulo`}
            >
              <div className="mb-5 border-b border-white/10 pb-4">
                <div className="mb-2 font-mono text-xs text-purple-400/70">
                  Seção {secao.numero}
                </div>
                <h2
                  id={`${secao.id}-titulo`}
                  className="text-2xl font-bold text-white md:text-[28px]"
                >
                  {secao.titulo}
                </h2>
                <p className="mt-2 text-sm text-slate-500">{secao.resumo}</p>
              </div>

              <div className="flex flex-col gap-5">
                {secao.blocos.map((bloco, i) => (
                  <BlocoRenderer key={i} bloco={bloco} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contato do encarregado */}
        <section
          aria-labelledby="contato-dpo"
          className="glass mt-16 rounded-2xl p-7"
        >
          <h2
            id="contato-dpo"
            className="mb-3 flex items-center gap-2.5 text-lg font-bold text-white"
          >
            <Mail className="h-5 w-5 text-purple-400" aria-hidden="true" />
            Dúvidas sobre seus dados?
          </h2>
          <p className="mb-5 text-[15px] leading-relaxed text-slate-400">
            Escreva para o nosso encarregado. Respondemos toda solicitação de
            titular em até 15 dias, sem custo algum.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${CONTROLADOR.emailDpo}?subject=${encodeURIComponent(
                "LGPD — Direitos do Titular",
              )}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-slate-200"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {CONTROLADOR.emailDpo}
            </a>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Cookie className="h-4 w-4" aria-hidden="true" />
              Preferências de cookies
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
