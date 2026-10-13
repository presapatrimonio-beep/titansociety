import React from 'react';

interface TitansLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'symbol-only' | 'official-emblem';
  height?: number | string;
}

export const TitansLogo: React.FC<TitansLogoProps> = ({
  className = '',
  variant = 'full',
  height = 58,
}) => {
  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <img
        src="/assets/logo.png"
        alt="TITANS SOCIETY Logo Oficial"
        className="w-auto object-contain filter drop-shadow-[0_2px_14px_rgba(201,164,92,0.25)] transition-transform duration-300"
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
        loading="eager"
      />
    </div>
  );
};
