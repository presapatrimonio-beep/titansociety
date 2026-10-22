import React, { useState } from 'react';
import { MembershipTier } from '../types';
import { ArrowUpRight, X, Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MembershipTiersProps {
  onSelectTier: (tierName: string) => void;
}

export const MembershipTiers: React.FC<MembershipTiersProps> = ({ onSelectTier }) => {
  const { language, t } = useLanguage();
  const [selectedTier, setSelectedTier] = useState<MembershipTier | null>(null);

  const tierMeta: Record<string, { image: string; scale: string; narrative: string }> = {
    connect: {
      image: '/assets/images/inner_circle_lounge_1791896599200.jpg',
      scale: language === 'pt' ? '01 · Nível Regional' : '01 · Regional Tier',
      narrative: language === 'pt'
        ? 'A fortaleza local de confiança inegociável. Uma única cadeira por especialidade blinda o nicho de mercado e catalisa referências qualificadas de alto valor no polo metropolitano.'
        : 'The local fortress of non-negotiable trust. A single seat per specialty shields the market niche and catalyzes high-value qualified referrals within the metropolitan hub.'
    },
    council: {
      image: '/assets/images/boardroom_executive_1791896596094.jpg',
      scale: language === 'pt' ? '02 · Nível Nacional' : '02 · National Tier',
      narrative: language === 'pt'
        ? 'A articulação estratégica entre múltiplos centros de decisão econômica. Diálogos de governança, fusões, alianças interestaduais e comitês setoriais de alta densidade.'
        : 'Strategic articulation across multiple economic decision hubs. Governance dialogues, mergers, interstate alliances, and high-density sector committees.'
    },
    global: {
      image: '/assets/images/global_perspective_1791896599228.jpg',
      scale: language === 'pt' ? '03 · Nível Internacional' : '03 · International Tier',
      narrative: language === 'pt'
        ? 'A amplitude sobre as capitais financeiras mundiais. Relações com fundos, ecossistemas de inovação no exterior, missões institucionais e posicionamento sem limites territoriais.'
        : 'A panoramic horizon spanning global financial capitals. Alliances with private equity, foreign innovation hubs, diplomatic missions, and borderless positioning.'
    }
  };

  const tiers = t.tiers.items;

  return (
    <section id="niveis" className="relative bg-[#050505] text-[#F0EDE6] py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-24 text-left">
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#D4B36A] font-semibold block mb-3">
            {language === 'pt' ? 'A Jornada Institucional' : 'The Institutional Journey'}
          </span>
          <h2 
            className="text-3xl sm:text-5xl font-display font-medium uppercase tracking-[0.03em] leading-tight mb-4 text-[#F0EDE6]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {language === 'pt' ? 'Três Escalas de Influência' : 'Three Scales of Influence'}
          </h2>
          <p className="text-sm sm:text-base text-[#A6A19A] font-sans font-light leading-relaxed max-w-xl">
            {language === 'pt'
              ? 'A expansão das relações empresariais através de três dimensões de governança, alcance e interlocução executiva.'
              : 'The expansion of corporate relationships through three dimensions of governance, reach, and executive dialogue.'}
          </p>
        </div>

        {/* Continuous Narrative of Progression (Alternating Architectural Layouts) */}
        <div className="space-y-32">
          {tiers.map((tier, idx) => {
            const meta = tierMeta[tier.id] || tierMeta.connect;
            const isReversed = idx % 2 === 1;

            return (
              <div 
                key={tier.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left"
              >
                {/* Visual Architecture Frame (6 cols) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xs">
                    <img
                      src={meta.image}
                      alt={`Escala visual ${tier.name}`}
                      className="w-full h-full object-cover filter contrast-125"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Editorial Content (6 cols) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="max-w-xl">
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4B36A] font-semibold block mb-2">
                      {meta.scale} · {tier.scope}
                    </span>

                    <h3 
                      className="text-3xl sm:text-5xl font-display font-medium uppercase tracking-wide text-[#F0EDE6] mb-3"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {tier.name}
                    </h3>

                    <p className="text-lg font-serif italic text-[#F0EDE6]/90 mb-4 leading-relaxed font-light">
                      &ldquo;{tier.tagline}&rdquo;
                    </p>

                    <p className="text-sm sm:text-base text-[#A6A19A] font-sans font-light leading-relaxed mb-6">
                      {meta.narrative}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#A6A19A] mb-8 pt-4 border-t border-[#151513]">
                      <div>
                        <span className="text-[#D4B36A] block text-[10px] uppercase tracking-wider font-semibold">
                          {language === 'pt' ? 'Frequência:' : 'Cadence:'}
                        </span>
                        <span className="text-[#F0EDE6] font-sans">{tier.meetingFrequency}</span>
                      </div>
                      <div className="h-4 w-[1px] bg-[#151513]" />
                      <div>
                        <span className="text-[#D4B36A] block text-[10px] uppercase tracking-wider font-semibold">
                          {language === 'pt' ? 'Quórum:' : 'Quorum:'}
                        </span>
                        <span className="text-[#F0EDE6] font-sans">{tier.capacityRule}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <button
                        onClick={() => setSelectedTier(tier)}
                        className="text-xs font-mono uppercase tracking-wider text-[#D4B36A] hover:underline cursor-pointer"
                      >
                        {language === 'pt' ? 'Diretrizes & Critérios →' : 'Guidelines & Criteria →'}
                      </button>
                      <button
                        onClick={() => onSelectTier(tier.name)}
                        className="px-6 py-3 text-xs font-bold uppercase gold-button-primary rounded-xs cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{language === 'pt' ? `Candidatar-se ao ${tier.name}` : `Apply for ${tier.name}`}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#050505]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Progression Note */}
        <div className="mt-28 pt-8 border-t border-[#151513] text-left flex items-start gap-3.5 text-xs text-[#A6A19A] font-sans font-light max-w-3xl">
          <AlertCircle className="w-4 h-4 text-[#D4B36A] shrink-0 mt-0.5" />
          <p>
            {language === 'pt'
              ? 'O ingresso e a eventual transição entre os níveis CONNECT, COUNCIL e GLOBAL não são concedidos automaticamente por tempo de permanência ou aporte financeiro. O acesso a cada estágio depende estritamente do cumprimento dos critérios de governança, reputação de mercado e parecer colegiado da TITANS SOCIETY.'
              : 'Admission and eventual transition across CONNECT, COUNCIL, and GLOBAL tiers are never granted automatically through tenure or financial contribution. Access to each milestone depends strictly on governance compliance, market reputation, and collective evaluation by TITANS SOCIETY.'}
          </p>
        </div>

      </div>

      {/* Tier Detail Modal */}
      {selectedTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/95 backdrop-blur-xl animate-fadeIn">
          <div className="bg-[#0C0C0B] border border-[#D4B36A]/40 max-w-2xl w-full p-8 sm:p-12 rounded-xs relative text-left">
            <button
              onClick={() => setSelectedTier(null)}
              className="absolute top-6 right-6 text-[#A6A19A] hover:text-[#F0EDE6] p-1.5 focus:outline-none cursor-pointer"
              aria-label="Fechar painel"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-[#D4B36A] uppercase tracking-widest mb-2 block font-semibold">
              {selectedTier.scope} · {language === 'pt' ? 'ESTATUTO DE GOVERNANÇA' : 'GOVERNANCE STATUTE'}
            </span>

            <h3 
              className="text-3xl font-display font-medium text-[#F0EDE6] uppercase mb-2"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {language === 'pt' ? `Nível ${selectedTier.name}` : `${selectedTier.name} Tier`}
            </h3>
            <p className="text-sm font-serif italic text-[#D4B36A] mb-6">
              {selectedTier.tagline}
            </p>

            <p className="text-sm text-[#A6A19A] font-sans font-light leading-relaxed mb-6">
              {selectedTier.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4B36A] font-semibold mb-3">
                {language === 'pt' ? 'Critérios de Admissão:' : 'Admission Criteria:'}
              </h4>
              <ul className="space-y-2">
                {selectedTier.curationCriteria.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#F0EDE6]/80 font-light">
                    <Check className="w-3.5 h-3.5 text-[#D4B36A] shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-4 pt-6 border-t border-[#151513]">
              <button
                onClick={() => setSelectedTier(null)}
                className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#A6A19A] hover:text-[#F0EDE6] cursor-pointer"
              >
                {language === 'pt' ? 'Fechar' : 'Close'}
              </button>
              <button
                onClick={() => {
                  const tierName = selectedTier.name;
                  setSelectedTier(null);
                  onSelectTier(tierName);
                }}
                className="px-6 py-2.5 text-xs font-bold uppercase gold-button-primary rounded-xs cursor-pointer"
              >
                {language === 'pt' ? 'Avançar com Candidatura' : 'Proceed with Application'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
