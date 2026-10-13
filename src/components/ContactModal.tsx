import React, { useState } from 'react';
import { X, Mail, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('secretaria@titanssociety.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/92 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-[#0B0B0A] border border-[#151513] max-w-lg w-full p-8 sm:p-10 rounded-xs shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#A6A19A] hover:text-[#F0EDE6] p-1.5 focus:outline-none cursor-pointer"
          aria-label="Fechar contato"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#D4B36A] uppercase tracking-[0.25em] mb-3 font-semibold">
          <span>CANAL INSTITUCIONAL</span>
        </div>

        <h3 
          className="text-2xl sm:text-3xl font-display font-medium text-[#F0EDE6] uppercase mb-2"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Secretaria Executiva
        </h3>
        <p className="text-sm text-[#A6A19A] font-serif italic mb-8 font-light">
          Atendimento reservado a membros, pretendentes e interlocuções institucionais.
        </p>

        <div className="space-y-4 mb-8">
          <div className="p-5 bg-[#050505] border border-[#151513] rounded-xs flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#D4B36A]" />
              <div>
                <span className="text-[10px] font-mono text-[#A6A19A] block uppercase tracking-wider">E-mail Oficial</span>
                <span className="text-xs sm:text-sm text-[#F0EDE6] font-mono">secretaria@titanssociety.com</span>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-1.5 text-xs font-mono uppercase bg-[#151513] hover:bg-[#1C1C1A] text-[#D4B36A] border border-[#D4B36A]/30 rounded-xs cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : 'Copiar'}
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[#151513] flex items-center justify-between text-xs font-mono text-[#A6A19A]/60">
          <span>RESPOSTA EM ATÉ 24 HORAS</span>
          <span className="text-[#D4B36A]">DIRETORIA DE EXPANSÃO</span>
        </div>
      </div>
    </div>
  );
};
