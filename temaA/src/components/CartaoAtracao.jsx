
function CartaoAtracao({ nome, estilo, descricao }) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <span className="inline-block bg-orange-100 text-destaque text-xs font-bold px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">
          {estilo}
        </span>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{nome}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{descricao}</p>
      </div>
    </article>
  )
}
export default CartaoAtracao;