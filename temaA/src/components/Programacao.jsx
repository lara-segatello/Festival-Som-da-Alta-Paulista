import { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { programacao } from '../data/evento';

const DIAS = Object.keys(programacao);

export default function Programacao() {
  const [diaAtivo, setDiaAtivo] = useState(DIAS[0]);
  const itens = programacao[diaAtivo] || [];

  return (
    <section
      id="programacao"
      className="bg-[#111111] text-[#F4F1EA] border-b border-[#2A2A2A] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Cabeçalho + Abas */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E63946] font-semibold block mb-3">
              03 / Cronograma
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tight">
              Programação Detalhada
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Selecionar dia da programação"
            className="inline-flex border border-[#2A2A2A]"
          >
            {DIAS.map((dia) => {
              const ativo = diaAtivo === dia;
              return (
                <button
                  key={dia}
                  type="button"
                  role="tab"
                  aria-selected={ativo}
                  onClick={() => setDiaAtivo(dia)}
                  className={`font-mono text-xs sm:text-sm uppercase tracking-wider px-5 py-3 transition-colors duration-150 cursor-pointer ${
                    ativo
                      ? 'bg-[#F4F1EA] text-[#111111] font-bold'
                      : 'bg-[#111111] text-[#F4F1EA]/75 hover:text-[#F4F1EA] hover:bg-[#1A1A1A]'
                  }`}
                >
                  {dia}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lista Tabular Suíça */}
        <div
          role="tabpanel"
          aria-label={`Programação de ${diaAtivo}`}
          className="border border-[#2A2A2A] divide-y divide-[#2A2A2A]"
        >
          {itens.map((item, idx) => {
            const ehShow = item.tipo === 'Show';
            return (
              <div
                key={`${item.horario}-${idx}`}
                className="grid grid-cols-1 md:grid-cols-12 items-start md:items-center gap-3 md:gap-6 p-5 sm:p-6 hover:bg-[#161616] transition-colors duration-150"
              >
                {/* Horário */}
                <div className="md:col-span-2 flex items-center gap-2 font-mono text-lg sm:text-xl font-bold text-[#F4F1EA]">
                  <Clock className="w-4 h-4 text-[#E63946] shrink-0" aria-hidden="true" />
                  <span>{item.horario}</span>
                </div>

                {/* Tipo Badge */}
                <div className="md:col-span-2">
                  <span
                    className={`inline-block font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 border ${
                      ehShow
                        ? 'bg-[#E63946] text-[#F4F1EA] border-[#E63946] font-semibold'
                        : 'bg-transparent text-[#9E9A90] border-[#2A2A2A]'
                    }`}
                  >
                    {item.tipo}
                  </span>
                </div>

                {/* Atividade */}
                <div className="md:col-span-5">
                  <h3 className="text-base sm:text-lg font-semibold text-[#F4F1EA]">
                    {item.atividade}
                  </h3>
                </div>

                {/* Palco / Local */}
                <div className="md:col-span-3 md:text-right font-mono text-xs uppercase tracking-wider text-[#9E9A90] flex md:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E63946] shrink-0" aria-hidden="true" />
                  <span>{item.local}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
