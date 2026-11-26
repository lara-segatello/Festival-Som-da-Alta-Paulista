import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { evento } from '../data/evento';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#lineup', label: 'Line-up' },
  { href: '#programacao', label: 'Programação' },
  { href: '#ingressos', label: 'Ingressos' },
  { href: '#info-faq', label: 'Info & FAQ' },
];

export default function Cabecalho({ onAbrirModal }) {
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    if (menuAberto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuAberto]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && menuAberto) {
        setMenuAberto(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuAberto]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#111111] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo Tipográfico */}
          <a
            href="#topo"
            className="flex items-center gap-3 group shrink-0"
            aria-label={evento.nome}
          >
            <span className="bg-[#E63946] text-[#F4F1EA] font-mono text-xs font-bold px-2 py-1 tracking-widest">
              FSAP
            </span>
            <span className="font-display text-lg sm:text-xl tracking-wide uppercase text-[#F4F1EA] group-hover:text-[#E63946] transition-colors duration-150">
              Som da Alta Paulista
            </span>
          </a>

          {/* Navegação Central Desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 font-mono text-xs uppercase tracking-wider text-[#F4F1EA]/80 hover:text-[#F4F1EA] hover:bg-[#1E1E1E] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ação Direita + Hambúrguer Mobile */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onAbrirModal('ingresso')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#E63946] text-[#F4F1EA] font-mono text-xs font-semibold uppercase tracking-wider px-4 py-2.5 border border-[#E63946] hover:bg-[#F4F1EA] hover:text-[#111111] hover:border-[#F4F1EA] transition-colors duration-150 cursor-pointer"
            >
              Garantir Ingresso
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setMenuAberto(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={menuAberto}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-[#2A2A2A] text-[#F4F1EA] hover:border-[#E63946] hover:text-[#E63946] transition-colors duration-150 cursor-pointer"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Tela Cheia */}
      {menuAberto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 z-50 bg-[#111111] text-[#F4F1EA] flex flex-col justify-between p-6 overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E63946]">
              {evento.edicao}
            </span>
            <button
              type="button"
              onClick={() => setMenuAberto(false)}
              aria-label="Fechar menu"
              className="inline-flex items-center justify-center w-11 h-11 border border-[#2A2A2A] text-[#F4F1EA] hover:border-[#E63946] hover:text-[#E63946] transition-colors duration-150 cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Menu mobile" className="my-8 flex flex-col divide-y divide-[#2A2A2A] border-y border-[#2A2A2A]">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuAberto(false)}
                className="py-4 flex items-baseline justify-between group"
              >
                <span className="font-display text-4xl uppercase tracking-tight text-[#F4F1EA] group-hover:text-[#E63946] transition-colors duration-150">
                  {link.label}
                </span>
                <span className="font-mono text-xs text-[#9E9A90]">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="space-y-4">
            <div className="font-mono text-xs text-[#9E9A90] space-y-1">
              <p className="text-[#F4F1EA]">{evento.dataCompleta}</p>
              <p>{evento.local}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setMenuAberto(false);
                onAbrirModal('ingresso');
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#E63946] text-[#F4F1EA] font-mono text-sm font-semibold uppercase tracking-wider px-6 py-4 hover:bg-[#F4F1EA] hover:text-[#111111] transition-colors duration-150 cursor-pointer"
            >
              Garantir Ingresso
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
