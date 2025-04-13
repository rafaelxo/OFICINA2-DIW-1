// Adiciona estilos diretamente no módulo
function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .title-bar {
        background-color: #007BFF;
        color: white;
        padding: 10px 20px;
        text-align: center;
      }
    `;
    document.head.appendChild(style);
}

// Componente da barra de título
export function renderTitleBar() {
    addStyles();
    const titleBar = document.getElementById('title-bar');
    titleBar.innerHTML = `
      <header class="title-bar">
        <h1>Minha Página Modular</h1>
      </header>
    `;
}

// Inicializa o componente
renderTitleBar();