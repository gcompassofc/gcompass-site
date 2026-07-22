"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./proposta.css";

/** Destino da notificação de aceite (mesmo serviço já usado nos demais formulários do site). */
const EMAIL_ENDPOINT = "https://formsubmit.co/ajax/growthcompassofc@gmail.com";
const CLIENTE = "Auxiliadora Predial Agência Centro";

const MARGEM = 5;
const LARG = 54;

export default function PropostaAuxiliadoraCentro() {
  const pistaRef = useRef<HTMLDivElement>(null);
  const puxadorRef = useRef<HTMLDivElement>(null);
  const preenchRef = useRef<HTMLDivElement>(null);
  const fecharRef = useRef<HTMLButtonElement>(null);

  const arrastando = useRef(false);
  const pointerId = useRef<number | null>(null);
  const jaEnviou = useRef(false);

  const [concluido, setConcluido] = useState(false);
  const [modalMontado, setModalMontado] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  /* Revelação por scroll */
  useEffect(() => {
    const alvos = document.querySelectorAll<HTMLElement>(".proposta-root .rev");
    if (!("IntersectionObserver" in window)) {
      alvos.forEach((e) => e.classList.add("on"));
      return;
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    alvos.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, []);

  const limite = useCallback(() => {
    const pista = pistaRef.current;
    return pista ? pista.clientWidth - LARG - MARGEM * 2 : 0;
  }, []);

  const posicionar = useCallback(
    (x: number) => {
      const max = limite();
      const p = Math.max(0, Math.min(x, max));
      if (puxadorRef.current) {
        puxadorRef.current.style.left = `${MARGEM + p}px`;
        puxadorRef.current.setAttribute(
          "aria-valuenow",
          String(max > 0 ? Math.round((p / max) * 100) : 0)
        );
      }
      if (preenchRef.current) {
        preenchRef.current.style.width = `${MARGEM * 2 + LARG + p}px`;
      }
      return p;
    },
    [limite]
  );

  /** Notifica o aceite por e-mail. Silencioso para o cliente: falha de rede não bloqueia a confirmação. */
  const notificarAceite = useCallback(async () => {
    if (jaEnviou.current) return;
    jaEnviou.current = true;

    const agora = new Date();
    try {
      await fetch(EMAIL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Proposta ACEITA — ${CLIENTE}`,
          _template: "table",
          Cliente: CLIENTE,
          Status: "Proposta aceita pelo cliente",
          "Data e hora": agora.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
          Página: typeof window !== "undefined" ? window.location.href : "/auxi-centro-proposta",
          Dispositivo: typeof navigator !== "undefined" ? navigator.userAgent : "-",
        }),
      });
    } catch (erro) {
      console.error("Falha ao notificar aceite da proposta:", erro);
    }
  }, []);

  const abrirModal = useCallback(() => {
    setModalMontado(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setModalAberto(true)));
    setTimeout(() => fecharRef.current?.focus(), 420);
  }, []);

  const concluir = useCallback(() => {
    if (jaEnviou.current) return;
    setConcluido(true);
    arrastando.current = false;

    const pista = pistaRef.current;
    if (preenchRef.current) preenchRef.current.style.width = "100%";
    if (puxadorRef.current && pista) {
      puxadorRef.current.style.left = `${pista.clientWidth - LARG - MARGEM}px`;
      puxadorRef.current.setAttribute("aria-valuenow", "100");
    }

    void notificarAceite();
    abrirModal();
  }, [notificarAceite, abrirModal]);

  const fecharModal = useCallback(() => {
    setModalAberto(false);
    setTimeout(() => setModalMontado(false), 380);
  }, []);

  useEffect(() => {
    if (!modalMontado) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") fecharModal();
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [modalMontado, fecharModal]);

  /* Reposiciona o puxador quando a largura da pista muda.
     Lê `concluido` por ref para não reposicionar em zero ao reexecutar o efeito. */
  useEffect(() => {
    const aoRedimensionar = () => {
      const pista = pistaRef.current;
      if (jaEnviou.current) {
        if (puxadorRef.current && pista) {
          puxadorRef.current.style.left = `${pista.clientWidth - LARG - MARGEM}px`;
        }
      } else {
        posicionar(0);
      }
    };
    window.addEventListener("resize", aoRedimensionar);
    if (!jaEnviou.current) posicionar(0);
    return () => window.removeEventListener("resize", aoRedimensionar);
  }, [posicionar]);

  const deslocamento = (clientX: number) => {
    const r = pistaRef.current!.getBoundingClientRect();
    return clientX - r.left - MARGEM - LARG / 2;
  };

  const aoPressionar = (e: React.PointerEvent<HTMLDivElement>) => {
    if (concluido) return;
    arrastando.current = true;
    pointerId.current = e.pointerId;
    puxadorRef.current?.setPointerCapture(e.pointerId);
    pistaRef.current?.classList.add("puxando");
    e.preventDefault();
  };

  const aoMover = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!arrastando.current || e.pointerId !== pointerId.current) return;
    posicionar(deslocamento(e.clientX));
  };

  const aoSoltar = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!arrastando.current || e.pointerId !== pointerId.current) return;
    arrastando.current = false;
    pistaRef.current?.classList.remove("puxando");
    const p = posicionar(deslocamento(e.clientX));
    if (p >= limite() - 2) concluir();
    else posicionar(0);
  };

  const aoCancelar = () => {
    arrastando.current = false;
    pistaRef.current?.classList.remove("puxando");
    if (!concluido) posicionar(0);
  };

  const aoTeclarPuxador = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (concluido) return;
    if (e.key === "ArrowRight") {
      posicionar(limite());
      e.preventDefault();
    }
    if (e.key === "ArrowLeft") {
      posicionar(0);
      e.preventDefault();
    }
    if (e.key === "Enter" || e.key === " ") {
      concluir();
      e.preventDefault();
    }
  };

  return (
    <div className="proposta-root">
      <header className="hero">
        <span className="anel a1" />
        <span className="anel a2" />
        <div className="wrap hero-conteudo">
          <p className="rotulo">Proposta comercial</p>
          <h1>
            Estruturação da aquisição
            <br />
            de clientes
          </h1>
          <p>
            Uma proposta objetiva para transformar investimento em anúncio em dado rastreável, lead
            qualificado e decisão comercial baseada em número.
          </p>
          <div className="hero-tags">
            <span>Auxiliadora Predial Agência Centro</span>
            <span>Growth Compass</span>
            <span>22 de julho de 2026</span>
          </div>
        </div>
      </header>

      <section className="bloco cinza">
        <div className="wrap">
          <p className="rotulo rev">01 · O cenário atual</p>
          <div className="cabeca rev">
            <h2>Locação e venda não estão travando pelo mesmo motivo.</h2>
            <p>
              As duas operações rodam hoje em canais diferentes, com problemas diferentes. Tratar as
              duas do mesmo jeito é o que vem impedindo o resultado.
            </p>
          </div>
          <div className="duplo rev">
            <div className="cartao">
              <span className="indice">01</span>
              <span className="selo">Locação</span>
              <h3>Google Ads em fase de teste</h3>
              <p>
                O foco migrou para busca depois de um ano de Meta com retorno baixo. O caminho está
                certo, mas falta constância de otimização.
              </p>
              <dl className="linhas">
                <div className="linha-item">
                  <dt>Hoje</dt>
                  <dd>Investimento abaixo de mil reais no Google, sem acompanhamento contínuo.</dd>
                </div>
                <div className="linha-item">
                  <dt>Trava</dt>
                  <dd>Cadastro manual de imóveis limita o volume anunciado.</dd>
                </div>
                <div className="linha-item">
                  <dt>Resultado</dt>
                  <dd>Duas locações em um ano de Meta Ads.</dd>
                </div>
              </dl>
            </div>
            <div className="cartao">
              <span className="indice">02</span>
              <span className="selo">Venda</span>
              <h3>Meta Ads sem conversão</h3>
              <p>
                Volume de lead existe. O que não existe é gestão diária, troca ágil de criativo e
                leitura do que cada campanha entregou.
              </p>
              <dl className="linhas">
                <div className="linha-item">
                  <dt>Hoje</dt>
                  <dd>Entre R$100 e R$140 por dia, com campanhas paradas quando a verba acaba.</dd>
                </div>
                <div className="linha-item">
                  <dt>Trava</dt>
                  <dd>Troca de campanha leva semanas por indisponibilidade do gestor atual.</dd>
                </div>
                <div className="linha-item">
                  <dt>Resultado</dt>
                  <dd>Conversão de tráfego pago em venda praticamente zerada.</dd>
                </div>
              </dl>
            </div>
          </div>
          <p className="legenda rev">
            Quase 30 corretores na operação e as vendas vêm de portal e relacionamento, não do
            investimento em mídia.
          </p>
        </div>
      </section>

      <section className="split">
        <div
          className="split-claro rev"
          style={{ paddingLeft: "max(22px, calc((100vw - 1080px)/2 + 40px))" }}
        >
          <p className="rotulo">02 · A base que falta</p>
          <h2>Sem rastreamento, cada real investido vira ruído em vez de aprendizado.</h2>
          <p>
            Quatro pontos estruturais sustentam qualquer estratégia daqui para frente. Enquanto eles
            não existirem, otimizar campanha é adivinhação.
          </p>
        </div>
        <div className="split-escuro rev">
          <span className="anel" />
          <div className="item-num">
            <div className="bolha">01</div>
            <div>
              <h4>Rastreamento completo</h4>
              <p>
                Google Tag Manager, Pixel do Meta, API de Conversões, GA4 e Clarity com mapa de
                calor. O plano Iniciante da AGil, em R$149 por mês, não permite nada disso.
              </p>
            </div>
          </div>
          <div className="item-num">
            <div className="bolha">02</div>
            <div>
              <h4>Abastecimento automático</h4>
              <p>
                Importação dos imóveis a partir da URL do site da Auxiliadora, com foto, ficha
                técnica, preço e descrição. Fim do cadastro manual imóvel por imóvel.
              </p>
            </div>
          </div>
          <div className="item-num">
            <div className="bolha">03</div>
            <div>
              <h4>Públicos alimentados por dado real</h4>
              <p>
                Base de compradores anteriores, respostas de formulário por faixa de investimento e
                comportamento no site formam os públicos semelhantes.
              </p>
            </div>
          </div>
          <div className="item-num">
            <div className="bolha">04</div>
            <div>
              <h4>Devolutiva de cada lead</h4>
              <p>
                O retorno do corretor volta para as fontes de tráfego e retroalimenta a campanha. É
                esse ciclo que separa otimização de tentativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bloco branco">
        <div className="wrap">
          <p className="rotulo rev">03 · O escopo</p>
          <div className="cabeca rev">
            <h2>Quatro frentes sob a mesma estratégia.</h2>
            <p>
              Nenhuma delas funciona isolada. Juntas, formam o ciclo de gerar demanda, medir,
              aprender e ajustar que hoje não existe na operação.
            </p>
          </div>
          <div className="grade4 rev">
            <div className="mini">
              <span className="n">01</span>
              <h3>Meta Ads</h3>
              <p>Foco em venda, com estrutura segmentada em vez de campanha única.</p>
              <ul>
                <li>Campanhas separadas por faixa de preço do imóvel</li>
                <li>Funil de branding em vídeo com remarketing para quem assistiu 15 segundos</li>
                <li>Públicos por resposta de formulário</li>
                <li>Teste de verificação por SMS para validar telefone</li>
              </ul>
            </div>
            <div className="mini">
              <span className="n">02</span>
              <h3>Google Ads</h3>
              <p>Foco em locação, capturando quem já está procurando ativamente.</p>
              <ul>
                <li>Pesquisa e curadoria de palavras-chave</li>
                <li>Revisão de termos a cada três dias</li>
                <li>Corte do que gera clique sem conversão</li>
                <li>Expansão por região de origem do cliente</li>
              </ul>
            </div>
            <div className="mini destaque">
              <span className="n">03</span>
              <h3>Criativos</h3>
              <p>Produção sem limite de peças e sem limite de edições.</p>
              <ul>
                <li>Média de 4 a 5 estáticos e 3 carrosséis por imóvel</li>
                <li>Padrão visual definido em conjunto antes de produzir</li>
                <li>Estáticos prontos em até dois dias para oportunidade urgente</li>
                <li>Tratamento de imagem quando a foto original não atende</li>
              </ul>
            </div>
            <div className="mini">
              <span className="n">04</span>
              <h3>Site próprio</h3>
              <p>Vitrine rastreável, no domínio de vocês, sem mensalidade de plataforma.</p>
              <ul>
                <li>Página individual para cada imóvel</li>
                <li>
                  Atualização semanal do acervo, com entrada dos imóveis novos e retirada dos
                  vendidos
                </li>
                <li>Tráfego direcionado para imóvel específico</li>
                <li>Clique, tempo de tela e formulário abandonado registrados</li>
                <li>Site e dados são propriedade da Auxiliadora</li>
              </ul>
            </div>
          </div>
          <p className="legenda rev">
            A inteligência gerada fica com vocês, independentemente de quem estiver fazendo a gestão
            no futuro.
          </p>
        </div>
      </section>

      <section className="faixa">
        <span className="anel" />
        <div className="wrap">
          <p className="rotulo claro rev">04 · Implantação</p>
          <div className="cabeca rev">
            <h2>A troca de gestão acontece com as campanhas no ar.</h2>
            <p>
              Nada é pausado durante a transição. A geração de lead segue rodando enquanto a nova
              estratégia é montada.
            </p>
          </div>
          <div className="trilha rev">
            <div className="etapa">
              <div className="marca">01</div>
              <h4>Onboarding e integração</h4>
              <p>
                Reunião de integração para entender a operação, definir responsabilidades de cada
                lado e alinhar expectativas.
              </p>
            </div>
            <div className="etapa">
              <div className="marca">02</div>
              <h4>Auditoria</h4>
              <p>
                Análise das campanhas ativas, do histórico de resultado e do acervo de imóveis que
                vai alimentar o novo site.
              </p>
            </div>
            <div className="etapa">
              <div className="marca">03</div>
              <h4>Estratégia</h4>
              <p>
                Apresentação do plano de campanhas, estrutura de públicos, padrão de criativo e
                metas de custo por lead.
              </p>
            </div>
            <div className="etapa">
              <div className="marca">04</div>
              <h4>Execução</h4>
              <p>
                Campanhas no ar, rastreamento implementado e rotina semanal de acompanhamento
                iniciada.
              </p>
            </div>
          </div>
          <p className="legenda rev">
            Depois disso, a rotina é fixa: reunião semanal de alinhamento, dashboard em tempo real
            protegido por senha e alerta antes da verba acabar.
          </p>
        </div>
      </section>

      <section className="bloco cinza">
        <div className="wrap">
          <p className="rotulo rev">05 · Investimento</p>
          <div className="cabeca rev">
            <h2>Contrato inicial de três meses, sem fidelidade.</h2>
            <p>
              Sem cláusula de permanência e sem multa rescisória. A continuidade é decisão de vocês
              a qualquer momento, com base em resultado.
            </p>
          </div>
          <div className="valores rev">
            <div className="preco">
              <span className="selo">Gestão mensal</span>
              <span className="cifra">
                R$ 1.500 <small>/mês</small>
              </span>
              <p>
                Gestão completa de Meta Ads e Google Ads, produção de criativos sem limite de peças
                ou edições e manutenção semanal do acervo do site. Valor fixo pelos três primeiros
                meses, revisto ao fim do período conforme a demanda real.
              </p>
            </div>
            <div className="preco destaque">
              <span className="selo">Implementação do site</span>
              <span className="cifra">
                R$ 1.200 <small>único</small>
              </span>
              <p>
                Inclui construção, importação inicial dos imóveis e configuração completa de
                rastreamento, no domínio de vocês.
              </p>
            </div>
            <div className="preco">
              <span className="selo">Domínio e hospedagem</span>
              <span className="cifra">Anual</span>
              <p>
                Pago diretamente por vocês ao provedor. Substitui a mensalidade de R$149 da AGil e
                fica abaixo dela no acumulado do ano.
              </p>
            </div>
          </div>
          <div className="aviso rev">
            <strong>
              A verba de anúncios continua sendo paga diretamente por vocês às plataformas
            </strong>
            , sem passar pela Growth Compass. O valor mensal é definido na reunião de estratégia,
            junto com a projeção de leads por faixa de investimento.
          </div>
        </div>
      </section>

      <section className="resp">
        <div
          className="resp-claro rev"
          style={{ paddingLeft: "max(22px, calc((100vw - 1080px)/2 + 40px))" }}
        >
          <p className="rotulo">06 · Responsabilidades</p>
          <h2>A execução muda de mãos. A clareza do que cabe a cada lado, não.</h2>
          <p>
            O ciclo só fecha com as duas pontas funcionando. Sem devolutiva de lead e sem acesso, a
            otimização trabalha com metade da informação.
          </p>
          <div className="caixas">
            <div className="caixa">
              <span>Growth Compass</span>
              <p>
                Estratégia, gestão diária das campanhas, produção de criativo, implementação do
                site, atualização semanal do acervo, rastreamento e relatório semanal.
              </p>
            </div>
            <div className="caixa">
              <span>Auxiliadora Centro</span>
              <p>
                Acesso aos gerenciadores de anúncio, base de compradores anteriores, verba de
                anúncios e devolutiva do que aconteceu com cada lead.
              </p>
            </div>
          </div>
        </div>
        <div className="resp-escuro rev">
          <span className="anel" />
          <blockquote>
            “Não adianta gerar lead. Adianta saber o que aconteceu com cada um deles.”
          </blockquote>
          <cite>Proposta comercial · Growth Compass</cite>
        </div>
      </section>

      <footer className="fecho">
        <div className="wrap">
          <p className="rotulo rev">Próximo passo</p>
          <h2 className="rev">Aprovada a proposta, onboarding e auditoria na mesma semana.</h2>
          <p className="rev">
            As campanhas atuais seguem no ar durante toda a transição. Três meses para provar com
            número, não com promessa.
          </p>

          <div className="aceite rev">
            <div ref={pistaRef} className={`pista${concluido ? " concluida" : ""}`}>
              <div ref={preenchRef} className="preenchimento" />
              <span className="pista-texto">
                {concluido ? "Proposta aceita" : "Aceitar proposta"}
              </span>
              <div
                ref={puxadorRef}
                className="puxador"
                role="slider"
                tabIndex={0}
                aria-label="Arraste para aceitar a proposta"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={0}
                onPointerDown={aoPressionar}
                onPointerMove={aoMover}
                onPointerUp={aoSoltar}
                onPointerCancel={aoCancelar}
                onKeyDown={aoTeclarPuxador}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </div>
            </div>
            <p className="aceite-dica" style={{ opacity: concluido ? 0 : 1 }}>
              Arraste até o fim para confirmar
            </p>
          </div>
        </div>
      </footer>

      {modalMontado && (
        <div
          className={`modal${modalAberto ? " aberto" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitulo"
        >
          <div className="modal-fundo" onClick={fecharModal} />
          <div className="modal-caixa">
            <div className="modal-topo" />
            <div className="modal-conteudo">
              <div className="modal-marca">
                <svg
                  viewBox="0 0 52 52"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle className="anel-check" cx="26" cy="26" r="23" />
                  <path className="traco-check" d="M15 26.5l8 8 15-16" />
                </svg>
              </div>
              <p className="rotulo">Proposta aceita</p>
              <h3 id="modalTitulo">Parabéns pela decisão.</h3>
              <p>
                Nosso objetivo é resultado, e é isso que vamos buscar a partir de agora. O onboarding
                e a auditoria entram na agenda desta semana.
              </p>
              <button
                type="button"
                className="modal-botao"
                ref={fecharRef}
                onClick={fecharModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
