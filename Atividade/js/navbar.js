// Função para carregar a folha de estilo CSS:
import { importarNavBar } from './importarNavBar.js';

// Importa os estilos do arquivo externo
importarNavBar('./css/navbar.css');

// Componente da barra de título:
export function gerarNavBar() {
    const navegacao = document.getElementById('sidebar');

    navegacao.innerHTML = `
    <div class="logo">
            <img src="./img/logo-site.png" alt="Time Awards Logo" style="height: 40px; vertical-align: middle;" />
            <span style="margin-left: 10px; font-weight: bold;">TimeAwards</span>
        </div>
        <nav>
            <ul>
                <li><a href="#" class="active">Dashboard</a></li>
                <li><a href="#">Add</a></li>
                <li><a href="#">All Apps</a></li>
                <li><a href="#">Insights</a></li>
                <li><a href="#">Get Pro</a></li>
                <li><a href="#">Help</a></li>
            </ul>
        </nav>
        `;
}

// Iniciar o componente:
gerarNavBar();