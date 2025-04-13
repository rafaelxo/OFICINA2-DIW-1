import { pi, somar, multiplicar } from "./biblioteca.js";

function processar() {
    var resposta = `
     3 + 5 = ${somar(3, 5)} <br/>
     4 * 3 = ${multiplicar(4, 3)} <br/>
     PI = ${pi}
   `;

   document.getElementById("resp").innerHTML = resposta;
}

// Tornar a função processar() acessível globalmente:
window.executar = processar;

// A linha acima também pode ser substituída pela linha abaixo:
// Adiciona o evento de clique ao botão:
document.getElementById('botao-executar').addEventListener('click', processar);