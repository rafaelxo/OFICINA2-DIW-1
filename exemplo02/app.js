import { pi, somar, multiplicar } from "./biblioteca.js";

function processar(x, y) {
    var resposta = `
     PI = ${pi} <br/>
     ${x} + ${y} = ${somar(x, y)} <br/>
     ${x} * ${y} = ${multiplicar(x, y)} <br/>
   `;

    document.getElementById("resp").innerHTML = resposta;
}

// Tornar a função processar() acessível globalmente:
window.executar = processar;

/*
 * A linha acima também pode ser substituída pela linha abaixo:
 * OBS: neste caso, remover o evento onclick="executar()" do botão.
 */
// Adiciona o evento de clique ao botão:
//document.getElementById('botao-executar').addEventListener('click', processar);
