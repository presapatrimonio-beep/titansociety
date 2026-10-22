import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CinematicClosingProps {
  onStartCandidacy: () => void;
}

export const CinematicClosing: React.FC<CinematicClosingProps> = ({ onStartCandidacy }) => {
  const { language } = useLanguage();

  return (
    <section className="relative py-44 bg-[#050505] border-t border-[#151513] overflow-hidden flex items-center justify-center text-center">
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/boardroom_executive_1791896596094.jpg"
          alt="Vista cinematográfica de conselho executivo TITANS SOCIETY"
          className="w-full h-full object-cover object-center opacity-25 filter grayscale contrast-125 scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center">
        <img
          src="/assets/logo.png"
          alt="TITANS SOCIETY"
          className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain filter drop-shadow-[0_6px_35px_rgba(212,179,106,0.3)] mb-8 opacity-95"
        />

        <span className="text-xs font-mono uppercase tracking-[0.32em] text-[#D4B36A] block mb-6 font-semibold">
          {language === 'pt' ? 'O Próximo Movimento Estratégico' : 'The Next Strategic Move'}
        </span>

        <h2 
          className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-[#F0EDE6] uppercase tracking-[0.03em] leading-tight mb-8"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {language === 'pt' ? 'Você já construiu.' : 'You have built.'}
          <span className="block text-[#D4B36A] font-semibold mt-2">
            {language === 'pt' ? 'Agora escolha com quem crescer.' : 'Now choose whom to grow with.'}
          </span>
        </h2>

        <p className="text-lg sm:text-2xl text-[#F0EDE6]/80 font-serif italic max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          {language === 'pt'
            ? '“A grandeza de uma trajetória é medida pela qualidade dos aliados que você escolhe para percorrê-la.”'
            : '“The magnitude of an executive journey is measured by the caliber of allies chosen to traverse it.”'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <button
            onClick={onStartCandidacy}
            className="w-full sm:w-auto px-10 py-4 text-xs font-bold gold-button-primary rounded-xs flex items-center justify-center gap-2.5 cursor-pointer tracking-[0.2em]"
          >
            <span>{language === 'pt' ? 'Iniciar Candidatura' : 'Apply for Membership'}</span>
            <ArrowUpRight className="w-4 h-4 text-[#050505]" />
          </button>
        </div>

        <div className="mt-16 text-[11px] font-mono text-[#A6A19A] tracking-[0.3em] uppercase">
          TITANS SOCIETY · INTENTIONAL BUSINESS NETWORKING
        </div>
      </div>
    </section>
  );
};
