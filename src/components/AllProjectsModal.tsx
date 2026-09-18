import { useState } from 'react';
import { X, ArrowUpRight, MapPin } from 'lucide-react';
import { ALL_PORTFOLIO_PROJECTS } from '../data/siteData';
import { Project } from '../types';

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Architecture', 'Featured'] as const;

export default function AllProjectsModal({ isOpen, onClose, onSelectProject }: AllProjectsModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const filtered = selectedCategory === 'All'
    ? ALL_PORTFOLIO_PROJECTS
    : ALL_PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-[#fcfbf9] shadow-2xl border border-[#ded8cf] p-6 sm:p-8 md:p-10"
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
            AVN PORTFOLIO
          </p>
          <h2 className="font-serif text-[32px] sm:text-[40px] text-[#141414] font-normal leading-tight">
            Selected Architectural & Interior Commissions
          </h2>
          <p className="text-[14px] text-[#5c564f] mt-2 max-w-xl">
            A comprehensive overview of our residential sanctuaries, commercial headquarters, and bespoke spaces.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 border-b border-[#e5e0d8] pb-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-[12.5px] font-medium tracking-[0.03em] rounded-full transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#181818] text-white'
                    : 'bg-[#f0ece5] text-[#55504a] hover:bg-[#e6e1d8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                onClose();
                onSelectProject(project);
              }}
              className="group cursor-pointer flex flex-col bg-white border border-[#ece6dc] shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e4dc]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#141414] group-hover:bg-[#141414] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10.5px] tracking-wider uppercase text-[#857e74] font-semibold block mb-0.5">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-[18px] font-medium text-[#141414] group-hover:text-[#5e5850] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-[#6b655c]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
