import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Com quanto tempo de antecedência devo contratar?',
      a: 'Recomendamos entrar em contato com 8 a 14 meses de antecedência, principalmente para datas em períodos mais concorridos como primavera e outono. Realizamos apenas um casamento por final de semana para garantir dedicação exclusiva e imersão total na história de cada casal.',
    },
    {
      q: 'Vocês atendem fora de São Paulo?',
      a: 'Sim. Além da capital paulista e Grande São Paulo, atendemos casamentos no litoral, interior e destinos selecionados em todo o Brasil ou exterior (destination weddings). Toda a logística de deslocamento é planejada com clareza e transparência.',
    },
    {
      q: 'Vocês fazem pré-wedding?',
      a: 'Sim, o ensaio pré-wedding é uma das nossas experiências favoritas. É a ocasião ideal para nos conhecermos com calma, quebrar qualquer desconforto diante da câmera e registrar a conexão genuína de vocês em um lugar que tenha significado real para o casal.',
    },
    {
      q: 'Como funciona a cobertura do casamento?',
      a: 'Nossa cobertura acompanha a narrativa cronológica completa: desde os preparativos (making of) com tranquilidade e discrição, passando pela cerimônia com olhar puramente documental, pelos retratos a dois sem pressa e se estendendo pela celebração da festa até o fim.',
    },
    {
      q: 'Vocês dirigem as fotos?',
      a: 'Nossa essência é predominantemente documental — ou seja, registrar o que acontece sem interferir. Nos momentos dedicados aos retratos do casal e fotos de família, oferecemos orientações suaves e naturais para que vocês se sintam acolhidos e à vontade, sem criar um roteiro de poses artificiais.',
    },
    {
      q: 'Como as fotografias são entregues?',
      a: 'As imagens passam por rigorosa curadoria artística e tratamento autoral de cor e luz, mantendo um tom atemporal. A entrega é feita por meio de uma galeria online privativa e protegida por senha, em alta resolução para download, compartilhamento e impressão.',
    },
    {
      q: 'Posso solicitar um orçamento personalizado?',
      a: 'Com certeza. Cada celebração tem suas particularidades, tempo de duração e geografia. Após uma conversa inicial para compreender o formato do seu evento, preparamos uma proposta pensada sob medida.',
    },
    {
      q: 'Como verifico a disponibilidade da minha data?',
      a: 'Você pode clicar no botão "Consultar Disponibilidade" nesta página ou entrar em contato direto pelo formulário ou WhatsApp. Informando a data prevista e a cidade do casamento, verificamos a agenda e retornamos com rapidez.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-36 bg-[#E7DED3] text-[#171614] border-t border-[#171614]/10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="mb-4">
            <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.26em] text-[#9A8066] uppercase font-semibold">
              AINDA TEM ALGUMA DÚVIDA?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#171614] leading-[1.15] text-balance">
            Vamos deixar tudo claro antes do grande dia.
          </h2>
        </div>

        {/* Accordion list */}
        <div className="border-t border-[#171614]/15 divide-y divide-[#171614]/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between text-left group min-h-[56px] focus-visible:outline-[#9A8066]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl md:text-2xl text-[#171614] group-hover:text-[#9A8066] transition-colors pr-6">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full border border-[#171614]/20 flex items-center justify-center text-[#171614] group-hover:border-[#9A8066] group-hover:text-[#9A8066] transition-colors">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {/* Smooth collapse container */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm sm:text-base font-sans text-[#5F5952] leading-relaxed pr-6 sm:pr-12">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
