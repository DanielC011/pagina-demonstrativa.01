import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: (initialSubject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'TRABALHO', href: '#portfolio' },
    { label: 'SERVIÇOS', href: '#servicos' },
    { label: 'SOBRE', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTATO', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-[#F4F0EA]/95 backdrop-blur-md text-[#171614] border-b border-[#171614]/10 shadow-[0_1px_10px_rgba(23,22,20,0.04)] py-3 sm:py-4'
            : 'bg-gradient-to-b from-[#171614]/70 via-[#171614]/30 to-transparent text-[#FFFFFF] py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Brand mark - single line text wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl md:text-2xl font-serif tracking-[0.18em] uppercase transition-opacity duration-300 hover:opacity-80 flex items-center gap-1.5 focus-visible:outline-[#9A8066]"
          >
            AURA <span className="font-light tracking-[0.24em] text-xs sm:text-sm opacity-90">FOTOGRAFIA</span>
          </a>

          {/* Desktop Nav - Clean typography with dot separators */}
          <nav className="hidden lg:flex items-center gap-7 text-[0.8125rem] tracking-[0.15em] font-medium font-sans">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.label}>
                <a
                  href={item.href}
                  className={`transition-colors duration-200 relative group py-1 ${
                    isScrolled
                      ? 'text-[#5F5952] hover:text-[#171614]'
                      : 'text-[#FFFFFF]/85 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-[#171614]' : 'bg-white'
                    }`}
                  />
                </a>
                {idx < navItems.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`text-[10px] select-none ${
                      isScrolled ? 'text-[#9A8066]/50' : 'text-white/40'
                    }`}
                  >
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => onOpenInquiry()}
              type="button"
              className="btn-aura text-xs tracking-[0.14em] py-2.5 px-5 h-10"
            >
              CONSULTAR DISPONIBILIDADE
            </button>
          </div>

          {/* Mobile Menu Button - 44px+ touch target */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded transition-colors ${
                isScrolled ? 'text-[#171614] hover:bg-[#E7DED3]/60' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#171614]/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer content */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#F4F0EA] text-[#171614] shadow-2xl flex flex-col justify-between p-6 sm:p-8 transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#171614]/10">
              <span className="font-serif tracking-[0.18em] text-lg uppercase text-[#171614]">
                AURA <span className="text-xs tracking-[0.24em] font-sans font-light">FOTOGRAFIA</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                type="button"
                aria-label="Fechar menu"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#171614] hover:text-[#9A8066]"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col mt-8 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  type="button"
                  className="min-h-[50px] flex items-center justify-between py-3 text-left font-serif text-2xl text-[#171614] hover:text-[#9A8066] border-b border-[#171614]/5 transition-colors group"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-sans text-[#5F5952] opacity-50 group-hover:opacity-100">
                    0{index + 1}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#171614]/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              type="button"
              className="btn-aura w-full py-3.5 text-center text-xs tracking-[0.14em]"
            >
              CONSULTAR DISPONIBILIDADE
            </button>
            <div className="text-center">
              <p className="text-xs text-[#5F5952] font-sans">
                São Paulo · Grande São Paulo · Destinos
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
