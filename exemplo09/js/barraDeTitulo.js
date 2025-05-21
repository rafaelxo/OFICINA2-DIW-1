// Função para carregar a folha de estilo CSS:
import { importarFolhaDeEstilo } from './importarFolhaDeEstilo.js'; 

// Importa os estilos do arquivo externo
importarFolhaDeEstilo('./css/barraDeTitulo.css');

// Componente da barra de título:
export function gerarBarraDeTitulo() {
  const barraDeTitulo = document.getElementById('id-barra-de-titulo');
  
  barraDeTitulo.innerHTML = `
    <header class="classe-barra-de-titulo">
      <h1>Minha Página Modular</h1>
    </header>
  `;
}

// Iniciar o componente:
gerarBarraDeTitulo();
