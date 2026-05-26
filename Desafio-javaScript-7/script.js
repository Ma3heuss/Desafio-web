function organizar(){

    let texto = document.getElementById("numeros").value;

    let numeros = texto.split(",");

    for(let i = 0; i < numeros.length; i++){

        numeros[i] = Number(numeros[i]);
    }

    let crescente = [...numeros];
    let decrescente = [...numeros];

    crescente.sort(function(a, b){
        return a - b;
    });

    decrescente.sort(function(a, b){
        return b - a;
    });

    document.getElementById("crescente").innerHTML =
    "Crescente: " + crescente;

    document.getElementById("decrescente").innerHTML =
    "Decrescente: " + decrescente;
}