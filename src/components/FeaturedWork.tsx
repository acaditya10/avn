import { ArrowRight } from 'lucide-react';
import { FEATURED_WORK_DATA } from '../data/siteData';
import { Project } from '../types';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export default function FeaturedWork({ onSelectProject, onViewAllProjects }: FeaturedWorkProps) {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#fcfbf9] border-t border-[#ece7de]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[11.5px] md:text-[12px] tracking-[0.24em] uppercase text-[#7a746c] font-semibold mb-3">
              A CLOSER LOOK
            </p>
            <h2 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] leading-[1.08] text-[#141414] font-normal">
              Featured Work
            </h2>
          </div>

          <div>
            <button
              id="closer-look-view-all-btn"
              onClick={onViewAllProjects}
              className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.04em] text-[#141414] hover:text-[#524d47] transition-colors group pb-1"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 4 Image Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {FEATURED_WORK_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container with subtle aspect ratio and zoom */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e8e4dc] mb-3.5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Card Meta */}
              <div>
                <h3 className="font-serif text-[19px] sm:text-[20px] font-medium text-[#141414] group-hover:text-[#635c54] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[12px] tracking-[0.08em] text-[#736d65]">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
