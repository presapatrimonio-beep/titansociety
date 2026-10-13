import React, { useState, useEffect, useRef } from 'react';
import aberturaVideo from '../assets/abertura.mp4';

const SESSION_STORAGE_KEY = 'titans_society_intro_viewed';

interface CinematicIntroProps {
  onComplete?: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(SESSION_STORAGE_KEY) !== 'true';
    } catch {
      return true;
    }
  });

  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Manage body scroll locking while intro is presenting
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

  // Support replaying intro via custom event if triggered
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

  // Try autoplaying on mount
  useEffect(() => {
    if (isVisible && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback: Ensure muted and try again
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, [isVisible]);

  const handleFinish = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);

    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    } catch {
      // Ignore sessionStorage exceptions
    }

    if (onComplete) {
      onComplete();
    }

    // Allow 1s smooth fade transition before removing from DOM
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
      aria-label="Abertura Cinematográfica TITANS SOCIETY"
      className={`fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        width: '100vw',
        height: '100dvh',
      }}
    >
      {/* Video element - 100% viewport, cover, center */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={isMuted}
        preload="auto"
        onLoadedData={() => setIsLoaded(true)}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleFinish}
        className="fixed inset-0 w-full h-[100dvh] min-h-screen object-cover object-center z-10"
      >
        <source src={aberturaVideo} type="video/mp4" />
        <source src="/assets/abertura.mp4" type="video/mp4" />
        Seu navegador não suporta reprodução de vídeo HTML5.
      </video>

      {/* Subtle black vignette to blend edges seamlessly */}
      <div className="fixed inset-0 z-20 pointer-events-none shadow-[inset_0_0_120px_rgba(5,5,5,0.7)]" />

      {/* Top Bar Controls */}
      <header className="fixed top-0 left-0 right-0 z-30 p-5 sm:p-8 flex items-center justify-between pointer-events-auto">
        {/* Audio Toggle */}
        <button
          type="button"
          onClick={toggleAudio}
          className="group flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 bg-black/65 hover:bg-[#C9A45C]/15 border border-[#C9A45C]/35 hover:border-[#D4AF37] text-[#C9A45C] hover:text-[#F3E5AB] text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase transition-all duration-300 backdrop-blur-md cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          title={isMuted ? 'Ativar áudio' : 'Desativar áudio'}
        >
          {isMuted ? (
            <>
              <svg className="w-3.5 h-3.5 text-[#C9A45C] group-hover:text-[#F3E5AB] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
              <span>ATIVAR SOM</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-[#F3E5AB] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
              <span>SOM ATIVO</span>
            </>
          )}
        </button>

        {/* Skip / Enter Site Button */}
        <button
          type="button"
          onClick={handleFinish}
          className="group flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 bg-black/65 hover:bg-[#C9A45C]/15 border border-[#C9A45C]/35 hover:border-[#D4AF37] text-[#C9A45C] hover:text-[#F3E5AB] text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase transition-all duration-300 backdrop-blur-md cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          title="Pular abertura cinematográfica"
        >
          <span>PULAR INTRODUÇÃO</span>
          <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </header>

      {/* Discreet Bottom Progress Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none">
        <div className="w-full h-[2px] bg-black/50">
          <div
            className="h-full bg-gradient-to-r from-[#8A7139] via-[#D4AF37] to-[#F3E5AB] transition-[width] duration-200 ease-linear shadow-[0_0_8px_rgba(212,175,55,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </footer>
    </div>
  );
};
