export type InterestType = 
  | 'Conhecer a instituição'
  | 'Candidatar-se ao CONNECT'
  | 'Conhecer o núcleo fundador'
  | 'Receber informações institucionais';

export interface ApplicationFormData {
  fullName: string;
  businessEmail: string;
  phone: string;
  city: string;
  state: string;
  companyName: string;
  jobTitle: string;
  businessSegment: string;
  websiteOrProfile: string;
  primaryInterest: InterestType;
  objective: string;
  consentPrivacy: boolean;
}

export interface ApplicationResponse {
  success: boolean;
  protocolNumber?: string;
  message: string;
  timestamp?: string;
}

export interface TitanPillar {
  id: number;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  operationalImpact: string;
  ritualDetail: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  scope: string;
  tagline: string;
  meetingFrequency: string;
  capacityRule: string;
  description: string;
  curationCriteria: string[];
  strategicFocus: string;
}

export interface ConceptualEnvironment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  architecturalNote: string;
  imagePath: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
