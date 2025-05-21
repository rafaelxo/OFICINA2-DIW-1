// Adicionar estilos diretamente no módulo:
function adicionarEstilos() {
  const estilo = document.createElement('style');
  
  estilo.textContent = `
    /* Rodapé */
    .classe-rodape {
        background-color: #333;
        color: #c9c9c9;
        text-align: center;
        padding: 1rem 0;
        border: 3px solid orange;
    }
  `;
  
  document.head.appendChild(estilo);
}

// Componente do rodapé:
export function gerarRodape() {
    adicionarEstilos();

    const rodape = document.getElementById('id-rodape');

    rodape.innerHTML = `
      <footer class="classe-rodape">
        <p>&copy; 2025 Minha Página Modular. Todos os direitos reservados.</p>
      </footer>
    `;
}

// Iniciar o componente:
gerarRodape();
