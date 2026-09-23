import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#171614] text-[#F4F0EA] relative overflow-hidden">
      {/* Delicate hairline decorative border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#F4F0EA]/10" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#F4F0EA]/10" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="mb-6 sm:mb-8">
          <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.3em] text-[#9A8066] uppercase font-medium">
            PARA ALÉM DA IMAGEM
          </span>
        </div>

        {/* Primary Statement */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-[1.25] sm:leading-[1.22] text-[#F4F0EA] mb-8 sm:mb-12 max-w-3xl text-balance">
          Alguns momentos duram segundos.<br />
          <span className="italic font-normal text-[#E7DED3]">
            Algumas fotografias fazem você voltar para eles.
          </span>
        </blockquote>

        {/* Subtle separator */}
        <div className="w-12 h-[1px] bg-[#9A8066]/60 mb-8 sm:mb-12" />

        {/* Secondary Text */}
        <div className="max-w-xl text-[#F4F0EA]/75 font-sans text-sm sm:text-base leading-relaxed tracking-wide space-y-2">
          <p>O tempo passa. A fotografia permanece.</p>
          <p className="text-[#F4F0EA]/90 font-serif text-lg sm:text-xl italic">
            E é nesse intervalo entre um instante e uma memória que existe o nosso trabalho.
          </p>
        </div>
      </div>
    </section>
  );
};
