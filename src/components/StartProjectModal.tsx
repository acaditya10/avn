import { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectTitle?: string;
}

export default function StartProjectModal({
  isOpen,
  onClose,
  defaultProjectTitle = '',
}: StartProjectModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('residential');
  const [budget, setBudget] = useState('premium');
  const [notes, setNotes] = useState(defaultProjectTitle ? `Inquiring about ${defaultProjectTitle}` : '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProjectTitle) {
      setNotes(`Inquiring about ${defaultProjectTitle}`);
    }
  }, [defaultProjectTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#fcfbf9] shadow-2xl p-7 sm:p-9 border border-[#ded8cc]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#78726a] hover:text-[#181818] p-1.5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="font-serif text-2xl text-[#181818]">Thank you, {name || 'valued client'}!</h3>
            <p className="text-[14px] text-[#555049] max-w-sm mx-auto">
              Our studio team has received your project briefing and will get back to you shortly.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#78726a] font-semibold mb-1">
                COMMISSION AN INTERIOR
              </p>
              <h3 className="font-serif text-3xl text-[#181818] font-normal">
                Start a Project
              </h3>
              <p className="text-[13.5px] text-[#555049] mt-1.5">
                Tell us about your upcoming residential, commercial or architectural vision.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11.5px] uppercase tracking-wider text-[#635c54] font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#f5f3ef] border border-[#dcd7cd] text-[13.5px] text-[#181818] focus:bg-white focus:border-[#181818] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11.5px] uppercase tracking-wider text-[#635c54] font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#f5f3ef] border border-[#dcd7cd] text-[13.5px] text-[#181818] focus:bg-white focus:border-[#181818] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11.5px] uppercase tracking-wider text-[#635c54] font-semibold mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#f5f3ef] border border-[#dcd7cd] text-[13.5px] text-[#181818] focus:bg-white focus:border-[#181818] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11.5px] uppercase tracking-wider text-[#635c54] font-semibold mb-1">
                    Scope of Work
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#f5f3ef] border border-[#dcd7cd] text-[13.5px] text-[#181818] focus:bg-white focus:border-[#181818] focus:outline-none"
                  >
                    <option value="residential">Residential Interiors</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="architecture">Architecture & New Build</option>
                    <option value="renovation">Renovation & Makeover</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11.5px] uppercase tracking-wider text-[#635c54] font-semibold mb-1">
                    Project Scale
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#f5f3ef] border border-[#dcd7cd] text-[13.5px] text-[#181818] focus:bg-white focus:border-[#181818] focus:outline-none"
                  >
                    <option value="luxury">Luxury Full Home</option>
                    <option value="premium">Apartment / Penthouse</option>
                    <option value="commercial">Executive Workspace</option>
                    <option value="villa">Independent Villa</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11.5px] uppercase tracking-wider text-[#635c54] font-semibold mb-1">
                  Project Notes & Timeline
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details regarding location, square footage, or specific aesthetic goals..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 bg-[#f5f3ef] border border-[#dcd7cd] text-[13.5px] text-[#181818] focus:bg-white focus:border-[#181818] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#181818] text-white text-[13.5px] tracking-[0.04em] font-medium rounded-full hover:bg-[#333] transition-colors shadow-sm"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
