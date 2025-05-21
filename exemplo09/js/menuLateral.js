// Função para carregar a folha de estilo CSS:
import { importarFolhaDeEstilo } from './importarFolhaDeEstilo.js'; 

// Importa os estilos do arquivo externo
importarFolhaDeEstilo('./css/menuLateral.css');

// Componente do menu lateral:
export function gerarMenuLateral() {
  const menuLateral = document.getElementById('id-menu-lateral');

  menuLateral.innerHTML = `
    <nav class="classe-menu-lateral">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  `;
}

// Iniciar o componente:
gerarMenuLateral();
