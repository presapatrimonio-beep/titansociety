import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ExclusivitySectionProps {
  onRequestEvaluation?: () => void;
}

export const ExclusivitySection: React.FC<ExclusivitySectionProps> = ({ onRequestEvaluation }) => {
  const principles = [
    {
      index: '01',
      title: 'CURADORIA',
      subtitle: 'Filtro Humano de Idoneidade',
      desc: 'Nenhum aporte financeiro substitui o histórico de integridade. Avaliamos a maturidade da operação, a reputação de mercado e o alinhamento ético com os princípios da sociedade.'
    },
    {
      index: '02',
      title: 'REPUTAÇÃO',
      subtitle: 'O Capital Intangível Inegociável',
      desc: 'No topo dos negócios, a palavra de um líder precede qualquer contrato. Consultamos pares e histórico societário para assegurar que cada assento seja ocupado por quem honra seus compromissos.'
    },
    {
      index: '03',
      title: 'COMPROMISSO',
      subtitle: 'Presença e Generosidade Estratégica',
      desc: 'A sociedade não tolera espectadores. Exigimos pontualidade cirúrgica nos rituais, assiduidade comprovada e disposição ativa para abrir portas aos demais membros.'
    },
    {
      index: '04',
      title: 'EXCLUSIVIDADE',
      subtitle: 'Blindagem de Cadeira por Segmento',
      desc: 'Uma única organização por especialidade econômica em cada núcleo. Eliminamos qualquer atrito de concorrência interna, garantindo canal aberto e direcionamento irrestrito de referências.'
    }
  ];

  const handleCta = () => {
    if (onRequestEvaluation) {
      onRequestEvaluation();
    } else {
      const el = document.querySelector('#candidatura');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="exclusividade" className="relative py-36 bg-[#050505] overflow-hidden text-[#F0EDE6]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(212,179,106,0.05),transparent_80%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Monumental Headline Spread */}
        <div className="max-w-4xl text-left mb-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#D4B36A] font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-[#D4B36A]" />
            <span>Critério de Admissão & Blindagem de Cadeira</span>
          </div>

          <h2 
            className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-[#F0EDE6] uppercase tracking-[0.03em] leading-[1.06] mb-6 text-balance"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Não é sobre ter acesso a todos.
            <span className="block text-[#D4B36A] font-semibold mt-2">
              É sobre construir acesso às pessoas certas.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#F0EDE6]/80 font-serif italic max-w-2xl leading-relaxed font-light">
            A proteção do ecossistema é o maior ativo entregue a cada membro. Quatro alicerces inegociáveis guardam as portas da TITANS SOCIETY.
          </p>
        </div>

        {/* Monumental Architectural Portal Display */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-xs mb-20 group">
          <img
            src="/src/assets/images/curatorship_portal_1791896597522.jpg"
            alt="The Inner Gate — Portal monumental em pedra mineral negra e metal dourado"
            className="w-full h-full object-cover filter contrast-125 transition-transform duration-1000 ease-out group-hover:scale-102"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          
          {/* Subtle Vignette Masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-[#050505]/40" />

          {/* Integrated Monolith Caption Bar */}
          <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3 text-[#F0EDE6]">
              <span className="h-2 w-2 rounded-full bg-[#D4B36A]" />
              <span className="tracking-widest uppercase font-semibold text-[#D4B36A]">THE INNER GATE</span>
              <span className="text-[#A6A19A] hidden sm:inline">· AUDITORIA DE REPUTAÇÃO E CONDUTA</span>
            </div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4B36A] font-medium">
              CURADORIA 100% HUMANA
            </div>
          </div>
        </div>

        {/* The 4 Principles — Seamless Architectural Matrix (No repetitive cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-12 border-t border-b border-[#151513] text-left">
          {principles.map((pr) => (
            <div key={pr.title} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-[#D4B36A]">
                    {pr.index}
                  </span>
                  <span className="h-[1px] w-6 bg-[#D4B36A]/40" />
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#A6A19A]">
                    {pr.title}
                  </span>
                </div>

                <h3 className="text-lg font-serif italic text-[#F0EDE6] mb-3 leading-snug">
                  {pr.subtitle}
                </h3>

                <p className="text-xs sm:text-sm text-[#A6A19A] font-sans leading-relaxed font-light">
                  {pr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Authority Resolution */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <p className="text-sm font-sans text-[#A6A19A] font-light max-w-md">
            A disponibilidade de cadeiras é rigorosamente auditada antes de qualquer convite formal ou abertura de sabatina.
          </p>

          <button
            onClick={handleCta}
            className="px-9 py-4 text-xs font-bold uppercase gold-button-primary rounded-xs flex items-center gap-2.5 cursor-pointer tracking-[0.2em]"
          >
            <span>Solicitar Avaliação</span>
            <ArrowUpRight className="w-4 h-4 text-[#050505]" />
          </button>
        </div>

      </div>
    </section>
  );
};
