import { useEffect, useState } from 'react';
import { X, CheckCircle2, Download, Calendar, Bell, Ticket } from 'lucide-react';
import { evento } from '../data/evento';

function gerarArquivoIcs() {
  const conteudoIcs = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Festival Som da Alta Paulista//PT-BR',
    'BEGIN:VEVENT',
    'UID:fsap-2027@somdaaltapaulista.com.br',
    'DTSTAMP:20261126T120000Z',
    'DTSTART;TZID=America/Sao_Paulo:20270313T160000',
    'DTEND;TZID=America/Sao_Paulo:20270314T230000',
    `SUMMARY:${evento.nome}`,
    `DESCRIPTION:${evento.slogan} - ${evento.sobre}`,
    `LOCATION:${evento.local}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([conteudoIcs], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'festival-som-alta-paulista-2027.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

const GOOGLE_CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  `&text=${encodeURIComponent(evento.nome)}` +
  '&dates=20270313T190000Z/20270315T020000Z' +
  `&details=${encodeURIComponent(evento.slogan)}` +
  `&location=${encodeURIComponent(evento.local)}`;

export default function ModalIngresso({ modoInicial, tipoInicial, onFechar }) {
  const [modo, setModo] = useState(modoInicial || 'ingresso');
  const [tipoIngresso, setTipoIngresso] = useState(tipoInicial || 'passaporte');
  const [diaEscolhido, setDiaEscolhido] = useState('Sexta • 13/03');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [codigoConfirmacao, setCodigoConfirmacao] = useState('');
  const [statusLembrete, setStatusLembrete] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onFechar();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onFechar]);

  const ingressoSelecionado =
    evento.ingressos.find((i) => i.id === tipoIngresso) || evento.ingressos[0];

  function handleSubmitIngresso(e) {
    e.preventDefault();
    const sufixo = Math.floor(1000 + Math.random() * 9000);
    setCodigoConfirmacao(`FSAP-2027-${sufixo}`);
  }

  async function ativarNotificacaoNavegador() {
    if (!('Notification' in window)) {
      setStatusLembrete('Seu navegador não suporta notificações push. Use o arquivo .ics ou Google Calendar.');
      return;
    }

    const permissao = await Notification.requestPermission();
    if (permissao !== 'granted') {
      setStatusLembrete('Permissão negada. Você pode baixar o arquivo .ics ou adicionar ao Google Calendar.');
      return;
    }

    try {
      if ('serviceWorker' in navigator) {
        const registro = await navigator.serviceWorker.ready;
        await registro.showNotification(evento.nome, {
          body: 'Lembrete ativado! 13 e 14 de março de 2027 no Parque das Águas – Osvaldo Cruz/SP.',
          icon: '/icone-192.png',
        });
      }
      setStatusLembrete('Notificação de lembrete ativada com sucesso.');
    } catch {
      setStatusLembrete('Notificação ativada. Recomendamos também salvar na sua agenda.');
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-titulo"
      className="fixed inset-0 z-50 bg-[#111111]/90 flex items-center justify-center p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onFechar();
      }}
    >
      <div className="bg-[#F4F1EA] text-[#111111] border border-[#111111] w-full max-w-lg">
        {/* Topo do Modal */}
        <div className="flex items-center justify-between border-b border-[#111111] px-6 py-4 bg-[#111111] text-[#F4F1EA]">
          <span id="modal-titulo" className="font-mono text-xs uppercase tracking-widest">
            {modo === 'ingresso' ? 'Reserva de Ingresso' : 'Lembrete do Festival'}
          </span>
          <button
            type="button"
            onClick={onFechar}
            aria-label="Fechar janela"
            className="p-1 text-[#F4F1EA] hover:text-[#E63946] transition-colors duration-150 cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Abas do Modal */}
        <div className="grid grid-cols-2 border-b border-[#111111] divide-x divide-[#111111]">
          <button
            type="button"
            onClick={() => {
              setModo('ingresso');
              setCodigoConfirmacao('');
            }}
            className={`py-3 px-4 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer ${
              modo === 'ingresso'
                ? 'bg-[#E63946] text-[#F4F1EA] font-bold'
                : 'bg-[#F4F1EA] text-[#111111] hover:bg-[#E7E3D9]'
            }`}
          >
            <Ticket className="w-4 h-4" aria-hidden="true" />
            Garantir Ingresso
          </button>
          <button
            type="button"
            onClick={() => setModo('lembrete')}
            className={`py-3 px-4 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer ${
              modo === 'lembrete'
                ? 'bg-[#E63946] text-[#F4F1EA] font-bold'
                : 'bg-[#F4F1EA] text-[#111111] hover:bg-[#E7E3D9]'
            }`}
          >
            <Bell className="w-4 h-4" aria-hidden="true" />
            Salvar na Agenda
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6 sm:p-8">
          {modo === 'ingresso' ? (
            codigoConfirmacao ? (
              <div className="space-y-6">
                <div className="border border-[#111111] bg-[#111111] text-[#F4F1EA] p-6">
                  <div className="flex items-center gap-3 text-[#E63946] mb-3">
                    <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                    <span className="font-mono text-xs uppercase tracking-widest font-bold">
                      Pré-reserva Confirmada
                    </span>
                  </div>
                  <h3 className="font-display text-3xl uppercase tracking-tight mb-2">
                    {ingressoSelecionado.tipo}
                  </h3>
                  <p className="font-mono text-xs text-[#9E9A90]">
                    Código: <strong className="text-[#F4F1EA]">{codigoConfirmacao}</strong>
                  </p>
                </div>

                <div className="font-mono text-xs space-y-2 border-l-2 border-[#E63946] pl-4 text-[#111111]/85">
                  <p>Titular: <strong>{nome}</strong></p>
                  <p>E-mail: <strong>{email}</strong></p>
                  {tipoIngresso === 'diario' && (
                    <p>Dia selecionado: <strong>{diaEscolhido}</strong></p>
                  )}
                  <p>Valor: <strong>{ingressoSelecionado.valor}</strong></p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={gerarArquivoIcs}
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-[#111111] px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#111111] hover:text-[#F4F1EA] transition-colors duration-150 cursor-pointer"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    Baixar .ics
                  </button>
                  <button
                    type="button"
                    onClick={onFechar}
                    className="flex-1 bg-[#111111] text-[#F4F1EA] px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#E63946] transition-colors duration-150 cursor-pointer"
                  >
                    Concluir
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitIngresso} className="space-y-5">
                <div>
                  <label
                    htmlFor="tipo-ingresso"
                    className="block font-mono text-xs uppercase tracking-wider font-semibold mb-2"
                  >
                    Modalidade do Ingresso
                  </label>
                  <select
                    id="tipo-ingresso"
                    value={tipoIngresso}
                    onChange={(e) => setTipoIngresso(e.target.value)}
                    className="w-full border border-[#111111] bg-white px-3.5 py-3 text-sm font-medium text-[#111111]"
                  >
                    {evento.ingressos.map((ing) => (
                      <option key={ing.id} value={ing.id}>
                        {ing.tipo} — {ing.valor}
                      </option>
                    ))}
                  </select>
                </div>

                {tipoIngresso === 'diario' && (
                  <div>
                    <label
                      htmlFor="dia-ingresso"
                      className="block font-mono text-xs uppercase tracking-wider font-semibold mb-2"
                    >
                      Escolha o Dia
                    </label>
                    <select
                      id="dia-ingresso"
                      value={diaEscolhido}
                      onChange={(e) => setDiaEscolhido(e.target.value)}
                      className="w-full border border-[#111111] bg-white px-3.5 py-3 text-sm font-medium text-[#111111]"
                    >
                      <option value="Sexta • 13/03">Sexta • 13/03/2027</option>
                      <option value="Sábado • 14/03">Sábado • 14/03/2027</option>
                    </select>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="nome-completo"
                    className="block font-mono text-xs uppercase tracking-wider font-semibold mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    id="nome-completo"
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full border border-[#111111] bg-white px-3.5 py-3 text-sm text-[#111111] placeholder:text-[#111111]/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email-contato"
                    className="block font-mono text-xs uppercase tracking-wider font-semibold mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    id="email-contato"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@exemplo.com.br"
                    className="w-full border border-[#111111] bg-white px-3.5 py-3 text-sm text-[#111111] placeholder:text-[#111111]/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E63946] text-[#F4F1EA] font-mono text-xs font-semibold uppercase tracking-wider px-6 py-4 hover:bg-[#111111] transition-colors duration-150 cursor-pointer"
                >
                  Confirmar Reserva — {ingressoSelecionado.valor}
                </button>
              </form>
            )
          ) : (
            <div className="space-y-5">
              <div>
                <h3 className="font-display text-3xl uppercase tracking-tight mb-2">
                  Não Perca a Data
                </h3>
                <p className="text-sm text-[#111111]/80 leading-relaxed">
                  Adicione o <strong>{evento.nome}</strong> ({evento.dataCompleta}) diretamente à sua agenda ou ative um alerta no navegador.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={GOOGLE_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#111111] text-[#F4F1EA] font-mono text-xs font-semibold uppercase tracking-wider px-6 py-4 hover:bg-[#E63946] transition-colors duration-150"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Adicionar ao Google Calendar
                </a>

                <button
                  type="button"
                  onClick={() => {
                    gerarArquivoIcs();
                    setStatusLembrete('Arquivo .ics baixado! Abra-o para salvar na sua agenda.');
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#111111] bg-transparent text-[#111111] font-mono text-xs font-semibold uppercase tracking-wider px-6 py-4 hover:bg-[#111111] hover:text-[#F4F1EA] transition-colors duration-150 cursor-pointer"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Baixar Arquivo .ics (Apple / Outlook)
                </button>

                <button
                  type="button"
                  onClick={ativarNotificacaoNavegador}
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#111111]/30 bg-transparent text-[#111111] font-mono text-xs font-semibold uppercase tracking-wider px-6 py-3 hover:border-[#111111] transition-colors duration-150 cursor-pointer"
                >
                  <Bell className="w-4 h-4" aria-hidden="true" />
                  Ativar Notificação no Navegador
                </button>
              </div>

              {statusLembrete && (
                <p
                  role="status"
                  className="font-mono text-xs border-l-2 border-[#E63946] pl-3 py-1 text-[#111111]"
                >
                  {statusLembrete}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
