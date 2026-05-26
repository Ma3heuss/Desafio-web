function calcular() {

    let peso = Number(document.getElementById("peso").value);

    let altura = Number(document.getElementById("altura").value);

    let imc = peso / (altura * altura);

    document.getElementById("resultado").innerHTML =
    "IMC: " + imc.toFixed(2);

    if(imc < 18.5) {

        document.getElementById("classificacao").innerHTML =
        "Classificação: Magreza";

    }

    else if(imc <= 24.9) {

        document.getElementById("classificacao").innerHTML =
        "Classificação: Normal";

    }

    else if(imc <= 29.9) {

        document.getElementById("classificacao").innerHTML =
        "Classificação: Sobrepeso";

    }

    else {

        document.getElementById("classificacao").innerHTML =
        "Classificação: Obesidade";

    }

}