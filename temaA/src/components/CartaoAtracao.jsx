import { Clock, MapPin } from 'lucide-react';

export default function CartaoAtracao({ atracao }) {
  return (
    <article className="group bg-[#111111] border border-[#2A2A2A] hover:border-[#E63946] transition-colors duration-150 flex flex-col justify-between">
      <div>
        {/* Foto em alto contraste P&B que ganha cor no hover */}
        <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#2A2A2A] bg-[#1A1A1A] relative">
          <img
            src={atracao.foto}
            alt={`${atracao.nome} — ${atracao.estilo}`}
            loading="lazy"
            className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-105 transition-all duration-150"
          />
          <div className="absolute top-3 left-3 bg-[#111111] border border-[#2A2A2A] px-2.5 py-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#F4F1EA]">
              {atracao.estilo}
            </span>
          </div>
          <div className="absolute bottom-3 right-3 bg-[#E63946] px-2.5 py-1">
            <span className="font-mono text-xs font-bold text-[#F4F1EA]">
              {atracao.horario}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-wider text-[#9E9A90] mb-2">
            <span>{atracao.dia}</span>
            <span>{atracao.cidade}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#F4F1EA] group-hover:text-[#E63946] transition-colors duration-150 mb-2">
            {atracao.nome}
          </h3>

          <p className="text-sm text-[#F4F1EA]/75 leading-relaxed">
            {atracao.descricao}
          </p>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-[#2A2A2A] flex items-center justify-between font-mono text-xs text-[#9E9A90]">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#E63946]" aria-hidden="true" />
          {atracao.palco}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[#F4F1EA]">
          <Clock className="w-3.5 h-3.5 text-[#E63946]" aria-hidden="true" />
          {atracao.horario}
        </span>
      </div>
    </article>
  );
}
