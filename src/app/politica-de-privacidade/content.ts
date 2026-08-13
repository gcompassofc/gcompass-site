/**
 * Conteúdo integral da Política de Privacidade da G Compass.
 *
 * Separado da página para que o texto jurídico possa ser revisado e atualizado
 * sem mexer em JSX. Ao alterar qualquer cláusula, atualize também VIGENCIA
 * (art. 9º, §2º da LGPD: o titular deve ser informado sobre mudanças de
 * finalidade ou de tratamento).
 */

export const CONTROLADOR = {
  razaoSocial: "52.651.053 Allyson Bruno Martello de Oliveira",
  nomeFantasia: "G Compass",
  cnpj: "52.651.053/0001-76",
  emailDpo: "growthcompassofc@gmail.com",
  encarregado: "Allyson Bruno Martello de Oliveira",
} as const;

export const VIGENCIA = {
  atualizadoEm: "13 de agosto de 2026",
  versao: "1.0",
} as const;

export type Bloco =
  | { tipo: "paragrafo"; texto: string }
  | { tipo: "lista"; itens: string[] }
  | { tipo: "listaNumerada"; itens: string[] }
  | { tipo: "destaque"; titulo: string; texto: string }
  | {
      tipo: "tabela";
      colunas: string[];
      linhas: string[][];
      legenda?: string;
    };

export type Secao = {
  id: string;
  numero: string;
  titulo: string;
  resumo: string;
  blocos: Bloco[];
};

export const SECOES: Secao[] = [
  {
    id: "quem-somos",
    numero: "1",
    titulo: "Quem somos e o que este documento faz",
    resumo:
      "Identificamos o controlador dos seus dados e explicamos o alcance desta política.",
    blocos: [
      {
        tipo: "paragrafo",
        texto: `Esta Política de Privacidade descreve como a ${CONTROLADOR.razaoSocial}, inscrita no CNPJ sob o nº ${CONTROLADOR.cnpj}, que atua sob o nome comercial G Compass ("G Compass", "nós"), coleta, utiliza, compartilha, armazena e protege dados pessoais.`,
      },
      {
        tipo: "paragrafo",
        texto:
          "Para os fins da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018, a \"LGPD\"), a G Compass atua como CONTROLADORA dos dados pessoais tratados por meio deste site — ou seja, é a ela que competem as decisões sobre o tratamento desses dados.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Esta política se aplica ao site gcompass.com.br, a todas as suas páginas e subpáginas, aos formulários e diagnósticos nele hospedados e aos atendimentos comerciais iniciados a partir deles. Ela não se aplica a sites de terceiros que você acesse por meio de links aqui publicados, cada qual com sua própria política.",
      },
      {
        tipo: "destaque",
        titulo: "Nosso compromisso em uma frase",
        texto:
          "Coletamos o mínimo de dados necessário para conversar com você sobre negócios, nunca vendemos seus dados e você pode pedir para ver, corrigir ou apagar tudo o que temos a seu respeito a qualquer momento.",
      },
    ],
  },
  {
    id: "definicoes",
    numero: "2",
    titulo: "Definições que usamos aqui",
    resumo: "Os termos técnicos da LGPD, traduzidos.",
    blocos: [
      {
        tipo: "lista",
        itens: [
          "Dado pessoal: qualquer informação relacionada a uma pessoa natural identificada ou identificável — seu nome, e-mail, telefone, IP, entre outros.",
          "Dado pessoal sensível: dado sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico. A G Compass não coleta dados sensíveis.",
          "Titular: você, a pessoa natural a quem os dados pessoais se referem.",
          "Controlador: quem toma as decisões sobre o tratamento dos dados. Neste site, a G Compass.",
          "Operador: quem trata dados em nome do controlador — nossos fornecedores de tecnologia, por exemplo.",
          "Tratamento: qualquer operação com dados pessoais: coleta, uso, acesso, armazenamento, compartilhamento, eliminação, entre outras.",
          "Encarregado (DPO): a pessoa indicada para atuar como canal de comunicação entre a G Compass, você e a Autoridade Nacional de Proteção de Dados.",
          "ANPD: Autoridade Nacional de Proteção de Dados, órgão federal que fiscaliza o cumprimento da LGPD.",
        ],
      },
    ],
  },
  {
    id: "dados-coletados",
    numero: "3",
    titulo: "Quais dados coletamos",
    resumo:
      "Tudo o que coletamos, separado entre o que você nos entrega e o que é registrado automaticamente.",
    blocos: [
      {
        tipo: "paragrafo",
        texto:
          "Coletamos apenas os dados necessários para as finalidades descritas nesta política, em observância ao princípio da necessidade (art. 6º, III, da LGPD). Navegar pelo site não exige que você se identifique: os dados de identificação só são coletados quando você opta por preenchê-los.",
      },
      {
        tipo: "tabela",
        colunas: ["Categoria", "Dados", "Origem"],
        linhas: [
          [
            "Dados de identificação e contato",
            "Nome, e-mail, telefone/WhatsApp, nome da empresa e cargo.",
            "Fornecidos por você em formulários, diagnósticos e no botão de contato via WhatsApp.",
          ],
          [
            "Dados de qualificação comercial",
            "Segmento de atuação, porte, faixa de faturamento, tamanho da equipe, ferramentas em uso, desafios e objetivos comerciais informados nos diagnósticos.",
            "Fornecidos por você ao responder nossos formulários e questionários.",
          ],
          [
            "Registros de conexão e acesso",
            "Endereço IP, data e hora do acesso, páginas visitadas, tempo de permanência, origem do tráfego (site ou anúncio de referência), tipo de dispositivo, sistema operacional, navegador e idioma.",
            "Coletados automaticamente pelo site e por nossas ferramentas de análise.",
          ],
          [
            "Dados de comunicação",
            "Conteúdo das mensagens que você nos envia por e-mail, WhatsApp ou formulário, e o histórico dessas interações.",
            "Fornecidos por você ao entrar em contato.",
          ],
          [
            "Cookies e identificadores",
            "Identificadores armazenados no seu navegador conforme a seção 8 desta política.",
            "Coletados automaticamente, mediante seu consentimento quando não essenciais.",
          ],
        ],
        legenda:
          "Não coletamos CPF, RG, dados bancários, dados de cartão de crédito nem dados pessoais sensíveis por meio deste site.",
      },
      {
        tipo: "destaque",
        titulo: "Crianças e adolescentes",
        texto:
          "Nossos serviços são dirigidos a empresas e profissionais maiores de 18 anos. Não coletamos intencionalmente dados de crianças ou adolescentes. Se identificarmos que um dado dessa natureza foi enviado sem o consentimento específico e em destaque de ao menos um dos pais ou responsável legal, conforme o art. 14 da LGPD, nós o eliminaremos. Se você é responsável e acredita que isso ocorreu, escreva para o nosso encarregado.",
      },
    ],
  },
  {
    id: "finalidades",
    numero: "4",
    titulo: "Por que tratamos seus dados e com qual base legal",
    resumo:
      "A LGPD exige uma hipótese legal para cada tratamento. Esta é a nossa lista completa.",
    blocos: [
      {
        tipo: "paragrafo",
        texto:
          "Todo tratamento de dados pessoais realizado pela G Compass se apoia em uma das hipóteses legais dos arts. 7º e 11 da LGPD. A tabela abaixo relaciona cada finalidade à sua base legal correspondente.",
      },
      {
        tipo: "tabela",
        colunas: ["Finalidade", "Dados envolvidos", "Base legal (LGPD)"],
        linhas: [
          [
            "Responder a solicitações de contato, orçamento e diagnóstico",
            "Identificação, contato e qualificação comercial",
            "Procedimentos preliminares relacionados a contrato, a pedido do titular (art. 7º, V)",
          ],
          [
            "Elaborar propostas comerciais e executar os serviços contratados",
            "Identificação, contato, qualificação comercial e comunicação",
            "Execução de contrato (art. 7º, V)",
          ],
          [
            "Enviar comunicações de marketing, conteúdos e novidades",
            "Nome e e-mail",
            "Consentimento (art. 7º, I), revogável a qualquer momento",
          ],
          [
            "Medir audiência, entender o uso do site e melhorar nossas páginas",
            "Registros de acesso e cookies analíticos",
            "Consentimento para cookies não essenciais (art. 7º, I) e legítimo interesse para métricas agregadas (art. 7º, IX)",
          ],
          [
            "Exibir anúncios e mensurar campanhas em plataformas de terceiros",
            "Identificadores de cookies e registros de navegação",
            "Consentimento (art. 7º, I)",
          ],
          [
            "Garantir a segurança do site, prevenir fraudes e abusos",
            "Registros de conexão e acesso",
            "Legítimo interesse (art. 7º, IX) e cumprimento de obrigação legal (art. 7º, II)",
          ],
          [
            "Guardar registros de acesso a aplicações de internet",
            "Endereço IP, data e hora",
            "Cumprimento de obrigação legal — art. 15 do Marco Civil da Internet (art. 7º, II)",
          ],
          [
            "Exercer direitos em processo judicial, administrativo ou arbitral",
            "Conforme necessário ao caso",
            "Exercício regular de direitos (art. 7º, VI)",
          ],
          [
            "Cumprir obrigações fiscais, contábeis e regulatórias",
            "Dados de contratação e faturamento",
            "Cumprimento de obrigação legal ou regulatória (art. 7º, II)",
          ],
        ],
      },
      {
        tipo: "destaque",
        titulo: "Sobre o legítimo interesse",
        texto:
          "Quando nos apoiamos no legítimo interesse, avaliamos previamente se a finalidade é concreta e legítima, se o tratamento é necessário para alcançá-la e se suas expectativas e direitos fundamentais são preservados, adotando medidas para mitigar riscos. Você pode solicitar informações sobre essa avaliação ou se opor ao tratamento pelo canal da seção 10.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Não utilizamos seus dados para decisões automatizadas que afetem seus interesses, incluindo perfis de crédito ou de personalidade. Caso isso venha a ocorrer, você terá direito de solicitar revisão, nos termos do art. 20 da LGPD.",
      },
    ],
  },
  {
    id: "compartilhamento",
    numero: "5",
    titulo: "Com quem compartilhamos seus dados",
    resumo: "Nossos operadores, o que cada um faz e por que estão nessa lista.",
    blocos: [
      {
        tipo: "destaque",
        titulo: "Nós não vendemos seus dados",
        texto:
          "A G Compass não comercializa, aluga nem cede dados pessoais a terceiros para fins publicitários próprios desses terceiros. O compartilhamento ocorre apenas nas hipóteses descritas abaixo.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Para operar o site e o atendimento comercial, contamos com fornecedores que tratam dados em nosso nome, na condição de operadores, seguindo nossas instruções e obrigados contratualmente a proteger essas informações:",
      },
      {
        tipo: "tabela",
        colunas: ["Fornecedor", "Para que serve", "Dados acessados"],
        linhas: [
          [
            "Vercel Inc.",
            "Hospedagem do site e métricas de audiência (Vercel Analytics)",
            "Registros de conexão e acesso, métricas agregadas de navegação",
          ],
          [
            "FormSubmit",
            "Encaminhamento por e-mail das respostas dos formulários e diagnósticos",
            "Dados que você preenche nos formulários",
          ],
          [
            "Google LLC",
            "E-mail corporativo (Gmail) e, quando ativos, Google Analytics e Google Ads",
            "Comunicações enviadas a nós e identificadores de navegação",
          ],
          [
            "Meta Platforms, Inc.",
            "WhatsApp Business para atendimento e, quando ativos, anúncios e mensuração (Meta Pixel)",
            "Número de telefone, conteúdo das mensagens e identificadores de navegação",
          ],
          [
            "Sanity.io",
            "Gerenciamento de conteúdo editorial do blog",
            "Não acessa dados pessoais de visitantes",
          ],
        ],
        legenda:
          "Ferramentas de publicidade e analytics de terceiros só são ativadas mediante o seu consentimento no banner de cookies.",
      },
      {
        tipo: "paragrafo",
        texto: "Também poderemos compartilhar dados pessoais:",
      },
      {
        tipo: "lista",
        itens: [
          "com autoridades públicas, judiciais ou administrativas, quando houver determinação legal, requisição judicial ou ordem de autoridade competente;",
          "com advogados, auditores e contadores, quando necessário ao exercício regular de direitos ou ao cumprimento de obrigações legais;",
          "em caso de reorganização societária, fusão, aquisição ou venda de ativos, hipótese em que a parte adquirente ficará sujeita a esta política, e você será informado sobre qualquer alteração relevante de finalidade.",
        ],
      },
    ],
  },
  {
    id: "transferencia-internacional",
    numero: "6",
    titulo: "Transferência internacional de dados",
    resumo:
      "Parte dos nossos fornecedores está fora do Brasil. Veja como isso é feito de forma regular.",
    blocos: [
      {
        tipo: "paragrafo",
        texto:
          "Alguns dos fornecedores listados na seção 5 estão sediados ou mantêm servidores fora do Brasil, especialmente nos Estados Unidos. Por isso, seus dados podem ser transferidos e processados no exterior.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Essas transferências ocorrem em conformidade com o Capítulo V da LGPD (arts. 33 a 36) e com o Regulamento de Transferência Internacional de Dados aprovado pela Resolução CD/ANPD nº 19/2024, apoiadas, conforme o caso, em cláusulas-padrão contratuais adotadas pela ANPD, em cláusulas contratuais específicas com garantias equivalentes às da legislação brasileira, ou na necessidade de execução de contrato ou de procedimentos preliminares a pedido do titular.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Independentemente do país de processamento, exigimos que os fornecedores mantenham nível de proteção compatível com o previsto na LGPD. Você pode solicitar informações sobre as garantias adotadas pelo canal da seção 10.",
      },
    ],
  },
  {
    id: "retencao",
    numero: "7",
    titulo: "Por quanto tempo guardamos seus dados",
    resumo: "Prazos de retenção por categoria e o que acontece ao final deles.",
    blocos: [
      {
        tipo: "paragrafo",
        texto:
          "Mantemos os dados pessoais apenas pelo tempo necessário ao cumprimento das finalidades para as quais foram coletados, salvo quando houver obrigação legal ou necessidade de exercício de direitos que justifique prazo maior.",
      },
      {
        tipo: "tabela",
        colunas: ["Categoria", "Prazo de retenção", "Motivo"],
        linhas: [
          [
            "Contatos e diagnósticos que não viraram contrato",
            "Até 24 meses após o último contato",
            "Prazo comercial razoável para retomada da negociação",
          ],
          [
            "Dados de clientes e contratos",
            "5 anos após o término do contrato",
            "Prazo prescricional para cobrança de dívidas líquidas (art. 206, §5º, I, do Código Civil)",
          ],
          [
            "Documentos fiscais e contábeis",
            "5 anos",
            "Legislação fiscal e tributária aplicável",
          ],
          [
            "Registros de acesso a aplicações de internet",
            "6 meses",
            "Art. 15 do Marco Civil da Internet (Lei nº 12.965/2014)",
          ],
          [
            "Base de e-mail marketing",
            "Até a revogação do consentimento",
            "Consentimento revogável a qualquer momento",
          ],
          [
            "Registros de consentimento de cookies",
            "12 meses, quando então a escolha é solicitada novamente",
            "Comprovação do consentimento (art. 8º, §1º, da LGPD)",
          ],
        ],
      },
      {
        tipo: "paragrafo",
        texto:
          "Encerrado o prazo aplicável, os dados são eliminados ou anonimizados de forma irreversível. Dados anonimizados deixam de ser dados pessoais e podem ser mantidos para fins estatísticos, sem possibilidade de identificação.",
      },
    ],
  },
  {
    id: "cookies",
    numero: "8",
    titulo: "Cookies e tecnologias semelhantes",
    resumo:
      "O que são, quais categorias usamos e como você controla cada uma delas.",
    blocos: [
      {
        tipo: "paragrafo",
        texto:
          "Cookies são pequenos arquivos gravados no seu navegador quando você acessa um site. Também podemos usar tecnologias equivalentes, como pixels, tags e armazenamento local (localStorage). Eles permitem que o site funcione corretamente, que possamos medir audiência e, quando você autoriza, que campanhas publicitárias sejam mensuradas.",
      },
      {
        tipo: "tabela",
        colunas: ["Categoria", "Para que serve", "Precisa de consentimento?"],
        linhas: [
          [
            "Essenciais",
            "Fazem o site funcionar: segurança, balanceamento de carga e memória da sua escolha de cookies.",
            "Não. Sem eles o site não opera adequadamente.",
          ],
          [
            "Analíticos / de desempenho",
            "Medem visitas, páginas mais acessadas e origem do tráfego, para melhorarmos o conteúdo.",
            "Sim, quando permitem identificação individual.",
          ],
          [
            "Funcionais",
            "Lembram preferências como idioma e dados já preenchidos em formulários.",
            "Sim.",
          ],
          [
            "Publicidade / marketing",
            "Mensuram campanhas e permitem exibir anúncios mais relevantes em plataformas como Google e Meta.",
            "Sim.",
          ],
        ],
      },
      {
        tipo: "destaque",
        titulo: "Como você controla",
        texto:
          "Na sua primeira visita, exibimos um banner em que você pode aceitar todos os cookies, recusar todos os não essenciais ou escolher categoria por categoria. Recusar é tão fácil quanto aceitar, e o site continua funcionando normalmente. Você pode rever sua decisão quando quiser pelo botão “Preferências de cookies”, no rodapé desta página.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Além disso, todos os navegadores permitem bloquear ou apagar cookies nas configurações. Bloquear os essenciais pode comprometer o funcionamento de partes do site.",
      },
    ],
  },
  {
    id: "seguranca",
    numero: "9",
    titulo: "Como protegemos seus dados",
    resumo:
      "As medidas técnicas e administrativas que adotamos e o que fazemos diante de um incidente.",
    blocos: [
      {
        tipo: "paragrafo",
        texto:
          "Adotamos medidas de segurança técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão, conforme o art. 46 da LGPD. Entre elas:",
      },
      {
        tipo: "lista",
        itens: [
          "criptografia em trânsito por HTTPS/TLS em todas as páginas, com HSTS habilitado;",
          "cabeçalhos de segurança contra clickjagem, injeção de conteúdo e vazamento de referenciador;",
          "controle de acesso restrito ao pessoal que precisa dos dados para trabalhar, com autenticação em dois fatores nas contas críticas;",
          "seleção de fornecedores que demonstrem padrões adequados de segurança da informação;",
          "coleta mínima de dados e revisão periódica das informações mantidas.",
        ],
      },
      {
        tipo: "paragrafo",
        texto:
          "Nenhum sistema é totalmente imune. Caso ocorra incidente de segurança que possa acarretar risco ou dano relevante a você, comunicaremos o fato à ANPD e a você em prazo razoável, na forma do art. 48 da LGPD e do Regulamento de Comunicação de Incidente de Segurança (Resolução CD/ANPD nº 15/2024), informando a natureza dos dados afetados, os riscos envolvidos e as medidas adotadas.",
      },
    ],
  },
  {
    id: "direitos",
    numero: "10",
    titulo: "Seus direitos como titular",
    resumo: "O que você pode exigir de nós e como fazer isso.",
    blocos: [
      {
        tipo: "paragrafo",
        texto:
          "A LGPD garante a você, a qualquer momento e mediante requisição gratuita, os seguintes direitos sobre seus dados pessoais (arts. 17 a 22):",
      },
      {
        tipo: "listaNumerada",
        itens: [
          "Confirmação da existência de tratamento — saber se tratamos dados a seu respeito.",
          "Acesso aos dados — obter cópia dos dados que mantemos sobre você.",
          "Correção de dados incompletos, inexatos ou desatualizados.",
          "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei.",
          "Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa e observados os segredos comercial e industrial.",
          "Eliminação dos dados tratados com base no seu consentimento, ressalvadas as hipóteses de guarda previstas no art. 16 da LGPD.",
          "Informação sobre as entidades públicas e privadas com as quais compartilhamos seus dados.",
          "Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa.",
          "Revogação do consentimento, a qualquer momento, por procedimento gratuito e facilitado.",
          "Oposição a tratamento realizado com fundamento em uma das hipóteses de dispensa de consentimento, em caso de descumprimento da lei.",
          "Revisão de decisões tomadas unicamente com base em tratamento automatizado que afetem seus interesses.",
        ],
      },
      {
        tipo: "destaque",
        titulo: "Como exercer seus direitos",
        texto: `Envie um pedido para ${CONTROLADOR.emailDpo} com o assunto “LGPD — Direitos do Titular”, descrevendo o que deseja. Responderemos em até 15 dias. Para sua proteção, poderemos solicitar informações adicionais que confirmem sua identidade antes de atender ao pedido — essas informações serão usadas apenas para essa finalidade.`,
      },
      {
        tipo: "paragrafo",
        texto:
          "Se entender que sua solicitação não foi adequadamente atendida, você tem o direito de peticionar à Autoridade Nacional de Proteção de Dados (ANPD), por meio do site gov.br/anpd, e também aos órgãos de defesa do consumidor.",
      },
    ],
  },
  {
    id: "encarregado",
    numero: "11",
    titulo: "Encarregado pelo tratamento de dados (DPO)",
    resumo: "Quem é e como falar com ele.",
    blocos: [
      {
        tipo: "paragrafo",
        texto:
          "Em atendimento ao art. 41 da LGPD, a G Compass indica como encarregado pelo tratamento de dados pessoais:",
      },
      {
        tipo: "lista",
        itens: [
          `Encarregado: ${CONTROLADOR.encarregado}`,
          `E-mail: ${CONTROLADOR.emailDpo}`,
          `Controlador: ${CONTROLADOR.razaoSocial} — CNPJ ${CONTROLADOR.cnpj}`,
        ],
      },
      {
        tipo: "paragrafo",
        texto:
          "O encarregado é responsável por aceitar reclamações e comunicações de titulares, prestar esclarecimentos, adotar providências, receber comunicações da ANPD e orientar a equipe sobre as práticas de proteção de dados.",
      },
    ],
  },
  {
    id: "alteracoes",
    numero: "12",
    titulo: "Alterações desta política",
    resumo: "Como avisamos você quando algo muda.",
    blocos: [
      {
        tipo: "paragrafo",
        texto:
          "Esta política pode ser atualizada para refletir mudanças na legislação, em nossos serviços ou nas ferramentas que utilizamos. A data da última atualização e o número da versão estarão sempre indicados no início do documento.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Quando a alteração implicar mudança relevante de finalidade ou exigir novo consentimento, comunicaremos você por meio de aviso em destaque no site ou por e-mail, quando dispusermos desse dado, antes que a mudança produza efeitos.",
      },
    ],
  },
  {
    id: "legislacao",
    numero: "13",
    titulo: "Legislação aplicável e foro",
    resumo: "As leis que regem este documento.",
    blocos: [
      {
        tipo: "paragrafo",
        texto:
          "Esta Política de Privacidade é regida pelas leis da República Federativa do Brasil, em especial pela Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais), pela Lei nº 12.965/2014 (Marco Civil da Internet) e seu Decreto regulamentador nº 8.771/2016, pela Lei nº 8.078/1990 (Código de Defesa do Consumidor) e pelos regulamentos editados pela Autoridade Nacional de Proteção de Dados.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Fica eleito o foro do domicílio do titular para dirimir eventuais controvérsias decorrentes desta política, conforme faculta a legislação consumerista.",
      },
    ],
  },
];
