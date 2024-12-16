// Aguarda 1 segundo para exibir o conteúdo e as barras
window.addEventListener('load', () => {
    // Exibe o GIF por 1 segundo
    setTimeout(() => {
        // Remove a tela de carregamento (GIF)
        document.getElementById('loading-screen').style.display = 'none';
        
        // Exibe o conteúdo principal
        document.querySelector('.main-content').style.display = 'block';
        
        // Exibe as barras
        document.body.classList.add('loaded'); // A barra superior e inferior aparecem

        // Mostra o texto na barra superior
        document.getElementById('top-bar-text').style.display = 'block'; // Mostra o texto
    }, 1000); // Tempo do gif (1 segundo)
});

// Espera o tempo de exibição do GIF e então mostra o conteúdo
window.onload = function() {
    setTimeout(function() {
        document.body.classList.add('show-content'); // Adiciona a classe que mostra o conteúdo
    }, 1750); // Tempo de 1,75s (1 segundo para o gif + 0,75 segundos)
};
