import { ArrowRight } from 'lucide-react';
import { ADITI_PORTRAIT } from '../data/siteData';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export default function AboutSection({ onLearnMore }: AboutSectionProps) {
  return (
    <section id="about" className="w-full py-20 lg:py-28 bg-[#f9f8f5] border-t border-[#ece7de]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Mission & Approach (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-center pr-0 lg:pr-4">
            <p className="text-[11.5px] md:text-[12px] tracking-[0.24em] uppercase text-[#7a746c] font-semibold mb-3">
              ABOUT AVN
            </p>
            <h2 className="font-serif text-[34px] sm:text-[40px] md:text-[44px] leading-[1.12] text-[#141414] font-normal mb-6">
              Design is personal.<br />So is our approach.
            </h2>
            <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[#524d47] font-normal mb-8">
              At AVN interiors, we design spaces that are functional, beautiful and deeply personal. Every project is a collaboration — built on trust, detail and a shared vision for a better way of living.
            </p>
            <div>
              <button
                id="about-learn-more-btn"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium tracking-[0.04em] text-[#141414] hover:text-[#524d47] transition-colors border-b border-[#141414] pb-0.5 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Center Column: Portrait of Founder Aditi Vora Nair (lg:col-span-4) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-none overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-[#e8e4dc]">
              <img
                src={ADITI_PORTRAIT}
                alt="Aditi Vora Nair - Founder & Principal Designer"
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-102"
              />
              {/* Subtle ambient lighting vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Editorial Quote & Title (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-center pl-0 lg:pl-4">
            {/* Bronze/Warm Gold Quote Mark */}
            <div className="text-[#c49a62] font-serif text-[68px] md:text-[80px] leading-none mb-1 select-none">
              “
            </div>
            {/* Italic Serif Quote matching reference */}
            <blockquote className="font-serif italic text-[24px] sm:text-[27px] md:text-[30px] leading-[1.28] text-[#181818] font-normal mb-8">
              "Every space has a story. We believe that if the space inspires you, it will inspire others."
            </blockquote>
            {/* Founder Signoff */}
            <div>
              <p className="font-sans font-bold text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#141414] mb-1">
                ADITI VORA NAIR
              </p>
              <p className="font-sans text-[12.5px] tracking-[0.04em] text-[#706a62]">
                Founder & Principal Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
