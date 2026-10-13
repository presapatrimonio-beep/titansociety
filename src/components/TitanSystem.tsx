import React, { useState } from 'react';
import { TITAN_PILLARS } from '../data/societyData';

export const TitanSystem: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const activePillar = TITAN_PILLARS.find((p) => p.id === activeId) || TITAN_PILLARS[0];

  return (
    <section id="sistema-titan" className="relative bg-[#050505] text-[#F0EDE6] py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#D4B36A] font-semibold block mb-3">
            A Engenharia da Confiança
          </span>
          <h2 
            className="text-3xl sm:text-5xl font-display font-medium uppercase tracking-[0.03em] leading-tight mb-4 text-[#F0EDE6]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            O Sistema TITAN
          </h2>
          <p className="text-sm sm:text-base text-[#A6A19A] font-sans font-light leading-relaxed max-w-xl">
            Uma engrenagem proprietária de sete vetores integrados. Selecione um elemento para inspecionar seus fundamentos operacionais.
          </p>
        </div>

        {/* Integrated Precision Mechanism & Reading Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Radial Geometric Mechanism & Vector Selector (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Minimalist Vector Grid (Refined linear list with active highlight) */}
            <div className="divide-y divide-[#151513] border-t border-b border-[#151513]">
              {TITAN_PILLARS.map((pillar) => {
                const isSelected = pillar.id === activeId;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveId(pillar.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveId(pillar.id);
                      }
                    }}
                    className={`w-full text-left py-4 px-2 transition-all duration-200 flex items-center justify-between group focus:outline-none cursor-pointer ${
                      isSelected ? 'text-[#F0EDE6]' : 'text-[#A6A19A] hover:text-[#F0EDE6]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-mono transition-colors ${isSelected ? 'text-[#D4B36A] font-bold' : 'text-[#A6A19A]'}`}>
                        0{pillar.id}
                      </span>
                      <span 
                        className={`text-sm sm:text-base font-display uppercase tracking-wider transition-colors ${
                          isSelected ? 'text-[#D4B36A] font-medium' : 'text-[#F0EDE6]/70 group-hover:text-[#F0EDE6]'
                        }`}
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        {pillar.title}
                      </span>
                    </div>

                    <span className={`text-[10px] font-mono tracking-widest uppercase transition-opacity ${isSelected ? 'text-[#D4B36A] opacity-100' : 'opacity-0 group-hover:opacity-60'}`}>
                      {isSelected ? 'Ativo' : 'Ver'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Unboxed Reading Space (6 cols) */}
          <div className="lg:col-span-6 text-left pt-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl sm:text-4xl font-display font-light text-[#D4B36A]">
                0{activePillar.id}
              </span>
              <div className="h-6 w-[1px] bg-[#D4B36A]/30" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4B36A] font-semibold">
                Vetor Institucional
              </span>
            </div>

            <h3 
              className="text-2xl sm:text-4xl font-display font-medium uppercase tracking-wide text-[#F0EDE6] mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {activePillar.title}
            </h3>

            <p className="text-lg font-serif italic text-[#F0EDE6]/90 mb-6 leading-relaxed font-light">
              &ldquo;{activePillar.shortDesc}&rdquo;
            </p>

            <p className="text-sm sm:text-base text-[#A6A19A] font-sans font-light leading-relaxed mb-8">
              {activePillar.detailedDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#151513]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4B36A] block mb-1 font-semibold">
                  Impacto Operacional
                </span>
                <p className="text-xs text-[#A6A19A] leading-relaxed font-sans font-light">
                  {activePillar.operationalImpact}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4B36A] block mb-1 font-semibold">
                  Mecanismo de Aplicação
                </span>
                <p className="text-xs text-[#A6A19A] leading-relaxed font-sans font-light">
                  {activePillar.ritualDetail}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
