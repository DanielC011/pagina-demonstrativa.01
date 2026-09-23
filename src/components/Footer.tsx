import React from 'react';

interface FooterProps {
  onOpenInquiry: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#171614] text-[#F4F0EA] pt-20 pb-24 sm:pb-16 border-t border-[#F4F0EA]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F4F0EA]/10">
          {/* Brand and Tagline */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block text-xl sm:text-2xl font-serif tracking-[0.2em] uppercase text-[#F4F0EA] hover:opacity-80 transition-opacity"
            >
              AURA <span className="font-light tracking-[0.24em] text-xs sm:text-sm text-[#E7DED3]">FOTOGRAFIA</span>
            </a>
            <p className="text-sm font-sans text-[#E7DED3]/80 tracking-wide">
              Fotografia de casamentos e histórias que merecem ser lembradas.
            </p>
            <p className="text-xs font-sans text-[#9A8066] uppercase tracking-widest font-medium">
              São Paulo — SP
            </p>
          </div>

          {/* Navigation Links and Contact */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#9A8066] block mb-3 font-medium">
                Navegação
              </span>
              <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-sans text-[#E7DED3]/80">
                <button
                  type="button"
                  onClick={() => handleNavClick('#inicio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Início
                </button>
                <span aria-hidden="true" className="text-white/20">·</span>
                <button
                  type="button"
                  onClick={() => handleNavClick('#portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Trabalho
                </button>
                <span aria-hidden="true" className="text-white/20">·</span>
                <button
                  type="button"
                  onClick={() => handleNavClick('#servicos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Serviços
                </button>
                <span aria-hidden="true" className="text-white/20">·</span>
                <button
                  type="button"
                  onClick={() => handleNavClick('#sobre')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sobre
                </button>
                <span aria-hidden="true" className="text-white/20">·</span>
                <button
                  type="button"
                  onClick={() => handleNavClick('#faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
                <span aria-hidden="true" className="text-white/20">·</span>
                <button
                  type="button"
                  onClick={() => handleNavClick('#contato')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </nav>
            </div>

            <div>
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#9A8066] block mb-3 font-medium">
                Canais
              </span>
              <div className="flex items-center gap-5 text-xs sm:text-sm font-sans text-[#E7DED3]/90">
                <button
                  type="button"
                  onClick={() => onOpenInquiry('Contato via Instagram')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                </button>
                <span aria-hidden="true" className="text-white/20">·</span>
                <button
                  type="button"
                  onClick={() => onOpenInquiry('Contato direto via WhatsApp')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Demonstrative Project & AI Notice Section (per strict prompt guidelines) */}
        <div className="pt-12 pb-4 space-y-5">
          <div className="border border-[#F4F0EA]/15 rounded-[2px] p-5 sm:p-6 bg-[#171614]/80">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#9A8066] font-semibold">
                PROJETO DEMONSTRATIVO
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#E7DED3]/80 font-sans leading-relaxed">
              Conceito desenvolvido pela <strong>Faluchi Studio</strong> para apresentação de estrutura, design, copy e estratégia de Landing Page.
              Este projeto não representa um cliente real.
            </p>
            <p className="text-xs text-[#E7DED3]/65 font-sans mt-3 border-t border-[#F4F0EA]/10 pt-3">
              As imagens utilizadas neste projeto são ilustrativas e foram geradas por inteligência artificial para fins demonstrativos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E7DED3]/50 font-sans pt-4">
            <p>© {currentYear} AURA Fotografia. Todos os direitos reservados.</p>
            <p className="tracking-wide">
              Direção e Desenvolvimento por <span className="text-[#E7DED3]/80">Faluchi Studio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
