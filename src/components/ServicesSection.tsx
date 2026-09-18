import { ArrowRight, Home, Building2, DraftingCompass, Wrench } from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';
import { Service } from '../types';

interface ServicesSectionProps {
  onExploreServices: () => void;
  onSelectService?: (service: Service) => void;
}

export default function ServicesSection({ onExploreServices, onSelectService }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-6 h-6 stroke-[1.5] text-[#141414]" />;
      case 'building':
        return <Building2 className="w-6 h-6 stroke-[1.5] text-[#141414]" />;
      case 'blueprint':
        return <DraftingCompass className="w-6 h-6 stroke-[1.5] text-[#141414]" />;
      case 'tools':
        return <Wrench className="w-6 h-6 stroke-[1.5] text-[#141414]" />;
      default:
        return <Home className="w-6 h-6 stroke-[1.5] text-[#141414]" />;
    }
  };

  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-[#faf9f6] border-t border-[#ebe6dd]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16">
          <div className="md:col-span-6 lg:col-span-7">
            <p className="text-[11.5px] md:text-[12px] tracking-[0.24em] uppercase text-[#7a746c] font-semibold mb-3">
              OUR SERVICES
            </p>
            <h2 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] leading-[1.1] text-[#141414] font-normal">
              From homes to<br />larger possibilities.
            </h2>
          </div>

          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-end">
            <p className="text-[14.5px] md:text-[15px] leading-[1.65] text-[#55504a] font-normal mb-4 max-w-md">
              We offer end-to-end interior and architectural design services, creating spaces that are beautiful, functional and future-ready.
            </p>
            <div>
              <button
                id="explore-services-btn"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.04em] text-[#141414] hover:text-[#524d47] transition-colors border-b border-[#141414] pb-0.5 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Service Columns / Cards matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService && onSelectService(service)}
              className="bg-white p-7 md:p-8 border border-[#e8e4dc] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#cfc9be] cursor-pointer group flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="mb-6 p-2.5 w-fit rounded-none bg-[#f7f5f0] group-hover:bg-[#141414] group-hover:text-white transition-colors duration-200">
                  <div className="group-hover:[&>svg]:text-white transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>
                <h3 className="font-serif text-[20px] font-medium text-[#141414] mb-2.5 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-[#635d55]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
