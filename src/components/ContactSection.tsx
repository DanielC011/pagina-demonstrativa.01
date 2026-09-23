import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Check, ArrowRight, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Fotografia de Casamento',
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('São Paulo — Capital');
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá, Lucas! Gostaria de consultar a disponibilidade para ${service} em ${date || 'data a definir'}, na região de ${location}. Meu nome é ${name || 'Casal'}.`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 lg:py-36 bg-[#E7DED3] text-[#171614] border-t border-[#171614]/10"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Eyebrow, Título e Texto Introdutório */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="mb-4">
            <span className="text-[0.6875rem] sm:text-xs font-sans tracking-[0.28em] text-[#9A8066] uppercase font-semibold">
              CONTATO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#171614] leading-[1.12] mb-5 text-balance">
            Vamos conversar sobre a sua data.
          </h2>
          <p className="text-[#5F5952] font-sans text-base sm:text-lg leading-relaxed max-w-xl mx-auto text-balance">
            Conte um pouco sobre o casamento e verificamos a disponibilidade da agenda. Atendimento em São Paulo, Grande São Paulo e destinos.
          </p>
        </div>

        {/* Formulário Container - Altura dinâmica, sem scroll interno, sem 100vh */}
        <div className="bg-[#F4F0EA] rounded-[2px] p-6 sm:p-10 lg:p-12 border border-[#171614]/10 shadow-[0_8px_30px_rgba(23,22,20,0.04)]">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#9A8066]/20 text-[#9A8066] flex items-center justify-center mx-auto">
                <Check size={28} />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#171614]">
                Mensagem enviada com carinho.
              </h3>
              <p className="text-sm sm:text-base font-sans text-[#5F5952] max-w-md mx-auto leading-relaxed">
                Obrigado pelo contato, {name || 'casal'}. Lucas entrará em contato em breve para conversar sobre a sua data e os detalhes da celebração.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-aura text-xs tracking-wider"
                >
                  Enviar outra mensagem
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-3 border border-[#171614]/20 hover:border-[#171614] rounded-[2px] text-xs font-sans font-medium text-[#171614] hover:bg-white transition-colors inline-flex items-center gap-2 min-h-[46px]"
                >
                  <MessageCircle size={16} className="text-emerald-700" />
                  <span>Falar agora no WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NOME DO CASAL / CONTATO */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-sans font-medium text-[#171614] mb-2 uppercase tracking-wider"
                >
                  NOME DO CASAL / CONTATO
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Marina & Felipe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#171614]/15 rounded-[2px] text-sm sm:text-base text-[#171614] placeholder:text-[#5F5952]/40 focus:outline-none focus:border-[#9A8066] transition-colors"
                />
              </div>

              {/* WHATSAPP & DATA PREVISTA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-whatsapp"
                    className="block text-xs font-sans font-medium text-[#171614] mb-2 uppercase tracking-wider"
                  >
                    WHATSAPP
                  </label>
                  <input
                    id="contact-whatsapp"
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#171614]/15 rounded-[2px] text-sm sm:text-base text-[#171614] placeholder:text-[#5F5952]/40 focus:outline-none focus:border-[#9A8066] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-date"
                    className="block text-xs font-sans font-medium text-[#171614] mb-2 uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <Calendar size={14} className="text-[#9A8066]" />
                    <span>DATA PREVISTA</span>
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#171614]/15 rounded-[2px] text-sm sm:text-base text-[#171614] focus:outline-none focus:border-[#9A8066] transition-colors min-h-[48px]"
                  />
                </div>
              </div>

              {/* LOCAL DA CELEBRAÇÃO & SERVIÇO DE INTERESSE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-location"
                    className="block text-xs font-sans font-medium text-[#171614] mb-2 uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <MapPin size={14} className="text-[#9A8066]" />
                    <span>LOCAL DA CELEBRAÇÃO</span>
                  </label>
                  <div className="relative">
                    <select
                      id="contact-location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#171614]/15 rounded-[2px] text-sm sm:text-base text-[#171614] focus:outline-none focus:border-[#9A8066] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="São Paulo — Capital">São Paulo — Capital</option>
                      <option value="Grande São Paulo">Grande São Paulo</option>
                      <option value="Outro destino">Outro destino</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#5F5952]">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-sans font-medium text-[#171614] mb-2 uppercase tracking-wider"
                  >
                    SERVIÇO DE INTERESSE
                  </label>
                  <div className="relative">
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#171614]/15 rounded-[2px] text-sm sm:text-base text-[#171614] focus:outline-none focus:border-[#9A8066] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Fotografia de Casamento">Fotografia de Casamento</option>
                      <option value="Pré-Wedding">Pré-Wedding</option>
                      <option value="Elopement">Elopement</option>
                      <option value="Evento Especial">Evento Especial</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#5F5952]">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTE UM POUCO SOBRE O CASAMENTO */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-sans font-medium text-[#171614] mb-2 uppercase tracking-wider"
                >
                  CONTE UM POUCO SOBRE O CASAMENTO
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Horário previsto, local da cerimônia, estilo ou o que sonham para o dia..."
                  className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#171614]/15 rounded-[2px] text-sm sm:text-base text-[#171614] placeholder:text-[#5F5952]/40 focus:outline-none focus:border-[#9A8066] transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* AÇÕES: 1. CONSULTAR DISPONIBILIDADE -> | 2. WhatsApp direto */}
              <div className="pt-3 space-y-4">
                {/* 1. Botão Principal com maior destaque */}
                <button
                  type="submit"
                  className="btn-aura w-full min-h-[52px] text-xs sm:text-sm tracking-[0.16em] inline-flex items-center justify-center gap-2 group shadow-md"
                >
                  <span>CONSULTAR DISPONIBILIDADE</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* 2. Botão Secundário: WhatsApp direto abaixo */}
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full min-h-[48px] px-5 py-3 border border-[#171614]/20 hover:border-[#171614] rounded-[2px] text-xs sm:text-sm font-sans font-medium text-[#171614] hover:bg-white transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} className="text-emerald-700" />
                  <span>WhatsApp direto</span>
                </button>
              </div>

              <p className="text-[11px] sm:text-xs text-center text-[#5F5952] pt-2">
                Disponibilidade consultada de acordo com a data e o local do evento. Sem compromisso.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
