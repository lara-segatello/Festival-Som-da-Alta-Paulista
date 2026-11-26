import { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Atracoes from './components/Atracoes';
import Programacao from './components/Programacao';
import Inscricao from './components/Inscricao';
import InfoFaq from './components/InfoFaq';
import Rodape from './components/Rodape';
import ModalIngresso from './components/ModalIngresso';

function App() {
  const [modal, setModal] = useState({
    aberto: false,
    modo: 'ingresso',
    tipo: 'passaporte',
  });

  function abrirModal(modo = 'ingresso', tipo = 'passaporte') {
    setModal({ aberto: true, modo, tipo });
  }

  function fecharModal() {
    setModal((prev) => ({ ...prev, aberto: false }));
  }

  return (
    <div className="bg-[#111111] min-h-screen text-[#F4F1EA] font-sans antialiased overflow-x-hidden">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:bg-[#E63946] focus:text-[#F4F1EA] focus:px-4 focus:py-3 focus:z-50 focus:font-mono focus:text-xs focus:uppercase"
      >
        Pular para o conteúdo
      </a>

      <Cabecalho onAbrirModal={abrirModal} />

      <main id="conteudo">
        <Hero onAbrirModal={abrirModal} />
        <Sobre />
        <Atracoes />
        <Programacao />
        <Inscricao onAbrirModal={abrirModal} />
        <InfoFaq />
      </main>

      <Rodape />

      {modal.aberto && (
        <ModalIngresso
          key={`${modal.modo}-${modal.tipo}`}
          modoInicial={modal.modo}
          tipoInicial={modal.tipo}
          onFechar={fecharModal}
        />
      )}
    </div>
  );
}

export default App;
