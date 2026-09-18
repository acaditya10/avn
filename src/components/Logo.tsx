import { useState } from 'react';
import { AVN_LOGO } from '../data/siteData';

interface LogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  isFooter?: boolean;
}

export default function Logo({ className = '', theme = 'dark', isFooter = false }: LogoProps) {
  const isLight = theme === 'light';
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
      {!imageError ? (
        <img
          src={AVN_LOGO}
          alt="AVN Interiors - Aditi Vora Nair"
          className={`h-9 sm:h-10 w-auto object-contain transition-opacity duration-300 ${
            isLight ? 'brightness-0 invert' : ''
          }`}
          onError={() => setImageError(true)}
        />
      ) : (
        /* Fallback refined typographic monogram */
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              className={`w-full h-full ${isLight ? 'text-white' : 'text-[#1a1a1a]'}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Double overlapping architectural frames representing AVN monogram */}
              <rect
                x="3"
                y="3"
                width="24"
                height="34"
                stroke="currentColor"
                strokeWidth="3.2"
                fill="none"
              />
              <rect
                x="13"
                y="3"
                width="24"
                height="34"
                stroke="currentColor"
                strokeWidth="3.2"
                fill="none"
              />
              <line
                x1="3"
                y1="37"
                x2="27"
                y2="3"
                stroke="currentColor"
                strokeWidth="3"
              />
              <line
                x1="13"
                y1="3"
                x2="37"
                y2="37"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span
              className={`font-serif tracking-[0.16em] uppercase text-[15px] sm:text-[16px] leading-tight font-medium ${
                isLight ? 'text-white' : 'text-[#1a1a1a]'
              }`}
            >
              ADITI VORA NAIR
            </span>
            <span
              className={`text-[10px] sm:text-[10.5px] tracking-[0.24em] lowercase ${
                isLight ? 'text-white/70' : 'text-[#75716b]'
              } font-sans`}
            >
              interior architects
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

