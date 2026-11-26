import { useState } from 'react';
import { Plus, Minus, MapPin, Navigation, Clock } from 'lucide-react';
import { evento } from '../data/evento';

export default function InfoFaq() {
  const [indiceAberto, setIndiceAberto] = useState(0);

  function alternarItem(idx) {
    setIndiceAberto((atual) => (atual === idx ? -1 : idx));
  }

  return (
    <section
      id="info-faq"
      className="bg-[#111111] text-[#F4F1EA] border-b border-[#2A2A2A] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Coluna Esquerda: Mapa / Localização */}
        <div className="lg:col-span-5 px-4 sm:px-6 lg:px-8 py-16 lg:py-20 lg:border-r border-[#2A2A2A] flex flex-col justify-between gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E63946] font-semibold block mb-3">
              05 / Informações Práticas
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase leading-[0.95] tracking-tight mb-6">
              Como Chegar & Dúvidas
            </h2>
            <p className="text-sm sm:text-base text-[#F4F1EA]/80 leading-relaxed mb-8">
              O festival acontece ao ar livre no Parque das Águas, em Osvaldo Cruz/SP. Estrutura completa com dois palcos, acessibilidade, hidratação e estacionamento gratuito.
            </p>

            {/* Cartão Técnico de Localização */}
            <div className="border border-[#2A2A2A] bg-[#161616] p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3 font-mono text-xs text-[#9E9A90]">
                <span>COORDENADAS</span>
                <span className="text-[#F4F1EA]">{evento.coordenadas}</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E63946] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <span className="block font-mono text-xs uppercase text-[#9E9A90]">
                      Endereço
                    </span>
                    <span className="text-sm font-medium text-[#F4F1EA]">
                      {evento.local}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#E63946] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <span className="block font-mono text-xs uppercase text-[#9E9A90]">
                      Abertura e Encerramento
                    </span>
                    <span className="text-sm font-medium text-[#F4F1EA]">
                      {evento.dataCompleta}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={evento.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E63946] text-[#F4F1EA] font-mono text-xs font-semibold uppercase tracking-wider px-5 py-3.5 hover:bg-[#F4F1EA] hover:text-[#111111] transition-colors duration-150"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Abrir Rota no Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Accordion FAQ */}
        <div className="lg:col-span-7 px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-t lg:border-t-0 border-[#2A2A2A]">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E9A90]">
              Perguntas Frequentes ({evento.faq.length})
            </span>
          </div>

          <div className="border border-[#2A2A2A] divide-y divide-[#2A2A2A]">
            {evento.faq.map((item, idx) => {
              const aberto = indiceAberto === idx;
              const painelId = `faq-painel-${idx}`;
              const botaoId = `faq-botao-${idx}`;

              return (
                <div key={item.pergunta} className="bg-[#111111]">
                  <h3>
                    <button
                      id={botaoId}
                      type="button"
                      aria-expanded={aberto}
                      aria-controls={painelId}
                      onClick={() => alternarItem(idx)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-[#161616] transition-colors duration-150 cursor-pointer"
                    >
                      <span className="font-medium text-base sm:text-lg text-[#F4F1EA]">
                        {item.pergunta}
                      </span>
                      <span
                        className={`w-8 h-8 border flex items-center justify-center shrink-0 transition-colors duration-150 ${
                          aberto
                            ? 'bg-[#E63946] border-[#E63946] text-[#F4F1EA]'
                            : 'border-[#2A2A2A] text-[#F4F1EA]'
                        }`}
                      >
                        {aberto ? (
                          <Minus className="w-4 h-4" aria-hidden="true" />
                        ) : (
                          <Plus className="w-4 h-4" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>

                  {aberto && (
                    <div
                      id={painelId}
                      role="region"
                      aria-labelledby={botaoId}
                      className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#F4F1EA]/80 leading-relaxed border-t border-[#2A2A2A]/60 pt-4"
                    >
                      {item.resposta}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
