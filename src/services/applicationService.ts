import { ApplicationFormData, ApplicationResponse } from '../types';

export const validateApplicationForm = (data: ApplicationFormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.fullName.trim() || data.fullName.trim().split(' ').length < 2) {
    errors.fullName = 'Informe seu nome completo (nome e sobrenome).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.businessEmail.trim() || !emailRegex.test(data.businessEmail.trim())) {
    errors.businessEmail = 'Informe um e-mail corporativo válido.';
  }

  const cleanPhone = data.phone.replace(/\D/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.phone = 'Informe um telefone/WhatsApp válido com DDD (mínimo 10 dígitos).';
  }

  if (!data.city.trim()) {
    errors.city = 'Informe a sua cidade.';
  }

  if (!data.state.trim()) {
    errors.state = 'Informe o estado (UF).';
  }

  if (!data.companyName.trim()) {
    errors.companyName = 'Informe o nome da sua empresa.';
  }

  if (!data.jobTitle.trim()) {
    errors.jobTitle = 'Informe seu cargo ou posição na empresa.';
  }

  if (!data.businessSegment.trim()) {
    errors.businessSegment = 'Especifique o segmento de atuação da empresa.';
  }

  if (!data.websiteOrProfile.trim()) {
    errors.websiteOrProfile = 'Informe o site da empresa ou perfil do LinkedIn.';
  }

  if (!data.objective.trim() || data.objective.trim().length < 20) {
    errors.objective = 'Descreva seu objetivo com ao menos 20 caracteres para avaliação do comitê.';
  }

  if (!data.consentPrivacy) {
    errors.consentPrivacy = 'É necessário concordar com o tratamento dos dados pessoais conforme nossa Política de Privacidade.';
  }

  return errors;
};

/**
 * Submits the institutional candidacy to the evaluation queue.
 * Operates with an isolated service layer pattern to decouple UI from backend transport.
 */
export const submitCandidacy = async (
  data: ApplicationFormData
): Promise<ApplicationResponse> => {
  const errors = validateApplicationForm(data);
  if (Object.keys(errors).length > 0) {
    const firstErrorMessage = Object.values(errors)[0];
    return {
      success: false,
      message: firstErrorMessage || 'Por favor, revise os campos do formulário antes de enviar.',
    };
  }

  // Simulate network dispatch with realistic latency
  await new Promise((resolve) => setTimeout(resolve, 950));

  try {
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const protocolNumber = `TS-2026-${randomSuffix}`;
    const timestamp = new Date().toISOString();

    const storedItem = {
      ...data,
      protocolNumber,
      timestamp,
      status: 'RECEBIDO_EM_ANALISE',
    };

    try {
      const existing = localStorage.getItem('titans_society_applications');
      const list = existing ? JSON.parse(existing) : [];
      list.push(storedItem);
      localStorage.setItem('titans_society_applications', JSON.stringify(list));
    } catch {
      // LocalStorage fallback without blocking
    }

    return {
      success: true,
      protocolNumber,
      timestamp,
      message: `Candidatura registrada com sucesso sob o protocolo institucional ${protocolNumber}. Nossa Secretaria Executiva e o Comitê de Admissão iniciarão a análise confidencial.`,
    };
  } catch (err) {
    return {
      success: false,
      message: 'Não foi possível registrar a candidatura no momento. Por favor, tente novamente em instantes ou contate nossa secretaria.',
    };
  }
};
