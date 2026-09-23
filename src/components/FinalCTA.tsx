import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenInquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section id="contato" className="relative py-28 sm:py-36 lg:py-48 bg-[#171614] text-white overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/l3mU1tr.jpeg"
          alt="Casal em celebração intimista ao pôr do sol"
          className="w-full h-full object-cover object-center filter brightness-[0.75]"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        {/* Scrim overlay */}
        <div className="absolute inset-0 bg-[#171614]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171614] via-transparent to-[#171614]/80" />
      </div>

      {/* AI disclosure tag */}
      <div className="absolute top-4 right-4 sm:right-8 z-10 pointer-events-none">
        <span className="text-[10px] tracking-wider text-white/60 font-sans bg-[#171614]/60 px-2 py-0.5 rounded-[2px] backdrop-blur-xs">
          Imagem ilustrativa criada com IA para fins demonstrativos
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        <div className="mb-4 sm:mb-6">
          <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.28em] text-[#E7DED3] uppercase font-medium">
            A SUA HISTÓRIA ESTÁ APENAS COMEÇANDO
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#F4F0EA] leading-[1.12] mb-6 max-w-2xl text-balance">
          Vamos registrar o que não pode ser repetido.
        </h2>

        <p className="text-[#F4F0EA]/85 font-sans text-base sm:text-lg leading-relaxed max-w-xl mb-10 text-balance">
          Conte um pouco sobre o seu casamento e vamos conversar sobre a sua data.
        </p>

        <div>
          <button
            onClick={onOpenInquiry}
            type="button"
            className="btn-aura min-h-[50px] px-9 text-xs tracking-[0.16em] inline-flex items-center gap-3 shadow-xl shadow-black/30 group"
          >
            <span>CONSULTAR DISPONIBILIDADE</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <p className="text-xs font-sans text-[#E7DED3]/70 mt-6 tracking-wider uppercase">
          São Paulo · Grande São Paulo · Destinos selecionados
        </p>
      </div>
    </section>
  );
};
