
import { useState } from "react";
import { evento } from "../data/evento";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    // 1. Verifica se o navegador aceita notificações
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    // 2. Solicita permissão ao usuário
    const permissao = await Notification.requestPermission();

    // 3. Verifica se a permissão foi concedida
    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    try {
      // 4. Aguarda o Service Worker ficar pronto
      const registro = await navigator.serviceWorker.ready;

      // 5. Mostra a notificação
      await registro.showNotification(evento.nome, {
        body: "Não se esqueça! O Festival Som da Alta Paulista acontece nos dias 13 e 14 de março de 2027!",
        icon: "/icone-192.png",
      });

      // 6. Atualiza a mensagem na página
      setMensagem("Lembrete ativado!");
    } catch (erro) {
      console.error("Erro ao ativar lembrete:", erro);
      setMensagem("Não foi possível ativar o lembrete.");
    }
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={ativarLembrete}
        className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-teal-800"
      >
        Me lembre do evento
      </button>

      {mensagem && (
        <p role="status" className="mt-2 text-sm font-medium text-white">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
