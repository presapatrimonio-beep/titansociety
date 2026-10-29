import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FlagBR, FlagPT, FlagUS, FlagGB } from './FlagIcons';
import openingVideo from '../assets/abertura.mp4';

interface CinematicIntroProps {
  onComplete?: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const { setLanguage } = useLanguage();

  // State: always open on initial view to fulfill acceptance criteria
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lock body scroll while opening screen is active
  useEffect(() => {
    if (isVisible && !isFadingOut) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible, isFadingOut]);

  // Support replaying intro via custom event (e.g. from footer link)
  useEffect(() => {
    const handleReplay = () => {
      setIsFadingOut(false);
      setIsVisible(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('titans:replay-intro', handleReplay);
    return () => {
      window.removeEventListener('titans:replay-intro', handleReplay);
    };
  }, []);

  // Autoplay attempt with original audio
  useEffect(() => {
    if (isVisible && videoRef.current) {
      const video = videoRef.current;
      video.muted = false;
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsMuted(false);
          })
          .catch(() => {
            // If browser blocks unmuted playback before user interaction, fallback to muted autoplay
            video.muted = true;
            setIsMuted(true);
            video.play().catch(() => {});
          });
      }
    }
  }, [isVisible]);

  // Handle entry and smooth transition to main site
  const handleSelectLanguageAndEnter = (lang: 'pt' | 'en') => {
    if (isFadingOut) return;
    setLanguage(lang);
    setIsFadingOut(true);

    if (onComplete) {
      onComplete();
    }

    // 1000ms smooth fade transition before unmounting
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Abertura TITANS SOCIETY"
      className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col justify-between items-center overflow-hidden transition-opacity duration-1000 ease-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        width: '100vw',
        height: '100dvh',
      }}
    >
      {/* 1. Full-Screen Original Cinematic Video Element */}
      <video
        ref={videoRef}
        src={openingVideo}
        autoPlay
        playsInline
        loop
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
        onTimeUpdate={handleTimeUpdate}
        className="fixed inset-0 w-full h-[100dvh] min-h-screen object-cover object-center z-10"
      >
        <source src={openingVideo} type="video/mp4" />
        <source src="src/assets/abertura.mp4" type="video/mp4" />
        <source src="/src/assets/abertura.mp4" type="video/mp4" />
        <source src="/assets/abertura.mp4" type="video/mp4" />
      </video>

      {/* 2. Atmospheric vignette & readability masks */}
      <div className="fixed inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#050505]/95 via-transparent to-[#050505]/75" />
      <div className="fixed inset-0 z-20 pointer-events-none shadow-[inset_0_0_120px_rgba(5,5,5,0.7)]" />

      {/* 3. Top Institutional Branding */}
      <header className="relative z-30 pt-6 sm:pt-10 px-6 flex flex-col items-center pointer-events-none animate-fadeIn">
        <img
          src="/assets/logo2.png"
          alt="TITANS SOCIETY"
          className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain filter drop-shadow-[0_6px_40px_rgba(212,179,106,0.55)] mb-3 transition-all duration-300"
        />
        <div className="text-[10px] sm:text-[11px] md:text-xs font-mono tracking-[0.35em] text-[#D4B36A] uppercase font-semibold text-center">
          INTENTIONAL BUSINESS NETWORKING
        </div>
      </header>

      {/* 4. Audio Control Toggle (Discreet in Bottom Left) */}
      <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-30 pointer-events-auto">
        <button
          type="button"
          onClick={toggleAudio}
          className="group flex items-center gap-2 px-3.5 py-2 text-[10px] sm:text-[11px] font-mono tracking-[0.22em] uppercase text-[#F4F0E8]/75 hover:text-[#D4AF37] bg-black/65 hover:bg-black/90 border border-[#C9A45C]/35 hover:border-[#D4AF37] backdrop-blur-md transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          title={isMuted ? 'Ativar Som / Unmute' : 'Desativar Som / Mute'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#C9A45C] group-hover:text-[#F3E5AB] transition-colors" />
              <span>ATIVAR SOM</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-[#F3E5AB] transition-colors" />
              <span>SOM ATIVO</span>
            </>
          )}
        </button>
      </div>

      {/* 5. Central / Lower Balanced Two Language Buttons */}
      <div className="relative z-30 pb-12 sm:pb-16 px-6 w-full max-w-3xl flex flex-col items-center pointer-events-auto animate-fadeIn">
        <div className="text-[11px] font-mono tracking-[0.28em] text-[#A6A19A] uppercase mb-4 text-center">
          Selecione seu idioma · Select your language
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
          {/* Button 1: Português — Entrar */}
          <button
            type="button"
            onClick={() => handleSelectLanguageAndEnter('pt')}
            className="group relative flex items-center justify-center gap-3.5 px-6 sm:px-8 py-4 sm:py-4.5 bg-[#080808]/85 hover:bg-[#121210]/95 border border-[#C9A45C]/50 hover:border-[#D4AF37] text-[#F4F0E8] hover:text-[#FFFFFF] backdrop-blur-md transition-all duration-300 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_4px_30px_rgba(201,164,92,0.3)] hover:scale-[1.02] active:scale-[0.99]"
            aria-label="Português — Entrar"
          >
            {/* Architectural corner notches */}
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#D4AF37]" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#D4AF37]" />
            <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#D4AF37]" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#D4AF37]" />

            <span className="flex items-center gap-1.5 shrink-0 select-none">
              <FlagBR className="w-5 h-3.5 sm:w-6 sm:h-4" />
              <FlagPT className="w-5 h-3.5 sm:w-6 sm:h-4" />
            </span>
            <span className="font-mono text-xs sm:text-[13px] tracking-[0.22em] uppercase font-semibold">
              PORTUGUÊS <span className="text-[#D4AF37] font-bold">— ENTRAR</span>
            </span>
            <span className="text-xs text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 shrink-0">
              →
            </span>
          </button>

          {/* Button 2: English — Enter */}
          <button
            type="button"
            onClick={() => handleSelectLanguageAndEnter('en')}
            className="group relative flex items-center justify-center gap-3.5 px-6 sm:px-8 py-4 sm:py-4.5 bg-[#080808]/85 hover:bg-[#121210]/95 border border-[#C9A45C]/50 hover:border-[#D4AF37] text-[#F4F0E8] hover:text-[#FFFFFF] backdrop-blur-md transition-all duration-300 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_4px_30px_rgba(201,164,92,0.3)] hover:scale-[1.02] active:scale-[0.99]"
            aria-label="English — Enter"
          >
            {/* Architectural corner notches */}
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#D4AF37]" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#D4AF37]" />
            <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#D4AF37]" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#D4AF37]" />

            <span className="flex items-center gap-1.5 shrink-0 select-none">
              <FlagUS className="w-5 h-3.5 sm:w-6 sm:h-4" />
              <FlagGB className="w-5 h-3.5 sm:w-6 sm:h-4" />
            </span>
            <span className="font-mono text-xs sm:text-[13px] tracking-[0.22em] uppercase font-semibold">
              ENGLISH <span className="text-[#D4AF37] font-bold">— ENTER</span>
            </span>
            <span className="text-xs text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 shrink-0">
              →
            </span>
          </button>
        </div>
      </div>

      {/* 6. Ultra-thin gold progression line along the bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none h-[2px] bg-black/60">
        <div
          className="h-full bg-gradient-to-r from-[#8A7139] via-[#D4AF37] to-[#F3E5AB] transition-[width] duration-200 ease-linear shadow-[0_0_6px_rgba(212,175,55,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
