// Exportando uma constante:
export const pi = 3.14159; 

// Exportando funcionalidades:
export function somar(a, b) {
    return a + b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function processar() {
    var resposta = `
     3 + 5 = ${somar(3, 5)} <br/>
     4 * 3 = ${multiplicar(4, 3)} <br/>
     PI = ${pi}
   `;

   document.writeln(resposta);
}

