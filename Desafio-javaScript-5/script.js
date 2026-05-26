let segundos = 0;
let minutos = 0;

let intervalo;

function iniciar(){

    intervalo = setInterval(function(){

        segundos++;

        if(segundos == 60){
            segundos = 0;
            minutos++;
        }

        atualizar();

    }, 1000);
}

function pausar(){
    clearInterval(intervalo);
}

function resetar(){

    clearInterval(intervalo);

    segundos = 0;
    minutos = 0;

    atualizar();
}

function atualizar(){

    let tempo = document.getElementById("tempo");

    let min = minutos < 10 ? "0" + minutos : minutos;

    let seg = segundos < 10 ? "0" + segundos : segundos;

    tempo.innerHTML = min + ":" + seg;
}