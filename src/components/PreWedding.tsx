import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface PreWeddingProps {
  onOpenInquiry: (initialSubject?: string) => void;
  onOpenImageModal?: (src: string, caption: string) => void;
}

export const PreWedding: React.FC<PreWeddingProps> = ({ onOpenInquiry, onOpenImageModal }) => {
  const imgSrc = "https://i.imgur.com/r8ODpvI.jpeg";
  const imgCaption = "Ensaio pré-wedding: cumplicidade e tranquilidade antes da cerimônia";

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F4F0EA] text-[#171614] border-t border-[#171614]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
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
              aria-label="Ampliar fotografia do ensaio pré-wedding"
            >
              <ImageWithFallback
                src={imgSrc}
                alt="Ensaio pré-wedding intimista ao entardecer"
                aspectRatioClass="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
                className="rounded-[2px] shadow-[0_8px_30px_rgba(23,22,20,0.06)]"
              />
              <div className="absolute inset-0 bg-[#171614]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="mt-3 flex justify-between items-center text-[11px] text-[#5F5952] font-sans tracking-wide">
                <span>Ensaio Pré-Wedding</span>
                <span className="opacity-75">Toque para ampliar</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.24em] text-[#9A8066] uppercase font-semibold">
                ANTES DO GRANDE DIA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#171614] leading-[1.12] mb-6 text-balance">
              A história de vocês não começa no altar.
            </h2>

            <div className="space-y-4 text-[#5F5952] font-sans text-base sm:text-lg leading-relaxed mb-8">
              <p className="text-[#171614] font-serif text-xl sm:text-2xl italic leading-snug">
                O pré-wedding é uma oportunidade para desacelerar.
              </p>
              <p>
                Sem cronograma apertado. Sem a pressão do grande dia.
              </p>
              <p>
                Apenas vocês, o lugar escolhido e a liberdade para criar imagens que tenham a personalidade do casal.
              </p>
              <p>
                Pode ser uma cidade, uma praia, uma serra ou simplesmente um lugar que faça parte da história de vocês.
              </p>
              <p className="text-[#171614] font-medium pt-1">
                O importante é que as fotografias tenham significado.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry('Ensaio Pré-Wedding')}
                type="button"
                className="btn-aura text-xs tracking-[0.14em] min-h-[48px] px-7 inline-flex items-center gap-2 group"
              >
                <span>CONHECER O PRÉ-WEDDING</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
