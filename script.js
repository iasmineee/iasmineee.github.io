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

    }, 1000); // Tempo do gif (1 segundo)
});
