import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenContact }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#151513] pt-24 pb-14 text-[#A6A19A]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#151513] text-left">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 flex flex-col items-start">
            <img
              src="/assets/logo.png"
              alt="TITANS SOCIETY"
              className="h-14 sm:h-18 md:h-24 w-auto object-contain filter drop-shadow-[0_4px_20px_rgba(212,179,106,0.3)] mb-6"
            />
            <p className="text-lg text-[#F0EDE6] font-serif italic mb-4 max-w-sm leading-relaxed font-light">
              &ldquo;Pessoas em primeiro lugar, negócios como consequência.&rdquo;
            </p>
            <p className="text-xs text-[#A6A19A] max-w-sm leading-relaxed font-sans mb-6 font-light">
              Plataforma de networking empresarial intencional baseada em curadoria rigorosa, confiança inegociável, exclusividade por especialidade e geração de referências estratégicas de alto padrão.
            </p>
            <div className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#D4B36A] font-medium">
              AUTORIDADE · DISCRIÇÃO · EXCLUSIVIDADE
            </div>
          </div>

          {/* Institutional Navigation */}
          <div className="md:col-span-4 sm:grid sm:grid-cols-2 gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F0EDE6] font-semibold block mb-4">
                Navegação
              </span>
              <ul className="space-y-3 text-xs font-sans font-light">
                <li>
                  <a href="#o-problema" className="hover:text-[#D4B36A] transition-colors">
                    O Diagnóstico
                  </a>
                </li>
                <li>
                  <a href="#sistema-titan" className="hover:text-[#D4B36A] transition-colors">
                    O Sistema TITAN
                  </a>
                </li>
                <li>
                  <a href="#niveis" className="hover:text-[#D4B36A] transition-colors">
                    Escalas de Influência
                  </a>
                </li>
                <li>
                  <a href="#exclusividade" className="hover:text-[#D4B36A] transition-colors">
                    Critério de Admissão
                  </a>
                </li>
                <li>
                  <a href="#nucleo-fundador" className="hover:text-[#D4B36A] transition-colors">
                    Núcleo Fundador
                  </a>
                </li>
                <li>
                  <a href="#experiencia" className="hover:text-[#D4B36A] transition-colors">
                    A Experiência
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-0">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F0EDE6] font-semibold block mb-4">
                Governança
              </span>
              <ul className="space-y-3 text-xs font-sans font-light">
                <li>
                  <a href="#candidatura" className="hover:text-[#D4B36A] transition-colors">
                    Submissão de Candidatura
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#D4B36A] transition-colors">
                    FAQ Institucional
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenPrivacy}
                    className="hover:text-[#D4B36A] transition-colors text-left cursor-pointer focus:outline-none"
                  >
                    Política de Privacidade
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenContact}
                    className="hover:text-[#D4B36A] transition-colors text-left cursor-pointer focus:outline-none"
                  >
                    Secretaria Executiva
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Access Note & Ethics */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F0EDE6] font-semibold block mb-4">
              Conduta e Sigilo
            </span>
            <div className="p-6 bg-[#0B0B0A] border border-[#151513] rounded-xs text-xs leading-relaxed font-sans text-[#A6A19A] space-y-3 font-light">
              <p>
                Os debates, informações corporativas e conexões estabelecidas nos fóruns da TITANS SOCIETY operam sob estrita confidencialidade.
              </p>
              <p className="text-[11px] text-[#D4B36A] font-mono tracking-wider">
                Admissão condicionada a parecer colegiado favorável.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A6A19A]/60">
          <div>
            &copy; {currentYear} TITANS SOCIETY. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#D4B36A] transition-colors cursor-pointer"
            >
              Privacidade (LGPD)
            </button>
            <span aria-hidden="true" className="text-[#151513]">·</span>
            <button
              onClick={onOpenContact}
              className="hover:text-[#D4B36A] transition-colors cursor-pointer"
            >
              Secretaria Executiva
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
