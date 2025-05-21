// Componente da barra de título:
export function gerarBarraDeTitulo() {
  const barraDeTitulo = document.getElementById('id-barra-de-titulo');
  
  barraDeTitulo.innerHTML = `
    <header class="classe-barra-de-titulo">
      <h1>Minha Página Modular: Exemplo 02</h1>
    </header>
  `;
}

// Iniciar o componente:
gerarBarraDeTitulo();