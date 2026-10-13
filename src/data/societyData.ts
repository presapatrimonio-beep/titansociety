import { TitanPillar, MembershipTier, ConceptualEnvironment, FAQItem } from '../types';

export const TITAN_PILLARS: TitanPillar[] = [
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
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
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
];

export const CONCEPTUAL_ENVIRONMENTS: ConceptualEnvironment[] = [
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
];

export const FAQ_ITEMS: FAQItem[] = [
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
];

export const EXCLUSIVITY_CHECKPOINTS = [
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
];
