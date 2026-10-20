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
      <Cabecalho />
      <main>
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
