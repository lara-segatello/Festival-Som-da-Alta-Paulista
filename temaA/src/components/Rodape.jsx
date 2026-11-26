import { Mail, ArrowUp } from 'lucide-react';
import { evento } from '../data/evento';

export default function Rodape() {
  return (
    <footer className="bg-[#111111] text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2A2A2A]">
          {/* Marca */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-block bg-[#E63946] text-[#F4F1EA] font-mono text-xs font-bold px-2.5 py-1 tracking-widest">
              EDIÇÃO 2027
            </div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none">
              {evento.nome}
            </h2>
            <p className="font-mono text-xs text-[#9E9A90] leading-relaxed max-w-sm">
              {evento.dataCompleta}
              <br />
              {evento.local}
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#9E9A90]">
              Navegação
            </h3>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-wider">
              <li>
                <a href="#sobre" className="hover:text-[#E63946] transition-colors duration-150">
                  Sobre o Festival
                </a>
              </li>
              <li>
                <a href="#lineup" className="hover:text-[#E63946] transition-colors duration-150">
                  Line-up
                </a>
              </li>
              <li>
                <a href="#programacao" className="hover:text-[#E63946] transition-colors duration-150">
                  Programação
                </a>
              </li>
              <li>
                <a href="#ingressos" className="hover:text-[#E63946] transition-colors duration-150">
                  Ingressos
                </a>
              </li>
              <li>
                <a href="#info-faq" className="hover:text-[#E63946] transition-colors duration-150">
                  Info & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Produção & Redes */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#9E9A90]">
              Contato da Produção
            </h3>
            <p className="font-mono text-xs text-[#F4F1EA]">
              producao@somdaaltapaulista.com.br
            </p>
            <p className="font-mono text-xs text-[#9E9A90]">
              Coletivo Cultural Alta Paulista — Osvaldo Cruz/SP
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Festival"
                className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center hover:border-[#E63946] hover:text-[#E63946] transition-colors duration-150"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube do Festival"
                className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center hover:border-[#E63946] hover:text-[#E63946] transition-colors duration-150"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" />
                  <polygon points="10 9 16 12 10 15 10 9" />
                </svg>
              </a>
              <a
                href="mailto:producao@somdaaltapaulista.com.br"
                aria-label="Enviar e-mail para a produção"
                className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center hover:border-[#E63946] hover:text-[#E63946] transition-colors duration-150"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-[#9E9A90]">
          <p>© 2027 Festival Som da Alta Paulista. Cultura Independente do Oeste Paulista.</p>
          <a
            href="#topo"
            className="inline-flex items-center gap-1.5 text-[#F4F1EA] hover:text-[#E63946] transition-colors duration-150"
          >
            Voltar ao topo
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
