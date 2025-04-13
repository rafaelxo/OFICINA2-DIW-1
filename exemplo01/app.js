import { pi, somar, multiplicar } from "./biblioteca.js";

export function processar() {
    var resposta = `
     PI = ${pi} <br/>
     3 + 5 = ${somar(3, 5)} <br/>
     4 * 3 = ${multiplicar(4, 3)} <br/>
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
