import { pi, somar, multiplicar } from "./biblioteca.js";

function processar() {
    var resposta = `
     3 + 5 = ${somar(3, 5)} <br/>
     4 * 3 = ${multiplicar(4, 3)} <br/>
     PI = ${pi}
   `;

   document.writeln(resposta);
}
