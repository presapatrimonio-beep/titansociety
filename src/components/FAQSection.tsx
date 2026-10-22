import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const items = t.faq.items;

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-36 bg-[#050505] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#D4B36A] font-semibold mb-4">
            <HelpCircle className="w-4 h-4 text-[#D4B36A]" />
            <span>
              {language === 'pt'
                ? 'Governança & Esclarecimentos Institucionais'
                : 'Governance & Institutional Clarifications'}
            </span>
          </div>
          <h2 
            className="text-3xl sm:text-5xl font-display font-medium text-[#F0EDE6] uppercase tracking-[0.03em] leading-tight mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-base text-[#A6A19A] font-sans leading-relaxed font-light">
            {language === 'pt'
              ? 'Esclarecimentos sobre governança, critérios de admissão e operação do Sistema TITAN.'
              : 'Clarifications on governance, admission criteria, and operation of the TITAN System.'}
          </p>
        </div>

        {/* Minimalist Editorial Accordion */}
        <div className="divide-y divide-[#181818] border-t border-b border-[#181818]">
          {items.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="py-7 group transition-colors duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left flex items-start justify-between gap-6 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-xs font-mono font-bold text-[#C9A45C] shrink-0">
                      0{index + 1}
                    </span>
                    <h3 
                      className="text-base sm:text-lg font-display font-medium text-[#F4F0E8] uppercase tracking-wide group-hover:text-[#F0D28A] transition-colors"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {item.question}
                    </h3>
                  </div>
                  <div className="shrink-0 p-1 text-[#C9A45C] group-hover:text-[#F0D28A]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pl-8 sm:pl-10 pr-6 text-xs sm:text-sm text-[#F4F0E8]/75 leading-relaxed font-sans font-light animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet Footnote */}
        <div className="mt-12 text-left text-xs font-mono text-[#F4F0E8]/40">
          {language === 'pt'
            ? 'Dúvidas específicas sobre assentos setoriais? '
            : 'Specific queries regarding industry seats? '}
          <a href="#candidatura" className="text-[#C9A45C] hover:underline font-semibold">
            {language === 'pt' ? 'Consulte a Secretaria Executiva' : 'Consult the Executive Secretariat'}
          </a>
          .
        </div>
      </div>
    </section>
  );
};
