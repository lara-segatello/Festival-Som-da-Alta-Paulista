# Festival Som da Alta Paulista — Landing Page Editorial

Landing page oficial do **Festival Som da Alta Paulista**, um evento de música independente realizado nos dias **13 e 14 de março de 2027, das 16h às 23h**, no **Parque das Águas – Osvaldo Cruz/SP**.

## Para que serve este projeto

O projeto tem como objetivo apresentar o festival de forma clara, acessível e com identidade visual autêntica — fugindo de layouts genéricos — para cumprir quatro funções principais:

1. **Divulgar o evento e sua proposta cultural:** contextualizar a cena independente do Oeste Paulista, a feira de artesanato, as oficinas gratuitas e o caráter solidário (renda dos ingressos solidários revertida ao projeto de música da escola municipal).
2. **Organizar o Line-up e a Programação:** permitir que o público filtre as bandas por dia e consulte o cronograma completo de horários, palcos, oficinas e intervalos.
3. **Facilitar a reserva de ingressos e lembretes:** oferecer comparação entre modalidades (*Passaporte 2 Dias*, *Ingresso Diário* e *Meia-Entrada / Solidário*) com modal interativo para pré-reserva, download de arquivo `.ics`, adição direta ao Google Calendar e notificação no navegador.
4. **Orientar o público na chegada ao evento:** reunir localização com coordenadas, rota no Google Maps e respostas rápidas para dúvidas frequentes (estacionamento, alimentação, classificação indicativa e itens permitidos).

---

## Direção Visual e Estética

O design segue uma linha **editorial / suíça / brutalismo refinado**, inspirada em cartazes impressos de festivais independentes:

- **Paleta de cores sólida:** fundo principal em off-black (`#111111`), blocos de destaque em papel/off-white (`#F4F1EA`) e cor de destaque vibrante (`#E63946`).
- **Geometria rígida:** cantos retos (`border-radius: 0px`), grades estruturadas e linhas divisórias finas (`1px solid`).
- **Tipografia combinada:** `Anton` (display condensada em caixa alta para títulos), `Inter` (leitura de textos) e `IBM Plex Mono` (datas, horários, coordenadas e metadados).
- **Micro-interações secas:** transições rápidas (`150ms`), fotos em alto contraste P&B que ganham cor no hover e ícones vetoriais minimalistas (`lucide-react`), sem emojis ou sombras difusas.

---

## Tecnologias Utilizadas

- **React 19** (`react`, `react-dom`)
- **Vite 8** (bundler e servidor de desenvolvimento)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Lucide React** (ícones vetoriais)
- **ESLint** (padronização e qualidade de código)

---

## Estrutura do Projeto

```text
temaA/
├── public/
│   ├── favicon.svg
│   ├── icone-192.png / icone-512.png
│   ├── manifest.webmanifest
│   └── sw.js
├── src/
│   ├── assets/                 # Imagens locais do cartaz e das bandas
│   ├── components/
│   │   ├── Cabecalho.jsx       # Navbar fixa + menu mobile em tela cheia
│   │   ├── Hero.jsx            # Grid assimétrico + countdown em tempo real + cartaz
│   │   ├── Sobre.jsx           # Manifesto cultural + grid de números grandes
│   │   ├── Atracoes.jsx        # Line-up com filtros por dia
│   │   ├── CartaoAtracao.jsx   # Card de banda com foto P&B -> cor no hover
│   │   ├── Programacao.jsx     # Cronograma detalhado com sistema de abas
│   │   ├── Inscricao.jsx       # Cards comparativos de ingressos
│   │   ├── ModalIngresso.jsx   # Modal de reserva + .ics + Google Calendar + push
│   │   ├── InfoFaq.jsx         # Cartão de localização/rota + FAQ em acordeão
│   │   └── Rodape.jsx          # Links rápidos, produção, redes sociais e créditos
│   ├── data/
│   │   └── evento.js           # Dados centralizados do festival, bandas, horários e FAQ
│   ├── App.jsx                 # Composição principal e controle do modal
│   ├── index.css               # Tokens de tema, fontes e regras base
│   └── main.jsx                # Ponto de entrada e registro do Service Worker
├── index.html                  # Carregamento das fontes Google e metadados
└── package.json
```

---

## Etapas de Funcionamento e Recursos Implementados

### 1. Navegação Fixa e Menu Mobile (`Cabecalho.jsx`)
- Barra superior fixa com logo tipográfico à esquerda, links de navegação no centro e botão quadrado **Garantir Ingresso** à direita.
- No mobile, o botão hambúrguer abre um menu em tela cheia com bloqueio de scroll e fechamento pela tecla `Escape`.

### 2. Hero Editorial e Contagem Regressiva (`Hero.jsx`)
- Layout dividido em 12 colunas: à esquerda, título responsivo (`clamp`), subtítulo, data/local em fonte monoespaçada e botões de ação; à direita, contador regressivo em tempo real (`Dias`, `Horas`, `Min`, `Seg`) até `13/03/2027 às 16h` e cartaz estilizado.

### 3. Seção "Sobre o Festival" (`Sobre.jsx`)
- Bloco em papel (`#F4F1EA`) com contraste invertido apresentando o manifesto do festival e 4 indicadores de destaque (`02` Dias, `12` Bandas, `100%` Cultura Local, `R$ 30` Entrada Acessível).

### 4. Line-up Interativo e Programação em Abas (`Atracoes.jsx` e `Programacao.jsx`)
- **Line-up:** filtros clicáveis (*Todos*, *Sexta • 13/03*, *Sábado • 14/03*) e cards com estilo musical, cidade, palco e horário.
- **Programação:** abas alternando os cronogramas completos de sexta e sábado (abertura dos portões, oficinas, intervalos e shows).

### 5. Ingressos e Modal Funcional (`Inscricao.jsx` e `ModalIngresso.jsx`)
- Comparação entre **Passaporte 2 Dias (`R$ 35`)**, **Ingresso Diário (`R$ 20`)** e **Meia-Entrada / Solidário (`R$ 30`)**.
- Modal com duas abas:
  - **Garantir Ingresso:** seleção de modalidade/dia, preenchimento de nome e e-mail e geração imediata de código de pré-reserva (`FSAP-2027-XXXX`).
  - **Salvar na Agenda:** botão direto para Google Calendar, download de arquivo `.ics` compatível com Apple Calendar/Outlook e ativação de notificação via Service Worker.

### 6. Informações Práticas, Mapa e FAQ (`InfoFaq.jsx`)
- Bloco lateral com coordenadas (`21°47'51"S 50°52'44"W`), endereço, horários e link direto para rota no Google Maps.
- Acordeão interativo acessível (`aria-expanded`, `aria-controls`) com dúvidas sobre acesso, itens permitidos, alimentação, classificação indicativa, ingresso solidário e estacionamento.

---

## Como Rodar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior recomendada)
- **npm**

### Passo a passo

1. **Acesse a pasta do projeto:**
   ```bash
   cd temaA
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O Vite exibirá no terminal o endereço local (geralmente `http://localhost:5173`).

4. **Valide o código com ESLint:**
   ```bash
   npm run lint
   ```

5. **Gere o build de produção:**
   ```bash
   npm run build
   ```
   Os arquivos otimizados serão gerados na pasta `dist/`.

6. **Visualize o build de produção localmente (opcional):**
   ```bash
   npm run preview
   ```

---

## Acessibilidade e Boas Práticas

- Skip link (`Pular para o conteúdo`) visível no foco via teclado.
- Indicadores de foco nítidos (`:focus-visible`) em toda a interface.
- Respeito a `prefers-reduced-motion` para usuários com sensibilidade a movimento.
- Semântica HTML (`header`, `main`, `section`, `article`, `footer`) e atributos ARIA em abas, acordeão e modais.
