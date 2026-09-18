import { Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#fcfbf9] border-t border-[#ece6dc] pt-16 pb-12 text-[#181818]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#ece6dc]">
          {/* Col 1: Logo & Socials (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')}>
              <Logo />
            </a>

            {/* Social Media Links matching reference */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#d6d0c4] flex items-center justify-center text-[#181818] hover:bg-[#181818] hover:text-white hover:border-[#181818] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#d6d0c4] flex items-center justify-center text-[#181818] hover:bg-[#181818] hover:text-white hover:border-[#181818] transition-all duration-200"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.211-.174.268-.399.167-1.488-.695-2.418-2.87-2.418-4.619 0-3.76 2.733-7.213 7.876-7.213 4.135 0 7.348 2.947 7.348 6.884 0 4.109-2.59 7.416-6.184 7.416-1.207 0-2.343-.628-2.731-1.369l-.744 2.836c-.269 1.031-1.002 2.324-1.492 3.118C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#d6d0c4] flex items-center justify-center text-[#181818] hover:bg-[#181818] hover:text-white hover:border-[#181818] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Explore (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-[16px] font-semibold text-[#181818] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-[#555049]">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="hover:text-[#181818] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-[#181818] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleScrollTo(e, '#projects')} className="hover:text-[#181818] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#media" onClick={(e) => handleScrollTo(e, '#media')} className="hover:text-[#181818] transition-colors">
                  Media
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-[#181818] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-[16px] font-semibold text-[#181818] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-[#555049]">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-[#181818] transition-colors">
                  Residential Interiors
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-[#181818] transition-colors">
                  Commercial Interiors
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-[#181818] transition-colors">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-[#181818] transition-colors">
                  Renovation & Makeovers
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact details (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-[16px] font-semibold text-[#181818] mb-4">
              Contact
            </h4>
            <address className="not-italic text-[13.5px] leading-relaxed text-[#555049] space-y-3">
              <p>
                Soni House, 4th N.S Road,<br />
                JVPD Scheme, Vile Parle W,<br />
                Mumbai 400056, Maharashtra, India.
              </p>
              <p className="flex items-center gap-2.5 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#181818] flex-shrink-0" />
                <a href="tel:+919819690329" className="hover:text-[#181818] transition-colors font-medium text-[#181818]">
                  +91 98196 90329
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#181818] flex-shrink-0" />
                <a href="mailto:info@avninteriors.com" className="hover:text-[#181818] transition-colors font-medium text-[#181818]">
                  info@avninteriors.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#736d65]">
          <p>© 2024 by AVN INTERIORS. Designed and Developed by Greens Media.</p>
          <p className="font-serif italic text-[#57524a]">Design for a more human tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
