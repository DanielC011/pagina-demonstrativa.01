import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

interface AboutProps {
  onOpenImageModal?: (src: string, caption: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenImageModal }) => {
  const imgSrc = "https://i.imgur.com/79YNDh0.jpeg";
  const imgCaption = "Lucas Almeida — Fotógrafo e Diretor Criativo da AURA Fotografia";

  return (
    <section id="sobre" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 lg:py-36 bg-[#F4F0EA] text-[#171614] border-t border-[#171614]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/*
            Mobile Order Requirement:
            1. imagem
            2. eyebrow
            3. nome
            4. profissão
            5. texto
          */}

          {/* 1. Imagem */}
          <div className="lg:col-span-6 order-1">
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
              aria-label="Ampliar retrato de Lucas Almeida"
            >
              <ImageWithFallback
                src={imgSrc}
                alt="Lucas Almeida - Fotógrafo de casamentos da AURA Fotografia"
                aspectRatioClass="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
                className="rounded-[2px] shadow-[0_8px_30px_rgba(23,22,20,0.06)]"
              />
              <div className="absolute inset-0 bg-[#171614]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="mt-3 flex justify-between items-center text-[11px] text-[#5F5952] font-sans tracking-wide">
                <span>Lucas Almeida</span>
                <span className="opacity-75">São Paulo — SP</span>
              </div>
            </div>
          </div>

          {/* 2-5: Eyebrow, Nome, Profissão, Texto */}
          <div className="lg:col-span-6 order-2 flex flex-col justify-center">
            {/* 2. Eyebrow */}
            <div className="mb-3 sm:mb-4">
              <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.24em] text-[#9A8066] uppercase font-semibold">
                POR TRÁS DA CÂMERA
              </span>
            </div>

            {/* 3. Nome */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#171614] leading-[1.1] mb-2 text-balance">
              Lucas Almeida
            </h2>

            {/* 4. Profissão */}
            <p className="text-sm sm:text-base font-sans font-medium text-[#9A8066] tracking-wider uppercase mb-8">
              Fotógrafo de casamentos
            </p>

            {/* 5. Texto */}
            <div className="space-y-4 text-[#5F5952] font-sans text-base sm:text-lg leading-relaxed">
              <p className="text-[#171614] font-serif text-xl sm:text-2xl italic leading-snug">
                Meu trabalho começa antes de apertar o botão da câmera.
              </p>
              <p className="font-medium text-[#171614]">
                Começa observando.
              </p>

              {/* Poetic observation rhythm */}
              <ul className="space-y-1.5 pl-4 border-l border-[#9A8066]/40 text-sm sm:text-base text-[#5F5952]">
                <li>O nervosismo antes da cerimônia.</li>
                <li>O abraço que acontece sem aviso.</li>
                <li>O olhar dos pais.</li>
                <li>A risada dos amigos.</li>
                <li>A festa quando todos finalmente esquecem que existe uma câmera por perto.</li>
              </ul>

              <p className="pt-3">
                Acredito que uma boa fotografia de casamento não precisa apenas mostrar como vocês estavam.
              </p>
              <p className="text-[#171614] font-serif text-lg sm:text-xl italic text-[#9A8066]">
                Ela precisa fazer vocês lembrarem de como se sentiram.
              </p>
              <p className="text-sm sm:text-base text-[#5F5952]">
                É esse olhar que levo para cada história.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
