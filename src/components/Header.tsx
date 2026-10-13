import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenCandidacy?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCandidacy }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Diagnóstico', href: '#o-problema' },
    { label: 'O Sistema', href: '#sistema-titan' },
    { label: 'A Jornada', href: '#niveis' },
    { label: 'O Acesso', href: '#exclusividade' },
    { label: 'Núcleo Fundador', href: '#nucleo-fundador' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    if (onOpenCandidacy) {
      onOpenCandidacy();
    } else {
      const targetElement = document.querySelector('#candidatura');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#050505]/92 backdrop-blur-md py-3 sm:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex items-center justify-between gap-8">
          {/* Brand Anchor (Logo Oficial em Destaque e Maior Escala) */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
            aria-label="TITANS SOCIETY Início"
          >
            <img
              src="/src/assets/logo.png"
              alt="TITANS SOCIETY"
              className={`${
                isScrolled ? 'h-12 sm:h-14 md:h-16' : 'h-16 sm:h-20 md:h-24 lg:h-28'
              } w-auto object-contain filter drop-shadow-[0_4px_24px_rgba(212,179,106,0.35)] transition-all duration-300 group-hover:opacity-95 group-hover:scale-102`}
            />
          </a>

          {/* Minimalist Navigation Links (Espaçamento Rigoroso, Sem Caixas) */}
          <nav
            className="hidden lg:flex items-center gap-9 text-[11px] font-mono tracking-[0.22em] text-[#A6A19A] uppercase"
            aria-label="Navegação Institucional"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#F0EDE6] transition-colors duration-200 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary CTA (Proporcional, Sem Peso Excessivo) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={handleCtaClick}
              className="px-5 py-2.5 text-[10px] font-bold tracking-[0.22em] uppercase text-[#050505] bg-[#D4B36A] hover:bg-[#E8D19B] transition-all duration-200 rounded-xs shadow-[0_2px_14px_rgba(212,179,106,0.25)] whitespace-nowrap shrink-0 focus:outline-none cursor-pointer"
            >
              Iniciar Candidatura
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F0EDE6] hover:text-[#D4B36A] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Concierge Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col bg-[#050505]/98 backdrop-blur-2xl pt-24 px-8 pb-10 animate-fadeIn">
          <div className="flex flex-col gap-6 my-auto text-left">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4B36A]">
              Índice Institucional
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-display tracking-wider uppercase text-[#F0EDE6] hover:text-[#D4B36A] py-1 transition-colors"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={handleCtaClick}
              className="mt-6 w-full py-4 text-xs font-bold tracking-[0.24em] uppercase text-[#050505] bg-[#D4B36A] hover:bg-[#E8D19B] transition-colors rounded-xs flex items-center justify-center cursor-pointer"
            >
              Iniciar Candidatura
            </button>
          </div>

          <div className="text-xs text-[#A6A19A] tracking-widest font-mono uppercase pt-6 border-t border-[#151513]">
            TITANS SOCIETY · INTENTIONAL BUSINESS NETWORKING
          </div>
        </div>
      )}
    </>
  );
};
