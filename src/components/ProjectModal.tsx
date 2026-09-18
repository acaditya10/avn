import { X, ArrowRight, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export default function ProjectModal({ project, onClose, onInquire }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#fcfbf9] shadow-2xl border border-[#e0dad0] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 backdrop-blur-xs text-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors"
          aria-label="Close Project View"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Column */}
        <div className="md:w-1/2 relative bg-[#1a1a1a] min-h-[300px] md:min-h-[480px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details Column */}
        <div className="md:w-1/2 p-7 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.2em] text-[#78726a] font-semibold mb-2">
              <span className="bg-[#ede8df] px-2.5 py-0.5 rounded-full text-[#38342e]">
                {project.category}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] font-normal mb-3">
              {project.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#55504a] pb-6 mb-6 border-b border-[#ece6dc]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#141414]" />
                {project.location}
              </span>
              {project.year && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#141414]" />
                  {project.year}
                </span>
              )}
              {project.area && (
                <span className="flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#141414]" />
                  {project.area}
                </span>
              )}
            </div>

            <p className="text-[14.5px] leading-relaxed text-[#555049] mb-8">
              {project.description ||
                'A bespoke architectural and interior commission focused on refined proportions, contextual light study, and artisanal materiality.'}
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#181818] text-white text-[13px] tracking-[0.04em] font-medium rounded-full hover:bg-[#333] transition-colors"
            >
              <span>Inquire About This Style</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 border border-[#d6d0c4] text-[#181818] text-[13px] rounded-full hover:bg-[#ede8df] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
