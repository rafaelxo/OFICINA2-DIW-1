// Componente do conteúdo principal:
export function gerarConteudoPrincipal() {
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