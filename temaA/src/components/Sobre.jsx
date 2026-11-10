
import { useState } from 'react';
import { evento } from '../data/evento';

// Busca automaticamente as imagens dentro de src/assets
const arquivosAssets = import.meta.glob('../assets/*', {
    eager: true,
    import: 'default'
});

// Localiza o arquivo pelo início do nome
const localizarImagem = (prefixo) => {
    const arquivo = Object.entries(arquivosAssets).find(([caminho]) =>
        caminho.split('/').pop().startsWith(prefixo)
    );

    return arquivo ? arquivo[1] : '';
};

// Imagens do carrossel
const imagensCarrossel = [
    {
        url: localizarImagem('image_4869'),
        alt: 'Coral Jovem OC: estudantes cantando clássicos do pop no palco principal.'
    },
    {
        url: localizarImagem('5c858e25-2858-4b68-b8fe-f15b41bbebea'),
        alt: 'Multidão assistindo ao show de frente para o palco principal.'
    },
    {
        url: localizarImagem('download'),
        alt: 'Pessoas aproveitando o show perto da grade.'
    },
    {
        url: localizarImagem('image_ea12a019'),
        alt: 'População celebrando o festival sob luzes coloridas.'
    }
];

function Sobre() {
    const [faqAtivo, setFaqAtivo] = useState(null);
    const [slideAtual, setSlideAtual] = useState(0);

    const alternarFaq = (index) => {
        setFaqAtivo(faqAtivo === index ? null : index);
    };

    const proximoSlide = () => {
        setSlideAtual((prev) =>
            (prev + 1) % imagensCarrossel.length
        );
    };

    const slideAnterior = () => {
        setSlideAtual((prev) =>
            (prev - 1 + imagensCarrossel.length) % imagensCarrossel.length
        );
    };

    return (
        <section
            id="sobre"
            className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20 space-y-16"
        >
            {/* Carrossel e apresentação do festival */}
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Carrossel */}
                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-md group bg-slate-200">

                    {imagensCarrossel.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-500 ${index === slideAtual
                                    ? 'opacity-100 z-10'
                                    : 'opacity-0 z-0 pointer-events-none'
                                }`}
                        >
                            {img.url ? (
                                <img
                                    src={img.url}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-600">
                                    Imagem não encontrada: {img.alt}
                                </div>
                            )}

                            {/* Legenda */}
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-14">
                                <p className="text-white text-sm md:text-base font-medium">
                                    {img.alt}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Botão anterior */}
                    <button
                        type="button"
                        onClick={slideAnterior}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-slate-800 p-3 rounded-full shadow-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
                        aria-label="Slide anterior"
                    >
                        ❮
                    </button>

                    {/* Botão próximo */}
                    <button
                        type="button"
                        onClick={proximoSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-slate-800 p-3 rounded-full shadow-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
                        aria-label="Próximo slide"
                    >
                        ❯
                    </button>

                    {/* Indicadores */}
                    <div className="absolute bottom-4 right-5 z-30 flex gap-2">
                        {imagensCarrossel.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setSlideAtual(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${index === slideAtual
                                        ? 'bg-white scale-125'
                                        : 'bg-white/50 hover:bg-white'
                                    }`}
                                aria-label={`Ir para slide ${index + 1}`}
                                aria-current={index === slideAtual ? 'true' : undefined}
                            />
                        ))}
                    </div>
                </div>

                {/* Explicação do festival */}
                <div className="space-y-5">
                    <h2 className="text-3xl font-bold text-primaria">
                        O Festival
                    </h2>

                    <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                        {evento.sobre}
                    </p>
                </div>

                {/* Cards abaixo da explicação */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {evento.numeros.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 text-center hover:shadow-md transition-shadow"
                        >
                            <span className="block text-4xl font-extrabold text-destaque mb-2">
                                {item.quantidade}
                            </span>

                            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                                {item.item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Perguntas frequentes */}
            <div className="max-w-3xl mx-auto pt-8 border-t border-purple-100">
                <h3 className="text-2xl font-bold text-primaria text-center mb-6">
                    Perguntas Frequentes
                </h3>

                <div className="space-y-3">
                    {evento.faq.map((item, index) => {
                        const estaAberto = faqAtivo === index;
                        const idResposta = `faq-resposta-${index}`;

                        return (
                            <div
                                key={index}
                                className="bg-white border border-purple-100 rounded-2xl overflow-hidden shadow-sm"
                            >
                                <h4>
                                    <button
                                        type="button"
                                        onClick={() => alternarFaq(index)}
                                        aria-expanded={estaAberto}
                                        aria-controls={idResposta}
                                        className="w-full text-left p-5 bg-slate-50/50 hover:bg-slate-50 flex justify-between items-center font-bold text-slate-700 transition-colors"
                                    >
                                        <span className="pr-4">
                                            {item.pergunta}
                                        </span>

                                        <span
                                            className="text-destaque text-xl font-extrabold"
                                            aria-hidden="true"
                                        >
                                            {estaAberto ? '−' : '+'}
                                        </span>
                                    </button>
                                </h4>

                                <div
                                    id={idResposta}
                                    hidden={!estaAberto}
                                    className="p-5 bg-white border-t border-slate-100 text-slate-600 text-sm leading-relaxed"
                                >
                                    {item.resposta}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Sobre;
