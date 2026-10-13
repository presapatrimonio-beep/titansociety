import React from 'react';

export const ProblemSection: React.FC = () => {
  const challenges = [
    {
      index: '01',
      title: 'Solidão Decisória',
      manifesto: 'À medida que a operação cresce, o círculo de interlocutores genuínos encolhe criticamente.',
      elaboration: 'Líderes de alto escalão não encontram pares com os mesmos dilemas de governança, patrimônio e risco societário em conversas casuais. A tomada de decisões críticas torna-se um fardo solitário quando não há um ambiente seguro, desprovido de interesses velados, para debater estratégia.'
    },
    {
      index: '02',
      title: 'Ruído e Desconfiança',
      manifesto: 'Eventos massificados e grupos abertos tornaram-se feiras predatórias de prospecção comercial.',
      elaboration: 'A ausência de curadoria atrai abordagens superficiais e trocas vazias de cartões. Empresários experientes rapidamente se retiram de ambientes onde o tempo é desperdiçado e a confiança prévia não existe.'
    },
    {
      index: '03',
      title: 'Referências sem Método',
      manifesto: 'Indicações de negócios dependentes do acaso geram resultados imprevisíveis e frágeis.',
      elaboration: 'Sem metodologia estruturada, sem compromisso formal de reciprocidade e sem métricas de acompanhamento, o capital relacional de empresários consolidados é subaproveitado, limitando o potencial de alianças estratégicas de alto valor.'
    }
  ];

  return (
    <section id="o-problema" className="relative bg-[#050505] text-[#F0EDE6] pt-24 pb-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Continuous Editorial Grid (City Atmosphere + High-Density Prose) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Nocturnal Metropolis Photography (5 cols) */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xs">
              <img
                src="/assets/images/financial_district_night_1791898482626.jpg"
                alt="Distrito financeiro noturno — O custo invisível do networking convencional"
                className="w-full h-full object-cover filter contrast-125 opacity-70"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505]" />
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#A6A19A] uppercase tracking-widest">
              <span>Ambiente Corporativo</span>
              <span>A Fricção da Desconfiança</span>
            </div>
          </div>

          {/* Right Column: Continuous Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#D4B36A] font-semibold block mb-3">
                O Cenário Contemporâneo
              </span>

              <h2 
                className="text-3xl sm:text-5xl font-display font-medium uppercase tracking-[0.03em] leading-[1.08] mb-12 text-[#F0EDE6]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                O mundo está conectado.
                <span className="block text-[#D4B36A] italic font-serif normal-case mt-1 font-normal">
                  Mas confiança continua sendo rara.
                </span>
              </h2>

              {/* The 3 Challenges in an Integrated Editorial Flow (No cards!) */}
              <div className="space-y-12">
                {challenges.map((c) => (
                  <div key={c.index} className="pt-8 border-t border-[#151513]">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold text-[#D4B36A]">
                        {c.index}
                      </span>
                      <h3 
                        className="text-xl sm:text-2xl font-display uppercase tracking-wider text-[#F0EDE6]"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        {c.title}
                      </h3>
                    </div>

                    <p className="text-base sm:text-lg font-serif italic text-[#F0EDE6]/90 mb-3 leading-relaxed font-light">
                      &ldquo;{c.manifesto}&rdquo;
                    </p>

                    <p className="text-sm text-[#A6A19A] leading-relaxed font-sans font-light max-w-xl">
                      {c.elaboration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Visual Silence & Guiding Principle Resolution */}
        <div className="mt-32 pt-20 border-t border-[#151513] text-center max-w-4xl mx-auto">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4B36A] font-semibold block mb-4">
            Princípio Orientador
          </span>
          <p className="text-2xl sm:text-4xl md:text-5xl font-serif italic text-[#F0EDE6] leading-tight font-light">
            &ldquo;Pessoas em primeiro lugar.
            <span className="block text-[#D4B36A] not-italic font-display uppercase tracking-wider text-xl sm:text-3xl mt-3 font-medium">
              Negócios como consequência.&rdquo;
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
