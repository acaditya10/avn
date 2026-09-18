import { ArrowRight } from 'lucide-react';
import { MAGAZINES_DATA } from '../data/siteData';

interface PressSectionProps {
  onViewMedia: () => void;
}

export default function PressSection({ onViewMedia }: PressSectionProps) {
  return (
    <section id="media" className="w-full py-20 lg:py-24 bg-[#28221e] text-white relative overflow-hidden">
      {/* Background image - dimmed */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/inside-outside-cover.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#28221e]/95 via-[#28221e]/80 to-[#28221e]/95" />
      </div>

      {/* Subtle warm ambient lighting and shadow on the left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4a3a2d]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Info (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-[11.5px] md:text-[12px] tracking-[0.24em] uppercase text-[#d4af7a] font-semibold mb-3">
              AS FEATURED IN
            </p>
            <h2 className="font-serif text-[34px] sm:text-[40px] md:text-[46px] leading-[1.1] text-[#faf8f5] font-normal mb-5">
              Inspiring conversations.<br />A wider perspective.
            </h2>
            <p className="text-[14.5px] md:text-[15px] leading-[1.65] text-[#b8b0a5] font-normal mb-8 max-w-md">
              Our work has been featured in leading publications for its design, detail and approach to modern living.
            </p>
            <div>
              <button
                id="view-media-features-btn"
                onClick={onViewMedia}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#faf8f5] text-[#181818] text-[13px] tracking-[0.04em] font-medium rounded-full hover:bg-white transition-all duration-200 shadow-sm active:scale-[0.98]"
              >
                <span>View Media Features</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 5 Magazine Covers displayed side-by-side (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-3.5 items-center">
              {MAGAZINES_DATA.map((mag) => (
                <div
                  key={mag.id}
                  onClick={onViewMedia}
                  className="group relative aspect-[1/1.38] bg-[#1a1715] shadow-[0_8px_24px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)] cursor-pointer rounded-sm"
                >
                  <img
                    src={mag.coverImage}
                    alt={mag.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle vignette and bottom label on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2.5 flex flex-col justify-end pointer-events-none">
                    <span className="text-[10px] tracking-wider uppercase text-[#e0ded8] block font-sans font-medium">
                      {mag.title}
                    </span>
                    <span className="text-[8.5px] text-[#a8a49c] block truncate">
                      {mag.issue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
