function calcular() {

    let valor1 = Number(document.getElementById("valor1").value);

    let valor2 = Number(document.getElementById("valor2").value);

    document.getElementById("soma").innerHTML =
    "Soma: " + (valor1 + valor2);

    document.getElementById("subtracao").innerHTML =
    "Subtração: " + (valor1 - valor2);

    document.getElementById("multiplicacao").innerHTML =
    "Multiplicação: " + (valor1 * valor2);

    document.getElementById("divisao").innerHTML =
    "Divisão: " + (valor1 / valor2);

}