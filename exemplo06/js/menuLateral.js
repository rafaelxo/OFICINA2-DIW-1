// Importa a função utilitária:
import { adicionarAoElementoStyle } from './elementoStyle.js'; 

// Adiciona os estilos da barra de título ao elemento <style>:
adicionarAoElementoStyle(`
  /* Menu lateral */
  .classe-menu-lateral {
    flex-grow: 1; /* Faz com que o menu lateral ocupe toda a altura disponível dentro do flexbox. */
    background-color: #f4f4f4;
    width: 5rem;
    padding: 1rem;
    border: 3px solid orange;
  }
     
  .classe-menu-lateral ul {
    list-style: none; /* Remove os marcadores padrão das listas. */
  }
    
  .classe-menu-lateral li {
    margin: 1rem 0;
  }
    
  .classe-menu-lateral a {
    text-decoration: none; /* Remove o sublinhado dos links. */
    color: #333;
  }
    
  .classe-menu-lateral a:hover {
    text-decoration: underline; /* Adiciona sublinhado ao link quando o cursor está sobre ele. */
    color: #007BFF;
  }
`);

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
