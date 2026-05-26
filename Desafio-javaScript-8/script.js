function analisar(){

    let frase = document.getElementById("frase").value;

    let texto = frase.toLowerCase();

    texto = texto.replaceAll(" ", "");

    let invertida = texto.split("").reverse().join("");

    let quantidadeCaracteres = texto.length;

    let quantidadePalavras = frase.split(" ").length;

    document.getElementById("caracteres").innerHTML =
    "Caracteres: " + quantidadeCaracteres;

    document.getElementById("palavras").innerHTML =
    "Palavras: " + quantidadePalavras;

    document.getElementById("invertida").innerHTML =
    "Invertida: " + invertida;

    if(texto == invertida){

        document.getElementById("resultado").innerHTML =
        "É um palíndromo";
    }
    else{

        document.getElementById("resultado").innerHTML =
        "Não é um palíndromo";
    }
}