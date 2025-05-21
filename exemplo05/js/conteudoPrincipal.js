// Importa a função utilitária:
import { adicionarAoElementoStyle } from './elementoStyle.js'; 

// Adiciona os estilos da barra de título ao elemento <style>:
adicionarAoElementoStyle(`
  /* Conteúdo principal */
  .classe-conteudo-principal {
    flex: 1; /* Faz com que o conteúdo principal ocupe todo o espaço restante disponível dentro do flexbox. */
    padding: 1rem;
    min-height: 88%;
    background-color: yellow;
    border: 10px solid orange;
  }
`);

// Componente do conteúdo principal:
export function gerarConteudoPrincipal() {
  const conteudoPrincipal = document.getElementById('id-conteudo-principal');

  conteudoPrincipal.innerHTML = `
    <main class="classe-conteudo-principal">
      <h2>Bem-vindo à Página Modular!</h2>
        <p>
           Este é um exemplo de como dividir componentes em arquivos JavaScript 
           usando import e export.
        </p>
        <p>
           Ao usar type="module", você precisa executar o HTML em um
           servidor local (como o Live Server no VSCode), pois navegadores
           bloqueiam módulos para arquivos locais por motivos de segurança.
        </p>
    </main>
  `;
}

// Iniciar o componente:
gerarConteudoPrincipal();
