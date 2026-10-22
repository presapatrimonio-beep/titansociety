import { ApplicationFormData, ApplicationResponse } from '../types';
import { Language } from '../i18n/types';
import { ptTranslations } from '../i18n/pt';
import { enTranslations } from '../i18n/en';

export const validateApplicationForm = (
  data: ApplicationFormData,
  lang: Language = 'pt'
): Record<string, string> => {
  const errors: Record<string, string> = {};
  const v = lang === 'en' ? enTranslations.form.validation : ptTranslations.form.validation;

  if (!data.fullName.trim() || data.fullName.trim().split(' ').length < 2) {
    errors.fullName = v.fullName;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.businessEmail.trim() || !emailRegex.test(data.businessEmail.trim())) {
    errors.businessEmail = v.businessEmail;
  }

  const cleanPhone = data.phone.replace(/\D/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.phone = v.phone;
  }

  if (!data.city.trim()) {
    errors.city = v.city;
  }

  if (!data.state.trim()) {
    errors.state = v.state;
  }

  if (!data.companyName.trim()) {
    errors.companyName = v.companyName;
  }

  if (!data.jobTitle.trim()) {
    errors.jobTitle = v.jobTitle;
  }

  if (!data.businessSegment.trim()) {
    errors.businessSegment = v.businessSegment;
  }

  if (!data.websiteOrProfile.trim()) {
    errors.websiteOrProfile = v.websiteOrProfile;
  }

  if (!data.objective.trim() || data.objective.trim().length < 20) {
    errors.objective = v.objective;
  }

  if (!data.consentPrivacy) {
    errors.consentPrivacy = v.consentPrivacy;
  }

  return errors;
};

/**
 * Submits the institutional candidacy to the evaluation queue.
 */
export const submitCandidacy = async (
  data: ApplicationFormData,
  lang: Language = 'pt'
): Promise<ApplicationResponse> => {
  const errors = validateApplicationForm(data, lang);
  const t = lang === 'en' ? enTranslations.form : ptTranslations.form;

  if (Object.keys(errors).length > 0) {
    const firstErrorMessage = Object.values(errors)[0];
    return {
      success: false,
      message: firstErrorMessage || t.validation.reviewFields,
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
      language: lang,
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
      message: `${t.successResponsePrefix}${protocolNumber}${t.successResponseSuffix}`,
    };
  } catch {
    return {
      success: false,
      message: t.unexpectedError,
    };
  }
};
