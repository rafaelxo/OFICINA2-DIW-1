// Componente do rodapé
export function gerarRodape() {
    const rodape = document.getElementById('id-rodape');

    rodape.innerHTML = `
      <footer class="classe-rodape">
        <p>&copy; 2025 Minha Página Modular. Todos os direitos reservados.</p>
      </footer>
    `;
}

// Inicializa o componente
gerarRodape();