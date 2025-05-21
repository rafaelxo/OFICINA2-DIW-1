// Função para adicionar regras a um único elemento <style>:
export function adicionarAoElementoStyle(regras) {
    // Verifica se o elemento <style> com o id '#estilo-global' já existe:
    let elementoStyle = document.querySelector('#estilo-global');

    // Cria o elemento <style> se não existir:
    if (!elementoStyle) {
        elementoStyle = document.createElement('style');

        // Define o id do elemento <style>:
        elementoStyle.id = 'estilo-global';
        
        document.head.appendChild(elementoStyle);
    }

    // Adiciona as regras ao conteúdo do elemento <style>:
    elementoStyle.textContent += regras;
}
