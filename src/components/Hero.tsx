import React from 'react';

interface HeroProps {
  onOpenInquiry: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExplorePortfolio }) => {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#171614] text-white">
      {/* Background Image with carefully calibrated editorial overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/79fqTHb.jpeg"
          alt="Casal em momento espontâneo de casamento - Fotografia editorial de casamento"
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.88] contrast-[1.03]"
          loading="eager"
          decoding="sync"
          referrerPolicy="no-referrer"
        />
        {/* Editorial Gradients: strong enough on mobile for high legibility, cinema-grade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171614] via-[#171614]/50 to-[#171614]/40" />
        <div className="absolute inset-0 bg-[#171614]/30" />
      </div>

      {/* Discreet AI illustration notice */}
      <div className="absolute top-20 right-4 sm:right-8 z-10 pointer-events-none">
        <span className="text-[10px] tracking-wider text-white/70 font-sans bg-[#171614]/50 px-2 py-0.5 rounded-[2px] backdrop-blur-xs">
          Imagem ilustrativa criada com IA para fins demonstrativos
        </span>
      </div>

      {/* Main Content Container - Mobile First hierarchy */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-24 pb-16 md:py-32 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="mb-4 sm:mb-6">
          <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.28em] text-[#E7DED3] uppercase font-medium">
            FOTOGRAFIA DE CASAMENTOS
          </span>
        </div>

        {/* H1 Main Headline - Mobile 42-52px, Desktop larger */}
        <h1 className="text-[2.625rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-[-0.01em] text-[#F4F0EA] mb-5 sm:mb-7 max-w-3xl text-balance">
          O seu dia passa.<br />
          <span className="italic font-normal">A história fica.</span>
        </h1>

        {/* Subheadline - ~16px, readable measure, high contrast */}
        <p className="text-[0.9375rem] sm:text-base md:text-lg font-sans font-normal text-[#F4F0EA]/85 max-w-xl sm:max-w-2xl leading-relaxed mb-8 sm:mb-10 text-balance">
          Fotografias feitas para preservar aquilo que as palavras não conseguem contar:
          os olhares, os abraços, os detalhes e tudo aquilo que fez o seu casamento ser único.
        </p>

        {/* CTAs - Mobile stacked if needed or flex wrap, >= 44px touch target */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <button
            onClick={onOpenInquiry}
            type="button"
            className="btn-aura min-h-[48px] px-8 text-xs tracking-[0.14em] shadow-lg shadow-black/20"
          >
            CONSULTAR DISPONIBILIDADE
          </button>
          <button
            onClick={onExplorePortfolio}
            type="button"
            className="btn-aura-outline min-h-[48px] px-7 text-xs tracking-[0.14em]"
          >
            CONHECER O TRABALHO
          </button>
        </div>

        {/* Localização */}
        <div className="pt-2 text-xs sm:text-sm font-sans tracking-[0.12em] text-[#E7DED3]/80">
          <span>São Paulo</span>
          <span className="mx-2 opacity-50">·</span>
          <span>Grande São Paulo</span>
          <span className="mx-2 opacity-50">·</span>
          <span>Destinos selecionados</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <a
          href="#introducao"
          className="group flex flex-col items-center gap-1.5 text-[10px] sm:text-xs font-sans tracking-[0.25em] text-white/70 hover:text-white transition-colors"
          aria-label="Rolar para a introdução"
        >
          <span>SCROLL</span>
          <span className="text-sm transition-transform duration-300 group-hover:translate-y-1">↓</span>
        </a>
      </div>
    </section>
  );
};
