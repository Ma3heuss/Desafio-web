function sacar(){

    let valor = parseInt(document.getElementById("valor").value);

    let resultado = document.getElementById("resultado");

    let notas = [100, 50, 20, 10, 5];

    let texto = "";

    for(let i = 0; i < notas.length; i++){

        let qtd = Math.floor(valor / notas[i]);

        valor = valor % notas[i];

        if(qtd > 0){
            texto += qtd + " nota(s) de R$" + notas[i] + "<br>";
        }
    }

    resultado.innerHTML = texto;
}