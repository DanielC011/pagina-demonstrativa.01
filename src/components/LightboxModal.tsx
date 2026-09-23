import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxData {
  src: string;
  title: string;
  subtitle?: string;
  category?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: LightboxData | null;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  data,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev && onPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen || !data) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#171614]/95 backdrop-blur-md p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-10 text-white">
        <div className="flex items-center gap-3">
          <span className="font-serif tracking-[0.2em] text-sm uppercase text-white/90">
            AURA FOTOGRAFIA
          </span>
          {data.category && (
            <>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-[11px] font-sans tracking-widest uppercase text-[#9A8066]">
                {data.category}
              </span>
            </>
          )}
        </div>

        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar visualizador"
          className="text-white/80 hover:text-white p-2 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Previous / Next Buttons */}
      {hasPrev && onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          type="button"
          aria-label="Foto anterior"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white p-3 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          type="button"
          aria-label="Próxima foto"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white p-3 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Center Image Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={data.src}
          alt={data.title}
          className="max-h-[72vh] max-w-full object-contain rounded-[2px] shadow-2xl"
          referrerPolicy="no-referrer"
        />

        {/* Caption bar */}
        <div className="mt-4 text-center max-w-xl px-4">
          <h4 className="font-serif text-xl sm:text-2xl text-[#F4F0EA]">
            {data.title}
          </h4>
          {data.subtitle && (
            <p className="text-xs sm:text-sm font-sans text-[#E7DED3]/80 mt-1">
              {data.subtitle}
            </p>
          )}
          <p className="text-[10px] text-white/50 font-sans tracking-wide mt-2">
            Imagem ilustrativa criada com IA para fins demonstrativos
          </p>
        </div>
      </div>
    </div>
  );
};
