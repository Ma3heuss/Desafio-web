let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let contador = 0;

function verificar() {

    let numero = Number(document.getElementById("numero").value);

    contador++;

    if(numero > numeroSecreto) {

        document.getElementById("mensagem").innerHTML =
        "Muito alto";

    }

    else if(numero < numeroSecreto) {

        document.getElementById("mensagem").innerHTML =
        "Muito baixo";

    }

    else {

        document.getElementById("mensagem").innerHTML =
        "Acertou!";

    }

    document.getElementById("tentativas").innerHTML =
    "Tentativas: " + contador;

}