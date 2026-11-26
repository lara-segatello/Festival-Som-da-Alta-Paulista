import { useState } from 'react';
import { atracoes } from '../data/evento';
import CartaoAtracao from './CartaoAtracao';

const FILTROS = ['Todos', 'Sexta • 13/03', 'Sábado • 14/03'];

export default function Atracoes() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  const atracoesFiltradas =
    filtroAtivo === 'Todos'
      ? atracoes
      : atracoes.filter((item) => item.dia === filtroAtivo);

  return (
    <section
      id="lineup"
      className="bg-[#111111] text-[#F4F1EA] border-b border-[#2A2A2A] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Cabeçalho e Filtros */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#2A2A2A] mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E63946] font-semibold block mb-3">
              02 / Line-up
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tight">
              Atrações Confirmadas
            </h2>
          </div>

          <div
            role="group"
            aria-label="Filtrar atrações por dia"
            className="flex flex-wrap gap-2"
          >
            {FILTROS.map((filtro) => {
              const ativo = filtroAtivo === filtro;
              return (
                <button
                  key={filtro}
                  type="button"
                  onClick={() => setFiltroAtivo(filtro)}
                  aria-pressed={ativo}
                  className={`font-mono text-xs uppercase tracking-wider px-4 py-2.5 border transition-colors duration-150 cursor-pointer ${
                    ativo
                      ? 'bg-[#E63946] text-[#F4F1EA] border-[#E63946]'
                      : 'bg-transparent text-[#F4F1EA]/80 border-[#2A2A2A] hover:border-[#F4F1EA] hover:text-[#F4F1EA]'
                  }`}
                >
                  {filtro}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de Artistas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {atracoesFiltradas.map((atracao) => (
            <CartaoAtracao key={atracao.id} atracao={atracao} />
          ))}
        </div>
      </div>
    </section>
  );
}
