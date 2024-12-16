// Espera o tempo de exibição do GIF e então mostra o conteúdo
window.onload = function() {
    setTimeout(function() {
        document.body.classList.add('show-content'); // Adiciona a classe que mostra o conteúdo
    }, 1750); // Tempo de 1,75s (1 segundo para o gif + 0,75 segundos)
};
