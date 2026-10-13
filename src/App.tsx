/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { TitanSystem } from './components/TitanSystem';
import { MembershipTiers } from './components/MembershipTiers';
import { ExclusivitySection } from './components/ExclusivitySection';
import { FounderSection } from './components/FounderSection';
import { ExperienceGallery } from './components/ExperienceGallery';
import { ApplicationForm } from './components/ApplicationForm';
import { FAQSection } from './components/FAQSection';
import { CinematicClosing } from './components/CinematicClosing';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
import { ContactModal } from './components/ContactModal';
import { InterestType } from './types';

export default function App() {
  const [formInterest, setFormInterest] = useState<InterestType>('Candidatar-se ao CONNECT');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTier = (tierName: string) => {
    if (tierName.toUpperCase().includes('CONNECT')) {
      setFormInterest('Candidatar-se ao CONNECT');
    } else {
      setFormInterest('Conhecer a instituição');
    }
    scrollToSection('#candidatura');
  };

  const handleFounderInterest = () => {
    setFormInterest('Conhecer o núcleo fundador');
    scrollToSection('#candidatura');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F0E8] selection:bg-[#C9A45C]/30 selection:text-[#F0D28A] flex flex-col font-sans">
      {/* 00. Institutional Header / Navbar */}
      <Header onOpenCandidacy={() => scrollToSection('#candidatura')} />

      <main className="flex-grow">
        {/* 01. HERO — THE ARRIVAL */}
        <Hero
          onExploreSystem={() => scrollToSection('#sistema-titan')}
          onStartCandidacy={() => scrollToSection('#candidatura')}
        />

        {/* 02. O PROBLEMA DO NETWORKING CONVENCIONAL */}
        <ProblemSection />

        {/* 03. O SISTEMA TITAN E SEUS SETE PILARES */}
        <TitanSystem />

        {/* 04. A JORNADA CONNECT, COUNCIL E GLOBAL */}
        <MembershipTiers onSelectTier={handleSelectTier} />

        {/* 05. CURADORIA, MÉRITO E EXCLUSIVIDADE */}
        <ExclusivitySection onRequestEvaluation={() => scrollToSection('#candidatura')} />

        {/* 06. O NÚCLEO FUNDADOR */}
        <FounderSection onJoinFounderCircle={handleFounderInterest} />

        {/* 07. A EXPERIÊNCIA TITANS */}
        <ExperienceGallery />

        {/* 08. PROCESSO DE CANDIDATURA */}
        <ApplicationForm
          initialInterest={formInterest}
          onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        />

        {/* 09. FAQ */}
        <FAQSection />

        {/* 10. ENCERRAMENTO CINEMATOGRÁFICO */}
        <CinematicClosing onStartCandidacy={() => scrollToSection('#candidatura')} />
      </main>

      {/* 11. RODAPÉ INSTITUCIONAL */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Auxiliary Modals */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
