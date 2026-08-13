"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

/**
 * Banner de consentimento de cookies.
 *
 * Segue a LGPD e o Guia Orientativo de Cookies da ANPD:
 * - recusar é tão fácil quanto aceitar (dois botões de mesmo peso no 1º nível);
 * - consentimento é granular por categoria e nunca vem pré-marcado;
 * - a escolha é registrada com data/versão para fins de comprovação (art. 8º, §1º);
 * - o titular pode revogar a qualquer momento pelo botão no rodapé.
 *
 * Enquanto não há consentimento, nenhum script não essencial deve ser carregado.
 * Para plugar Meta Pixel / Google Ads no futuro, leia getCookieConsent() e
 * escute o evento "gcompass:cookie-consent".
 */

const STORAGE_KEY = "gcompass_cookie_consent";
const POLICY_VERSION = "1.0";
/** ANPD recomenda repetir a coleta periodicamente; 12 meses conforme a política. */
const EXPIRA_EM_DIAS = 365;

export type CookieCategories = {
  essenciais: true;
  analiticos: boolean;
  funcionais: boolean;
  marketing: boolean;
};

type StoredConsent = {
  versao: string;
  data: string;
  categorias: CookieCategories;
};

const RECUSAR_TUDO: CookieCategories = {
  essenciais: true,
  analiticos: false,
  funcionais: false,
  marketing: false,
};

const ACEITAR_TUDO: CookieCategories = {
  essenciais: true,
  analiticos: true,
  funcionais: true,
  marketing: true,
};

const CATEGORIAS: {
  chave: keyof Omit<CookieCategories, "essenciais">;
  nome: string;
  descricao: string;
}[] = [
  {
    chave: "analiticos",
    nome: "Analíticos",
    descricao:
      "Medem visitas e páginas mais acessadas para melhorarmos o conteúdo.",
  },
  {
    chave: "funcionais",
    nome: "Funcionais",
    descricao:
      "Lembram preferências como idioma e dados já preenchidos em formulários.",
  },
  {
    chave: "marketing",
    nome: "Publicidade",
    descricao:
      "Mensuram campanhas e permitem anúncios mais relevantes em plataformas parceiras.",
  },
];

const EVENTO_ABRIR = "gcompass:open-cookie-preferences";
const EVENTO_CONSENTIMENTO = "gcompass:cookie-consent";

/** Abre o painel de preferências a partir de qualquer lugar do site. */
export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent(EVENTO_ABRIR));
}

/** Consentimento atual, ou null se o titular ainda não escolheu. */
export function getCookieConsent(): CookieCategories | null {
  if (typeof window === "undefined") return null;
  try {
    const bruto = window.localStorage.getItem(STORAGE_KEY);
    if (!bruto) return null;
    const dado = JSON.parse(bruto) as StoredConsent;
    if (dado.versao !== POLICY_VERSION) return null;

    const idadeEmDias =
      (Date.now() - new Date(dado.data).getTime()) / 86_400_000;
    if (!Number.isFinite(idadeEmDias) || idadeEmDias > EXPIRA_EM_DIAS) {
      return null;
    }
    return dado.categorias;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [visivel, setVisivel] = useState(false);
  const [detalhado, setDetalhado] = useState(false);
  const [escolhas, setEscolhas] = useState<CookieCategories>(RECUSAR_TUDO);

  useEffect(() => {
    // Só decide após montar: no servidor não há localStorage.
    if (getCookieConsent() === null) setVisivel(true);

    const abrir = () => {
      setEscolhas(getCookieConsent() ?? RECUSAR_TUDO);
      setDetalhado(true);
      setVisivel(true);
    };
    window.addEventListener(EVENTO_ABRIR, abrir);
    return () => window.removeEventListener(EVENTO_ABRIR, abrir);
  }, []);

  const salvar = useCallback((categorias: CookieCategories) => {
    const registro: StoredConsent = {
      versao: POLICY_VERSION,
      data: new Date().toISOString(),
      categorias,
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(registro));
    } catch {
      // Navegação privada ou storage bloqueado: respeita a escolha só nesta sessão.
    }
    window.dispatchEvent(
      new CustomEvent(EVENTO_CONSENTIMENTO, { detail: categorias }),
    );
    setVisivel(false);
    setDetalhado(false);
  }, []);

  if (!visivel) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-titulo"
      aria-describedby="cookie-descricao"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-5"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0a0a0f]/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h2
            id="cookie-titulo"
            className="flex items-center gap-2.5 text-base font-semibold text-white"
          >
            <Cookie className="h-5 w-5 text-purple-400" aria-hidden="true" />
            Sua privacidade, sua escolha
          </h2>
          {detalhado && (
            <button
              type="button"
              onClick={() => setVisivel(false)}
              aria-label="Fechar preferências de cookies"
              className="rounded-full p-1.5 text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>

        <p
          id="cookie-descricao"
          className="mb-5 text-sm leading-relaxed text-slate-400"
        >
          Usamos cookies essenciais para o site funcionar. Com a sua autorização,
          usamos também cookies para medir audiência e mensurar campanhas. Você
          decide, e pode mudar de ideia quando quiser. Saiba mais na{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-purple-300 underline underline-offset-2 hover:text-purple-200"
          >
            Política de Privacidade
          </Link>
          .
        </p>

        {detalhado && (
          <div className="mb-5 flex flex-col gap-2.5">
            <div className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
              <div>
                <div className="text-sm font-medium text-slate-200">
                  Essenciais
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                  Necessários para segurança e funcionamento do site.
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-400">
                Sempre ativos
              </span>
            </div>

            {CATEGORIAS.map((cat) => (
              <label
                key={cat.chave}
                className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 transition-colors hover:bg-white/[0.04]"
              >
                <div>
                  <div className="text-sm font-medium text-slate-200">
                    {cat.nome}
                  </div>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    {cat.descricao}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={escolhas[cat.chave]}
                  onChange={(e) =>
                    setEscolhas((prev) => ({
                      ...prev,
                      [cat.chave]: e.target.checked,
                    }))
                  }
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-purple-500"
                />
              </label>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2.5 sm:flex-row">
          {/* Aceitar e recusar têm o mesmo peso visual, como exige a ANPD. */}
          <button
            type="button"
            onClick={() => salvar(ACEITAR_TUDO)}
            className="flex-1 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-slate-200"
          >
            Aceitar todos
          </button>
          <button
            type="button"
            onClick={() => salvar(RECUSAR_TUDO)}
            className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Recusar todos
          </button>
          {detalhado ? (
            <button
              type="button"
              onClick={() => salvar(escolhas)}
              className="flex-1 rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-200 transition-colors hover:bg-purple-500/20"
            >
              Salvar escolhas
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setDetalhado(true)}
              className="flex-1 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              Personalizar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
