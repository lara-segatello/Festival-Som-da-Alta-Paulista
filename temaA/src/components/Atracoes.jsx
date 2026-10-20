import { atracoes } from '../data/evento';
import CartaoAtracao from './CartaoAtracao';

function Atracoes() {
    return (
        <section id="atracoes" className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-primaria text-center mb-12">Atrações Confirmadas</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {atracoes.map((atracao) => (
                    <CartaoAtracao
                        key={atracao.nome}
                        nome={atracao.nome}
                        estilo={atracao.estilo}
                        descricao={atracao.descricao}
                    />
                ))}
            </div>
        </section>
    )
}
export default Atracoes;