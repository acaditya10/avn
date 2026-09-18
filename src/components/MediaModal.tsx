import { useState } from 'react';
import { X, ExternalLink, Newspaper, Globe } from 'lucide-react';
import { MAGAZINES_DATA, DIGITAL_FEATURES_DATA } from '../data/siteData';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MediaModal({ isOpen, onClose }: MediaModalProps) {
  const [tab, setTab] = useState<'magazines' | 'digital'>('magazines');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#fcfbf9] shadow-2xl border border-[#ded8cf] p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 bg-white/90 text-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <p className="text-[11.5px] tracking-[0.24em] uppercase text-[#7a746c] font-semibold mb-2">
            AVN IN THE PRESS
          </p>
          <h2 className="font-serif text-[32px] sm:text-[38px] text-[#141414] font-normal leading-tight">
            Media & Publications
          </h2>
          <p className="text-[14px] text-[#5c564f] mt-2 max-w-xl">
            Original features and design profiles from national and international design periodicals.
          </p>

          {/* Sub-tabs */}
          <div className="flex items-center gap-2 mt-6 border-b border-[#e5e0d8] pb-3">
            <button
              onClick={() => setTab('magazines')}
              className={`flex items-center gap-2 px-4 py-2 text-[13px] font-medium tracking-[0.03em] rounded-full transition-colors ${
                tab === 'magazines'
                  ? 'bg-[#181818] text-white'
                  : 'bg-[#f0ece5] text-[#55504a] hover:bg-[#e6e1d8]'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              <span>Magazine Features</span>
            </button>
            <button
              onClick={() => setTab('digital')}
              className={`flex items-center gap-2 px-4 py-2 text-[13px] font-medium tracking-[0.03em] rounded-full transition-colors ${
                tab === 'digital'
                  ? 'bg-[#181818] text-white'
                  : 'bg-[#f0ece5] text-[#55504a] hover:bg-[#e6e1d8]'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Digital Features</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {tab === 'magazines' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
            {MAGAZINES_DATA.map((mag) => (
              <div
                key={mag.id}
                className="group flex flex-col bg-white border border-[#ece6dc] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative aspect-[1/1.38] overflow-hidden bg-[#ebe6dd]">
                  <img
                    src={mag.coverImage}
                    alt={mag.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-serif text-[15px] font-medium text-[#181818]">
                    {mag.title}
                  </h4>
                  <p className="text-[11px] text-[#706a62] leading-snug mt-0.5">
                    {mag.issue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {DIGITAL_FEATURES_DATA.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-white border border-[#ece6dc] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#ebe6dd]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-[16px] font-medium text-[#181818]">
                      {item.title}
                    </h4>
                    <p className="text-[12px] text-[#706a62] mt-0.5">
                      {item.outlet}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8a847c] group-hover:text-[#181818] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
