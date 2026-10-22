import React from 'react';

interface FlagProps {
  className?: string;
}

export const FlagBR: React.FC<FlagProps> = ({ className = 'w-5 h-3.5' }) => (
  <svg
    viewBox="0 0 20 14"
    className={`${className} shrink-0 rounded-xs shadow-xs border border-[#C9A45C]/30 overflow-hidden inline-block align-middle`}
    aria-label="Bandeira do Brasil"
    role="img"
  >
    {/* Green background */}
    <rect width="20" height="14" fill="#009B3A" />
    {/* Yellow rhombus */}
    <polygon points="10,1.8 18.2,7 10,12.2 1.8,7" fill="#FEDF00" />
    {/* Blue circle */}
    <circle cx="10" cy="7" r="3.2" fill="#002776" />
    {/* Curved white celestial band */}
    <path
      d="M7.2 7.6 C 8.2 6.4 11.2 6.2 12.8 7.8"
      stroke="#FFFFFF"
      strokeWidth="0.8"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const FlagPT: React.FC<FlagProps> = ({ className = 'w-5 h-3.5' }) => (
  <svg
    viewBox="0 0 20 14"
    className={`${className} shrink-0 rounded-xs shadow-xs border border-[#C9A45C]/30 overflow-hidden inline-block align-middle`}
    aria-label="Bandeira de Portugal"
    role="img"
  >
    {/* Left 2/5 Green */}
    <rect x="0" y="0" width="8" height="14" fill="#006600" />
    {/* Right 3/5 Red */}
    <rect x="8" y="0" width="12" height="14" fill="#D81E05" />
    {/* Armillary sphere in gold */}
    <circle cx="8" cy="7" r="3" stroke="#FEDF00" strokeWidth="0.8" fill="none" />
    <line x1="8" y1="3.5" x2="8" y2="10.5" stroke="#FEDF00" strokeWidth="0.6" />
    <line x1="4.5" y1="7" x2="11.5" y2="7" stroke="#FEDF00" strokeWidth="0.6" />
    {/* Central Shield */}
    <path
      d="M6.8 5.6 H9.2 V8.2 C9.2 9.5 8 10.1 8 10.1 C8 10.1 6.8 9.5 6.8 8.2 Z"
      fill="#FFFFFF"
      stroke="#D81E05"
      strokeWidth="0.5"
    />
    {/* Blue central escutcheon */}
    <circle cx="8" cy="7.2" r="0.75" fill="#002776" />
  </svg>
);

export const FlagUS: React.FC<FlagProps> = ({ className = 'w-5 h-3.5' }) => (
  <svg
    viewBox="0 0 20 14"
    className={`${className} shrink-0 rounded-xs shadow-xs border border-[#C9A45C]/30 overflow-hidden inline-block align-middle`}
    aria-label="Flag of the United States"
    role="img"
  >
    {/* Red and white 13 stripes */}
    <rect width="20" height="14" fill="#B22234" />
    <rect y="1.08" width="20" height="1.08" fill="#FFFFFF" />
    <rect y="3.24" width="20" height="1.08" fill="#FFFFFF" />
    <rect y="5.40" width="20" height="1.08" fill="#FFFFFF" />
    <rect y="7.56" width="20" height="1.08" fill="#FFFFFF" />
    <rect y="9.72" width="20" height="1.08" fill="#FFFFFF" />
    <rect y="11.88" width="20" height="1.08" fill="#FFFFFF" />
    {/* Blue Canton */}
    <rect width="9" height="7.56" fill="#3C3B6E" />
    {/* Stars representation (clean micro-constellation) */}
    <circle cx="2" cy="1.6" r="0.5" fill="#FFFFFF" />
    <circle cx="4.5" cy="1.6" r="0.5" fill="#FFFFFF" />
    <circle cx="7" cy="1.6" r="0.5" fill="#FFFFFF" />
    <circle cx="3.25" cy="3" r="0.5" fill="#FFFFFF" />
    <circle cx="5.75" cy="3" r="0.5" fill="#FFFFFF" />
    <circle cx="2" cy="4.4" r="0.5" fill="#FFFFFF" />
    <circle cx="4.5" cy="4.4" r="0.5" fill="#FFFFFF" />
    <circle cx="7" cy="4.4" r="0.5" fill="#FFFFFF" />
    <circle cx="3.25" cy="5.8" r="0.5" fill="#FFFFFF" />
    <circle cx="5.75" cy="5.8" r="0.5" fill="#FFFFFF" />
  </svg>
);

export const FlagGB: React.FC<FlagProps> = ({ className = 'w-5 h-3.5' }) => (
  <svg
    viewBox="0 0 20 14"
    className={`${className} shrink-0 rounded-xs shadow-xs border border-[#C9A45C]/30 overflow-hidden inline-block align-middle`}
    aria-label="Flag of the United Kingdom"
    role="img"
  >
    {/* Blue field */}
    <rect width="20" height="14" fill="#012169" />
    {/* Diagonal white saltires */}
    <path d="M0 0 L20 14 M20 0 L0 14" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="square" />
    {/* Diagonal red saltires */}
    <path d="M0 0 L20 14 M20 0 L0 14" stroke="#C8102E" strokeWidth="1.2" strokeLinecap="square" />
    {/* White St. George Cross backing */}
    <path d="M10 0 V14 M0 7 H20" stroke="#FFFFFF" strokeWidth="4.4" />
    {/* Red St. George Cross */}
    <path d="M10 0 V14 M0 7 H20" stroke="#C8102E" strokeWidth="2.4" />
  </svg>
);
