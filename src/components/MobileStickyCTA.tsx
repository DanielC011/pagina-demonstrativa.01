import React, { useState, useEffect } from 'react';

interface MobileStickyCTAProps {
  onOpenInquiry: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenInquiry }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contactEl = document.getElementById('contato');

      // Hide if contact section is already in view to avoid redundant duplicate CTAs
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        // If top of contact section is within viewport or above middle
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
          setVisible(false);
          return;
        }
      }

      // Show after scrolling past hero (approx 450px)
      if (scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-[#171614]/95 backdrop-blur-md border-t border-white/10 transition-transform duration-300 ease-out shadow-[0_-4px_20px_rgba(0,0,0,0.3)] animate-fade-in pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#9A8066] font-medium">
            Aura Fotografia
          </span>
          <span className="text-xs font-serif text-[#F4F0EA]">
            Disponibilidade sob consulta
          </span>
        </div>

        <button
          onClick={onOpenInquiry}
          type="button"
          className="btn-aura text-xs tracking-wider py-2.5 px-4 h-11 shrink-0 font-medium"
        >
          CONSULTAR DISPONIBILIDADE
        </button>
      </div>
    </div>
  );
};
