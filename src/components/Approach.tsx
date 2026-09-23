import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

interface ApproachProps {
  onOpenImageModal?: (src: string, caption: string) => void;
}

export const Approach: React.FC<ApproachProps> = ({ onOpenImageModal }) => {
  const imgSrc = "https://i.imgur.com/RunuGZW.jpeg";
  const imgCaption = "A leveza do momento natural — AURA Fotografia";

  const pillars = [
    {
      num: '01',
      title: 'ESPONTANEIDADE',
      text: 'Os momentos mais especiais nem sempre estão no roteiro. Estamos atentos ao que acontece naturalmente para registrar emoções que não podem ser repetidas.',
    },
    {
      num: '02',
      title: 'DIREÇÃO',
      text: 'Nem todo mundo sabe o que fazer diante de uma câmera. Quando necessário, orientamos vocês de maneira leve para criar fotografias naturais, sem transformar o momento em uma sequência de poses.',
    },
    {
      num: '03',
      title: 'NARRATIVA',
      text: 'Um casamento não é formado apenas por retratos. É uma história feita de pessoas, lugares, detalhes e emoções. E cada fotografia é parte dela.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F4F0EA] text-[#171614] border-t border-[#171614]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Text and Pillars Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.24em] text-[#9A8066] uppercase font-semibold">
                UM OLHAR NATURAL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#171614] leading-[1.12] mb-6 text-balance">
              Menos poses.<br />
              <span className="italic font-normal">Mais momentos que realmente aconteceram.</span>
            </h2>

            <div className="space-y-4 text-[#5F5952] font-sans text-base leading-relaxed mb-10 sm:mb-12">
              <p>
                Acreditamos que as melhores fotografias não precisam parecer planejadas. Elas acontecem quando as pessoas se esquecem da câmera e simplesmente vivem.
              </p>
              <p>
                Por isso, nossa abordagem combina observação, sensibilidade e direção quando necessário — sempre respeitando a personalidade de cada casal.
              </p>
            </div>

            {/* The 3 Pillars */}
            <div className="space-y-8 border-t border-[#171614]/10 pt-8">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="group">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-xs font-sans font-medium text-[#9A8066] tracking-wider">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] text-[#5F5952] opacity-60">—</span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#171614] tracking-wide group-hover:text-[#9A8066] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#5F5952] font-sans leading-relaxed pl-7">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
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
              aria-label="Ampliar fotografia: Um olhar natural"
            >
              <ImageWithFallback
                src={imgSrc}
                alt="Fotografia com olhar natural e espontâneo em casamento"
                aspectRatioClass="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
                className="rounded-[2px] shadow-[0_8px_30px_rgba(23,22,20,0.06)]"
              />
              <div className="absolute inset-0 bg-[#171614]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="mt-3 flex justify-between items-center text-[11px] text-[#5F5952] font-sans tracking-wide">
                <span>Fotografia autoral e documental</span>
                <span className="opacity-75">Toque para ampliar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
