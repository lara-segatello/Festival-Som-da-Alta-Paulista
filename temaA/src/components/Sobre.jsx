import { evento } from '../data/evento';

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-[#F4F1EA] text-[#111111] border-b border-[#111111] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Manifesto / Texto */}
        <div className="lg:col-span-5 px-4 sm:px-6 lg:px-8 py-14 lg:py-20 lg:border-r border-[#111111] flex flex-col justify-between gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E63946] font-semibold block mb-4">
              01 / Sobre o Festival
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase leading-[0.95] tracking-tight mb-6">
              {evento.sobreTitulo}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#111111]/85 mb-4">
              {evento.sobre}
            </p>
            <p className="font-mono text-xs sm:text-sm leading-relaxed text-[#111111]/75 border-l-2 border-[#E63946] pl-4">
              {evento.manifesto}
            </p>
          </div>

          <div className="pt-6 border-t border-[#111111]/20 flex items-center justify-between font-mono text-xs uppercase tracking-wider">
            <span>Osvaldo Cruz / SP</span>
            <span className="text-[#E63946] font-semibold">Renda Solidária Escolar</span>
          </div>
        </div>

        {/* Grid Assimétrico de Números Grandes */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border-t lg:border-t-0 border-[#111111]">
          {evento.numeros.map((n, index) => (
            <div
              key={n.item}
              className={`p-8 sm:p-10 flex flex-col justify-between min-h-[200px] border-[#111111] ${
                index % 2 === 0 ? 'sm:border-r' : ''
              } ${index < 2 ? 'border-b' : index === 2 ? 'border-b sm:border-b-0' : ''}`}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/60">
                0{index + 1} — Indicador
              </span>

              <div className="my-4">
                <span className="font-display text-6xl sm:text-7xl leading-none tracking-tight text-[#111111] block">
                  {n.quantidade}
                </span>
              </div>

              <div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#111111]">
                  {n.item}
                </h3>
                <p className="text-sm text-[#111111]/70 mt-1">{n.detalhe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
