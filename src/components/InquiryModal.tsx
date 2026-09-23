import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, MapPin, Send, MessageCircle } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#171614]/85 backdrop-blur-sm transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#F4F0EA] text-[#171614] rounded-[2px] shadow-2xl p-6 sm:p-8 my-8 border border-[#171614]/10 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar formulário de consulta"
          className="absolute top-4 right-4 text-[#5F5952] hover:text-[#171614] p-2 rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#9A8066]/20 text-[#9A8066] flex items-center justify-center mx-auto">
              <Check size={24} />
            </div>
            <h3 className="font-serif text-3xl text-[#171614]">
              Mensagem enviada com carinho.
            </h3>
            <p className="text-sm sm:text-base font-sans text-[#5F5952] max-w-sm mx-auto leading-relaxed">
              Obrigado pelo contato, {name || 'casal'}. Lucas entrará em contato em breve para conversar sobre a sua data e os detalhes da celebração.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="btn-aura text-xs tracking-wider"
              >
                Voltar à página
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.24em] text-[#9A8066] uppercase font-semibold block mb-1">
                CONSULTA DE DISPONIBILIDADE
              </span>
              <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-[#171614] leading-tight">
                Vamos conversar sobre a sua data
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#5F5952] mt-1.5">
                Atendimento em São Paulo, Grande São Paulo e destinos selecionados.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-sans font-medium text-[#171614] mb-1 uppercase tracking-wider">
                  Nome do casal / Contato
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Marina & Felipe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#171614]/15 rounded-[2px] text-sm text-[#171614] placeholder:text-[#5F5952]/50 focus:outline-none focus:border-[#9A8066] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-medium text-[#171614] mb-1 uppercase tracking-wider">
                    WhatsApp ou E-mail
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="(11) 99999-9999"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#171614]/15 rounded-[2px] text-sm text-[#171614] placeholder:text-[#5F5952]/50 focus:outline-none focus:border-[#9A8066] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-[#171614] mb-1 uppercase tracking-wider flex items-center gap-1">
                    <Calendar size={13} className="text-[#9A8066]" />
                    <span>Data Prevista</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#171614]/15 rounded-[2px] text-sm text-[#171614] focus:outline-none focus:border-[#9A8066] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-medium text-[#171614] mb-1 uppercase tracking-wider flex items-center gap-1">
                    <MapPin size={13} className="text-[#9A8066]" />
                    <span>Local da Celebração</span>
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#171614]/15 rounded-[2px] text-sm text-[#171614] focus:outline-none focus:border-[#9A8066] transition-colors"
                  >
                    <option value="São Paulo — Capital">São Paulo — Capital</option>
                    <option value="Grande São Paulo">Grande São Paulo</option>
                    <option value="Outro destino">Outro destino</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans font-medium text-[#171614] mb-1 uppercase tracking-wider">
                    Serviço de Interesse
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#171614]/15 rounded-[2px] text-sm text-[#171614] focus:outline-none focus:border-[#9A8066] transition-colors"
                  >
                    <option value="Fotografia de Casamento">Fotografia de Casamento</option>
                    <option value="Pré-Wedding">Pré-Wedding</option>
                    <option value="Elopement">Elopement</option>
                    <option value="Evento Especial">Evento Especial</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-medium text-[#171614] mb-1 uppercase tracking-wider">
                  Conte um pouco sobre o casamento
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Horário previsto, local da cerimônia, estilo ou o que sonham para o dia..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#171614]/15 rounded-[2px] text-sm text-[#171614] placeholder:text-[#5F5952]/50 focus:outline-none focus:border-[#9A8066] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="btn-aura w-full sm:flex-1 py-3 text-xs tracking-wider inline-flex items-center justify-center gap-2"
                >
                  <span>CONSULTAR DISPONIBILIDADE</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-4 py-3 border border-[#171614]/20 hover:border-[#171614] rounded-[2px] text-xs font-sans font-medium text-[#171614] hover:bg-white transition-colors inline-flex items-center justify-center gap-2 min-h-[46px]"
                >
                  <MessageCircle size={16} className="text-emerald-700" />
                  <span>WhatsApp direto</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#5F5952] pt-1">
                Sem compromisso. Respondemos sempre com atenção e discrição.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
