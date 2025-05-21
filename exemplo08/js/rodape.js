// Importa a função utilitária:
import { adicionarAoElementoStyle } from './elementoStyle.js';

// Componente do rodapé:
export function gerarRodape() {
  // Adiciona os estilos da barra de título ao elemento <style>:
  adicionarAoElementoStyle(`
    /* Rodapé */
    .classe-rodape {
      background-color: #333;
      color: #c9c9c9;
      text-align: center;
      padding: 1rem 0;
      border: 3px solid orange;
    }
  `);

  const rodape = document.getElementById('id-rodape');

  rodape.innerHTML = `
      <footer class="classe-rodape">
        <p>&copy; 2025 Minha Página Modular. Todos os direitos reservados.</p>
      </footer>
    `;
}

// Iniciar o componente:
gerarRodape();
