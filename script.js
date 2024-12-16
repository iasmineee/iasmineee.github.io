// Função para alterar a parte de cima
function changeTop(image) {
    document.getElementById('top-img').src = image;
}

// Função para alterar a parte de baixo
function changeBottom(image) {
    document.getElementById('bottom-img').src = image;
}

// Função para mostrar a área de conteúdo após o gif
window.onload = function () {
    setTimeout(function () {
        document.body.classList.add('show-content');
    }, 1750);  // 1 segundo de GIF + 0.75 segundos de transição para o fundo
};
