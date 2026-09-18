import { ArrowRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteData';

interface TestimonialsSectionProps {
  onViewAllTestimonials: () => void;
}

export default function TestimonialsSection({ onViewAllTestimonials }: TestimonialsSectionProps) {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#fcfbf9] border-t border-[#ece7de]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[11.5px] md:text-[12px] tracking-[0.24em] uppercase text-[#7a746c] font-semibold mb-3">
              WHAT CLIENTS SAY
            </p>
            <h2 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] leading-[1.08] text-[#141414] font-normal">
              Homes. Happiness. Always.
            </h2>
          </div>

          <div>
            <button
              id="view-all-testimonials-btn"
              onClick={onViewAllTestimonials}
              className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.04em] text-[#141414] hover:text-[#524d47] transition-colors group pb-1"
            >
              <span>View All Testimonials</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 lg:p-9 bg-[#faf8f5] border border-[#ece7df] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:border-[#dfd9ce]"
            >
              <div>
                {/* Ochre/Warm Gold Quote mark */}
                <div className="text-[#c49a62] font-serif text-[42px] leading-none mb-3 select-none">
                  “
                </div>
                <p className="text-[14.5px] lg:text-[15px] leading-[1.7] text-[#423e39] font-normal mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Row with Avatar */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#eee9e0]">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#ded8cc]"
                />
                <div>
                  <h3 className="font-sans font-semibold text-[14px] text-[#181818] leading-tight">
                    {item.author}
                  </h3>
                  <p className="font-sans text-[12px] text-[#78726a] tracking-[0.02em]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
