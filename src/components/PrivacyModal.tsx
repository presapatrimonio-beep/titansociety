import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/92 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-[#0B0B0A] border border-[#151513] max-w-2xl w-full max-h-[85vh] flex flex-col rounded-xs shadow-2xl">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#151513] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D4B36A]" />
            <h3 
              className="text-base sm:text-lg font-display font-medium text-[#F0EDE6] uppercase tracking-wider"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {language === 'pt'
                ? 'Política de Privacidade e Governança de Dados'
                : 'Privacy Policy & Data Governance Protocol'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#A6A19A] hover:text-[#F0EDE6] p-1.5 focus:outline-none cursor-pointer"
            aria-label="Fechar termos"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#A6A19A] leading-relaxed font-sans font-light">
          {language === 'pt' ? (
            <>
              <p>
                <strong className="text-[#F0EDE6] font-medium">1. Finalidade do Tratamento de Dados:</strong> Os dados corporativos fornecidos na ficha de candidatura (nome, e-mail corporativo, telefone, empresa, cargo, segmento e objetivo) destinam-se exclusivamente à avaliação de elegibilidade e conformidade de cadeira setorial pelo Comitê de Admissão da TITANS SOCIETY.
              </p>
              <p>
                <strong className="text-[#F0EDE6] font-medium">2. Confidencialidade e Sigilo Corporativo:</strong> Todas as informações submetidas são tratadas como estritamente confidenciais. A TITANS SOCIETY não comercializa, não compartilha com terceiros e não utiliza os dados cadastrais para finalidades distintas da análise de candidatura e interlocução institucional.
              </p>
              <p>
                <strong className="text-[#F0EDE6] font-medium">3. Conformidade com a Legislação (LGPD):</strong> O titular dos dados possui o direito de solicitar a confirmação da existência de tratamento, a correção de dados incompletos ou a revogação de seu consentimento a qualquer momento, mediante solicitação formal direcionada à Secretaria Executiva.
              </p>
              <p>
                <strong className="text-[#F0EDE6] font-medium">4. Segurança da Informação:</strong> Empregamos padrões elevados de governança de dados e criptografia em trânsito para salvaguardar a integridade das submissões contra acesso não autorizado.
              </p>
              <p>
                <strong className="text-[#F0EDE6] font-medium">5. Retenção de Dados:</strong> Candidaturas não homologadas para assento imediato podem permanecer registradas em nosso banco de talentos executivos reservado para futuras aberturas de cadeiras, salvo manifestação expressa em contrário do titular.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-[#F0EDE6] font-medium">1. Purpose of Data Processing:</strong> Corporate intelligence supplied in the candidacy dossier (name, corporate email, telephone, company, executive title, specialty, and strategic intent) is utilized exclusively for eligibility vetting and sector seat clearance by the TITANS SOCIETY Admissions Committee.
              </p>
              <p>
                <strong className="text-[#F0EDE6] font-medium">2. Corporate Discretion & Secrecy:</strong> All submitted records are handled with absolute confidentiality. TITANS SOCIETY never commercializes, transmits to third parties, or repurposes registration data for activities beyond institutional vetting.
              </p>
              <p>
                <strong className="text-[#F0EDE6] font-medium">3. Regulatory Compliance:</strong> The dossier owner maintains the right to request audit confirmation, rectify information, or withdraw consent at any juncture via formal submission to the Executive Secretariat.
              </p>
              <p>
                <strong className="text-[#F0EDE6] font-medium">4. Information Security:</strong> High-governance protocols and in-transit encryption are enforced to safeguard the integrity of submissions against unauthorized interception.
              </p>
              <p>
                <strong className="text-[#F0EDE6] font-medium">5. Data Retention:</strong> Applications pending immediate chair vacancy may remain archived in our private executive reserve for upcoming chapter expansions, unless expressly stated otherwise.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#151513] flex items-center justify-between bg-[#050505]">
          <span className="text-[11px] font-mono text-[#A6A19A]/60">
            TITANS SOCIETY · {language === 'pt' ? 'GOVERNANÇA DE PRIVACIDADE' : 'PRIVACY GOVERNANCE'}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold uppercase gold-button-primary rounded-xs cursor-pointer tracking-wider"
          >
            {language === 'pt' ? 'Compreendido' : 'Understood'}
          </button>
        </div>
      </div>
    </div>
  );
};
