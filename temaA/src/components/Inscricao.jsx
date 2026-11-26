import { Check, ArrowUpRight, Bell } from 'lucide-react';
import { evento } from '../data/evento';

export default function Inscricao({ onAbrirModal }) {
  return (
    <section
      id="ingressos"
      className="bg-[#F4F1EA] text-[#111111] border-b border-[#111111] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#111111] mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E63946] font-semibold block mb-3">
              04 / Ingressos & Inscrição
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tight">
              Garanta Seu Acesso
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="font-mono text-xs text-[#111111]/75 max-w-xs">
              Renda dos ingressos solidários revertida integralmente ao projeto de música da escola municipal.
            </p>
            <button
              type="button"
              onClick={() => onAbrirModal('lembrete')}
              className="inline-flex items-center gap-2 border border-[#111111] px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#111111] hover:text-[#F4F1EA] transition-colors duration-150 cursor-pointer shrink-0"
            >
              <Bell className="w-4 h-4" aria-hidden="true" />
              Me lembre do evento
            </button>
          </div>
        </div>

        {/* Cards Comparativos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-[#111111] divide-y lg:divide-y-0 lg:divide-x divide-[#111111]">
          {evento.ingressos.map((ingresso) => (
            <article
              key={ingresso.id}
              className={`p-6 sm:p-8 flex flex-col justify-between gap-8 ${
                ingresso.destaque ? 'bg-[#111111] text-[#F4F1EA]' : 'bg-[#F4F1EA] text-[#111111]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 border ${
                      ingresso.destaque
                        ? 'border-[#E63946] text-[#E63946]'
                        : 'border-[#111111] text-[#111111]'
                    }`}
                  >
                    {ingresso.lote}
                  </span>
                  {ingresso.destaque && (
                    <span className="font-mono text-[11px] uppercase tracking-widest bg-[#E63946] text-[#F4F1EA] px-2.5 py-1 font-bold">
                      Mais Escolhido
                    </span>
                  )}
                </div>

                <h3 className="font-display text-3xl uppercase tracking-tight mb-2">
                  {ingresso.tipo}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-5xl sm:text-6xl leading-none">
                    {ingresso.valor}
                  </span>
                  <span
                    className={`font-mono text-xs uppercase ${
                      ingresso.destaque ? 'text-[#9E9A90]' : 'text-[#111111]/60'
                    }`}
                  >
                    / por pessoa
                  </span>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    ingresso.destaque ? 'text-[#F4F1EA]/80' : 'text-[#111111]/80'
                  }`}
                >
                  {ingresso.descricao}
                </p>

                <ul className="space-y-3 border-t pt-5 border-current/15">
                  {ingresso.beneficios.map((beneficio) => (
                    <li key={beneficio} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onAbrirModal('ingresso', ingresso.id)}
                className={`w-full inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider px-6 py-4 border transition-colors duration-150 cursor-pointer ${
                  ingresso.destaque
                    ? 'bg-[#E63946] text-[#F4F1EA] border-[#E63946] hover:bg-[#F4F1EA] hover:text-[#111111] hover:border-[#F4F1EA]'
                    : 'bg-[#111111] text-[#F4F1EA] border-[#111111] hover:bg-[#E63946] hover:border-[#E63946]'
                }`}
              >
                Garantir Ingresso
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
