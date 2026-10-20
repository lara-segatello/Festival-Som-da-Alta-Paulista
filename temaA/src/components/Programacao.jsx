import { programacao } from '../data/evento';

function Programacao() {
    return (
        <section id="programacao" className="bg-purple-50 py-16 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-primaria text-center mb-12">Programação</h2>
                <div className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
                    <ul className="divide-y divide-purple-100">
                        {programacao.map((item, index) => (
                            <li key={index} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-purple-50/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <span className="bg-primaria text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider w-14 text-center">
                                        {item.dia}
                                    </span>
                                    <span className="text-base font-bold text-slate-700 font-mono">
                                        {item.horario}
                                    </span>
                                </div>
                                <p className="text-slate-600 font-medium sm:text-right flex-1 sm:max-w-xl">
                                    {item.atividade}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Programacao;