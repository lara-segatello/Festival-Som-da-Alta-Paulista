import { useState } from 'react'; 
import { evento } from '../data/evento';

function Sobre() {
    
    const [faqAtivo, setFaqAtivo] = useState(null);

    const alternarFaq = (index) => {
        setFaqAtivo(faqAtivo === index ? null : index);
    };

    return (
        <section id="sobre" className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20 space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-primaria mb-6">O Festival</h2>
                    <p className="text-slate-700 leading-relaxed text-base">
                        {evento.sobre}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-6">
                    {evento.numeros.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 text-center md:text-left">
                            <span className="block text-4xl font-extrabold text-destaque mb-1">
                                {item.quantidade}
                            </span>
                            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                                {item.item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="max-w-3xl mx-auto pt-8 border-t border-purple-100">
                <h3 className="text-2xl font-bold text-primaria text-center mb-6">Perguntas Frequentes</h3>
                <div className="space-y-3">
                    {evento.faq.map((item, index) => (
                        <div key={index} className="bg-white border border-purple-100 rounded-2xl overflow-hidden shadow-2xs">
                            <button
                                onClick={() => alternarFaq(index)}
                                className="w-full text-left p-5 bg-slate-50/50 hover:bg-slate-50 flex justify-between items-center font-bold text-slate-700 transition-colors focus:outline-none cursor-pointer"
                            >
                                <span className="pr-4">{item.pergunta}</span>
                                <span className="text-destaque text-xl font-extrabold">
                                    {faqAtivo === index ? '−' : '+'}
                                </span>
                            </button>
                            {faqAtivo === index && (
                                <div className="p-5 bg-white border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
                                    {item.resposta}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sobre;
