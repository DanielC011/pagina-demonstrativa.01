import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

interface DetailsProps {
  onOpenImageModal?: (src: string, caption: string) => void;
}

export const Details: React.FC<DetailsProps> = ({ onOpenImageModal }) => {
  const imgSrc = "https://i.imgur.com/v5Dawvj.jpeg";
  const imgCaption = "A poesia silenciosa dos pequenos detalhes — AURA Fotografia";

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F4F0EA] text-[#171614] border-t border-[#171614]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.24em] text-[#9A8066] uppercase font-semibold">
                PORQUE UMA HISTÓRIA TAMBÉM ESTÁ NOS PEQUENOS DETALHES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#171614] leading-[1.12] mb-6 text-balance">
              O que quase passa despercebido também merece ser lembrado.
            </h2>

            <div className="space-y-4 text-[#5F5952] font-sans text-base sm:text-lg leading-relaxed">
              <div className="space-y-2 font-serif text-lg sm:text-xl text-[#171614] italic pl-4 border-l-2 border-[#9A8066]/50 my-6">
                <p>As alianças sobre a mesa.</p>
                <p>O perfume escolhido para aquele dia.</p>
                <p>O vestido antes de ser usado.</p>
                <p>As mãos que se encontram.</p>
              </div>

              <p>
                Os detalhes que, naquele momento, parecem pequenos — mas que anos depois podem trazer tudo de volta.
              </p>
              <p className="text-[#171614] font-medium pt-2">
                É por isso que fotografamos o todo. E também aquilo que acontece entre uma cena e outra.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6">
            <div
              className="relative cursor-pointer group"
              onClick={() => onOpenImageModal?.(imgSrc, imgCaption)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenImageModal?.(imgSrc, imgCaption);
                }
              }}
              aria-label="Ampliar fotografia de detalhes"
            >
              <ImageWithFallback
                src={imgSrc}
                alt="Detalhes minuciosos de casamento - alianças e toque"
                aspectRatioClass="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
                className="rounded-[2px] shadow-[0_8px_30px_rgba(23,22,20,0.06)]"
              />
              <div className="absolute inset-0 bg-[#171614]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="mt-3 flex justify-between items-center text-[11px] text-[#5F5952] font-sans tracking-wide">
                <span>Fotografia macro e detalhes</span>
                <span className="opacity-75">Toque para ampliar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
