import { useState } from 'react'
import { evento } from '../data/evento'

function Cabecalho() {

  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primaria text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-auto flex items-center justify-between">

          <span className="font-extrabold text-xl tracking-tight text-white">
            {evento.nome}
          </span>

          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden bg-purple-950 text-white font-bold px-4 py-2 rounded-xl border border-purple-600 focus:outline-none hover:text-destaque transition-all text-sm cursor-pointer"
          >
            {menuAberto ? 'Fechar X' : 'Menu ☰'}
          </button>
        </div>


        <nav className={`${menuAberto ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-sm font-semibold text-white/90 pt-2 md:pt-0">
            <li className="w-full md:w-auto text-center">
              <a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-destaque transition-colors py-2 block">
                Sobre
              </a>
            </li>
            <li className="w-full md:w-auto text-center">
              <a href="#programacao" onClick={() => setMenuAberto(false)} className="hover:text-destaque transition-colors py-2 block">
                Programação
              </a>
            </li>
            <li className="w-full md:w-auto text-center">
              <a href="#atracoes" onClick={() => setMenuAberto(false)} className="hover:text-destaque transition-colors py-2 block">
                Atrações
              </a>
            </li>
            <li className="w-full md:w-auto text-center">
              <a href="#inscricao" onClick={() => setMenuAberto(false)} className="hover:text-destaque transition-colors py-2 block">
                Inscrição
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho;
