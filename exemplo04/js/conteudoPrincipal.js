// Adicionar estilos diretamente no módulo:
function adicionarEstilos() {
  const estilo = document.createElement('style');

  estilo.textContent = `
    /* Conteúdo principal */
    .classe-conteudo-principal {
        flex: 1; /* Faz com que o conteúdo principal ocupe todo o espaço restante disponível dentro do flexbox. */
        padding: 1rem;
        min-height: 88%;
        background-color: yellow;
        border: 10px solid orange;
    }
  `;

  document.head.appendChild(estilo);
}

// Componente do conteúdo principal:
export function gerarConteudoPrincipal() {
  adicionarEstilos();

  const conteudoPrincipal = document.getElementById('id-conteudo-principal');

  conteudoPrincipal.innerHTML = `
    <main class="classe-conteudo-principal">
      <h2>Bem-vindo à Página Modular!</h2>
      <p>Este é um exemplo de como dividir componentes em arquivos JavaScript usando import e export.</p>
    </main>
  `;
}

// Iniciar o componente:
gerarConteudoPrincipal();
