import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onScrollToForm?: () => void;
}

export default function ContactSection({ onScrollToForm }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setProjectType('');
      setMessage('');
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 600);
  };

  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-[#332b26] text-white relative overflow-hidden">
      {/* Ambient warm gradient on the left */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#534032]/35 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Subtitle & Get in Touch CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-[11.5px] md:text-[12px] tracking-[0.24em] uppercase text-[#d6b27c] font-semibold mb-3">
              LET'S CREATE YOURS
            </p>
            <h2 className="font-serif text-[38px] sm:text-[46px] md:text-[52px] leading-[1.08] text-[#faf8f5] font-normal mb-5">
              Start a conversation.
            </h2>
            <p className="text-[14.5px] md:text-[15.5px] leading-[1.7] text-[#c5beb5] font-normal mb-8 max-w-md">
              Whether you're planning a new home, a workspace or a renovation, we'd love to hear about your project.
            </p>
            <div>
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('name-input')?.focus();
                }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#faf8f5] text-[#181818] text-[13.5px] tracking-[0.04em] font-medium rounded-full hover:bg-white transition-all duration-200 shadow-sm active:scale-[0.98]"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-md p-7 sm:p-9 shadow-[0_16px_40px_rgba(0,0,0,0.25)] text-[#181818]">
              {isSuccess ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-2xl font-medium text-[#181818]">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm text-[#5a544c] max-w-md mx-auto">
                    We have received your project inquiry. Aditi Vora Nair and our design team will review your requirements and respond within 24 business hours.
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name-input" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#f5f3ef] border border-[#e2ddd5] text-[14px] text-[#1a1a1a] placeholder-[#857f78] focus:bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email-input" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      required
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#f5f3ef] border border-[#e2ddd5] text-[14px] text-[#1a1a1a] placeholder-[#857f78] focus:bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="project-type-select" className="sr-only">
                      Project Type
                    </label>
                    <select
                      id="project-type-select"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 bg-[#f5f3ef] border border-[#e2ddd5] text-[14px] text-[#1a1a1a] placeholder-[#857f78] focus:bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Project Type
                      </option>
                      <option value="residential">Residential Interiors</option>
                      <option value="commercial">Commercial Interiors</option>
                      <option value="architecture">Architecture & New Build</option>
                      <option value="renovation">Renovation & Makeovers</option>
                      <option value="other">Consultation / Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message-input" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message-input"
                      rows={4}
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-[#f5f3ef] border border-[#e2ddd5] text-[14px] text-[#1a1a1a] placeholder-[#857f78] focus:bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  <div>
                    <button
                      id="send-message-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#181818] text-white text-[13.5px] tracking-[0.04em] font-medium rounded-full hover:bg-[#333] transition-all duration-200 shadow-sm active:scale-[0.98] disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
