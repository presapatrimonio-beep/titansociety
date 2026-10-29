import React, { useState } from 'react';
import { ApplicationFormData, InterestType, ApplicationResponse } from '../types';
import { submitCandidacy, validateApplicationForm } from '../services/applicationService';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ApplicationFormProps {
  initialInterest?: InterestType;
  onOpenPrivacyModal: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  initialInterest = 'Candidatar-se ao CONNECT',
  onOpenPrivacyModal,
}) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    businessEmail: '',
    phone: '',
    city: '',
    state: '',
    companyName: '',
    jobTitle: '',
    businessSegment: '',
    websiteOrProfile: '',
    primaryInterest: initialInterest,
    objective: '',
    consentPrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<ApplicationResponse | null>(null);

  // Sync if parent updates initial interest
  React.useEffect(() => {
    if (initialInterest) {
      setFormData((prev) => ({ ...prev, primaryInterest: initialInterest }));
    }
  }, [initialInterest]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionResult(null);

    const validationErrors = validateApplicationForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitCandidacy(formData);
      setSubmissionResult(response);
      if (response.success) {
        setFormData({
          fullName: '',
          businessEmail: '',
          phone: '',
          city: '',
          state: '',
          companyName: '',
          jobTitle: '',
          businessSegment: '',
          websiteOrProfile: '',
          primaryInterest: 'Candidatar-se ao CONNECT',
          objective: '',
          consentPrivacy: false,
        });
        setErrors({});
      }
    } catch {
      setSubmissionResult({
        success: false,
        message: language === 'pt'
          ? 'Ocorreu uma falha inesperada na transmissão. Por favor, tente novamente.'
          : 'An unexpected transmission error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="candidatura" className="relative py-36 bg-[#080808] border-t border-[#181818] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,164,92,0.05),transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl text-left mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#D4B36A] font-semibold mb-4">
            <Lock className="w-4 h-4 text-[#D4B36A]" />
            <span>
              {language === 'pt'
                ? 'Protocolo Executivo de Admissão · Confidencial'
                : 'Executive Admissions Protocol · Confidential'}
            </span>
          </div>
          <h2 
            className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-[#F0EDE6] uppercase tracking-[0.03em] leading-[1.06] mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {language === 'pt' ? 'Submissão de Candidatura' : 'Membership Application'}
          </h2>
          <p className="text-lg sm:text-xl text-[#F0EDE6]/80 font-serif italic max-w-2xl leading-relaxed font-light">
            {language === 'pt'
              ? 'Inicie o processo de auditoria de elegibilidade institucional. Cada assento é protegido por estrita exclusividade setorial.'
              : 'Initiate institutional eligibility audit. Every single seat is protected by strict niche exclusivity.'}
          </p>
        </div>

        {/* Confirmation State Modal / Card */}
        {submissionResult && submissionResult.success && (
          <div className="mb-14 p-8 sm:p-12 bg-[#0D0D0D] border-2 border-[#C9A45C] rounded-sm text-left shadow-[0_15px_50px_rgba(201,164,92,0.2)] animate-fadeIn">
            <div className="flex items-center gap-3 text-[#C9A45C] mb-4">
              <CheckCircle2 className="w-7 h-7" />
              <span className="text-lg sm:text-xl font-display font-bold uppercase tracking-wider">
                {language === 'pt' ? 'Candidatura Homologada no Sistema' : 'Application Successfully Recorded'}
              </span>
            </div>
            <p className="text-base sm:text-lg text-[#F4F0E8] font-serif leading-relaxed mb-6 font-light">
              {submissionResult.message}
            </p>
            <div className="p-5 bg-[#050505] border border-[#181818] flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs font-mono">
              <div>
                <span className="text-[#F4F0E8]/40 block uppercase text-[10px] mb-1">
                  {language === 'pt' ? 'Número de Protocolo Institucional:' : 'Registration Protocol Number:'}
                </span>
                <span className="text-[#C9A45C] text-base font-bold tracking-wider">{submissionResult.protocolNumber}</span>
              </div>
              <div>
                <span className="text-[#F4F0E8]/40 block uppercase text-[10px] mb-1">
                  {language === 'pt' ? 'Registro de Transmissão:' : 'Transmission Timestamp:'}
                </span>
                <span className="text-[#F4F0E8]">
                  {submissionResult.timestamp ? new Date(submissionResult.timestamp).toLocaleString(language === 'pt' ? 'pt-BR' : 'en-US') : ''}
                </span>
              </div>
              <button
                onClick={() => setSubmissionResult(null)}
                className="px-6 py-2.5 text-xs uppercase font-semibold text-[#050505] gold-button-primary rounded-sm cursor-pointer whitespace-nowrap"
              >
                {language === 'pt' ? 'Nova Submissão' : 'New Submission'}
              </button>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {submissionResult && !submissionResult.success && (
          <div className="mb-10 p-6 bg-red-950/40 border border-red-500/50 rounded-sm text-left flex items-start gap-3.5 text-red-300 text-sm animate-fadeIn">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-red-200 font-semibold mb-1 uppercase text-xs tracking-wider">
                {language === 'pt' ? 'Atenção à transmissão:' : 'Transmission Attention:'}
              </strong>
              {submissionResult.message}
            </div>
          </div>
        )}

        {/* Asymmetric Two-Column Split Architecture (Concept: Private Access Request) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Architectural Atmosphere & Institutional Signature (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-12 bg-[#050505] border border-[#181818] rounded-sm relative overflow-hidden">
            {/* Background Image Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
              <img
                src="/assets/images/inner_circle_lounge_1791896599200.jpg"
                alt="Atmosfera de acesso privado TITANS SOCIETY"
                className="w-full h-full object-cover filter contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/60" />
            </div>

            <div className="relative z-10 text-left">
              <img
                src="/assets/logo2.png"
                alt="TITANS SOCIETY"
                className="h-14 sm:h-18 w-auto object-contain filter drop-shadow-[0_4px_22px_rgba(212,179,106,0.35)] mb-8"
              />

              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
                {language === 'pt' ? 'Protocolo de Auditoria' : 'Audit Protocol'}
              </span>
              <h3 
                className="text-2xl sm:text-3xl font-display font-medium text-[#F4F0E8] uppercase tracking-wide leading-tight mb-4"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {language === 'pt' ? 'Acesso Sob Rigorosa Confidencialidade' : 'Access Under Strict Confidentiality'}
              </h3>
              <p className="text-sm font-serif italic text-[#F4F0E8]/80 leading-relaxed mb-6 font-light">
                {language === 'pt'
                  ? '“A entrada em uma instituição de prestígio começa pela precisão das informações e pelo respeito aos critérios compartilhados.”'
                  : '“Admission to a prestigious institution begins with precision of intelligence and reverence for shared benchmarks.”'}
              </p>
              
              <div className="space-y-4 text-xs font-sans text-[#F4F0E8]/65 font-light leading-relaxed mb-8">
                <p>
                  {language === 'pt'
                    ? '1. Avaliação preliminar de cadeira desocupada no segmento.'
                    : '1. Preliminary verification of seat vacancy in your industry.'}
                </p>
                <p>
                  {language === 'pt'
                    ? '2. Verificação de idoneidade, porte e valores éticos.'
                    : '2. Examination of integrity, scale, and non-negotiable ethical standards.'}
                </p>
                <p>
                  {language === 'pt'
                    ? '3. Entrevista confidencial com a Secretaria Executiva e parecer de conselheiros.'
                    : '3. Confidential interview with Executive Secretariat and board evaluation.'}
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#181818] flex items-center justify-between text-[11px] font-mono text-[#F4F0E8]/40">
              <span>{language === 'pt' ? 'CANAL DE ADMISSÃO' : 'ADMISSIONS DESK'}</span>
              <span className="text-[#C9A45C]">{language === 'pt' ? 'SIGILO IRRESTRITO' : 'ABSOLUTE SECRECY'}</span>
            </div>
          </div>

          {/* Right Column: Clean, High-Contrast Precision Application Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 sm:p-12 bg-[#050505] border border-[#181818] rounded-sm shadow-2xl relative text-left"
            >
              {/* Subtle Form Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#181818] pb-5 mb-8 gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C9A45C] uppercase tracking-wider font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{language === 'pt' ? 'Ficha de Avaliação Executiva' : 'Executive Assessment Dossier'}</span>
                </div>
                <span className="text-[11px] font-mono text-[#F4F0E8]/40 uppercase tracking-widest">
                  {language === 'pt' ? '(*) Campos obrigatórios' : '(*) Required fields'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/80 mb-2">
                    {language === 'pt' ? 'Nome Completo *' : 'Full Name *'}
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={language === 'pt' ? 'Ex.: Carlos Eduardo Menezes' : 'e.g., Alexander Vance'}
                    className={`w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#F4F0E8]/25 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A45C] transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-[#1C1C1C] focus:border-[#C9A45C]'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1.5">{errors.fullName}</p>}
                </div>

                {/* Business Email */}
                <div>
                  <label htmlFor="businessEmail" className="block text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/80 mb-2">
                    {language === 'pt' ? 'E-mail Profissional *' : 'Corporate Email *'}
                  </label>
                  <input
                    id="businessEmail"
                    name="businessEmail"
                    type="email"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    placeholder={language === 'pt' ? 'carlos@holdingempresa.com.br' : 'vance@enterprise.com'}
                    className={`w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#F4F0E8]/25 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A45C] transition-colors ${
                      errors.businessEmail ? 'border-red-500' : 'border-[#1C1C1C] focus:border-[#C9A45C]'
                    }`}
                  />
                  {errors.businessEmail && <p className="text-red-400 text-xs mt-1.5">{errors.businessEmail}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/80 mb-2">
                    {language === 'pt' ? 'Telefone Celular / WhatsApp *' : 'Mobile / WhatsApp *'}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={language === 'pt' ? '+55 (11) 98765-4321' : '+1 (555) 019-2834'}
                    className={`w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#F4F0E8]/25 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A45C] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-[#1C1C1C] focus:border-[#C9A45C]'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
                </div>

                {/* City & State */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="city" className="block text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/80 mb-2">
                      {language === 'pt' ? 'Cidade *' : 'City *'}
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder={language === 'pt' ? 'São Paulo' : 'New York'}
                      className={`w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#F4F0E8]/25 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A45C] transition-colors ${
                        errors.city ? 'border-red-500' : 'border-[#1C1C1C] focus:border-[#C9A45C]'
                      }`}
                    />
                    {errors.city && <p className="text-red-400 text-xs mt-1.5">{errors.city}</p>}
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/80 mb-2">
                      {language === 'pt' ? 'Estado *' : 'State *'}
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder={language === 'pt' ? 'SP' : 'NY'}
                      className={`w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#F4F0E8]/25 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A45C] transition-colors ${
                        errors.state ? 'border-red-500' : 'border-[#1C1C1C] focus:border-[#C9A45C]'
                      }`}
                    />
                    {errors.state && <p className="text-red-400 text-xs mt-1.5">{errors.state}</p>}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/80 mb-2">
                    {language === 'pt' ? 'Organização Principal *' : 'Primary Enterprise *'}
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder={language === 'pt' ? 'Nome da empresa ou holding' : 'Company or holding name'}
                    className={`w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#F4F0E8]/25 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A45C] transition-colors ${
                      errors.companyName ? 'border-red-500' : 'border-[#1C1C1C] focus:border-[#C9A45C]'
                    }`}
                  />
                  {errors.companyName && <p className="text-red-400 text-xs mt-1.5">{errors.companyName}</p>}
                </div>

                {/* Job Title */}
                <div>
                  <label htmlFor="jobTitle" className="block text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/80 mb-2">
                    {language === 'pt' ? 'Cargo / Função Executiva *' : 'Executive Title / Role *'}
                  </label>
                  <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder={language === 'pt' ? 'Ex.: Sócio-Fundador / CEO' : 'e.g., Managing Partner / CEO'}
                    className={`w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#F4F0E8]/25 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A45C] transition-colors ${
                      errors.jobTitle ? 'border-red-500' : 'border-[#1C1C1C] focus:border-[#C9A45C]'
                    }`}
                  />
                  {errors.jobTitle && <p className="text-red-400 text-xs mt-1.5">{errors.jobTitle}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Business Segment */}
                <div>
                  <label htmlFor="businessSegment" className="block text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/80 mb-2">
                    {language === 'pt' ? 'Segmento de Atuação (Especialidade) *' : 'Industry Specialty *'}
                  </label>
                  <input
                    id="businessSegment"
                    name="businessSegment"
                    type="text"
                    value={formData.businessSegment}
                    onChange={handleChange}
                    placeholder={language === 'pt' ? 'Ex.: Incorporação Imobiliária, Advocacia Tributária...' : 'e.g., Luxury Real Estate, Private Equity...'}
                    className={`w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#F4F0E8]/25 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A45C] transition-colors ${
                      errors.businessSegment ? 'border-red-500' : 'border-[#1C1C1C] focus:border-[#C9A45C]'
                    }`}
                  />
                  {errors.businessSegment && <p className="text-red-400 text-xs mt-1.5">{errors.businessSegment}</p>}
                </div>

                {/* Website / Profile */}
                <div>
                  <label htmlFor="websiteOrProfile" className="block text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/80 mb-2">
                    {language === 'pt' ? 'Website ou Perfil LinkedIn *' : 'Website or LinkedIn Profile *'}
                  </label>
                  <input
                    id="websiteOrProfile"
                    name="websiteOrProfile"
                    type="text"
                    value={formData.websiteOrProfile}
                    onChange={handleChange}
                    placeholder={language === 'pt' ? 'https://linkedin.com/in/... ou website oficial' : 'https://linkedin.com/in/... or official site'}
                    className={`w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#F4F0E8]/25 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A45C] transition-colors ${
                      errors.websiteOrProfile ? 'border-red-500' : 'border-[#1C1C1C] focus:border-[#C9A45C]'
                    }`}
                  />
                  {errors.websiteOrProfile && <p className="text-red-400 text-xs mt-1.5">{errors.websiteOrProfile}</p>}
                </div>
              </div>

              {/* Primary Interest Dropdown */}
              <div className="mb-5">
                <label htmlFor="primaryInterest" className="block text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/80 mb-2">
                  {language === 'pt' ? 'Interesse Principal *' : 'Primary Area of Interest *'}
                </label>
                <select
                  id="primaryInterest"
                  name="primaryInterest"
                  value={formData.primaryInterest}
                  onChange={handleChange}
                  className="w-full bg-[#0A0A0A] border border-[#1C1C1C] px-4 py-3 text-sm text-[#F4F0E8] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A45C] focus:border-[#C9A45C] transition-colors cursor-pointer"
                >
                  <option value="Conhecer a instituição">
                    {language === 'pt' ? 'Conhecer a instituição' : 'Learn about the institution'}
                  </option>
                  <option value="Candidatar-se ao CONNECT">
                    {language === 'pt' ? 'Candidatar-se ao CONNECT' : 'Apply for CONNECT chapter'}
                  </option>
                  <option value="Conhecer o núcleo fundador">
                    {language === 'pt' ? 'Conhecer o núcleo fundador' : 'Explore the Founding Circle'}
                  </option>
                  <option value="Receber informações institucionais">
                    {language === 'pt' ? 'Receber informações institucionais' : 'Receive institutional intelligence'}
                  </option>
                </select>
              </div>

              {/* Objective Statement */}
              <div className="mb-6">
                <label htmlFor="objective" className="block text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/80 mb-2">
                  {language === 'pt' ? 'Objetivo ao Participar da TITANS SOCIETY *' : 'Purpose of Joining TITANS SOCIETY *'}
                </label>
                <textarea
                  id="objective"
                  name="objective"
                  rows={3}
                  value={formData.objective}
                  onChange={handleChange}
                  placeholder={
                    language === 'pt'
                      ? 'Descreva sua trajetória empresarial e o que busca construir junto à rede...'
                      : 'Summarize your executive trajectory and strategic synergies sought within the network...'
                  }
                  className={`w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#F4F0E8]/25 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C9A45C] transition-colors resize-none ${
                    errors.objective ? 'border-red-500' : 'border-[#1C1C1C] focus:border-[#C9A45C]'
                  }`}
                />
                {errors.objective && <p className="text-red-400 text-xs mt-1.5">{errors.objective}</p>}
              </div>

              {/* Privacy Consent Checkbox (LGPD) */}
              <div className="mb-8 p-4 bg-[#0A0A0A] border border-[#181818] rounded-sm">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="consentPrivacy"
                    checked={formData.consentPrivacy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-gray-600 text-[#C9A45C] focus:ring-[#C9A45C] bg-[#181818] cursor-pointer"
                  />
                  <span className="text-xs text-[#F4F0E8]/70 leading-relaxed font-sans">
                    {language === 'pt'
                      ? 'Concordo com o tratamento dos meus dados corporativos fornecidos acima para avaliação de elegibilidade pela Secretaria Executiva da TITANS SOCIETY, de acordo com a '
                      : 'I consent to the processing of corporate details supplied above for eligibility vetting by the Executive Secretariat of TITANS SOCIETY, in adherence to the '}
                    <button
                      type="button"
                      onClick={onOpenPrivacyModal}
                      className="text-[#C9A45C] underline hover:text-[#F0D28A] cursor-pointer inline focus:outline-none font-medium"
                    >
                      {language === 'pt' ? 'Política de Privacidade' : 'Privacy & Confidentiality Policy'}
                    </button>
                    .
                  </span>
                </label>
                {errors.consentPrivacy && <p className="text-red-400 text-xs mt-2 pl-7">{errors.consentPrivacy}</p>}
              </div>

              {/* Submit Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-[#181818]">
                <span className="text-xs font-mono text-[#F4F0E8]/40 tracking-wider">
                  {language === 'pt' ? 'Avaliação em até 5 dias úteis.' : 'Deliberation within 5 business days.'}
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 text-xs font-bold uppercase gold-button-primary rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_30px_rgba(201,164,92,0.35)] tracking-[0.2em]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#050505]" />
                      <span>{language === 'pt' ? 'Transmitindo ao Comitê...' : 'Transmitting to Board...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{language === 'pt' ? 'Submeter Candidatura' : 'Submit Candidacy'}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#050505]" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
