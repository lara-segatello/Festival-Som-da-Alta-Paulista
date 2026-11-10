import { useState } from 'react';
import { evento } from '../data/evento';

function Inscricao() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [ingressoSelecionado, setIngressoSelecionado] = useState(evento.ingressos[0])
    const [quantidade, setQuantidade] = useState(1)
    const [erroNome, setErroNome] = useState('')
    const [enviado, setEnviado] = useState(false)

    function enviar(e) {
        e.preventDefault()


        if (nome.trim().length < 3) {
            setErroNome('O nome precisa ter pelo menos 3 letras.')
            setEnviado(false)
            return
        }

        setErroNome('')
        setEnviado(true)
    }


    const precoUnitario = parseFloat(ingressoSelecionado.valor.replace('R$', '').trim())
    const valorTotalCalculado = precoUnitario * quantidade

    if (enviado) {
        return (
            <section id="inscricao" className="bg-purple-900 text-white py-20 px-4 text-center scroll-mt-20">
                <div className="max-w-md mx-auto bg-primaria p-8 rounded-2xl shadow-xl border border-purple-400" role="status">
                    <span className="text-4xl mb-4 block">🎉</span>
                    <h2 className="text-2xl font-bold mb-4">Inscrição Confirmada!</h2>
                    <p className="text-purple-100 leading-relaxed">
                        Pronto, <strong>{nome}</strong>! Seu lugar no festival foi reservado.
                    </p>
                    <div className="mt-6 p-4 bg-purple-950/50 rounded-xl inline-block w-full text-left space-y-2">
                        <div>
                            <p className="text-xs uppercase text-purple-300 font-bold tracking-wider mb-0.5">Ingresso Reservado</p>
                            <p className="font-semibold text-white">{ingressoSelecionado.tipo} ({quantidade}x)</p>
                        </div>

                        <div className="pt-2 border-t border-purple-700/50 flex justify-between items-center">
                            <span className="text-xs uppercase text-purple-300 font-bold tracking-wider">Total do Pedido</span>
                            <span className="font-extrabold text-xl text-destaque">R$ {valorTotalCalculado.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-purple-300 pt-1">Enviamos os detalhes do seu passaporte para: <strong>{email}</strong>.</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="inscricao" className="bg-purple-900 text-white py-16 px-4 scroll-mt-20">
            <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2">Garanta o seu lugar</h2>
                <p className="text-purple-200 text-center text-sm mb-8">Preencha os dados abaixo para reservar sua entrada.</p>

                <form onSubmit={enviar} className="space-y-6 bg-primaria p-8 rounded-2xl shadow-xl border border-purple-500/30">
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Nome Completo
                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="mt-1 w-full bg-purple-950 text-white placeholder-purple-400 rounded-xl px-4 py-3 border border-purple-600 focus:outline-none focus:border-destaque transition-colors text-base"
                                placeholder="Seu nome completo"
                            />
                        </label>

                        {erroNome && <p className="text-orange-400 text-xs font-bold mt-1.5">⚠️ {erroNome}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            E-mail
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 w-full bg-purple-950 text-white placeholder-purple-400 rounded-xl px-4 py-3 border border-purple-600 focus:outline-none focus:border-destaque transition-colors text-base"
                                placeholder="seu.email@exemplo.com"
                            />
                        </label>
                    </div>

                    <div className="grid grid-cols-3 gap-4">

                        <div className="col-span-2">
                            <label className="block text-sm font-semibold mb-2">
                                Tipo de Ingresso
                                <select
                                    value={ingressoSelecionado.tipo}
                                    onChange={(e) => {
                                        const objetoIngresso = evento.ingressos.find(ing => ing.tipo === e.target.value);
                                        setIngressoSelecionado(objetoIngresso);
                                    }}
                                    className="mt-1 w-full bg-purple-950 text-white rounded-xl px-4 py-3 border border-purple-600 focus:outline-none focus:border-destaque transition-colors text-base cursor-pointer"
                                >
                                    {evento.ingressos.map((ing) => (
                                        <option key={ing.tipo} value={ing.tipo}>
                                            {ing.tipo} — {ing.valor}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>


                        <div className="col-span-1">
                            <label className="block text-sm font-semibold mb-2">
                                Qtd.
                                <input
                                    type="number"
                                    min="1"
                                    required
                                    value={quantidade}
                                    onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="mt-1 w-full bg-purple-950 text-white rounded-xl px-3 py-3 border border-purple-600 focus:outline-none focus:border-destaque transition-colors text-base font-medium text-center"
                                />
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-destaque hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-[0.98] min-h-[44px] cursor-pointer">
                        Realizar Inscrição
                    </button>
                </form>
            </div>
        </section>
    )
}
export default Inscricao;

