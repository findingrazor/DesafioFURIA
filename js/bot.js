const chat = document.getElementById('chat');

function adicionarMensagemBot(texto) {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.margin = '10px';
    container.style.alignSelf = 'flex-start';

    const img = document.createElement('img');
    img.className = 'icone bot';
    img.src = 'images/chaticon.png';
    img.alt = "icon";
    img.width = 40;
    img.height = 40;
    img.style.borderRadius = '50%';

    const msg = document.createElement('div');
    msg.className = 'message bot';
    msg.textContent = `${texto}`;

    container.appendChild(img);
    container.appendChild(msg);
    chat.appendChild(container);
    chat.scrollTop = chat.scrollHeight;
}

function adicionarMensagemUsuario(texto) {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.margin = '10px';
    container.style.alignSelf = 'flex-end';
    container.style.flexDirection = 'row-reverse';

    const img = document.createElement('img');
    img.className = 'icone user';
    img.src = 'images/usericon.png';
    img.alt = "icon";
    img.width = 40;
    img.height = 40;
    img.style.borderRadius = '50%';

    const msg = document.createElement('div');
    msg.className = 'message user';
    msg.textContent = `${texto}`;

    container.appendChild(img);
    container.appendChild(msg);
    chat.appendChild(container);
    chat.scrollTop = chat.scrollHeight;
}

function mostrarLineUp() {
    const lineup = [
        {
            nome: "FalleN",
            funcao: "IGL | AWP",
            imagem: "images/FalleN.png"
        },
        {
            nome: "KSCERATO",
            funcao: "Rifler | Closer",
            imagem: "images/KSCERATO.png"
        },
        {
            nome: "yuurih",
            funcao: "Rifler | All-rounder",
            imagem: "images/yuurih.png"
        },
        {
            nome: "chelo",
            funcao: "Entry Fragger",
            imagem: "images/chelo.png"
        },
        {
            nome: "arT",
            funcao: "Support | Lurker | Entry híbrido",
            imagem: "images/arT.png"
        }
    ];

    adicionarMensagemBot("BOA! BORA VER A CARA DESSE TIME! O LINE-UP ATUAL DA FURIA É:");

    const container = document.createElement('div');
        container.className = 'message bot';
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.gap = '10px';
        container.style.marginLeft = '55px';
    lineup.forEach(jogador => {
        const img = document.createElement('img');
        img.src = jogador.imagem;
        img.alt = jogador.nome;
        img.width = 60;
        img.height = 60;
        img.style.borderRadius = '50%';

        const texto = document.createElement('div');
        texto.innerHTML = `<b>${jogador.nome}</b><br><small>${jogador.funcao}</small>`;

        container.appendChild(img);
        container.appendChild(texto);       
    });
    chat.appendChild(container);
    chat.scrollTop = chat.scrollHeight;
    adicionarBotoes(['VOLTAR']);
}


function partidas() {
    const historico = [
        {
            campeonato: "[PGL Bucharest 2025]",
            placar: "FURIA 0 x 2 TheMongolZ",
            modo: "MD3"
        },
        {
            campeonato: "[PGL Bucharest 2025]",
            placar: "FURIA 0 x 2 Virtus.pro",
            modo: "MD3"
        },
        {
            campeonato: "[PGL Bucharest 2025]",
            placar: "FURIA 1 x 2 Complexity",
            modo: "MD3"
        },
        {
            campeonato: "[PGL Bucharest 2025]",
            placar: "FURIA 2 x 0 Apogee",
            modo: "MD3"
        },
        {
            campeonato: "[PGL Bucharest 2025]",
            placar: "FURIA 1 x 2 M80",
            modo: "MD3"
        }
    ]

    adicionarMensagemBot("BELEZA! AQUI ESTÁ O NOSSO HISTÓRICO DAS ÚLTIMAS 5 PARTIDAS: ");

    const container = document.createElement('div');
    container.className = 'message bot';
    container.style.display = 'column';
    container.style.alignItems = 'center';
    container.style.gap = '10px';
    container.style.marginLeft = '55px';
    historico.forEach(jogo => {
        const texto = document.createElement('div');
        texto.innerHTML = `<i>${jogo.campeonato}</i> | ${jogo.placar} | <b>${jogo.modo}</b>\n`;

        container.appendChild(texto);
    });
    chat.appendChild(container);
    adicionarBotoes(['VOLTAR']);
    chat.scrollTop = chat.scrollHeight;
}

function aovivo(){
    const estatisticas = [
        "SIM, TEM! JOGO AO VIVO CONTRA NAVI!",
        "PLACAR: FURIA 12 x 11 NAVI",
        "MAPA: MIRAGE| SÉRIE: 1-0 PARA FURIA (MD3)",
        "ROUND 22 | FURIA COM $7.800 POR JOGADOR",
        "KSCERATO: 22/8/4 | FalleN: 15/10/6 | chelo: 12/10/8 | yuurih: 9/9/13 | arT: 6/8/10",
        "DESTAQUES: FalleN VENCEU 1v3 CLUTCH NO ROUND 18!"
    ];
   
    const container = document.createElement('div');
    container.className = 'message bot';
    container.style.display = 'column';
    container.style.alignItems = 'center';
    container.style.gap = '10px';
    container.style.marginLeft = '55px';
    estatisticas.forEach(estatistica => {
        const texto = document.createElement('div');
        texto.textContent = estatistica;
        container.appendChild(texto);
    });
    chat.appendChild(container);
    chat.scrollTop = chat.scrollHeight;
    adicionarBotoes(['VOLTAR']);
}


function resposta(opcao) {
    adicionarMensagemUsuario(opcao);

    switch (opcao.toLowerCase()) {
        case 'jogos':
            setTimeout(() => {
                adicionarMensagemBot("CERTO! VOCÊ QUER SABER OS RESULTADOS DE JOGOS ANTERIORES OU SABER OS PRÓXIMOS JOGOS?");
                adicionarBotoes(['RESULTADOS', 'PRÓXIMOS JOGOS']);
            }, 500);
            break;

        case 'resultados':
            setTimeout(() => {
                partidas()
            }, 500);
            break;

        case 'próximos jogos':
            setTimeout(() => {
                adicionarMensagemBot("VAMO SE PREPARAR! ESSE SÃO NOSSOS PRÓXIMOS JOGOS:");
                adicionarMensagemBot("[PGL Astana 2025] FURIA vs The MongolZ | MD3 — 10/05 às 05h");
                adicionarBotoes(['VOLTAR']);
            }, 500);
            break;

        case 'time':
            setTimeout(() => {
                mostrarLineUp()
            }, 500);
            break;

        case 'live status':
            setTimeout(() => {
                adicionarMensagemBot("BELEZA! DEIXA EU VER SE TEM ALGUM JOGO NO MOMENTO...");
                const temJogo = Math.random() < 0.5;

                if (temJogo) {
                    aovivo();
                } else {
                    adicionarMensagemBot("POXA, PARECE QUE NÃO TEM NENHUM JOGO ROLANDO AGORA...");
                    adicionarBotoes(['VOLTAR']);
                }
            }, 1000);
            break;

        case 'produtos':
            setTimeout(() => {
                adicionarMensagemBot("CERTO! VEM ENTRAR PRO ESTILO DA FURIA: ");
                adicionarBotoes(['LOJA', 'FAQ', 'SITE']);
            }, 500);
            break;

        case 'loja':
            window.open('https://www.furia.gg/produtos', '_blank');
            adicionarBotoes(['VOLTAR']);
            break;

        case 'faq':
            window.open('https://www.furia.gg/faq', '_blank');
            adicionarBotoes(['VOLTAR']);
            break;

        case 'site':
            window.open('https://www.furia.gg', '_blank');
            adicionarBotoes(['VOLTAR']);
            break;

        case 'voltar':
            adicionarMensagemBot("ESTAMOS DE VOLTA FURIOSO, ESCOLHE UMA OPÇÃO: ");    
            adicionarBotoes(['JOGOS', 'TIME', 'LIVE STATUS', 'PRODUTOS']);
            break;

        default:
            adicionarMensagemBot("DESCULPE, NÃO ENTENDI, ESCOLHA UMA DAS OPÇÕES DO MENU: ");
            adicionarBotoes(['JOGOS', 'TIME', 'LIVE STATUS', 'PRODUTOS']);
            break;
    }
}

function adicionarBotoes(opcoes) {
    const container = document.createElement('div');
    container.className = 'opcoes';

    opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.className = 'botoes';
        botao.textContent = opcao;
        botao.onclick = () => {
            container.remove();
            resposta(opcao);
        };
        container.appendChild(botao);
    });

    chat.appendChild(container);
    chat.scrollTop = chat.scrollHeight;
}

setTimeout(() => {
    adicionarMensagemBot("FALA FURIOSO! COMO POSSO TE AJUDAR HOJE? ");
    adicionarBotoes(['JOGOS', 'TIME', 'LIVE STATUS', 'PRODUTOS']);
}, 500);