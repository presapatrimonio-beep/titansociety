import { TitanPillar, MembershipTier, ConceptualEnvironment, FAQItem } from '../types';

export type Language = 'pt' | 'en';

export interface Translations {
  // Navigation & Header
  nav: {
    diagnosis: string;
    system: string;
    journey: string;
    access: string;
    founders: string;
    experience: string;
    faq: string;
    requestAccess: string;
    tagline: string;
  };
  // Hero
  hero: {
    badge: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    btnExplore: string;
    btnApply: string;
    stat1Label: string;
    stat1Desc: string;
    stat2Label: string;
    stat2Desc: string;
    stat3Label: string;
    stat3Desc: string;
    securitySeal: string;
  };
  // Problem
  problem: {
    tag: string;
    headline: string;
    subheadline: string;
    card1Number: string;
    card1Title: string;
    card1Desc: string;
    card1Impact: string;
    card2Number: string;
    card2Title: string;
    card2Desc: string;
    card2Impact: string;
    card3Number: string;
    card3Title: string;
    card3Desc: string;
    card3Impact: string;
    monolithQuote: string;
    monolithAuthor: string;
  };
  // System
  system: {
    tag: string;
    headline: string;
    subheadline: string;
    operationalImpact: string;
    institutionalRitual: string;
    pillars: TitanPillar[];
  };
  // Tiers
  tiers: {
    tag: string;
    headline: string;
    subheadline: string;
    viewDetails: string;
    closeDetails: string;
    curationCriteria: string;
    strategicFocus: string;
    frequency: string;
    capacity: string;
    selectTier: string;
    disclaimer: string;
    items: MembershipTier[];
  };
  // Exclusivity
  exclusivity: {
    tag: string;
    headline: string;
    subheadline: string;
    btnEvaluate: string;
    monolithLabel: string;
    monolithDesc: string;
    checkpoints: {
      step: string;
      name: string;
      headline: string;
      desc: string;
    }[];
  };
  // Founders
  founders: {
    tag: string;
    headline: string;
    subheadline: string;
    chairLabel: string;
    chairQuote: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    ctaHeadline: string;
    btnFounder: string;
  };
  // Experience
  experience: {
    tag: string;
    headline: string;
    subheadline: string;
    architecturalSignature: string;
    closeDetails: string;
    viewAtmosphere: string;
    environments: ConceptualEnvironment[];
  };
  // Application
  application: {
    tag: string;
    headline: string;
    subheadline: string;
    protocolNotice: string;
    protocolDesc: string;
    fullName: string;
    fullNamePlaceholder: string;
    corporateEmail: string;
    corporateEmailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    position: string;
    positionPlaceholder: string;
    revenue: string;
    revenuePlaceholder: string;
    industry: string;
    industryPlaceholder: string;
    interest: string;
    interestOption1: string;
    interestOption2: string;
    interestOption3: string;
    interestOption4: string;
    message: string;
    messagePlaceholder: string;
    privacyConsent1: string;
    privacyLink: string;
    privacyConsent2: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    protocolNumber: string;
    submissionDate: string;
    closeModal: string;
  };
  // FAQ
  faq: {
    tag: string;
    headline: string;
    subheadline: string;
    contactNotice: string;
    contactBtn: string;
    items: FAQItem[];
  };
  // Closing
  closing: {
    tag: string;
    headline: string;
    subheadline: string;
    ctaBtn: string;
  };
  // Footer
  footer: {
    tagline: string;
    values: string;
    navTitle: string;
    govTitle: string;
    contactTitle: string;
    executiveOffice: string;
    confidentialChannel: string;
    rights: string;
    privacyPolicy: string;
    terms: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      diagnosis: 'O Diagnóstico',
      system: 'O Sistema',
      journey: 'A Jornada',
      access: 'O Acesso',
      founders: 'Núcleo Fundador',
      experience: 'Experiência',
      faq: 'FAQ',
      requestAccess: 'SOLICITAR ACESSO',
      tagline: 'INSTITUIÇÃO GLOBAL DE NETWORKING EXECUTIVO',
    },
    hero: {
      badge: 'INSTITUIÇÃO EXECUTIVA DE ALTO PADRÃO',
      eyebrow: 'INTENTIONAL BUSINESS NETWORKING',
      titleLine1: 'ONDE O CAPITAL',
      titleLine2: 'ENCONTRA O CARÁTER.',
      subtitle: 'A TITANS SOCIETY é um ecossistema internacional de lideranças empresariais consolidadas. Redefinimos o networking corporativo através de rigorosa curadoria de idoneidade, exclusividade por segmento e alianças de alto valor estratégico.',
      btnExplore: 'EXPLORAR O SISTEMA TITAN',
      btnApply: 'SOLICITAR CANDIDATURA',
      stat1Label: 'CURADORIA RESTRITA',
      stat1Desc: '1 Cadeira por Segmento em cada Núcleo',
      stat2Label: 'ALCANCE TRANSFRONTEIRIÇO',
      stat2Desc: 'Presença em Polos Globais Estratégicos',
      stat3Label: 'MÉRITO INEGOCIÁVEL',
      stat3Desc: 'Admissão por Convite e Validação Ética',
      securitySeal: 'PROTOCOLO INSTITUCIONAL CONFIDENCIAL · SISTEMA TITAN',
    },
    problem: {
      tag: '01 · O DIAGNÓSTICO',
      headline: 'O NETWORKING CONVENCIONAL ESTÁ FALIDO.',
      subheadline: 'Eventos ruidosos, reuniões superficiais e troca vazia de contatos drenam o recurso mais escasso do líder executivo: o tempo qualificado.',
      card1Number: '01',
      card1Title: 'DISPERSÃO',
      card1Desc: 'Eventos massificados reúnem perfis incompatíveis em maturidade empresarial, diluindo o tempo de tomadores de decisão em conversas improdutivas.',
      card1Impact: 'Impacto: Inércia tática e desperdício de agenda.',
      card2Number: '02',
      card2Title: 'SUPERFICIALIDADE',
      card2Desc: 'A troca de cartões e apresentações padronizadas não geram confiança. Negócios de alto tíquete exigem conhecimento recíproco de caráter.',
      card2Impact: 'Impacto: Relações efêmeras sem alinhamento ético.',
      card3Number: '03',
      card3Title: 'IMEDIATISMO',
      card3Desc: 'Ambientes transacionais focados em vendas rápidas repelem grandes investidores e conselheiros que operam com horizontes de longo prazo.',
      card3Impact: 'Impacto: Ruptura de confiança e foco predatório.',
      monolithQuote: 'Líderes de alto escalão não buscam mais contatos. Buscam interlocutores com a mesma densidade ética, estofo empresarial e compromisso de longo prazo.',
      monolithAuthor: 'TITANS SOCIETY · DIRETRIZ ESTRATÉGICA FUNDADORA',
    },
    system: {
      tag: '02 · O SISTEMA TITAN',
      headline: 'SETE PILARES DE UMA ARQUITETURA DE VALOR.',
      subheadline: 'Uma metodologia proprietária que transforma relações ocasionais em alianças institucionais blindadas.',
      operationalImpact: 'Impacto Operacional',
      institutionalRitual: 'Ritual Institucional',
      pillars: [
        {
          id: 1,
          title: 'Curadoria',
          shortDesc: 'Filtro prévio de idoneidade, porte e valores éticos inegociáveis.',
          detailedDesc: 'Nenhum membro ingressa por simples adesão financeira. Toda admissão passa por análise de histórico executivo, checagem de reputação e validação de alinhamento com a cultura da sociedade.',
          operationalImpact: 'Garante que cada assento seja ocupado por líderes que já construíram resultados sólidos e respeitam o tempo alheio.',
          ritualDetail: 'Avaliação documental e sabatina com membros seniores antes de qualquer convite formal.'
        },
        {
          id: 2,
          title: 'Exclusividade por Especialidade',
          shortDesc: 'Uma única cadeira protegida por segmento em cada núcleo.',
          detailedDesc: 'Eliminamos qualquer disputa interna ou concorrência direta. Ao assegurar exclusividade de nicho, os membros compartilham oportunidades e inteligência com total transparência e segurança.',
          operationalImpact: 'Transforma o grupo em uma força-tarefa multidisciplinar, onde cada empresário é a referência máxima de seu setor.',
          ritualDetail: 'Mapeamento minucioso do Código Nacional de Atividade e definição estrita do escopo de atuação.'
        },
        {
          id: 3,
          title: 'Ritual de Reunião',
          shortDesc: 'Agenda cirúrgica, pontual e focada em inteligência executiva.',
          detailedDesc: 'Reuniões com cronômetro rigoroso e estrutura protocolar. Sem conversas dispersas, discursos autoelogiosos ou perda de tempo. Cada minuto é orquestrado para gerar direcionamento tático.',
          operationalImpact: 'Máxima eficiência e previsibilidade na agenda de empresários que comandam operações complexas.',
          ritualDetail: 'Ordem do dia dividida em blocos de prestação de contas, apresentação estratégica e compromissos formais.'
        },
        {
          id: 4,
          title: 'Referências e Encontros Individuais',
          shortDesc: 'Metodologia de encontros 1-a-1 para aprofundamento e sinergia.',
          detailedDesc: 'Negócios relevantes não nascem em apresentações de palco, mas em conversas particulares entre pares. O Sistema TITAN estabelece dinâmicas individuais com roteiro de investigação e confiança mútua.',
          operationalImpact: 'Transforma networking casual em pipeline qualificado de negócios de alto tíquete.',
          ritualDetail: 'Agenda de imersão bilateral mensal com registro formal de compromissos e pontes geradas.'
        },
        {
          id: 5,
          title: 'Placar TITAN',
          shortDesc: 'Métricas objetivas de reciprocidade, pontualidade e engajamento.',
          detailedDesc: 'A confiança precisa ser mensurada por ações tangíveis. O Placar TITAN monitora assiduidade, qualidade de referências concedidas e cumprimento de acordos estabelecidos entre os membros.',
          operationalImpact: 'Cria autorregulação natural: membros de alta entrega se destacam, e a inércia é prontamente identificada.',
          ritualDetail: 'Dashboard trimestral auditado pela governança interna com critérios claros de desempenho.'
        },
        {
          id: 6,
          title: 'Formação Contínua',
          shortDesc: 'Masterclasses, governança, macroeconomia e inteligência estratégica.',
          detailedDesc: 'Líderes de alto escalão necessitam de reflexões que ampliem sua visão de mundo. Sessões exclusivas de debate sobre tendências globais, gestão de patrimônio e estrutura societária.',
          operationalImpact: 'Elevação contínua do repertório dos membros e alinhamento às melhores práticas globais de mercado.',
          ritualDetail: 'Painéis trimestrais com convidados de destaque nacional e estudos de caso confidenciais.'
        },
        {
          id: 7,
          title: 'Progressão por Mérito e Convite',
          shortDesc: 'Evolução de níveis condicionada a valor gerado e endosso institucional.',
          detailedDesc: 'A transição entre os níveis CONNECT, COUNCIL e GLOBAL não ocorre por mero tempo de casa ou taxa extra. Ela exige histórico comprovado de integridade, contribuição com o ecossistema e convite formal do conselho.',
          operationalImpact: 'Preserva a densidade intelectual e o respeito mútuo em todos os escalões da sociedade.',
          ritualDetail: 'Parecer do Comitê de Governança e avaliação cruzada de conduta institucional.'
        }
      ]
    },
    tiers: {
      tag: '03 · A JORNADA DE INFLUÊNCIA',
      headline: 'TRÊS DIMENSÕES DE IMPACTO E RELACIONAMENTO.',
      subheadline: 'A ascensão na TITANS SOCIETY reflete a expansão geográfica e a maturidade de governança de cada organização membro.',
      viewDetails: 'EXAMINAR DIRETRIZES COMPLETAS',
      closeDetails: 'RECOLHER DIRETRIZES',
      curationCriteria: 'Critérios de Curadoria e Elegibilidade',
      strategicFocus: 'Foco Estratégico & Entregáveis',
      frequency: 'Frequência Operacional',
      capacity: 'Regra de Capacidade',
      selectTier: 'SOLICITAR CANDIDATURA PARA ESTE NÍVEL',
      disclaimer: 'O ingresso em qualquer dimensão está sujeito à disponibilidade da cadeira de nicho e à aprovação unânime do Comitê de Admissão.',
      items: [
        {
          id: 'connect',
          name: 'CONNECT',
          scope: 'REGIONAL',
          tagline: 'A fortaleza local de confiança e geração qualificada de negócios.',
          meetingFrequency: 'Encontros Mensais Presenciais',
          capacityRule: '1 vaga por especialidade em cada núcleo geográfico',
          description: 'O ponto de partida da experiência TITANS SOCIETY. Um núcleo seleto de empresários consolidados na sua região metropolitana, operando com exclusividade de setor e metodologia ativa de referências.',
          curationCriteria: [
            'Empresas operantes com faturamento e solidez comprovados',
            'Exclusividade irrestrita de segmento de atuação',
            'Compromisso com assiduidade e o ritual executivo mensal',
            'Capacidade real de absorver e originar indicações de alto padrão'
          ],
          strategicFocus: 'Estruturação de alianças táticas regionais, blindagem de nicho e geração direta de referências de alto valor.'
        },
        {
          id: 'council',
          name: 'COUNCIL',
          scope: 'NACIONAL',
          tagline: 'Interlocução de alto nível entre polos econômicos nacionais.',
          meetingFrequency: 'Encontros Bimestrais Estruturados',
          capacityRule: 'Vagas restritas por comitê setorial multirregional',
          description: 'Para líderes cujos negócios ultrapassam fronteiras estaduais e demandam interlocução com outros grandes centros econômicos do país. Conexão entre diretores, conselheiros e acionistas de múltiplos estados.',
          curationCriteria: [
            'Histórico exemplar de participação e reputação no nível CONNECT ou convite direto do conselho',
            'Atuação empresarial com alcance nacional ou interesse em expansão interestadual',
            'Maturidade de governança corporativa e sucessão patrimonial',
            'Aprovação unânime pelo Comitê Nacional de Admissão'
          ],
          strategicFocus: 'Expansão de mercado, fusões, parcerias societárias e debates estratégicos de nível macroeconômico.'
        },
        {
          id: 'global',
          name: 'GLOBAL',
          scope: 'INTERNACIONAL',
          tagline: 'Acesso transfronteiriço aos principais polos de decisão mundiais.',
          meetingFrequency: 'Encontros Trimestrais & Missões Estratégicas',
          capacityRule: 'Quórum estritamente restrito e confidencial',
          description: 'A dimensão máxima da TITANS SOCIETY. Relacionamento com ecossistemas de inovação, fundos de investimento e empresários sediados em praças financeiras globais (América do Norte, Europa e Ásia).',
          curationCriteria: [
            'Reconhecimento institucional de liderança de setor',
            'Internacionalização de operações, investimentos cross-border ou alocação patrimonial global',
            'Endosso formal de fundadores e conselheiros seniores',
            'Disponibilidade para missões executivas e cúpulas internacionais'
          ],
          strategicFocus: 'Posicionamento global, diversificação patrimonial internacional e conexões com family offices e conselhos estrangeiros.'
        }
      ]
    },
    exclusivity: {
      tag: '04 · CURADORIA E CRITÉRIO',
      headline: 'A BLINDAGEM DO ACESSO.',
      subheadline: 'O valor de uma sociedade reside tanto em quem ela reúne quanto em quem ela recusa.',
      btnEvaluate: 'SOLICITAR AVALIAÇÃO DE ELEGIBILIDADE',
      monolithLabel: 'PROTOCOLO DE SEGURANÇA INSTITUCIONAL',
      monolithDesc: 'A TITANS SOCIETY reserva-se o direito de recusar qualquer candidatura sem necessidade de justificativa pública.',
      checkpoints: [
        {
          step: '01',
          name: 'CURADORIA',
          headline: 'Triagem Documental e Ética',
          desc: 'Análise aprofundada da trajetória do líder, idoneidade fiscal e reputação no setor antes de qualquer convite formal.'
        },
        {
          step: '02',
          name: 'REPUTAÇÃO',
          headline: 'Capital Intangível Inegociável',
          desc: 'Pesquisa com pares do mercado para certificar a conduta ética, entrega prometida e solidez nas relações pregressas.'
        },
        {
          step: '03',
          name: 'COMPROMISSO',
          headline: 'Engajamento com o Coletivo',
          desc: 'Adesão formal ao ritual executivo, assiduidade nos encontros e disposição real para gerar valor mútuo aos demais membros.'
        },
        {
          step: '04',
          name: 'EXCLUSIVIDADE',
          headline: 'Cadeira Única e Protegida',
          desc: 'Blindagem formal da cadeira em sua categoria de atuação no núcleo, eliminando competição interna e assegurando primazia.'
        }
      ]
    },
    founders: {
      tag: '05 · NÚCLEO FUNDADOR',
      headline: 'A CADEIRA VAZIA DA LIDERANÇA.',
      subheadline: 'O assento central nunca é ocupado por uma figura individual. Ele representa a governança, o legado e os princípios inegociáveis que regem a instituição.',
      chairLabel: 'O PRINCÍPIO DO ASSENTO CENTRAL',
      chairQuote: '"Na TITANS SOCIETY, nenhuma liderança individual se sobrepõe à cultura do mérito, da honra e da reciprocidade institucional."',
      card1Title: 'AUTONOMIA ESTATUTÁRIA',
      card1Desc: 'Decisões deliberadas por comitês colegiados sem privilégios ou favorecimentos individuais.',
      card2Title: 'CURADORIA VITALÍCIA',
      card2Desc: 'Salvaguarda perpétua da qualidade moral, executiva e patrimonial de cada novo membro.',
      card3Title: 'EXPANSÃO EQUILIBRADA',
      card3Desc: 'Crescimento planejado com abertura de novos núcleos apenas sob quórum de excelência comprovada.',
      card4Title: 'LEGADO EMPRESARIAL',
      card4Desc: 'Construção de pontes de impacto que transcendem mandatos e preservam valor de longo prazo.',
      ctaHeadline: 'Deseja compor o núcleo fundador na sua praça?',
      btnFounder: 'SUBMETER MANIFESTAÇÃO DE INTERESSE',
    },
    experience: {
      tag: '06 · A EXPERIÊNCIA TITANS',
      headline: 'O ESPAÇO COMO DECLARAÇÃO DE INTENÇÃO.',
      subheadline: 'Ambientes conceituais desenhados para proteger a sobriedade, a confidencialidade e a precisão das deliberações de cúpula.',
      architecturalSignature: 'ASSINATURA ARQUITETÔNICA',
      closeDetails: 'FECHAR DETALHES',
      viewAtmosphere: 'EXPLORAR ATMOSFERA',
      environments: [
        {
          id: 'boardroom',
          title: 'THE BOARDROOM',
          subtitle: 'O Santuário da Decisão Estratégica',
          description: 'Ambientes desenhados para acolher reuniões de alto impacto, onde temas complexos de governança, fusões e projeções de longo prazo são tratados com sobriedade e foco absoluto.',
          architecturalNote: 'Madeira escura ebanizada, iluminação linear rasgada e isolamento acústico absoluto.',
          imagePath: '/assets/images/boardroom_executive_1791896596094.jpg'
        },
        {
          id: 'connection',
          title: 'THE CONNECTION',
          subtitle: 'A Precisão do Movimento Tático',
          description: 'A analogia do xadrez materializada: cada encontro 1-a-1 é um movimento ponderado. Não se trata de pressa em fechar um contrato, mas de alinhar intenções para relações duradouras.',
          architecturalNote: 'Mármore Nero Marquina com veios dourados e elementos de metal escovado de precisão.',
          imagePath: '/assets/images/hero_chess_monolith_1791896594267.jpg'
        },
        {
          id: 'inner-circle',
          title: 'THE INNER CIRCLE',
          subtitle: 'O Refúgio Privado dos Líderes',
          description: 'Espaço reservado onde a guarda pode ser baixada entre pares idôneos. Um ambiente de confidencialidade onde vulnerabilidades de liderança e dilemas reais são compartilhados sem julgamentos.',
          architecturalNote: 'Painéis ripados em carvão mineral, couro envelhecido e meia-luz cinematográfica intimista.',
          imagePath: '/assets/images/inner_circle_lounge_1791896599200.jpg'
        },
        {
          id: 'global-perspective',
          title: 'THE GLOBAL PERSPECTIVE',
          subtitle: 'O Horizonte Além das Fronteiras',
          description: 'A elevação do olhar sobre os grandes centros de decisão mundiais. Conexão entre ecossistemas de capitais internacionais e lideranças preparadas para transações sem limites territoriais.',
          architecturalNote: 'Vidro temperado fumê sobre o horizonte metropolitano ao cair da tarde.',
          imagePath: '/assets/images/global_perspective_1791896599228.jpg'
        }
      ]
    },
    application: {
      tag: '07 · SUBMISSÃO DE CANDIDATURA',
      headline: 'O PRIMEIRO MOVIMENTO.',
      subheadline: 'O ingresso na TITANS SOCIETY é condicionado à existência de cadeira vaga em sua especialidade e parecer favorável do Comitê de Admissão.',
      protocolNotice: 'AVISO DE CONFIDENCIALIDADE',
      protocolDesc: 'Todas as informações transmitidas são protegidas por sigilo profissional e analisadas exclusivamente pelos membros do conselho.',
      fullName: 'Nome Completo',
      fullNamePlaceholder: 'Ex.: Carlos Eduardo de Albuquerque',
      corporateEmail: 'E-mail Corporativo',
      corporateEmailPlaceholder: 'carlos@suaempresa.com.br',
      phone: 'Telefone Celular / WhatsApp',
      phonePlaceholder: '+55 (11) 99999-9999',
      company: 'Organização Principal',
      companyPlaceholder: 'Nome da sua holding ou empresa operacional',
      position: 'Cargo / Função Executiva',
      positionPlaceholder: 'Ex.: Presidente / Sócio-Fundador / CEO',
      revenue: 'Faixa de Faturamento Anual Estimado',
      revenuePlaceholder: 'Selecione a faixa aproximada',
      industry: 'Segmento de Atuação (Especialidade)',
      industryPlaceholder: 'Ex.: Incorporação Imobiliária, Advocacia Tributária...',
      interest: 'Nível de Interesse Institucional',
      interestOption1: 'Conhecer a instituição',
      interestOption2: 'Candidatar-se ao CONNECT',
      interestOption3: 'Conhecer o núcleo fundador',
      interestOption4: 'Receber informações institucionais',
      message: 'Considerações Adicionais (Opcional)',
      messagePlaceholder: 'Descreva brevemente sua trajetória executiva ou motivação de acesso.',
      privacyConsent1: 'Declaro que as informações fornecidas são fidedignas e concordo com a',
      privacyLink: 'Política de Confidencialidade e Tratamento de Dados',
      privacyConsent2: 'da TITANS SOCIETY.',
      submitBtn: 'SUBMETER CANDIDATURA CONFIDENCIAL',
      submittingBtn: 'PROCESSANDO SUBMISSÃO...',
      successTitle: 'CANDIDATURA RECEBIDA COM SUCESSO',
      successDesc: 'Sua manifestação de interesse foi protocolada sob sigilo institucional. Nossa Secretaria Executiva analisará a disponibilidade de cadeira em seu setor e entrará em contato reservadamente.',
      protocolNumber: 'PROTOCOLO DE REGISTRO',
      submissionDate: 'DATA DA SUBMISSÃO',
      closeModal: 'CONCLUIR PROTOCOLO',
    },
    faq: {
      tag: '08 · ESCLARECIMENTOS INSTITUCIONAIS',
      headline: 'PERGUNTAS FREQUENTES.',
      subheadline: 'Transparência, critérios e rigor: o que você precisa saber antes de se candidatar à TITANS SOCIETY.',
      contactNotice: 'Ainda possui dúvidas específicas sobre sua elegibilidade?',
      contactBtn: 'FALAR COM A SECRETARIA EXECUTIVA',
      items: [
        {
          id: 'faq-1',
          question: 'O que é a TITANS SOCIETY?',
          answer: 'A TITANS SOCIETY é uma instituição de networking empresarial intencional de alto padrão. Ela reúne líderes consolidados sob os pilares da curadoria prévia, confiança recíproca, exclusividade por especialidade e desenvolvimento contínuo de relações de alto valor estratégico.'
        },
        {
          id: 'faq-2',
          question: 'Como funciona o Sistema TITAN?',
          answer: 'O Sistema TITAN é a metodologia proprietária da instituição, composta por sete pilares integrados: Curadoria rigorosa, Exclusividade por especialidade, Ritual de reunião pontual, Referências com encontros 1-a-1, Placar TITAN de reciprocidade, Formação contínua de lideranças e Progressão por mérito e convite.'
        },
        {
          id: 'faq-3',
          question: 'Quem pode se candidatar?',
          answer: 'Empresários, fundadores, sócios e executivos seniores com negócios estruturados, solidez comprovada de mercado e reputação ilibada. A candidatura está aberta a profissionais que valorizam relações de longo prazo e buscam interlocutores do mesmo nível de maturidade empresarial.'
        },
        {
          id: 'faq-4',
          question: 'Como funciona a seleção?',
          answer: 'O processo é composto por três etapas: submissão da candidatura com histórico profissional, checagem prévia de disponibilidade de cadeira no segmento do candidato e entrevista confidencial com o Comitê de Admissão. Apenas perfis plenamente alinhados aos critérios institucionais recebem o convite.'
        },
        {
          id: 'faq-5',
          question: 'O que significa exclusividade por especialidade?',
          answer: 'Em cada núcleo da TITANS SOCIETY, apenas uma única empresa representa um determinado segmento de mercado (ex.: uma única banca de advocacia tributária, uma única construtora de alto padrão, uma única empresa de tecnologia corporativa). Isso elimina atritos competitivos e canaliza todas as referências do nicho para aquele membro.'
        },
        {
          id: 'faq-6',
          question: 'Qual é a diferença entre CONNECT, COUNCIL e GLOBAL?',
          answer: 'O CONNECT é o núcleo regional, com encontros mensais e foco na consolidação de alianças e negócios no polo metropolitano. O COUNCIL é a dimensão nacional, reunindo lideranças multirregionais em encontros bimestrais para expansão interestadual. O GLOBAL é a dimensão transfronteiriça, com encontros trimestrais e missões internacionais para conexões com mercados exteriores. O acesso a cada nível respeita critérios rigorosos de mérito e governança.'
        },
        {
          id: 'faq-7',
          question: 'Como funciona o núcleo fundador?',
          answer: 'O Núcleo Fundador é composto por um grupo inaugural de empresários que estabelecem os alicerces culturais, éticos e operacionais da sociedade em uma nova praça ou conselho. Eles atuam diretamente no processo inicial de curadoria e têm papel determinante na consolidação da reputação da unidade.'
        },
        {
          id: 'faq-8',
          question: 'Como solicitar mais informações?',
          answer: 'Você pode manifestar seu interesse através do formulário institucional nesta página selecionando a opção "Receber informações institucionais" ou "Conhecer a instituição". Nossa Secretaria Executiva fará o contato adequado de forma discreta e personalizada.'
        }
      ]
    },
    closing: {
      tag: '09 · O PRÓXIMO MOVIMENTO',
      headline: 'AS GRANDES DECISÕES NÃO OCORREM AO ACASO.',
      subheadline: 'O acesso à TITANS SOCIETY é reservado para aqueles que compreendem que o destino de uma organização depende diretamente da qualidade dos círculos em que ela se insere.',
      ctaBtn: 'SOLICITAR CANDIDATURA INSTITUCIONAL',
    },
    footer: {
      tagline: 'INSTITUIÇÃO GLOBAL DE NETWORKING EXECUTIVO',
      values: 'AUTORIDADE · DISCRIÇÃO · EXCLUSIVIDADE',
      navTitle: 'Navegação',
      govTitle: 'Governança',
      contactTitle: 'Secretaria Executiva',
      executiveOffice: 'Gabinete Executivo Global',
      confidentialChannel: 'Canal Confidencial de Admissão',
      rights: 'Todos os direitos reservados. Material de circulação estritamente institucional e confidencial.',
      privacyPolicy: 'Política de Confidencialidade',
      terms: 'Termos de Governança',
    }
  },
  en: {
    nav: {
      diagnosis: 'The Diagnosis',
      system: 'The System',
      journey: 'The Journey',
      access: 'The Access',
      founders: 'Founding Circle',
      experience: 'Experience',
      faq: 'FAQ',
      requestAccess: 'REQUEST ACCESS',
      tagline: 'GLOBAL EXECUTIVE NETWORKING INSTITUTION',
    },
    hero: {
      badge: 'HIGH-CALIBER EXECUTIVE INSTITUTION',
      eyebrow: 'INTENTIONAL BUSINESS NETWORKING',
      titleLine1: 'WHERE CAPITAL',
      titleLine2: 'MEETS CHARACTER.',
      subtitle: 'TITANS SOCIETY is an international ecosystem of consolidated business leaders. We redefine corporate networking through rigorous vetting of integrity, niche exclusivity, and high-stakes strategic alliances.',
      btnExplore: 'EXPLORE THE TITAN SYSTEM',
      btnApply: 'APPLY FOR MEMBERSHIP',
      stat1Label: 'STRICT CURATION',
      stat1Desc: '1 Seat per Industry in Each Regional Chapter',
      stat2Label: 'CROSS-BORDER REACH',
      stat2Desc: 'Presence in Strategic Global Financial Hubs',
      stat3Label: 'NON-NEGOTIABLE MERIT',
      stat3Desc: 'Admission by Invitation & Ethical Vetting',
      securitySeal: 'CONFIDENTIAL INSTITUTIONAL PROTOCOL · TITAN SYSTEM',
    },
    problem: {
      tag: '01 · THE DIAGNOSIS',
      headline: 'CONVENTIONAL NETWORKING IS BROKEN.',
      subheadline: 'Noisy events, superficial meetings, and empty card swaps drain the executive leader’s scarcest resource: high-value time.',
      card1Number: '01',
      card1Title: 'DISPERSION',
      card1Desc: 'Mass events assemble incompatible tiers of business maturity, squandering decision-makers’ calendars on unproductive chatter.',
      card1Impact: 'Impact: Tactical inertia and wasted leadership bandwidth.',
      card2Number: '02',
      card2Title: 'SUPERFICIALITY',
      card2Desc: 'Card exchanges and rehearsed elevator pitches fail to build real trust. High-stakes ventures demand mutual knowledge of character.',
      card2Impact: 'Impact: Ephemeral contacts without ethical alignment.',
      card3Number: '03',
      card3Title: 'TRANSACTIONAL HASTE',
      card3Desc: 'Predatory sales-driven environments alienate sophisticated investors, board members, and founders operating on generational horizons.',
      card3Impact: 'Impact: Erosion of trust and short-sighted friction.',
      monolithQuote: 'High-caliber leaders do not seek more contacts. They seek peers with the same ethical depth, business maturity, and long-term commitment.',
      monolithAuthor: 'TITANS SOCIETY · FOUNDING STRATEGIC DIRECTIVE',
    },
    system: {
      tag: '02 · THE TITAN SYSTEM',
      headline: 'SEVEN PILLARS OF A VALUE ARCHITECTURE.',
      subheadline: 'A proprietary methodology transforming casual interactions into shielded institutional alliances.',
      operationalImpact: 'Operational Impact',
      institutionalRitual: 'Institutional Ritual',
      pillars: [
        {
          id: 1,
          title: 'Curation',
          shortDesc: 'Upfront screening of integrity, scale, and non-negotiable ethical standards.',
          detailedDesc: 'No member joins merely by financial contribution. Every admission undergoes background checks, executive history evaluation, and cultural alignment review.',
          operationalImpact: 'Ensures every seat is occupied by leaders who have built solid track records and respect peers’ time.',
          ritualDetail: 'Documentary audit and senior member panel before any formal invitation is extended.'
        },
        {
          id: 2,
          title: 'Industry Exclusivity',
          shortDesc: 'A single protected seat per specialty within each chapter.',
          detailedDesc: 'We eliminate all internal conflict or direct rivalry. By securing niche exclusivity, members share intelligence and opportunities with complete transparency.',
          operationalImpact: 'Transforms the group into a multidisciplinary task force where each executive is the undisputed authority in their field.',
          ritualDetail: 'Strict classification by corporate activity code and clear boundary definition.'
        },
        {
          id: 3,
          title: 'Meeting Ritual',
          shortDesc: 'Surgical, punctual agenda engineered for executive intelligence.',
          detailedDesc: 'Meetings adhere to a rigorous clock and formal protocol. No drifting discussions, self-congratulatory speeches, or wasted time. Every minute serves tactical orientation.',
          operationalImpact: 'Maximum efficiency and predictability for leaders commanding complex operations.',
          ritualDetail: 'Order of business divided into accountability, strategic intelligence, and formal commitments.'
        },
        {
          id: 4,
          title: '1-on-1 Strategic Engagements',
          shortDesc: 'Bilateral methodology designed for profound synergy and deal origination.',
          detailedDesc: 'Substantive business is not born on stage, but in private peer-to-peer dialogues. The TITAN System structures bilateral sessions with trust-building blueprints.',
          operationalImpact: 'Converts casual networking into a high-ticket, institutional deal pipeline.',
          ritualDetail: 'Monthly bilateral deep-dive with formal documentation of commitments and synergies.'
        },
        {
          id: 5,
          title: 'The TITAN Scorecard',
          shortDesc: 'Objective metrics for reciprocity, punctuality, and active engagement.',
          detailedDesc: 'Trust must be evidenced by tangible deeds. The TITAN Scorecard measures attendance, referral quality, and adherence to commitments between members.',
          operationalImpact: 'Fosters natural self-regulation: high-output members shine, and inertia is swiftly addressed.',
          ritualDetail: 'Quarterly dashboard audited by internal governance with unequivocal benchmarks.'
        },
        {
          id: 6,
          title: 'Continuous Mastery',
          shortDesc: 'Masterclasses, governance, macroeconomics, and strategic foresight.',
          detailedDesc: 'Senior leaders require dialogues that expand their global worldview. Exclusive sessions on geopolitical trends, wealth structuring, and corporate governance.',
          operationalImpact: 'Continuous elevation of members’ strategic repertoire aligned with global best practices.',
          ritualDetail: 'Quarterly roundtables with prominent international speakers and confidential case studies.'
        },
        {
          id: 7,
          title: 'Merit-Driven Progression',
          shortDesc: 'Level advancement governed strictly by delivered value and council endorsement.',
          detailedDesc: 'Transition between CONNECT, COUNCIL, and GLOBAL levels does not occur through tenure or fees. It demands proven integrity, ecosystem contribution, and board invitation.',
          operationalImpact: 'Preserves intellectual density and mutual reverence across all institutional echelons.',
          ritualDetail: 'Governance Committee recommendation and peer behavioral review.'
        }
      ]
    },
    tiers: {
      tag: '03 · THE JOURNEY OF INFLUENCE',
      headline: 'THREE DIMENSIONS OF IMPACT & ENGAGEMENT.',
      subheadline: 'Progression within TITANS SOCIETY reflects the geographic footprint and governance maturity of each member organization.',
      viewDetails: 'EXAMINE COMPLETE DIRECTIVES',
      closeDetails: 'COLLAPSE DIRECTIVES',
      curationCriteria: 'Curation & Eligibility Criteria',
      strategicFocus: 'Strategic Focus & Deliverables',
      frequency: 'Meeting Cadence',
      capacity: 'Capacity Protocol',
      selectTier: 'APPLY FOR THIS TIER',
      disclaimer: 'Admission to any dimension is subject to seat availability in your industry and unanimous Board approval.',
      items: [
        {
          id: 'connect',
          name: 'CONNECT',
          scope: 'REGIONAL',
          tagline: 'The local fortress of trust and high-caliber business generation.',
          meetingFrequency: 'Monthly In-Person Sessions',
          capacityRule: '1 seat per industry specialty per metropolitan hub',
          description: 'The foundation of the TITANS SOCIETY experience. A select circle of established entrepreneurs in your region, operating under niche exclusivity and active referral systems.',
          curationCriteria: [
            'Operating companies with proven solvency and sustained revenue',
            'Strict, uncompromised industry exclusivity',
            'Commitment to punctuality and monthly executive ritual',
            'Demonstrated ability to absorb and originate high-ticket referrals'
          ],
          strategicFocus: 'Forging regional tactical alliances, industry protection, and direct high-value referrals.'
        },
        {
          id: 'council',
          name: 'COUNCIL',
          scope: 'NATIONAL',
          tagline: 'High-level dialogue across primary national economic epicenters.',
          meetingFrequency: 'Structured Bi-Monthly Summits',
          capacityRule: 'Restricted quota by multiregional sector committee',
          description: 'For leaders whose operations cross state boundaries and require engagement with major economic hubs nationwide. Connecting founders, directors, and board members.',
          curationCriteria: [
            'Exemplary track record in CONNECT or direct invitation by the Council',
            'Business footprint with interstate reach or active expansion plans',
            'Corporate governance maturity and succession structuring',
            'Unanimous clearance by the National Admissions Committee'
          ],
          strategicFocus: 'Market expansion, M&A opportunities, equity alliances, and macroeconomic roundtables.'
        },
        {
          id: 'global',
          name: 'GLOBAL',
          scope: 'INTERNATIONAL',
          tagline: 'Cross-border access to key global financial decision centers.',
          meetingFrequency: 'Quarterly Assemblies & Strategic Executive Missions',
          capacityRule: 'Strictly confidential and restricted quorum',
          description: 'The pinnacle of TITANS SOCIETY. Engagement with innovation ecosystems, sovereign and private funds, and leaders in premier global centers (North America, Europe, Asia).',
          curationCriteria: [
            'Recognized industry leadership at an institutional scale',
            'Cross-border operations, foreign direct investment, or global asset allocation',
            'Formal endorsement by founding members and senior advisors',
            'Availability for executive delegations and international summits'
          ],
          strategicFocus: 'Global positioning, cross-border wealth diversification, and direct bridges to international family offices.'
        }
      ]
    },
    exclusivity: {
      tag: '04 · CURATION & STANDARDS',
      headline: 'SHIELDING THE ACCESS.',
      subheadline: 'The value of an executive society is measured as much by whom it gathers as by whom it declines.',
      btnEvaluate: 'REQUEST ELIGIBILITY EVALUATION',
      monolithLabel: 'INSTITUTIONAL SECURITY PROTOCOL',
      monolithDesc: 'TITANS SOCIETY reserves the prerogative to decline any application without obligation of public rationale.',
      checkpoints: [
        {
          step: '01',
          name: 'CURATION',
          headline: 'Documentary & Ethical Screening',
          desc: 'In-depth audit of the leader’s trajectory, fiscal integrity, and sector reputation prior to any formal invitation.'
        },
        {
          step: '02',
          name: 'REPUTATION',
          headline: 'Non-Negotiable Intangible Capital',
          desc: 'Discreet peer vetting to verify ethical conduct, historical deliverables, and integrity in past commercial dealings.'
        },
        {
          step: '03',
          name: 'COMMITMENT',
          headline: 'Engagement with the Collective',
          desc: 'Formal pledge to the executive cadence, consistent attendance, and active contribution to fellow members’ growth.'
        },
        {
          step: '04',
          name: 'EXCLUSIVITY',
          headline: 'Protected Single Seat',
          desc: 'Statutory shielding of your category within the chapter, eliminating intra-group competition and ensuring primacy.'
        }
      ]
    },
    founders: {
      tag: '05 · FOUNDING CIRCLE',
      headline: 'THE EMPTY CHAIR OF LEADERSHIP.',
      subheadline: 'The central seat is never held by an individual person. It stands for governance, legacy, and the non-negotiable principles guiding the institution.',
      chairLabel: 'THE PRINCIPLE OF THE CENTRAL SEAT',
      chairQuote: '"At TITANS SOCIETY, no single leader supersedes the culture of merit, honor, and institutional reciprocity."',
      card1Title: 'STATUTORY AUTONOMY',
      card1Desc: 'Decisions deliberated by collective panels free from favoritism or personal leverage.',
      card2Title: 'PERPETUAL CURATION',
      card2Desc: 'Eternal safeguarding of moral, executive, and financial integrity for every incoming member.',
      card3Title: 'BALANCED EXPANSION',
      card3Desc: 'Measured growth, launching new regional chapters only when uncompromising excellence is proven.',
      card4Title: 'BUSINESS LEGACY',
      card4Desc: 'Building enduring conduits that outlive individual tenures and compound long-term enterprise value.',
      ctaHeadline: 'Interested in founding a chapter in your metropolitan hub?',
      btnFounder: 'SUBMIT FOUNDING INQUIRY',
    },
    experience: {
      tag: '06 · THE TITANS EXPERIENCE',
      headline: 'SPACE AS A STATEMENT OF INTENT.',
      subheadline: 'Conceptual environments crafted to safeguard sobriety, confidentiality, and the precision of high-stakes deliberations.',
      architecturalSignature: 'ARCHITECTURAL SIGNATURE',
      closeDetails: 'CLOSE DETAILS',
      viewAtmosphere: 'EXPLORE ATMOSPHERE',
      environments: [
        {
          id: 'boardroom',
          title: 'THE BOARDROOM',
          subtitle: 'The Sanctuary of Strategic Decision',
          description: 'Spaces conceived to host high-impact meetings where complex governance, M&A structuring, and generational projections are deliberated with absolute focus.',
          architecturalNote: 'Ebonized dark wood, razor-linear illumination, and hermetic acoustic isolation.',
          imagePath: '/assets/images/boardroom_executive_1791896596094.jpg'
        },
        {
          id: 'connection',
          title: 'THE CONNECTION',
          subtitle: 'The Precision of the Tactical Move',
          description: 'The chess analogy realized: every 1-on-1 dialogue is a measured step. Not about rushing transactions, but aligning intentionality for enduring alliances.',
          architecturalNote: 'Nero Marquina marble with fine gold veining and precision-brushed steel.',
          imagePath: '/assets/images/hero_chess_monolith_1791896594267.jpg'
        },
        {
          id: 'inner-circle',
          title: 'THE INNER CIRCLE',
          subtitle: 'The Private Haven of Leaders',
          description: 'A discreet realm where senior leaders may lower their guard among genuine peers. An atmosphere of confidentiality where vulnerability and dilemmas are shared without judgment.',
          architecturalNote: 'Slatted mineral charcoal panels, aged leather, and intimate cinematic low-lighting.',
          imagePath: '/assets/images/inner_circle_lounge_1791896599200.jpg'
        },
        {
          id: 'global-perspective',
          title: 'THE GLOBAL PERSPECTIVE',
          subtitle: 'The Horizon Beyond Borders',
          description: 'Elevating perspective toward premier global decision hubs. Bridging international capital ecosystems and leaders prepared for borderless transactions.',
          architecturalNote: 'Smoked tempered glass framing metropolitan horizons at dusk.',
          imagePath: '/assets/images/global_perspective_1791896599228.jpg'
        }
      ]
    },
    application: {
      tag: '07 · MEMBERSHIP APPLICATION',
      headline: 'THE FIRST MOVE.',
      subheadline: 'Membership in TITANS SOCIETY is subject to seat availability in your industry and favorable clearance from the Admissions Committee.',
      protocolNotice: 'CONFIDENTIALITY NOTICE',
      protocolDesc: 'All shared intelligence is protected under strict executive secrecy and examined exclusively by Council members.',
      fullName: 'Full Name',
      fullNamePlaceholder: 'e.g., Alexander Vance',
      corporateEmail: 'Corporate Email',
      corporateEmailPlaceholder: 'vance@enterprise.com',
      phone: 'Mobile / WhatsApp',
      phonePlaceholder: '+1 (555) 019-2834',
      company: 'Primary Enterprise',
      companyPlaceholder: 'Name of your holding or operational company',
      position: 'Executive Title / Role',
      positionPlaceholder: 'e.g., Founder / Managing Partner / CEO',
      revenue: 'Estimated Annual Revenue Range',
      revenuePlaceholder: 'Select approximate range',
      industry: 'Industry Segment (Specialty)',
      industryPlaceholder: 'e.g., Real Estate Development, Corporate Law...',
      interest: 'Institutional Area of Interest',
      interestOption1: 'Learn about the institution',
      interestOption2: 'Apply for CONNECT tier',
      interestOption3: 'Explore Founding Circle',
      interestOption4: 'Receive institutional information',
      message: 'Additional Executive Context (Optional)',
      messagePlaceholder: 'Briefly summarize your business trajectory or motivation for access.',
      privacyConsent1: 'I declare that the supplied details are truthful and agree to the',
      privacyLink: 'Confidentiality & Data Protocol',
      privacyConsent2: 'of TITANS SOCIETY.',
      submitBtn: 'SUBMIT CONFIDENTIAL APPLICATION',
      submittingBtn: 'PROCESSING SUBMISSION...',
      successTitle: 'APPLICATION SUCCESSFULLY RECORDED',
      successDesc: 'Your statement of interest has been filed under institutional privilege. Our Executive Office will verify seat availability in your sector and reach out discreetly.',
      protocolNumber: 'REGISTRATION PROTOCOL',
      submissionDate: 'SUBMISSION DATE',
      closeModal: 'COMPLETE PROTOCOL',
    },
    faq: {
      tag: '08 · INSTITUTIONAL CLARIFICATIONS',
      headline: 'FREQUENTLY ASKED QUESTIONS.',
      subheadline: 'Transparency, criteria, and rigor: what you need to understand before seeking access to TITANS SOCIETY.',
      contactNotice: 'Do you have specific questions regarding your eligibility?',
      contactBtn: 'CONTACT EXECUTIVE SECRETARIAT',
      items: [
        {
          id: 'faq-1',
          question: 'What is TITANS SOCIETY?',
          answer: 'TITANS SOCIETY is a high-caliber institution of intentional business networking. It convenes established leaders under the pillars of prior curation, mutual trust, specialty exclusivity, and continuous cultivation of strategic alliances.'
        },
        {
          id: 'faq-2',
          question: 'How does the TITAN System work?',
          answer: 'The TITAN System is the institution’s proprietary methodology, comprising seven integrated pillars: Rigorous curation, Industry exclusivity, Punctual meeting ritual, Bilateral 1-on-1 sessions, TITAN reciprocity scorecard, Continuous leadership mastery, and Merit-driven progression.'
        },
        {
          id: 'faq-3',
          question: 'Who is eligible to apply?',
          answer: 'Founders, managing partners, and C-level executives commanding established enterprises with proven solvency and impeccable reputational standing. Candidacy is open to leaders who value enduring relationships and seek peers of identical business maturity.'
        },
        {
          id: 'faq-4',
          question: 'How is selection conducted?',
          answer: 'The process involves three milestones: submission of professional dossier, upfront verification of seat availability in the candidate’s industry, and confidential panel interview with the Admissions Committee. Only profiles aligned with institutional benchmarks receive an invitation.'
        },
        {
          id: 'faq-5',
          question: 'What does specialty exclusivity mean?',
          answer: 'Within each regional chapter of TITANS SOCIETY, only one single enterprise represents a designated commercial segment (e.g., a single tax law firm, a single luxury real estate developer, an enterprise software firm). This eliminates friction and channels all niche referrals to that member.'
        },
        {
          id: 'faq-6',
          question: 'What distinguishes CONNECT, COUNCIL, and GLOBAL?',
          answer: 'CONNECT is the regional chapter with monthly meetings focused on local market alliances. COUNCIL is the national dimension, gathering multiregional leaders bi-monthly for cross-state expansion. GLOBAL is the cross-border echelon with quarterly summits and delegations to major global hubs. Access to each level follows strict governance criteria.'
        },
        {
          id: 'faq-7',
          question: 'How does the Founding Circle operate?',
          answer: 'The Founding Circle comprises an inaugural group of leaders who lay down the cultural, ethical, and operational foundations in a new hub or council. They play a decisive role in upfront curation and brand reputation.'
        },
        {
          id: 'faq-8',
          question: 'How do I request further details?',
          answer: 'You may express your interest via the application form on this page by selecting "Receive institutional information" or "Learn about the institution". Our Executive Secretariat will initiate private, personalized communication.'
        }
      ]
    },
    closing: {
      tag: '09 · THE NEXT MOVE',
      headline: 'GREAT DECISIONS DO NOT HAPPEN BY CHANCE.',
      subheadline: 'Access to TITANS SOCIETY is reserved for those who grasp that an organization’s trajectory is directly determined by the caliber of circles it frequents.',
      ctaBtn: 'SUBMIT INSTITUTIONAL CANDIDACY',
    },
    footer: {
      tagline: 'GLOBAL EXECUTIVE NETWORKING INSTITUTION',
      values: 'AUTHORITY · DISCRETION · EXCLUSIVITY',
      navTitle: 'Navigation',
      govTitle: 'Governance',
      contactTitle: 'Executive Secretariat',
      executiveOffice: 'Global Executive Secretariat',
      confidentialChannel: 'Confidential Admissions Desk',
      rights: 'All rights reserved. Strictly confidential and institutional circulation.',
      privacyPolicy: 'Confidentiality Policy',
      terms: 'Governance Terms',
    }
  }
};
