import React from 'react';
import { ArrowUpRight, Landmark } from 'lucide-react';

interface FounderSectionProps {
  onJoinFounderCircle: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onJoinFounderCircle }) => {
  const commitments = [
    {
      index: '01',
      title: 'ASSIDUIDADE',
      desc: 'Presença prioritária e pontualidade cirúrgica nos rituais de conselho, estabelecendo o padrão de disciplina executiva para todos os futuros membros.'
    },
    {
      index: '02',
      title: 'ZELO PELA REPUTAÇÃO',
      desc: 'Proteção irrestrita da integridade, do sigilo absoluto das trocas e do prestígio da marca institucional em sua praça de atuação.'
    },
    {
      index: '03',
      title: 'GENEROSIDADE ESTRATÉGICA',
      desc: 'Disposição ativa para compartilhar inteligência, abrir portas qualificadas e fomentar oportunidades de alto impacto com reciprocidade genuína.'
    },
    {
      index: '04',
      title: 'PARTICIPAÇÃO INSTITUCIONAL',
      desc: 'Voz consultiva na sabatina e na curadoria de novos pretendentes, assegurando que o ecossistema preserve sua densidade intelectual e ética.'
    }
  ];

  return (
    <section id="nucleo-fundador" className="relative py-36 bg-[#050505] overflow-hidden text-[#F0EDE6]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(212,179,106,0.04),transparent_75%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl text-left mb-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#D4B36A] font-semibold mb-4">
            <Landmark className="w-4 h-4 text-[#D4B36A]" />
            <span>O Núcleo Fundador · O Quórum Pioneiro</span>
          </div>

          <h2 
            className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-[#F0EDE6] uppercase tracking-[0.03em] leading-[1.06] mb-6 text-balance"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Algumas pessoas não entram em uma história.
            <span className="block text-[#D4B36A] font-semibold mt-2">
              Elas ajudam a escrevê-la.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#F0EDE6]/80 font-serif italic max-w-2xl leading-relaxed font-light">
            O nascimento de uma instituição: os pioneiros que moldam os alicerces, o tom ético e o padrão de excelência de uma nova praça.
          </p>
        </div>

        {/* Monumental Central Artwork: The Empty Chair of Leadership */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-xs mb-20 group">
          <img
            src="/assets/images/founding_chair_monolith_1791898483923.jpg"
            alt="Mesa de pedra negra com a cadeira central vazia simbolizando responsabilidade e liderança fundadora"
            className="w-full h-full object-cover object-center filter contrast-125 transition-transform duration-1000 ease-out group-hover:scale-102"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-[#050505]/30" />
          
          {/* Architectural Plaque Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3 text-[#F0EDE6]">
              <span className="h-2 w-2 rounded-full bg-[#D4B36A]" />
              <span className="text-[#D4B36A] font-semibold tracking-wider">O ASSENTO FUNDACIONAL</span>
              <span className="text-[#A6A19A] hidden sm:inline">· RESPONSABILIDADE, VISÃO E CONSTRUÇÃO INSTITUCIONAL</span>
            </div>
            <div className="text-[#D4B36A] tracking-[0.2em] text-[11px] uppercase font-semibold">
              QUÓRUM INAUGURAL RESTRITO
            </div>
          </div>
        </div>

        {/* Narrative & The 4 Editorial Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 text-left">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4B36A] font-semibold block mb-3">
              O Papel do Núcleo Fundador
            </span>
            <p className="text-base text-[#F0EDE6]/80 leading-relaxed font-sans mb-6 font-light">
              Quando a TITANS SOCIETY inaugura suas operações em um novo polo econômico, os fundadores são os guardiões inegociáveis dos padrões de conduta. Sua solidez moral atrai e valida os próximos líderes que ocuparão as cadeiras exclusivas.
            </p>
            <p className="text-xs text-[#A6A19A] leading-relaxed font-mono border-l border-[#D4B36A]/40 pl-4">
              *O ingresso no Núcleo Fundador está sujeito à aprovação institucional do conselho executivo após sabatina individual. Não há concessão de benefícios societários ou financeiros na instituição.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#151513]">
            {commitments.map((c, i) => (
              <div key={c.title} className={`${i > 0 && i % 2 === 0 ? 'sm:border-t sm:border-[#151513] sm:pt-8' : ''} ${i % 2 === 1 ? 'sm:pl-8' : ''} ${i > 1 ? 'sm:border-t sm:border-[#151513] sm:pt-8' : ''} pt-6 sm:pt-0`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#D4B36A]">
                    {c.index}
                  </span>
                  <span className="h-[1px] w-4 bg-[#D4B36A]/40" />
                  <span className="text-xs font-mono tracking-widest uppercase text-[#F0EDE6] font-medium">
                    {c.title}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#A6A19A] font-sans leading-relaxed font-light">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Action Button */}
        <div className="text-left flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 border-t border-[#151513]">
          <button
            onClick={onJoinFounderCircle}
            className="px-9 py-4 text-xs font-bold uppercase gold-button-primary rounded-xs flex items-center gap-2.5 cursor-pointer tracking-[0.2em]"
          >
            <span>Conhecer o Núcleo Fundador</span>
            <ArrowUpRight className="w-4 h-4 text-[#050505]" />
          </button>
          <span className="text-xs font-mono text-[#A6A19A] tracking-wider">
            Avaliação direta pelo conselho executivo de governança.
          </span>
        </div>

      </div>
    </section>
  );
};
