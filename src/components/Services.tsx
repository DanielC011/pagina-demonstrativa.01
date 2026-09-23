import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      num: '01',
      title: 'FOTOGRAFIA DE CASAMENTO',
      description: 'Do preparo aos últimos momentos da celebração, registramos o dia acompanhando sua história de forma natural e atenta aos detalhes.',
      badge: 'Cobertura completa',
    },
    {
      num: '02',
      title: 'PRÉ-WEDDING',
      description: 'Um ensaio pensado para registrar a conexão do casal antes da celebração.',
      badge: 'Ensaio autoral',
    },
    {
      num: '03',
      title: 'ELOPEMENTS',
      description: 'Cerimônias intimistas também merecem ser registradas em toda a sua intensidade.',
      badge: 'Celebração a dois',
    },
    {
      num: '04',
      title: 'EVENTOS ESPECIAIS',
      description: 'Registramos celebrações e eventos mantendo o mesmo olhar cuidadoso sobre pessoas, detalhes e acontecimentos.',
      badge: 'Datas marcantes',
    },
  ];

  return (
    <section id="servicos" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 lg:py-36 bg-[#E7DED3] text-[#171614] border-t border-[#171614]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="mb-4">
            <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.26em] text-[#9A8066] uppercase font-semibold">
              COMO PODEMOS ESTAR PRESENTES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#171614] leading-[1.12] mb-6 text-balance">
            Cada história tem seu próprio ritmo.
          </h2>
          <p className="text-[#5F5952] font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
            Por isso, a fotografia é pensada de acordo com o momento que vocês querem guardar.
          </p>
        </div>

        {/* Editorial Services List - Vertical on mobile, wide editorial rows on desktop */}
        <div className="border-t border-[#171614]/15 divide-y divide-[#171614]/15">
          {services.map((item) => (
            <div
              key={item.num}
              onClick={() => onSelectService(item.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectService(item.title);
                }
              }}
              className="py-8 sm:py-10 lg:py-12 group cursor-pointer transition-colors duration-300 hover:bg-[#F4F0EA]/40 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-[2px]"
              aria-label={`Consultar disponibilidade para ${item.title}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                {/* Number */}
                <div className="lg:col-span-2 flex items-center justify-between lg:block">
                  <span className="text-xs sm:text-sm font-sans font-medium text-[#9A8066] tracking-widest">
                    {item.num}
                  </span>
                  <span className="lg:hidden text-[11px] font-sans text-[#5F5952] uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-5">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#171614] group-hover:text-[#9A8066] transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description and Action Indicator */}
                <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mt-2 lg:mt-0">
                  <p className="text-sm sm:text-base text-[#5F5952] font-sans leading-relaxed max-w-md">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-sans font-medium text-[#9A8066] tracking-wider uppercase shrink-0 min-h-[44px] items-center">
                    <span className="hidden sm:inline">Consultar</span>
                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
