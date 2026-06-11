const idJogos = document.querySelector("#jogos")

const informacoesJogos = [
    { nome: "Termo", url: "https://term.ooo", img: "imgs/termo_icon.png", estado: "Bloqueado"},
    { nome: "Termão", url: "https://www.playtermao.com/", img: "https://www.playtermao.com/img/icon-192.png", estado: "Desbloqueado"},
    { nome: "Contexto", url: "https://contexto.me/pt/", img: "https://contexto.me/favicon.ico", estado: "Desbloqueado"},
    { nome: "Conexo", url: "https://conexo.ws/pt/", img: "https://conexo.ws/favicon.ico", estado: "Desbloqueado"},
    { nome: "Framed", url: "https://framed.wtf", img: "https://framed.wtf/icons/apple-touch-icon.png", estado: "Desbloqueado"},
    { nome: "MinuteCryptic", url: "https://www.minutecryptic.com", img: "https://www.minutecryptic.com/icon.ico?73f70e8b5bf80676", estado: "Desbloqueado"},
    { nome: "Enigmático", url: "https://enigmati.co", img: "https://enigmati.co/images/logo_white_bg.svg", estado: "Desbloqueado"},
    { nome: "City Guesser", url: "https://virtualvacation.us/guess", img: "https://virtualvacation.us/static/favicon-32x32.png", estado: "Desbloqueado"},
    { nome: "Would You Rather", url: "https://wouldyourather.app/pt/s/o7fas", img: "https://wouldyourather.app/apple-touch-icon.png", estado: "Desbloqueado"},
    { nome: "LinkedIn Patches", url: "https://www.linkedin.com/games/patches/", img: "https://static.licdn.com/aero-v1/sc/h/evf03pqebsvaxzmgmp8f9vkuv", estado: "Desbloqueado"},
    { nome: "LinkedIn Queens", url: "https://www.linkedin.com/games/queens/", img: "https://static.licdn.com/aero-v1/sc/h/1dh0cplk4wovhl3l3ycws7izl", estado: "Desbloqueado"},
    { nome: "LinkedIn Tango", url: "https://www.linkedin.com/games/tango/", img: "https://static.licdn.com/aero-v1/sc/h/2wzw4qk5wlo4x4570vtx1dggn", estado: "Desbloqueado"},
    { nome: "LinkedIn Mini-Sudoku", url: "https://www.linkedin.com/games/mini-sudoku/", img: "https://static.licdn.com/aero-v1/sc/h/6nflnl3tlil95zu7bjkqq3huc", estado: "Desbloqueado"},
    { nome: "LinkedIn CrossClimb", url: "https://www.linkedin.com/games/crossclimb/", img: "https://static.licdn.com/aero-v1/sc/h/4mjo14pdidwm233ks38d99107", estado: "Desbloqueado"},
    { nome: "LinkedIn PinPoint", url: "https://www.linkedin.com/games/pinpoint/", img: "https://static.licdn.com/aero-v1/sc/h/b2fslta43f1zpvth6emgiej0e", estado: "Desbloqueado"},
    { nome: "LinkedIn Wend", url: "https://www.linkedin.com/games/wend/", img: "https://static.licdn.com/aero-v1/sc/h/aacdzbfj2x7q2jh0cum7cglwf", estado: "Desbloqueado"},
    { nome: "Palavra 500", url: "https://palavra500.devjunior.cloud", img: "https://palavra500.devjunior.cloud/favicon.ico?favicon.160999e9.ico", estado: "Desbloqueado"},
    { nome: "Fields", url: "https://inkwellgames.com/games/fields?tutorial=true", img: "imgs/fields_icon.png", estado: "Bloqueado"},
    { nome: "Stars", url: "https://inkwellgames.com/games/stars?day=2026-05-26", img: "imgs/stars_icon.png", estado: "Bloqueado"},
    { nome: "Star Struck", url: "https://www.netflix.com/tudum/puzzled/starstruck/daily", img: "imgs/starstruck_icon.png", estado: "Bloqueado"},
    { nome: "16 Words Sedecordle", url: "https://sedecordlegame.org", img: "https://sedecordlegame.org/favicon-32x32.png", estado: "Bloqueado"},
    { nome: "Nerdle", url: "https://nerdle.com", img: "https://nerdlegame.com/favicon.png?002", estado: "Desbloqueado"},
    { nome: "Wordle", url: "https://www.nytimes.com/games/wordle/index.html", img: "https://www.nytimes.com/games-assets/v2/metadata/wordle-apple-touch-icon.png?v=", estado: "Desbloqueado"},
    { nome: "Bandle", url: "https://bandle.app/menu", img: "https://bandle.app/favicon.ico", estado: "Desbloqueado"},
    { nome: "TierMaker", url: "https://tiermaker.com", img: "https://tiermaker.com/images/icons/apple-icon-180x180.png", estado: "Desbloqueado"}
]

let arrayFinal = informacoesJogos

resetarValores()
mostrarValores()

function mostrarValores() {
        arrayFinal.forEach(item => {
            
            let cor;

            if (item.estado == "Bloqueado"){
                cor = "red";
            } else {
                cor = "white";
            }
            idJogos.innerHTML += 
            `<div id="box">
                <img class="imagem" src="${item.img}">

                <div id="info-jogo">
                    <h1 style="color: ${cor};">${item.nome}</h1>
                    <p style="color: ${cor};">${item.estado}</p>
                </div>

                <div id="box-unir">
                    <a target="_blank" href="${item.url}">Acessar</a>
                </div>
            </div>`
        })
    }

function resetarValores() {
    idJogos.innerHTML = ""
}