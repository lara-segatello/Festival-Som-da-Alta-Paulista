import { evento } from '../data/evento';

function Rodape() {
    return (
        <footer className='bg-slate-900 text-slate-400 text-center py-10 px-4 text-xs sm:text-sm border-t border-slate-800'>
            <div className="max-w-6xl mx-auto space-y-2">
                <p className="font-semibold text-slate-300">{evento.nome}</p>
                <p>📍 {evento.local}</p>
                <p className="text-slate-500 pt-2 border-t border-slate-800 max-w-xs mx-auto">
                    Evento fictício criado para fins didáticos.
                </p>
            </div>
        </footer>
    )
}

export default Rodape;