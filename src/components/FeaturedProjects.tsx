import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA, ALL_PORTFOLIO_PROJECTS } from '../data/siteData';
import { Project } from '../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Architecture', 'Featured'] as const;

export default function FeaturedProjects({ onSelectProject, onViewAllProjects }: FeaturedProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : ALL_PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="w-full py-20 lg:py-28 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[11.5px] md:text-[12px] tracking-[0.24em] uppercase text-[#7a746c] font-semibold mb-3">
              FEATURED PROJECTS
            </p>
            <h2 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] leading-[1.08] text-[#141414] font-normal">
              Spaces, thoughtfully designed
            </h2>
          </div>

          <div>
            <button
              id="view-all-projects-btn"
              onClick={onViewAllProjects}
              className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.04em] text-[#141414] hover:text-[#524d47] transition-colors group pb-1"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[12.5px] font-medium tracking-[0.04em] rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#181818] text-white shadow-sm'
                    : 'bg-[#f1eee8] text-[#55514b] hover:bg-[#e7e3da] hover:text-[#181818]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 4 Project Grid matching reference exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#e8e4dc] mb-3.5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Arrow Icon in Top Right corner */}
                <div className="absolute top-3.5 right-3.5 w-7 h-7 rounded-none bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#141414] opacity-80 group-hover:opacity-100 group-hover:bg-[#141414] group-hover:text-white transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta */}
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="font-serif text-[19px] sm:text-[20px] font-medium text-[#141414] group-hover:text-[#635c54] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[12px] tracking-[0.08em] text-[#736d65]">
                    {project.location}
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
