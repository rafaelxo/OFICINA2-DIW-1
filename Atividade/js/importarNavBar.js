// Função para importar um arquivo CSS:
export function importarNavBar(caminhoDoArquivo) {
  let elementoLink = document.querySelector(`link[href="${caminhoDoArquivo}"]`);

  // Cria o elemento link, caso ele não exista:
  if (!elementoLink) {
    elementoLink = document.createElement('link');
    elementoLink.rel = 'stylesheet';
    elementoLink.href = caminhoDoArquivo;
    document.head.appendChild(elementoLink);
  }
}