// Função para importar um arquivo CSS:
export function importarFolhaDeEstilo(caminhoDoArquivo) {
  let elementoLink = document.querySelector(`link[href="${caminhoDoArquivo}"]`);

  // Cria o elemento link, caso ele não exista:
  if (!elementoLink) {
    elementoLink = document.createElement('link');
    elementoLink.rel = 'stylesheet';
    elementoLink.href = caminhoDoArquivo; // Define o caminho do arquivo CSS.
    document.head.appendChild(elementoLink);
  }
}