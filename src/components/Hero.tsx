import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExploreSystem: () => void;
  onStartCandidacy: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSystem, onStartCandidacy }) => {
  const { language, t } = useLanguage();
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-[#050505] pt-32 sm:pt-36 lg:pt-40 pb-20">
      {/* Background Architectural Canvas — Bleeding into deep obsidian */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/images/monumental_hero_pavilion_1791898483900.jpg"
          alt="Monumental dark architecture"
          className="w-full h-full object-cover object-center opacity-30 filter contrast-125 scale-100"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Graded Atmospheric Obsidian Masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70" />
      </div>

      {/* Right-Hand Spatial Plane: Golden Chess Monolith naturally emerging without card borders */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0 pointer-events-none flex items-center justify-end overflow-hidden">
        <div className="relative w-full h-full max-w-2xl lg:max-w-none">
          <img
            src="/assets/images/hero_chess_monolith_1791896594267.jpg"
            alt="Escultura da peça de xadrez dourada da TITANS SOCIETY"
            className="w-full h-full object-cover object-center opacity-45 lg:opacity-60 filter contrast-125 mix-blend-screen scale-100"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          {/* Seamless feathering masks so it blends into the architecture */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        </div>
      </div>

      {/* Editorial Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
        <div className="max-w-3xl text-left">
          
          {/* Institutional Signature */}
          <div className="mb-8">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-[#D4B36A] font-semibold">
              INTENTIONAL BUSINESS NETWORKING
            </span>
          </div>

          {/* Monumental Headline */}
          <h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-display font-medium text-[#F0EDE6] uppercase tracking-[0.03em] leading-[1.04] mb-6 text-balance"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {language === 'pt' ? 'Você já construiu.' : 'You have built.'}
            <span className="block text-[#D4B36A] font-semibold mt-2">
              {language === 'pt' ? 'Agora escolha com quem crescer.' : 'Now choose whom to grow with.'}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-[#F0EDE6]/90 font-serif italic mb-6 leading-relaxed font-light max-w-2xl">
            {language === 'pt'
              ? 'Uma rede empresarial construída sobre confiança, mérito e relações estratégicas.'
              : 'A business network built on trust, merit, and high-stakes strategic alliances.'}
          </p>

          {/* Complementary Text */}
          <p className="text-sm sm:text-base text-[#A6A19A] font-sans leading-relaxed mb-10 max-w-xl font-light">
            {language === 'pt'
              ? 'A TITANS SOCIETY transforma relacionamentos intencionais em um sistema estruturado de confiança, referências qualificadas e oportunidades empresariais.'
              : 'TITANS SOCIETY transforms intentional relationships into a structured system of mutual trust, qualified referrals, and enterprise opportunities.'}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <button
              onClick={onStartCandidacy}
              className="px-9 py-4 text-xs font-bold uppercase gold-button-primary rounded-xs flex items-center justify-center gap-2.5 cursor-pointer tracking-[0.2em]"
            >
              <span>{t.hero.btnApply}</span>
              <ArrowUpRight className="w-4 h-4 text-[#050505]" />
            </button>

            <button
              onClick={onExploreSystem}
              className="px-8 py-4 text-xs font-semibold uppercase text-[#A6A19A] hover:text-[#F0EDE6] transition-colors cursor-pointer tracking-[0.2em] font-mono text-left sm:text-center"
            >
              {t.hero.btnExplore} &rarr;
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
