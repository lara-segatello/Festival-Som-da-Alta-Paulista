import foto1 from '../assets/download.jpg';
import foto2 from '../assets/image_48698463.jpg';
import foto3 from '../assets/image_ea12a019 (2).jpg';
import fotoCartaz from '../assets/5c858e25-2858-4b68-b8fe-f15b41bbebea.png';

export const evento = {
  nome: 'Festival Som da Alta Paulista',
  nomeCurto: 'SOM DA ALTA PAULISTA',
  edicao: 'EDIÇÃO 2027 • OESTE PAULISTA',
  slogan: 'Dois dias de música independente no coração do Oeste Paulista',
  data: '13 e 14 de março de 2027',
  horario: '16h às 23h',
  dataCompleta: '13 e 14 de março de 2027 • 16h às 23h',
  dataIsoInicio: '2027-03-13T16:00:00-03:00',
  local: 'Parque das Águas – Osvaldo Cruz/SP',
  coordenadas: '21°47\'51"S 50°52\'44"W',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parque+das+Aguas+Osvaldo+Cruz+SP',
  cartazImagem: fotoCartaz,
  sobreTitulo: 'Cultura independente feita no interior, sem filtros.',
  sobre:
    'O Festival Som da Alta Paulista reúne bandas autorais e independentes da região em dois palcos ao ar livre no Parque das Águas. Além dos shows, o espaço recebe feira de artesanato local, praça de food trucks e oficinas gratuitas para quem está começando a tocar. Toda a renda dos ingressos solidários é destinada integralmente ao projeto de música da escola municipal.',
  manifesto:
    'Construído por produtores, músicos e coletivos do Oeste Paulista, o festival ocupa o espaço público com som autoral, preço acessível e formação cultural.',

  numeros: [
    { quantidade: '02', item: 'Dias de Festival', detalhe: '13 e 14 de março' },
    { quantidade: '12', item: 'Bandas na Programação', detalhe: 'Cena autoral regional' },
    { quantidade: '100%', item: 'Cultura Local', detalhe: 'Feira, oficinas e food trucks' },
    { quantidade: 'R$ 30', item: 'Entrada Acessível', detalhe: 'Solidário + 1 kg de alimento' },
  ],

  ingressos: [
    {
      id: 'passaporte',
      tipo: 'Passaporte 2 Dias',
      valor: 'R$ 35',
      lote: 'Lote Único',
      destaque: true,
      descricao: 'Acesso completo aos dois dias de festival (13 e 14 de março), todos os palcos, feira e oficinas.',
      beneficios: [
        'Entrada nos dias 13 e 14/03',
        'Acesso aos 2 palcos ao ar livre',
        'Participação nas oficinas gratuitas',
      ],
    },
    {
      id: 'diario',
      tipo: 'Ingresso Diário',
      valor: 'R$ 20',
      lote: 'Avulso por Dia',
      destaque: false,
      descricao: 'Ideal para quem vem curtir um dia específico da programação no Parque das Águas.',
      beneficios: [
        'Escolha entre 13/03 ou 14/03',
        'Acesso aos 2 palcos do dia',
        'Feira de artesanato e praça gastronômica',
      ],
    },
    {
      id: 'solidario',
      tipo: 'Meia-Entrada / Solidário',
      valor: 'R$ 30',
      lote: 'Passaporte 2 Dias',
      destaque: false,
      descricao: 'Valor reduzido mediante entrega de 1 kg de alimento não perecível na portaria ou documento de meia.',
      beneficios: [
        'Válido para os 2 dias de festival',
        'Renda revertida à escola municipal',
        'Entrega de 1 kg de alimento na entrada',
      ],
    },
  ],

  faq: [
    {
      pergunta: 'Como chegar ao Parque das Águas em Osvaldo Cruz/SP?',
      resposta:
        'O Parque das Águas fica na região central de Osvaldo Cruz/SP, com acesso facilitado pela Rodovia Comandante João Ribeiro de Barros (SP-294). Há estacionamento gratuito ao lado do parque e pontos de desembarque para transporte por aplicativo.',
    },
    {
      pergunta: 'O que pode e o que não pode levar para o festival?',
      resposta:
        'Pode levar garrafa plástica transparente vazia (haverá pontos de hidratação), capa de chuva, protetor solar, canga e documento com foto. Não é permitida a entrada com garrafas de vidro, latas, bebidas alcoólicas externas, objetos cortantes ou fogos de artifício.',
    },
    {
      pergunta: 'Como funciona a alimentação e a feira no local?',
      resposta:
        'O festival conta com praça de alimentação com food trucks regionais, opções vegetarianas/veganas e bebidas a preços populares, além de feira de artesanato e economia criativa da Alta Paulista funcionando das 16h às 23h.',
    },
    {
      pergunta: 'Qual é a classificação indicativa?',
      resposta:
        'Classificação livre durante toda a programação. Menores de 16 anos devem estar acompanhados pelos pais ou responsável legal com documentação.',
    },
    {
      pergunta: 'Como funciona o ingresso Solidário e para onde vai a renda?',
      resposta:
        'O ingresso Solidário custa R$ 30 (passaporte para os dois dias) mediante doação de 1 kg de alimento não perecível na portaria. Toda a renda arrecadada com os ingressos solidários é destinada ao projeto de música da escola municipal de Osvaldo Cruz.',
    },
    {
      pergunta: 'Tem estacionamento no local?',
      resposta:
        'Sim, há área de estacionamento gratuito ao lado do Parque das Águas, sujeita à lotação. Recomendamos chegar cedo na abertura dos portões às 16h.',
    },
  ],
};

export const atracoes = [
  {
    id: 'vento-norte',
    nome: 'Vento Norte',
    estilo: 'Rock / Viola',
    dia: 'Sexta • 13/03',
    horario: '20h00',
    palco: 'Palco Principal',
    cidade: 'Tupã/SP',
    foto: foto1,
    descricao: 'Quarteto de Tupã que mistura a pressão do rock dos anos 90 com viola caipira distorcida.',
  },
  {
    id: 'brasa-do-oeste',
    nome: 'Brasa do Oeste',
    estilo: 'Post-Punk',
    dia: 'Sexta • 13/03',
    horario: '18h30',
    palco: 'Palco Parque',
    cidade: 'Presidente Prudente/SP',
    foto: foto2,
    descricao: 'Linhas de baixo secas, guitarras cortantes e letras sobre a vida nas cidades ferroviárias.',
  },
  {
    id: 'serra-eletrica',
    nome: 'Serra Elétrica',
    estilo: 'Stoner / Blues',
    dia: 'Sexta • 13/03',
    horario: '21h30',
    palco: 'Palco Principal',
    cidade: 'Marília/SP',
    foto: foto3,
    descricao: 'Power trio com afinação grave, improvisos longos e timbres analógicos de amplificador valvulado.',
  },
  {
    id: 'mare-mansa',
    nome: 'Maré Mansa',
    estilo: 'MPB / Folk',
    dia: 'Sábado • 14/03',
    horario: '19h00',
    palco: 'Palco Principal',
    cidade: 'Osvaldo Cruz/SP',
    foto: foto2,
    descricao: 'Duo de voz e violão com composições intimistas sobre o cotidiano e os rios do interior.',
  },
  {
    id: 'los-ipes',
    nome: 'Los Ipês',
    estilo: 'Indie Rock',
    dia: 'Sábado • 14/03',
    horario: '21h00',
    palco: 'Palco Principal',
    cidade: 'Adamantina/SP',
    foto: foto1,
    descricao: 'Banda de Adamantina conhecida pelos shows intensos, refrões diretos e energia de pista.',
  },
  {
    id: 'coral-jovem-oc',
    nome: 'Coral Jovem OC',
    estilo: 'Coral / Popular',
    dia: 'Sábado • 14/03',
    horario: '16h30',
    palco: 'Palco Parque',
    cidade: 'Osvaldo Cruz/SP',
    foto: foto3,
    descricao: 'Trinta vozes de estudantes da cidade em arranjos vocais para clássicos brasileiros e do pop.',
  },
];

export const programacao = {
  'Sexta • 13/03': [
    { horario: '16h00', atividade: 'Abertura dos portões e Feira de Artesanato', local: 'Área Convivência', tipo: 'Abertura' },
    { horario: '17h00', atividade: 'Oficina gratuita de percussão e ritmo', local: 'Espaço Oficinas', tipo: 'Oficina' },
    { horario: '18h30', atividade: 'Show: Brasa do Oeste', local: 'Palco Parque', tipo: 'Show' },
    { horario: '19h30', atividade: 'Intervalo • Discotecagem em vinil (Som Regional)', local: 'Praça Food Trucks', tipo: 'Intervalo' },
    { horario: '20h00', atividade: 'Show: Vento Norte', local: 'Palco Principal', tipo: 'Show' },
    { horario: '21h30', atividade: 'Show: Serra Elétrica', local: 'Palco Principal', tipo: 'Show' },
    { horario: '23h00', atividade: 'Encerramento do primeiro dia', local: 'Parque das Águas', tipo: 'Encerramento' },
  ],
  'Sábado • 14/03': [
    { horario: '16h00', atividade: 'Abertura dos portões, Feira e Food Trucks', local: 'Área Convivência', tipo: 'Abertura' },
    { horario: '16h30', atividade: 'Apresentação: Coral Jovem OC', local: 'Palco Parque', tipo: 'Show' },
    { horario: '17h45', atividade: 'Roda de conversa: Produção independente no interior', local: 'Espaço Oficinas', tipo: 'Oficina' },
    { horario: '19h00', atividade: 'Show: Maré Mansa', local: 'Palco Principal', tipo: 'Show' },
    { horario: '20h15', atividade: 'Intervalo • Troca de palco e projeções visuais', local: 'Palco Principal', tipo: 'Intervalo' },
    { horario: '21h00', atividade: 'Show de encerramento: Los Ipês', local: 'Palco Principal', tipo: 'Show' },
    { horario: '23h00', atividade: 'Encerramento oficial do Festival', local: 'Parque das Águas', tipo: 'Encerramento' },
  ],
};
