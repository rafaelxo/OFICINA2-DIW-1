// Função para carregar a folha de estilo CSS:
import { importarFolhaDeEstilo } from './importarFolhaDeEstilo.js'; 

// Importa os estilos do arquivo externo
importarFolhaDeEstilo('./css/rodape.css');

// Componente do rodapé:
export function gerarRodape() {
    const rodape = document.getElementById('id-rodape');

    rodape.innerHTML = `
      <footer class="classe-rodape">
        <p>&copy; 2025 Minha Página Modular. Todos os direitos reservados.</p>
      </footer>
    `;
}

// Iniciar o componente:
gerarRodape();
