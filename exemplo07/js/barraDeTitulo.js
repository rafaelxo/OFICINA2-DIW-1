// Importa a função utilitária:
import { adicionarAoElementoStyle } from './elementoStyle.js'; 

// Adiciona os estilos da barra de título ao elemento <style>:
adicionarAoElementoStyle(`
  /* Barra de título */
  .classe-barra-de-titulo {
    background-color: #007BFF;
    color: white;
    padding: 1rem;
    text-align: center;
    border: 3px solid orange;
  }
`);

// Componente da barra de título:
export function gerarBarraDeTitulo() {
  const barraDeTitulo = document.getElementById('id-barra-de-titulo');
  
  barraDeTitulo.innerHTML = `
    <header class="classe-barra-de-titulo">
      <h1>Minha Página Modular</h1>
    </header>
  `;
}

// Iniciar o componente:
gerarBarraDeTitulo();
