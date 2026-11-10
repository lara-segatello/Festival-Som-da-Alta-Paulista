import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Programacao from "./components/Programacao";
import Atracoes from "./components/Atracoes";
import Inscricao from "./components/Inscricao";
import Rodape from "./components/Rodape";

function App() {
  return (
    <div className="bg-fundo min-h-screen text-slate-800 font-sans antialiased">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-white focus:p-4 focus:z-50 focus:border focus:text-destaque"> Pular para o conteúdo </a>
      <Cabecalho />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />
      </main>
      <Rodape />
    </div>
  )
}

export default App;
