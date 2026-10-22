export type Language = 'pt' | 'en';

export interface Translations {
  header: {
    nav: {
      problem: string;
      system: string;
      tiers: string;
      exclusivity: string;
      founders: string;
      experience: string;
      faq: string;
    };
    cta: string;
    indexTitle: string;
    tagline: string;
    languageToggleAria: string;
  };
  hero: {
    signature: string;
    headlinePart1: string;
    headlinePart2: string;
    subtitle: string;
    description: string;
    startCandidacy: string;
    exploreSystem: string;
    chessAlt: string;
    architectureAlt: string;
  };
  problem: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    imageAlt: string;
    imageLabelLeft: string;
    imageLabelRight: string;
    challenges: Array<{
      index: string;
      title: string;
      manifesto: string;
      elaboration: string;
    }>;
    guidingPrincipleLabel: string;
    guidingPrincipleQuote: string;
    guidingPrincipleHighlight: string;
  };
  system: {
    eyebrow: string;
    title: string;
    description: string;
    vectorLabel: string;
    operationalImpactLabel: string;
    applicationMechanismLabel: string;
    statusActive: string;
    statusView: string;
    pillars: Array<{
      id: number;
      title: string;
      shortDesc: string;
      detailedDesc: string;
      operationalImpact: string;
      ritualDetail: string;
    }>;
  };
  tiers: {
    eyebrow: string;
    title: string;
    description: string;
    frequencyLabel: string;
    quorumLabel: string;
    guidelinesButton: string;
    applyButtonPrefix: string;
    progressionNote: string;
    modalStatute: string;
    modalLevelPrefix: string;
    modalCriteriaLabel: string;
    modalClose: string;
    modalProceed: string;
    tiersList: Array<{
      id: string;
      name: string;
      scope: string;
      scale: string;
      tagline: string;
      narrative: string;
      meetingFrequency: string;
      capacityRule: string;
      description: string;
      curationCriteria: string[];
      strategicFocus: string;
    }>;
  };
  exclusivity: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    description: string;
    imageAlt: string;
    portalName: string;
    portalSubtitle: string;
    portalBadge: string;
    principles: Array<{
      index: string;
      title: string;
      subtitle: string;
      desc: string;
    }>;
    footnote: string;
    cta: string;
  };
  founders: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    subtitle: string;
    imageAlt: string;
    plaqueTitle: string;
    plaqueSubtitle: string;
    plaqueBadge: string;
    roleTitle: string;
    roleDesc: string;
    roleFootnote: string;
    commitments: Array<{
      index: string;
      title: string;
      desc: string;
    }>;
    cta: string;
    ctaNote: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    environments: Array<{
      id: string;
      order: string;
      atmosphereLabel: string;
      title: string;
      subtitle: string;
      description: string;
      architecturalNote: string;
      imagePath: string;
      alt: string;
    }>;
    modalBadge: string;
    modalFooterLeft: string;
    modalFooterRight: string;
  };
  form: {
    badge: string;
    title: string;
    subtitle: string;
    successTitle: string;
    protocolLabel: string;
    timestampLabel: string;
    newSubmissionButton: string;
    errorAlertTitle: string;
    unexpectedError: string;
    sidebarBadge: string;
    sidebarTitle: string;
    sidebarQuote: string;
    sidebarSteps: string[];
    sidebarChannel: string;
    sidebarConfidentiality: string;
    formHeaderBadge: string;
    requiredFieldsNote: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    stateLabel: string;
    statePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    jobTitleLabel: string;
    jobTitlePlaceholder: string;
    segmentLabel: string;
    segmentPlaceholder: string;
    websiteLabel: string;
    websitePlaceholder: string;
    interestLabel: string;
    interestOptions: {
      connect: string;
      founders: string;
      institution: string;
      info: string;
    };
    objectiveLabel: string;
    objectivePlaceholder: string;
    privacyConsentText: string;
    privacyPolicyLink: string;
    evaluationTimeNote: string;
    submittingButton: string;
    submitButton: string;
    validation: {
      fullName: string;
      businessEmail: string;
      phone: string;
      city: string;
      state: string;
      companyName: string;
      jobTitle: string;
      businessSegment: string;
      websiteOrProfile: string;
      objective: string;
      consentPrivacy: string;
      reviewFields: string;
    };
    successResponsePrefix: string;
    successResponseSuffix: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      question: string;
      answer: string;
    }>;
    footnoteText: string;
    footnoteLink: string;
  };
  closing: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    quote: string;
    cta: string;
    tagline: string;
  };
  footer: {
    positioning: string;
    navHeading: string;
    navLinks: {
      problem: string;
      system: string;
      tiers: string;
      exclusivity: string;
      founders: string;
      experience: string;
    };
    governanceHeading: string;
    governanceLinks: {
      application: string;
      faq: string;
      privacy: string;
      secretariat: string;
    };
    conductHeading: string;
    conductText: string;
    conductNote: string;
    copyright: string;
    privacyButton: string;
    secretariatButton: string;
  };
  modals: {
    privacy: {
      title: string;
      terms: Array<{
        num: string;
        heading: string;
        content: string;
      }>;
      footerBadge: string;
      closeButton: string;
    };
    contact: {
      badge: string;
      title: string;
      subtitle: string;
      emailLabel: string;
      copyButton: string;
      copiedButton: string;
      note: string;
      closeButton: string;
    };
  };
  languageGate: {
    chooseLanguage: string;
    chooseLanguageSub: string;
    portugueseTitle: string;
    portugueseCountries: string;
    portugueseButton: string;
    englishTitle: string;
    englishCountries: string;
    englishButton: string;
    footnote: string;
  };
}
