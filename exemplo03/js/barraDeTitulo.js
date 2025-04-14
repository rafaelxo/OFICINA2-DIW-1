// Adicionar estilos diretamente no módulo:
function adicionarEstilos() {
  const estilo = document.createElement('style');

  estilo.textContent = `
    /* Barra de título */
    .classe-barra-de-titulo {
      background-color: #007BFF;
      color: white;
      padding: 1rem;
      text-align: center;
      border: 3px solid orange;
    }
  `;
  document.head.appendChild(estilo);
}

// Componente da barra de título:
export function gerarBarraDeTitulo() {
  adicionarEstilos();

  const barraDeTitulo = document.getElementById('id-barra-de-titulo');
  
  barraDeTitulo.innerHTML = `
    <header class="classe-barra-de-titulo">
      <h1>Minha Página Modular</h1>
    </header>
  `;
}

// Inicializa o componente
gerarBarraDeTitulo();