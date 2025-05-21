// Função para adicionar regras a um único elemento <style>:
export function adicionarAoElementoStyle(regras) {
    // Verifica se o elemento <style> já existe:
    let elementoStyle = document.querySelector('style[data-estilo-global]');

    // Cria o elemento <style> se não existir:
    if (!elementoStyle) {
        elementoStyle = document.createElement('style');
        elementoStyle.setAttribute('data-estilo-global', 'true');
        document.head.appendChild(elementoStyle);
    }

    // Adiciona as regras ao conteúdo do elemento <style>:
    elementoStyle.textContent += regras;
}
