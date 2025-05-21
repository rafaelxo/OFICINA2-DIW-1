// Componente do menu lateral:
export function gerarMenuLateral() {
    const menuLateral = document.getElementById('id-menu-lateral');

    menuLateral.innerHTML = `
      <nav class="classe-menu-lateral">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servico">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    `;
}

// Iniciar o componente:
gerarMenuLateral();