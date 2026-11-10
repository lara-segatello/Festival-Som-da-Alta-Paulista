export const evento = {
    nome: 'Festival Som da Alta Paulista',
    slogan: 'Dois dias de música independente no coração do Oeste Paulista.',
    data: '13 e 14 de março de 2027',
    horario: "⏰ Das 16h às 23h",
    local: 'Parque as Águas - Osvaldo Cruz/SP',
    sobre: 'O Som da Alta Paulista reúne bandas independentes da região em dois palcos ao ar livre. Além dos shows, tem feira de artesanato, food trucks e oficinas gratuitas para quem começa a tocar. A renda dos ingressos solidários vai para o projeto de música da escola municipal.',

    numeros: [
        { quantidade: '12', item: 'bandas' },
        { quantidade: '2', item: 'palcos' },
        { quantidade: '4 mil', item: 'pessoas esperadas' }
    ],

    ingressos: [
        { tipo: 'Passaporte 2 dias', valor: 'R$ 35' },
        { tipo: 'Solidário (+1 kg de alimento)', valor: 'R$ 30' }
    ],


    faq: [
        { pergunta: "Qual é o local e horário do festival?", resposta: "O festival acontecerá no Parque as Águas - Osvaldo Cruz/SP, das 16h às 23h." },
        { pergunta: "Como funciona o ingresso Solidário?", resposta: "O ingresso Solidário possui valor reduzido de R$ 30 e exige a entrega de 1 kg de alimento não perecível na entrada do evento." },
        { pergunta: "Para onde vai a renda obtida com o festival?", resposta: "A renda arrecadada com os ingressos solidários será integralmente destinada ao projeto de música da escola municipal." },
        { pergunta: "Tem estacionamento no local?", resposta: "Sim, gratuito, ao lado do parque."}
    ]
};

export const programacao = [
    { dia: 'Sáb', horario: '16h', atividade: 'Abertura dos protões e feira de artesanato' },
    { dia: 'Sáb', horario: '17h', atividade: 'Oficina gratuita de percussão' },
    { dia: 'Sáb', horario: '20h', atividade: 'Show: Vento Norte' },
    { dia: 'Dom', horario: '16h', atividade: 'Apresentação do Coral Jovem OC' },
    { dia: 'Dom', horario: '19h', atividade: 'Show: Maré Mansa' },
    { dia: 'Dom', horario: '21h', atividade: 'Show de encerramento: Los Ipês' },
];

export const atracoes = [
    { nome: 'Vento Norte', estilo: 'Rock', descricao: 'Quarteto de Tupã que mistura o rock dos anos 90 com viola caipira. ' },
    { nome: 'Maré Mansa', estilo: 'MPB', descricao: 'Duo de voz e violão com composições sobre a vida no interior. ' },
    { nome: 'Los Ipês', estilo: 'Indie', descricao: 'Banda de Adamantina conhecida pelos shows cheios de energia. ' },
    { nome: 'Coral Jovem OC', estilo: 'Coral', descricao: 'Trinta vozes de estudantes da cidade em releituras de clássicos do pop. ' },
];
