import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CONVERSAR',
      description: 'Queremos conhecer vocês, entender o casamento e descobrir o que torna esse momento especial.',
    },
    {
      num: '02',
      title: 'PLANEJAR',
      description: 'A partir da conversa, alinhamos os detalhes da cobertura, horários, locais e momentos importantes.',
    },
    {
      num: '03',
      title: 'VIVER',
      description: 'No grande dia, vocês vivem. Nós observamos, acompanhamos e registramos o que acontece — dos grandes momentos aos pequenos detalhes.',
    },
    {
      num: '04',
      title: 'REVIVER',
      description: 'Depois, as fotografias transformam aquilo que aconteceu em memórias que podem ser revisitadas ao longo dos anos.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F4F0EA] text-[#171614] border-t border-[#171614]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="mb-4">
            <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.26em] text-[#9A8066] uppercase font-semibold">
              DO PRIMEIRO CONTATO ÀS FOTOGRAFIAS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#171614] leading-[1.12] mb-6 text-balance">
            Tudo começa com uma conversa.
          </h2>
          <p className="text-[#5F5952] font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
            Fotografar um casamento também significa conhecer as pessoas que estão vivendo aquela história.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline with connecting line */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[18px] left-0 right-0 h-[1px] bg-[#171614]/15 z-0" />
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="pt-8 relative group">
                {/* Node point */}
                <div className="absolute top-[12px] left-0 w-3.5 h-3.5 rounded-full bg-[#F4F0EA] border-2 border-[#9A8066] transition-transform duration-300 group-hover:scale-125" />
                <div className="mb-3 flex items-baseline gap-2">
                  <span className="text-xs font-sans font-medium text-[#9A8066] tracking-wider">
                    {step.num}
                  </span>
                  <span className="text-xs text-[#5F5952] opacity-50">—</span>
                  <h3 className="font-serif text-2xl text-[#171614] tracking-wide group-hover:text-[#9A8066] transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-[#5F5952] font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Timeline */}
        <div className="lg:hidden relative pl-7 border-l border-[#171614]/15 space-y-10">
          {steps.map((step) => (
            <div key={step.num} className="relative group">
              {/* Node point positioned on the border line */}
              <div className="absolute -left-[35px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F4F0EA] border-2 border-[#9A8066]" />
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xs font-sans font-medium text-[#9A8066] tracking-wider">
                  {step.num}
                </span>
                <span className="text-xs text-[#5F5952] opacity-50">—</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#171614] tracking-wide">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#5F5952] font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
