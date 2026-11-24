
import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "Bandas", valor: 4 },
  { rotulo: "Palcos", valor: 2 },
  { rotulo: "Público", valor: 4000 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const maior = Math.max(...dados.map((d) => d.valor));

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220;
      const y = 20 + i * 50;

      // 1. Cor principal do festival
      ctx.fillStyle = "#0d9488";

      // 2. Desenha a barra
      ctx.fillRect(110, y, largura, 25);

      // 3. Escreve o rótulo
      ctx.fillStyle = "#0f172a";
      ctx.font = "14px sans-serif";
      ctx.fillText(item.rotulo, 10, y + 18);

      // 4. Escreve o valor depois da barra
      ctx.fillText(
        item.valor.toLocaleString("pt-BR"),
        110 + largura + 8,
        y + 18
      );
    });
  }, []);

  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold text-destaque">
        Números do Festival
      </h2>

      <p className="mt-2 text-slate-600">
        Conheça um pouco da estrutura do Som da Alta Paulista.
      </p>

      <canvas
        ref={canvasRef}
        width={380}
        height={170}
        role="img"
        aria-label="Gráfico com os números do festival: 12 bandas, 2 palcos e público esperado de 4 mil pessoas."
        className="mt-6 max-w-full"
      />
    </section>
  );
}

export default Grafico;
