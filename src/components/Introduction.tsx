import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

interface IntroductionProps {
  onOpenImageModal?: (src: string, caption: string) => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onOpenImageModal }) => {
  const imgSrc = "https://i.imgur.com/t6s3Ewe.jpeg";
  const imgCaption = "A emoção silenciosa antes da cerimônia — AURA Fotografia";

  return (
    <section id="introducao" className="py-20 sm:py-28 lg:py-36 bg-[#F4F0EA] text-[#171614] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual column - order 1 on desktop or mobile depending on reading flow */}
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
              aria-label="Ampliar fotografia"
            >
              <ImageWithFallback
                src={imgSrc}
                alt="Retrato documental de casamento - o olhar antes da cerimônia"
                aspectRatioClass="aspect-[4/5] sm:aspect-[3/4]"
                className="rounded-[2px] shadow-[0_8px_30px_rgba(23,22,20,0.06)]"
              />
              <div className="absolute inset-0 bg-[#171614]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="mt-3 flex justify-between items-center text-[11px] text-[#5F5952] font-sans tracking-wide">
                <span>Fotografia documental</span>
                <span className="opacity-75">Clique para ampliar</span>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.24em] text-[#9A8066] uppercase font-semibold">
                MAIS DO QUE FOTOGRAFAR
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#171614] leading-[1.15] mb-8 text-balance">
              Algumas histórias merecem ser sentidas novamente.
            </h2>

            <div className="space-y-5 text-[#5F5952] font-sans text-base sm:text-lg leading-relaxed font-normal">
              <p className="text-[#171614] font-serif text-xl sm:text-2xl italic leading-snug">
                Um casamento acontece uma vez.
              </p>
              <p>
                Mas existem momentos que você vai querer revisitar: o olhar antes da cerimônia, o abraço dos seus pais, a mão tremendo ao colocar a aliança, aquela risada que ninguém planejou.
              </p>
              <p>
                A Aura fotografa o dia como ele realmente acontece — com emoção, espontaneidade e atenção aos detalhes que fazem parte da história de cada casal.
              </p>
              <div className="pt-2 border-l-2 border-[#9A8066]/50 pl-4 sm:pl-6 my-4">
                <p className="text-[#171614] font-medium text-base sm:text-lg leading-relaxed">
                  Porque, no fim, não se trata apenas de ter fotografias bonitas.
                </p>
                <p className="text-[#9A8066] font-serif text-lg sm:text-xl italic mt-1">
                  Trata-se de poder voltar para aquele momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
