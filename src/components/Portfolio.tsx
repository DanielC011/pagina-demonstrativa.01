import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

export interface PortfolioItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: string;
  aspectMobile: string;
  aspectDesktop: string;
  desktopSpan: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    src: 'https://i.imgur.com/gCrKCNL.jpeg',
    title: 'A conexão no entardecer',
    subtitle: 'Cerimônia ao ar livre sob a luz dourada do litoral',
    category: 'Casamento',
    aspectMobile: 'aspect-[4/5]',
    aspectDesktop: 'aspect-[16/10]',
    desktopSpan: 'lg:col-span-8 lg:row-span-1',
  },
  {
    id: '2',
    src: 'https://i.imgur.com/t2BdzyG.jpeg',
    title: 'A serenidade e o véu',
    subtitle: 'Retrato editorial autêntico no making of',
    category: 'Retrato Editorial',
    aspectMobile: 'aspect-[3/4]',
    aspectDesktop: 'aspect-[3/4]',
    desktopSpan: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: '3',
    src: 'https://i.imgur.com/4rnMOTU.jpeg',
    title: 'A celebração sem roteiros',
    subtitle: 'A euforia espontânea da pista de dança com quem mais importa',
    category: 'Festa',
    aspectMobile: 'aspect-[4/3]',
    aspectDesktop: 'aspect-[4/3]',
    desktopSpan: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: '4',
    src: 'https://i.imgur.com/v5Dawvj.jpeg',
    title: 'O gesto e as alianças',
    subtitle: 'O toque delicado que sela a promessa de uma vida',
    category: 'Detalhes',
    aspectMobile: 'aspect-[1/1]',
    aspectDesktop: 'aspect-[1/1]',
    desktopSpan: 'lg:col-span-4 lg:row-span-1',
  },
  {
    id: '5',
    src: 'https://i.imgur.com/hyqJfAq.jpeg',
    title: 'O abraço compartilhado',
    subtitle: 'Lágrimas e risadas verdadeiras entre familiares',
    category: 'Emoção',
    aspectMobile: 'aspect-[4/5]',
    aspectDesktop: 'aspect-[4/3]',
    desktopSpan: 'lg:col-span-4 lg:row-span-1',
  },
];

interface PortfolioProps {
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenLightbox }) => {
  return (
    <section id="portfolio" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 lg:py-36 bg-[#F4F0EA] text-[#171614]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="mb-4">
            <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.26em] text-[#9A8066] uppercase font-semibold">
              O NOSSO OLHAR
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#171614] leading-[1.12] mb-6 text-balance">
            Histórias que merecem ser lembradas.
          </h2>
          <div className="space-y-4 text-[#5F5952] font-sans text-base sm:text-lg leading-relaxed">
            <p>
              Cada casamento possui seu próprio ritmo. Os grandes momentos importam, mas são os pequenos gestos que muitas vezes contam a história inteira.
            </p>
            <p className="font-serif text-lg sm:text-xl text-[#171614] italic">
              Um olhar. Um abraço. Uma lágrima. Uma gargalhada. Uma mão procurando outra no meio da multidão.
            </p>
            <p className="text-sm sm:text-base text-[#5F5952]/90">
              Nosso trabalho é estar presente para perceber tudo isso.
            </p>
          </div>
        </div>

        {/* Gallery: Mobile sequence vs Desktop Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          {portfolioItems.map((item, idx) => (
            <div
              key={item.id}
              className={`${item.desktopSpan} flex flex-col group cursor-pointer`}
              onClick={() => onOpenLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenLightbox(item);
                }
              }}
              aria-label={`Ver foto: ${item.title}`}
            >
              <div className="relative overflow-hidden rounded-[2px] bg-[#E7DED3]/40 shadow-sm transition-transform duration-500">
                {/* Image container */}
                <ImageWithFallback
                  src={item.src}
                  alt={item.title}
                  aspectRatioClass={`w-full ${item.aspectMobile} lg:${item.aspectDesktop}`}
                />

                {/* Subtle Hover Veil on Desktop */}
                <div className="absolute inset-0 bg-[#171614]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                  <span className="text-xs font-sans text-white uppercase tracking-[0.2em] bg-[#171614]/80 px-3 py-1.5 rounded-[2px] backdrop-blur-xs border border-white/20">
                    Ampliar
                  </span>
                </div>
              </div>

              {/* Caption metadata - Clean unboxed typography */}
              <div className="mt-3.5 flex items-baseline justify-between border-b border-[#171614]/10 pb-2.5">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#171614] group-hover:text-[#9A8066] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#5F5952] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#9A8066] shrink-0 ml-4 font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
