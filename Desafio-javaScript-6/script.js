let opcoes = ["Pedra", "Papel", "Tesoura"];

let pontosJogador = 0;
let pontosMaquina = 0;

function jogar(jogador){

    let numero = Math.floor(Math.random() * 3);

    let maquina = opcoes[numero];

    let resultado = document.getElementById("resultado");

    if(jogador == maquina){

        resultado.innerHTML =
        "Empate! Máquina escolheu " + maquina;

    }
    else if(
        (jogador == "Pedra" && maquina == "Tesoura") ||
        (jogador == "Papel" && maquina == "Pedra") ||
        (jogador == "Tesoura" && maquina == "Papel")
    ){

        resultado.innerHTML =
        "Você venceu! Máquina escolheu " + maquina;

        pontosJogador++;
    }
    else{

        resultado.innerHTML =
        "Máquina venceu! Máquina escolheu " + maquina;

        pontosMaquina++;
    }

    document.getElementById("placar").innerHTML =
    "Jogador: " + pontosJogador +
    " | Máquina: " + pontosMaquina;
}