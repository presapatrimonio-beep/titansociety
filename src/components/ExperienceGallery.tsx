import React, { useState } from 'react';
import { ConceptualEnvironment } from '../types';
import { Maximize2, X, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ExperienceGallery: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeEnvironment, setActiveEnvironment] = useState<ConceptualEnvironment | null>(null);

  const environments = t.experience.environments;
  const boardroom = environments.find(e => e.id === 'boardroom') || environments[0];
  const connection = environments.find(e => e.id === 'connection') || environments[1];
  const innerCircle = environments.find(e => e.id === 'inner-circle') || environments[2];
  const globalPerspective = environments.find(e => e.id === 'global-perspective') || environments[3];

  return (
    <section id="experiencia" className="relative py-36 bg-[#050505] overflow-hidden text-[#F0EDE6]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(212,179,106,0.04),transparent_75%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl text-left mb-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#D4B36A] font-semibold mb-4">
            <Compass className="w-4 h-4 text-[#D4B36A]" />
            <span>
              {language === 'pt'
                ? 'Atmosferas Conceituais · Cenários Institucionais'
                : 'Conceptual Atmospheres · Institutional Settings'}
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-[#F0EDE6] uppercase tracking-[0.03em] leading-[1.06] mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {language === 'pt' ? 'A Experiência TITANS' : 'The TITANS Experience'}
          </h2>

          <p className="text-lg sm:text-xl text-[#F0EDE6]/80 font-serif italic max-w-2xl leading-relaxed font-light">
            {language === 'pt'
              ? 'Territórios conceituais onde a arquitetura, a sobriedade e a discrição servem de palco para grandes articulações.'
              : 'Conceptual spaces where architecture, sobriety, and discretion set the stage for monumental deliberations.'}
          </p>
          <span className="text-[11px] font-mono text-[#A6A19A] tracking-wider uppercase block mt-4">
            {language === 'pt'
              ? '*Ambientes conceituais representando a atmosfera dos rituais executivos'
              : '*Conceptual environments representing the atmosphere of executive rituals'}
          </span>
        </div>

        {/* Varied Scale Architectural Photo-Editorial Layout */}
        <div className="space-y-12">
          
          {/* Feature 1: Monumental Full-Width Architectural Panorâmica (THE BOARDROOM) */}
          <div 
            onClick={() => setActiveEnvironment(boardroom)}
            className="group relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-xs cursor-pointer shadow-2xl"
          >
            <img
              src={boardroom.imagePath}
              alt="THE BOARDROOM - Sala de conselho executivo com vista para o horizonte noturno"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-102"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
            
            <div className="absolute top-6 right-6 p-2.5 bg-[#050505]/80 backdrop-blur-sm text-[#F0EDE6] group-hover:text-[#D4B36A] border border-[#151513] rounded-xs transition-colors">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4B36A] block mb-1 font-semibold">
                  {language === 'pt' ? '01 · ATMOSFERA ESTRATÉGICA' : '01 · STRATEGIC ATMOSPHERE'}
                </span>
                <h3 
                  className="text-2xl sm:text-4xl font-display font-medium text-[#F0EDE6] uppercase tracking-wide group-hover:text-[#E8D19B] transition-colors"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {boardroom.title}
                </h3>
                <p className="text-sm font-serif italic text-[#D4B36A]">
                  {boardroom.subtitle}
                </p>
              </div>
              <p className="text-xs text-[#A6A19A] font-sans max-w-md font-light hidden sm:block">
                {boardroom.description}
              </p>
            </div>
          </div>

          {/* Feature 2 & 3: Asymmetric Split (Left: Vertical Inner Circle, Right: Wide Global Horizon) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left: Vertical / Portrait Aspect Frame (THE INNER CIRCLE) */}
            <div 
              onClick={() => setActiveEnvironment(innerCircle)}
              className="lg:col-span-5 group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xs cursor-pointer shadow-2xl flex flex-col justify-end p-8"
            >
              <img
                src={innerCircle.imagePath}
                alt="THE INNER CIRCLE - Refúgio privado dos líderes"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-102"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              
              <div className="absolute top-6 right-6 p-2.5 bg-[#050505]/80 backdrop-blur-sm text-[#F0EDE6] group-hover:text-[#D4B36A] border border-[#151513] rounded-xs transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="relative z-10 text-left">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4B36A] block mb-1 font-semibold">
                  {language === 'pt' ? '02 · AMBIENTE CONFIDENCIAL' : '02 · CONFIDENTIAL SANCTUARY'}
                </span>
                <h3 
                  className="text-2xl sm:text-3xl font-display font-medium text-[#F0EDE6] uppercase tracking-wide group-hover:text-[#E8D19B] transition-colors mb-1"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {innerCircle.title}
                </h3>
                <p className="text-sm font-serif italic text-[#D4B36A] mb-2">
                  {innerCircle.subtitle}
                </p>
                <p className="text-xs text-[#A6A19A] font-sans font-light">
                  {innerCircle.description}
                </p>
              </div>
            </div>

            {/* Right: Horizontal Panoramic Frame (THE GLOBAL PERSPECTIVE) */}
            <div 
              onClick={() => setActiveEnvironment(globalPerspective)}
              className="lg:col-span-7 group relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xs cursor-pointer shadow-2xl flex flex-col justify-end p-8"
            >
              <img
                src={globalPerspective.imagePath}
                alt="THE GLOBAL PERSPECTIVE - Conexão transfronteiriça com centros de decisão globais"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-102"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              
              <div className="absolute top-6 right-6 p-2.5 bg-[#050505]/80 backdrop-blur-sm text-[#F0EDE6] group-hover:text-[#D4B36A] border border-[#151513] rounded-xs transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="relative z-10 text-left">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4B36A] block mb-1 font-semibold">
                  {language === 'pt' ? '03 · HORIZONTE GLOBAL' : '03 · GLOBAL HORIZON'}
                </span>
                <h3 
                  className="text-2xl sm:text-3xl font-display font-medium text-[#F0EDE6] uppercase tracking-wide group-hover:text-[#E8D19B] transition-colors mb-1"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {globalPerspective.title}
                </h3>
                <p className="text-sm font-serif italic text-[#D4B36A] mb-2">
                  {globalPerspective.subtitle}
                </p>
                <p className="text-xs text-[#A6A19A] font-sans font-light">
                  {globalPerspective.description}
                </p>
              </div>
            </div>

          </div>

          {/* Feature 4: Full-Width Horizontal Editorial Block (THE CONNECTION) */}
          <div 
            onClick={() => setActiveEnvironment(connection)}
            className="group relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-xs cursor-pointer shadow-2xl flex flex-col justify-end p-8 sm:p-12"
          >
            <img
              src={connection.imagePath}
              alt="THE CONNECTION - Precisão do movimento tático no xadrez executivo"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-102"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
            
            <div className="absolute top-6 right-6 p-2.5 bg-[#050505]/80 backdrop-blur-sm text-[#F0EDE6] group-hover:text-[#D4B36A] border border-[#151513] rounded-xs transition-colors">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="relative z-10 text-left max-w-xl">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4B36A] block mb-1 font-semibold">
                {language === 'pt' ? '04 · O MOVIMENTO TÁTICO' : '04 · THE TACTICAL MOVE'}
              </span>
              <h3 
                className="text-2xl sm:text-3xl font-display font-medium text-[#F0EDE6] uppercase tracking-wide group-hover:text-[#E8D19B] transition-colors mb-1"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {connection.title}
              </h3>
              <p className="text-sm font-serif italic text-[#D4B36A] mb-2">
                {connection.subtitle}
              </p>
              <p className="text-xs text-[#A6A19A] font-sans font-light">
                {connection.description}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Full Spatial Exploration */}
      {activeEnvironment && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-fadeIn"
          onClick={() => setActiveEnvironment(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#050505] border border-[#151513] rounded-xs overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveEnvironment(null)}
              className="absolute top-6 right-6 z-20 p-2 text-[#F0EDE6] hover:text-[#D4B36A] bg-[#050505]/80 backdrop-blur-md rounded-xs border border-[#151513] transition-colors cursor-pointer"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] overflow-hidden bg-black">
              <img
                src={activeEnvironment.imagePath}
                alt={activeEnvironment.title}
                className="w-full h-full object-cover filter contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>

            <div className="p-8 sm:p-10 text-left bg-[#050505]">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4B36A] font-semibold block mb-2">
                {language === 'pt' ? 'Atmosfera Conceitual' : 'Conceptual Atmosphere'}
              </span>
              <h3 
                className="text-3xl sm:text-4xl font-display font-medium text-[#F0EDE6] uppercase tracking-wide mb-2"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {activeEnvironment.title}
              </h3>
              <p className="text-base font-serif italic text-[#D4B36A] mb-4">
                {activeEnvironment.subtitle}
              </p>
              <p className="text-sm text-[#A6A19A] font-sans leading-relaxed font-light mb-6">
                {activeEnvironment.description}
              </p>
              <div className="pt-4 border-t border-[#151513] flex items-center justify-between text-xs font-mono text-[#A6A19A]">
                <span>TITANS SOCIETY · {language === 'pt' ? 'CENOGRAFIA CORPORATIVA' : 'EXECUTIVE SCENOGRAPHY'}</span>
                <span className="text-[#D4B36A]">
                  {language === 'pt' ? 'RESERVADO A MEMBROS HOMOLOGADOS' : 'RESERVED TO ACCREDITED MEMBERS'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
