import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturedProjects from './components/FeaturedProjects';
import ServicesSection from './components/ServicesSection';
import FeaturedWork from './components/FeaturedWork';
import PressSection from './components/PressSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import StartProjectModal from './components/StartProjectModal';
import AllProjectsModal from './components/AllProjectsModal';
import MediaModal from './components/MediaModal';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [inquiryProjectTitle, setInquiryProjectTitle] = useState('');

  // Track active section for nav indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'services', 'media', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenStartProject = (projectTitle?: string) => {
    setInquiryProjectTitle(projectTitle || '');
    setIsStartProjectOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#1a1a1a] flex flex-col font-sans selection:bg-[#1a1a1a] selection:text-white">
      {/* Sticky Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onStartProject={() => handleOpenStartProject()}
      />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero
          onViewWork={() => scrollToSection('projects')}
          onGetInTouch={() => scrollToSection('contact')}
        />

        {/* About Section */}
        <AboutSection
          onLearnMore={() => setIsAllProjectsOpen(true)}
        />

        {/* Featured Projects Section with Filters */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllProjects={() => setIsAllProjectsOpen(true)}
        />

        {/* Our Services Section */}
        <ServicesSection
          onExploreServices={() => scrollToSection('contact')}
          onSelectService={() => handleOpenStartProject()}
        />

        {/* A Closer Look - Featured Work Section */}
        <FeaturedWork
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllProjects={() => setIsAllProjectsOpen(true)}
        />

        {/* Press / As Featured In Magazine Section */}
        <PressSection
          onViewMedia={() => setIsMediaModalOpen(true)}
        />

        {/* What Clients Say - Testimonials Section */}
        <TestimonialsSection
          onViewAllTestimonials={() => scrollToSection('contact')}
        />

        {/* Contact Inquiry Section */}
        <ContactSection
          onScrollToForm={() => scrollToSection('contact')}
        />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Interactive Lightbox / Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => handleOpenStartProject(title)}
      />

      {/* Full Portfolio Modal showing all 15 authentic AVN projects */}
      <AllProjectsModal
        isOpen={isAllProjectsOpen}
        onClose={() => setIsAllProjectsOpen(false)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Media & Press Modal showing original magazine scans & digital features */}
      <MediaModal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
      />

      {/* Start a Project Modal */}
      <StartProjectModal
        isOpen={isStartProjectOpen}
        onClose={() => setIsStartProjectOpen(false)}
        defaultProjectTitle={inquiryProjectTitle}
      />
    </div>
  );
}

