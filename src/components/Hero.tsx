import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/siteData';

interface HeroProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
}

export default function Hero({ onViewWork, onGetInTouch }: HeroProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Optional subtle auto-advance every 7 seconds, pausing if user interacts
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlideIndex];

  return (
    <section id="home" className="relative w-full min-h-[92vh] lg:min-h-[96vh] pt-24 pb-16 flex items-center overflow-hidden">
      {/* Background Slides with crossfade */}
      <div className="absolute inset-0 -z-10 bg-[#e8e4dc]">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transition-transform duration-10000`}
          >
            <img
              src={s.image}
              alt={s.projectName}
              className="w-full h-full object-cover object-center"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            {/* Cinematic architectural gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fcfbf9]/95 via-[#fcfbf9]/75 to-transparent md:w-[62%] lg:w-[52%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbf9]/50 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col justify-between min-h-[75vh] pt-6 pb-2">
        {/* Main Content (Left aligned) */}
        <div className="max-w-xl lg:max-w-2xl mt-8 md:mt-12">
          {/* Eyebrow */}
          <p className="text-[12px] md:text-[13px] tracking-[0.26em] uppercase text-[#736d65] font-semibold mb-4 md:mb-5">
            AVN INTERIORS
          </p>

          {/* Heading */}
          <h1 className="font-serif text-[46px] sm:text-[58px] md:text-[68px] lg:text-[76px] leading-[1.06] tracking-[-0.02em] text-[#141312] font-normal mb-6">
            Spaces<br />that live with you
          </h1>

          {/* Subtitle */}
          <div className="text-[15px] sm:text-[16px] md:text-[17px] text-[#4d4944] font-normal leading-relaxed mb-8 md:mb-10 max-w-lg space-y-1">
            <p>Thoughtful interiors. Timeless design.</p>
            <p>A more beautiful way to live, work and belong.</p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              id="hero-view-work-btn"
              onClick={onViewWork}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#141414] text-white text-[13.5px] tracking-[0.04em] font-medium rounded-full hover:bg-[#2e2a26] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-get-in-touch-btn"
              onClick={onGetInTouch}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white/95 backdrop-blur-sm text-[#1a1a1a] text-[13.5px] tracking-[0.04em] font-medium rounded-full border border-[#cfcbc2] hover:bg-white hover:border-[#1a1a1a] transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Slider Pagination (Left) & Project Tag (Right) */}
        <div className="flex items-end justify-between w-full pt-16 md:pt-20">
          {/* Slider Pagination Indicator: 01 —— 02 —— 03 */}
          <div className="flex items-center gap-3 text-[13px] tracking-[0.1em] font-medium">
            {HERO_SLIDES.map((s, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className="group flex items-center gap-2 transition-all focus:outline-none"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span
                    className={`transition-colors duration-200 ${
                      isActive ? 'text-[#141414] font-bold' : 'text-[#8c867e] hover:text-[#141414]'
                    }`}
                  >
                    {s.id}
                  </span>
                  {idx < HERO_SLIDES.length - 1 && (
                    <span
                      className={`w-7 sm:w-10 h-[1.5px] transition-all duration-300 ${
                        isActive ? 'bg-[#141414]' : 'bg-[#c5bfb4] group-hover:bg-[#8c867e]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Project Details Tag (Bottom Right) */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-16 md:w-28 h-[1px] bg-[#1a1a1a]/40" />
            <div className="text-right">
              <p className="text-[13px] md:text-[14px] font-serif font-medium tracking-[0.05em] text-[#141414]">
                {slide.projectName}
              </p>
              <p className="text-[11px] md:text-[12px] tracking-[0.14em] uppercase text-[#69635b]">
                {slide.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
