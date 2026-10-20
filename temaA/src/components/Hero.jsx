import { evento } from '../data/evento';

function Hero() {
    return (
        <section className="bg-gradient-to-b from-primaria to-purple-900 text-white px-4 py-20 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[40vh]">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none mb-6">
                    {evento.nome}
                </h1>
                <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mb-4">
                    {evento.slogan}
                </p>
                <p className="text-md sm:text-lg font-semibold bg-destaque px-4 py-1.5 rounded-full inline-block shadow-lg mb-8">
                    📅 {evento.data} · {evento.horario}
                </p>
                <p className="text-sm sm:text-base text-purple-100 mb-8">
                    📍 {evento.local}
                </p>
                <a
                    href="#inscricao"
                    className="bg-destaque hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transform transition active:scale-95 inline-block min-h-[44px]"
                >
                    Garantir Ingresso
                </a>
            </div>
        </section>
    )
}

export default Hero;