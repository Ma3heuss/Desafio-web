function mostrar(texto){
    document.getElementById("resultado").innerHTML = texto;
}

// 1
function desafio1(){

    let numero = Number(prompt("Digite um número"));

    if(numero % 2 == 0){
        mostrar("Número Par");
    }else{
        mostrar("Número Ímpar");
    }

}

// 2
function desafio2(){

    let numero = Number(prompt("Digite um número"));

    let resultado = "";

    for(let i = 1; i <= 10; i++){

        resultado += numero + " x " + i + " = " + (numero * i) + "<br>";

    }

    mostrar(resultado);

}

// 3
function desafio3(){

    let idade = Number(prompt("Digite a idade"));

    if(idade <= 12){

        mostrar("Criança");

    }else if(idade <= 17){

        mostrar("Adolescente");

    }else if(idade <= 59){

        mostrar("Adulta");

    }else{

        mostrar("Idosa");

    }

}

// 4
function desafio4(){

    let nota = Number(prompt("Digite a nota"));

    if(nota >= 7){

        mostrar("Aprovado");

    }else if(nota >= 5){

        mostrar("Recuperação");

    }else{

        mostrar("Reprovado");

    }

}

// 5
function desafio5(){

    let n1 = Number(prompt("Digite o primeiro número"));
    let n2 = Number(prompt("Digite o segundo número"));

    if(n1 > n2){

        mostrar("Maior número: " + n1);

    }else{

        mostrar("Maior número: " + n2);

    }

}

// 6
function desafio6(){

    let resultado = "";

    for(let i = 1; i <= 50; i++){

        if(i % 2 == 0){

            resultado += i + " ";

        }

    }

    mostrar(resultado);

}

// 7
function desafio7(){

    let soma = 0;

    for(let i = 1; i <= 5; i++){

        soma += Number(prompt("Digite um número"));

    }

    let media = soma / 5;

    mostrar("Média: " + media);

}

// 8
function desafio8(){

    let palavra = prompt("Digite uma palavra");

    let contador = 0;

    for(let letra of palavra){

        if(
            letra == "a" ||
            letra == "e" ||
            letra == "i" ||
            letra == "o" ||
            letra == "u"
        ){

            contador++;

        }

    }

    mostrar("Quantidade de vogais: " + contador);

}

// 9
function desafio9(){

    let resultado = "";

    for(let numero = 2; numero <= 100; numero++){

        let primo = true;

        for(let i = 2; i < numero; i++){

            if(numero % i == 0){

                primo = false;

            }

        }

        if(primo){

            resultado += numero + " ";

        }

    }

    mostrar(resultado);

}

// 10
function desafio10(){

    let palavra = prompt("Digite uma palavra");

    let invertida = palavra.split("").reverse().join("");

    mostrar(invertida);

}

// 11
function desafio11(){

    let real = Number(prompt("Digite o valor em reais"));

    let dolar = real / 5;

    mostrar("Valor em dólar: " + dolar.toFixed(2));

}

// 12
function desafio12(){

    let numero = Number(prompt("Digite um número"));

    let a = 0;
    let b = 1;

    let resultado = "0 1 ";

    while(b <= numero){

        let proximo = a + b;

        resultado += proximo + " ";

        a = b;
        b = proximo;

    }

    mostrar(resultado);

}