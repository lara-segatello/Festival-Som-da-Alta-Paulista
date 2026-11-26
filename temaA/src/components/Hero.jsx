import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, ArrowUpRight, Bell } from 'lucide-react';
import { evento } from '../data/evento';

function calcularRestante(alvoIso) {
  const diferenca = new Date(alvoIso).getTime() - Date.now();
  if (diferenca <= 0) {
    return { dias: '00', horas: '00', minutos: '00', segundos: '00' };
  }
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  return {
    dias: String(dias).padStart(2, '0'),
    horas: String(horas).padStart(2, '0'),
    minutos: String(minutos).padStart(2, '0'),
    segundos: String(segundos).padStart(2, '0'),
  };
}

export default function Hero({ onAbrirModal }) {
  const [tempo, setTempo] = useState(() => calcularRestante(evento.dataIsoInicio));

  useEffect(() => {
    const timer = setInterval(() => {
      setTempo(calcularRestante(evento.dataIsoInicio));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const unidades = [
    { valor: tempo.dias, label: 'Dias' },
    { valor: tempo.horas, label: 'Horas' },
    { valor: tempo.minutos, label: 'Min' },
    { valor: tempo.segundos, label: 'Seg' },
  ];

  return (
    <section id="topo" className="bg-[#111111] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Coluna Esquerda: Editorial & Chamada */}
        <div className="lg:col-span-7 px-4 sm:px-6 lg:px-8 py-12 lg:py-16 lg:border-r border-[#2A2A2A] flex flex-col justify-between gap-10">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#2A2A2A] px-3 py-1.5 mb-8">
              <span className="w-2 h-2 bg-[#E63946]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#F4F1EA]">
                {evento.edicao}
              </span>
            </div>

            <h1 className="font-display text-[clamp(3rem,8.5vw,6.25rem)] leading-[0.9] tracking-tight uppercase text-[#F4F1EA] break-words mb-6">
              Festival Som da Alta Paulista
            </h1>

            <p className="text-lg sm:text-xl text-[#F4F1EA]/85 max-w-xl leading-relaxed">
              {evento.slogan}
            </p>
          </div>

          <div className="space-y-8">
            {/* Bloco Monoespaçado de Data e Local */}
            <div className="grid grid-cols-1 sm:grid-cols-2 border border-[#2A2A2A] divide-y sm:divide-y-0 sm:divide-x divide-[#2A2A2A]">
              <div className="p-4 flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-widest text-[#9E9A90]">
                    Data & Horário
                  </span>
                  <span className="font-mono text-sm text-[#F4F1EA] block mt-1">
                    {evento.dataCompleta}
                  </span>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-widest text-[#9E9A90]">
                    Localização
                  </span>
                  <span className="font-mono text-sm text-[#F4F1EA] block mt-1">
                    {evento.local}
                  </span>
                </div>
              </div>
            </div>

            {/* Botões Retos de Ação */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onAbrirModal('ingresso')}
                className="inline-flex items-center justify-center gap-2 bg-[#E63946] text-[#F4F1EA] font-mono text-sm font-semibold uppercase tracking-wider px-7 py-4 border border-[#E63946] hover:bg-[#F4F1EA] hover:text-[#111111] hover:border-[#F4F1EA] transition-colors duration-150 cursor-pointer min-h-[48px]"
              >
                Garantir Ingresso
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onAbrirModal('lembrete')}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#F4F1EA] font-mono text-sm font-semibold uppercase tracking-wider px-7 py-4 border border-[#F4F1EA] hover:bg-[#F4F1EA] hover:text-[#111111] transition-colors duration-150 cursor-pointer min-h-[48px]"
              >
                <Bell className="w-4 h-4" aria-hidden="true" />
                Me lembre do evento
              </button>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Countdown + Cartaz Editorial */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-[#2A2A2A] border-t lg:border-t-0 border-[#2A2A2A]">
          {/* Contador Regressivo */}
          <div className="p-6 sm:p-8 bg-[#161616]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E9A90] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E63946]" aria-hidden="true" />
                Contagem Regressiva
              </span>
              <span className="font-mono text-xs text-[#E63946]">
                13.03.2027
              </span>
            </div>

            <div className="grid grid-cols-4 border border-[#2A2A2A] divide-x divide-[#2A2A2A]">
              {unidades.map((u) => (
                <div key={u.label} className="p-3 sm:p-4 text-center bg-[#111111]">
                  <span className="block font-display text-3xl sm:text-4xl text-[#F4F1EA] leading-none tabular-nums">
                    {u.valor}
                  </span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-[#9E9A90] mt-2">
                    {u.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Espaço Visual Estilizado para Cartaz / Identidade */}
          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-[#111111]">
            <div className="border border-[#2A2A2A] p-4 bg-[#F4F1EA] text-[#111111] relative">
              <div className="flex items-center justify-between border-b border-[#111111] pb-2 mb-3 font-mono text-[11px] uppercase tracking-widest">
                <span>CARTAZ OFICIAL / ED. 01</span>
                <span>{evento.coordenadas}</span>
              </div>

              <div className="aspect-[16/10] w-full overflow-hidden border border-[#111111] bg-[#111111]">
                <img
                  src={evento.cartazImagem}
                  alt="Identidade visual do Festival Som da Alta Paulista"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-150"
                />
              </div>

              <div className="mt-3 pt-3 border-t border-[#111111] flex items-center justify-between gap-2">
                <span className="font-display text-xl uppercase tracking-tight">
                  02 PALCOS • 12 BANDAS
                </span>
                <span className="bg-[#E63946] text-[#F4F1EA] font-mono text-[11px] font-bold uppercase px-2 py-1">
                  ENTRADA ACESSÍVEL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
