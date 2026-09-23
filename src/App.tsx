import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Manifesto } from './components/Manifesto';
import { Portfolio, portfolioItems, PortfolioItem } from './components/Portfolio';
import { Approach } from './components/Approach';
import { Services } from './components/Services';
import { PreWedding } from './components/PreWedding';
import { Process } from './components/Process';
import { About } from './components/About';
import { Details } from './components/Details';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { LightboxModal, LightboxData } from './components/LightboxModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Fotografia de Casamento');

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeLightboxData, setActiveLightboxData] = useState<LightboxData | null>(null);
  const [activePortfolioIndex, setActivePortfolioIndex] = useState<number | null>(null);

  const handleOpenInquiry = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setInquiryOpen(true);
    }
  };

  const handleExplorePortfolio = () => {
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Portfolio Lightbox
  const handleOpenPortfolioLightbox = (item: PortfolioItem) => {
    const index = portfolioItems.findIndex((p) => p.id === item.id);
    setActivePortfolioIndex(index !== -1 ? index : null);
    setActiveLightboxData({
      src: item.src,
      title: item.title,
      subtitle: item.subtitle,
      category: item.category,
    });
    setLightboxOpen(true);
  };

  // General Image modal (Introduction, About, etc.)
  const handleOpenImageModal = (src: string, caption: string) => {
    setActivePortfolioIndex(null);
    setActiveLightboxData({
      src,
      title: caption,
      subtitle: 'AURA Fotografia — São Paulo',
    });
    setLightboxOpen(true);
  };

  const handlePrevPortfolioItem = () => {
    if (activePortfolioIndex !== null && activePortfolioIndex > 0) {
      const prevIndex = activePortfolioIndex - 1;
      const prevItem = portfolioItems[prevIndex];
      setActivePortfolioIndex(prevIndex);
      setActiveLightboxData({
        src: prevItem.src,
        title: prevItem.title,
        subtitle: prevItem.subtitle,
        category: prevItem.category,
      });
    }
  };

  const handleNextPortfolioItem = () => {
    if (
      activePortfolioIndex !== null &&
      activePortfolioIndex < portfolioItems.length - 1
    ) {
      const nextIndex = activePortfolioIndex + 1;
      const nextItem = portfolioItems[nextIndex];
      setActivePortfolioIndex(nextIndex);
      setActiveLightboxData({
        src: nextItem.src,
        title: nextItem.title,
        subtitle: nextItem.subtitle,
        category: nextItem.category,
      });
    }
  };

  return (
    <div id="inicio" className="min-h-screen flex flex-col bg-[#F4F0EA] text-[#171614] selection:bg-[#9A8066]/25 selection:text-[#171614] antialiased">
      {/* 1. Header */}
      <Header onOpenInquiry={() => handleOpenInquiry()} />

      <main className="flex-1 w-full">
        {/* 2. Hero */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry()}
          onExplorePortfolio={handleExplorePortfolio}
        />

        {/* 3. Introdução */}
        <Introduction onOpenImageModal={handleOpenImageModal} />

        {/* 4. Manifesto */}
        <Manifesto />

        {/* 5. Portfólio */}
        <Portfolio onOpenLightbox={handleOpenPortfolioLightbox} />

        {/* 6. O Olhar da Aura */}
        <Approach onOpenImageModal={handleOpenImageModal} />

        {/* 7. Serviços */}
        <Services onSelectService={(service) => handleOpenInquiry(service)} />

        {/* 8. Pré-Wedding */}
        <PreWedding
          onOpenInquiry={handleOpenInquiry}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 9. Processo */}
        <Process />

        {/* 10. Sobre Lucas */}
        <About onOpenImageModal={handleOpenImageModal} />

        {/* 11. Detalhes */}
        <Details onOpenImageModal={handleOpenImageModal} />

        {/* 12. FAQ */}
        <FAQ />

        {/* 13. Formulário de Consulta de Disponibilidade */}
        <ContactSection initialService={selectedService} />

        {/* 14. CTA Final */}
        <FinalCTA onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* 15. Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Floating Discreet Mobile CTA */}
      <MobileStickyCTA onOpenInquiry={() => handleOpenInquiry()} />

      {/* Consultation Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialService={selectedService}
      />

      {/* High-Resolution Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        data={activeLightboxData}
        onPrev={handlePrevPortfolioItem}
        onNext={handleNextPortfolioItem}
        hasPrev={activePortfolioIndex !== null && activePortfolioIndex > 0}
        hasNext={
          activePortfolioIndex !== null &&
          activePortfolioIndex < portfolioItems.length - 1
        }
      />
    </div>
  );
}
