import { Translations } from './types';

export const ptTranslations: Translations = {
  header: {
    nav: {
      problem: 'O Diagnóstico',
      system: 'O Sistema',
      tiers: 'A Jornada',
      exclusivity: 'O Acesso',
      founders: 'Núcleo Fundador',
      experience: 'Experiência',
      faq: 'FAQ',
    },
    cta: 'Iniciar Candidatura',
    indexTitle: 'Índice Institucional',
    tagline: 'TITANS SOCIETY · INTENTIONAL BUSINESS NETWORKING',
    languageToggleAria: 'Alterar idioma',
  },
  hero: {
    signature: 'INTENTIONAL BUSINESS NETWORKING',
    headlinePart1: 'Você já construiu.',
    headlinePart2: 'Agora escolha com quem crescer.',
    subtitle: 'Uma rede empresarial construída sobre confiança, mérito e relações estratégicas.',
    description:
      'A TITANS SOCIETY transforma relacionamentos intencionais em um sistema estruturado de confiança, referências qualificadas e oportunidades empresariais.',
    startCandidacy: 'Iniciar Candidatura',
    exploreSystem: 'Explorar o Sistema TITAN →',
    chessAlt: 'Escultura da peça de xadrez dourada da TITANS SOCIETY',
    architectureAlt: 'Monumental dark architecture',
  },
  problem: {
    eyebrow: 'O Cenário Contemporâneo',
    headlinePart1: 'O mundo está conectado.',
    headlinePart2: 'Mas confiança continua sendo rara.',
    imageAlt: 'Distrito financeiro noturno — O custo invisível do networking convencional',
    imageLabelLeft: 'Ambiente Corporativo',
    imageLabelRight: 'A Fricção da Desconfiança',
    challenges: [
      {
        index: '01',
        title: 'Solidão Decisória',
        manifesto: 'À medida que a operação cresce, o círculo de interlocutores genuínos encolhe criticamente.',
        elaboration:
          'Líderes de alto escalão não encontram pares com os mesmos dilemas de governança, patrimônio e risco societário em conversas casuais. A tomada de decisões críticas torna-se um fardo solitário quando não há um ambiente seguro, desprovido de interesses velados, para debater estratégia.',
      },
      {
        index: '02',
        title: 'Ruído e Desconfiança',
        manifesto: 'Eventos massificados e grupos abertos tornaram-se feiras predatórias de prospecção comercial.',
        elaboration:
          'A ausência de curadoria atrai abordagens superficiais e trocas vazias de cartões. Empresários experientes rapidamente se retiram de ambientes onde o tempo é desperdiçado e a confiança prévia não existe.',
      },
      {
        index: '03',
        title: 'Referências sem Método',
        manifesto: 'Indicações de negócios dependentes do acaso geram resultados imprevisíveis e frágeis.',
        elaboration:
          'Sem metodologia estruturada, sem compromisso formal de reciprocidade e sem métricas de acompanhamento, o capital relacional de empresários consolidados é subaproveitado, limitando o potencial de alianças estratégicas de alto valor.',
      },
    ],
    guidingPrincipleLabel: 'Princípio Orientador',
    guidingPrincipleQuote: 'Pessoas em primeiro lugar.',
    guidingPrincipleHighlight: 'Negócios como consequência.',
  },
  system: {
    eyebrow: 'A Engenharia da Confiança',
    title: 'O Sistema TITAN',
    description:
      'Uma engrenagem proprietária de sete vetores integrados. Selecione um elemento para inspecionar seus fundamentos operacionais.',
    vectorLabel: 'Vetor Institucional',
    operationalImpactLabel: 'Impacto Operacional',
    applicationMechanismLabel: 'Mecanismo de Aplicação',
    statusActive: 'Ativo',
    statusView: 'Ver',
    pillars: [
      {
        id: 1,
        title: 'Curadoria',
        shortDesc: 'Filtro prévio de idoneidade, porte e valores éticos inegociáveis.',
        detailedDesc:
          'Nenhum membro ingressa por simples adesão financeira. Toda admissão passa por análise de histórico executivo, checagem de reputação e validação de alinhamento com a cultura da sociedade.',
        operationalImpact:
          'Garante que cada assento seja ocupado por líderes que já construíram resultados sólidos e respeitam o tempo alheio.',
        ritualDetail:
          'Avaliação documental e sabatina com membros seniores antes de qualquer convite formal.',
      },
      {
        id: 2,
        title: 'Exclusividade por Especialidade',
        shortDesc: 'Uma única cadeira protegida por segmento em cada núcleo.',
        detailedDesc:
          'Eliminamos qualquer disputa interna ou concorrência direta. Ao assegurar exclusividade de nicho, os membros compartilham oportunidades e inteligência com total transparência e segurança.',
        operationalImpact:
          'Transforma o grupo em uma força-tarefa multidisciplinar, onde cada empresário é a referência máxima de seu setor.',
        ritualDetail:
          'Mapeamento minucioso do Código Nacional de Atividade e definição estrita do escopo de atuação.',
      },
      {
        id: 3,
        title: 'Ritual de Reunião',
        shortDesc: 'Agenda cirúrgica, pontual e focada em inteligência executiva.',
        detailedDesc:
          'Reuniões com cronômetro rigoroso e estrutura protocolar. Sem conversas dispersas, discursos autoelogiosos ou perda de tempo. Cada minuto é orquestrado para gerar direcionamento tático.',
        operationalImpact:
          'Máxima eficiência e previsibilidade na agenda de empresários que comandam operações complexas.',
        ritualDetail:
          'Ordem do dia dividida em blocos de prestação de contas, apresentação estratégica e compromissos formais.',
      },
      {
        id: 4,
        title: 'Referências e Encontros Individuais',
        shortDesc: 'Metodologia de encontros 1-a-1 para aprofundamento e sinergia.',
        detailedDesc:
          'Negócios relevantes não nascem em apresentações de palco, mas em conversas particulares entre pares. O Sistema TITAN estabelece dinâmicas individuais com roteiro de investigação e confiança mútua.',
        operationalImpact:
          'Transforma networking casual em pipeline qualificado de negócios de alto tíquete.',
        ritualDetail:
          'Agenda de imersão bilateral mensal com registro formal de compromissos e pontes geradas.',
      },
      {
        id: 5,
        title: 'Placar TITAN',
        shortDesc: 'Métricas objetivas de reciprocidade, pontualidade e engajamento.',
        detailedDesc:
          'A confiança precisa ser mensurada por ações tangíveis. O Placar TITAN monitora assiduidade, qualidade de referências concedidas e cumprimento de acordos estabelecidos entre os membros.',
        operationalImpact:
          'Cria autorregulação natural: membros de alta entrega se destacam, e a inércia é prontamente identificada.',
        ritualDetail:
          'Dashboard trimestral auditado pela governança interna com critérios claros de desempenho.',
      },
      {
        id: 6,
        title: 'Formação Contínua',
        shortDesc: 'Masterclasses, governança, macroeconomia e inteligência estratégica.',
        detailedDesc:
          'Líderes de alto escalão necessitam de reflexões que ampliem sua visão de mundo. Sessões exclusivas de debate sobre tendências globais, gestão de patrimônio e estrutura societária.',
        operationalImpact:
          'Elevação contínua do repertório dos membros e alinhamento às melhores práticas globais de mercado.',
        ritualDetail:
          'Painéis trimestrais com convidados de destaque nacional e estudos de caso confidenciais.',
      },
      {
        id: 7,
        title: 'Progressão por Mérito e Convite',
        shortDesc: 'Evolução de níveis condicionada a valor gerado e endosso institucional.',
        detailedDesc:
          'A transição entre os níveis CONNECT, COUNCIL e GLOBAL não ocorre por mero tempo de casa ou taxa extra. Ela exige histórico comprovado de integridade, contribuição com o ecossistema e convite formal do conselho.',
        operationalImpact:
          'Preserva a densidade intelectual e o respeito mútuo em todos os escalões da sociedade.',
        ritualDetail:
          'Parecer do Comitê de Governança e avaliação cruzada de conduta institucional.',
      },
    ],
  },
  tiers: {
    eyebrow: 'A Jornada Institucional',
    title: 'Três Escalas de Influência',
    description:
      'A expansão das relações empresariais através de três dimensões de governança, alcance e interlocução executiva.',
    frequencyLabel: 'Frequência:',
    quorumLabel: 'Quórum:',
    guidelinesButton: 'Diretrizes & Critérios →',
    applyButtonPrefix: 'Candidatar-se ao',
    progressionNote:
      'O ingresso e a eventual transição entre os níveis CONNECT, COUNCIL e GLOBAL não são concedidos automaticamente por tempo de permanência ou aporte financeiro. O acesso a cada estágio depende estritamente do cumprimento dos critérios de governança, reputação de mercado e parecer colegiado da TITANS SOCIETY.',
    modalStatute: 'ESTATUTO DE GOVERNANÇA',
    modalLevelPrefix: 'Nível',
    modalCriteriaLabel: 'Critérios de Admissão:',
    modalClose: 'Fechar',
    modalProceed: 'Avançar com Candidatura',
    tiersList: [
      {
        id: 'connect',
        name: 'CONNECT',
        scope: 'REGIONAL',
        scale: '01 · Nível Regional',
        tagline: 'A fortaleza local de confiança e geração qualificada de negócios.',
        narrative:
          'A fortaleza local de confiança inegociável. Uma única cadeira por especialidade blinda o nicho de mercado e catalisa referências qualificadas de alto valor no polo metropolitano.',
        meetingFrequency: 'Encontros Mensais Presenciais',
        capacityRule: '1 vaga por especialidade em cada núcleo geográfico',
        description:
          'O ponto de partida da experiência TITANS SOCIETY. Um núcleo seleto de empresários consolidados na sua região metropolitana, operando com exclusividade de setor e metodologia ativa de referências.',
        curationCriteria: [
          'Empresas operantes com faturamento e solidez comprovados',
          'Exclusividade irrestrita de segmento de atuação',
          'Compromisso com assiduidade e o ritual executivo mensal',
          'Capacidade real de absorver e originar indicações de alto padrão',
        ],
        strategicFocus:
          'Estruturação de alianças táticas regionais, blindagem de nicho e geração direta de referências de alto valor.',
      },
      {
        id: 'council',
        name: 'COUNCIL',
        scope: 'NACIONAL',
        scale: '02 · Nível Nacional',
        tagline: 'Interlocução de alto nível entre polos econômicos nacionais.',
        narrative:
          'A articulação estratégica entre múltiplos centros de decisão econômica. Diálogos de governança, fusões, alianças interestaduais e comitês setoriais de alta densidade.',
        meetingFrequency: 'Encontros Bimestrais Estruturados',
        capacityRule: 'Vagas restritas por comitê setorial multirregional',
        description:
          'Para líderes cujos negócios ultrapassam fronteiras estaduais e demandam interlocução com outros grandes centros econômicos do país. Conexão entre diretores, conselheiros e acionistas de múltiplos estados.',
        curationCriteria: [
          'Histórico exemplar de participação e reputação no nível CONNECT ou convite direto do conselho',
          'Atuação empresarial com alcance nacional ou interesse em expansão interestadual',
          'Maturidade de governança corporativa e sucessão patrimonial',
          'Aprovação unânime pelo Comitê Nacional de Admissão',
        ],
        strategicFocus:
          'Expansão de mercado, fusões, parcerias societárias e debates estratégicos de nível macroeconômico.',
      },
      {
        id: 'global',
        name: 'GLOBAL',
        scope: 'INTERNACIONAL',
        scale: '03 · Nível Internacional',
        tagline: 'Acesso transfronteiriço aos principais polos de decisão mundiais.',
        narrative:
          'A amplitude sobre as capitais financeiras mundiais. Relações com fundos, ecossistemas de inovação no exterior, missões institucionais e posicionamento sem limites territoriais.',
        meetingFrequency: 'Encontros Trimestrais & Missões Estratégicas',
        capacityRule: 'Quórum estritamente restrito e confidencial',
        description:
          'A dimensão máxima da TITANS SOCIETY. Relacionamento com ecossistemas de inovação, fundos de investimento e empresários sediados em praças financeiras globais (América do Norte, Europa e Ásia).',
        curationCriteria: [
          'Reconhecimento institucional de liderança de setor',
          'Internacionalização de operações, investimentos cross-border ou alocação patrimonial global',
          'Endosso formal de fundadores e conselheiros seniores',
          'Disponibilidade para missões executivas e cúpulas internacionais',
        ],
        strategicFocus:
          'Posicionamento global, diversificação patrimonial internacional e conexões com family offices e conselhos estrangeiros.',
      },
    ],
  },
  exclusivity: {
    badge: 'Critério de Admissão & Blindagem de Cadeira',
    headlinePart1: 'Não é sobre ter acesso a todos.',
    headlinePart2: 'É sobre construir acesso às pessoas certas.',
    description:
      'A proteção do ecossistema é o maior ativo entregue a cada membro. Quatro alicerces inegociáveis guardam as portas da TITANS SOCIETY.',
    imageAlt: 'The Inner Gate — Portal monumental em pedra mineral negra e metal dourado',
    portalName: 'THE INNER GATE',
    portalSubtitle: '· AUDITORIA DE REPUTAÇÃO E CONDUTA',
    portalBadge: 'CURADORIA 100% HUMANA',
    principles: [
      {
        index: '01',
        title: 'CURADORIA',
        subtitle: 'Filtro Humano de Idoneidade',
        desc: 'Nenhum aporte financeiro substitui o histórico de integridade. Avaliamos a maturidade da operação, a reputação de mercado e o alinhamento ético com os princípios da sociedade.',
      },
      {
        index: '02',
        title: 'REPUTAÇÃO',
        subtitle: 'O Capital Intangível Inegociável',
        desc: 'No topo dos negócios, a palavra de um líder precede qualquer contrato. Consultamos pares e histórico societário para assegurar que cada assento seja ocupado por quem honra seus compromissos.',
      },
      {
        index: '03',
        title: 'COMPROMISSO',
        subtitle: 'Presença e Generosidade Estratégica',
        desc: 'A sociedade não tolera espectadores. Exigimos pontualidade cirúrgica nos rituais, assiduidade comprovada e disposição ativa para abrir portas aos demais membros.',
      },
      {
        index: '04',
        title: 'EXCLUSIVIDADE',
        subtitle: 'Blindagem de Cadeira por Segmento',
        desc: 'Uma única organização por especialidade econômica em cada núcleo. Eliminamos qualquer atrito de concorrência interna, garantindo canal aberto e direcionamento irrestrito de referências.',
      },
    ],
    footnote:
      'A disponibilidade de cadeiras é rigorosamente auditada antes de qualquer convite formal ou abertura de sabatina.',
    cta: 'Solicitar Avaliação',
  },
  founders: {
    badge: 'O Núcleo Fundador · O Quórum Pioneiro',
    headlinePart1: 'Algumas pessoas não entram em uma história.',
    headlinePart2: 'Elas ajudam a escrevê-la.',
    subtitle:
      'O nascimento de uma instituição: os pioneiros que moldam os alicerces, o tom ético e o padrão de excelência de uma nova praça.',
    imageAlt:
      'Mesa de pedra negra com a cadeira central vazia simbolizando responsabilidade e liderança fundadora',
    plaqueTitle: 'O ASSENTO FUNDACIONAL',
    plaqueSubtitle: '· RESPONSABILIDADE, VISÃO E CONSTRUÇÃO INSTITUCIONAL',
    plaqueBadge: 'QUÓRUM INAUGURAL RESTRITO',
    roleTitle: 'O Papel do Núcleo Fundador',
    roleDesc:
      'Quando a TITANS SOCIETY inaugura suas operações em um novo polo econômico, os fundadores são os guardiões inegociáveis dos padrões de conduta. Sua solidez moral atrai e valida os próximos líderes que ocuparão as cadeiras exclusivas.',
    roleFootnote:
      '*O ingresso no Núcleo Fundador está sujeito à aprovação institucional do conselho executivo após sabatina individual. Não há concessão de benefícios societários ou financeiros na instituição.',
    commitments: [
      {
        index: '01',
        title: 'ASSIDUIDADE',
        desc: 'Presença prioritária e pontualidade cirúrgica nos rituais de conselho, estabelecendo o padrão de disciplina executiva para todos os futuros membros.',
      },
      {
        index: '02',
        title: 'ZELO PELA REPUTAÇÃO',
        desc: 'Proteção irrestrita da integridade, do sigilo absoluto das trocas e do prestígio da marca institucional em sua praça de atuação.',
      },
      {
        index: '03',
        title: 'GENEROSIDADE ESTRATÉGICA',
        desc: 'Disposição ativa para compartilhar inteligência, abrir portas qualificadas e fomentar oportunidades de alto impacto com reciprocidade genuína.',
      },
      {
        index: '04',
        title: 'PARTICIPAÇÃO INSTITUCIONAL',
        desc: 'Voz consultiva na sabatina e na curadoria de novos pretendentes, assegurando que o ecossistema preserve sua densidade intelectual e ética.',
      },
    ],
    cta: 'Conhecer o Núcleo Fundador',
    ctaNote: 'Avaliação direta pelo conselho executivo de governança.',
  },
  experience: {
    badge: 'Atmosferas Conceituais · Cenários Institucionais',
    title: 'A Experiência TITANS',
    subtitle:
      'Territórios conceituais onde a arquitetura, a sobriedade e a discrição servem de palco para grandes articulações.',
    disclaimer: '*Ambientes conceituais representando a atmosfera dos rituais executivos',
    environments: [
      {
        id: 'boardroom',
        order: '01',
        atmosphereLabel: 'ATMOSFERA ESTRATÉGICA',
        title: 'THE BOARDROOM',
        subtitle: 'O Santuário da Decisão Estratégica',
        description:
          'Ambientes desenhados para acolher reuniões de alto impacto, onde temas complexos de governança, fusões e projeções de longo prazo são tratados com sobriedade e foco absoluto.',
        architecturalNote:
          'Madeira escura ebanizada, iluminação linear rasgada e isolamento acústico absoluto.',
        imagePath: '/assets/images/boardroom_executive_1791896596094.jpg',
        alt: 'THE BOARDROOM - Sala de conselho executivo com vista para o horizonte noturno',
      },
      {
        id: 'inner-circle',
        order: '02',
        atmosphereLabel: 'ESPAÇO RESERVADO',
        title: 'THE INNER CIRCLE',
        subtitle: 'O Refúgio Privado dos Líderes',
        description:
          'Espaço reservado onde a guarda pode ser baixada entre pares idôneos. Um ambiente de confidencialidade onde vulnerabilidades de liderança e dilemas reais são compartilhados sem julgamentos.',
        architecturalNote:
          'Painéis ripados em carvão mineral, couro envelhecido e meia-luz cinematográfica intimista.',
        imagePath: '/assets/images/inner_circle_lounge_1791896599200.jpg',
        alt: 'THE INNER CIRCLE - Refúgio privado dos líderes',
      },
      {
        id: 'global-perspective',
        order: '03',
        atmosphereLabel: 'AMPLITUDE TRANSFRONTEIRIÇA',
        title: 'THE GLOBAL PERSPECTIVE',
        subtitle: 'O Horizonte Além das Fronteiras',
        description:
          'A elevação do olhar sobre os grandes centros de decisão mundiais. Conexão entre ecossistemas de capitais internacionais e lideranças preparadas para transações sem limites territoriais.',
        architecturalNote:
          'Vidro temperado fumê sobre o horizonte metropolitano ao cair da tarde.',
        imagePath: '/assets/images/global_perspective_1791896599228.jpg',
        alt: 'THE GLOBAL PERSPECTIVE - Visão panorâmica sobre centros financeiros',
      },
      {
        id: 'connection',
        order: '04',
        atmosphereLabel: 'O MOVIMENTO TÁTICO',
        title: 'THE CONNECTION',
        subtitle: 'A Precisão do Movimento Tático',
        description:
          'A analogia do xadrez materializada: cada encontro 1-a-1 é um movimento ponderado. Não se trata de pressa em fechar um contrato, mas de alinhar intenções para relações duradouras.',
        architecturalNote:
          'Mármore Nero Marquina com veios dourados e elementos de metal escovado de precisão.',
        imagePath: '/assets/images/hero_chess_monolith_1791896594267.jpg',
        alt: 'THE CONNECTION - O movimento estratégico calculado',
      },
    ],
    modalBadge: 'Atmosfera Conceitual',
    modalFooterLeft: 'TITANS SOCIETY · CENOGRAFIA CORPORATIVA',
    modalFooterRight: 'RESERVADO A MEMBROS HOMOLOGADOS',
  },
  form: {
    badge: 'Protocolo Executivo de Admissão · Confidencial',
    title: 'Submissão de Candidatura',
    subtitle:
      'Inicie o processo de auditoria de elegibilidade institucional. Cada assento é protegido por estrita exclusividade setorial.',
    successTitle: 'Candidatura Homologada no Sistema',
    protocolLabel: 'Número de Protocolo Institucional:',
    timestampLabel: 'Registro de Transmissão:',
    newSubmissionButton: 'Nova Submissão',
    errorAlertTitle: 'Atenção à transmissão:',
    unexpectedError: 'Ocorreu uma falha inesperada na transmissão. Por favor, tente novamente.',
    sidebarBadge: 'Protocolo de Auditoria',
    sidebarTitle: 'Acesso Sob Rigorosa Confidencialidade',
    sidebarQuote:
      'A entrada em uma instituição de prestígio começa pela precisão das informações e pelo respeito aos critérios compartilhados.',
    sidebarSteps: [
      '1. Avaliação preliminar de cadeira desocupada no segmento.',
      '2. Verificação de idoneidade, porte e valores éticos.',
      '3. Entrevista confidencial com a Secretaria Executiva e parecer de conselheiros.',
    ],
    sidebarChannel: 'CANAL DE ADMISSÃO',
    sidebarConfidentiality: 'SIGILO IRRESTRITO',
    formHeaderBadge: 'Ficha de Avaliação Executiva',
    requiredFieldsNote: '(*) Campos obrigatórios',
    fullNameLabel: 'Nome Completo *',
    fullNamePlaceholder: 'Ex.: Carlos Eduardo Menezes',
    emailLabel: 'E-mail Profissional *',
    emailPlaceholder: 'carlos@suaempresa.com.br',
    phoneLabel: 'Telefone / WhatsApp *',
    phonePlaceholder: '(11) 98765-4321',
    cityLabel: 'Cidade *',
    cityPlaceholder: 'São Paulo',
    stateLabel: 'UF *',
    statePlaceholder: 'SP',
    companyLabel: 'Empresa *',
    companyPlaceholder: 'Nome da organização',
    jobTitleLabel: 'Cargo / Posição *',
    jobTitlePlaceholder: 'CEO, Fundador, Diretor',
    segmentLabel: 'Segmento Empresarial *',
    segmentPlaceholder: 'Advocacia, Incorporação, etc.',
    websiteLabel: 'Site ou Perfil Profissional *',
    websitePlaceholder: 'linkedin.com/in/perfil ou site.com.br',
    interestLabel: 'Interesse Principal *',
    interestOptions: {
      connect: 'Candidatar-se ao CONNECT',
      founders: 'Conhecer o núcleo fundador',
      institution: 'Conhecer a instituição',
      info: 'Receber informações institucionais',
    },
    objectiveLabel: 'Objetivo ao Participar da TITANS SOCIETY *',
    objectivePlaceholder:
      'Descreva sua trajetória empresarial e o que busca construir junto à rede...',
    privacyConsentText:
      'Concordo com o tratamento dos meus dados corporativos fornecidos acima para avaliação de elegibilidade pela Secretaria Executiva da TITANS SOCIETY, de acordo com a ',
    privacyPolicyLink: 'Política de Privacidade',
    evaluationTimeNote: 'Avaliação em até 5 dias úteis.',
    submittingButton: 'Transmitindo ao Comitê...',
    submitButton: 'Submeter Candidatura',
    validation: {
      fullName: 'Informe seu nome completo (nome e sobrenome).',
      businessEmail: 'Informe um e-mail corporativo válido.',
      phone: 'Informe um telefone/WhatsApp válido com DDD (mínimo 10 dígitos).',
      city: 'Informe a sua cidade.',
      state: 'Informe o estado (UF).',
      companyName: 'Informe o nome da sua empresa.',
      jobTitle: 'Informe seu cargo ou posição na empresa.',
      businessSegment: 'Especifique o segmento de atuação da empresa.',
      websiteOrProfile: 'Informe o site da empresa ou perfil do LinkedIn.',
      objective: 'Descreva seu objetivo com ao menos 20 caracteres para avaliação do comitê.',
      consentPrivacy:
        'É necessário concordar com o tratamento dos dados pessoais conforme nossa Política de Privacidade.',
      reviewFields: 'Por favor, revise os campos do formulário antes de enviar.',
    },
    successResponsePrefix: 'Candidatura registrada com sucesso sob o protocolo institucional ',
    successResponseSuffix:
      '. Nossa Secretaria Executiva e o Comitê de Admissão iniciarão a análise confidencial.',
  },
  faq: {
    badge: 'Governança & Esclarecimentos Institucionais',
    title: 'Perguntas Frequentes',
    subtitle:
      'Esclarecimentos sobre governança, critérios de admissão e operação do Sistema TITAN.',
    items: [
      {
        id: 'faq-1',
        question: 'O que é a TITANS SOCIETY?',
        answer:
          'A TITANS SOCIETY é uma instituição de networking empresarial intencional de alto padrão. Ela reúne líderes consolidados sob os pilares da curadoria prévia, confiança recíproca, exclusividade por especialidade e desenvolvimento contínuo de relações de alto valor estratégico.',
      },
      {
        id: 'faq-2',
        question: 'Como funciona o Sistema TITAN?',
        answer:
          'O Sistema TITAN é a metodologia proprietária da instituição, composta por sete pilares integrados: Curadoria rigorosa, Exclusividade por especialidade, Ritual de reunião pontual, Referências com encontros 1-a-1, Placar TITAN de reciprocidade, Formação contínua de lideranças e Progressão por mérito e convite.',
      },
      {
        id: 'faq-3',
        question: 'Quem pode se candidatar?',
        answer:
          'Empresários, fundadores, sócios e executivos seniores com negócios estruturados, solidez comprovada de mercado e reputação ilibada. A candidatura está aberta a profissionais que valorizam relações de longo prazo e buscam interlocutores do mesmo nível de maturidade empresarial.',
      },
      {
        id: 'faq-4',
        question: 'Como funciona a seleção?',
        answer:
          'O processo é composto por três etapas: submissão da candidatura com histórico profissional, checagem prévia de disponibilidade de cadeira no segmento do candidato e entrevista confidencial com o Comitê de Admissão. Apenas perfis plenamente alinhados aos critérios institucionais recebem o convite.',
      },
      {
        id: 'faq-5',
        question: 'O que significa exclusividade por especialidade?',
        answer:
          'Em cada núcleo da TITANS SOCIETY, apenas uma única empresa representa um determinado segmento de mercado (ex.: uma única banca de advocacia tributária, uma única construtora de alto padrão, uma única empresa de tecnologia corporativa). Isso elimina atritos competitivos e canaliza todas as referências do nicho para aquele membro.',
      },
      {
        id: 'faq-6',
        question: 'Qual é a diferença entre CONNECT, COUNCIL e GLOBAL?',
        answer:
          'O CONNECT é o núcleo regional, com encontros mensais e foco na consolidação de alianças e negócios no polo metropolitano. O COUNCIL é a dimensão nacional, reunindo lideranças multirregionais em encontros bimestrais para expansão interestadual. O GLOBAL é a dimensão transfronteiriça, com encontros trimestrais e missões internacionais para conexões com mercados exteriores. O acesso a cada nível respeita critérios rigorosos de mérito e governança.',
      },
      {
        id: 'faq-7',
        question: 'Como funciona o núcleo fundador?',
        answer:
          'O Núcleo Fundador é composto por um grupo inaugural de empresários que estabelecem os alicerces culturais, éticos e operacionais da sociedade em uma nova praça ou conselho. Eles atuam diretamente no processo inicial de curadoria e têm papel determinante na consolidação da reputação da unidade.',
      },
      {
        id: 'faq-8',
        question: 'Como solicitar mais informações?',
        answer:
          'Você pode manifestar seu interesse através do formulário institucional nesta página selecionando a opção "Receber informações institucionais" ou "Conhecer a instituição". Nossa Secretaria Executiva fará o contato adequado de forma discreta e personalizada.',
      },
    ],
    footnoteText: 'Dúvidas específicas sobre assentos setoriais? ',
    footnoteLink: 'Consulte a Secretaria Executiva',
  },
  closing: {
    badge: 'O Próximo Movimento Estratégico',
    headlinePart1: 'Você já construiu.',
    headlinePart2: 'Agora escolha com quem crescer.',
    quote:
      'A grandeza de uma trajetória é medida pela qualidade dos aliados que você escolhe para percorrê-la.',
    cta: 'Iniciar Candidatura',
    tagline: 'TITANS SOCIETY · INTENTIONAL BUSINESS NETWORKING',
  },
  footer: {
    positioning: 'AUTORIDADE · DISCRIÇÃO · EXCLUSIVIDADE',
    navHeading: 'Navegação',
    navLinks: {
      problem: 'O Diagnóstico',
      system: 'O Sistema TITAN',
      tiers: 'Escalas de Influência',
      exclusivity: 'Critério de Admissão',
      founders: 'Núcleo Fundador',
      experience: 'A Experiência',
    },
    governanceHeading: 'Governança',
    governanceLinks: {
      application: 'Submissão de Candidatura',
      faq: 'FAQ Institucional',
      privacy: 'Política de Privacidade',
      secretariat: 'Secretaria Executiva',
    },
    conductHeading: 'Conduta e Sigilo',
    conductText:
      'Os debates, informações corporativas e conexões estabelecidas nos fóruns da TITANS SOCIETY operam sob estrita confidencialidade.',
    conductNote: 'Admissão condicionada a parecer colegiado favorável.',
    copyright: 'TITANS SOCIETY. Todos os direitos reservados.',
    privacyButton: 'Privacidade (LGPD)',
    secretariatButton: 'Secretaria Executiva',
  },
  modals: {
    privacy: {
      title: 'Política de Privacidade e Governança de Dados',
      terms: [
        {
          num: '1',
          heading: 'Finalidade do Tratamento de Dados',
          content:
            'Os dados corporativos fornecidos na ficha de candidatura (nome, e-mail corporativo, telefone, empresa, cargo, segmento e objetivo) destinam-se exclusivamente à avaliação de elegibilidade e conformidade de cadeira setorial pelo Comitê de Admissão da TITANS SOCIETY.',
        },
        {
          num: '2',
          heading: 'Confidencialidade e Sigilo Corporativo',
          content:
            'Todas as informações submetidas são tratadas como estritamente confidenciais. A TITANS SOCIETY não comercializa, não compartilha com terceiros e não utiliza os dados cadastrais para finalidades distintas da análise de candidatura e interlocução institucional.',
        },
        {
          num: '3',
          heading: 'Conformidade com a Legislação (LGPD)',
          content:
            'O titular dos dados possui o direito de solicitar a confirmação da existência de tratamento, a correção de dados incompletos ou a revogação de seu consentimento a qualquer momento, mediante solicitação formal direcionada à Secretaria Executiva.',
        },
        {
          num: '4',
          heading: 'Segurança da Informação',
          content:
            'Empregamos padrões elevados de governança de dados e criptografia em trânsito para salvaguardar a integridade das submissões contra acesso não autorizado.',
        },
        {
          num: '5',
          heading: 'Retenção de Dados',
          content:
            'Candidaturas não homologadas para assento imediato podem permanecer registradas em nosso banco de talentos executivos reservado para futuras aberturas de cadeiras, salvo manifestação expressa em contrário do titular.',
        },
      ],
      footerBadge: 'TITANS SOCIETY · GOVERNANÇA DE PRIVACIDADE',
      closeButton: 'Compreendido',
    },
    contact: {
      badge: 'CANAL INSTITUCIONAL',
      title: 'Secretaria Executiva',
      subtitle:
        'Atendimento reservado a membros, pretendentes e interlocuções institucionais.',
      emailLabel: 'E-mail Oficial',
      copyButton: 'Copiar',
      copiedButton: 'Copiado',
      note: 'Retorno formal em até 24 horas úteis sob protocolo confidencial.',
      closeButton: 'Concluir',
    },
  },
  languageGate: {
    chooseLanguage: 'Escolha seu idioma',
    chooseLanguageSub: 'Choose your language',
    portugueseTitle: 'PORTUGUÊS',
    portugueseCountries: 'Brasil & Portugal',
    portugueseButton: 'ENTRAR',
    englishTitle: 'ENGLISH',
    englishCountries: 'United States & United Kingdom',
    englishButton: 'ENTER',
    footnote: 'TITANS SOCIETY · INTENTIONAL BUSINESS NETWORKING',
  },
};
